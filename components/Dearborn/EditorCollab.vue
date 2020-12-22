<template>
  <div>
    <div class="editor" v-if="editor">
      <!-- <MenuBar class="editor__menu" :editor="editor" /> -->
      <EditorContent class="editor__content" :editor="editor" />

      <div class="editor__bottom-bar" v-if="characterCount || wordCount">
        <div v-if="wordCount">{{ wordCount }} Words</div>
        <div v-if="characterCount">{{ characterCount }} Characters</div>
      </div>
    </div>
  </div>
</template>

<script>
import * as Y from 'yjs'
import * as _ from 'lodash'
import { WebsocketProvider } from 'y-websocket'
import { IndexeddbPersistence } from 'y-indexeddb'
import deepEqual from 'deep-equal'
import {
  Editor,
  EditorContent,
  defaultExtensions,
} from '@tiptap/vue-starter-kit'
import Collaboration from '@tiptap/extension-collaboration'
import CollaborationCursor from '@tiptap/extension-collaboration-cursor'
import Highlight from '@tiptap/extension-highlight'
import Focus from '@tiptap/extension-focus'
import { htmlToText } from 'html-to-text'
import wordCounter from 'words-count'

import MenuBar from './MenuBar.vue'

const getRandomElement = (list) => {
  return list[Math.floor(Math.random() * list.length)]
}

export default {
  middleware: 'auth',
  props: ['document'],
  components: {
    EditorContent,
    MenuBar,
  },

  data() {
    return {
      user: this.$store.state.auth.user,
      currentUser: {
        ...this.$store.state.auth.user,
        color: this.getRandomColor(),
      },
      indexdb: null,
      editor: null,
      users: [],
      status: 'connecting',
      wordCount: 0,
      characterCount: 0,
    }
  },

  mounted() {
    const ydoc = new Y.Doc()
    const provider = new WebsocketProvider(
      'ws://localhost:8080/',
      this.document.title,
      ydoc
    )

    provider.on('status', (event) => {
      this.status = event.status
    })

    this.indexdb = new IndexeddbPersistence(this.document.title, ydoc)

    this.editor = new Editor({
      autofocus: true,
      extensions: [
        ...defaultExtensions().filter(
          (extension) => extension.config.name !== 'history'
        ),
        Highlight,
        Focus.configure({
          className: 'has-focus',
          nested: true,
        }),
        Collaboration.configure({
          provider,
        }),
        CollaborationCursor.configure({
          provider,
          user: this.currentUser,
          onUpdate: (users) => {
            // if users acutally changed
            if (!deepEqual(users, this.users)) {
              // dispatch update to the store
              this.$store.commit('updateCollabUsers', {
                title: this.document.title,
                users,
              })
            }
            this.users = this.$store.getters.getCollabUsers(this.document.title)
          },
        }),
      ],
      onUpdate: () => {
        const html = this.editor.getHTML()
        const plain = htmlToText(html)
        const words = wordCounter(plain)
        this.characterCount = plain
          .replace(/\n/g, '') // remove multi-lines
          .replace(' ', '').length // remove spaces
        this.wordCount = words
      },
    })
  },

  methods: {
    setName() {
      const name = (window.prompt('Name') || '').trim().substring(0, 32)

      if (name) {
        return this.updateCurrentUser({
          name,
        })
      }
    },

    updateCurrentUser(attributes) {
      this.currentUser = { ...this.currentUser, ...attributes }
      this.editor.chain().focus().user(this.currentUser).run()
    },

    getRandomColor() {
      return getRandomElement(['#A975FF', '#9DEF8F'])
    },
  },

  beforeDestroy() {
    this.editor.destroy()
  },
}
</script>

<style lang="scss">
.has-focus {
}

.editor {
  color: black;
  background-color: white;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  background: #ffffff;
  border: 1px solid #e2e2e2;
  box-shadow: 0px 4px 4px 3px rgba(218, 218, 218, 0.25);
  border-radius: 4px;

  &__menu {
    display: flex;
    flex-wrap: nowrap;
    padding: 0.25rem;
    border-bottom: 1px solid rgba(black, 0.1);
  }

  &__content {
    padding: 1rem;
    overflow: auto;

    &::-webkit-scrollbar-thumb {
      background-color: rgba(black, 0.1);
    }
  }

  &__bottom-bar {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    white-space: nowrap;
    padding: 0.5rem;
    border-top: 1px solid rgba(black, 0.1);
    font-size: 0.8rem;

    div {
      border: 1px solid rgba(black, 0.1);

      border-radius: 1rem;
      padding: 0.1rem 0.5rem;

      & + div {
        margin-left: 1ch;
      }
    }
  }
}

/* Give a remote user a caret */
.collaboration-cursor__caret {
  position: relative;
  margin-left: -1px;
  margin-right: -1px;
  border-left: 1px solid black;
  border-right: 1px solid black;
  word-break: normal;
  pointer-events: none;
}

/* Render the username above the caret */
.collaboration-cursor__label {
  position: absolute;
  top: -1.4em;
  left: -1px;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  user-select: none;
  color: black;
  padding: 0.1rem 0.3rem;
  border-radius: 3px 3px 3px 0;
  white-space: nowrap;
}

/* Basic editor styles */
.ProseMirror {
  min-height: 80vh;

  > * + * {
    margin-top: 0.75em;
  }

  ul,
  ol {
    padding: 0 1rem;
  }

  code {
    background-color: rgba(#616161, 0.1);
    color: #616161;
  }

  pre {
    background: #0d0d0d;
    color: #fff;
    font-family: 'JetBrainsMono', monospace;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;

    code {
      color: inherit;
      background: none;
      font-size: 0.8rem;
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }

  hr {
    margin: 1rem 0;
  }

  blockquote {
    padding-left: 1rem;
    border-left: 2px solid rgba(#0d0d0d, 0.1);
  }

  ul[data-type='taskList'] {
    list-style: none;
    padding: 0;

    li {
      display: flex;
      align-items: center;

      > input {
        flex: 0 0 auto;
        margin-right: 0.5rem;
      }
    }
  }
}
</style>

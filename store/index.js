import * as _ from 'lodash'

export const state = () => ({
  shop: {
    products: [],
  },
  dearborn: {
    documents: {}
  }
})

export const mutations = {
  updateCollabUsers(state, {title, users}) {
    state.dearborn.documents = {
      ...state.dearborn.documents,
      [title]: {
        users: _.uniqBy(users, 'name')
      }
    }
  },
  addShopItem(state, payload) {
    state.shop.products.push(payload)
  },
  removeShopItem(state, index) {
    state.shop.products.splice(index, 1)
  },
}

export const getters = {
  getCollabUsers: (state) => (title) => {
    const storeDocument = _.get(state.dearborn.documents, [title])

    if (storeDocument) {
      return storeDocument.users
    }

    return []
  }
}

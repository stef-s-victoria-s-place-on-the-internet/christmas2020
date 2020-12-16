<template>
  <div class="references">
    <div class="reference">
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam cum, eveniet officia optio et voluptatum esse omnis modi recusandae facilis enim nam maxime dicta soluta quod iure eaque dolor ad?
      </p>
    </div>
    <div class="reference">
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam cum, eveniet officia optio et voluptatum esse omnis modi recusandae facilis enim nam maxime dicta soluta quod iure eaque dolor ad?
      </p>
    </div>
    <div class="reference">
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam cum, eveniet officia optio et voluptatum esse omnis modi recusandae facilis enim nam maxime dicta soluta quod iure eaque dolor ad?
      </p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.references {
  display: flex;
  flex-direction: column;

  .reference {
    background: #FFFFFF;
    border: 1px solid #E2E2E2;
    box-shadow: 0px 4px 4px 3px rgba(218, 218, 218, 0.25);
    border-radius: 4px;
    padding: 1rem 1rem;

    & + .reference {
      margin-top: 1rem;
    }

    &:hover {
      border: 1px solid #C5F1EC;
      box-shadow: 0px 4px 4px 3px rgba(197, 241, 236, 0.21);
      cursor: pointer;
    }
  }
}

</style>

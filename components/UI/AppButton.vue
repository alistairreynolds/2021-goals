<template>
  <button
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'AppButton'
}
</script>

<style scoped lang="scss">

button{
  display: inline-block;
  border-radius: 4px;
  text-decoration: none;
  padding: 10px 30px;
  border: 1px solid;
  border-color: var(--col-green);
  color: var(--col-green);
  &:hover {
    color: #fff;
    background-color: var(--col-green);
  }

  &.purple {
    border-color: var(--col-purple);
    color: var(--col-purple);
    &:hover {
      color: #fff;
      background-color: var(--col-purple);
    }
  }
  &.red {
    border-color: var(--col-red);
    color: var(--col-red);
    &:hover {
      color: #fff;
      background-color: var(--col-red);
    }
  }
}

</style>

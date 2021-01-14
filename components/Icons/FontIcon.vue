<template>
  <svg
    v-bind="$attrs"
    class="w-4 h-4 font-icon"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    v-on="$listeners"
  >
    <slot />
  </svg>
</template>

<script>
export default {
  name: 'FontIcon'
}
</script>

<style scoped lang="scss">

</style>

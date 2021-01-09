<template>
  <div class="input-wrapper">
    <label :for="_uid">
      <slot />
    </label>
    <input :id="_uid" type="number">
  </div>
</template>

<script>
export default {
  name: 'AppStepper',
}
</script>

<style scoped lang="scss">

</style>

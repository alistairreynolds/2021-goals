<template>
  <div class="input-wrapper">
    <label :for="_uid" class="flex flex-col">
      <slot />
    </label>
    <input :id="_uid" type="checkbox">
  </div>
</template>

<script>
export default {
  name: 'AppCheckbox'
}
</script>

<style scoped lang="scss">

  input[type=checkbox]{
    width: auto;
  }

</style>

<template>
  <div class="input-wrapper">
    <label :for="_uid" class="flex flex-col">
      <slot />
    </label>
    <input
      :id="_uid"
      type="checkbox"
      :checked="checked"
      value="1"
      @change="onChange"
    >
  </div>
</template>

<script>
export default {
  name: 'AppCheckbox',
  props: {
    checked: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  methods: {
    onChange () {
      // this.checked = !this.checked
      this.$emit('input', !this.checked)
    }
  }
}
</script>

<style scoped lang="scss">

  input[type=checkbox]{
    width: auto;
  }

</style>

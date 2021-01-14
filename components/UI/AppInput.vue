<template>
  <div class="input-wrapper">
    <label :for="_uid">
      <slot />
    </label>
    <input
      :id="_uid"
      v-bind="$attrs"
      :value="value"
      @input="$emit('input', $event.target.value)"
    >
  </div>
</template>

<script>
export default {
  name: 'AppInput',
  props: {
    label: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    }
  },
  mounted () {
    document.querySelector('input').focus()
  }
}
</script>

<style scoped lang="scss">
.input-wrapper {

}
</style>

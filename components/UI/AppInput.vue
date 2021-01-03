<template>
  <div>
    <label>
      <slot />
      <input
        v-bind="$attrs"
        :placeholder="label"
        :value="value"
        @input="$emit('input', $event.target.value)"
      ></label>
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
  }
}
</script>

<style scoped lang="scss">

  input{
    border: 1px solid var(--col-green)
  }

</style>

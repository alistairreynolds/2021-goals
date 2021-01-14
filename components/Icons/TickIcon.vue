<template>
  <FontIcon v-bind="$attrs" class="w-6 h-6 font-icon mt-0" v-on="$listeners">
    <path
      :class="checked ? 'checked' : ''"
      fill-rule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clip-rule="evenodd"
    />
  </FontIcon>
</template>

<script>
export default {
  name: 'UntickedIcon',
  props: {
    checked: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style scoped>
  .checked{
    fill: var(--col-dark-grey);
    color: white;
  }
</style>

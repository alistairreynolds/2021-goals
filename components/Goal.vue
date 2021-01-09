<template>
  <div>
    <h2>{{ name }}</h2>
    <p>{{ status ? "Completed" : "Incomplete" }}</p>
  </div>
</template>

<script>
export default {
  name: 'Goal',
  props: {
    name: {
      type: String,
      required: true
    },
    user: {
      type: String,
      required: true
    },
    countable: {
      type: Boolean,
      default: false
    },
    count: {
      type: Number,
      required: false,
      default: 1
    },
    completed: {
      type: Boolean,
      default: false
    }
  }

}
</script>

<style scoped lang="scss">

</style>

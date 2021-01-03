<template>
  <div>
    <GoalForm @submit="onSubmit" />
  </div>
</template>

<script>
export default {
  name: 'CreateGoal',
  methods: {
    onSubmit (goalData) {
      this.$store.dispatch('goals/add', goalData)
    }
  }
}
</script>

<style scoped lang="scss">

</style>

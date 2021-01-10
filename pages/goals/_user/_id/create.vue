<template>
  <div>
    <h2>Create sub-goal for {{ parentGoal.name }}</h2>
    <GoalForm :parent-goal-id="parentGoal.id" :user="parentGoal.user" @submit="onSubmit" />
  </div>
</template>

<script>
export default {
  name: 'CreateGoal',
  computed: {
    parentGoal () {
      return this.$store.getters['goals/byId'](this.$route.params.id)
    }
  },
  methods: {
    onSubmit (goalData) {
      this.$store.dispatch('goals/store', goalData)
        .then((_) => {
          this.$router.push(`/goals/${goalData.user}/${goalData.parentGoalId}/`)
        })
    }
  }
}
</script>

<style scoped lang="scss">

</style>

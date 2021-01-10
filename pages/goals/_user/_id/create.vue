<template>
  <div>
    <h2>Create sub-goal for {{ goal.name }}</h2>
    <GoalForm :user="goal.user" :goal="goal" @submit="onSubmit" />
  </div>
</template>

<script>
export default {
  name: 'CreateGoal',
  computed: {
    status () {
      return this.goal.completed ? 'Complete' : 'Incomplete'
    },
    goal () {
      return this.$store.getters['goals/byId'](this.$route.params.id)
    }
  },
  methods: {
    onSubmit (goalData) {
      this.$store.dispatch('goals/store', goalData)
        .then((_) => {
          this.$router.push('/goals/' + goalData.user)
        })
    }
  }
}
</script>

<style scoped lang="scss">

</style>

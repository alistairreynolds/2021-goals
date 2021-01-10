<template>
  <div>
    <h2>{{ goal.name }}</h2>
    <GoalForm
      :goal="goal"
      @submit="saveGoal"
    />
  </div>
</template>

<script>
export default {
  name: 'Goal',
  computed: {
    status () {
      return this.goal.completed ? 'Complete' : 'Incomplete'
    },
    goal () {
      return this.$store.getters['goals/byId'](this.$route.params.id)
    }
  },
  methods: {
    saveGoal (editedGoal) {
      this.$store.dispatch('goals/update', editedGoal)
        .then((_) => {
          return this.$router.push(`/goals/${editedGoal.user}/`)
        })
    },
    addSubGoal (event) {
      event.preventDefault()
      this.$router.push(`/goals/${this.goal.user}/${this.goal.id}/create`)
    }
  }
}
</script>

<style scoped lang="scss">

</style>

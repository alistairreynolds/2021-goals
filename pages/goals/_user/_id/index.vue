<template>
  <div>
    <h2>{{ goal.name }}</h2>
    <GoalForm :user="goal.user" :goal="goal" @submit="saveGoal" />

    <AppButton @click="addSubGoal">
      Create sub-goal
    </AppButton>
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
    saveGoal () {
      this.goal.completed = !this.goal.completed
      this.$store.dispatch('goals/update', this.goal)
        .then((_) => {
          return this.$router.push(`/goals/${this.goal.user}/`)
        })
    },
    addSubGoal () {
      this.$router.push(`/goals/${this.goal.user}/${this.goal.id}/create`)
    }
  }
}
</script>

<style scoped lang="scss">

</style>

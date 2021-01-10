<template>
  <div>
    <h2 v-if="subGoals.length > 0" class="clickable" @click="openUserGoals">
      {{ goal.name }}
    </h2>
    <h2 v-else>
      {{ goal.name }}
    </h2>

    <div v-if="subGoals.length > 0">
      <h3>Sub-goals</h3>
      <GoalList :goals="subGoals" :is-parent="true" />
    </div>

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
    },
    subGoals () {
      return this.$store.getters['goals/forParentGoalId'](this.goal.id)
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
    },
    openUserGoals () {
      this.$router.push(`/goals/${this.goal.user}`)
    }
  }
}
</script>

<style scoped lang="scss">

</style>

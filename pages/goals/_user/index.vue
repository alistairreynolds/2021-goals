<template>
  <div>
    <h2>{{ user }}'s goals</h2>

    <AppButton class="mb-2 float-right" @click="createOnClick">
      Create Goal
    </AppButton>

    <div class="goals-list">
      <template v-for="goal of goals">
        <span
          :key="goal.id"
          class="clickable mx-0"
          :class="{completed: goal.completed}"
          @click="toggleGoalStatus(goal)"
        >
          {{ goal.name }}
        </span>
        <EditIcon class="clickable" @click="openEditGoal(goal)" />
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserGoals',
  computed: {
    goals () {
      return this.$store.getters['goals/forUser'](this.user)
    },
    user () {
      return this.$route.params.user
    }
  },
  methods: {
    createOnClick () {
      this.$router.push(`/goals/${this.user}/create`)
    },
    openEditGoal (goal) {
      this.$router.push(`/goals/${this.user}/${goal.id}`)
    },
    toggleGoalStatus (goal) {
      // We shouldn't directly alter the goal status, so handle via an action to trigger the mutator
      this.$store.dispatch('goals/toggleStatus', goal)
    }
  }
}
</script>

<style scoped lang="scss">

.goals-list{
  display: grid;
  grid-template-columns: max-content min-content;
  width: auto;
  column-gap: 10px;
  align-items: center;
}

</style>

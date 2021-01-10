<template>
  <div>
    <h2>{{ user }}'s goals</h2>

    <AppButton class="mb-2 float-right" @click="createOnClick">
      Create Goal
    </AppButton>

    <ul class="goals-list">
      <li
        v-for="goal of goals"
        :key="goal.id"
        class="clickable mx-0"
        :class="{completed: goal.completed}"
        @click="openEditGoal(goal)"
      >
        {{ goal.name }}
      </li>
      <!--        <EditIcon class="clickable" @click="openEditGoal(goal)" />-->
    </ul>
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
  width: max-content;
  //display: grid;
  //grid-template-columns: max-content min-content;
  //width: auto;
  //column-gap: 10px;
  //align-items: center;
}

</style>

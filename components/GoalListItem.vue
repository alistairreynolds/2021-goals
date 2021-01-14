<template>
  <li
    :key="goal.id"
    class=" mx-0 mb-2"
  >
    <TickIcon :checked="goal.completed" class="clickable" @click="toggleComplete" />
    <span class="clickable" @click="openEditGoal">
      {{ goal.name }}
      <em v-if="subGoalTotalCount > 0">
        ({{ subGoalCompletedCount }}/{{ subGoalTotalCount }} completed)
      </em>
    </span>
  </li>
</template>

<script>
export default {
  name: 'GoalListItem',
  props: {
    goal: {
      type: Object,
      required: true
    }
  },
  computed: {
    subGoalTotalCount () {
      return this.$store.getters['goals/forParentGoalId'](this.goal.id).length
    },
    subGoalCompletedCount () {
      return this.$store
        .getters['goals/forParentGoalId'](this.goal.id)
        .filter(goal => goal.completed).length
    }
  },
  methods: {
    openEditGoal () {
      this.$router.push(`/goals/${this.goal.user}/${this.goal.id}`)
    },
    toggleComplete () {
      console.log(this.goal)
      this.$store.dispatch('goals/toggleStatus', this.goal)
    }
  }
}
</script>

<style scoped lang="scss">

</style>

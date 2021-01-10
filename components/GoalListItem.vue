<template>
  <li
    :key="goal.id"
    class="clickable mx-0 mb-2"
    :class="{completed: goal.completed}"
    @click="openEditGoal"
  >
    {{ goal.name }}
    <em v-if="subGoalTotalCount > 0">
      ({{ subGoalCompletedCount }}/{{ subGoalTotalCount }} completed)
    </em>
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
    }
  }
}
</script>

<style scoped lang="scss">

</style>

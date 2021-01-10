<template>
  <ul class="goals-list mb-2" :class=" isParent ? 'numbered' : 'unordered'">
    <li
      v-for="goal of goals"
      :key="goal.id"
      class="clickable mx-0 mb-2"
      :class="{completed: goal.completed}"
      @click="openEditGoal(goal)"
    >
      {{ goal.name }}
    </li>
    <!--        <EditIcon class="clickable" @click="openEditGoal(goal)" />-->
  </ul>
</template>

<script>
export default {
  name: 'GoalList',
  props: {
    goals: {
      type: Array,
      required: true
    },
    isParent: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    user () {
      return this.$route.params.user
    }
  },
  methods: {
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
  margin-left: 20px;
  &.numbered{
    list-style: decimal;
  }
  &.unordered{
    list-style: outside;
 }
}

</style>

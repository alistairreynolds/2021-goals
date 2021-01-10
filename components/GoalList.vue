<template>
  <ul class="goals-list mb-2" :class=" isParent ? 'numbered' : 'unordered'">
    <GoalListItem
      v-for="goal in goals"
      :key="goal.id"
      :goal="goal"
    />
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

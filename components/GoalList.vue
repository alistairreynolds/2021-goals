<template>
  <ul class="goals-list mb-2">
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

<style lang="scss">

.goals-list{
  width: max-content;
 // &.numbered{
 //   list-style: decimal;
 // }
 // &.unordered{
 //   list-style: none;
 //   margin-left: 0;
 //}
  li{
    display: grid;
    grid-template-columns: min-content 1fr min-content;
    column-gap: 20px;
  }
}

</style>

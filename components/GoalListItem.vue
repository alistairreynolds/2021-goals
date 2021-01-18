<template>
  <li
    :key="goal.id"
    class="mx-0 mb-2"
  >
    <TickIcon :checked="goal.completed" class="clickable" @click="toggleComplete" />
    <span class="clickable mx-0" @click="openEditGoal">
      {{ goal.name }}
      <em v-if="subGoalTotalCount > 0">
        ({{ subGoalCompletedCount }}/{{ subGoalTotalCount }} completed)
      </em>
    </span>
    <EditIcon class="clickable" @click="renameGoal" />
  </li>
</template>

<script>
import Swal from 'sweetalert2'

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
      this.$store.dispatch('goals/toggleStatus', this.goal)
    },
    renameGoal () {
      Swal.fire({
        input: 'text',
        inputLabel: 'Goal',
        inputValue: this.goal.name
      }).then((r) => {
        if(r.value) {
          const editedGoal = { ...this.goal }
          editedGoal.name = r.value
          this.$store.dispatch('goals/rename', editedGoal)
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
span{
  margin-top: -3px;
}
</style>

<template>
  <div>
    <form @submit.prevent="onSubmit">
      <AppInput v-model="editedGoal.name">
        Goal
      </AppInput>
      <AppCheckbox v-model="editedGoal.completed" :checked="editedGoal.completed">
        Completed
      </AppCheckbox>
      <AppCheckbox v-model="editedGoal.countable" :checked="editedGoal.countable">
        Countable
      </AppCheckbox>
      <AppStepper v-model="editedGoal.count">
        Quantity to complete
      </AppStepper>
      <div class="flex flex-row col-gap-2 justify-end mt-4">
        <AppButton type="submit">
          Save
        </AppButton>

        <AppButton v-if="editedGoal.id" @click="addSubGoal">
          Create sub-goal
        </AppButton>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'GoalForm',
  props: {
    user: {
      type: String,
      required: false,
      default () {
        return ''
      }
    },
    parentGoalId: {
      type: String,
      required: false,
      default: null
    },
    goal: {
      type: Object,
      required: false,
      default () {
        return {
          name: '',
          user: this.user,
          completed: false,
          countable: false,
          count: 1,
          parentGoalId: this.parentGoalId
        }
      }
    }
  },
  computed: {
    editedGoal () {
      // Return a new object from destructuring the goal so that we're not binding the goal to the form,
      // which is invalid as we shouldn't be mutating the goal outside of the store
      return { ...this.goal }
    }
  },
  methods: {
    onSubmit () {
      this.$emit('submit', this.editedGoal)
    },
    addSubGoal (event) {
      event.preventDefault()
      this.$router.push(`/goals/${this.goal.user}/${this.goal.id}/create`)
    }
  }
}
</script>

<style scoped>

</style>

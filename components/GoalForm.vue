<template>
  <div>
    <form @submit.prevent="onSubmit">
      <AppInput v-model="editedGoal.name">
        Goal
      </AppInput>
      <AppCheckbox v-model="editedGoal.countable">
        Countable
      </AppCheckbox>
      <AppStepper v-model="editedGoal.count">
        Quantity to complete
      </AppStepper>
      <AppButton type="submit">
        Save
      </AppButton>
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
    goal: {
      type: Object,
      required: false,
      default () {
        return {
          name: '',
          user: this.user,
          completed: false,
          countable: false,
          count: 1
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
    }
  }
}
</script>

<style scoped>

</style>

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
      required: true
    },
    goal: {
      type: Object,
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
  data () {
    return {
      editedGoal: this.goal
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

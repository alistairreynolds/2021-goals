<template>
  <div>
    <form @submit.prevent="onSubmit">
      <AppInput v-model="editedGoal.name">
        Goal
      </AppInput>
      <AppButton type="submit">
        Go
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
          completed: false
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

<style scoped lang="scss">

</style>

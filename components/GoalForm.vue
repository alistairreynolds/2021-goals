<template>
  <div>
    <form @submit.prevent="onSubmit">
      <AppInput v-model="editedGoal.name">
        Goal
      </AppInput>
      <AppInput v-model="editedGoal.user">
        User
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
    goal: {
      type: Object,
      default () {
        return {
          name: '',
          user: 'Alistair'
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

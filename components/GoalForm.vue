<template>
  <div>
    <form @submit.prevent="submit">
      <AppInput v-model="newGoal.name" placeholder="Name" />

      <div class="flex flex-row col-gap-2 justify-end mt-4">
        <AppButton type="submit">
          Add
        </AppButton>

        <AppButton class="red" @click="hideForm">
          Cancel
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
    }
  },
  data () {
    return {
      newGoal: {
        parentGoalId: this.parentGoalId,
        completed: false,
        user: this.user
      }
    }
  },
  mounted () {
    document.querySelector('input').focus()
  },
  methods: {
    submit () {
      event.preventDefault()
      this.$store.dispatch('goals/store', this.newGoal)
      this.hideForm()
    },
    hideForm () {
      event.preventDefault()
      this.$emit('close')
    }
  }
}
</script>

<style scoped>

</style>

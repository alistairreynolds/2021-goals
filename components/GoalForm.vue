<template>
  <div>
    <form @submit.prevent="onSubmit">
      <AppInput v-if="!editedGoal.id" v-model="editedGoal.name">
        Goal
      </AppInput>
      <div class="flex flex-row col-gap-2 justify-end mt-4">
        <AppButton v-if="!editedGoal" type="submit">
          Save
        </AppButton>

        <AppButton v-if="editedGoal.id" @click="addSubGoal">
          Create sub-goal
        </AppButton>

        <AppButton v-if="editedGoal.id" class="red" @click="deleteGoal">
          Delete
        </AppButton>
      </div>
    </form>
  </div>
</template>

<script>
import Swal from 'sweetalert2'

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
          parentGoalId: this.parentGoalId ? this.parentGoalId : null
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
  mounted () {
    if (!this.goal.id) {
      // This is a new goal so we should set the focus to the name input
      if (document.querySelector('input')) {
        document.querySelector('input').focus()
      }
    }
  },
  methods: {
    onSubmit () {
      this.$emit('submit', this.editedGoal)
    },
    addSubGoal (event) {
      event.preventDefault()
      this.$router.push(`/goals/${this.goal.user}/${this.goal.id}/create`)
    },
    async deleteGoal (event) {
      event.preventDefault()

      const confirmed = (await Swal.fire({
        icon: 'warning',
        title: 'Are you sure you want to delete this goal?',
        showCancelButton: true
      })).isConfirmed

      if (!confirmed) {
        return
      }

      const username = this.goal.user
      this.$store.dispatch('goals/delete', this.goal)
        .then((_) => {
          return this.$router.push(`/goals/${username}`)
        })
    }
  }
}
</script>

<style scoped>

</style>

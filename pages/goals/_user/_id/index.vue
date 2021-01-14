<template>
  <div>
    <!--  Header goal name   -->
    <h2 v-if="subGoals.length > 0" class="clickable" @click="openUserGoals">
      {{ goal.name }}
    </h2>
    <h2 v-else>
      {{ goal.name }}
    </h2>

    <!--    List of sub goals -->
    <div v-if="subGoals.length > 0">
      <h3>Sub-goals</h3>
      <GoalList :goals="subGoals" :is-parent="true" />
    </div>

    <div v-if="adding">
      <GoalForm :user="goal.user" :parent-goal-id="goal.id" @close="adding = false"/>
    </div>
    <div v-else>
      <div class="flex flex-row col-gap-2 justify-end mt-4">
        <AppButton @click="adding = true">
          Create sub-goal
        </AppButton>

        <AppButton class="red" @click="deleteGoal">
          Delete
        </AppButton>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  name: 'Goal',
  data () {
    return {
      adding: false
    }
  },
  computed: {
    status () {
      return this.goal.completed ? 'Complete' : 'Incomplete'
    },
    goal () {
      return this.$store.getters['goals/byId'](this.$route.params.id) ?? {}
    },
    subGoals () {
      return this.$store.getters['goals/forParentGoalId'](this.goal.id)
    }
  },
  methods: {
    openUserGoals () {
      this.$router.push(`/goals/${this.goal.user}`)
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

<style scoped lang="scss">

</style>

<template>
  <div>
    <h2>{{ user }}'s goals</h2>

    <GoalList :goals="goals" />

    <div v-if="adding">
      <GoalForm :user="user" @close="adding = false" />
    </div>
    <div v-else class="flex flex-row col-gap-2 justify-end mt-4" @click="adding = true">
      <AppButton >
        Create Goal
      </AppButton>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserGoals',
  data () {
    return { adding: false }
  },
  computed: {
    goals () {
      return this.$store.getters['goals/forUser'](this.user)
    },
    user () {
      return this.$route.params.user
    }
  },
  methods: {
    createOnClick () {
      this.$router.push(`/goals/${this.user}/create`)
    }
  }
}
</script>

<style scoped lang="scss">

</style>

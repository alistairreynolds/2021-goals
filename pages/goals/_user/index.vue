<template>
  <div>
    <h2>{{ user }}'s goals</h2>

    <GoalList :goals="goals" />

    <AppButton class="mb-2 float-right" @click="createOnClick">
      Create Goal
    </AppButton>
  </div>
</template>

<script>
export default {
  name: 'UserGoals',
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

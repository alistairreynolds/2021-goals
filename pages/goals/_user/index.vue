<template>
  <div>

    <h2>{{ user }}'s goals</h2>

    <AppButton class="mb-2 float-right" @click="onClick">
      Create Goal
    </AppButton>

    <ul v-for="goal of goals" :key="goal.id">
      <li>{{ goal.name }}</li>
    </ul>
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
  created () {
    this.$store.dispatch('goals/get')
  },
  methods: {
    onClick () {
      this.$router.push(`/goals/${this.user}/create`)
    }
  }
}
</script>

<style scoped lang="scss">

</style>

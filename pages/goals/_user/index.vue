<template>
  <div>
    <h2>{{ user }}'s goals</h2>
    <div v-for="goal of goals" :key="goal.id">
      {{ goal.name }}
    </div>
    <AppButton @click="onClick">
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
    onClick () {
      this.$router.push(`/goals/${this.user}/create`)
    }
  }
}
</script>

<style scoped lang="scss">

</style>

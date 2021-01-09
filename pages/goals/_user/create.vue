<template>
  <div>
    <h2>Create goal for {{ user }}</h2>
    <GoalForm :user="user" @submit="onSubmit" />
  </div>
</template>

<script>
export default {
  name: 'CreateGoal',
  computed: {
    user () {
      return this.$route.params.user
    }
  },
  methods: {
    onSubmit (goalData) {
      this.$store.dispatch('goals/store', goalData)
        .then((_) => {
          this.$router.push('/goals/' + goalData.user)
        })
    }
  }
}
</script>

<style scoped lang="scss">

</style>

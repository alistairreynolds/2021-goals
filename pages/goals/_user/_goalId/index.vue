<template>
  <div>
    <h2>{{ goal.name }}</h2>
    <p @click="goalOnClick">
      {{ status }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'Goal',
  asyncData (context) {
    return context.$axios.$get(`goals/${context.params.goalId}.json`)
      .then((r) => {
        console.log(r);
        return {
          goal: r
        }
      }).catch(e => context.error(e))
  },
  computed: {
    status () {
      return this.goal.completed ? 'Complete' : 'Incomplete'
    }
  },
  methods: {
    goalOnClick () {
      this.goal.completed = !this.goal.completed
      this.$store.dispatch('goals/update', this.goal)
    }
  }
}
</script>

<style scoped lang="scss">

</style>

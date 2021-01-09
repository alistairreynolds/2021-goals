<template>
  <div>
    <h2>{{ goal.name }}</h2>
    <p>{{ goal.status ? "Completed" : "Incomplete" }}</p>
  </div>
</template>

<script>
export default {
  name: 'Goal',
  asyncData (context) {
    return context.$axios.$get(`goals/${context.params.goalId}.json`)
      .then((r) => {
        return {
          goal: r
        }
      }).catch(e => context.error(e))
  }
}
</script>

<style scoped lang="scss">

</style>

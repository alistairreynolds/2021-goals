<template>
  <div>
    <h2>{{ user }}'s goals</h2>

    <AppButton class="mb-2 float-right" @click="createOnClick">
      Create Goal
    </AppButton>

    <ul class="goals-list">
      <li v-for="goal of goals" :key="goal.id" class="mb-2 cursor-pointer mx-0" @click="goalOnClick(goal.id)">
        {{ goal.name }}
      </li>
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
  methods: {
    createOnClick () {
      this.$router.push(`/goals/${this.user}/create`)
    },
    goalOnClick (id) {
      this.$router.push(`/goals/${this.user}/${id}`)
    }
  }
}
</script>

<style scoped lang="scss">

ul.goals-list{
  li {
    width: fit-content;
    &:hover {
      color: var(--col-green);
    }
  }
}

</style>

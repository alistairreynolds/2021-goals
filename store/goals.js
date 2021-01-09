export const state = () => ({
  goals: []
})

export const mutations = {
  add (state, goalData) {
    state.goals.push(goalData)
  },
  set (state, goals) {
    state.goals = goals
  },
  update (state, updatedGoal) {
    const index = state.goals.findIndex(goal => updatedGoal.id === goal.id)
    state.goals[index] = updatedGoal
  }
}

export const actions = {
  // Add a new goal
  store (vueContext, goalData) {
    return this.$axios
      .$post('goals.json', goalData)
      .then((r) => {
        vueContext.commit('add', { ...goalData, id: r.name })
      })
  },
  // Fetch goals on update
  nuxtServerInit (vueContext, context) {
    return context.$axios
      .$get('goals.json')
      .then((r) => {
        const goalsArray = []
        for (const key in r) {
          goalsArray.push({ ...r[key], id: key })
        }
        vueContext.commit('set', goalsArray)
      })
  },
  // Update goal status
  update (vueContext, goal) {
    this.$axios
      .$put(`goals/${goal.id}.json`, goal)
      .then(_ => {
        vueContext.commit('update', goal)
      })
  }
}

export const getters = {
  forUser: state => (user) => {
    return state.goals.filter(goal => goal.user === user)
  }
}

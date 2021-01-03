export const state = () => ({
  goals: []
})

export const mutations = {
  add (state, goalData) {
    state.goals.push(goalData)
  },
  set (state, goals) {
    state.goals = goals
  }
}

export const actions = {
  store (vueContext, goalData) {
    return this.$axios
      .$post('goals.json', goalData)
      .then((r) => {
        vueContext.commit('add', { ...goalData, id: r.name })
      })
  }
}

export const getters = {
  forUser: state => (user) => {
    return state.goals.filter(goal => goal.user === user)
  }
}

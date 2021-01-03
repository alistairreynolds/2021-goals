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
  },
  get (vueContext) {
    return this.$axios
      .$get('goals.json')
      .then((r) => {
        const goalsArray = []
        for (const key in r) {
          goalsArray.push({ ...r[key], id: key })
        }
        vueContext.commit('set', goalsArray)
      })
  }
}

export const getters = {
  forUser: state => (user) => {
    return state.goals.filter(goal => goal.user === user)
  }
}

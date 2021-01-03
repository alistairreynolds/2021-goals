export const state = () => ({
  goals: []
})

export const mutations = {
  add (state, goalData) {
    state.goals.push(goalData)
  },
  remove (state, { goal }) {
    state.goals.splice(state.goals.indexOf(goal), 1)
  },
  toggle (_, goal) {
    goal.done = !goal.done
  }
}

export const actions = {
  add (vueContext, goalData) {
    const user = goalData.user
    const goal = goalData.name

    return this.$axios
      .$post(`${user}-goals.json`, { name: goal, completed: false })
      .then((r) => {
        vueContext.commit('add', r)
      })
  }
}

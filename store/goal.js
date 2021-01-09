export const state = () => ({
  name: {
    type: String,
    required: true
  },
  user: {
    type: String,
    required: true
  },
  countable: {
    type: Boolean,
    default: false
  },
  count: {
    type: Number,
    required: false,
    default: 1
  },
  completed: {
    type: Boolean,
    default: false
  }
})

export const mutations = {
  set (state, goal) {
    goal.completed = state
  }
}

export const actions = {
  update (vueContext, status) {
    vueContext.commit('set', status)
  }
}

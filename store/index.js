export const actions = {
  nuxtServerInit (vueContext, context) {
    return context.app.$axios
      .$get('goals.json')
      .then((r) => {
        const goalsArray = []
        for (const key in r) {
          goalsArray.push({ ...r[key], id: key })
        }
        vueContext.commit('goals/set', goalsArray)
      })
  }
}

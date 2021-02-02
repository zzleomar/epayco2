const store = {
  state: () => ({
    spinning: false
  }),
  mutations: {
    mut_setSpinning (state, spinning) {
      state.spinning = spinning
    }
  },
  actions: {
    setSpinning: ({ commit }, spinning) => {
      commit('mut_setSpinning', spinning)
    },
    showNotification: ({ commit }, { menssage, type, self }) => {
      self.$notification[type]({
        message: type === 'success' ? '¡Bien Hecho!' : 'Oh no!',
        description: menssage
      })
    }
  }
}

export default store

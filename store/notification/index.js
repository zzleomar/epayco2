const store = {
  state: () => ({
  }),
  mutations: {
  },
  actions: {
    showNotification: ({ commit }, { menssage, type, self }) => {
      self.$notification[type]({
        message: type === 'success' ? '¡Bien Hecho!' : 'Oh no!',
        description: menssage
      })
    }
  }
}

export default store

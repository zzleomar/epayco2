const ENDPOINT_ACCOUNT = '/account'

const actions = {
  createAccount: ({ commit }, { self, payload }) => {
    self.$store.dispatch('notification/setSpinning', true)
    return new Promise((resolve, reject) => {
      self.$axios.$post(`${ENDPOINT_ACCOUNT}/create`, payload)
        .then((response) => {
          self.$store.dispatch('notification/setSpinning', false)
          if (response.status === 'Ok') {
            resolve(response.data)
          } else {
            reject(response.data)
          }
        }).catch((err) => {
          reject(err)
        })
    })
  },
  recharge: ({ commit }, { self, payload }) => {
    self.$store.dispatch('notification/setSpinning', true)
    return new Promise((resolve, reject) => {
      self.$axios.$post(`${ENDPOINT_ACCOUNT}/recharge`, payload)
        .then((response) => {
          self.$store.dispatch('notification/setSpinning', false)
          if (response.status === 'Ok') {
            resolve(response.data)
          } else {
            reject(response.data)
          }
        }).catch((err) => {
          self.$store.dispatch('notification/setSpinning', false)
          reject(err)
        })
    })
  },
  query: ({ commit }, { self, payload }) => {
    self.$store.dispatch('notification/setSpinning', true)
    return new Promise((resolve, reject) => {
      self.$axios.$post(`${ENDPOINT_ACCOUNT}/query`, payload)
        .then((response) => {
          self.$store.dispatch('notification/setSpinning', false)
          if (response.status === 'Ok') {
            resolve(response.data)
          } else {
            reject(response.data)
          }
        }).catch((err) => {
          self.$store.dispatch('notification/setSpinning', false)
          reject(err)
        })
    })
  }
}

export default actions

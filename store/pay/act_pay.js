const ENDPOINT_ACCOUNT = '/pay'

const actions = {
  requestPayment: ({ commit }, { self, payload }) => {
    self.$store.dispatch('notification/setSpinning', true)
    return new Promise((resolve, reject) => {
      self.$axios.$post(`${ENDPOINT_ACCOUNT}/requestPayment`, payload)
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
  confirm: ({ commit }, { self, payload }) => {
    self.$store.dispatch('notification/setSpinning', true)
    return new Promise((resolve, reject) => {
      self.$axios.$post(`${ENDPOINT_ACCOUNT}/confirm`, payload)
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

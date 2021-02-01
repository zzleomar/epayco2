const ENDPOINT_ACCOUNT = '/pay'

const actions = {
  requestPayment: ({ commit }, { self, payload }) => {
    return new Promise((resolve, reject) => {
      self.$axios.$post(`${ENDPOINT_ACCOUNT}/requestPayment`, payload)
        .then((response) => {
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
  confirm: ({ commit }, { self, payload }) => {
    return new Promise((resolve, reject) => {
      self.$axios.$post(`${ENDPOINT_ACCOUNT}/confirm`, payload)
        .then((response) => {
          if (response.status === 'Ok') {
            resolve(response.data)
          } else {
            reject(response.data)
          }
        }).catch((err) => {
          reject(err)
        })
    })
  }
}

export default actions

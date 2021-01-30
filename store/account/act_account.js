const ENDPOINT_ACCOUNT = '/account'

const actions = {
  createAccount: ({ commit }, { self, payload }) => {
    return new Promise((resolve, reject) => {
      self.$axios.$post(`${ENDPOINT_ACCOUNT}/create`, payload)
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
  recharge: ({ commit }, { self, payload }) => {
    return new Promise((resolve, reject) => {
      self.$axios.$post(`${ENDPOINT_ACCOUNT}/recharge`, payload)
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
  query: ({ commit }, { self, payload }) => {
    return new Promise((resolve, reject) => {
      self.$axios.$post(`${ENDPOINT_ACCOUNT}/query`, payload)
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

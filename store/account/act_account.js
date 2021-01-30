const ENDPOINT_ACCOUNT = '/account'

const actions = {
  createAccount: ({ commit }, { self, payload }) => {
    console.log(ENDPOINT_ACCOUNT, 'ENDPOINT_ACCOUNT', process.env.API_URL)
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
  }
}

export default actions

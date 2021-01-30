/* eslint-disable no-new */
import Vuex from 'vuex'
import account from './account'
import notification from './notification'

new Vuex.Store({
  namespaced: true,
  state: {
    account,
    notification
  }
})

export const strict = false

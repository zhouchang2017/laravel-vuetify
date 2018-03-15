import axios from 'axios'
import * as types from '../mutation-types'
import api from '~/config/api'

// state
export const state = {
  list: null
}

// mutations
export const mutations = {
  [types.SAVE_NUXT] (state, {nuxts}) {
    state.list = nuxts
  }
}

// actions
export const actions = {
  async get ({commit, dispatch, getters}) {
    if (!getters.nuxts) {
      try {
        let {data} = await axios.get(api.nuxt.get())
        commit(types.SAVE_NUXT, {nuxts: data})
      } catch (err) {
        console.log(err)
        dispatch('message/responseMessage', {
          type: 'error',
          modal: true,
          text: JSON.stringify(err.response.data)
        }, {root: true})
      }
    }
    return getters.nuxts
  }
}
// getters
export const getters = {
  nuxts: state => state.list
}
import axios from 'axios'
import * as types from '../mutation-types'
import api from '~/config/api'

// state
export const state = {
  list: null
}

// mutations
export const mutations = {}

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
  },
  async store ({dispatch}, {formDate}) {
    try {
      let {data} = await axios.post(api.post.store(), formDate)
      return data
    } catch (err) {
      console.log(err)
      dispatch('message/responseMessage', {
        type: 'error',
        modal: true,
        text: JSON.stringify(err.response.data)
      }, {root: true})
    }
  }
}
// getters
export const getters = {
  nuxts: state => state.list
}
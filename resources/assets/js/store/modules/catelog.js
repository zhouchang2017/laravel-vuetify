import axios from 'axios'
import * as types from '../mutation-types'
import api from '~/config/api'

// state
export const state = {
  list: null
}

// mutations
export const mutations = {
  [types.SAVE_CATELOG] (state, {cateloges}) {
    state.list = cateloges
  }
}

// actions
export const actions = {
  async get ({commit, dispatch, getters}) {
    if (!getters.catelogs) {
      try {
        let {data} = await axios.get(api.catelog.get())
        commit(types.SAVE_CATELOG, {cateloges: data})
      } catch (err) {
        console.log(err)
        dispatch('message/responseMessage', {
          type: 'error',
          modal: true,
          text: JSON.stringify(err.response.data)
        }, {root: true})
      }
    }
    return getters.catelogs
  }
}
// getters
export const getters = {
  catelogs: state => state.list
}
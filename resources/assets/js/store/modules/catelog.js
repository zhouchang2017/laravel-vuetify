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
  async index ({commit, dispatch, getters}) {
    try {
      let {data} = await axios.get(api.catelog.index())
      commit(types.SAVE_CATELOG, {cateloges: data})
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
  catelogs: state => state.list
}
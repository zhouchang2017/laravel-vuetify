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
      return data
    } catch (err) {
      console.log(err)
      dispatch('message/responseMessage', {
        type: 'error',
        modal: true,
        text: JSON.stringify(err.response.data)
      }, {root: true})
    }
  },
  async count ({dispatch}) {
    try {
      let {data} = await axios.get(api.catelog.count())
      return data
    } catch (err) {
      console.log(err)
      dispatch('message/responseMessage', {
        type: 'error',
        modal: true,
        text: JSON.stringify(err.response.data)
      }, {root: true})
    }
  },
  async store ({dispatch}, {formDate}) {
    try {
      let {data} = await axios.post(api.catelog.store(), formDate)
      return data
    } catch (err) {
      console.log(err)
      dispatch('message/responseMessage', {
        type: 'error',
        modal: true,
        text: JSON.stringify(err.response.data)
      }, {root: true})
      return false
    }
  },
  async edit ({dispatch}, {id}) {
    try {
      let {data} = await axios.get(api.catelog.edit(id))
      return data
    } catch (err) {
      console.log(err)
      dispatch('message/responseMessage', {
        type: 'error',
        modal: true,
        text: JSON.stringify(err.response.data)
      }, {root: true})
    }
  },
  async update ({dispatch}, {id, props}) {
    try {
      let {data} = await axios.patch(api.catelog.update(id), {...props})
      return data
    } catch (err) {
      console.log(err)
      dispatch('message/responseMessage', {
        type: 'error',
        modal: true,
        text: JSON.stringify(err.response.data)
      }, {root: true})
    }
  },
  async delete ({dispatch}, {id}) {
    try {
      let {data} = await axios.delete(api.catelog.delete(id))
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
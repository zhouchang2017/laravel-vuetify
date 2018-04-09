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
  async index ({commit, dispatch, getters},queryBuild) {
    try {
      let {data} = await axios.get(api.banner.index(), {params: queryBuild})
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
  async store ({dispatch}, formDate) {
    try {
      let {data} = await axios.post(api.banner.store(), formDate)
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
  async show ({dispatch}, {id}) {
    try {
      let {data} = await axios.get(api.banner.show(id))
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
      let {data} = await axios.patch(api.banner.update(id), {...props})
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
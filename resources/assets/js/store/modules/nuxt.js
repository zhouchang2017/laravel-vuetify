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
  async index ({dispatch}, queryBuild) {
    try {
      let {data} = await axios.get(api.nuxt.index(), {params: queryBuild})
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
      let {data} = await axios.get(api.nuxt.count())
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
  async store ({dispatch}, {formData}) {
    try {
      let {data} = await axios.post(api.nuxt.store(), formData)
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
      let {data} = await axios.get(api.nuxt.edit(id))
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
      let {data} = await axios.patch(api.nuxt.update(id), {...props})
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
      let {data} = await axios.delete(api.nuxt.delete(id))
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
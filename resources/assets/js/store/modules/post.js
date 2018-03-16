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
  async index ({dispatch}, queryBuild) {
    try {
      let {data} = await axios.get(api.post.index(), {params: queryBuild})
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
  },
  async update ({dispatch}, {post_id, props}) {
    try {
      let {data} = await axios.patch(api.post.update(post_id), {...props})
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
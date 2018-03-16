import axios from 'axios'
import api from '~/config/api'

export const actions = {
  uploadImage ({dispatch}, {formData, config}) {
    return axios.post(api.file.store(), formData, config)
  }
}
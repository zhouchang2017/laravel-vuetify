import axios from 'axios'

export const actions = {
  uploadImage (ctx, {formData, config}) {
    return axios.post('/api/fs/upload', formData, config)
  }
}
import axios from 'axios'

export const actions = {
  uploadImage (ctx, file) {
    return axios.post('/api/fs/upload', file)
  }
}
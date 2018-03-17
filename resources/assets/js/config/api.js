const api = {
  catelog: {
    index: () => 'catelog'
  },
  nuxt: {
    index: () => 'nuxt',
    show: id => `nuxt/${id}`,
    edit: id => `nuxt/${id}/edit`,
    store: () => 'nuxt',
    update: id => `nuxt/${id}`,
    delete: id => `nuxt/${id}`
  },
  file: {
    store: () => 'fs/upload'
  },
  auth: {
    login: () => 'login',
    logout: () => 'logout'
  },
  user: {
    me: () => 'user'
  },
  post: {
    index: () => 'post',
    show: id => `post/${id}`,
    edit: id => `post/${id}/edit`,
    store: () => 'post',
    update: id => `post/${id}`,
    delete: id => `post/${id}`
  }
}

export default api
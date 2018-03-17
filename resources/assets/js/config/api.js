const api = {
  catelog: {
    get: () => 'catelogs'
  },
  nuxt: {
    get: () => 'nuxts'
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
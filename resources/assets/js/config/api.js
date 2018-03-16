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
    store: () => 'post/store',
    update: id => `post/${id}`
  }
}

export default api
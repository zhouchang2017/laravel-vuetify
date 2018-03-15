const api = {
  catelog: {
    get: () => `catelogs`
  },
  nuxt: {
    get: () => `nuxts`
  },
  file: {
    store: () => `fs/upload`
  },
  auth: {
    login: () => `login`,
    logout: () => 'logout'
  },
  user: {
    me: () => 'user'
  },
  post: {
    store: () => 'post/store'
  }
}

export default api
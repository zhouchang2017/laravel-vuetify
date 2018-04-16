const api = {
  catelog: {
    index: () => 'catelog',
    count: () => 'catelog/count',
    show: id => `catelog/${id}`,
    edit: id => `catelog/${id}/edit`,
    store: () => 'catelog',
    update: id => `catelog/${id}`,
    delete: id => `catelog/${id}`
  },
  banner: {
    index: () => 'banners',
    show: id => `banners/${id}`,
    edit: id => `banners/${id}/edit`,
    store: () => 'banners',
    update: id => `banners/${id}`,
    delete: id => `banners/${id}`
  },
  nuxt: {
    index: () => 'nuxt',
    count: () => 'nuxt/count',
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
    count: () => 'post/count',
    show: id => `post/${id}`,
    edit: id => `post/${id}/edit`,
    store: () => 'post',
    update: id => `post/${id}`,
    delete: id => `post/${id}`,
    updateField: id => `post/${id}/update`
  }
}

export default api
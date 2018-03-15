import axios from 'axios'
import store from '~/store'
import router from '~/router'
import i18n from './vue-i18n'

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

axios.defaults.baseURL = `/${config.apiPrefix}`

let token = document.head.querySelector('meta[name="csrf-token"]')

if (token) {
  axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content
} else {
  console.error(
    'CSRF token not found')
}

axios.interceptors.request.use(request => {
  if (store.getters.authToken) {
    request.headers.common['Authorization'] = `Bearer ${store.getters.authToken}`
  }
  return request
})

axios.interceptors.response.use(response => response, error => {
  const { status } = error.response

  if (status >= 500) {
    store.dispatch('message/responseMessage', {
      type: 'error',
      text: i18n.t('error_alert_text'),
      title: i18n.t('error_alert_title'),
      modal: true
    })
  }

  if (status === 401 && store.getters['auth/authCheck']) {
    store.dispatch('message/responseMessage', {
      type: 'warning',
      text: i18n.t('token_expired_alert_text'),
      title: i18n.t('token_expired_alert_title'),
      modal: true
    })
    .then(async () => {
      await store.dispatch('auth/logout')

      router.push({ name: 'login' })
    })
  }

  return Promise.reject(error)
})

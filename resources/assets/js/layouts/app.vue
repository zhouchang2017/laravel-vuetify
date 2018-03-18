<template>
  <v-app light>
    <v-navigation-drawer
      v-if="authenticated"
      fixed
      v-model="drawer"
      app
    >
      <nav-menu></nav-menu>
    </v-navigation-drawer>
    <tool-bar fixed v-on:toggleDrawer="drawer = !drawer" :drawer="drawer"></tool-bar>
    <v-content>
      <v-container fluid>
        <transition name="page" mode="out-in">
          <router-view></router-view>
        </transition>
      </v-container>
    </v-content>
    <feedback-message></feedback-message>
    <page-footer></page-footer>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'

import NavMenu from '~/components/NavMenu'
import ToolBar from '~/components/ToolBar'
import FeedbackMessage from '~/components/FeedbackMessage'
import PageFooter from '~/components/PageFooter'

export default {
  components: {
    'nav-menu': NavMenu,
    'tool-bar': ToolBar,
    'feedback-message': FeedbackMessage,
    'page-footer': PageFooter
  },

  computed: mapGetters('auth',{
    authenticated: 'authCheck'
  }),

  data () {
    return {
      drawer: true
    }
  }
}
</script>

<style>
  .page-enter-active, .page-leave-active {
    transition: opacity .5s;
  }
  .page-enter, .page-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>

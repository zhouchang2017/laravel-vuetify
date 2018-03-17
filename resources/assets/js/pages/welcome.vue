<template>
  <div>
    <!--<v-toolbar>-->
      <!--<v-spacer></v-spacer>-->
      <!--<v-toolbar-items>-->
        <!--<v-btn flat v-if="authenticated" :to="{ name: 'home' }">{{ $t('home') }}</v-btn>-->
        <!--<template v-else>-->
          <!--<v-btn flat :to="{ name: 'login' }">{{ $t('login') }}</v-btn>-->
          <!--<v-btn flat :to="{ name: 'register' }">{{ $t('register') }}</v-btn>-->
        <!--</template>-->
      <!--</v-toolbar-items>-->
    <!--</v-toolbar>-->
    <main>
      <v-content>
        <v-container fluid>
          <v-layout column align-center>
            <div class="display-3 grey--text mt-5">
              {{ title }}
            </div>
          </v-layout>
        </v-container>
      </v-content>
    </main>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'welcome-view',
  layout: 'default',

  metaInfo () {
    return { title: this.$t('home') }
  },

  computed: mapGetters('auth',{
    authenticated: 'authCheck'
  }),

  data: () => ({
    title: window.config.appName
  })
}
</script>

<template>
    <div>
        <v-toolbar flat>
            <v-list>
                <v-list-tile>
                    <v-list-tile-title class="title">
                        {{ name }}
                    </v-list-tile-title>
                </v-list-tile>
            </v-list>
        </v-toolbar>
        <v-divider></v-divider>
        <v-list>
            <template v-for="item in items">
                <v-list-group
                        v-if="item.items"
                        v-model="item.active"
                        :prepend-icon="item.action"
                        no-action
                >
                    <v-list-tile slot="activator">
                        <v-list-tile-content>
                            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile exact v-for="subItem in item.items" :key="subItem.title" :to="subItem.route" @click="">
                        <v-list-tile-content>
                            <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-icon>{{ subItem.action }}</v-icon>
                        </v-list-tile-action>
                    </v-list-tile>
                </v-list-group>
                <v-list-tile exact v-else @click="" :to="item.route">
                    <v-list-tile-action>
                        <v-icon>{{ item.action }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </template>
        </v-list>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        name: this.$t('nav_menu_title'),
        items: [
          {
            action: 'dashboard',
            title: this.$t('dash_board'),
            route: {name: 'home'}
          },
          {
            action: 'art_track',
            title: this.$t('post'),
            items: [
              {title: this.$t('post_list'),route: {name: 'post.index'}},
              {title: this.$t('post_create'),route: {name: 'post.create'}},
            ]
          },
          {
            action: 'settings_system_daydream',
            title: this.$t('nuxt'),
            items: [
              {title: this.$t('nuxt_list'),route: {name: 'nuxt.index'}},
              {title: this.$t('nuxt_create'),route: {name: 'nuxt.create'}},
            ]
          },
          {
            action: 'toc',
            title: this.$t('catelog'),
            items: [
              {title: this.$t('catelog_list'),route: {name: 'catelog.index'}},
              {title: this.$t('catelog_create'),route: {name: 'catelog.create'}},
            ]
          },
          {
            action: 'toc',
            title: this.$t('banner'),
            items: [
              {title: this.$t('banner_list'),route: {name: 'banner.index'}},
              {title: this.$t('banner_create'),route: {name: 'banner.create'}},
            ]
          }
        ],
        itemss: [
          {title: 'Dashboard', icon: 'dashboard', route: {name: 'home'}},
          {title: 'Account', icon: 'account_box', route: {name: 'settings.profile'}},
          {
            title: 'Post',
            icon: 'account_box',
            subIcon: 'keyboard_arrow_up',
            'sub-icon-alt': 'keyboard_arrow_down',
            model: false,
            children: [
              {title: '文章列表', icon: 'account_box', route: {name: 'post.index'}},
              {title: '文章发布', icon: 'account_box', route: {name: 'post.create'}},

            ]
          }
        ]
      }
    }
  }
</script>

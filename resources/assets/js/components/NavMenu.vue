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
    <v-list dense>
      <template v-for="(item, i) in items">
        <v-layout
          row
          v-if="item.heading"
          align-center
          :key="i"
        >
          <v-flex xs6>
            <v-subheader v-if="item.heading">
              {{ item.heading }}
            </v-subheader>
          </v-flex>
          <v-flex xs6 class="text-xs-center">
            <a href="#!" class="body-2 black--text">EDIT</a>
          </v-flex>
        </v-layout>
        <v-list-group v-else-if="item.children" v-model="item.model" no-action>
          <v-list-tile exact slot="item" @click="">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.title }}
              </v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon>{{ item.model ? item.subIcon : item['sub-icon-alt'] }}</v-icon>
            </v-list-tile-action>
          </v-list-tile>
          <v-list-tile
            v-for="(child, i) in item.children"
            :key="i"
            append
            exact
            :to="child.route"
            @click=""
          >
            <v-list-tile-action v-if="child.icon">
              <v-icon>{{ child.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ child.title }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>
        <v-list-tile append exact :to="item.route" v-else @click="">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              {{ item.title }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-list>
    <!--<v-list>-->
      <!--<v-list-tile-->
        <!--value="true"-->
        <!--v-for="(item, i) in items"-->
        <!--:key="i"-->
        <!--:to="item.route"-->
      <!--&gt;-->
        <!--<v-list-tile-action>-->
          <!--<v-icon light v-html="item.icon"></v-icon>-->
        <!--</v-list-tile-action>-->
        <!--<v-list-tile-content>-->
          <!--<v-list-tile-title v-text="item.title"></v-list-tile-title>-->
        <!--</v-list-tile-content>-->
      <!--</v-list-tile>-->
    <!--</v-list>-->
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: this.$t('nav_menu_title'),
      items: [
        { title: 'Dashboard', icon: 'dashboard', route: { name: 'home' } },
        { title: 'Account', icon: 'account_box', route: { name: 'settings.profile' } },
        {
          title: 'Post',
          icon: 'account_box',
          subIcon: 'keyboard_arrow_up',
          'sub-icon-alt': 'keyboard_arrow_down',
          model: false,
          children: [
            { title: '文章列表',icon: 'account_box', route: { name: 'post.index' } },
            { title: '文章发布',icon: 'account_box', route: { name: 'post.create' } },

          ]
        }
      ]
    }
  }
}
</script>

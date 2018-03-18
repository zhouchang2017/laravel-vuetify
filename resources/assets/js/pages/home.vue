<template>
    <v-card>
        <v-card-title primary-title class="grey lighten-4">
            <h3 class="headline mb-0">{{ $t('home') }}</h3>
        </v-card-title>
        <v-divider></v-divider>

        <v-container grid-list-xl>
            <v-layout row wrap align-center>
                <v-flex d-inline lg4 xs12 md6 sm6>
                    <z-card :name="$t('post')" :count="post.count">
                        <v-card-title slot="action">
                            <v-spacer></v-spacer>
                            <v-btn dark icon class="mr-3" :to="{name:'post.create'}">
                                <v-icon>edit</v-icon>
                            </v-btn>
                            <v-btn dark icon :to="{name:'post.index'}">
                                <v-icon>more_vert</v-icon>
                            </v-btn>
                        </v-card-title>
                    </z-card>
                </v-flex>

                <v-flex d-inline lg4 xs12 md6 sm6>
                    <z-card :name="$t('catelog')" :avatar="catelog.avatar" :count="catelog.count">
                        <v-card-title slot="action">
                            <v-spacer></v-spacer>
                            <v-btn dark icon class="mr-3" :to="{name:'catelog.create'}">
                                <v-icon>edit</v-icon>
                            </v-btn>
                            <v-btn dark icon :to="{name:'catelog.index'}">
                                <v-icon>more_vert</v-icon>
                            </v-btn>
                        </v-card-title>
                    </z-card>
                </v-flex>

                <v-flex d-inline lg4 xs12 md6 sm6>
                    <z-card :name="$t('nuxt')" :avatar="nuxt.avatar" :count="nuxt.count">
                        <v-card-title slot="action">
                            <v-spacer></v-spacer>
                            <v-btn dark icon class="mr-3" :to="{name:'nuxt.create'}">
                                <v-icon>edit</v-icon>
                            </v-btn>
                            <v-btn dark icon :to="{name:'nuxt.index'}">
                                <v-icon>more_vert</v-icon>
                            </v-btn>
                        </v-card-title>
                    </z-card>
                </v-flex>

            </v-layout>
        </v-container>
        <v-divider></v-divider>
    </v-card>
</template>

<script>
  import ZCard from '~/components/ZCard'

  export default {
    components: {ZCard},
    name: 'home-view',
    metaInfo () {
      return {title: this.$t('home')}
    },
    data () {
      return {
        post: {
          count: 0
        },
        catelog: {
          count: 0,
          avatar: 'https://photo.tuchong.com/1111309/f/18146421.jpg'
        },
        nuxt:{
          count:0,
          avatar:'https://photo.tuchong.com/1111309/f/18116058.jpg'
        }
      }
    },
    async created () {
      [
        this.post.count,
        this.catelog.count,
        this.nuxt.count
      ] = await Promise.all([
        await this.$store.dispatch('post/count'),
        await this.$store.dispatch('catelog/count'),
        await this.$store.dispatch('nuxt/count')
      ])
    }
  }
</script>

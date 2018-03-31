<template>
    <v-card>
        <v-card-title primary-title class="grey lighten-4">
            <h3 class="headline mb-0">{{ name }}</h3>
        </v-card-title>
        <v-divider></v-divider>

        <v-toolbar
                tabs
                card
        >
            <v-text-field
                    prepend-icon="search"
                    label="Search"
                    v-model="query"
                    @input="inputEvent"
                    solo-inverted
                    class="mx-3"
                    flat
            ></v-text-field>
            <v-tabs
                    slot="extension"
                    centered
                    v-model="tabs"
                    show-arrows

            >
                <v-tabs-slider color="primary"></v-tabs-slider>
                <v-tab
                        v-for="nuxt in tempNuxts"
                        :key="nuxt.id"
                >
                    {{ nuxt.name }}
                </v-tab>
            </v-tabs>
        </v-toolbar>
        <v-tabs-items v-model="tabs" v-if="loaded">
            <v-tab-item
                    v-for="nuxt in nuxts"
                    :key="nuxt.id"
            >
                <v-form v-model="valid" :ref="'tab-' + nuxt.id +'form'" lazy-validation>
                    <v-card>

                        <v-card-title primary-title>
                            <div>
                                <div class="headline">Index Navigation Link</div>
                                <span class="grey--text">设置在客户端首页导航栏链接</span>
                            </div>
                        </v-card-title>

                        <v-divider class="mt-5"></v-divider>
                        <v-card-title primary-title>
                            <div>
                                <div class="headline">Banner</div>
                                <span class="grey--text">设置在客户端显示的海报大图</span>
                            </div>
                        </v-card-title>
                        <v-card-text>
                            <v-text-field
                                    label="文章标题"
                                    v-model="nuxt.formData.title"
                                    :rules="titleRules"
                                    :counter="32"
                                    required
                            ></v-text-field>

                            <v-radio-group row label="banner图片" v-model="nuxt.formData.bannerAvatarIsUrl"
                                           :mandatory="false">
                                <v-radio label="url地址" :value="true"></v-radio>
                                <v-radio label="上传图片" :value="false"></v-radio>
                            </v-radio-group>

                            <v-text-field
                                    v-show="nuxt.formData.bannerAvatarIsUrl"
                                    label="图片地址"
                                    v-model="nuxt.formData.avatar"
                                    required
                            ></v-text-field>

                            <upload-button
                                    v-show="!nuxt.formData.bannerAvatarIsUrl"
                                    class="mx-0"
                                    accept="image/*"
                                    ref="fileInput"
                                    @getPath="getPath(src,nuxt)"
                            />
                        </v-card-text>
                        <v-divider class="mt-5"></v-divider>
                        <v-card-title primary-title>
                            <div>
                                <div class="headline">Recommend Catalog</div>
                                <span class="grey--text">设置在客户端首页推荐的类目</span>
                            </div>
                        </v-card-title>
                        <v-divider class="mt-5"></v-divider>

                        <v-card-actions>
                            <v-btn flat @click="resetForm()">Clear</v-btn>
                            <v-spacer></v-spacer>

                            <v-btn color="primary" :disabled="!valid" flat @click="submit">Submit</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-form>
            </v-tab-item>
        </v-tabs-items>
    </v-card>
</template>

<script>
  import UploadButton from '~/components/UploadButton'

  export default {
    name: 'nuxt_setting',
    data () {
      return {
        query: '',
        bannerAvatarIsUrl: true,
        tabs: 0,
        loaded: false,
        name: this.$t('nuxt_settings'),
        nuxts: [],
        loading: false,
        valid: true,
        titleRules: [
          (v) => !!v || 'Title is required',
          (v) => v && v.length <= 64 || 'Title must be less than 64 characters'
        ],
        tempNuxts: []
      }
    },
    watch: {},
    components: {
      UploadButton
    },
    methods: {
      inputEvent (q) {
        this.tempNuxts = this.nuxts.filter(item => {
          return item.name.includes(q) || item.prefix.includes(q)
        })
      },
      async fetch () {
        this.loading = true
        let queryBuild = {limit: 'all'}
        queryBuild.sortedBy = 'desc'
        queryBuild.orderBy = 'created_at'
        let nuxts = await this.$store.dispatch('nuxt/index', queryBuild)
        this.$set(this, 'nuxts', nuxts)
        this.loading = false
      },
      async submit () {
        if (this.$refs.form.validate()) {
          // Native form submission is not yet supported
          await this.$store.dispatch('post/store', {formDate: this.formDate})
          this.$store.dispatch('message/responseMessage', {
            text: this.$t('post_create_success')
          })
          this.$router.replace({name: 'post.index'})
        }
      },
      resetForm () {
        this.errorMessages = []
        this.formHasErrors = false
        this.$refs.form.reset()
      },
      getPath (src, nuxt) {
        nuxt.formData.avatar = src
      },
    },
    async created () {
      await this.fetch()

      this.nuxts.forEach((item, index) => {
        this.$set(this.nuxts[index], 'formData', {
          avatar: '',
          title: '',
          bannerAvatarIsUrl: true
        })
      })
      this.tempNuxts = this.nuxts
      this.loaded = true
    }
  }
</script>

<style scoped>

</style>

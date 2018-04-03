<template>
    <v-card>
        <v-card-title primary-title class="grey lighten-4">
            <h3 class="headline mb-0">{{ name }}</h3>
        </v-card-title>
        <v-divider></v-divider>
        <v-form v-model="valid" ref="form" lazy-validation>
            <v-card>
                <v-card-title primary-title>
                    <div>
                        <div class="headline">Client Base Config</div>
                        <span class="grey--text">客户端基本配置</span>
                    </div>
                </v-card-title>
                <v-card-text>
                    <v-text-field
                            label="客户端名称"
                            v-model="formData.nuxt.name"
                            :rules="[()=>!!formData.nuxt.name || 'client is required!!']"
                            :counter="32"
                            required
                    ></v-text-field>
                    <v-text-field
                            label="客户端前缀"
                            v-model="formData.nuxt.prefix"
                            :rules="[()=>!!formData.nuxt.prefix || 'prefix is required!!']"
                            :counter="10"
                            required
                    ></v-text-field>
                </v-card-text>
                <v-divider class="mt-2"></v-divider>
                <v-card-title primary-title>
                    <div>
                        <div class="headline">Banner</div>
                        <span class="grey--text">设置在客户端显示的海报大图</span>
                    </div>
                </v-card-title>
                <v-card-text>
                    <v-radio-group row label="banner位置" v-model="formData.banner.type"
                                   :mandatory="false">
                        <v-radio label="首页头部巨幕海报" value="main"></v-radio>
                        <v-radio label="首页中部海报" value="mid"></v-radio>
                    </v-radio-group>

                    <v-text-field
                            label="Banner标题"
                            v-model="formData.banner.title"
                            :rules="[()=>!!formData.banner.title || 'title is required!!']"
                            :counter="32"
                            required
                    ></v-text-field>

                    <v-radio-group row label="banner图片" v-model="bannerAvatarIsUrl"
                                   :mandatory="false">
                        <v-radio label="url地址" :value="true"></v-radio>
                        <v-radio label="上传图片" :value="false"></v-radio>
                    </v-radio-group>

                    <v-text-field
                            v-show="bannerAvatarIsUrl"
                            label="图片地址"
                            v-model="formData.banner.avatar"
                            required
                    ></v-text-field>

                    <upload-button
                            v-show="!bannerAvatarIsUrl"
                            class="mx-0"
                            accept="image/*"
                            ref="fileInput"
                            @getPath="getPath"
                    />

                    <v-select
                            clearable
                            label="关联文章"
                            item-text="title"
                            item-value="id"
                            autocomplete
                            :loading="loading"
                            cache-items
                            chips
                            :items="posts"
                            :search-input.sync="search"
                            v-model="formData.banner.post_id"
                    ></v-select>

                    <v-text-field
                            :disabled="!!formData.banner.post_id"
                            label="链接地址"
                            v-model="formData.banner.link"
                    ></v-text-field>

                    <v-text-field
                            label="排序权重"
                            v-model="formData.banner.sort"
                            required
                            :rules="[()=>/^-?\d+$/.test(formData.banner.sort) || '必须为数字']"
                    ></v-text-field>


                </v-card-text>
                <v-divider class="mt-2"></v-divider>
                <v-card-title primary-title>
                    <div>
                        <div class="headline">Recommend Catelog</div>
                        <span class="grey--text">设置在客户端首页推荐的分类</span>
                    </div>
                </v-card-title>
                <v-card-text v-if="catelogsLoaded">
                    <v-select
                            label="文章分类"
                            :items="catelogs"
                            item-text="name"
                            item-value="id"
                            v-model="formData.catelogs"
                            multiple
                            max-height="400"
                            hint="请选择文章分类"
                            persistent-hint
                            chips
                    >
                        <template slot="selection" slot-scope="data">
                            <v-chip
                                    close
                                    @input="data.parent.selectItem(data.item)"
                                    :selected="data.selected"
                                    class="chip--select-multi"
                                    :key="JSON.stringify(data.item)"
                            >
                                {{ data.item.name }}
                            </v-chip>
                        </template>
                    </v-select>
                </v-card-text>
                <v-divider class="mt-2"></v-divider>
                <v-card-actions>
                    <v-btn flat @click="resetForm">Clear</v-btn>
                    <v-spacer></v-spacer>

                    <v-btn color="primary" :disabled="!valid" flat @click="submit">Submit</v-btn>
                </v-card-actions>
            </v-card>
        </v-form>
    </v-card>
</template>

<script>
  import UploadButton from '~/components/UploadButton'

  export default {
    name: 'nuxt_create',
    components: {
      UploadButton,
    },
    data () {
      return {
        name: this.$t('nuxt_create'),
        bannerAvatarIsUrl: true,
        search: null,
        loading: false,
        catelogs: {},
        posts: [],
        formData: {
          nuxt: {
            name: '',
            prefix: ''
          },
          banner: {
            title: '',
            avatar: '',
            type: 'main',
            link: '',
            post_id: null,
            sort:0
          },
          catelogs: []
        },
        valid: true,
        catelogsLoaded: false
      }
    },
    watch: {
      search (val) {
        val && this.querySelections(val)
      }
    },
    methods: {
      querySelections (val) {
        this.loading = true
        // Simulated ajax query
        setTimeout(async () => {
          let queryBuild = {
            search: `title:${val}`,
            searchFields: 'title:like'
          }
          this.posts = await this.fetchPosts(queryBuild)
          this.loading = false
        }, 500)
      },
      async fetchPosts(queryBuild){
        let {data} = await this.$store.dispatch('post/index', queryBuild)
        return data
      },
      getPath (src) {
        console.log(src)
        this.formData.banner.avatar = src
      },
      resetForm () {
        this.errorMessages = []
        this.formHasErrors = false
        this.$refs.form.reset()
      },
      async submit () {
        if (this.$refs.form.validate()) {
          // Native form submission is not yet supported
          await this.$store.dispatch('nuxt/store', {formData: this.formData})
          this.$store.dispatch('message/responseMessage', {
            text: this.$t('nuxt_create_success')
          })
          this.$router.replace({name: 'nuxt.index'})
        }
      },
      async fetchCatelog () {
        let queryBuild = {}
        let catelogs = await this.$store.dispatch('catelog/index', queryBuild)
        this.$set(this, 'catelogs', catelogs)
        this.catelogsLoaded = true
      }
    },
    async created () {
      await this.fetchCatelog()
      this.posts = await this.fetchPosts({})
    }

  }
</script>

<style scoped>

</style>

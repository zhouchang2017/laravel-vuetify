<template>
    <v-form v-model="valid" ref="form" lazy-validation>
        <v-card>
            <v-card-title primary-title>
                <div>
                    <div class="headline">Banner</div>
                    <span class="grey--text">设置在客户端显示的海报大图</span>
                </div>
            </v-card-title>
            <v-card-text>
                <v-radio-group row label="banner位置" v-model="banner.type"
                               :mandatory="false">
                    <v-radio label="首页头部巨幕海报" value="main"></v-radio>
                    <v-radio label="首页中部海报" value="mid"></v-radio>
                </v-radio-group>

                <v-text-field
                        label="Banner标题"
                        v-model="banner.title"
                        :rules="[()=>!!banner.title || 'title is required!!']"
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
                        v-model="banner.avatar"
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
                        v-model="banner.post_id"
                ></v-select>

                <v-text-field
                        :disabled="!!banner.post_id"
                        label="链接地址"
                        v-model="banner.link"
                ></v-text-field>

                <v-text-field
                        label="排序权重"
                        v-model="banner.sort"
                        required
                        :rules="[()=>/^-?\d+$/.test(banner.sort) || '必须为数字']"
                ></v-text-field>

                <v-layout row wrap>
                    <v-flex xs12 sm6>
                        <v-dialog
                                ref="dialogStart"
                                persistent
                                v-model="showDialogStart"
                                lazy
                                full-width
                                width="290px"
                                :return-value.sync="banner.start_at"
                        >
                            <v-text-field
                                    slot="activator"
                                    label="开始时间"
                                    v-model="banner.start_at"
                                    prepend-icon="event"
                                    readonly
                            ></v-text-field>
                            <v-date-picker v-model="banner.start_at" scrollable>
                                <v-spacer></v-spacer>
                                <v-btn flat color="primary" @click="showDialogStart = false">Cancel</v-btn>
                                <v-btn flat color="primary" @click="$refs.dialogStart.save(banner.start_at)">OK</v-btn>
                            </v-date-picker>
                        </v-dialog>
                    </v-flex>
                    <v-flex xs12 sm6>
                        <v-spacer></v-spacer>
                        <v-dialog
                                ref="dialogEnd"
                                persistent
                                v-model="showDialogEnd"
                                lazy
                                full-width
                                width="290px"
                                :return-value.sync="banner.end_at"
                        >
                            <v-text-field
                                    slot="activator"
                                    label="结束时间"
                                    v-model="banner.end_at"
                                    prepend-icon="event"
                                    readonly
                            ></v-text-field>
                            <v-date-picker v-model="banner.end_at" scrollable>
                                <v-spacer></v-spacer>
                                <v-btn flat color="primary" @click="showDialogEnd = false">Cancel</v-btn>
                                <v-btn flat color="primary" @click="$refs.dialogEnd.save(banner.end_at)">OK</v-btn>
                            </v-date-picker>
                        </v-dialog>
                    </v-flex>
                </v-layout>

            </v-card-text>

            <v-divider class="mt-2"></v-divider>
            <v-card-actions>
                <v-btn flat @click="resetForm">Clear</v-btn>
                <v-spacer></v-spacer>

                <v-btn color="primary" :disabled="!valid" flat @click="submit">Submit</v-btn>
            </v-card-actions>
        </v-card>
    </v-form>
</template>

<script>
  import UploadButton from '~/components/UploadButton'

  export default {
    name: 'banner-create-form',
    components: {
      UploadButton,
    },
    props: {
      editData: {
        type: Object,
        default: null
      },
    },
    data () {
      return {
        bannerAvatarIsUrl: true,
        search: null,
        loading: false,
        posts: [],
        banner: {
          title: '',
          avatar: '',
          type: 'main',
          link: '',
          post_id: null,
          start_at: null,
          end_at: null,
          sort: 0
        },
        valid: true,
        date: null,
        showDialogStart: false,
        showDialogEnd: false
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
      async fetchPosts (queryBuild) {
        let {data} = await this.$store.dispatch('post/index', queryBuild)
        return data
      },
      getPath (src) {
        console.log(src)
        this.banner.avatar = src
      },
      resetForm () {
        this.errorMessages = []
        this.formHasErrors = false
        this.$refs.form.reset()
      },
      async submit () {
        if (this.$refs.form.validate()) {
          // Native form submission is not yet supported
          if(this.editData){
            let {id,...props} = this.banner
            let res = await this.$store.dispatch('banner/update', {id,props})
            this.$store.dispatch('message/responseMessage', {
              text: this.$t('banner_update_success')
            })
            this.$router.replace({name:'banner.index'})
          }else{
            let res = await this.$store.dispatch('banner/store', this.banner)
            this.$store.dispatch('message/responseMessage', {
              text: this.$t('banner_create_success')
            })
            this.$router.replace({name:'banner.index'})
          }

        }
      }
    },
    async created () {
      this.posts = await this.fetchPosts({})
      if(this.editData){
        this.$set(this,'banner',this.editData)
      }
    }
  }
</script>

<style scoped>

</style>
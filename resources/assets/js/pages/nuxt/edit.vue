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
                            v-model="formData.name"
                            :rules="[()=>!!formData.name || 'client is required!!']"
                            :counter="32"
                            required
                    ></v-text-field>
                    <v-text-field
                            label="客户端前缀"
                            v-model="formData.prefix"
                            :rules="[()=>!!formData.prefix || 'prefix is required!!']"
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

                    <v-select
                            clearable
                            label="关联Banner"
                            item-text="title"
                            item-value="id"
                            autocomplete
                            :loading="loading"
                            cache-items
                            chips
                            multiple
                            :items="banners"
                            :search-input.sync="search"
                            v-model="formData.banners"
                    >
                        <template slot="selection" slot-scope="data">
                            <v-chip
                                    close
                                    @input="data.parent.selectItem(data.item)"
                                    :selected="data.selected"
                                    class="chip--select-multi"
                                    :key="JSON.stringify(data.item)"
                                    :color="data.item.type === 'main' ? 'primary' : 'secondary'"
                                    text-color="white"
                            >
                                <v-avatar>
                                    <img :src="data.item.avatar">
                                </v-avatar>
                                {{ data.item.title }}
                            </v-chip>
                        </template>
                        <template slot="item" slot-scope="data">
                            <v-list-tile-avatar tile>
                                <img :src="data.item.avatar">
                            </v-list-tile-avatar>
                            <v-list-tile-content>
                                <v-list-tile-title v-html="data.item.title"></v-list-tile-title>
                                <!--<v-list-tile-sub-title v-html="data.item.type"></v-list-tile-sub-title>-->
                            </v-list-tile-content>
                            <v-list-tile-action>
                                <v-list-tile-action-text>位置:{{ data.item.type }}</v-list-tile-action-text>
                            </v-list-tile-action>
                        </template>
                    </v-select>

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

                    <v-spacer></v-spacer>

                    <v-btn color="primary" :disabled="!valid" flat @click="submit">Submit</v-btn>
                </v-card-actions>
            </v-card>
        </v-form>
    </v-card>
</template>

<script>
  export default {
    name: 'nuxt_edit',
    data () {
      return {
        name: this.$t('nuxt_edit'),
        body: {},
        loaded: false,
        loading: false,
        valid: true,
        search: null,
        formData: {},
        catelogs: {},
        banners: [],
        catelogsLoaded:false
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
          this.posts = await this.fetchBanners(queryBuild)
          this.loading = false
        }, 500)
      },
      async submit () {
        if (this.$refs.form.validate()) {
          // Native form submission is not yet supported
          await this.$store.dispatch('nuxt/update', {id: this.formData.id, props: this.formData})
          this.$store.dispatch('message/responseMessage', {
            text: this.$t('nuxt_update_success')
          })
          this.$router.replace({name: 'nuxt.index'})
        }
      },
      async fetchBanners (queryBuild) {
        let {data} = await this.$store.dispatch('banner/index', queryBuild)
        return data
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
      this.banners = await this.fetchBanners({})
      this.formData = await this.$store.dispatch('nuxt/edit', {id: this.$route.params.id})
      this.formData.banners = this.formData.banners.map(item => item.id)
      this.formData.catelogs = this.formData.catelogs.map(item => item.id)
      this.loaded = true
    }
  }
</script>

<style scoped>

</style>

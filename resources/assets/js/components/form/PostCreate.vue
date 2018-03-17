<template>
    <v-form v-model="valid" ref="form" lazy-validation>
        <v-card>
            <v-card-text>
                <v-text-field
                        label="文章标题"
                        v-model="title"
                        :rules="titleRules"
                        :counter="32"
                        required
                ></v-text-field>


                <upload-button
                        class="mx-0"
                        accept="image/*"
                        ref="fileInput"
                        @getPath="getPath"
                />

                <v-select
                        label="服务器"
                        :items="nuxts"
                        item-text="name"
                        item-value="id"
                        v-model="selectedNuxts"
                        multiple
                        max-height="400"
                        hint="选择需要展现的服务器"
                        persistent-hint
                        :rules="selectedNuxtsRules"
                        chips
                        required
                        :loading="nuxtBusy"
                >
                    <template slot="selection" slot-scope="data">
                        <v-chip
                                close
                                @input="nuxtSelect({parent:data.parent,item:data.item})"
                                :selected="data.selected"
                                class="chip--select-multi"
                                :key="JSON.stringify(data.item)"
                        >
                            {{ data.item.name }}
                        </v-chip>
                    </template>
                </v-select>

                <v-select
                        label="文章类型"
                        :items="catelogs"
                        item-text="name"
                        item-value="id"
                        v-model="selectedCatelogs"
                        multiple
                        max-height="400"
                        hint="请选择文章类型"
                        persistent-hint
                        :rules="selectedCatelogsRules"
                        chips
                        required
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

                <v-progress-linear
                        :indeterminate="query"
                        :query="true"
                        v-model="uploadProgress"
                        :active="uploadProgressShow"
                ></v-progress-linear>
                <vue-editor id="editor"
                            useCustomImageHandler
                            @imageAdded="handleImageAdded" v-model="content">
                </vue-editor>

            </v-card-text>
            <v-divider class="mt-5"></v-divider>
            <v-card-actions>
                <v-btn flat @click="resetForm">Clear</v-btn>
                <v-spacer></v-spacer>

                <v-btn color="primary" :disabled="!valid" flat @click="submit">Submit</v-btn>
            </v-card-actions>
        </v-card>
    </v-form>
</template>

<script>
  import { VueEditor } from 'vue2-editor'
  import UploadButton from '~/components/UploadButton'
  import Upload from '~/components/upload/Upload'

  export default {
    name: 'post-edit',
    components: {
      UploadButton, Upload, VueEditor
    },
    data () {
      return {
        uploadProgress: 0,
        uploadProgressShow: false,
        query: false,
        toggle_multiple: [],
        nuxtBusy: false,
        valid: true,
        title: '',
        avatar: '',
        selectedNuxts: [],
        selectedCatelogs: [],
        titleRules: [
          (v) => !!v || 'Title is required',
          (v) => v && v.length <= 64 || 'Title must be less than 64 characters'
        ],
        selectedNuxtsRules: [
          (v) => v.length > 0 || 'Service is required'
        ],
        selectedCatelogsRules: [
          (v) => v.length > 0 || 'Catelogs is required'
        ],
        content: '',

        catelogs: [],
        nuxts: []
      }
    },
    methods: {
      async handleImageAdded (file, Editor, cursorLocation, resetUploader) {
        this.query = true
        this.uploadProgressShow = true
        this.uploadProgress = 0
        this.query = false

        let config = {
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          onUploadProgress: progressEvent => {
            this.uploadProgress = Math.round((
              progressEvent.loaded * 100) / progressEvent.total)
            if (this.uploadProgress >= 100) {
              this.uploadProgressShow = false
            }
          }
        }
        let formData = new FormData()
        formData.append('avatar', file)

        let {data} = await this.$store.dispatch('file/uploadImage', {formData, config})
        Editor.insertEmbed(cursorLocation, 'image', data)
        resetUploader()

      },
      fetchCatelogs () {
        return this.$store.dispatch('catelog/get')
      },
      fetchNuxts () {
        return this.$store.dispatch('nuxt/get')
      },
      nuxtSelect ({parent, item}) {
        parent.selectItem(item)
      },
      getPath (src) {
        this.avatar = src
      },
      async submit () {
        if (this.$refs.form.validate()) {
          // Native form submission is not yet supported
          await this.$store.dispatch('post/store', {formDate: this.formDate})
          this.$store.dispatch('message/responseMessage',{
            text:this.$t('post_create_success')
          })
          this.$router.replace({name: 'post.index'})
        }
      },
      resetForm () {
        this.errorMessages = []
        this.formHasErrors = false
        this.$refs.form.reset()
      }
    },
    computed: {
      formDate () {
        return {
          title: this.title,
          avatar: this.avatar,
          nuxts: this.selectedNuxts,
          catelogs: this.selectedCatelogs,
          body: this.content
        }
      }
    },
    watch: {
      name () {
        this.errorMessages = []
      }
    },
    async created () {
      this.catelogs = await this.fetchCatelogs()
      this.nuxts = await this.fetchNuxts()
    }
  }
</script>

<style>
    .quill-editor {
        height: 500px;
        margin-bottom: 20px;
    }

    input[type=file] {
        position: absolute;
        right: 0;
        top: 0;
        opacity: 0;
        filter: alpha(opacity=0);
        cursor: pointer
    }
</style>

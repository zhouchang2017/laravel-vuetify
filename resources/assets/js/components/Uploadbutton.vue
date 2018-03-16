<template>
    <div>
        <v-card>
            <v-card-media contain :class="{'loading':loading}" v-show="imageUrl" ref="imageUrl" style="cursor: pointer;"
                          @click.stop="dialog = true" :src="imageUrl" height="200px">
            </v-card-media>

            <v-btn large
                   block
                   raised
                   color="info"
                   @click="onPickFile"
                   v-show="progress === 0">
                {{ selectLabel }}
            </v-btn>
            <v-progress-linear v-show="loading" height="40" class="my-0"
                               v-model="progress" :color="color"></v-progress-linear>
            <v-btn large block raised class="error" @click="removeFile" v-show="progress === 100">
                {{ removeLabel }}
            </v-btn>
            <input
                    type="file"
                    ref="image"
                    name="image"
                    :accept="accept"
                    @change="onFilePicked"
            >
        </v-card>
        <v-dialog fullscreen v-model="dialog" max-width="100%" lazy>
            <v-card full-height>
                <v-card-title>
                    <span>图片预览</span>
                    <v-spacer></v-spacer>
                    <v-btn icon @click.stop="dialog = false">

                        <v-icon>clear</v-icon>
                    </v-btn>
                </v-card-title>
                <v-card-media contain :class="{'loading':loading}"
                              :src="imageUrl" :height="dialogHeight">
                </v-card-media>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn flat @click.stop="removeFile">Delete</v-btn>
                    <v-btn color="primary" flat @click.stop="dialog=false">Close</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
  export default {
    props: {
      value: {
        type: String
      },
      accept: {
        type: String,
        default: '*'
      },
      selectLabel: {
        type: String,
        default: 'Select an image'
      },
      removeLabel: {
        type: String,
        default: 'Remove'
      }
    },

    data () {
      return {
        imageUrl: '',
        progress: 0,
        loading: false,
        dialog: false
      }
    },

    watch: {
      // value (v) {
      //   this.imageUrl = v
      // }
    },

    mounted () {
      this.imageUrl = ''
    },
    computed: {
      dialogHeight () {
        return this.$vuetify.breakpoint.height - 100
      },
      color () {
        return ['error', 'warning', 'success'][Math.floor(this.progress / 40)]
      }
    },
    methods: {

      onPickFile () {
        this.$refs.image.click()
      },

      async onFilePicked (event) {
        const files = event.target.files || event.dataTransfer.files

        if (files && files[0]) {
          let filename = files[0].name

          if (filename && filename.lastIndexOf('.') <= 0) {
            return //return alert('Please add a valid image!')
          }

          const fileReader = new FileReader()
          fileReader.addEventListener('load', () => {
            this.imageUrl = fileReader.result
          })
          fileReader.readAsDataURL(files[0])

          let path = await this.upload(files[0])
          // this.imageUrl = path
          this.$emit('getPath', path)
        }
      },

      removeFile () {
        this.imageUrl = ''
        this.progress = 0
        this.dialog = false
        this.$store.dispatch('message/responseMessage', {text: this.$t('remove_img_success')})
      },

      async upload (e) {
        let formData = new FormData()
        let config = {
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          onUploadProgress: progressEvent => {
            this.progress = Math.round((
              progressEvent.loaded * 100) / progressEvent.total)
            if (this.progress >= 100) this.loading = false
          }
        }
        formData.append('avatar', e)
        this.loading = true
        let {data} = await this.$store.dispatch('file/uploadImage', {formData, config})
        this.loading = false
        return data
      }
    }
  }
</script>

<style scoped>
    input[type=file] {
        position: absolute;
        left: -99999px;
    }

    .loading {
        opacity: 0.4;
    }
</style>
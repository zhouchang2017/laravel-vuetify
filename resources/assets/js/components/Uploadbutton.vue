<template>
    <v-card>
        <v-card-media :class="{'loading':loading}" v-show="imageUrl" ref="imageUrl" style="cursor: pointer;"
                      @click="onPickFile" :src="imageUrl" height="200px">
        </v-card-media>

        <v-btn large
               block
               raised
               color="info"
               :loading="loading"
               @click="onPickFile"
               v-show="progress === 0">
            {{ selectLabel }}
        </v-btn>
        <v-progress-linear v-show="loading" height="40" class="my-0" color="info"
                           v-model="progress"></v-progress-linear>
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
        loading: false
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
      },

      async upload (e) {
        let formData = new FormData()
        let config = {
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          onUploadProgress: progressEvent => {
            this.progress = Math.round((progressEvent.loaded * 100) / progressEvent.total)
            if (this.progress >= 100) this.loading = false
          }
        }
        formData.append('avatar', e)
        try {
          this.loading = true
          let {data} = await this.$store.dispatch('uploadImage', {formData, config})
          return data
        } catch (err) {
          console.error(err.response)
        }
        // this.image = e
      },
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
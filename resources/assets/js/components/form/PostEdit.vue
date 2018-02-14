<template>
    <v-form v-model="valid" ref="form" lazy-validation>
        <v-card>
            <v-card-text>
                <v-text-field
                        label="文章标题"
                        v-model="title"
                        :rules="titleRules"
                        :counter="10"
                        required
                ></v-text-field>
                <img src="/storage/avatars/HJ5IpuHaK8hFyjPHjEiwoAZQQSISto1o8mHF6IBU.jpeg" alt="">
                <upload-button
                        accept="image/*"
                        ref="fileInput"
                        @input="getUploadedFile"
                />
                <quill-editor ref="myTextEditor"
                              v-model="content"
                              :options="editorOption"
                              @blur="onEditorBlur($event)"
                              @focus="onEditorFocus($event)"
                              @ready="onEditorReady($event)">
                </quill-editor>
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
  import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.snow.css'
  import 'quill/dist/quill.bubble.css'

  import { quillEditor } from 'vue-quill-editor'
  import UploadButton from '~/components/UploadButton'

  export default {
    name: 'post-edit',
    components: {
      quillEditor, UploadButton
    },
    data () {
      return {
        valid: true,
        title: '',
        image: '',
        titleRules: [
          (v) => !!v || 'Title is required',
          (v) => v && v.length <= 10 || 'Title must be less than 10 characters'
        ],
        content: '',
        // formHasErrors: false,
        editorOption: {
          modules: {
            toolbar: [
              ['bold', 'italic', 'underline', 'strike'],
              ['blockquote', 'code-block'],
              [{'header': 1}, {'header': 2}],
              [{'list': 'ordered'}, {'list': 'bullet'}],
              [{'script': 'sub'}, {'script': 'super'}],
              [{'indent': '-1'}, {'indent': '+1'}],
              [{'direction': 'rtl'}],
              [{'size': ['small', false, 'large', 'huge']}],
              [{'header': [1, 2, 3, 4, 5, 6, false]}],
              [{'font': []}],
              [{'color': []}, {'background': []}],
              [{'align': []}],
              ['clean'],
              ['link', 'image', 'video']
            ]
          }
        }
      }
    },
    methods: {
      async getUploadedFile (e) {
        console.log(e)
        let formData = new FormData()
        let config = {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
        formData.append('avatar', e)
        let res = await this.$store.dispatch('uploadImage', formData, config)
        console.log(res)
        // this.image = e
      },
      submit () {
        if (this.$refs.form.validate()) {
          // Native form submission is not yet supported
          axios.post('/api/submit', {
            name: this.name
          })
        }
      },
      resetForm () {
        this.errorMessages = []
        this.formHasErrors = false
        this.$refs.form.reset()
      },
      onEditorBlur (editor) {
        console.log('editor blur!', editor)
      },
      onEditorFocus (editor) {
        console.log('editor focus!', editor)
      },
      onEditorReady (editor) {
        console.log('editor ready!', editor)
      }
    },
    computed: {
      editor () {
        return this.$refs.myTextEditor.quill
      },
      form () {
        return {
          title: this.title
        }
      }
    },
    watch: {
      name () {
        this.errorMessages = []
      }
    }
  }
</script>

<style scoped>
    .quill-editor {
        height: 500px;
        margin-bottom: 20px;
    }
</style>

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
                        :items="nuxtServicies"
                        item-text="name"
                        item-value="id"
                        v-model="nuxts"
                        multiple
                        max-height="400"
                        hint="选择需要展现的服务器"
                        persistent-hint
                        :rules="nuxtsRules"
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
                        :items="states"
                        v-model="catelogs"
                        multiple
                        max-height="400"
                        hint="请选择文章类型"
                        persistent-hint
                        :rules="catelogsRules"
                        chips
                        required
                ></v-select>
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
  import Upload from '~/components/upload/Upload'

  export default {
    name: 'post-edit',
    components: {
      quillEditor, UploadButton, Upload
    },
    data () {
      return {
        nuxtBusy: false,
        valid: true,
        title: '',
        image: '',
        nuxts: [],
        catelogs: [],
        titleRules: [
          (v) => !!v || 'Title is required',
          (v) => v && v.length <= 64 || 'Title must be less than 64 characters'
        ],
        nuxtsRules: [
          (v) => v.length > 0 || 'Service is required'
        ],
        catelogsRules: [
          (v) => v.length > 0 || 'Catelogs is required'
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
        },
        states: [
          'Alabama', 'Alaska', 'American Samoa', 'Arizona',
          'Arkansas', 'California', 'Colorado', 'Connecticut',
          'Delaware', 'District of Columbia', 'Federated States of Micronesia',
          'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho',
          'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
          'Louisiana', 'Maine', 'Marshall Islands', 'Maryland',
          'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
          'Missouri', 'Montana', 'Nebraska', 'Nevada',
          'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
          'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio',
          'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',
          'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
          'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia',
          'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
        ],
        nuxtServicies: [
          {name: 'nuxt-1', id: 1},
          {name: 'nuxt-2', id: 2},
          {name: 'nuxt-3', id: 3},
          {name: 'nuxt-4', id: 4},
          {name: 'nuxt-5', id: 5},
          {name: 'nuxt-6', id: 6},
          {name: 'nuxt-7', id: 7},
        ]
      }
    },
    methods: {
      nuxtSelect ({parent, item}) {
        console.log(parent)
        console.log(item)
        this.nuxtBusy = true
        // Todo... 异步删除
        setTimeout(() => {
          parent.selectItem(item)
          this.nuxtBusy = false
        }, 2000)
      },
      getPath (src) {
        this.image = src
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

<template>
  <v-list two-line subheader>
    <!--<v-subheader inset>Folders</v-subheader>-->
    <v-list-tile v-for="(file, index) in files" :key="file.name" avatar  @click="">
      <v-list-tile-content>
        <v-list-tile-title>{{ file.name }}</v-list-tile-title>
        <v-list-tile-sub-title>
          <v-progress-linear v-if="file.showProgress"
                             v-model="file.percentage"></v-progress-linear>
        </v-list-tile-sub-title>
      </v-list-tile-content>
      <v-list-tile-action>
        <v-btn v-show="file.status === 'finished'" @click.native="handleRemove(file)" flat icon color="pink">
          <v-icon>delete
          </v-icon>
        </v-btn>
      </v-list-tile-action>
    </v-list-tile>
    <v-divider inset></v-divider>
  </v-list>
</template>
<script>
  const prefixCls = 'ivu-upload'
  export default {
    name: 'UploadList',
    props: {
      files: {
        type: Array,
        default () {
          return []
        }
      }
    },
    data () {
      return {
        prefixCls: prefixCls
      }
    },
    methods: {
      fileCls (file) {
        return [
          `${prefixCls}-list-file`,
          {
            [`${prefixCls}-list-file-finish`]: file.status === 'finished'
          }
        ]
      },
      handleClick (file) {
        this.$emit('on-file-click', file)
      },
      handlePreview (file) {
        this.$emit('on-file-preview', file)
      },
      handleRemove (file) {
        this.$emit('on-file-remove', file)
      },
      format (file) {
        const format = file.name.split('.').pop().toLocaleLowerCase() || ''
        let type = 'document'
        if (['gif', 'jpg', 'jpeg', 'png', 'bmp', 'webp'].indexOf(format) > -1) {
          type = 'image'
        }
        if (['mp4', 'm3u8', 'rmvb', 'avi', 'swf', '3gp', 'mkv', 'flv'].indexOf(format) > -1) {
          type = 'ios-film'
        }
        if (['mp3', 'wav', 'wma', 'ogg', 'aac', 'flac'].indexOf(format) > -1) {
          type = 'ios-musical-notes'
        }
        if (['doc', 'txt', 'docx', 'pages', 'epub', 'pdf'].indexOf(format) > -1) {
          type = 'document-text'
        }
        if (['numbers', 'csv', 'xls', 'xlsx'].indexOf(format) > -1) {
          type = 'stats-bars'
        }
        if (['keynote', 'ppt', 'pptx'].indexOf(format) > -1) {
          type = 'ios-videocam'
        }
        return type
      },
      parsePercentage (val) {
        return parseInt(val, 10)
      }
    }
  }
</script>

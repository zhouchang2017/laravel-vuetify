<template>
  <div class="file-field input-field">
    <div class="btn">
      <span>File</span>
      <input type="file"
             :multiple="multiple"
      >
    </div>
    <div class="file-path-wrapper">
      <v-text-field class="file-path validate"></v-text-field>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'upload-button',
    props: {
      multiple: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped>

</style>

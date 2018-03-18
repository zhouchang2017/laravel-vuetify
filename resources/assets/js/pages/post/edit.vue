<template>
    <v-card>
        <v-card-title primary-title class="grey lighten-4">
            <h3 class="headline mb-0">{{ name }}</h3>
        </v-card-title>
        <v-divider></v-divider>
        <post-edit v-if="loaded" :editDate="body"/>
    </v-card>
</template>

<script>
  import PostEdit from '~/components/form/PostEdit.vue'

  export default {
    name: 'post_edit',
    data () {
      return {
        name: this.$t('post_edit'),
        body: {},
        loaded:false
      }
    },
    components: {
      PostEdit
    },
    async created () {
      this.body = await this.$store.dispatch('post/edit', {id: this.$route.params.id})
      this.loaded = true
    }
  }
</script>

<style scoped>

</style>

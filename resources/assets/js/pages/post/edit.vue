<template>
    <v-card>
        <v-card-title primary-title class="grey lighten-4">
            <h3 class="headline mb-0">{{ name }}</h3>
        </v-card-title>
        <v-divider></v-divider>
        <post-edit :editDate="body"/>
    </v-card>
</template>

<script>
  import PostEdit from '~/components/form/PostEdit.vue'

  export default {
    name: 'article_edit',
    data () {
      return {
        name: this.$t('article_edit'),
        body: {}
      }
    },
    components: {
      PostEdit
    },
    async created () {
      this.body = await this.$store.dispatch('post/show', {id: this.$route.params.id})
    }
  }
</script>

<style scoped>

</style>

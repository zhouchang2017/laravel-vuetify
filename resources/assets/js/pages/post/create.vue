<template>
  <v-card>
    <v-card-title primary-title class="grey lighten-4">
      <h3 class="headline mb-0">{{ name }}</h3>
    </v-card-title>
    <v-divider></v-divider>
    <post-create/>
  </v-card>
</template>

<script>
  import PostCreate from '~/components/form/PostCreate.vue'
  export default {
    name: 'post_create',
    data () {
      return {
        name: this.$t('post_create'),
      }
    },
    components:{
      PostCreate
    }

  }
</script>

<style  scoped>

</style>

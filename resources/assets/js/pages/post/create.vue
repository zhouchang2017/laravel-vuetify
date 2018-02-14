<template>
  <div>
    <v-toolbar flat>
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="title">
            {{ name }}
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>
    <v-divider></v-divider>
    <post-edit/>
  </div>
</template>

<script>
  import PostEdit from '~/components/form/PostEdit.vue'
  export default {
    name: 'create',
    data () {
      return {
        name: this.$t('article_create'),
      }
    },
    components:{
      PostEdit
    }

  }
</script>

<style  scoped>

</style>

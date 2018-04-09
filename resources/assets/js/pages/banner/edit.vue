<template>
    <v-card>
        <v-card-title primary-title class="grey lighten-4">
            <h3 class="headline mb-0">{{ name }}</h3>
        </v-card-title>
        <v-divider></v-divider>
        <banner-create :editData="body"/>
    </v-card>
</template>

<script>
  export default {
    name: 'banner_edit',
    data () {
      return {
        name: this.$t('banner_edit'),
        body: {},
        loaded: false,
        valid: true
      }
    },
    components: {
      'banner-create':()=>import('~/components/form/BannerCreate')
    },
    methods: {
      async submit () {
        if (this.$refs.form.validate()) {
          // Native form submission is not yet supported
          await this.$store.dispatch('banner/update', {id: this.body.id, props: this.body})
          this.$store.dispatch('message/responseMessage', {
            text: this.$t('banner_update_success')
          })
          this.$router.replace({name: 'banner.index'})
        }
      }
    },
    async created () {
      this.body = await this.$store.dispatch('banner/show', {id: this.$route.params.id})
      this.loaded = true
    }
  }
</script>

<style scoped>

</style>

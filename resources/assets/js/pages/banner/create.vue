<template>
    <v-card>
        <v-card-title primary-title class="grey lighten-4">
            <h3 class="headline mb-0">{{ name }}</h3>
        </v-card-title>
        <v-divider></v-divider>
        <banner-create/>
    </v-card>
</template>

<script>
  export default {
    name: 'banner_create',
    data () {
      return {
        name: this.$t('banner_create'),
        formDate:{
          name:'',
        },
        valid:true
      }
    },
    components: {
      'banner-create':()=>import('~/components/form/BannerCreate')
    },
    methods: {
      resetForm () {
        this.errorMessages = []
        this.formHasErrors = false
        this.$refs.form.reset()
      },
      async submit () {
        if (this.$refs.form.validate()) {
          // Native form submission is not yet supported
          await this.$store.dispatch('banner/store', {formDate: this.formDate})
          this.$store.dispatch('message/responseMessage', {
            text: this.$t('banner_create_success')
          })
          this.$router.replace({name: 'banner.index'})
        }
      }
    }

  }
</script>

<style scoped>

</style>

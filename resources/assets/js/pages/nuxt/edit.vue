<template>
    <v-card>
        <v-card-title primary-title class="grey lighten-4">
            <h3 class="headline mb-0">{{ name }}</h3>
        </v-card-title>
        <v-divider></v-divider>
        <v-form v-if="loaded" v-model="valid" ref="form" lazy-validation>
            <v-card>
                <v-card-text>
                    <v-text-field
                            label="客户端名称"
                            v-model="formDate.name"
                            :rules="[()=>!!formDate.name || 'client is required!!']"
                            :counter="32"
                            required
                    ></v-text-field>
                    <v-text-field
                            label="客户端前缀"
                            v-model="formDate.prefix"
                            :rules="[()=>!!formDate.prefix || 'prefix is required!!']"
                            :counter="10"
                            required
                    ></v-text-field>
                </v-card-text>
                <v-divider class="mt-5"></v-divider>
                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn color="primary" :disabled="!valid" flat @click="submit">Submit</v-btn>
                </v-card-actions>
            </v-card>
        </v-form>
    </v-card>
</template>

<script>
  export default {
    name: 'nuxt_edit',
    data () {
      return {
        name: this.$t('nuxt_edit'),
        body: {},
        loaded: false,
        valid: true
      }
    },
    methods: {
      async submit () {
        if (this.$refs.form.validate()) {
          // Native form submission is not yet supported
          await this.$store.dispatch('nuxt/update', {id: this.formDate.id, props: this.formDate})
          this.$store.dispatch('message/responseMessage', {
            text: this.$t('nuxt_update_success')
          })
          this.$router.replace({name: 'nuxt.index'})
        }
      }
    },
    async created () {
      this.formDate = await this.$store.dispatch('nuxt/edit', {id: this.$route.params.id})
      this.loaded = true
    }
  }
</script>

<style scoped>

</style>

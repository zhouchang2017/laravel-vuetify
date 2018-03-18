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
                            :label="$t('catelog_name')"
                            v-model="body.name"
                            :rules="[()=>!!body.name || $t('catelog_name_required')]"
                            :counter="32"
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
    name: 'catelog_edit',
    data () {
      return {
        name: this.$t('catelog_edit'),
        body: {},
        loaded: false,
        valid: true
      }
    },
    methods: {
      async submit () {
        if (this.$refs.form.validate()) {
          // Native form submission is not yet supported
          await this.$store.dispatch('catelog/update', {id: this.body.id, props: this.body})
          this.$store.dispatch('message/responseMessage', {
            text: this.$t('catelog_update_success')
          })
          this.$router.replace({name: 'catelog.index'})
        }
      }
    },
    async created () {
      this.body = await this.$store.dispatch('catelog/edit', {id: this.$route.params.id})
      this.loaded = true
    }
  }
</script>

<style scoped>

</style>

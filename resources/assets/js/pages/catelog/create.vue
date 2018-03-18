<template>
    <v-card>
        <v-card-title primary-title class="grey lighten-4">
            <h3 class="headline mb-0">{{ name }}</h3>
        </v-card-title>
        <v-divider></v-divider>
        <v-form v-model="valid" ref="form" lazy-validation>
            <v-card>
                <v-card-text>
                    <v-text-field
                            :label="$t('catelog_name')"
                            v-model="formDate.name"
                            :rules="[()=>!!formDate.name || $t('catelog_name_required')]"
                            :counter="32"
                            required
                    ></v-text-field>
                </v-card-text>
                <v-divider class="mt-5"></v-divider>
                <v-card-actions>
                    <v-btn flat @click="resetForm">Clear</v-btn>
                    <v-spacer></v-spacer>

                    <v-btn color="primary" :disabled="!valid" flat @click="submit">Submit</v-btn>
                </v-card-actions>
            </v-card>
        </v-form>
    </v-card>
</template>

<script>
  export default {
    name: 'catelog_create',
    data () {
      return {
        name: this.$t('catelog_create'),
        formDate:{
          name:'',
        },
        valid:true
      }
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
          await this.$store.dispatch('catelog/store', {formDate: this.formDate})
          this.$store.dispatch('message/responseMessage', {
            text: this.$t('catelog_create_success')
          })
          this.$router.replace({name: 'catelog.index'})
        }
      }
    }

  }
</script>

<style scoped>

</style>

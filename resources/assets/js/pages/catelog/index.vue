<template>
    <div>
        <v-card>
            <v-card-title primary-title class="grey lighten-4">
                <h3 class="headline mb-0">{{ name }}</h3>
            </v-card-title>
            <v-divider></v-divider>
            <v-data-table
                    v-if="loaded"
                    :headers="headers"
                    :items="body"
                    :loading="loading"
                    class="elevation-1"
            >
                <template slot="items" slot-scope="props">
                    <td class="text-xs-left">{{ props.item.id }}</td>
                    <td class="text-xs-center">
                        <v-tooltip right color="grey lighten-3" :max-width="$vuetify.breakpoint.width - 300">
                            <img slot="activator" class="table-img" :src="props.item.avatar" alt="" />
                            <span>
                                <img width="100%" :src="props.item.avatar" alt="" />
                            </span>
                        </v-tooltip>
                    </td>
                    <td class="text-xs-center">{{ props.item.name }}</td>
                    <td class="text-xs-center">{{ props.item.post_count }}</td>
                    <td class="text-xs-center">{{ props.item.updated_at }}</td>
                    <td class="text-xs-center">
                        <div class="d-inline-flex">
                            <v-btn icon @click="editItem(props.item)">
                                <v-icon color="teal">edit</v-icon>
                            </v-btn>
                            <v-btn icon @click="deleteItem(props.item)">
                                <v-icon color="pink">delete</v-icon>
                            </v-btn>
                        </div>
                    </td>
                </template>
            </v-data-table>
            <v-layout row justify-center>
                <v-dialog v-model="dialog" max-width="290">
                    <v-card>
                        <v-card-title class="headline">{{ dialogInfo.title }}</v-card-title>
                        <v-card-text>{{ dialogInfo.text }}
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="green darken-1" flat="flat" @click.native="dialog = false">Disagree</v-btn>
                            <v-btn color="green darken-1" flat="flat" @click.native="deleteOk">Agree</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-layout>
        </v-card>
    </div>
</template>

<script>
  export default {
    name: 'catelog_index',
    data () {
      return {
        dialog: false,
        dialogInfo: {
          title: '',
          text: '',
          index: null,
          id: null
        },
        loaded: false,
        name: this.$t('catelog_list'),
        body: {},
        loading: false,
        headers: [
          {text: 'id', value: 'id', align: 'left'},
          {text: 'Avatar', value: 'avatar', align: 'center',sortable: false},
          {text: 'Name', value: 'name', align: 'center'},
          {text: this.$t('post_count'), value: 'post_count', align: 'center'},
          {text: this.$t('updated_at'), value: 'updated_at', align: 'center'},
          {text: 'Actions', value: 'name', align: 'center', sortable: false}
        ]
      }
    },
    methods: {
      async fetch () {
        this.loading = true
        let queryBuild = {}

        let body = await this.$store.dispatch('catelog/index', queryBuild)
        this.$set(this, 'body', body)
        this.loading = false
      },
      editItem (item) {
        this.$router.push({name: 'catelog.edit', params: {id: item.id}})
      },
      deleteItem (item) {
        this.dialog = true
        this.dialogInfo.title = 'Are you sure you want to delete this item?'
        this.dialogInfo.text = `Catelog name => ${item.name}`
        this.dialogInfo.index = this.body.data.indexOf(item)
        this.dialogInfo.id = item.id
      },
      async deleteOk () {
        let res = await this.$store.dispatch('catelog/delete', {id: this.dialogInfo.id})
        this.dialog = false
        this.$store.dispatch('message/responseMessage', {
          text: res.message
        })
        this.body.data.splice(this.dialogInfo.index, 1)
        this.dialogInfo = {title: '', text: '', index: null, id: null}
      }
    },
    async created () {
      await this.fetch()
      this.loaded = true
    }
  }
</script>

<style scoped>

</style>

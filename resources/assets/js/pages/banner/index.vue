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
                    :items="body.data"
                    :search="search"
                    :pagination.sync="pagination"
                    :total-items="body.meta.total"
                    :loading="loading"
                    class="elevation-1"
                    :rows-per-page-items="[5,10,20,40]"
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
                    <td class="text-xs-center">{{ props.item.title }}</td>
                    <td class="text-xs-center">{{ props.item.sort }}</td>
                    <td class="text-xs-center">{{ props.item.start_at }}</td>
                    <td class="text-xs-center">{{ props.item.end_at }}</td>
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
    name: 'banner_index',
    data () {
      return {
        dialog: false,
        dialogInfo: {
          title: '',
          text: '',
          index: null,
          bannerId: null
        },
        loaded: false,
        name: this.$t('banner_list'),
        search: '',
        body: {},
        loading: false,
        pagination: {
          sortBy: 'updated_at',
          descending: 'desc'
        },
        headers: [
          {text: 'id', value: 'id', align: 'left'},
          {text: 'Avatar', value: 'avatar', align: 'center',sortable: false},
          {text: 'Title', value: 'title',align: 'center'},
          {text: 'Sort', value: 'sort',align: 'center'},
          {text: 'Start_at', value: 'start_at',align: 'center'},
          {text: 'End_at', value: 'end_at',align: 'center'},
          {text: this.$t('updated_at'), value: 'updated_at',align: 'center'},
          {text: 'Actions', value: 'name', align: 'right', sortable: false}
        ]
      }
    },
    watch: {
      pagination: {
        async handler () {
          await this.fetch()
        },
        deep: true
      }
    },
    methods: {
      async fetch () {
        this.loading = true
        const {sortBy, descending, page, rowsPerPage} = this.pagination
        let queryBuild = {page}
        if (sortBy) queryBuild.orderBy = sortBy
        if (descending) queryBuild.sortedBy = 'desc'
        if (rowsPerPage) queryBuild.limit = rowsPerPage
        console.log(queryBuild)
        let body = await this.$store.dispatch('banner/index', queryBuild)
        this.$set(this, 'body', body)
        this.loading = false
      },
      editItem (item) {
        this.$router.push({name: 'banner.edit', params: {id: item.id}})
      },
      deleteItem (item) {
        this.dialog = true
        this.dialogInfo.title = 'Are you sure you want to delete this item?'
        this.dialogInfo.text = `Post title => ${item.title}`
        this.dialogInfo.index = this.body.data.indexOf(item)
        this.dialogInfo.bannerId = item.id
      },
      async deleteOk () {
        let res = await this.$store.dispatch('banner/delete', {banner_id: this.dialogInfo.bannerId})
        this.dialog = false
        this.$store.dispatch('message/responseMessage',{
          text:res.message
        })
        this.body.data.splice(this.dialogInfo.index, 1)
        this.dialogInfo = {title: '', text: '', index: null, bannerId: null}
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

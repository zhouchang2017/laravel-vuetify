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
        <v-data-table
                v-if="loaded"
                :headers="headers"
                :items="body.data"
                :search="search"
                :pagination.sync="pagination"
                :total-items="body.meta.total"
                :loading="loading"
                class="elevation-1"
        >
            <template slot="items" slot-scope="props">
                <td>
                    <v-card class="mt-1 mb-1">
                        <v-card-media
                                flat
                                tile
                                contain
                                class="white--text"
                                width="200px"
                                height="100px"
                                :src="props.item.avatar"
                        >
                        </v-card-media>
                    </v-card>
                </td>
                <td class="text-xs-right">{{ props.item.title }}</td>
                <td class="text-xs-right">{{ props.item.read_num }}</td>
                <td class="text-xs-right">{{ props.item.fake_read_num }}</td>
                <td class="text-xs-right">
                    <v-switch
                            v-model="props.item.is_hot"
                            color="success"
                            hide-details
                            @change="isHot({post_id:props.item.id,is_hot:props.item.is_hot})"
                    ></v-switch>
                </td>
                <td class="text-xs-right">
                    <v-switch
                            v-model="props.item.hidden"
                            color="success"
                            hide-details
                            @change="isHidden({post_id:props.item.id,hidden:props.item.hidden})"
                    ></v-switch>
                </td>
                <td class="text-xs-right">{{ props.item.updated_at }}</td>
                <td class="text-xs-right justify-center">
                    <v-btn icon @click="editItem(props.item)">
                        <v-icon color="teal">edit</v-icon>
                    </v-btn>
                    <v-btn icon @click="deleteItem(props.item)">
                        <v-icon color="pink">delete</v-icon>
                    </v-btn>
                </td>
            </template>
        </v-data-table>
        <v-layout row justify-center>
            <v-btn color="primary" dark @click.native.stop="dialog = true">Open Dialog</v-btn>
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
    </div>
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        dialog: false,
        dialogInfo: {
          title: '',
          text: '',
          index: null
        },
        loaded: false,
        name: this.$t('article_list'),
        search: '',
        body: {},
        loading: false,
        pagination: {},
        headers: [
          {
            text: 'Avatar',
            align: 'left',
            sortable: false,
            value: 'avatar',
            width: '200px'
          },
          {text: 'Title', value: 'title'},
          {text: 'Read_num', value: 'read_num'},
          {text: 'Fake_read_num', value: 'fake_read_num'},
          {text: 'Is_hot', value: 'is_hot'},
          {text: 'Hidden', value: 'hidden'},
          {text: 'Updated_at', value: 'updated_at'},
          {text: 'Actions', value: 'name', sortable: false}
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
      async isHot ({post_id, is_hot}) {
        let data = await this.$store.dispatch('post/update', {post_id, props: {is_hot}})
        console.log(data)
      },
      async isHidden ({post_id, hidden}) {
        let data = await this.$store.dispatch('post/update', {post_id, props: {hidden}})
        console.log(data)
      },
      async fetch () {
        this.loading = true
        const {sortBy, descending, page, rowsPerPage} = this.pagination
        let queryBuild = {page}
        if (sortBy) queryBuild.orderBy = sortBy
        if (descending) queryBuild.sortedBy = 'desc'
        if (rowsPerPage) queryBuild.limit = rowsPerPage
        console.log(queryBuild)
        let body = await this.$store.dispatch('post/index', queryBuild)
        this.$set(this, 'body', body)
        this.loading = false
      },
      editItem (item) {
        console.log(item)
      },
      deleteItem (item) {
        this.dialog = true
        this.dialogInfo.title = 'Are you sure you want to delete this item?'
        this.dialogInfo.text = `Post title => ${item.title}`
        this.dialogInfo.index = this.body.data.indexOf(item)
      },
      deleteOk () {
        this.dialog = false
        this.body.data.splice(this.dialogInfo.index, 1)
        this.dialogInfo = {title: '', text: '', index: null}
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

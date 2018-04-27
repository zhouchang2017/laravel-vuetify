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
                    <td class="text-xs-center">
                        <v-tooltip right color="grey lighten-3" :max-width="$vuetify.breakpoint.width - 300">
                            <img slot="activator" class="table-img" :src="props.item.avatar" alt="" />
                            <span>
                                <img width="100%" :src="props.item.avatar" alt="" />
                            </span>
                        </v-tooltip>
                    </td>
                    <td class="text-xs-center">{{ props.item.title }}</td>
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
                    <td class="justify-center">
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
    name: 'post_index',
    data () {
      return {
        dialog: false,
        dialogInfo: {
          title: '',
          text: '',
          index: null,
          postId: null
        },
        loaded: false,
        name: this.$t('post_list'),
        search: '',
        body: {},
        loading: false,
        pagination: {
          sortBy: 'updated_at',
          descending: 'desc'
        },
        headers: [
          {
            text: 'Avatar',
            align: 'center',
            sortable: false,
            value: 'avatar',
          },
          {text: 'Title', value: 'title',align: 'center'},
          {text: 'Read_num', value: 'read_num'},
          {text: 'Fake_read_num', value: 'fake_read_num'},
          {text: 'Is_hot', value: 'is_hot'},
          {text: 'Hidden', value: 'hidden'},
          {text: this.$t('updated_at'), value: 'updated_at'},
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
      async isHot ({post_id, is_hot}) {
        let data = await this.$store.dispatch('post/updateField', {post_id, props: {is_hot}})
        console.log(data)
      },
      async isHidden ({post_id, hidden}) {
        let data = await this.$store.dispatch('post/updateField', {post_id, props: {hidden}})
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
        this.$router.push({name: 'post.edit', params: {id: item.id}})
      },
      deleteItem (item) {
        this.dialog = true
        this.dialogInfo.title = 'Are you sure you want to delete this item?'
        this.dialogInfo.text = `Post title => ${item.title}`
        this.dialogInfo.index = this.body.data.indexOf(item)
        this.dialogInfo.postId = item.id
      },
      async deleteOk () {
        let res = await this.$store.dispatch('post/delete', {post_id: this.dialogInfo.postId})
        this.dialog = false
        this.$store.dispatch('message/responseMessage',{
          text:res.message
        })
        this.body.data.splice(this.dialogInfo.index, 1)
        this.dialogInfo = {title: '', text: '', index: null, postId: null}
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

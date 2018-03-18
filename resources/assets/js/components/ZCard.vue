<template>
    <v-card>
        <v-card-media :src="avatar" height="300px">
            <v-layout column class="media">
                <slot name="action"></slot>
                <v-spacer></v-spacer>
                <v-card-title class="white--text align-end" style="flex-direction: column;">
                    <div class="display-4">
                        <num :num="count"/>
                    </div>
                    <div class="display-1">{{ name }}</div>
                </v-card-title>
            </v-layout>
        </v-card-media>
    </v-card>
</template>

<script>
  export default {
    name: 'z-card',
    props: {
      count: {
        type: Number,
        default: 0
      },
      name:{
        type:String,
        default:'Model Name'
      },
      avatar:{
        type:String,
        default:'https://photo.tuchong.com/395013/f/20037222.jpg'
      }
    },
    components:{
      'num':()=>import('~/components/Num')
    }
  }
</script>

<style scoped>

</style>
webpackJsonp([5],{EqOZ:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-card",[n("v-card-title",{staticClass:"grey lighten-4",attrs:{"primary-title":""}},[n("h3",{staticClass:"headline mb-0"},[t._v(t._s(t.name))])]),t._v(" "),n("v-divider"),t._v(" "),t.loaded?n("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.body.data,search:t.search,pagination:t.pagination,"total-items":t.body.meta.total,loading:t.loading,"rows-per-page-items":[5,10,20,40]},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"items",fn:function(e){return[n("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.id))]),t._v(" "),n("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.prefix))]),t._v(" "),n("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.name))]),t._v(" "),n("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.post_count))]),t._v(" "),n("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.updated_at))]),t._v(" "),n("td",{staticClass:"text-xs-center"},[n("div",{staticClass:"d-inline-flex"},[n("v-btn",{attrs:{icon:""},on:{click:function(n){t.editItem(e.item)}}},[n("v-icon",{attrs:{color:"teal"}},[t._v("edit")])],1),t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(n){t.deleteItem(e.item)}}},[n("v-icon",{attrs:{color:"pink"}},[t._v("delete")])],1)],1)])]}}])}):t._e(),t._v(" "),n("v-layout",{attrs:{row:"","justify-center":""}},[n("v-dialog",{attrs:{"max-width":"290"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[t._v(t._s(t.dialogInfo.title))]),t._v(" "),n("v-card-text",[t._v(t._s(t.dialogInfo.text)+"\n                    ")]),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"green darken-1",flat:"flat"},nativeOn:{click:function(e){t.dialog=!1}}},[t._v("Disagree")]),t._v(" "),n("v-btn",{attrs:{color:"green darken-1",flat:"flat"},nativeOn:{click:function(e){return t.deleteOk(e)}}},[t._v("Agree")])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]}},KV6u:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("Xxa5"),i=n.n(a);function s(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,n){return function a(i,s){try{var r=e[i](s),o=r.value}catch(t){return void n(t)}if(!r.done)return Promise.resolve(o).then(function(t){a("next",t)},function(t){a("throw",t)});t(o)}("next")})}}e.default={name:"nuxt_index",data:function(){return{dialog:!1,dialogInfo:{title:"",text:"",index:null,id:null},loaded:!1,name:this.$t("nuxt_list"),search:"",body:{},loading:!1,pagination:{sortBy:"updated_at",descending:"desc"},headers:[{text:"id",value:"id",align:"left"},{text:"Prefix",value:"prefix",align:"center"},{text:this.$t("client_name"),value:"name",align:"center"},{text:this.$t("post_count"),value:"post_count",align:"center"},{text:this.$t("updated_at"),value:"updated_at",align:"center"},{text:"Actions",value:"name",align:"center",sortable:!1}]}},watch:{pagination:{handler:function(){var t=this;return s(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetch();case 2:case"end":return e.stop()}},e,t)}))()},deep:!0}},methods:{fetch:function(){var t=this;return s(i.a.mark(function e(){var n,a,s,r,o,c,d;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,n=t.pagination,a=n.sortBy,s=n.descending,r=n.page,o=n.rowsPerPage,c={page:r},a&&(c.orderBy=a),s&&(c.sortedBy="desc"),o&&(c.limit=o),console.log(c),e.next=9,t.$store.dispatch("nuxt/index",c);case 9:d=e.sent,t.$set(t,"body",d),t.loading=!1;case 12:case"end":return e.stop()}},e,t)}))()},editItem:function(t){this.$router.push({name:"nuxt.edit",params:{id:t.id}})},deleteItem:function(t){this.dialog=!0,this.dialogInfo.title="Are you sure you want to delete this item?",this.dialogInfo.text="Client name => "+t.name,this.dialogInfo.index=this.body.data.indexOf(t),this.dialogInfo.id=t.id},deleteOk:function(){var t=this;return s(i.a.mark(function e(){var n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("nuxt/delete",{id:t.dialogInfo.id});case 2:n=e.sent,t.dialog=!1,t.$store.dispatch("message/responseMessage",{text:n.message}),t.body.data.splice(t.dialogInfo.index,1),t.dialogInfo={title:"",text:"",index:null,id:null};case 7:case"end":return e.stop()}},e,t)}))()}},created:function(){var t=this;return s(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetch();case 2:t.loaded=!0;case 3:case"end":return e.stop()}},e,t)}))()}}},SrQ4:function(t,e,n){var a=n("VU/8")(n("KV6u"),n("EqOZ"),!1,function(t){n("TZov")},"data-v-4d67310e",null);t.exports=a.exports},TZov:function(t,e,n){var a=n("leCe");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("db28b300",a,!0,{})},leCe:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,"",""])}});
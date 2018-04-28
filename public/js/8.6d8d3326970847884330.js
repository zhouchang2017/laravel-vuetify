webpackJsonp([8],{PzWQ:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",[a("v-card-title",{staticClass:"grey lighten-4",attrs:{"primary-title":""}},[a("h3",{staticClass:"headline mb-0"},[t._v(t._s(t.name))])]),t._v(" "),a("v-divider"),t._v(" "),a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-card",[a("v-card-title",{attrs:{"primary-title":""}},[a("div",[a("div",{staticClass:"headline"},[t._v("Client Base Config")]),t._v(" "),a("span",{staticClass:"grey--text"},[t._v("客户端基本配置")])])]),t._v(" "),a("v-card-text",[a("v-text-field",{attrs:{label:"客户端名称",rules:[function(){return!!t.formData.name||"client is required!!"}],counter:32,required:""},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}}),t._v(" "),a("v-text-field",{attrs:{label:"客户端前缀",rules:[function(){return!!t.formData.prefix||"prefix is required!!"}],counter:10,required:""},model:{value:t.formData.prefix,callback:function(e){t.$set(t.formData,"prefix",e)},expression:"formData.prefix"}})],1),t._v(" "),a("v-divider",{staticClass:"mt-2"}),t._v(" "),a("v-card-title",{attrs:{"primary-title":""}},[a("div",[a("div",{staticClass:"headline"},[t._v("Banner")]),t._v(" "),a("span",{staticClass:"grey--text"},[t._v("设置在客户端显示的海报大图")])])]),t._v(" "),a("v-card-text",[a("v-select",{attrs:{clearable:"",label:"关联Banner","item-text":"title","item-value":"id",autocomplete:"",loading:t.loading,"cache-items":"",chips:"",multiple:"",items:t.banners,"search-input":t.search},on:{"update:searchInput":function(e){t.search=e}},scopedSlots:t._u([{key:"selection",fn:function(e){return[a("v-chip",{key:JSON.stringify(e.item),staticClass:"chip--select-multi",attrs:{close:"",selected:e.selected,color:"main"===e.item.type?"primary":"secondary","text-color":"white"},on:{input:function(t){e.parent.selectItem(e.item)}}},[a("v-avatar",[a("img",{attrs:{src:e.item.avatar}})]),t._v("\n                            "+t._s(e.item.title)+"\n                        ")],1)]}},{key:"item",fn:function(e){return[a("v-list-tile-avatar",{attrs:{tile:""}},[a("img",{attrs:{src:e.item.avatar}})]),t._v(" "),a("v-list-tile-content",[a("v-list-tile-title",{domProps:{innerHTML:t._s(e.item.title)}})],1),t._v(" "),a("v-list-tile-action",[a("v-list-tile-action-text",[t._v("位置:"+t._s(e.item.type))])],1)]}}]),model:{value:t.formData.banners,callback:function(e){t.$set(t.formData,"banners",e)},expression:"formData.banners"}})],1),t._v(" "),a("v-divider",{staticClass:"mt-2"}),t._v(" "),a("v-card-title",{attrs:{"primary-title":""}},[a("div",[a("div",{staticClass:"headline"},[t._v("Recommend Catelog")]),t._v(" "),a("span",{staticClass:"grey--text"},[t._v("设置在客户端首页推荐的分类")])])]),t._v(" "),t.catelogsLoaded?a("v-card-text",[a("v-select",{attrs:{label:"文章分类",items:t.catelogs,"item-text":"name","item-value":"id",multiple:"","max-height":"400",hint:"请选择文章分类","persistent-hint":"",chips:""},scopedSlots:t._u([{key:"selection",fn:function(e){return[a("v-chip",{key:JSON.stringify(e.item),staticClass:"chip--select-multi",attrs:{close:"",selected:e.selected},on:{input:function(t){e.parent.selectItem(e.item)}}},[t._v("\n                            "+t._s(e.item.name)+"\n                        ")])]}}]),model:{value:t.formData.catelogs,callback:function(e){t.$set(t.formData,"catelogs",e)},expression:"formData.catelogs"}})],1):t._e(),t._v(" "),a("v-divider",{staticClass:"mt-2"}),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{color:"primary",disabled:!t.valid,flat:""},on:{click:t.submit}},[t._v("Submit")])],1)],1)],1)],1)},staticRenderFns:[]}},bHiq:function(t,e,a){var r=a("pQaw");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a("rjj0")("6f30fe89",r,!0,{})},pQaw:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"",""])},tAK9:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("Xxa5"),n=a.n(r);function i(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,a){return function r(n,i){try{var s=e[n](i),c=s.value}catch(t){return void a(t)}if(!s.done)return Promise.resolve(c).then(function(t){r("next",t)},function(t){r("throw",t)});t(c)}("next")})}}e.default={name:"nuxt_edit",data:function(){return{name:this.$t("nuxt_edit"),body:{},loaded:!1,loading:!1,valid:!0,search:null,formData:{},catelogs:{},banners:[],catelogsLoaded:!1}},watch:{search:function(t){t&&this.querySelections(t)}},methods:{querySelections:function(t){var e=this;this.loading=!0,setTimeout(i(n.a.mark(function a(){var r;return n.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return r={search:"title:"+t,searchFields:"title:like"},a.next=3,e.fetchBanners(r);case 3:e.posts=a.sent,e.loading=!1;case 5:case"end":return a.stop()}},a,e)})),500)},submit:function(){var t=this;return i(n.a.mark(function e(){return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.$refs.form.validate()){e.next=5;break}return e.next=3,t.$store.dispatch("nuxt/update",{id:t.formData.id,props:t.formData});case 3:t.$store.dispatch("message/responseMessage",{text:t.$t("nuxt_update_success")}),t.$router.replace({name:"nuxt.index"});case 5:case"end":return e.stop()}},e,t)}))()},fetchBanners:function(t){var e=this;return i(n.a.mark(function a(){var r,i;return n.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.$store.dispatch("banner/index",t);case 2:return r=a.sent,i=r.data,a.abrupt("return",i);case 5:case"end":return a.stop()}},a,e)}))()},fetchCatelog:function(){var t=this;return i(n.a.mark(function e(){var a,r;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a={},e.next=3,t.$store.dispatch("catelog/index",a);case 3:r=e.sent,t.$set(t,"catelogs",r),t.catelogsLoaded=!0;case 6:case"end":return e.stop()}},e,t)}))()}},created:function(){var t=this;return i(n.a.mark(function e(){return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchCatelog();case 2:return e.next=4,t.fetchBanners({});case 4:return t.banners=e.sent,e.next=7,t.$store.dispatch("nuxt/edit",{id:t.$route.params.id});case 7:t.formData=e.sent,t.formData.banners=t.formData.banners.map(function(t){return t.id}),t.formData.catelogs=t.formData.catelogs.map(function(t){return t.id}),t.loaded=!0;case 11:case"end":return e.stop()}},e,t)}))()}}},v6ID:function(t,e,a){var r=a("VU/8")(a("tAK9"),a("PzWQ"),!1,function(t){a("bHiq")},"data-v-ee4f39fa",null);t.exports=r.exports}});
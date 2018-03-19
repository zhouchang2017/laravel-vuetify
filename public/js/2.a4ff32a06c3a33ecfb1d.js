webpackJsonp([2,12,13],{Ao2v:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("Xxa5"),n=r.n(a),s=r("2gGM"),o=r.n(s),i=r("NYxO");t.default={name:"profile-view",data:function(){return{form:new o.a({name:"",email:""})}},computed:Object(i.mapGetters)({user:"authUser"}),created:function(){var e=this;this.form.keys().forEach(function(t){e.form[t]=e.user[t]})},methods:{update:function(){var e,t=this;return(e=n.a.mark(function e(){var r,a;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.formHasErrors();case 2:if(!e.sent){e.next=4;break}return e.abrupt("return");case 4:return t.$emit("busy",!0),e.next=7,t.form.patch("/api/settings/profile");case 7:return r=e.sent,a=r.data,e.next=11,t.$store.dispatch("updateUser",{user:a});case 11:t.$emit("busy",!1),t.$store.dispatch("message/responseMessage",{type:"success",text:t.$t("info_updated")});case 13:case"end":return e.stop()}},e,t)}),function(){var t=e.apply(this,arguments);return new Promise(function(e,r){return function a(n,s){try{var o=t[n](s),i=o.value}catch(e){return void r(e)}if(!o.done)return Promise.resolve(i).then(function(e){a("next",e)},function(e){a("throw",e)});e(i)}("next")})})()}}}},J8F0:function(e,t,r){var a=r("VU/8")(r("uKwN"),r("dP42"),!1,null,null,null);e.exports=a.exports},T1p1:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("doo0"),n=r.n(a),s=r("J8F0"),o=r.n(s);t.default={name:"settings-view",components:{"profile-view":n.a,"password-view":o.a},data:function(){return{busy:!1}}}},dP42:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",{attrs:{flat:""}},[r("form",{on:{submit:function(t){return t.preventDefault(),e.update(t)},keydown:function(t){e.form.onKeydown(t)}}},[r("v-card-title",{attrs:{"primary-title":""}},[r("h5",{staticClass:"subheading mb-0"},[e._v(e._s(e.$t("your_password")))])]),e._v(" "),r("v-card-text",[r("password-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|min:8",expression:"'required|min:8'"}],attrs:{form:e.form,hint:e.$t("password_length_hint"),"v-errors":e.errors,value:e.form.password},on:{"update:value":function(t){e.$set(e.form,"password",t)},eye:function(t){e.eye=t}}}),e._v(" "),r("password-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|confirmed:password",expression:"'required|confirmed:password'"}],attrs:{form:e.form,hide:e.eye,label:e.$t("confirm_password"),"v-errors":e.errors,value:e.form.password_confirmation,"data-vv-as":"password","hide-icon":"true",name:"password_confirmation"},on:{"update:value":function(t){e.$set(e.form,"password_confirmation",t)}}})],1),e._v(" "),r("v-card-actions",[r("submit-button",{attrs:{flat:!0,form:e.form,label:e.$t("update")}})],1)],1)])},staticRenderFns:[]}},doo0:function(e,t,r){var a=r("VU/8")(r("Ao2v"),r("hUEg"),!1,null,null,null);e.exports=a.exports},hUEg:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",{attrs:{flat:""}},[r("form",{on:{submit:function(t){return t.preventDefault(),e.update(t)},keydown:function(t){e.form.onKeydown(t)}}},[r("v-card-title",{attrs:{"primary-title":""}},[r("h5",{staticClass:"subheading mb-0"},[e._v(e._s(e.$t("your_info")))])]),e._v(" "),r("v-card-text",[r("text-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|max:30",expression:"'required|max:30'"}],attrs:{form:e.form,label:e.$t("name"),"v-errors":e.errors,value:e.form.name,counter:"30",name:"name"},on:{"update:value":function(t){e.$set(e.form,"name",t)}}}),e._v(" "),r("email-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],attrs:{form:e.form,label:e.$t("email"),"v-errors":e.errors,value:e.form.email,name:"email"},on:{"update:value":function(t){e.$set(e.form,"email",t)}}})],1),e._v(" "),r("v-card-actions",[r("submit-button",{attrs:{flat:!0,form:e.form,label:e.$t("update")}})],1)],1)])},staticRenderFns:[]}},j4WV:function(e,t,r){var a=r("VU/8")(r("T1p1"),r("n72O"),!1,null,null,null);e.exports=a.exports},n72O:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs12:"",sm8:"","offset-sm2":"",lg4:"","offset-lg4":""}},[r("v-card",[r("progress-bar",{attrs:{show:e.busy}}),e._v(" "),r("v-card-title",{staticClass:"grey lighten-4",attrs:{"primary-title":""}},[r("h3",{staticClass:"headline mb-0"},[e._v(e._s(e.$t("settings")))])]),e._v(" "),r("v-tabs",{attrs:{icons:"",centered:"",fixed:""}},[r("v-tabs-bar",{staticClass:"grey lighten-4"},[r("v-tabs-slider",{attrs:{color:"primary"}}),e._v(" "),r("v-tabs-item",{attrs:{href:"#tab-person"}},[r("v-icon",[e._v("person")]),e._v("\n            "+e._s(e.$t("profile"))+"\n          ")],1),e._v(" "),r("v-tabs-item",{attrs:{href:"#tab-password"}},[r("v-icon",[e._v("lock")]),e._v("\n            "+e._s(e.$t("password"))+"\n          ")],1)],1),e._v(" "),r("v-divider"),e._v(" "),r("v-tabs-items",[r("v-tabs-content",{attrs:{id:"tab-person"}},[r("profile-view",{on:{busy:function(t){e.busy=t}}})],1),e._v(" "),r("v-tabs-content",{attrs:{id:"tab-password"}},[r("password-view",{on:{busy:function(t){e.busy=t}}})],1)],1)],1)],1)],1)],1)},staticRenderFns:[]}},uKwN:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("Xxa5"),n=r.n(a),s=r("2gGM"),o=r.n(s);t.default={name:"password-view",data:function(){return{form:new o.a({password:"",password_confirmation:""}),eye:!0}},methods:{update:function(){var e,t=this;return(e=n.a.mark(function e(){return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.formHasErrors();case 2:if(!e.sent){e.next=4;break}return e.abrupt("return");case 4:return t.$emit("busy",!0),e.next=7,t.form.patch("/api/settings/password");case 7:t.form.reset(),t.$emit("busy",!1),t.$store.dispatch("message/responseMessage",{type:"success",text:t.$t("password_updated")});case 10:case"end":return e.stop()}},e,t)}),function(){var t=e.apply(this,arguments);return new Promise(function(e,r){return function a(n,s){try{var o=t[n](s),i=o.value}catch(e){return void r(e)}if(!o.done)return Promise.resolve(i).then(function(e){a("next",e)},function(e){a("throw",e)});e(i)}("next")})})()}}}}});
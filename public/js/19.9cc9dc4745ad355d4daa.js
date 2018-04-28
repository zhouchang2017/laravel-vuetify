webpackJsonp([19],{Y2PI:function(e,r){e.exports={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("v-layout",{attrs:{row:""}},[t("v-flex",{attrs:{xs12:"",sm8:"","offset-sm2":"",lg4:"","offset-lg4":""}},[t("v-card",[t("progress-bar",{attrs:{show:e.form.busy}}),e._v(" "),t("form",{on:{submit:function(r){return r.preventDefault(),e.register(r)},keydown:function(r){e.form.onKeydown(r)}}},[t("v-card-title",{attrs:{"primary-title":""}},[t("h3",{staticClass:"headline mb-0"},[e._v(e._s(e.$t("register")))])]),e._v(" "),t("v-card-text",[t("text-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|max:30",expression:"'required|max:30'"}],attrs:{form:e.form,label:e.$t("name"),"v-errors":e.errors,value:e.form.name,counter:"30",name:"name"},on:{"update:value":function(r){e.$set(e.form,"name",r)}}}),e._v(" "),t("email-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],attrs:{form:e.form,label:e.$t("email"),"v-errors":e.errors,value:e.form.email,name:"email"},on:{"update:value":function(r){e.$set(e.form,"email",r)}}}),e._v(" "),t("password-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|min:8",expression:"'required|min:8'"}],attrs:{form:e.form,hint:e.$t("password_length_hint"),"v-errors":e.errors,value:e.form.password},on:{"update:value":function(r){e.$set(e.form,"password",r)},eye:function(r){e.eye=r}}}),e._v(" "),t("password-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|confirmed:password",expression:"'required|confirmed:password'"}],attrs:{form:e.form,hide:e.eye,label:e.$t("confirm_password"),"v-errors":e.errors,value:e.form.password_confirmation,"data-vv-as":"password","hide-icon":"true",name:"password_confirmation"},on:{"update:value":function(r){e.$set(e.form,"password_confirmation",r)}}})],1),e._v(" "),t("v-card-actions",[t("submit-button",{attrs:{form:e.form,label:e.$t("register")}})],1)],1)],1)],1)],1)},staticRenderFns:[]}},mvVc:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a=t("Xxa5"),n=t.n(a),o=t("2gGM"),s=t.n(o);r.default={name:"register-view",metaInfo:function(){return{title:this.$t("register")}},data:function(){return{form:new s.a({name:"",email:"",password:"",password_confirmation:""}),eye:!0}},methods:{register:function(){var e,r=this;return(e=n.a.mark(function e(){var t,a,o,s;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.formHasErrors();case 2:if(!e.sent){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,r.form.post("register");case 6:return t=e.sent,a=t.data,e.next=10,r.form.post("login");case 10:return o=e.sent,s=o.data.token,r.$store.dispatch("auth/saveToken",{token:s}),e.next=15,r.$store.dispatch("auth/updateUser",{user:a});case 15:r.$router.push({name:"home"});case 16:case"end":return e.stop()}},e,r)}),function(){var r=e.apply(this,arguments);return new Promise(function(e,t){return function a(n,o){try{var s=r[n](o),i=s.value}catch(e){return void t(e)}if(!s.done)return Promise.resolve(i).then(function(e){a("next",e)},function(e){a("throw",e)});e(i)}("next")})})()}}}},"zAw/":function(e,r,t){var a=t("VU/8")(t("mvVc"),t("Y2PI"),!1,null,null,null);e.exports=a.exports}});
webpackJsonp([18],{"98G/":function(e,r){e.exports={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("v-layout",{attrs:{row:""}},[t("v-flex",{attrs:{xs12:"",sm8:"","offset-sm2":"",lg4:"","offset-lg4":""}},[t("v-card",[t("progress-bar",{attrs:{show:e.busy}}),e._v(" "),t("form",{on:{submit:function(r){return r.preventDefault(),e.login(r)},keydown:function(r){e.form.onKeydown(r)}}},[t("v-card-title",{attrs:{"primary-title":""}},[t("h3",{staticClass:"headline mb-0"},[e._v(e._s(e.$t("login")))])]),e._v(" "),t("v-card-text",[t("email-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],attrs:{form:e.form,label:e.$t("email"),"v-errors":e.errors,value:e.form.email,name:"email",prepend:"person_outline"},on:{"update:value":function(r){e.$set(e.form,"email",r)}}}),e._v(" "),t("password-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|min:8",expression:"'required|min:8'"}],attrs:{"v-errors":e.errors,form:e.form,value:e.form.password,prepend:"lock_outline"},on:{"update:value":function(r){e.$set(e.form,"password",r)}}}),e._v(" "),t("v-checkbox",{attrs:{label:e.$t("remember_me"),color:"primary",type:"checkbox",value:"true"},model:{value:e.remember,callback:function(r){e.remember=r},expression:"remember"}}),e._v(" "),t("submit-button",{attrs:{block:!0,form:e.form,label:e.$t("login")}})],1)],1)],1)],1)],1)},staticRenderFns:[]}},d7xM:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a=t("lC5x"),n=t.n(a),o=t("J0Oq"),s=t.n(o),i=t("+ZOo"),u=t.n(i);r.default={name:"login-view",metaInfo:function(){return{title:this.$t("login")}},data:function(){return{form:new u.a({email:"",password:""}),eye:!0,remember:!1,busy:!1}},methods:{login:function(){var e=this;return s()(n.a.mark(function r(){var t,a;return n.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.formHasErrors();case 2:if(!r.sent){r.next=4;break}return r.abrupt("return");case 4:return e.busy=!0,r.next=7,e.form.post("login");case 7:return t=r.sent,a=t.data,e.$store.dispatch("auth/saveToken",{token:a.token,remember:e.remember}),r.next=12,e.$store.dispatch("auth/fetchUser");case 12:e.busy=!1,e.$router.push({name:"home"});case 14:case"end":return r.stop()}},r,e)}))()}}}},yNuM:function(e,r,t){var a=t("Z0/y")(t("d7xM"),t("98G/"),!1,null,null,null);e.exports=a.exports}});
webpackJsonp([4],{

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(258)
/* template */
var __vue_template__ = __webpack_require__(259)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/pages/welcome.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5e02b7d5", Component.options)
  } else {
    hotAPI.reload("data-v-5e02b7d5", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(23);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'welcome-view',
  layout: 'default',

  metaInfo: function metaInfo() {
    return { title: this.$t('home') };
  },


  computed: Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["b" /* mapGetters */])('auth', {
    authenticated: 'authCheck'
  }),

  data: function data() {
    return {
      title: window.config.appName
    };
  }
});

/***/ }),

/***/ 259:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "main",
      [
        _c(
          "v-content",
          [
            _c(
              "v-container",
              { attrs: { fluid: "" } },
              [
                _c("v-layout", { attrs: { column: "", "align-center": "" } }, [
                  _c("div", { staticClass: "display-3 grey--text mt-5" }, [
                    _vm._v(
                      "\n            " + _vm._s(_vm.title) + "\n          "
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "body-2 my-3" }, [
                    _c("a", { attrs: { href: "https://laravel.com/docs" } }, [
                      _vm._v("Documentation")
                    ]),
                    _vm._v(" "),
                    _c("a", { attrs: { href: "https://laracasts.com" } }, [
                      _vm._v("Laracasts")
                    ]),
                    _vm._v(" "),
                    _c("a", { attrs: { href: "https://laravel-news.com" } }, [
                      _vm._v("News")
                    ]),
                    _vm._v(" "),
                    _c("a", { attrs: { href: "https://forge.laravel.com" } }, [
                      _vm._v("Forge")
                    ]),
                    _vm._v(" "),
                    _c(
                      "a",
                      { attrs: { href: "https://github.com/laravel/laravel" } },
                      [_vm._v("GitHub")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("img", {
                    staticClass: "mt-5",
                    attrs: { src: "/img/v.png", alt: "Vuetify.js" }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "display-2 grey--text mt-5" }, [
                    _vm._v("\n            Vuetify\n          ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "body-2 my-3" }, [
                    _c("a", { attrs: { href: "https://vuetifyjs.com" } }, [
                      _vm._v("Documentation")
                    ]),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        attrs: { href: "https://github.com/vuetifyjs/vuetify" }
                      },
                      [_vm._v("GitHub")]
                    )
                  ])
                ])
              ],
              1
            )
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-5e02b7d5", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3dlbGNvbWUudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3dlbGNvbWUudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvd2VsY29tZS52dWU/YjRhNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLDRDQUFvYjtBQUNwYjtBQUNBLDhDQUFtTTtBQUNuTTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRUE7O0FBRUE7UUFFQTtVQUVBOztnQ0FDQTs0QkFDQTtBQUVBOzs7O21CQUlBO0FBSEE7Ozs7MkJBTUE7QUFGQTs7QUFaQSxHOzs7Ozs7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxTQUFTLFlBQVksRUFBRTtBQUN0QztBQUNBLGdDQUFnQyxTQUFTLGlDQUFpQyxFQUFFO0FBQzVFLDZCQUE2QiwyQ0FBMkM7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qiw2QkFBNkI7QUFDMUQsNkJBQTZCLFNBQVMsbUNBQW1DLEVBQUU7QUFDM0U7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLFNBQVMsZ0NBQWdDLEVBQUU7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLFNBQVMsbUNBQW1DLEVBQUU7QUFDM0U7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLFNBQVMsb0NBQW9DLEVBQUU7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixTQUFTLDZDQUE2QyxFQUFFO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QixtQkFBbUI7QUFDbkI7QUFDQSw2QkFBNkIsMkNBQTJDO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qiw2QkFBNkI7QUFDMUQsNkJBQTZCLFNBQVMsZ0NBQWdDLEVBQUU7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6IjQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDEzLjcuMUB2dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dLFtcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV0sW1xcXCJzdGFnZS0yXFxcIl1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIsXFxcInRyYW5zZm9ybS1hc3luYy10by1nZW5lcmF0b3JcXFwiLFxcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixcXFwic3ludGF4LWR5bmFtaWMtaW1wb3J0XFxcIl19IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxMy43LjFAdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3dlbGNvbWUudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTMuNy4xQHZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNWUwMmI3ZDVcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxMy43LjFAdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vd2VsY29tZS52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy93ZWxjb21lLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi01ZTAyYjdkNVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTVlMDJiN2Q1XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3dlbGNvbWUudnVlXG4vLyBtb2R1bGUgaWQgPSAyMjRcbi8vIG1vZHVsZSBjaHVua3MgPSA0IiwiPHRlbXBsYXRlPlxuICA8ZGl2PlxuICAgIDwhLS08di10b29sYmFyPi0tPlxuICAgICAgPCEtLTx2LXNwYWNlcj48L3Ytc3BhY2VyPi0tPlxuICAgICAgPCEtLTx2LXRvb2xiYXItaXRlbXM+LS0+XG4gICAgICAgIDwhLS08di1idG4gZmxhdCB2LWlmPVwiYXV0aGVudGljYXRlZFwiIDp0bz1cInsgbmFtZTogJ2hvbWUnIH1cIj57eyAkdCgnaG9tZScpIH19PC92LWJ0bj4tLT5cbiAgICAgICAgPCEtLTx0ZW1wbGF0ZSB2LWVsc2U+LS0+XG4gICAgICAgICAgPCEtLTx2LWJ0biBmbGF0IDp0bz1cInsgbmFtZTogJ2xvZ2luJyB9XCI+e3sgJHQoJ2xvZ2luJykgfX08L3YtYnRuPi0tPlxuICAgICAgICAgIDwhLS08di1idG4gZmxhdCA6dG89XCJ7IG5hbWU6ICdyZWdpc3RlcicgfVwiPnt7ICR0KCdyZWdpc3RlcicpIH19PC92LWJ0bj4tLT5cbiAgICAgICAgPCEtLTwvdGVtcGxhdGU+LS0+XG4gICAgICA8IS0tPC92LXRvb2xiYXItaXRlbXM+LS0+XG4gICAgPCEtLTwvdi10b29sYmFyPi0tPlxuICAgIDxtYWluPlxuICAgICAgPHYtY29udGVudD5cbiAgICAgICAgPHYtY29udGFpbmVyIGZsdWlkPlxuICAgICAgICAgIDx2LWxheW91dCBjb2x1bW4gYWxpZ24tY2VudGVyPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRpc3BsYXktMyBncmV5LS10ZXh0IG10LTVcIj5cbiAgICAgICAgICAgICAge3sgdGl0bGUgfX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvZHktMiBteS0zXCI+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2xhcmF2ZWwuY29tL2RvY3NcIj5Eb2N1bWVudGF0aW9uPC9hPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9sYXJhY2FzdHMuY29tXCI+TGFyYWNhc3RzPC9hPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9sYXJhdmVsLW5ld3MuY29tXCI+TmV3czwvYT5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZm9yZ2UubGFyYXZlbC5jb21cIj5Gb3JnZTwvYT5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9sYXJhdmVsL2xhcmF2ZWxcIj5HaXRIdWI8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltZy92LnBuZ1wiIGFsdD1cIlZ1ZXRpZnkuanNcIiBjbGFzcz1cIm10LTVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkaXNwbGF5LTIgZ3JleS0tdGV4dCBtdC01XCI+XG4gICAgICAgICAgICAgIFZ1ZXRpZnlcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvZHktMiBteS0zXCI+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3Z1ZXRpZnlqcy5jb21cIj5Eb2N1bWVudGF0aW9uPC9hPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3Z1ZXRpZnlqcy92dWV0aWZ5XCI+R2l0SHViPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC92LWxheW91dD5cbiAgICAgICAgPC92LWNvbnRhaW5lcj5cbiAgICAgIDwvdi1jb250ZW50PlxuICAgIDwvbWFpbj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgbWFwR2V0dGVycyB9IGZyb20gJ3Z1ZXgnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ3dlbGNvbWUtdmlldycsXG4gIGxheW91dDogJ2RlZmF1bHQnLFxuXG4gIG1ldGFJbmZvICgpIHtcbiAgICByZXR1cm4geyB0aXRsZTogdGhpcy4kdCgnaG9tZScpIH1cbiAgfSxcblxuICBjb21wdXRlZDogbWFwR2V0dGVycygnYXV0aCcse1xuICAgIGF1dGhlbnRpY2F0ZWQ6ICdhdXRoQ2hlY2snXG4gIH0pLFxuXG4gIGRhdGE6ICgpID0+ICh7XG4gICAgdGl0bGU6IHdpbmRvdy5jb25maWcuYXBwTmFtZVxuICB9KVxufVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy93ZWxjb21lLnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF9jKFxuICAgICAgXCJtYWluXCIsXG4gICAgICBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwidi1jb250ZW50XCIsXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwidi1jb250YWluZXJcIixcbiAgICAgICAgICAgICAgeyBhdHRyczogeyBmbHVpZDogXCJcIiB9IH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcInYtbGF5b3V0XCIsIHsgYXR0cnM6IHsgY29sdW1uOiBcIlwiLCBcImFsaWduLWNlbnRlclwiOiBcIlwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkaXNwbGF5LTMgZ3JleS0tdGV4dCBtdC01XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBcIiArIF92bS5fcyhfdm0udGl0bGUpICsgXCJcXG4gICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJib2R5LTIgbXktM1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgaHJlZjogXCJodHRwczovL2xhcmF2ZWwuY29tL2RvY3NcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJEb2N1bWVudGF0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBocmVmOiBcImh0dHBzOi8vbGFyYWNhc3RzLmNvbVwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkxhcmFjYXN0c1wiKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgaHJlZjogXCJodHRwczovL2xhcmF2ZWwtbmV3cy5jb21cIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJOZXdzXCIpXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBocmVmOiBcImh0dHBzOi8vZm9yZ2UubGFyYXZlbC5jb21cIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJGb3JnZVwiKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBocmVmOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9sYXJhdmVsL2xhcmF2ZWxcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkdpdEh1YlwiKV1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtdC01XCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogXCIvaW1nL3YucG5nXCIsIGFsdDogXCJWdWV0aWZ5LmpzXCIgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkaXNwbGF5LTIgZ3JleS0tdGV4dCBtdC01XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgICBWdWV0aWZ5XFxuICAgICAgICAgIFwiKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJib2R5LTIgbXktM1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgaHJlZjogXCJodHRwczovL3Z1ZXRpZnlqcy5jb21cIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJEb2N1bWVudGF0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92dWV0aWZ5anMvdnVldGlmeVwiIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJHaXRIdWJcIildXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApXG4gICAgICBdLFxuICAgICAgMVxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtNWUwMmI3ZDVcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxMy43LjFAdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi01ZTAyYjdkNVwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDEzLjcuMUB2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3dlbGNvbWUudnVlXG4vLyBtb2R1bGUgaWQgPSAyNTlcbi8vIG1vZHVsZSBjaHVua3MgPSA0Il0sInNvdXJjZVJvb3QiOiIifQ==
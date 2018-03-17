webpackJsonp([17],{

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(238)
/* template */
var __vue_template__ = __webpack_require__(239)
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

/***/ 238:
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

/***/ 239:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3dlbGNvbWUudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3dlbGNvbWUudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvd2VsY29tZS52dWU/YjRhNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLDRDQUFvYjtBQUNwYjtBQUNBLDhDQUFtTTtBQUNuTTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRUE7O0FBRUE7UUFFQTtVQUVBOztnQ0FDQTs0QkFDQTtBQUVBOzs7O21CQUlBO0FBSEE7Ozs7MkJBTUE7QUFGQTs7QUFaQSxHOzs7Ozs7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxTQUFTLFlBQVksRUFBRTtBQUN0QztBQUNBLGdDQUFnQyxTQUFTLGlDQUFpQyxFQUFFO0FBQzVFLDZCQUE2QiwyQ0FBMkM7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qiw2QkFBNkI7QUFDMUQsNkJBQTZCLFNBQVMsbUNBQW1DLEVBQUU7QUFDM0U7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLFNBQVMsZ0NBQWdDLEVBQUU7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLFNBQVMsbUNBQW1DLEVBQUU7QUFDM0U7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLFNBQVMsb0NBQW9DLEVBQUU7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixTQUFTLDZDQUE2QyxFQUFFO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QixtQkFBbUI7QUFDbkI7QUFDQSw2QkFBNkIsMkNBQTJDO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qiw2QkFBNkI7QUFDMUQsNkJBQTZCLFNBQVMsZ0NBQWdDLEVBQUU7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6IjE3LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxMy43LjFAdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XSxbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dLFtcXFwic3RhZ2UtMlxcXCJdXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLFxcXCJ0cmFuc2Zvcm0tYXN5bmMtdG8tZ2VuZXJhdG9yXFxcIixcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCJdfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTMuNy4xQHZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi93ZWxjb21lLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDEzLjcuMUB2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTVlMDJiN2Q1XFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTMuNy4xQHZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3dlbGNvbWUudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvcGFnZXMvd2VsY29tZS52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNWUwMmI3ZDVcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi01ZTAyYjdkNVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy93ZWxjb21lLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMTciLCI8dGVtcGxhdGU+XG4gIDxkaXY+XG4gICAgPCEtLTx2LXRvb2xiYXI+LS0+XG4gICAgICA8IS0tPHYtc3BhY2VyPjwvdi1zcGFjZXI+LS0+XG4gICAgICA8IS0tPHYtdG9vbGJhci1pdGVtcz4tLT5cbiAgICAgICAgPCEtLTx2LWJ0biBmbGF0IHYtaWY9XCJhdXRoZW50aWNhdGVkXCIgOnRvPVwieyBuYW1lOiAnaG9tZScgfVwiPnt7ICR0KCdob21lJykgfX08L3YtYnRuPi0tPlxuICAgICAgICA8IS0tPHRlbXBsYXRlIHYtZWxzZT4tLT5cbiAgICAgICAgICA8IS0tPHYtYnRuIGZsYXQgOnRvPVwieyBuYW1lOiAnbG9naW4nIH1cIj57eyAkdCgnbG9naW4nKSB9fTwvdi1idG4+LS0+XG4gICAgICAgICAgPCEtLTx2LWJ0biBmbGF0IDp0bz1cInsgbmFtZTogJ3JlZ2lzdGVyJyB9XCI+e3sgJHQoJ3JlZ2lzdGVyJykgfX08L3YtYnRuPi0tPlxuICAgICAgICA8IS0tPC90ZW1wbGF0ZT4tLT5cbiAgICAgIDwhLS08L3YtdG9vbGJhci1pdGVtcz4tLT5cbiAgICA8IS0tPC92LXRvb2xiYXI+LS0+XG4gICAgPG1haW4+XG4gICAgICA8di1jb250ZW50PlxuICAgICAgICA8di1jb250YWluZXIgZmx1aWQ+XG4gICAgICAgICAgPHYtbGF5b3V0IGNvbHVtbiBhbGlnbi1jZW50ZXI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGlzcGxheS0zIGdyZXktLXRleHQgbXQtNVwiPlxuICAgICAgICAgICAgICB7eyB0aXRsZSB9fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm9keS0yIG15LTNcIj5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vbGFyYXZlbC5jb20vZG9jc1wiPkRvY3VtZW50YXRpb248L2E+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2xhcmFjYXN0cy5jb21cIj5MYXJhY2FzdHM8L2E+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2xhcmF2ZWwtbmV3cy5jb21cIj5OZXdzPC9hPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9mb3JnZS5sYXJhdmVsLmNvbVwiPkZvcmdlPC9hPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2xhcmF2ZWwvbGFyYXZlbFwiPkdpdEh1YjwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1nL3YucG5nXCIgYWx0PVwiVnVldGlmeS5qc1wiIGNsYXNzPVwibXQtNVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRpc3BsYXktMiBncmV5LS10ZXh0IG10LTVcIj5cbiAgICAgICAgICAgICAgVnVldGlmeVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm9keS0yIG15LTNcIj5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdnVldGlmeWpzLmNvbVwiPkRvY3VtZW50YXRpb248L2E+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vdnVldGlmeWpzL3Z1ZXRpZnlcIj5HaXRIdWI8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3YtbGF5b3V0PlxuICAgICAgICA8L3YtY29udGFpbmVyPlxuICAgICAgPC92LWNvbnRlbnQ+XG4gICAgPC9tYWluPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBtYXBHZXR0ZXJzIH0gZnJvbSAndnVleCdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnd2VsY29tZS12aWV3JyxcbiAgbGF5b3V0OiAnZGVmYXVsdCcsXG5cbiAgbWV0YUluZm8gKCkge1xuICAgIHJldHVybiB7IHRpdGxlOiB0aGlzLiR0KCdob21lJykgfVxuICB9LFxuXG4gIGNvbXB1dGVkOiBtYXBHZXR0ZXJzKCdhdXRoJyx7XG4gICAgYXV0aGVudGljYXRlZDogJ2F1dGhDaGVjaydcbiAgfSksXG5cbiAgZGF0YTogKCkgPT4gKHtcbiAgICB0aXRsZTogd2luZG93LmNvbmZpZy5hcHBOYW1lXG4gIH0pXG59XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3dlbGNvbWUudnVlIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgX2MoXG4gICAgICBcIm1haW5cIixcbiAgICAgIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJ2LWNvbnRlbnRcIixcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJ2LWNvbnRhaW5lclwiLFxuICAgICAgICAgICAgICB7IGF0dHJzOiB7IGZsdWlkOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwidi1sYXlvdXRcIiwgeyBhdHRyczogeyBjb2x1bW46IFwiXCIsIFwiYWxpZ24tY2VudGVyXCI6IFwiXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImRpc3BsYXktMyBncmV5LS10ZXh0IG10LTVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS50aXRsZSkgKyBcIlxcbiAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJvZHktMiBteS0zXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBocmVmOiBcImh0dHBzOi8vbGFyYXZlbC5jb20vZG9jc1wiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkRvY3VtZW50YXRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IGhyZWY6IFwiaHR0cHM6Ly9sYXJhY2FzdHMuY29tXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiTGFyYWNhc3RzXCIpXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBocmVmOiBcImh0dHBzOi8vbGFyYXZlbC1uZXdzLmNvbVwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIk5ld3NcIilcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IGhyZWY6IFwiaHR0cHM6Ly9mb3JnZS5sYXJhdmVsLmNvbVwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkZvcmdlXCIpXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGhyZWY6IFwiaHR0cHM6Ly9naXRodWIuY29tL2xhcmF2ZWwvbGFyYXZlbFwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiR2l0SHViXCIpXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm10LTVcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBcIi9pbWcvdi5wbmdcIiwgYWx0OiBcIlZ1ZXRpZnkuanNcIiB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImRpc3BsYXktMiBncmV5LS10ZXh0IG10LTVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICAgIFZ1ZXRpZnlcXG4gICAgICAgICAgXCIpXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJvZHktMiBteS0zXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBocmVmOiBcImh0dHBzOi8vdnVldGlmeWpzLmNvbVwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkRvY3VtZW50YXRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiaHR0cHM6Ly9naXRodWIuY29tL3Z1ZXRpZnlqcy92dWV0aWZ5XCIgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkdpdEh1YlwiKV1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgIClcbiAgICAgIF0sXG4gICAgICAxXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi01ZTAyYjdkNVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDEzLjcuMUB2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTVlMDJiN2Q1XCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTMuNy4xQHZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvd2VsY29tZS52dWVcbi8vIG1vZHVsZSBpZCA9IDIzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDE3Il0sInNvdXJjZVJvb3QiOiIifQ==
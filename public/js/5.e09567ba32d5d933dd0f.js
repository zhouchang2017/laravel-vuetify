webpackJsonp([5],{

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(210)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(212)
/* template */
var __vue_template__ = __webpack_require__(213)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4a41e762"
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
Component.options.__file = "resources/assets/js/pages/nuxt/settings.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4a41e762", Component.options)
  } else {
    hotAPI.reload("data-v-4a41e762", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(211);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("24268022", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4a41e762\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./settings.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4a41e762\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./settings.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"settings.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

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
  name: 'nuxt_index',
  data: function data() {
    return {
      dialog: false,
      dialogInfo: {
        title: '',
        text: '',
        index: null,
        id: null
      },
      loaded: false,
      name: this.$t('nuxt_settings'),
      search: '',
      body: {},
      loading: false,
      pagination: {
        sortBy: 'updated_at',
        descending: 'desc'
      },
      headers: [{ text: 'id', value: 'id', align: 'left' }, { text: 'Prefix', value: 'prefix', align: 'center' }, { text: this.$t('client_name'), value: 'name', align: 'center' }, { text: this.$t('post_count'), value: 'post_count', align: 'center' }, { text: this.$t('updated_at'), value: 'updated_at', align: 'center' }, { text: 'Actions', value: 'name', align: 'center', sortable: false }]
    };
  },

  watch: {
    pagination: {
      handler: function handler() {
        var _this = this;

        return _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
          return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return _this.fetch();

                case 2:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this);
        }))();
      },

      deep: true
    }
  },
  methods: {
    fetch: function fetch() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var _pagination, sortBy, descending, page, rowsPerPage, queryBuild, body;

        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.loading = true;
                _pagination = _this2.pagination, sortBy = _pagination.sortBy, descending = _pagination.descending, page = _pagination.page, rowsPerPage = _pagination.rowsPerPage;
                queryBuild = { page: page };

                if (sortBy) queryBuild.orderBy = sortBy;
                if (descending) queryBuild.sortedBy = 'desc';
                if (rowsPerPage) queryBuild.limit = rowsPerPage;
                console.log(queryBuild);
                _context2.next = 9;
                return _this2.$store.dispatch('nuxt/index', queryBuild);

              case 9:
                body = _context2.sent;

                _this2.$set(_this2, 'body', body);
                _this2.loading = false;

              case 12:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    },
    editItem: function editItem(item) {
      this.$router.push({ name: 'nuxt.edit', params: { id: item.id } });
    },
    deleteItem: function deleteItem(item) {
      this.dialog = true;
      this.dialogInfo.title = 'Are you sure you want to delete this item?';
      this.dialogInfo.text = 'Client name => ' + item.name;
      this.dialogInfo.index = this.body.data.indexOf(item);
      this.dialogInfo.id = item.id;
    },
    deleteOk: function deleteOk() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3() {
        var res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _this3.$store.dispatch('nuxt/delete', { id: _this3.dialogInfo.id });

              case 2:
                res = _context3.sent;

                _this3.dialog = false;
                _this3.$store.dispatch('message/responseMessage', {
                  text: res.message
                });
                _this3.body.data.splice(_this3.dialogInfo.index, 1);
                _this3.dialogInfo = { title: '', text: '', index: null, id: null };

              case 7:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this3);
      }))();
    }
  },
  created: function created() {
    var _this4 = this;

    return _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee4() {
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _this4.fetch();

            case 2:
              _this4.loaded = true;

            case 3:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, _this4);
    }))();
  }
});

/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "v-card",
        [
          _c(
            "v-card-title",
            { staticClass: "grey lighten-4", attrs: { "primary-title": "" } },
            [
              _c("h3", { staticClass: "headline mb-0" }, [
                _vm._v(_vm._s(_vm.name))
              ])
            ]
          ),
          _vm._v(" "),
          _c("v-divider"),
          _vm._v(" "),
          _vm.loaded
            ? _c("v-data-table", {
                staticClass: "elevation-1",
                attrs: {
                  headers: _vm.headers,
                  items: _vm.body.data,
                  search: _vm.search,
                  pagination: _vm.pagination,
                  "total-items": _vm.body.meta.total,
                  loading: _vm.loading,
                  "rows-per-page-items": [5, 10, 20, 40]
                },
                on: {
                  "update:pagination": function($event) {
                    _vm.pagination = $event
                  }
                },
                scopedSlots: _vm._u([
                  {
                    key: "items",
                    fn: function(props) {
                      return [
                        _c("td", { staticClass: "text-xs-left" }, [
                          _vm._v(_vm._s(props.item.id))
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-xs-center" }, [
                          _vm._v(_vm._s(props.item.prefix))
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-xs-center" }, [
                          _vm._v(_vm._s(props.item.name))
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-xs-center" }, [
                          _vm._v(_vm._s(props.item.post_count))
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-xs-center" }, [
                          _vm._v(_vm._s(props.item.updated_at))
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-xs-center" }, [
                          _c(
                            "div",
                            { staticClass: "d-inline-flex" },
                            [
                              _c(
                                "v-btn",
                                {
                                  attrs: { icon: "" },
                                  on: {
                                    click: function($event) {
                                      _vm.editItem(props.item)
                                    }
                                  }
                                },
                                [
                                  _c("v-icon", { attrs: { color: "teal" } }, [
                                    _vm._v("edit")
                                  ])
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  attrs: { icon: "" },
                                  on: {
                                    click: function($event) {
                                      _vm.deleteItem(props.item)
                                    }
                                  }
                                },
                                [
                                  _c("v-icon", { attrs: { color: "pink" } }, [
                                    _vm._v("delete")
                                  ])
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ])
                      ]
                    }
                  }
                ])
              })
            : _vm._e(),
          _vm._v(" "),
          _c(
            "v-layout",
            { attrs: { row: "", "justify-center": "" } },
            [
              _c(
                "v-dialog",
                {
                  attrs: { "max-width": "290" },
                  model: {
                    value: _vm.dialog,
                    callback: function($$v) {
                      _vm.dialog = $$v
                    },
                    expression: "dialog"
                  }
                },
                [
                  _c(
                    "v-card",
                    [
                      _c("v-card-title", { staticClass: "headline" }, [
                        _vm._v(_vm._s(_vm.dialogInfo.title))
                      ]),
                      _vm._v(" "),
                      _c("v-card-text", [
                        _vm._v(
                          _vm._s(_vm.dialogInfo.text) + "\n                    "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-card-actions",
                        [
                          _c("v-spacer"),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { color: "green darken-1", flat: "flat" },
                              nativeOn: {
                                click: function($event) {
                                  _vm.dialog = false
                                }
                              }
                            },
                            [_vm._v("Disagree")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { color: "green darken-1", flat: "flat" },
                              nativeOn: {
                                click: function($event) {
                                  return _vm.deleteOk($event)
                                }
                              }
                            },
                            [_vm._v("Agree")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4a41e762", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL251eHQvc2V0dGluZ3MudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvbnV4dC9zZXR0aW5ncy52dWU/N2I4YyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL251eHQvc2V0dGluZ3MudnVlPzllZGIiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvbnV4dC9zZXR0aW5ncy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9udXh0L3NldHRpbmdzLnZ1ZT85NTI1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EseUJBQXFNO0FBQ3JNO0FBQ0E7QUFDQTtBQUNBLDRDQUFrUztBQUNsUztBQUNBLDhDQUFrTDtBQUNsTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7Ozs7Ozs7O0FDNUNBOztBQUVBO0FBQ0EscUNBQXdPO0FBQ3hPO0FBQ0E7QUFDQTtBQUNBLGtFQUEySDtBQUMzSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNKQUFzSixpRkFBaUY7QUFDdk8sK0pBQStKLGlGQUFpRjtBQUNoUDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7Ozs7QUNwQkE7QUFDQTs7O0FBR0E7QUFDQSwrU0FBZ1Qsd0ZBQXdGOztBQUV4WTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6ImpzLzUuZTA5NTY3YmEzMmQ1ZDkzM2RkMGYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTRhNDFlNzYyXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vc2V0dGluZ3MudnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XSxcXFwic3RhZ2UtMlxcXCJdLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9zZXR0aW5ncy52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTRhNDFlNzYyXFxcIixcXFwiaGFzU2NvcGVkXFxcIjp0cnVlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zZXR0aW5ncy52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IFwiZGF0YS12LTRhNDFlNzYyXCJcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvcGFnZXMvbnV4dC9zZXR0aW5ncy52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNGE0MWU3NjJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi00YTQxZTc2MlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9udXh0L3NldHRpbmdzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTM2XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi00YTQxZTc2MlxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NldHRpbmdzLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiMjQyNjgwMjJcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTRhNDFlNzYyXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vc2V0dGluZ3MudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTRhNDFlNzYyXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vc2V0dGluZ3MudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTRhNDFlNzYyXCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvbnV4dC9zZXR0aW5ncy52dWVcbi8vIG1vZHVsZSBpZCA9IDIxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcImZpbGVcIjpcInNldHRpbmdzLnZ1ZVwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTRhNDFlNzYyXCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvbnV4dC9zZXR0aW5ncy52dWVcbi8vIG1vZHVsZSBpZCA9IDIxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPHYtY2FyZD5cbiAgICAgICAgICAgIDx2LWNhcmQtdGl0bGUgcHJpbWFyeS10aXRsZSBjbGFzcz1cImdyZXkgbGlnaHRlbi00XCI+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiaGVhZGxpbmUgbWItMFwiPnt7IG5hbWUgfX08L2gzPlxuICAgICAgICAgICAgPC92LWNhcmQtdGl0bGU+XG4gICAgICAgICAgICA8di1kaXZpZGVyPjwvdi1kaXZpZGVyPlxuICAgICAgICAgICAgPHYtZGF0YS10YWJsZVxuICAgICAgICAgICAgICAgICAgICB2LWlmPVwibG9hZGVkXCJcbiAgICAgICAgICAgICAgICAgICAgOmhlYWRlcnM9XCJoZWFkZXJzXCJcbiAgICAgICAgICAgICAgICAgICAgOml0ZW1zPVwiYm9keS5kYXRhXCJcbiAgICAgICAgICAgICAgICAgICAgOnNlYXJjaD1cInNlYXJjaFwiXG4gICAgICAgICAgICAgICAgICAgIDpwYWdpbmF0aW9uLnN5bmM9XCJwYWdpbmF0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgOnRvdGFsLWl0ZW1zPVwiYm9keS5tZXRhLnRvdGFsXCJcbiAgICAgICAgICAgICAgICAgICAgOmxvYWRpbmc9XCJsb2FkaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJlbGV2YXRpb24tMVwiXG4gICAgICAgICAgICAgICAgICAgIDpyb3dzLXBlci1wYWdlLWl0ZW1zPVwiWzUsMTAsMjAsNDBdXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cIml0ZW1zXCIgc2xvdC1zY29wZT1cInByb3BzXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRleHQteHMtbGVmdFwiPnt7IHByb3BzLml0ZW0uaWQgfX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0ZXh0LXhzLWNlbnRlclwiPnt7IHByb3BzLml0ZW0ucHJlZml4IH19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGV4dC14cy1jZW50ZXJcIj57eyBwcm9wcy5pdGVtLm5hbWUgfX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0ZXh0LXhzLWNlbnRlclwiPnt7IHByb3BzLml0ZW0ucG9zdF9jb3VudCB9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRleHQteHMtY2VudGVyXCI+e3sgcHJvcHMuaXRlbS51cGRhdGVkX2F0IH19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGV4dC14cy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWlubGluZS1mbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtYnRuIGljb24gQGNsaWNrPVwiZWRpdEl0ZW0ocHJvcHMuaXRlbSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtaWNvbiBjb2xvcj1cInRlYWxcIj5lZGl0PC92LWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1idG4gaWNvbiBAY2xpY2s9XCJkZWxldGVJdGVtKHByb3BzLml0ZW0pXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWljb24gY29sb3I9XCJwaW5rXCI+ZGVsZXRlPC92LWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8L3YtZGF0YS10YWJsZT5cbiAgICAgICAgICAgIDx2LWxheW91dCByb3cganVzdGlmeS1jZW50ZXI+XG4gICAgICAgICAgICAgICAgPHYtZGlhbG9nIHYtbW9kZWw9XCJkaWFsb2dcIiBtYXgtd2lkdGg9XCIyOTBcIj5cbiAgICAgICAgICAgICAgICAgICAgPHYtY2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWNhcmQtdGl0bGUgY2xhc3M9XCJoZWFkbGluZVwiPnt7IGRpYWxvZ0luZm8udGl0bGUgfX08L3YtY2FyZC10aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWNhcmQtdGV4dD57eyBkaWFsb2dJbmZvLnRleHQgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1jYXJkLXRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di1jYXJkLWFjdGlvbnM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtc3BhY2VyPjwvdi1zcGFjZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtYnRuIGNvbG9yPVwiZ3JlZW4gZGFya2VuLTFcIiBmbGF0PVwiZmxhdFwiIEBjbGljay5uYXRpdmU9XCJkaWFsb2cgPSBmYWxzZVwiPkRpc2FncmVlPC92LWJ0bj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1idG4gY29sb3I9XCJncmVlbiBkYXJrZW4tMVwiIGZsYXQ9XCJmbGF0XCIgQGNsaWNrLm5hdGl2ZT1cImRlbGV0ZU9rXCI+QWdyZWU8L3YtYnRuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LWNhcmQtYWN0aW9ucz5cbiAgICAgICAgICAgICAgICAgICAgPC92LWNhcmQ+XG4gICAgICAgICAgICAgICAgPC92LWRpYWxvZz5cbiAgICAgICAgICAgIDwvdi1sYXlvdXQ+XG4gICAgICAgIDwvdi1jYXJkPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6ICdudXh0X2luZGV4JyxcbiAgICBkYXRhICgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRpYWxvZzogZmFsc2UsXG4gICAgICAgIGRpYWxvZ0luZm86IHtcbiAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgdGV4dDogJycsXG4gICAgICAgICAgaW5kZXg6IG51bGwsXG4gICAgICAgICAgaWQ6IG51bGxcbiAgICAgICAgfSxcbiAgICAgICAgbG9hZGVkOiBmYWxzZSxcbiAgICAgICAgbmFtZTogdGhpcy4kdCgnbnV4dF9zZXR0aW5ncycpLFxuICAgICAgICBzZWFyY2g6ICcnLFxuICAgICAgICBib2R5OiB7fSxcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgICBzb3J0Qnk6ICd1cGRhdGVkX2F0JyxcbiAgICAgICAgICBkZXNjZW5kaW5nOiAnZGVzYydcbiAgICAgICAgfSxcbiAgICAgICAgaGVhZGVyczogW1xuICAgICAgICAgIHt0ZXh0OiAnaWQnLCB2YWx1ZTogJ2lkJywgYWxpZ246ICdsZWZ0J30sXG4gICAgICAgICAge3RleHQ6ICdQcmVmaXgnLCB2YWx1ZTogJ3ByZWZpeCcsIGFsaWduOiAnY2VudGVyJ30sXG4gICAgICAgICAge3RleHQ6IHRoaXMuJHQoJ2NsaWVudF9uYW1lJyksIHZhbHVlOiAnbmFtZScsIGFsaWduOiAnY2VudGVyJ30sXG4gICAgICAgICAge3RleHQ6IHRoaXMuJHQoJ3Bvc3RfY291bnQnKSwgdmFsdWU6ICdwb3N0X2NvdW50JywgYWxpZ246ICdjZW50ZXInfSxcbiAgICAgICAgICB7dGV4dDogdGhpcy4kdCgndXBkYXRlZF9hdCcpLCB2YWx1ZTogJ3VwZGF0ZWRfYXQnLCBhbGlnbjogJ2NlbnRlcid9LFxuICAgICAgICAgIHt0ZXh0OiAnQWN0aW9ucycsIHZhbHVlOiAnbmFtZScsIGFsaWduOiAnY2VudGVyJywgc29ydGFibGU6IGZhbHNlfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICB3YXRjaDoge1xuICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICBhc3luYyBoYW5kbGVyICgpIHtcbiAgICAgICAgICBhd2FpdCB0aGlzLmZldGNoKClcbiAgICAgICAgfSxcbiAgICAgICAgZGVlcDogdHJ1ZVxuICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgYXN5bmMgZmV0Y2ggKCkge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlXG4gICAgICAgIGNvbnN0IHtzb3J0QnksIGRlc2NlbmRpbmcsIHBhZ2UsIHJvd3NQZXJQYWdlfSA9IHRoaXMucGFnaW5hdGlvblxuICAgICAgICBsZXQgcXVlcnlCdWlsZCA9IHtwYWdlfVxuICAgICAgICBpZiAoc29ydEJ5KSBxdWVyeUJ1aWxkLm9yZGVyQnkgPSBzb3J0QnlcbiAgICAgICAgaWYgKGRlc2NlbmRpbmcpIHF1ZXJ5QnVpbGQuc29ydGVkQnkgPSAnZGVzYydcbiAgICAgICAgaWYgKHJvd3NQZXJQYWdlKSBxdWVyeUJ1aWxkLmxpbWl0ID0gcm93c1BlclBhZ2VcbiAgICAgICAgY29uc29sZS5sb2cocXVlcnlCdWlsZClcbiAgICAgICAgbGV0IGJvZHkgPSBhd2FpdCB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnbnV4dC9pbmRleCcsIHF1ZXJ5QnVpbGQpXG4gICAgICAgIHRoaXMuJHNldCh0aGlzLCAnYm9keScsIGJvZHkpXG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlXG4gICAgICB9LFxuICAgICAgZWRpdEl0ZW0gKGl0ZW0pIHtcbiAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe25hbWU6ICdudXh0LmVkaXQnLCBwYXJhbXM6IHtpZDogaXRlbS5pZH19KVxuICAgICAgfSxcbiAgICAgIGRlbGV0ZUl0ZW0gKGl0ZW0pIHtcbiAgICAgICAgdGhpcy5kaWFsb2cgPSB0cnVlXG4gICAgICAgIHRoaXMuZGlhbG9nSW5mby50aXRsZSA9ICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgaXRlbT8nXG4gICAgICAgIHRoaXMuZGlhbG9nSW5mby50ZXh0ID0gYENsaWVudCBuYW1lID0+ICR7aXRlbS5uYW1lfWBcbiAgICAgICAgdGhpcy5kaWFsb2dJbmZvLmluZGV4ID0gdGhpcy5ib2R5LmRhdGEuaW5kZXhPZihpdGVtKVxuICAgICAgICB0aGlzLmRpYWxvZ0luZm8uaWQgPSBpdGVtLmlkXG4gICAgICB9LFxuICAgICAgYXN5bmMgZGVsZXRlT2sgKCkge1xuICAgICAgICBsZXQgcmVzID0gYXdhaXQgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ251eHQvZGVsZXRlJywge2lkOiB0aGlzLmRpYWxvZ0luZm8uaWR9KVxuICAgICAgICB0aGlzLmRpYWxvZyA9IGZhbHNlXG4gICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdtZXNzYWdlL3Jlc3BvbnNlTWVzc2FnZScsIHtcbiAgICAgICAgICB0ZXh0OiByZXMubWVzc2FnZVxuICAgICAgICB9KVxuICAgICAgICB0aGlzLmJvZHkuZGF0YS5zcGxpY2UodGhpcy5kaWFsb2dJbmZvLmluZGV4LCAxKVxuICAgICAgICB0aGlzLmRpYWxvZ0luZm8gPSB7dGl0bGU6ICcnLCB0ZXh0OiAnJywgaW5kZXg6IG51bGwsIGlkOiBudWxsfVxuICAgICAgfVxuICAgIH0sXG4gICAgYXN5bmMgY3JlYXRlZCAoKSB7XG4gICAgICBhd2FpdCB0aGlzLmZldGNoKClcbiAgICAgIHRoaXMubG9hZGVkID0gdHJ1ZVxuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG5cbjwvc3R5bGU+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9udXh0L3NldHRpbmdzLnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWNhcmRcIixcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWNhcmQtdGl0bGVcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZ3JleSBsaWdodGVuLTRcIiwgYXR0cnM6IHsgXCJwcmltYXJ5LXRpdGxlXCI6IFwiXCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImgzXCIsIHsgc3RhdGljQ2xhc3M6IFwiaGVhZGxpbmUgbWItMFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5uYW1lKSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJ2LWRpdmlkZXJcIiksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0ubG9hZGVkXG4gICAgICAgICAgICA/IF9jKFwidi1kYXRhLXRhYmxlXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJlbGV2YXRpb24tMVwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBoZWFkZXJzOiBfdm0uaGVhZGVycyxcbiAgICAgICAgICAgICAgICAgIGl0ZW1zOiBfdm0uYm9keS5kYXRhLFxuICAgICAgICAgICAgICAgICAgc2VhcmNoOiBfdm0uc2VhcmNoLFxuICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvbjogX3ZtLnBhZ2luYXRpb24sXG4gICAgICAgICAgICAgICAgICBcInRvdGFsLWl0ZW1zXCI6IF92bS5ib2R5Lm1ldGEudG90YWwsXG4gICAgICAgICAgICAgICAgICBsb2FkaW5nOiBfdm0ubG9hZGluZyxcbiAgICAgICAgICAgICAgICAgIFwicm93cy1wZXItcGFnZS1pdGVtc1wiOiBbNSwgMTAsIDIwLCA0MF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBcInVwZGF0ZTpwYWdpbmF0aW9uXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBfdm0ucGFnaW5hdGlvbiA9ICRldmVudFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogXCJpdGVtc1wiLFxuICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocHJvcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQteHMtbGVmdFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhwcm9wcy5pdGVtLmlkKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXhzLWNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhwcm9wcy5pdGVtLnByZWZpeCkpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC14cy1jZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MocHJvcHMuaXRlbS5uYW1lKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXhzLWNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhwcm9wcy5pdGVtLnBvc3RfY291bnQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQteHMtY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHByb3BzLml0ZW0udXBkYXRlZF9hdCkpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC14cy1jZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJkLWlubGluZS1mbGV4XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5lZGl0SXRlbShwcm9wcy5pdGVtKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1pY29uXCIsIHsgYXR0cnM6IHsgY29sb3I6IFwidGVhbFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiZWRpdFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGVsZXRlSXRlbShwcm9wcy5pdGVtKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1pY29uXCIsIHsgYXR0cnM6IHsgY29sb3I6IFwicGlua1wiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiZGVsZXRlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtbGF5b3V0XCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IHJvdzogXCJcIiwgXCJqdXN0aWZ5LWNlbnRlclwiOiBcIlwiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWRpYWxvZ1wiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwibWF4LXdpZHRoXCI6IFwiMjkwXCIgfSxcbiAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZGlhbG9nLFxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLmRpYWxvZyA9ICQkdlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImRpYWxvZ1wiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWNhcmRcIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1jYXJkLXRpdGxlXCIsIHsgc3RhdGljQ2xhc3M6IFwiaGVhZGxpbmVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5kaWFsb2dJbmZvLnRpdGxlKSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1jYXJkLXRleHRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmRpYWxvZ0luZm8udGV4dCkgKyBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWNhcmQtYWN0aW9uc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtc3BhY2VyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sb3I6IFwiZ3JlZW4gZGFya2VuLTFcIiwgZmxhdDogXCJmbGF0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdGl2ZU9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGlhbG9nID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkRpc2FncmVlXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sb3I6IFwiZ3JlZW4gZGFya2VuLTFcIiwgZmxhdDogXCJmbGF0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdGl2ZU9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmRlbGV0ZU9rKCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkFncmVlXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTRhNDFlNzYyXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi00YTQxZTc2MlwiLFwiaGFzU2NvcGVkXCI6dHJ1ZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9udXh0L3NldHRpbmdzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjEzXG4vLyBtb2R1bGUgY2h1bmtzID0gNSJdLCJzb3VyY2VSb290IjoiIn0=
webpackJsonp([7],{

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(198)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(200)
/* template */
var __vue_template__ = __webpack_require__(201)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-b7572cba"
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
Component.options.__file = "resources/assets/js/pages/nuxt/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b7572cba", Component.options)
  } else {
    hotAPI.reload("data-v-b7572cba", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(199);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("27e447b2", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b7572cba\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b7572cba\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"index.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 200:
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
      name: this.$t('nuxt_list'),
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

/***/ 201:
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
    require("vue-hot-reload-api")      .rerender("data-v-b7572cba", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL251eHQvaW5kZXgudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvbnV4dC9pbmRleC52dWU/ZGYyMCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL251eHQvaW5kZXgudnVlPzQzMGUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvbnV4dC9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9udXh0L2luZGV4LnZ1ZT8yMzIzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EseUJBQXFNO0FBQ3JNO0FBQ0E7QUFDQTtBQUNBLDRDQUFrUztBQUNsUztBQUNBLDhDQUFrTDtBQUNsTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7Ozs7Ozs7O0FDNUNBOztBQUVBO0FBQ0EscUNBQXdPO0FBQ3hPO0FBQ0E7QUFDQTtBQUNBLGtFQUEySDtBQUMzSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNKQUFzSixpRkFBaUY7QUFDdk8sK0pBQStKLGlGQUFpRjtBQUNoUDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7Ozs7QUNwQkE7QUFDQTs7O0FBR0E7QUFDQSwrU0FBZ1QscUZBQXFGOztBQUVyWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6ImpzLzcuYWRiZTcwOWYxYzQ0ZGMwMzZmZmYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LWI3NTcyY2JhXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vaW5kZXgudnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XSxcXFwic3RhZ2UtMlxcXCJdLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9pbmRleC52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LWI3NTcyY2JhXFxcIixcXFwiaGFzU2NvcGVkXFxcIjp0cnVlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9pbmRleC52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IFwiZGF0YS12LWI3NTcyY2JhXCJcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvcGFnZXMvbnV4dC9pbmRleC52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtYjc1NzJjYmFcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi1iNzU3MmNiYVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9udXh0L2luZGV4LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTMzXG4vLyBtb2R1bGUgY2h1bmtzID0gNyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi1iNzU3MmNiYVxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2luZGV4LnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiMjdlNDQ3YjJcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LWI3NTcyY2JhXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vaW5kZXgudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LWI3NTcyY2JhXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vaW5kZXgudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LWI3NTcyY2JhXCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvbnV4dC9pbmRleC52dWVcbi8vIG1vZHVsZSBpZCA9IDE5OFxuLy8gbW9kdWxlIGNodW5rcyA9IDciLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcImZpbGVcIjpcImluZGV4LnZ1ZVwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LWI3NTcyY2JhXCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvbnV4dC9pbmRleC52dWVcbi8vIG1vZHVsZSBpZCA9IDE5OVxuLy8gbW9kdWxlIGNodW5rcyA9IDciLCI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPHYtY2FyZD5cbiAgICAgICAgICAgIDx2LWNhcmQtdGl0bGUgcHJpbWFyeS10aXRsZSBjbGFzcz1cImdyZXkgbGlnaHRlbi00XCI+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiaGVhZGxpbmUgbWItMFwiPnt7IG5hbWUgfX08L2gzPlxuICAgICAgICAgICAgPC92LWNhcmQtdGl0bGU+XG4gICAgICAgICAgICA8di1kaXZpZGVyPjwvdi1kaXZpZGVyPlxuICAgICAgICAgICAgPHYtZGF0YS10YWJsZVxuICAgICAgICAgICAgICAgICAgICB2LWlmPVwibG9hZGVkXCJcbiAgICAgICAgICAgICAgICAgICAgOmhlYWRlcnM9XCJoZWFkZXJzXCJcbiAgICAgICAgICAgICAgICAgICAgOml0ZW1zPVwiYm9keS5kYXRhXCJcbiAgICAgICAgICAgICAgICAgICAgOnNlYXJjaD1cInNlYXJjaFwiXG4gICAgICAgICAgICAgICAgICAgIDpwYWdpbmF0aW9uLnN5bmM9XCJwYWdpbmF0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgOnRvdGFsLWl0ZW1zPVwiYm9keS5tZXRhLnRvdGFsXCJcbiAgICAgICAgICAgICAgICAgICAgOmxvYWRpbmc9XCJsb2FkaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJlbGV2YXRpb24tMVwiXG4gICAgICAgICAgICAgICAgICAgIDpyb3dzLXBlci1wYWdlLWl0ZW1zPVwiWzUsMTAsMjAsNDBdXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cIml0ZW1zXCIgc2xvdC1zY29wZT1cInByb3BzXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRleHQteHMtbGVmdFwiPnt7IHByb3BzLml0ZW0uaWQgfX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0ZXh0LXhzLWNlbnRlclwiPnt7IHByb3BzLml0ZW0ucHJlZml4IH19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGV4dC14cy1jZW50ZXJcIj57eyBwcm9wcy5pdGVtLm5hbWUgfX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0ZXh0LXhzLWNlbnRlclwiPnt7IHByb3BzLml0ZW0ucG9zdF9jb3VudCB9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRleHQteHMtY2VudGVyXCI+e3sgcHJvcHMuaXRlbS51cGRhdGVkX2F0IH19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGV4dC14cy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWlubGluZS1mbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtYnRuIGljb24gQGNsaWNrPVwiZWRpdEl0ZW0ocHJvcHMuaXRlbSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtaWNvbiBjb2xvcj1cInRlYWxcIj5lZGl0PC92LWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1idG4gaWNvbiBAY2xpY2s9XCJkZWxldGVJdGVtKHByb3BzLml0ZW0pXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWljb24gY29sb3I9XCJwaW5rXCI+ZGVsZXRlPC92LWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8L3YtZGF0YS10YWJsZT5cbiAgICAgICAgICAgIDx2LWxheW91dCByb3cganVzdGlmeS1jZW50ZXI+XG4gICAgICAgICAgICAgICAgPHYtZGlhbG9nIHYtbW9kZWw9XCJkaWFsb2dcIiBtYXgtd2lkdGg9XCIyOTBcIj5cbiAgICAgICAgICAgICAgICAgICAgPHYtY2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWNhcmQtdGl0bGUgY2xhc3M9XCJoZWFkbGluZVwiPnt7IGRpYWxvZ0luZm8udGl0bGUgfX08L3YtY2FyZC10aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWNhcmQtdGV4dD57eyBkaWFsb2dJbmZvLnRleHQgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1jYXJkLXRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di1jYXJkLWFjdGlvbnM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtc3BhY2VyPjwvdi1zcGFjZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtYnRuIGNvbG9yPVwiZ3JlZW4gZGFya2VuLTFcIiBmbGF0PVwiZmxhdFwiIEBjbGljay5uYXRpdmU9XCJkaWFsb2cgPSBmYWxzZVwiPkRpc2FncmVlPC92LWJ0bj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1idG4gY29sb3I9XCJncmVlbiBkYXJrZW4tMVwiIGZsYXQ9XCJmbGF0XCIgQGNsaWNrLm5hdGl2ZT1cImRlbGV0ZU9rXCI+QWdyZWU8L3YtYnRuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LWNhcmQtYWN0aW9ucz5cbiAgICAgICAgICAgICAgICAgICAgPC92LWNhcmQ+XG4gICAgICAgICAgICAgICAgPC92LWRpYWxvZz5cbiAgICAgICAgICAgIDwvdi1sYXlvdXQ+XG4gICAgICAgIDwvdi1jYXJkPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6ICdudXh0X2luZGV4JyxcbiAgICBkYXRhICgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRpYWxvZzogZmFsc2UsXG4gICAgICAgIGRpYWxvZ0luZm86IHtcbiAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgdGV4dDogJycsXG4gICAgICAgICAgaW5kZXg6IG51bGwsXG4gICAgICAgICAgaWQ6IG51bGxcbiAgICAgICAgfSxcbiAgICAgICAgbG9hZGVkOiBmYWxzZSxcbiAgICAgICAgbmFtZTogdGhpcy4kdCgnbnV4dF9saXN0JyksXG4gICAgICAgIHNlYXJjaDogJycsXG4gICAgICAgIGJvZHk6IHt9LFxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICAgIHNvcnRCeTogJ3VwZGF0ZWRfYXQnLFxuICAgICAgICAgIGRlc2NlbmRpbmc6ICdkZXNjJ1xuICAgICAgICB9LFxuICAgICAgICBoZWFkZXJzOiBbXG4gICAgICAgICAge3RleHQ6ICdpZCcsIHZhbHVlOiAnaWQnLCBhbGlnbjogJ2xlZnQnfSxcbiAgICAgICAgICB7dGV4dDogJ1ByZWZpeCcsIHZhbHVlOiAncHJlZml4JywgYWxpZ246ICdjZW50ZXInfSxcbiAgICAgICAgICB7dGV4dDogdGhpcy4kdCgnY2xpZW50X25hbWUnKSwgdmFsdWU6ICduYW1lJywgYWxpZ246ICdjZW50ZXInfSxcbiAgICAgICAgICB7dGV4dDogdGhpcy4kdCgncG9zdF9jb3VudCcpLCB2YWx1ZTogJ3Bvc3RfY291bnQnLCBhbGlnbjogJ2NlbnRlcid9LFxuICAgICAgICAgIHt0ZXh0OiB0aGlzLiR0KCd1cGRhdGVkX2F0JyksIHZhbHVlOiAndXBkYXRlZF9hdCcsIGFsaWduOiAnY2VudGVyJ30sXG4gICAgICAgICAge3RleHQ6ICdBY3Rpb25zJywgdmFsdWU6ICduYW1lJywgYWxpZ246ICdjZW50ZXInLCBzb3J0YWJsZTogZmFsc2V9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIHdhdGNoOiB7XG4gICAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgIGFzeW5jIGhhbmRsZXIgKCkge1xuICAgICAgICAgIGF3YWl0IHRoaXMuZmV0Y2goKVxuICAgICAgICB9LFxuICAgICAgICBkZWVwOiB0cnVlXG4gICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICBhc3luYyBmZXRjaCAoKSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWVcbiAgICAgICAgY29uc3Qge3NvcnRCeSwgZGVzY2VuZGluZywgcGFnZSwgcm93c1BlclBhZ2V9ID0gdGhpcy5wYWdpbmF0aW9uXG4gICAgICAgIGxldCBxdWVyeUJ1aWxkID0ge3BhZ2V9XG4gICAgICAgIGlmIChzb3J0QnkpIHF1ZXJ5QnVpbGQub3JkZXJCeSA9IHNvcnRCeVxuICAgICAgICBpZiAoZGVzY2VuZGluZykgcXVlcnlCdWlsZC5zb3J0ZWRCeSA9ICdkZXNjJ1xuICAgICAgICBpZiAocm93c1BlclBhZ2UpIHF1ZXJ5QnVpbGQubGltaXQgPSByb3dzUGVyUGFnZVxuICAgICAgICBjb25zb2xlLmxvZyhxdWVyeUJ1aWxkKVxuICAgICAgICBsZXQgYm9keSA9IGF3YWl0IHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdudXh0L2luZGV4JywgcXVlcnlCdWlsZClcbiAgICAgICAgdGhpcy4kc2V0KHRoaXMsICdib2R5JywgYm9keSlcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2VcbiAgICAgIH0sXG4gICAgICBlZGl0SXRlbSAoaXRlbSkge1xuICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7bmFtZTogJ251eHQuZWRpdCcsIHBhcmFtczoge2lkOiBpdGVtLmlkfX0pXG4gICAgICB9LFxuICAgICAgZGVsZXRlSXRlbSAoaXRlbSkge1xuICAgICAgICB0aGlzLmRpYWxvZyA9IHRydWVcbiAgICAgICAgdGhpcy5kaWFsb2dJbmZvLnRpdGxlID0gJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBpdGVtPydcbiAgICAgICAgdGhpcy5kaWFsb2dJbmZvLnRleHQgPSBgQ2xpZW50IG5hbWUgPT4gJHtpdGVtLm5hbWV9YFxuICAgICAgICB0aGlzLmRpYWxvZ0luZm8uaW5kZXggPSB0aGlzLmJvZHkuZGF0YS5pbmRleE9mKGl0ZW0pXG4gICAgICAgIHRoaXMuZGlhbG9nSW5mby5pZCA9IGl0ZW0uaWRcbiAgICAgIH0sXG4gICAgICBhc3luYyBkZWxldGVPayAoKSB7XG4gICAgICAgIGxldCByZXMgPSBhd2FpdCB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnbnV4dC9kZWxldGUnLCB7aWQ6IHRoaXMuZGlhbG9nSW5mby5pZH0pXG4gICAgICAgIHRoaXMuZGlhbG9nID0gZmFsc2VcbiAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ21lc3NhZ2UvcmVzcG9uc2VNZXNzYWdlJywge1xuICAgICAgICAgIHRleHQ6IHJlcy5tZXNzYWdlXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuYm9keS5kYXRhLnNwbGljZSh0aGlzLmRpYWxvZ0luZm8uaW5kZXgsIDEpXG4gICAgICAgIHRoaXMuZGlhbG9nSW5mbyA9IHt0aXRsZTogJycsIHRleHQ6ICcnLCBpbmRleDogbnVsbCwgaWQ6IG51bGx9XG4gICAgICB9XG4gICAgfSxcbiAgICBhc3luYyBjcmVhdGVkICgpIHtcbiAgICAgIGF3YWl0IHRoaXMuZmV0Y2goKVxuICAgICAgdGhpcy5sb2FkZWQgPSB0cnVlXG4gICAgfVxuICB9XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cblxuPC9zdHlsZT5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL251eHQvaW5kZXgudnVlIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInYtY2FyZFwiLFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtY2FyZC10aXRsZVwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJncmV5IGxpZ2h0ZW4tNFwiLCBhdHRyczogeyBcInByaW1hcnktdGl0bGVcIjogXCJcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiaDNcIiwgeyBzdGF0aWNDbGFzczogXCJoZWFkbGluZSBtYi0wXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLm5hbWUpKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInYtZGl2aWRlclwiKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS5sb2FkZWRcbiAgICAgICAgICAgID8gX2MoXCJ2LWRhdGEtdGFibGVcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImVsZXZhdGlvbi0xXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IF92bS5oZWFkZXJzLFxuICAgICAgICAgICAgICAgICAgaXRlbXM6IF92bS5ib2R5LmRhdGEsXG4gICAgICAgICAgICAgICAgICBzZWFyY2g6IF92bS5zZWFyY2gsXG4gICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uOiBfdm0ucGFnaW5hdGlvbixcbiAgICAgICAgICAgICAgICAgIFwidG90YWwtaXRlbXNcIjogX3ZtLmJvZHkubWV0YS50b3RhbCxcbiAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IF92bS5sb2FkaW5nLFxuICAgICAgICAgICAgICAgICAgXCJyb3dzLXBlci1wYWdlLWl0ZW1zXCI6IFs1LCAxMCwgMjAsIDQwXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIFwidXBkYXRlOnBhZ2luYXRpb25cIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS5wYWdpbmF0aW9uID0gJGV2ZW50XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBcIml0ZW1zXCIsXG4gICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihwcm9wcykge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC14cy1sZWZ0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHByb3BzLml0ZW0uaWQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQteHMtY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHByb3BzLml0ZW0ucHJlZml4KSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXhzLWNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhwcm9wcy5pdGVtLm5hbWUpKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQteHMtY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHByb3BzLml0ZW0ucG9zdF9jb3VudCkpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC14cy1jZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MocHJvcHMuaXRlbS51cGRhdGVkX2F0KSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXhzLWNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImQtaW5saW5lLWZsZXhcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmVkaXRJdGVtKHByb3BzLml0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LWljb25cIiwgeyBhdHRyczogeyBjb2xvcjogXCJ0ZWFsXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJlZGl0XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kZWxldGVJdGVtKHByb3BzLml0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LWljb25cIiwgeyBhdHRyczogeyBjb2xvcjogXCJwaW5rXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJkZWxldGVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1sYXlvdXRcIixcbiAgICAgICAgICAgIHsgYXR0cnM6IHsgcm93OiBcIlwiLCBcImp1c3RpZnktY2VudGVyXCI6IFwiXCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtZGlhbG9nXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJtYXgtd2lkdGhcIjogXCIyOTBcIiB9LFxuICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5kaWFsb2csXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uZGlhbG9nID0gJCR2XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZGlhbG9nXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtY2FyZFwiLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LWNhcmQtdGl0bGVcIiwgeyBzdGF0aWNDbGFzczogXCJoZWFkbGluZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmRpYWxvZ0luZm8udGl0bGUpKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LWNhcmQtdGV4dFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZGlhbG9nSW5mby50ZXh0KSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInYtY2FyZC1hY3Rpb25zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1zcGFjZXJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2xvcjogXCJncmVlbiBkYXJrZW4tMVwiLCBmbGF0OiBcImZsYXRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF0aXZlT246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kaWFsb2cgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiRGlzYWdyZWVcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2xvcjogXCJncmVlbiBkYXJrZW4tMVwiLCBmbGF0OiBcImZsYXRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF0aXZlT246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZGVsZXRlT2soJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQWdyZWVcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtYjc1NzJjYmFcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LWI3NTcyY2JhXCIsXCJoYXNTY29wZWRcIjp0cnVlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL251eHQvaW5kZXgudnVlXG4vLyBtb2R1bGUgaWQgPSAyMDFcbi8vIG1vZHVsZSBjaHVua3MgPSA3Il0sInNvdXJjZVJvb3QiOiIifQ==
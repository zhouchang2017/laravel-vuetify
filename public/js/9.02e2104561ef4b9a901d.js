webpackJsonp([9],{

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(214)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(216)
/* template */
var __vue_template__ = __webpack_require__(217)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2ce6fd0b"
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
Component.options.__file = "resources/assets/js/pages/catelog/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2ce6fd0b", Component.options)
  } else {
    hotAPI.reload("data-v-2ce6fd0b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(215);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("a2c3ee5e", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2ce6fd0b\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2ce6fd0b\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"index.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 216:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'catelog_index',
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
      name: this.$t('catelog_list'),
      body: {},
      loading: false,
      headers: [{ text: 'id', value: 'id', align: 'left' }, { text: 'Name', value: 'name', align: 'center' }, { text: this.$t('post_count'), value: 'post_count', align: 'center' }, { text: this.$t('updated_at'), value: 'updated_at', align: 'center' }, { text: 'Actions', value: 'name', align: 'center', sortable: false }]
    };
  },

  methods: {
    fetch: function fetch() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var queryBuild, catelogs;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.loading = true;
                queryBuild = {};
                _context.next = 4;
                return _this.$store.dispatch('catelog/index', queryBuild);

              case 4:
                catelogs = _context.sent;

                _this.$set(_this, 'catelogs', catelogs);
                _this.loading = false;

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    editItem: function editItem(item) {
      this.$router.push({ name: 'catelog.edit', params: { id: item.id } });
    },
    deleteItem: function deleteItem(item) {
      this.dialog = true;
      this.dialogInfo.title = 'Are you sure you want to delete this item?';
      this.dialogInfo.text = 'Catelog name => ' + item.name;
      this.dialogInfo.index = this.body.data.indexOf(item);
      this.dialogInfo.id = item.id;
    },
    deleteOk: function deleteOk() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this2.$store.dispatch('catelog/delete', { id: _this2.dialogInfo.id });

              case 2:
                res = _context2.sent;

                _this2.dialog = false;
                _this2.$store.dispatch('message/responseMessage', {
                  text: res.message
                });
                _this2.body.data.splice(_this2.dialogInfo.index, 1);
                _this2.dialogInfo = { title: '', text: '', index: null, id: null };

              case 7:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    }
  },
  created: function created() {
    var _this3 = this;

    return _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3() {
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _this3.fetch();

            case 2:
              _this3.loaded = true;

            case 3:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, _this3);
    }))();
  }
});

/***/ }),

/***/ 217:
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
                  items: _vm.body,
                  loading: _vm.loading
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
    require("vue-hot-reload-api")      .rerender("data-v-2ce6fd0b", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2NhdGVsb2cvaW5kZXgudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvY2F0ZWxvZy9pbmRleC52dWU/ZDRlMSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2NhdGVsb2cvaW5kZXgudnVlP2E0YTUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvY2F0ZWxvZy9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9jYXRlbG9nL2luZGV4LnZ1ZT82Yzk1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EseUJBQXFNO0FBQ3JNO0FBQ0E7QUFDQTtBQUNBLDRDQUFrUztBQUNsUztBQUNBLDhDQUFrTDtBQUNsTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7Ozs7Ozs7O0FDNUNBOztBQUVBO0FBQ0EscUNBQXdPO0FBQ3hPO0FBQ0E7QUFDQTtBQUNBLGtFQUEySDtBQUMzSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNKQUFzSixpRkFBaUY7QUFDdk8sK0pBQStKLGlGQUFpRjtBQUNoUDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7Ozs7QUNwQkE7QUFDQTs7O0FBR0E7QUFDQSwrUEFBZ1EscUZBQXFGOztBQUVyVjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMkNBO1FBRUE7d0JBQ0E7O2NBRUE7O2VBRUE7Y0FDQTtlQUNBO1lBRUE7QUFMQTtjQU1BO29CQUNBO1lBQ0E7ZUFDQTtlQUNBLG1DQUNBLGdEQUNBLHVFQUNBLHVFQUNBLHlFQUdBO0FBbkJBO0FBb0JBOzs7O0FBRUE7Ozs7Ozs7O2dDQUNBOzZCQUNBOzs4REFDQTs7Ozs7OENBQ0E7Z0NBQ0E7Ozs7Ozs7OztBQUNBO3NDQUNBO21FQUNBO0FBQ0E7MENBQ0E7b0JBQ0E7OEJBQ0E7dURBQ0E7cURBQ0E7Z0NBQ0E7QUFDQTs7QUFDQTs7Ozs7Ozs7O3dGQUNBOzs7OztnQ0FDQTs7NEJBR0E7QUFGQTtpRUFHQTs0RUFDQTs7Ozs7Ozs7O0FBRUE7QUEzQkE7O0FBNEJBOzs7Ozs7Ozs0QkFDQTs7OzhCQUNBOzs7Ozs7Ozs7QUFDQTtBQXZEQSxHOzs7Ozs7O0FDbkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsd0NBQXdDLHNCQUFzQixFQUFFO0FBQzdFO0FBQ0Esd0JBQXdCLCtCQUErQjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsOEJBQThCO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxnQ0FBZ0M7QUFDbEU7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGdDQUFnQztBQUNsRTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsZ0NBQWdDO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxnQ0FBZ0M7QUFDbEU7QUFDQTtBQUNBLDZCQUE2QiwrQkFBK0I7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsV0FBVztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0EsZ0RBQWdELFNBQVMsZ0JBQWdCLEVBQUU7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLFdBQVc7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBLGdEQUFnRCxTQUFTLGdCQUFnQixFQUFFO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxTQUFTLGdDQUFnQyxFQUFFO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHFCQUFxQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLDBCQUEwQjtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLHdDQUF3QztBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyx3Q0FBd0M7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6ImpzLzkuMDJlMjEwNDU2MWVmNGI5YTkwMWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTJjZTZmZDBiXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vaW5kZXgudnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XSxcXFwic3RhZ2UtMlxcXCJdLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9pbmRleC52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTJjZTZmZDBiXFxcIixcXFwiaGFzU2NvcGVkXFxcIjp0cnVlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9pbmRleC52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IFwiZGF0YS12LTJjZTZmZDBiXCJcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvcGFnZXMvY2F0ZWxvZy9pbmRleC52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMmNlNmZkMGJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0yY2U2ZmQwYlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9jYXRlbG9nL2luZGV4LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTM3XG4vLyBtb2R1bGUgY2h1bmtzID0gOSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0yY2U2ZmQwYlxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2luZGV4LnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiYTJjM2VlNWVcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTJjZTZmZDBiXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vaW5kZXgudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTJjZTZmZDBiXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vaW5kZXgudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTJjZTZmZDBiXCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvY2F0ZWxvZy9pbmRleC52dWVcbi8vIG1vZHVsZSBpZCA9IDIxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDkiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcImZpbGVcIjpcImluZGV4LnZ1ZVwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTJjZTZmZDBiXCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvY2F0ZWxvZy9pbmRleC52dWVcbi8vIG1vZHVsZSBpZCA9IDIxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDkiLCI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPHYtY2FyZD5cbiAgICAgICAgICAgIDx2LWNhcmQtdGl0bGUgcHJpbWFyeS10aXRsZSBjbGFzcz1cImdyZXkgbGlnaHRlbi00XCI+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiaGVhZGxpbmUgbWItMFwiPnt7IG5hbWUgfX08L2gzPlxuICAgICAgICAgICAgPC92LWNhcmQtdGl0bGU+XG4gICAgICAgICAgICA8di1kaXZpZGVyPjwvdi1kaXZpZGVyPlxuICAgICAgICAgICAgPHYtZGF0YS10YWJsZVxuICAgICAgICAgICAgICAgICAgICB2LWlmPVwibG9hZGVkXCJcbiAgICAgICAgICAgICAgICAgICAgOmhlYWRlcnM9XCJoZWFkZXJzXCJcbiAgICAgICAgICAgICAgICAgICAgOml0ZW1zPVwiYm9keVwiXG4gICAgICAgICAgICAgICAgICAgIDpsb2FkaW5nPVwibG9hZGluZ1wiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZWxldmF0aW9uLTFcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwiaXRlbXNcIiBzbG90LXNjb3BlPVwicHJvcHNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGV4dC14cy1sZWZ0XCI+e3sgcHJvcHMuaXRlbS5pZCB9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRleHQteHMtY2VudGVyXCI+e3sgcHJvcHMuaXRlbS5uYW1lIH19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGV4dC14cy1jZW50ZXJcIj57eyBwcm9wcy5pdGVtLnBvc3RfY291bnQgfX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0ZXh0LXhzLWNlbnRlclwiPnt7IHByb3BzLml0ZW0udXBkYXRlZF9hdCB9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRleHQteHMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1pbmxpbmUtZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0biBpY29uIEBjbGljaz1cImVkaXRJdGVtKHByb3BzLml0ZW0pXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWljb24gY29sb3I9XCJ0ZWFsXCI+ZWRpdDwvdi1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1idG4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtYnRuIGljb24gQGNsaWNrPVwiZGVsZXRlSXRlbShwcm9wcy5pdGVtKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1pY29uIGNvbG9yPVwicGlua1wiPmRlbGV0ZTwvdi1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1idG4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPC92LWRhdGEtdGFibGU+XG4gICAgICAgICAgICA8di1sYXlvdXQgcm93IGp1c3RpZnktY2VudGVyPlxuICAgICAgICAgICAgICAgIDx2LWRpYWxvZyB2LW1vZGVsPVwiZGlhbG9nXCIgbWF4LXdpZHRoPVwiMjkwXCI+XG4gICAgICAgICAgICAgICAgICAgIDx2LWNhcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di1jYXJkLXRpdGxlIGNsYXNzPVwiaGVhZGxpbmVcIj57eyBkaWFsb2dJbmZvLnRpdGxlIH19PC92LWNhcmQtdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di1jYXJkLXRleHQ+e3sgZGlhbG9nSW5mby50ZXh0IH19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtY2FyZC10ZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtY2FyZC1hY3Rpb25zPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNwYWNlcj48L3Ytc3BhY2VyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0biBjb2xvcj1cImdyZWVuIGRhcmtlbi0xXCIgZmxhdD1cImZsYXRcIiBAY2xpY2submF0aXZlPVwiZGlhbG9nID0gZmFsc2VcIj5EaXNhZ3JlZTwvdi1idG4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtYnRuIGNvbG9yPVwiZ3JlZW4gZGFya2VuLTFcIiBmbGF0PVwiZmxhdFwiIEBjbGljay5uYXRpdmU9XCJkZWxldGVPa1wiPkFncmVlPC92LWJ0bj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1jYXJkLWFjdGlvbnM+XG4gICAgICAgICAgICAgICAgICAgIDwvdi1jYXJkPlxuICAgICAgICAgICAgICAgIDwvdi1kaWFsb2c+XG4gICAgICAgICAgICA8L3YtbGF5b3V0PlxuICAgICAgICA8L3YtY2FyZD5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiAnY2F0ZWxvZ19pbmRleCcsXG4gICAgZGF0YSAoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBkaWFsb2c6IGZhbHNlLFxuICAgICAgICBkaWFsb2dJbmZvOiB7XG4gICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgIHRleHQ6ICcnLFxuICAgICAgICAgIGluZGV4OiBudWxsLFxuICAgICAgICAgIGlkOiBudWxsXG4gICAgICAgIH0sXG4gICAgICAgIGxvYWRlZDogZmFsc2UsXG4gICAgICAgIG5hbWU6IHRoaXMuJHQoJ2NhdGVsb2dfbGlzdCcpLFxuICAgICAgICBib2R5OiB7fSxcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgIGhlYWRlcnM6IFtcbiAgICAgICAgICB7dGV4dDogJ2lkJywgdmFsdWU6ICdpZCcsIGFsaWduOiAnbGVmdCd9LFxuICAgICAgICAgIHt0ZXh0OiAnTmFtZScsIHZhbHVlOiAnbmFtZScsIGFsaWduOiAnY2VudGVyJ30sXG4gICAgICAgICAge3RleHQ6IHRoaXMuJHQoJ3Bvc3RfY291bnQnKSwgdmFsdWU6ICdwb3N0X2NvdW50JywgYWxpZ246ICdjZW50ZXInfSxcbiAgICAgICAgICB7dGV4dDogdGhpcy4kdCgndXBkYXRlZF9hdCcpLCB2YWx1ZTogJ3VwZGF0ZWRfYXQnLCBhbGlnbjogJ2NlbnRlcid9LFxuICAgICAgICAgIHt0ZXh0OiAnQWN0aW9ucycsIHZhbHVlOiAnbmFtZScsIGFsaWduOiAnY2VudGVyJywgc29ydGFibGU6IGZhbHNlfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICBhc3luYyBmZXRjaCAoKSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWVcbiAgICAgICAgbGV0IHF1ZXJ5QnVpbGQgPSB7fVxuICAgICAgICBsZXQgY2F0ZWxvZ3MgPSBhd2FpdCB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnY2F0ZWxvZy9pbmRleCcsIHF1ZXJ5QnVpbGQpXG4gICAgICAgIHRoaXMuJHNldCh0aGlzLCAnY2F0ZWxvZ3MnLCBjYXRlbG9ncylcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2VcbiAgICAgIH0sXG4gICAgICBlZGl0SXRlbSAoaXRlbSkge1xuICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7bmFtZTogJ2NhdGVsb2cuZWRpdCcsIHBhcmFtczoge2lkOiBpdGVtLmlkfX0pXG4gICAgICB9LFxuICAgICAgZGVsZXRlSXRlbSAoaXRlbSkge1xuICAgICAgICB0aGlzLmRpYWxvZyA9IHRydWVcbiAgICAgICAgdGhpcy5kaWFsb2dJbmZvLnRpdGxlID0gJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBpdGVtPydcbiAgICAgICAgdGhpcy5kaWFsb2dJbmZvLnRleHQgPSBgQ2F0ZWxvZyBuYW1lID0+ICR7aXRlbS5uYW1lfWBcbiAgICAgICAgdGhpcy5kaWFsb2dJbmZvLmluZGV4ID0gdGhpcy5ib2R5LmRhdGEuaW5kZXhPZihpdGVtKVxuICAgICAgICB0aGlzLmRpYWxvZ0luZm8uaWQgPSBpdGVtLmlkXG4gICAgICB9LFxuICAgICAgYXN5bmMgZGVsZXRlT2sgKCkge1xuICAgICAgICBsZXQgcmVzID0gYXdhaXQgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2NhdGVsb2cvZGVsZXRlJywge2lkOiB0aGlzLmRpYWxvZ0luZm8uaWR9KVxuICAgICAgICB0aGlzLmRpYWxvZyA9IGZhbHNlXG4gICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdtZXNzYWdlL3Jlc3BvbnNlTWVzc2FnZScsIHtcbiAgICAgICAgICB0ZXh0OiByZXMubWVzc2FnZVxuICAgICAgICB9KVxuICAgICAgICB0aGlzLmJvZHkuZGF0YS5zcGxpY2UodGhpcy5kaWFsb2dJbmZvLmluZGV4LCAxKVxuICAgICAgICB0aGlzLmRpYWxvZ0luZm8gPSB7dGl0bGU6ICcnLCB0ZXh0OiAnJywgaW5kZXg6IG51bGwsIGlkOiBudWxsfVxuICAgICAgfVxuICAgIH0sXG4gICAgYXN5bmMgY3JlYXRlZCAoKSB7XG4gICAgICBhd2FpdCB0aGlzLmZldGNoKClcbiAgICAgIHRoaXMubG9hZGVkID0gdHJ1ZVxuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG5cbjwvc3R5bGU+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9jYXRlbG9nL2luZGV4LnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWNhcmRcIixcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWNhcmQtdGl0bGVcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZ3JleSBsaWdodGVuLTRcIiwgYXR0cnM6IHsgXCJwcmltYXJ5LXRpdGxlXCI6IFwiXCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImgzXCIsIHsgc3RhdGljQ2xhc3M6IFwiaGVhZGxpbmUgbWItMFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5uYW1lKSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJ2LWRpdmlkZXJcIiksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0ubG9hZGVkXG4gICAgICAgICAgICA/IF9jKFwidi1kYXRhLXRhYmxlXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJlbGV2YXRpb24tMVwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBoZWFkZXJzOiBfdm0uaGVhZGVycyxcbiAgICAgICAgICAgICAgICAgIGl0ZW1zOiBfdm0uYm9keSxcbiAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IF92bS5sb2FkaW5nXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBcIml0ZW1zXCIsXG4gICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihwcm9wcykge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC14cy1sZWZ0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHByb3BzLml0ZW0uaWQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQteHMtY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHByb3BzLml0ZW0ubmFtZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC14cy1jZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MocHJvcHMuaXRlbS5wb3N0X2NvdW50KSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXhzLWNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhwcm9wcy5pdGVtLnVwZGF0ZWRfYXQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQteHMtY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZC1pbmxpbmUtZmxleFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZWRpdEl0ZW0ocHJvcHMuaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtaWNvblwiLCB7IGF0dHJzOiB7IGNvbG9yOiBcInRlYWxcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcImVkaXRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRlbGV0ZUl0ZW0ocHJvcHMuaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtaWNvblwiLCB7IGF0dHJzOiB7IGNvbG9yOiBcInBpbmtcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcImRlbGV0ZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWxheW91dFwiLFxuICAgICAgICAgICAgeyBhdHRyczogeyByb3c6IFwiXCIsIFwianVzdGlmeS1jZW50ZXJcIjogXCJcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1kaWFsb2dcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBcIm1heC13aWR0aFwiOiBcIjI5MFwiIH0sXG4gICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmRpYWxvZyxcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5kaWFsb2cgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJkaWFsb2dcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1jYXJkXCIsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtY2FyZC10aXRsZVwiLCB7IHN0YXRpY0NsYXNzOiBcImhlYWRsaW5lXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZGlhbG9nSW5mby50aXRsZSkpXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtY2FyZC10ZXh0XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5kaWFsb2dJbmZvLnRleHQpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jYXJkLWFjdGlvbnNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXNwYWNlclwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbG9yOiBcImdyZWVuIGRhcmtlbi0xXCIsIGZsYXQ6IFwiZmxhdFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVPbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRpYWxvZyA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJEaXNhZ3JlZVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbG9yOiBcImdyZWVuIGRhcmtlbi0xXCIsIGZsYXQ6IFwiZmxhdFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVPbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5kZWxldGVPaygkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJBZ3JlZVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi0yY2U2ZmQwYlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMmNlNmZkMGJcIixcImhhc1Njb3BlZFwiOnRydWUsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvY2F0ZWxvZy9pbmRleC52dWVcbi8vIG1vZHVsZSBpZCA9IDIxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDkiXSwic291cmNlUm9vdCI6IiJ9
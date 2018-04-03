webpackJsonp([28],{

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(176)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(178)
/* template */
var __vue_template__ = __webpack_require__(179)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-aaf4ca00"
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
Component.options.__file = "resources/assets/js/pages/post/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-aaf4ca00", Component.options)
  } else {
    hotAPI.reload("data-v-aaf4ca00", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(177);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("78f32c18", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-aaf4ca00\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-aaf4ca00\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"index.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 178:
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
  name: 'post_index',
  data: function data() {
    return {
      dialog: false,
      dialogInfo: {
        title: '',
        text: '',
        index: null,
        postId: null
      },
      loaded: false,
      name: this.$t('post_list'),
      search: '',
      body: {},
      loading: false,
      pagination: {
        sortBy: 'updated_at',
        descending: 'desc'
      },
      headers: [{
        text: 'Avatar',
        align: 'left',
        sortable: false,
        value: 'avatar',
        width: '200px'
      }, { text: 'Title', value: 'title' }, { text: 'Read_num', value: 'read_num' }, { text: 'Fake_read_num', value: 'fake_read_num' }, { text: 'Is_hot', value: 'is_hot' }, { text: 'Hidden', value: 'hidden' }, { text: this.$t('updated_at'), value: 'updated_at' }, { text: 'Actions', value: 'name', align: 'right', sortable: false }]
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
    isHot: function isHot(_ref) {
      var _this2 = this;

      var post_id = _ref.post_id,
          is_hot = _ref.is_hot;
      return _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var data;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this2.$store.dispatch('post/update', { post_id: post_id, props: { is_hot: is_hot } });

              case 2:
                data = _context2.sent;

                console.log(data);

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    },
    isHidden: function isHidden(_ref2) {
      var _this3 = this;

      var post_id = _ref2.post_id,
          hidden = _ref2.hidden;
      return _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3() {
        var data;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _this3.$store.dispatch('post/update', { post_id: post_id, props: { hidden: hidden } });

              case 2:
                data = _context3.sent;

                console.log(data);

              case 4:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this3);
      }))();
    },
    fetch: function fetch() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee4() {
        var _pagination, sortBy, descending, page, rowsPerPage, queryBuild, body;

        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _this4.loading = true;
                _pagination = _this4.pagination, sortBy = _pagination.sortBy, descending = _pagination.descending, page = _pagination.page, rowsPerPage = _pagination.rowsPerPage;
                queryBuild = { page: page };

                if (sortBy) queryBuild.orderBy = sortBy;
                if (descending) queryBuild.sortedBy = 'desc';
                if (rowsPerPage) queryBuild.limit = rowsPerPage;
                console.log(queryBuild);
                _context4.next = 9;
                return _this4.$store.dispatch('post/index', queryBuild);

              case 9:
                body = _context4.sent;

                _this4.$set(_this4, 'body', body);
                _this4.loading = false;

              case 12:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, _this4);
      }))();
    },
    editItem: function editItem(item) {
      this.$router.push({ name: 'post.edit', params: { id: item.id } });
    },
    deleteItem: function deleteItem(item) {
      this.dialog = true;
      this.dialogInfo.title = 'Are you sure you want to delete this item?';
      this.dialogInfo.text = 'Post title => ' + item.title;
      this.dialogInfo.index = this.body.data.indexOf(item);
      this.dialogInfo.postId = item.id;
    },
    deleteOk: function deleteOk() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee5() {
        var res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return _this5.$store.dispatch('post/delete', { post_id: _this5.dialogInfo.postId });

              case 2:
                res = _context5.sent;

                _this5.dialog = false;
                _this5.$store.dispatch('message/responseMessage', {
                  text: res.message
                });
                _this5.body.data.splice(_this5.dialogInfo.index, 1);
                _this5.dialogInfo = { title: '', text: '', index: null, postId: null };

              case 7:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, _this5);
      }))();
    }
  },
  created: function created() {
    var _this6 = this;

    return _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee6() {
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return _this6.fetch();

            case 2:
              _this6.loaded = true;

            case 3:
            case 'end':
              return _context6.stop();
          }
        }
      }, _callee6, _this6);
    }))();
  }
});

/***/ }),

/***/ 179:
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
                        _c(
                          "td",
                          [
                            _c(
                              "v-card",
                              { staticClass: "mt-1 mb-1" },
                              [
                                _c("v-card-media", {
                                  staticClass: "white--text",
                                  attrs: {
                                    flat: "",
                                    tile: "",
                                    contain: "",
                                    width: "200px",
                                    height: "100px",
                                    src: props.item.avatar
                                  }
                                })
                              ],
                              1
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-xs-right" }, [
                          _vm._v(_vm._s(props.item.title))
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-xs-right" }, [
                          _vm._v(_vm._s(props.item.read_num))
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-xs-right" }, [
                          _vm._v(_vm._s(props.item.fake_read_num))
                        ]),
                        _vm._v(" "),
                        _c(
                          "td",
                          { staticClass: "text-xs-right" },
                          [
                            _c("v-switch", {
                              attrs: { color: "success", "hide-details": "" },
                              on: {
                                change: function($event) {
                                  _vm.isHot({
                                    post_id: props.item.id,
                                    is_hot: props.item.is_hot
                                  })
                                }
                              },
                              model: {
                                value: props.item.is_hot,
                                callback: function($$v) {
                                  _vm.$set(props.item, "is_hot", $$v)
                                },
                                expression: "props.item.is_hot"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "td",
                          { staticClass: "text-xs-right" },
                          [
                            _c("v-switch", {
                              attrs: { color: "success", "hide-details": "" },
                              on: {
                                change: function($event) {
                                  _vm.isHidden({
                                    post_id: props.item.id,
                                    hidden: props.item.hidden
                                  })
                                }
                              },
                              model: {
                                value: props.item.hidden,
                                callback: function($$v) {
                                  _vm.$set(props.item, "hidden", $$v)
                                },
                                expression: "props.item.hidden"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-xs-right" }, [
                          _vm._v(_vm._s(props.item.updated_at))
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "justify-center" }, [
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
    require("vue-hot-reload-api")      .rerender("data-v-aaf4ca00", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3Bvc3QvaW5kZXgudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvcG9zdC9pbmRleC52dWU/MWMxOCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3Bvc3QvaW5kZXgudnVlP2IyZjUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvcG9zdC9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9wb3N0L2luZGV4LnZ1ZT80ZTk5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EseUJBQXFNO0FBQ3JNO0FBQ0E7QUFDQTtBQUNBLDRDQUFrUztBQUNsUztBQUNBLDhDQUFrTDtBQUNsTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7Ozs7Ozs7O0FDNUNBOztBQUVBO0FBQ0EscUNBQXdPO0FBQ3hPO0FBQ0E7QUFDQTtBQUNBLGtFQUEySDtBQUMzSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNKQUFzSixpRkFBaUY7QUFDdk8sK0pBQStKLGlGQUFpRjtBQUNoUDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7Ozs7QUNwQkE7QUFDQTs7O0FBR0E7QUFDQSx5WUFBMFkscUZBQXFGOztBQUUvZDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUNBLDBDQUEwQyxXQUFXO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQSxnREFBZ0QsU0FBUyxnQkFBZ0IsRUFBRTtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsU0FBUyxnQ0FBZ0MsRUFBRTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixxQkFBcUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQywwQkFBMEI7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyx3Q0FBd0M7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0Msd0NBQXdDO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsImZpbGUiOiJqcy8yOC5kMWZhZjU0MDFkMmM3YWQxZmUzYS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoc3NyQ29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtYWFmNGNhMDBcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9pbmRleC52dWVcIilcbn1cbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dLFxcXCJzdGFnZS0yXFxcIl0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV1dfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2luZGV4LnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtYWFmNGNhMDBcXFwiLFxcXCJoYXNTY29wZWRcXFwiOnRydWUsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2luZGV4LnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gXCJkYXRhLXYtYWFmNGNhMDBcIlxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9wb3N0L2luZGV4LnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi1hYWY0Y2EwMFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LWFhZjRjYTAwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3Bvc3QvaW5kZXgudnVlXG4vLyBtb2R1bGUgaWQgPSAxMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAyOCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi1hYWY0Y2EwMFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2luZGV4LnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiNzhmMzJjMThcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LWFhZjRjYTAwXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vaW5kZXgudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LWFhZjRjYTAwXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vaW5kZXgudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LWFhZjRjYTAwXCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvcG9zdC9pbmRleC52dWVcbi8vIG1vZHVsZSBpZCA9IDE3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDI4IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJmaWxlXCI6XCJpbmRleC52dWVcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi1hYWY0Y2EwMFwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3Bvc3QvaW5kZXgudnVlXG4vLyBtb2R1bGUgaWQgPSAxNzdcbi8vIG1vZHVsZSBjaHVua3MgPSAyOCIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8di1jYXJkPlxuICAgICAgICAgICAgPHYtY2FyZC10aXRsZSBwcmltYXJ5LXRpdGxlIGNsYXNzPVwiZ3JleSBsaWdodGVuLTRcIj5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJoZWFkbGluZSBtYi0wXCI+e3sgbmFtZSB9fTwvaDM+XG4gICAgICAgICAgICA8L3YtY2FyZC10aXRsZT5cbiAgICAgICAgICAgIDx2LWRpdmlkZXI+PC92LWRpdmlkZXI+XG4gICAgICAgICAgICA8di1kYXRhLXRhYmxlXG4gICAgICAgICAgICAgICAgICAgIHYtaWY9XCJsb2FkZWRcIlxuICAgICAgICAgICAgICAgICAgICA6aGVhZGVycz1cImhlYWRlcnNcIlxuICAgICAgICAgICAgICAgICAgICA6aXRlbXM9XCJib2R5LmRhdGFcIlxuICAgICAgICAgICAgICAgICAgICA6c2VhcmNoPVwic2VhcmNoXCJcbiAgICAgICAgICAgICAgICAgICAgOnBhZ2luYXRpb24uc3luYz1cInBhZ2luYXRpb25cIlxuICAgICAgICAgICAgICAgICAgICA6dG90YWwtaXRlbXM9XCJib2R5Lm1ldGEudG90YWxcIlxuICAgICAgICAgICAgICAgICAgICA6bG9hZGluZz1cImxvYWRpbmdcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImVsZXZhdGlvbi0xXCJcbiAgICAgICAgICAgICAgICAgICAgOnJvd3MtcGVyLXBhZ2UtaXRlbXM9XCJbNSwxMCwyMCw0MF1cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwiaXRlbXNcIiBzbG90LXNjb3BlPVwicHJvcHNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtY2FyZCBjbGFzcz1cIm10LTEgbWItMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWNhcmQtbWVkaWFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsYXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwid2hpdGUtLXRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyMDBweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDBweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6c3JjPVwicHJvcHMuaXRlbS5hdmF0YXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtY2FyZC1tZWRpYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1jYXJkPlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0ZXh0LXhzLXJpZ2h0XCI+e3sgcHJvcHMuaXRlbS50aXRsZSB9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRleHQteHMtcmlnaHRcIj57eyBwcm9wcy5pdGVtLnJlYWRfbnVtIH19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGV4dC14cy1yaWdodFwiPnt7IHByb3BzLml0ZW0uZmFrZV9yZWFkX251bSB9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRleHQteHMtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LXN3aXRjaFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwicHJvcHMuaXRlbS5pc19ob3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInN1Y2Nlc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlLWRldGFpbHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNoYW5nZT1cImlzSG90KHtwb3N0X2lkOnByb3BzLml0ZW0uaWQsaXNfaG90OnByb3BzLml0ZW0uaXNfaG90fSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvdi1zd2l0Y2g+XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRleHQteHMtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LXN3aXRjaFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwicHJvcHMuaXRlbS5oaWRkZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInN1Y2Nlc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlLWRldGFpbHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNoYW5nZT1cImlzSGlkZGVuKHtwb3N0X2lkOnByb3BzLml0ZW0uaWQsaGlkZGVuOnByb3BzLml0ZW0uaGlkZGVufSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvdi1zd2l0Y2g+XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRleHQteHMtcmlnaHRcIj57eyBwcm9wcy5pdGVtLnVwZGF0ZWRfYXQgfX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtaW5saW5lLWZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1idG4gaWNvbiBAY2xpY2s9XCJlZGl0SXRlbShwcm9wcy5pdGVtKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1pY29uIGNvbG9yPVwidGVhbFwiPmVkaXQ8L3YtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtYnRuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0biBpY29uIEBjbGljaz1cImRlbGV0ZUl0ZW0ocHJvcHMuaXRlbSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtaWNvbiBjb2xvcj1cInBpbmtcIj5kZWxldGU8L3YtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtYnRuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvdi1kYXRhLXRhYmxlPlxuICAgICAgICAgICAgPHYtbGF5b3V0IHJvdyBqdXN0aWZ5LWNlbnRlcj5cbiAgICAgICAgICAgICAgICA8di1kaWFsb2cgdi1tb2RlbD1cImRpYWxvZ1wiIG1heC13aWR0aD1cIjI5MFwiPlxuICAgICAgICAgICAgICAgICAgICA8di1jYXJkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtY2FyZC10aXRsZSBjbGFzcz1cImhlYWRsaW5lXCI+e3sgZGlhbG9nSW5mby50aXRsZSB9fTwvdi1jYXJkLXRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtY2FyZC10ZXh0Pnt7IGRpYWxvZ0luZm8udGV4dCB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LWNhcmQtdGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWNhcmQtYWN0aW9ucz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1zcGFjZXI+PC92LXNwYWNlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1idG4gY29sb3I9XCJncmVlbiBkYXJrZW4tMVwiIGZsYXQ9XCJmbGF0XCIgQGNsaWNrLm5hdGl2ZT1cImRpYWxvZyA9IGZhbHNlXCI+RGlzYWdyZWU8L3YtYnRuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0biBjb2xvcj1cImdyZWVuIGRhcmtlbi0xXCIgZmxhdD1cImZsYXRcIiBAY2xpY2submF0aXZlPVwiZGVsZXRlT2tcIj5BZ3JlZTwvdi1idG4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtY2FyZC1hY3Rpb25zPlxuICAgICAgICAgICAgICAgICAgICA8L3YtY2FyZD5cbiAgICAgICAgICAgICAgICA8L3YtZGlhbG9nPlxuICAgICAgICAgICAgPC92LWxheW91dD5cbiAgICAgICAgPC92LWNhcmQ+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogJ3Bvc3RfaW5kZXgnLFxuICAgIGRhdGEgKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGlhbG9nOiBmYWxzZSxcbiAgICAgICAgZGlhbG9nSW5mbzoge1xuICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICB0ZXh0OiAnJyxcbiAgICAgICAgICBpbmRleDogbnVsbCxcbiAgICAgICAgICBwb3N0SWQ6IG51bGxcbiAgICAgICAgfSxcbiAgICAgICAgbG9hZGVkOiBmYWxzZSxcbiAgICAgICAgbmFtZTogdGhpcy4kdCgncG9zdF9saXN0JyksXG4gICAgICAgIHNlYXJjaDogJycsXG4gICAgICAgIGJvZHk6IHt9LFxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICAgIHNvcnRCeTogJ3VwZGF0ZWRfYXQnLFxuICAgICAgICAgIGRlc2NlbmRpbmc6ICdkZXNjJ1xuICAgICAgICB9LFxuICAgICAgICBoZWFkZXJzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogJ0F2YXRhcicsXG4gICAgICAgICAgICBhbGlnbjogJ2xlZnQnLFxuICAgICAgICAgICAgc29ydGFibGU6IGZhbHNlLFxuICAgICAgICAgICAgdmFsdWU6ICdhdmF0YXInLFxuICAgICAgICAgICAgd2lkdGg6ICcyMDBweCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHt0ZXh0OiAnVGl0bGUnLCB2YWx1ZTogJ3RpdGxlJ30sXG4gICAgICAgICAge3RleHQ6ICdSZWFkX251bScsIHZhbHVlOiAncmVhZF9udW0nfSxcbiAgICAgICAgICB7dGV4dDogJ0Zha2VfcmVhZF9udW0nLCB2YWx1ZTogJ2Zha2VfcmVhZF9udW0nfSxcbiAgICAgICAgICB7dGV4dDogJ0lzX2hvdCcsIHZhbHVlOiAnaXNfaG90J30sXG4gICAgICAgICAge3RleHQ6ICdIaWRkZW4nLCB2YWx1ZTogJ2hpZGRlbid9LFxuICAgICAgICAgIHt0ZXh0OiB0aGlzLiR0KCd1cGRhdGVkX2F0JyksIHZhbHVlOiAndXBkYXRlZF9hdCd9LFxuICAgICAgICAgIHt0ZXh0OiAnQWN0aW9ucycsIHZhbHVlOiAnbmFtZScsIGFsaWduOiAncmlnaHQnLCBzb3J0YWJsZTogZmFsc2V9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIHdhdGNoOiB7XG4gICAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgIGFzeW5jIGhhbmRsZXIgKCkge1xuICAgICAgICAgIGF3YWl0IHRoaXMuZmV0Y2goKVxuICAgICAgICB9LFxuICAgICAgICBkZWVwOiB0cnVlXG4gICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICBhc3luYyBpc0hvdCAoe3Bvc3RfaWQsIGlzX2hvdH0pIHtcbiAgICAgICAgbGV0IGRhdGEgPSBhd2FpdCB0aGlzLiRzdG9yZS5kaXNwYXRjaCgncG9zdC91cGRhdGUnLCB7cG9zdF9pZCwgcHJvcHM6IHtpc19ob3R9fSlcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgIH0sXG4gICAgICBhc3luYyBpc0hpZGRlbiAoe3Bvc3RfaWQsIGhpZGRlbn0pIHtcbiAgICAgICAgbGV0IGRhdGEgPSBhd2FpdCB0aGlzLiRzdG9yZS5kaXNwYXRjaCgncG9zdC91cGRhdGUnLCB7cG9zdF9pZCwgcHJvcHM6IHtoaWRkZW59fSlcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgIH0sXG4gICAgICBhc3luYyBmZXRjaCAoKSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWVcbiAgICAgICAgY29uc3Qge3NvcnRCeSwgZGVzY2VuZGluZywgcGFnZSwgcm93c1BlclBhZ2V9ID0gdGhpcy5wYWdpbmF0aW9uXG4gICAgICAgIGxldCBxdWVyeUJ1aWxkID0ge3BhZ2V9XG4gICAgICAgIGlmIChzb3J0QnkpIHF1ZXJ5QnVpbGQub3JkZXJCeSA9IHNvcnRCeVxuICAgICAgICBpZiAoZGVzY2VuZGluZykgcXVlcnlCdWlsZC5zb3J0ZWRCeSA9ICdkZXNjJ1xuICAgICAgICBpZiAocm93c1BlclBhZ2UpIHF1ZXJ5QnVpbGQubGltaXQgPSByb3dzUGVyUGFnZVxuICAgICAgICBjb25zb2xlLmxvZyhxdWVyeUJ1aWxkKVxuICAgICAgICBsZXQgYm9keSA9IGF3YWl0IHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdwb3N0L2luZGV4JywgcXVlcnlCdWlsZClcbiAgICAgICAgdGhpcy4kc2V0KHRoaXMsICdib2R5JywgYm9keSlcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2VcbiAgICAgIH0sXG4gICAgICBlZGl0SXRlbSAoaXRlbSkge1xuICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7bmFtZTogJ3Bvc3QuZWRpdCcsIHBhcmFtczoge2lkOiBpdGVtLmlkfX0pXG4gICAgICB9LFxuICAgICAgZGVsZXRlSXRlbSAoaXRlbSkge1xuICAgICAgICB0aGlzLmRpYWxvZyA9IHRydWVcbiAgICAgICAgdGhpcy5kaWFsb2dJbmZvLnRpdGxlID0gJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBpdGVtPydcbiAgICAgICAgdGhpcy5kaWFsb2dJbmZvLnRleHQgPSBgUG9zdCB0aXRsZSA9PiAke2l0ZW0udGl0bGV9YFxuICAgICAgICB0aGlzLmRpYWxvZ0luZm8uaW5kZXggPSB0aGlzLmJvZHkuZGF0YS5pbmRleE9mKGl0ZW0pXG4gICAgICAgIHRoaXMuZGlhbG9nSW5mby5wb3N0SWQgPSBpdGVtLmlkXG4gICAgICB9LFxuICAgICAgYXN5bmMgZGVsZXRlT2sgKCkge1xuICAgICAgICBsZXQgcmVzID0gYXdhaXQgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ3Bvc3QvZGVsZXRlJywge3Bvc3RfaWQ6IHRoaXMuZGlhbG9nSW5mby5wb3N0SWR9KVxuICAgICAgICB0aGlzLmRpYWxvZyA9IGZhbHNlXG4gICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdtZXNzYWdlL3Jlc3BvbnNlTWVzc2FnZScse1xuICAgICAgICAgIHRleHQ6cmVzLm1lc3NhZ2VcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5ib2R5LmRhdGEuc3BsaWNlKHRoaXMuZGlhbG9nSW5mby5pbmRleCwgMSlcbiAgICAgICAgdGhpcy5kaWFsb2dJbmZvID0ge3RpdGxlOiAnJywgdGV4dDogJycsIGluZGV4OiBudWxsLCBwb3N0SWQ6IG51bGx9XG4gICAgICB9XG4gICAgfSxcbiAgICBhc3luYyBjcmVhdGVkICgpIHtcbiAgICAgIGF3YWl0IHRoaXMuZmV0Y2goKVxuICAgICAgdGhpcy5sb2FkZWQgPSB0cnVlXG4gICAgfVxuICB9XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cblxuPC9zdHlsZT5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3Bvc3QvaW5kZXgudnVlIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInYtY2FyZFwiLFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtY2FyZC10aXRsZVwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJncmV5IGxpZ2h0ZW4tNFwiLCBhdHRyczogeyBcInByaW1hcnktdGl0bGVcIjogXCJcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiaDNcIiwgeyBzdGF0aWNDbGFzczogXCJoZWFkbGluZSBtYi0wXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLm5hbWUpKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInYtZGl2aWRlclwiKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS5sb2FkZWRcbiAgICAgICAgICAgID8gX2MoXCJ2LWRhdGEtdGFibGVcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImVsZXZhdGlvbi0xXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IF92bS5oZWFkZXJzLFxuICAgICAgICAgICAgICAgICAgaXRlbXM6IF92bS5ib2R5LmRhdGEsXG4gICAgICAgICAgICAgICAgICBzZWFyY2g6IF92bS5zZWFyY2gsXG4gICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uOiBfdm0ucGFnaW5hdGlvbixcbiAgICAgICAgICAgICAgICAgIFwidG90YWwtaXRlbXNcIjogX3ZtLmJvZHkubWV0YS50b3RhbCxcbiAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IF92bS5sb2FkaW5nLFxuICAgICAgICAgICAgICAgICAgXCJyb3dzLXBlci1wYWdlLWl0ZW1zXCI6IFs1LCAxMCwgMjAsIDQwXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIFwidXBkYXRlOnBhZ2luYXRpb25cIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS5wYWdpbmF0aW9uID0gJGV2ZW50XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBcIml0ZW1zXCIsXG4gICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihwcm9wcykge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtY2FyZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtdC0xIG1iLTFcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtY2FyZC1tZWRpYVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwid2hpdGUtLXRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxhdDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbGU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjAwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBwcm9wcy5pdGVtLmF2YXRhclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXhzLXJpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHByb3BzLml0ZW0udGl0bGUpKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQteHMtcmlnaHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MocHJvcHMuaXRlbS5yZWFkX251bSkpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC14cy1yaWdodFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhwcm9wcy5pdGVtLmZha2VfcmVhZF9udW0pKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXhzLXJpZ2h0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1zd2l0Y2hcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sb3I6IFwic3VjY2Vzc1wiLCBcImhpZGUtZGV0YWlsc1wiOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5pc0hvdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0X2lkOiBwcm9wcy5pdGVtLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNfaG90OiBwcm9wcy5pdGVtLmlzX2hvdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcHJvcHMuaXRlbS5pc19ob3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChwcm9wcy5pdGVtLCBcImlzX2hvdFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicHJvcHMuaXRlbS5pc19ob3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXhzLXJpZ2h0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1zd2l0Y2hcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sb3I6IFwic3VjY2Vzc1wiLCBcImhpZGUtZGV0YWlsc1wiOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5pc0hpZGRlbih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0X2lkOiBwcm9wcy5pdGVtLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZGVuOiBwcm9wcy5pdGVtLmhpZGRlblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcHJvcHMuaXRlbS5oaWRkZW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChwcm9wcy5pdGVtLCBcImhpZGRlblwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicHJvcHMuaXRlbS5oaWRkZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQteHMtcmlnaHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MocHJvcHMuaXRlbS51cGRhdGVkX2F0KSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJqdXN0aWZ5LWNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImQtaW5saW5lLWZsZXhcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmVkaXRJdGVtKHByb3BzLml0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LWljb25cIiwgeyBhdHRyczogeyBjb2xvcjogXCJ0ZWFsXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJlZGl0XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kZWxldGVJdGVtKHByb3BzLml0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LWljb25cIiwgeyBhdHRyczogeyBjb2xvcjogXCJwaW5rXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJkZWxldGVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1sYXlvdXRcIixcbiAgICAgICAgICAgIHsgYXR0cnM6IHsgcm93OiBcIlwiLCBcImp1c3RpZnktY2VudGVyXCI6IFwiXCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtZGlhbG9nXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJtYXgtd2lkdGhcIjogXCIyOTBcIiB9LFxuICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5kaWFsb2csXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uZGlhbG9nID0gJCR2XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZGlhbG9nXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtY2FyZFwiLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LWNhcmQtdGl0bGVcIiwgeyBzdGF0aWNDbGFzczogXCJoZWFkbGluZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmRpYWxvZ0luZm8udGl0bGUpKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LWNhcmQtdGV4dFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZGlhbG9nSW5mby50ZXh0KSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInYtY2FyZC1hY3Rpb25zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1zcGFjZXJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2xvcjogXCJncmVlbiBkYXJrZW4tMVwiLCBmbGF0OiBcImZsYXRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF0aXZlT246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kaWFsb2cgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiRGlzYWdyZWVcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2xvcjogXCJncmVlbiBkYXJrZW4tMVwiLCBmbGF0OiBcImZsYXRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF0aXZlT246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZGVsZXRlT2soJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQWdyZWVcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtYWFmNGNhMDBcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LWFhZjRjYTAwXCIsXCJoYXNTY29wZWRcIjp0cnVlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3Bvc3QvaW5kZXgudnVlXG4vLyBtb2R1bGUgaWQgPSAxNzlcbi8vIG1vZHVsZSBjaHVua3MgPSAyOCJdLCJzb3VyY2VSb290IjoiIn0=
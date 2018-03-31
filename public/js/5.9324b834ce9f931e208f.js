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
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"settings.vue","sourceRoot":""}]);

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
          _c(
            "v-tabs",
            { attrs: { dark: "", color: "cyan", "show-arrows": "" } },
            [
              _c("v-tabs-slider", { attrs: { color: "yellow" } }),
              _vm._v(" "),
              _vm._l(15, function(i) {
                return _c("v-tab", { key: i, attrs: { href: "#tab-" + i } }, [
                  _vm._v(
                    "\n                Item " + _vm._s(i) + "\n            "
                  )
                ])
              }),
              _vm._v(" "),
              _c(
                "v-tabs-items",
                _vm._l(15, function(i) {
                  return _c(
                    "v-tab-item",
                    { key: i, attrs: { id: "tab-" + i } },
                    [
                      _c(
                        "v-card",
                        { attrs: { flat: "" } },
                        [_c("v-card-text", [_vm._v(_vm._s("tab" + i))])],
                        1
                      )
                    ],
                    1
                  )
                })
              )
            ],
            2
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL251eHQvc2V0dGluZ3MudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvbnV4dC9zZXR0aW5ncy52dWU/N2I4YyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL251eHQvc2V0dGluZ3MudnVlPzllZGIiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvbnV4dC9zZXR0aW5ncy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9udXh0L3NldHRpbmdzLnZ1ZT85NTI1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EseUJBQXFNO0FBQ3JNO0FBQ0E7QUFDQTtBQUNBLDRDQUFrUztBQUNsUztBQUNBLDhDQUFrTDtBQUNsTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7Ozs7Ozs7O0FDNUNBOztBQUVBO0FBQ0EscUNBQXdPO0FBQ3hPO0FBQ0E7QUFDQTtBQUNBLGtFQUEySDtBQUMzSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNKQUFzSixpRkFBaUY7QUFDdk8sK0pBQStKLGlGQUFpRjtBQUNoUDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7Ozs7QUNwQkE7QUFDQTs7O0FBR0E7QUFDQSwyUUFBNFEsd0ZBQXdGOztBQUVwVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM4QkE7UUFFQTt3QkFDQTs7Y0FFQTs7ZUFFQTtjQUNBO2VBQ0E7WUFFQTtBQUxBO2NBTUE7b0JBQ0E7Y0FDQTtZQUNBO2VBQ0E7O2dCQUVBO29CQUVBO0FBSEE7ZUFJQSxtQ0FDQSxvREFDQSxrRUFDQSx1RUFDQSx1RUFDQSx5RUFHQTtBQXpCQTtBQTBCQTs7Ozs7QUFHQTs7Ozs7Ozs7K0JBQ0E7Ozs7Ozs7OztBQUNBOztZQUdBO0FBTkE7QUFEQTs7O0FBU0E7Ozs7Ozs7OztpQ0FDQTtxQ0FDQTsrQkFDQTs7aURBQ0E7c0RBQ0E7b0RBQ0E7NEJBQ0E7OzREQUNBOzs7Ozs0Q0FDQTtpQ0FDQTs7Ozs7Ozs7O0FBQ0E7c0NBQ0E7Z0VBQ0E7QUFDQTswQ0FDQTtvQkFDQTs4QkFDQTtzREFDQTtxREFDQTtnQ0FDQTtBQUNBOztBQUNBOzs7Ozs7Ozs7cUZBQ0E7Ozs7O2dDQUNBOzs0QkFHQTtBQUZBO2lFQUdBOzRFQUNBOzs7Ozs7Ozs7QUFFQTtBQWhDQTs7QUFpQ0E7Ozs7Ozs7OzRCQUNBOzs7OEJBQ0E7Ozs7Ozs7OztBQUNBO0FBMUVBLEc7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSx3Q0FBd0Msc0JBQXNCLEVBQUU7QUFDN0U7QUFDQSx3QkFBd0IsK0JBQStCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsU0FBUyw2Q0FBNkMsRUFBRTtBQUNyRTtBQUNBLG1DQUFtQyxTQUFTLGtCQUFrQixFQUFFO0FBQ2hFO0FBQ0E7QUFDQSxvQ0FBb0MsaUJBQWlCLG9CQUFvQixFQUFFO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixpQkFBaUIsaUJBQWlCLEVBQUU7QUFDekQ7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLFNBQVMsV0FBVyxFQUFFO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsImZpbGUiOiJqcy81LjkzMjRiODM0Y2U5ZjkzMWUyMDhmLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi00YTQxZTc2MlxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NldHRpbmdzLnZ1ZVwiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV0sXFxcInN0YWdlLTJcXFwiXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XV19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vc2V0dGluZ3MudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi00YTQxZTc2MlxcXCIsXFxcImhhc1Njb3BlZFxcXCI6dHJ1ZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc2V0dGluZ3MudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBcImRhdGEtdi00YTQxZTc2MlwiXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL251eHQvc2V0dGluZ3MudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTRhNDFlNzYyXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNGE0MWU3NjJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvbnV4dC9zZXR0aW5ncy52dWVcbi8vIG1vZHVsZSBpZCA9IDEzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNGE0MWU3NjJcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9zZXR0aW5ncy52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjI0MjY4MDIyXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi00YTQxZTc2MlxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NldHRpbmdzLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi00YTQxZTc2MlxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NldHRpbmdzLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi00YTQxZTc2MlwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL251eHQvc2V0dGluZ3MudnVlXG4vLyBtb2R1bGUgaWQgPSAyMTBcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJmaWxlXCI6XCJzZXR0aW5ncy52dWVcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi00YTQxZTc2MlwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL251eHQvc2V0dGluZ3MudnVlXG4vLyBtb2R1bGUgaWQgPSAyMTFcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDx2LWNhcmQ+XG4gICAgICAgICAgICA8di1jYXJkLXRpdGxlIHByaW1hcnktdGl0bGUgY2xhc3M9XCJncmV5IGxpZ2h0ZW4tNFwiPlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImhlYWRsaW5lIG1iLTBcIj57eyBuYW1lIH19PC9oMz5cbiAgICAgICAgICAgIDwvdi1jYXJkLXRpdGxlPlxuICAgICAgICAgICAgPHYtZGl2aWRlcj48L3YtZGl2aWRlcj5cbiAgICAgICAgICAgIDx2LXRhYnNcbiAgICAgICAgICAgICAgICAgICAgZGFya1xuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImN5YW5cIlxuICAgICAgICAgICAgICAgICAgICBzaG93LWFycm93c1xuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDx2LXRhYnMtc2xpZGVyIGNvbG9yPVwieWVsbG93XCI+PC92LXRhYnMtc2xpZGVyPlxuICAgICAgICAgICAgICAgIDx2LXRhYlxuICAgICAgICAgICAgICAgICAgICAgICAgdi1mb3I9XCJpIGluIDE1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XCJpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpocmVmPVwiJyN0YWItJyArIGlcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgSXRlbSB7eyBpIH19XG4gICAgICAgICAgICAgICAgPC92LXRhYj5cbiAgICAgICAgICAgICAgICA8di10YWJzLWl0ZW1zPlxuICAgICAgICAgICAgICAgICAgICA8di10YWItaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtZm9yPVwiaSBpbiAxNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmtleT1cImlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDppZD1cIid0YWItJyArIGlcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di1jYXJkIGZsYXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtY2FyZC10ZXh0Pnt7ICd0YWInKyBpIH19PC92LWNhcmQtdGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1jYXJkPlxuICAgICAgICAgICAgICAgICAgICA8L3YtdGFiLWl0ZW0+XG4gICAgICAgICAgICAgICAgPC92LXRhYnMtaXRlbXM+XG4gICAgICAgICAgICA8L3YtdGFicz5cbiAgICAgICAgPC92LWNhcmQ+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogJ251eHRfaW5kZXgnLFxuICAgIGRhdGEgKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGlhbG9nOiBmYWxzZSxcbiAgICAgICAgZGlhbG9nSW5mbzoge1xuICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICB0ZXh0OiAnJyxcbiAgICAgICAgICBpbmRleDogbnVsbCxcbiAgICAgICAgICBpZDogbnVsbFxuICAgICAgICB9LFxuICAgICAgICBsb2FkZWQ6IGZhbHNlLFxuICAgICAgICBuYW1lOiB0aGlzLiR0KCdudXh0X3NldHRpbmdzJyksXG4gICAgICAgIHNlYXJjaDogJycsXG4gICAgICAgIGJvZHk6IHt9LFxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICAgIHNvcnRCeTogJ3VwZGF0ZWRfYXQnLFxuICAgICAgICAgIGRlc2NlbmRpbmc6ICdkZXNjJ1xuICAgICAgICB9LFxuICAgICAgICBoZWFkZXJzOiBbXG4gICAgICAgICAge3RleHQ6ICdpZCcsIHZhbHVlOiAnaWQnLCBhbGlnbjogJ2xlZnQnfSxcbiAgICAgICAgICB7dGV4dDogJ1ByZWZpeCcsIHZhbHVlOiAncHJlZml4JywgYWxpZ246ICdjZW50ZXInfSxcbiAgICAgICAgICB7dGV4dDogdGhpcy4kdCgnY2xpZW50X25hbWUnKSwgdmFsdWU6ICduYW1lJywgYWxpZ246ICdjZW50ZXInfSxcbiAgICAgICAgICB7dGV4dDogdGhpcy4kdCgncG9zdF9jb3VudCcpLCB2YWx1ZTogJ3Bvc3RfY291bnQnLCBhbGlnbjogJ2NlbnRlcid9LFxuICAgICAgICAgIHt0ZXh0OiB0aGlzLiR0KCd1cGRhdGVkX2F0JyksIHZhbHVlOiAndXBkYXRlZF9hdCcsIGFsaWduOiAnY2VudGVyJ30sXG4gICAgICAgICAge3RleHQ6ICdBY3Rpb25zJywgdmFsdWU6ICduYW1lJywgYWxpZ246ICdjZW50ZXInLCBzb3J0YWJsZTogZmFsc2V9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIHdhdGNoOiB7XG4gICAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgIGFzeW5jIGhhbmRsZXIgKCkge1xuICAgICAgICAgIGF3YWl0IHRoaXMuZmV0Y2goKVxuICAgICAgICB9LFxuICAgICAgICBkZWVwOiB0cnVlXG4gICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICBhc3luYyBmZXRjaCAoKSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWVcbiAgICAgICAgY29uc3Qge3NvcnRCeSwgZGVzY2VuZGluZywgcGFnZSwgcm93c1BlclBhZ2V9ID0gdGhpcy5wYWdpbmF0aW9uXG4gICAgICAgIGxldCBxdWVyeUJ1aWxkID0ge3BhZ2V9XG4gICAgICAgIGlmIChzb3J0QnkpIHF1ZXJ5QnVpbGQub3JkZXJCeSA9IHNvcnRCeVxuICAgICAgICBpZiAoZGVzY2VuZGluZykgcXVlcnlCdWlsZC5zb3J0ZWRCeSA9ICdkZXNjJ1xuICAgICAgICBpZiAocm93c1BlclBhZ2UpIHF1ZXJ5QnVpbGQubGltaXQgPSByb3dzUGVyUGFnZVxuICAgICAgICBjb25zb2xlLmxvZyhxdWVyeUJ1aWxkKVxuICAgICAgICBsZXQgYm9keSA9IGF3YWl0IHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdudXh0L2luZGV4JywgcXVlcnlCdWlsZClcbiAgICAgICAgdGhpcy4kc2V0KHRoaXMsICdib2R5JywgYm9keSlcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2VcbiAgICAgIH0sXG4gICAgICBlZGl0SXRlbSAoaXRlbSkge1xuICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7bmFtZTogJ251eHQuZWRpdCcsIHBhcmFtczoge2lkOiBpdGVtLmlkfX0pXG4gICAgICB9LFxuICAgICAgZGVsZXRlSXRlbSAoaXRlbSkge1xuICAgICAgICB0aGlzLmRpYWxvZyA9IHRydWVcbiAgICAgICAgdGhpcy5kaWFsb2dJbmZvLnRpdGxlID0gJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBpdGVtPydcbiAgICAgICAgdGhpcy5kaWFsb2dJbmZvLnRleHQgPSBgQ2xpZW50IG5hbWUgPT4gJHtpdGVtLm5hbWV9YFxuICAgICAgICB0aGlzLmRpYWxvZ0luZm8uaW5kZXggPSB0aGlzLmJvZHkuZGF0YS5pbmRleE9mKGl0ZW0pXG4gICAgICAgIHRoaXMuZGlhbG9nSW5mby5pZCA9IGl0ZW0uaWRcbiAgICAgIH0sXG4gICAgICBhc3luYyBkZWxldGVPayAoKSB7XG4gICAgICAgIGxldCByZXMgPSBhd2FpdCB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnbnV4dC9kZWxldGUnLCB7aWQ6IHRoaXMuZGlhbG9nSW5mby5pZH0pXG4gICAgICAgIHRoaXMuZGlhbG9nID0gZmFsc2VcbiAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ21lc3NhZ2UvcmVzcG9uc2VNZXNzYWdlJywge1xuICAgICAgICAgIHRleHQ6IHJlcy5tZXNzYWdlXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuYm9keS5kYXRhLnNwbGljZSh0aGlzLmRpYWxvZ0luZm8uaW5kZXgsIDEpXG4gICAgICAgIHRoaXMuZGlhbG9nSW5mbyA9IHt0aXRsZTogJycsIHRleHQ6ICcnLCBpbmRleDogbnVsbCwgaWQ6IG51bGx9XG4gICAgICB9XG4gICAgfSxcbiAgICBhc3luYyBjcmVhdGVkICgpIHtcbiAgICAgIGF3YWl0IHRoaXMuZmV0Y2goKVxuICAgICAgdGhpcy5sb2FkZWQgPSB0cnVlXG4gICAgfVxuICB9XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cblxuPC9zdHlsZT5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL251eHQvc2V0dGluZ3MudnVlIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInYtY2FyZFwiLFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtY2FyZC10aXRsZVwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJncmV5IGxpZ2h0ZW4tNFwiLCBhdHRyczogeyBcInByaW1hcnktdGl0bGVcIjogXCJcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiaDNcIiwgeyBzdGF0aWNDbGFzczogXCJoZWFkbGluZSBtYi0wXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLm5hbWUpKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInYtZGl2aWRlclwiKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LXRhYnNcIixcbiAgICAgICAgICAgIHsgYXR0cnM6IHsgZGFyazogXCJcIiwgY29sb3I6IFwiY3lhblwiLCBcInNob3ctYXJyb3dzXCI6IFwiXCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInYtdGFicy1zbGlkZXJcIiwgeyBhdHRyczogeyBjb2xvcjogXCJ5ZWxsb3dcIiB9IH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0uX2woMTUsIGZ1bmN0aW9uKGkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJ2LXRhYlwiLCB7IGtleTogaSwgYXR0cnM6IHsgaHJlZjogXCIjdGFiLVwiICsgaSB9IH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgSXRlbSBcIiArIF92bS5fcyhpKSArIFwiXFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LXRhYnMtaXRlbXNcIixcbiAgICAgICAgICAgICAgICBfdm0uX2woMTUsIGZ1bmN0aW9uKGkpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LXRhYi1pdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgIHsga2V5OiBpLCBhdHRyczogeyBpZDogXCJ0YWItXCIgKyBpIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWNhcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgZmxhdDogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJ2LWNhcmQtdGV4dFwiLCBbX3ZtLl92KF92bS5fcyhcInRhYlwiICsgaSkpXSldLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAyXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtNGE0MWU3NjJcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTRhNDFlNzYyXCIsXCJoYXNTY29wZWRcIjp0cnVlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL251eHQvc2V0dGluZ3MudnVlXG4vLyBtb2R1bGUgaWQgPSAyMTNcbi8vIG1vZHVsZSBjaHVua3MgPSA1Il0sInNvdXJjZVJvb3QiOiIifQ==
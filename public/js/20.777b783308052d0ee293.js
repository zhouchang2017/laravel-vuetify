webpackJsonp([20],{

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(250)
/* template */
var __vue_template__ = __webpack_require__(251)
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
Component.options.__file = "resources/assets/js/pages/auth/password/reset.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-517e2fd6", Component.options)
  } else {
    hotAPI.reload("data-v-517e2fd6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vform__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vform___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vform__);


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
  name: 'reset-view',

  metaInfo: function metaInfo() {
    return { title: this.$t('reset_password') };
  },


  data: function data() {
    return {
      form: new __WEBPACK_IMPORTED_MODULE_1_vform___default.a({
        token: '',
        email: '',
        password: '',
        password_confirmation: ''
      }),
      eye: true
    };
  },

  methods: {
    reset: function reset() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var response, _ref, data;

        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.formHasErrors();

              case 2:
                if (!_context.sent) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt('return');

              case 4:

                _this.form.token = _this.$route.params.token;

                _context.next = 7;
                return _this.form.post('/api/password/reset');

              case 7:
                response = _context.sent;
                _context.next = 10;
                return _this.form.post('/api/login');

              case 10:
                _ref = _context.sent;
                data = _ref.data;


                // Save the token.
                _this.$store.dispatch('saveToken', {
                  token: data.token,
                  remember: false
                });

                // Fetch the user.
                _context.next = 15;
                return _this.$store.dispatch('fetchUser');

              case 15:

                _this.$store.dispatch('message/responseMessage', {
                  type: 'success',
                  text: response.data.status
                });

                // Redirect home.
                _this.$router.push({ name: 'home' });

              case 17:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
  }
});

/***/ }),

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-layout",
    { attrs: { row: "" } },
    [
      _c(
        "v-flex",
        {
          attrs: {
            xs12: "",
            sm8: "",
            "offset-sm2": "",
            lg4: "",
            "offset-lg4": ""
          }
        },
        [
          _c(
            "v-card",
            [
              _c("progress-bar", { attrs: { show: _vm.form.busy } }),
              _vm._v(" "),
              _c(
                "form",
                {
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.reset($event)
                    },
                    keydown: function($event) {
                      _vm.form.onKeydown($event)
                    }
                  }
                },
                [
                  _c("v-card-title", { attrs: { "primary-title": "" } }, [
                    _c("h3", { staticClass: "headline mb-0" }, [
                      _vm._v(_vm._s(_vm.$t("reset_password")))
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    [
                      _c("email-input", {
                        directives: [
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required|email",
                            expression: "'required|email'"
                          }
                        ],
                        attrs: {
                          form: _vm.form,
                          label: _vm.$t("email"),
                          "v-errors": _vm.errors,
                          value: _vm.form.email,
                          name: "email"
                        },
                        on: {
                          "update:value": function($event) {
                            _vm.$set(_vm.form, "email", $event)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("password-input", {
                        directives: [
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required|min:8",
                            expression: "'required|min:8'"
                          }
                        ],
                        attrs: {
                          form: _vm.form,
                          hint: _vm.$t("password_length_hint"),
                          "v-errors": _vm.errors,
                          value: _vm.form.password
                        },
                        on: {
                          "update:value": function($event) {
                            _vm.$set(_vm.form, "password", $event)
                          },
                          eye: function($event) {
                            _vm.eye = $event
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("password-input", {
                        directives: [
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required|confirmed:password",
                            expression: "'required|confirmed:password'"
                          }
                        ],
                        attrs: {
                          form: _vm.form,
                          hide: _vm.eye,
                          label: _vm.$t("confirm_password"),
                          "v-errors": _vm.errors,
                          value: _vm.form.password_confirmation,
                          "data-vv-as": "password",
                          "hide-icon": "true",
                          name: "password_confirmation"
                        },
                        on: {
                          "update:value": function($event) {
                            _vm.$set(_vm.form, "password_confirmation", $event)
                          }
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card-actions",
                    [
                      _c("submit-button", {
                        attrs: {
                          flat: true,
                          form: _vm.form,
                          label: _vm.$t("reset_password")
                        }
                      })
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
    require("vue-hot-reload-api")      .rerender("data-v-517e2fd6", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2F1dGgvcGFzc3dvcmQvcmVzZXQudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2F1dGgvcGFzc3dvcmQvcmVzZXQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYXV0aC9wYXNzd29yZC9yZXNldC52dWU/NDI4ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLDRDQUFrUztBQUNsUztBQUNBLDhDQUFzTDtBQUN0TDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNlQTs7QUFFQTtRQUdBOztnQ0FDQTs0QkFDQTtBQUVBOzs7Ozs7ZUFHQTtlQUNBO2tCQUNBOytCQUVBO0FBTEE7V0FRQTtBQVRBOzs7OztBQVdBOzs7Ozs7Ozs7OzZCQUVBOzs7Ozs7Ozs7Ozs7dURBRUE7Ozt1Q0FHQTs7Ozs7dUNBRUE7Ozs7Ozs7QUFDQTs7OEJBRUE7NEJBR0E7QUFKQTs7QUFLQTs7NkNBRUE7Ozs7O3dCQUVBO3NDQUdBO0FBSkE7O0FBS0E7MkNBQ0E7Ozs7Ozs7OztBQUVBO0FBNUJBO0FBakJBLEc7Ozs7Ozs7QUMxREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxTQUFTLFVBQVUsRUFBRTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLFNBQVMsc0JBQXNCLEVBQUU7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLHNDQUFzQyxTQUFTLHNCQUFzQixFQUFFO0FBQ3ZFLDhCQUE4QiwrQkFBK0I7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6ImpzLzIwLjc3N2I3ODMzMDgwNTJkMGVlMjkzLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dLFxcXCJzdGFnZS0yXFxcIl0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV1dfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3Jlc2V0LnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNTE3ZTJmZDZcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNldC52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hdXRoL3Bhc3N3b3JkL3Jlc2V0LnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi01MTdlMmZkNlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTUxN2UyZmQ2XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2F1dGgvcGFzc3dvcmQvcmVzZXQudnVlXG4vLyBtb2R1bGUgaWQgPSAxNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAyMCIsIjx0ZW1wbGF0ZT5cbiAgPHYtbGF5b3V0IHJvdz5cbiAgICA8di1mbGV4IHhzMTIgc204IG9mZnNldC1zbTIgbGc0IG9mZnNldC1sZzQ+XG4gICAgICA8di1jYXJkPlxuICAgICAgICA8cHJvZ3Jlc3MtYmFyIDpzaG93PVwiZm9ybS5idXN5XCI+PC9wcm9ncmVzcy1iYXI+XG4gICAgICAgIDxmb3JtIEBzdWJtaXQucHJldmVudD1cInJlc2V0XCIgQGtleWRvd249XCJmb3JtLm9uS2V5ZG93bigkZXZlbnQpXCI+XG4gICAgICAgICAgPHYtY2FyZC10aXRsZSBwcmltYXJ5LXRpdGxlPlxuICAgICAgICAgICAgPGgzIGNsYXNzPVwiaGVhZGxpbmUgbWItMFwiPnt7ICR0KCdyZXNldF9wYXNzd29yZCcpIH19PC9oMz5cbiAgICAgICAgICA8L3YtY2FyZC10aXRsZT5cbiAgICAgICAgICA8di1jYXJkLXRleHQ+XG5cbiAgICAgICAgICAgIDwhLS0gRW1haWwgLS0+XG4gICAgICAgICAgICA8ZW1haWwtaW5wdXRcbiAgICAgICAgICAgICAgOmZvcm09XCJmb3JtXCJcbiAgICAgICAgICAgICAgOmxhYmVsPVwiJHQoJ2VtYWlsJylcIlxuICAgICAgICAgICAgICA6di1lcnJvcnM9XCJlcnJvcnNcIlxuICAgICAgICAgICAgICA6dmFsdWUuc3luYz1cImZvcm0uZW1haWxcIlxuICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICB2LXZhbGlkYXRlPVwiJ3JlcXVpcmVkfGVtYWlsJ1wiXG4gICAgICAgICAgICA+PC9lbWFpbC1pbnB1dD5cblxuICAgICAgICAgICAgPCEtLSBQYXNzd29yZCAtLT5cbiAgICAgICAgICAgIDxwYXNzd29yZC1pbnB1dFxuICAgICAgICAgICAgICA6Zm9ybT1cImZvcm1cIlxuICAgICAgICAgICAgICA6aGludD1cIiR0KCdwYXNzd29yZF9sZW5ndGhfaGludCcpXCJcbiAgICAgICAgICAgICAgOnYtZXJyb3JzPVwiZXJyb3JzXCJcbiAgICAgICAgICAgICAgOnZhbHVlLnN5bmM9XCJmb3JtLnBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgdi1vbjpleWU9XCJleWUgPSAkZXZlbnRcIlxuICAgICAgICAgICAgICB2LXZhbGlkYXRlPVwiJ3JlcXVpcmVkfG1pbjo4J1wiXG4gICAgICAgICAgICA+PC9wYXNzd29yZC1pbnB1dD5cblxuICAgICAgICAgICAgPCEtLSBQYXNzd29yZCBDb25maXJtYXRpb24gLS0+XG4gICAgICAgICAgICA8cGFzc3dvcmQtaW5wdXRcbiAgICAgICAgICAgICAgOmZvcm09XCJmb3JtXCJcbiAgICAgICAgICAgICAgOmhpZGU9XCJleWVcIlxuICAgICAgICAgICAgICA6bGFiZWw9XCIkdCgnY29uZmlybV9wYXNzd29yZCcpXCJcbiAgICAgICAgICAgICAgOnYtZXJyb3JzPVwiZXJyb3JzXCJcbiAgICAgICAgICAgICAgOnZhbHVlLnN5bmM9XCJmb3JtLnBhc3N3b3JkX2NvbmZpcm1hdGlvblwiXG4gICAgICAgICAgICAgIGRhdGEtdnYtYXM9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIGhpZGUtaWNvbj1cInRydWVcIlxuICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRfY29uZmlybWF0aW9uXCJcbiAgICAgICAgICAgICAgdi12YWxpZGF0ZT1cIidyZXF1aXJlZHxjb25maXJtZWQ6cGFzc3dvcmQnXCJcbiAgICAgICAgICAgID48L3Bhc3N3b3JkLWlucHV0PlxuICAgICAgICAgICAgXG4gICAgICAgICAgPC92LWNhcmQtdGV4dD5cbiAgICAgICAgICA8di1jYXJkLWFjdGlvbnM+XG4gICAgICAgICAgICA8c3VibWl0LWJ1dHRvbiA6ZmxhdD1cInRydWVcIiA6Zm9ybT1cImZvcm1cIiA6bGFiZWw9XCIkdCgncmVzZXRfcGFzc3dvcmQnKVwiPjwvc3VibWl0LWJ1dHRvbj5cbiAgICAgICAgICA8L3YtY2FyZC1hY3Rpb25zPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L3YtY2FyZD5cbiAgICA8L3YtZmxleD5cbiAgPC92LWxheW91dD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgRm9ybSBmcm9tICd2Zm9ybSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAncmVzZXQtdmlldycsXG4gIFxuICBtZXRhSW5mbyAoKSB7XG4gICAgcmV0dXJuIHsgdGl0bGU6IHRoaXMuJHQoJ3Jlc2V0X3Bhc3N3b3JkJykgfVxuICB9LFxuICBcbiAgZGF0YTogKCkgPT4gKHtcbiAgICBmb3JtOiBuZXcgRm9ybSh7XG4gICAgICB0b2tlbjogJycsXG4gICAgICBlbWFpbDogJycsXG4gICAgICBwYXNzd29yZDogJycsXG4gICAgICBwYXNzd29yZF9jb25maXJtYXRpb246ICcnXG4gICAgfSksXG4gICAgZXllOiB0cnVlXG4gIH0pLFxuXG4gIG1ldGhvZHM6IHtcbiAgICBhc3luYyByZXNldCAoKSB7XG4gICAgICBpZiAoYXdhaXQgdGhpcy5mb3JtSGFzRXJyb3JzKCkpIHJldHVyblxuXG4gICAgICB0aGlzLmZvcm0udG9rZW4gPSB0aGlzLiRyb3V0ZS5wYXJhbXMudG9rZW5cblxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmZvcm0ucG9zdCgnL2FwaS9wYXNzd29yZC9yZXNldCcpXG5cbiAgICAgIC8vIExvZ2luIHVzZXIgaWYgcmVzZXQgc3VjY2Vzc2Z1bC5cbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgdGhpcy5mb3JtLnBvc3QoJy9hcGkvbG9naW4nKVxuXG4gICAgICAvLyBTYXZlIHRoZSB0b2tlbi5cbiAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdzYXZlVG9rZW4nLCB7XG4gICAgICAgIHRva2VuOiBkYXRhLnRva2VuLFxuICAgICAgICByZW1lbWJlcjogZmFsc2VcbiAgICAgIH0pXG5cbiAgICAgIC8vIEZldGNoIHRoZSB1c2VyLlxuICAgICAgYXdhaXQgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2ZldGNoVXNlcicpXG5cbiAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdtZXNzYWdlL3Jlc3BvbnNlTWVzc2FnZScsIHtcbiAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxuICAgICAgICB0ZXh0OiByZXNwb25zZS5kYXRhLnN0YXR1c1xuICAgICAgfSlcblxuICAgICAgLy8gUmVkaXJlY3QgaG9tZS5cbiAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHsgbmFtZTogJ2hvbWUnIH0pXG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2F1dGgvcGFzc3dvcmQvcmVzZXQudnVlIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInYtbGF5b3V0XCIsXG4gICAgeyBhdHRyczogeyByb3c6IFwiXCIgfSB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIHhzMTI6IFwiXCIsXG4gICAgICAgICAgICBzbTg6IFwiXCIsXG4gICAgICAgICAgICBcIm9mZnNldC1zbTJcIjogXCJcIixcbiAgICAgICAgICAgIGxnNDogXCJcIixcbiAgICAgICAgICAgIFwib2Zmc2V0LWxnNFwiOiBcIlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtY2FyZFwiLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInByb2dyZXNzLWJhclwiLCB7IGF0dHJzOiB7IHNob3c6IF92bS5mb3JtLmJ1c3kgfSB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJmb3JtXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgc3VibWl0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucmVzZXQoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBrZXlkb3duOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uZm9ybS5vbktleWRvd24oJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInYtY2FyZC10aXRsZVwiLCB7IGF0dHJzOiB7IFwicHJpbWFyeS10aXRsZVwiOiBcIlwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImgzXCIsIHsgc3RhdGljQ2xhc3M6IFwiaGVhZGxpbmUgbWItMFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS4kdChcInJlc2V0X3Bhc3N3b3JkXCIpKSlcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtY2FyZC10ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImVtYWlsLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJyZXF1aXJlZHxlbWFpbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJ3JlcXVpcmVkfGVtYWlsJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtOiBfdm0uZm9ybSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IF92bS4kdChcImVtYWlsXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtZXJyb3JzXCI6IF92bS5lcnJvcnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5lbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1cGRhdGU6dmFsdWVcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwiZW1haWxcIiwgJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInBhc3N3b3JkLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJyZXF1aXJlZHxtaW46OFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJ3JlcXVpcmVkfG1pbjo4J1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtOiBfdm0uZm9ybSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGludDogX3ZtLiR0KFwicGFzc3dvcmRfbGVuZ3RoX2hpbnRcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1lcnJvcnNcIjogX3ZtLmVycm9ycyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLnBhc3N3b3JkXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1cGRhdGU6dmFsdWVcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwicGFzc3dvcmRcIiwgJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleWU6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5leWUgPSAkZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJwYXNzd29yZC1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwicmVxdWlyZWR8Y29uZmlybWVkOnBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIncmVxdWlyZWR8Y29uZmlybWVkOnBhc3N3b3JkJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtOiBfdm0uZm9ybSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZTogX3ZtLmV5ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IF92bS4kdChcImNvbmZpcm1fcGFzc3dvcmRcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1lcnJvcnNcIjogX3ZtLmVycm9ycyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLnBhc3N3b3JkX2NvbmZpcm1hdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXZ2LWFzXCI6IFwicGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoaWRlLWljb25cIjogXCJ0cnVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwicGFzc3dvcmRfY29uZmlybWF0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcInVwZGF0ZTp2YWx1ZVwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJwYXNzd29yZF9jb25maXJtYXRpb25cIiwgJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWNhcmQtYWN0aW9uc1wiLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzdWJtaXQtYnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZsYXQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm06IF92bS5mb3JtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogX3ZtLiR0KFwicmVzZXRfcGFzc3dvcmRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtNTE3ZTJmZDZcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTUxN2UyZmQ2XCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hdXRoL3Bhc3N3b3JkL3Jlc2V0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMjAiXSwic291cmNlUm9vdCI6IiJ9
webpackJsonp([19],{

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(246)
/* template */
var __vue_template__ = __webpack_require__(247)
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
Component.options.__file = "resources/assets/js/pages/auth/register.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a3aa9146", Component.options)
  } else {
    hotAPI.reload("data-v-a3aa9146", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 246:
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
//
//
//
//
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
  name: 'register-view',
  metaInfo: function metaInfo() {
    return { title: this.$t('register') };
  },


  data: function data() {
    return {
      form: new __WEBPACK_IMPORTED_MODULE_1_vform___default.a({
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
      }),
      eye: true
    };
  },

  methods: {
    register: function register() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var _ref, data, _ref2, token;

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
                _context.next = 6;
                return _this.form.post('register');

              case 6:
                _ref = _context.sent;
                data = _ref.data;
                _context.next = 10;
                return _this.form.post('login');

              case 10:
                _ref2 = _context.sent;
                token = _ref2.data.token;


                // Save the token.
                _this.$store.dispatch('auth/saveToken', { token: token });

                // Update the user.
                _context.next = 15;
                return _this.$store.dispatch('auth/updateUser', { user: data });

              case 15:

                // Redirect home.
                _this.$router.push({ name: 'home' });

              case 16:
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

/***/ 247:
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
                      return _vm.register($event)
                    },
                    keydown: function($event) {
                      _vm.form.onKeydown($event)
                    }
                  }
                },
                [
                  _c("v-card-title", { attrs: { "primary-title": "" } }, [
                    _c("h3", { staticClass: "headline mb-0" }, [
                      _vm._v(_vm._s(_vm.$t("register")))
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    [
                      _c("text-input", {
                        directives: [
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required|max:30",
                            expression: "'required|max:30'"
                          }
                        ],
                        attrs: {
                          form: _vm.form,
                          label: _vm.$t("name"),
                          "v-errors": _vm.errors,
                          value: _vm.form.name,
                          counter: "30",
                          name: "name"
                        },
                        on: {
                          "update:value": function($event) {
                            _vm.$set(_vm.form, "name", $event)
                          }
                        }
                      }),
                      _vm._v(" "),
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
                        attrs: { form: _vm.form, label: _vm.$t("register") }
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
    require("vue-hot-reload-api")      .rerender("data-v-a3aa9146", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2F1dGgvcmVnaXN0ZXIudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2F1dGgvcmVnaXN0ZXIudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYXV0aC9yZWdpc3Rlci52dWU/ZTczNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLDRDQUFrUztBQUNsUztBQUNBLDhDQUFtTDtBQUNuTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNEJBOztBQUVBO1FBRUE7Z0NBQ0E7NEJBQ0E7QUFFQTs7Ozs7O2NBR0E7ZUFDQTtrQkFDQTsrQkFFQTtBQUxBO1dBUUE7QUFUQTs7Ozs7QUFXQTs7Ozs7Ozs7Ozs2QkFHQTs7Ozs7Ozs7Ozs7O3VDQUdBOzs7Ozs7dUNBRUE7Ozs7Ozs7QUFDQTswREFFQTs7QUFDQTs7d0VBRUE7Ozs7QUFDQTsyQ0FDQTs7Ozs7Ozs7O0FBRUE7QUFuQkE7QUFoQkEsRzs7Ozs7OztBQ3ZFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLFNBQVMsVUFBVSxFQUFFO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsU0FBUyxzQkFBc0IsRUFBRTtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0Esc0NBQXNDLFNBQVMsc0JBQXNCLEVBQUU7QUFDdkUsOEJBQThCLCtCQUErQjtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQyx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6ImpzLzE5LmNmYmU4YTdjMTZhYzQ3ZTRkMWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dLFxcXCJzdGFnZS0yXFxcIl0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV1dfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3JlZ2lzdGVyLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtYTNhYTkxNDZcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZWdpc3Rlci52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hdXRoL3JlZ2lzdGVyLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi1hM2FhOTE0NlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LWEzYWE5MTQ2XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2F1dGgvcmVnaXN0ZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAxOSIsIjx0ZW1wbGF0ZT5cbiAgPHYtbGF5b3V0IHJvdz5cbiAgICA8di1mbGV4IHhzMTIgc204IG9mZnNldC1zbTIgbGc0IG9mZnNldC1sZzQ+XG4gICAgICA8di1jYXJkPlxuICAgICAgICA8cHJvZ3Jlc3MtYmFyIDpzaG93PVwiZm9ybS5idXN5XCI+PC9wcm9ncmVzcy1iYXI+XG4gICAgICAgIDxmb3JtIEBzdWJtaXQucHJldmVudD1cInJlZ2lzdGVyXCIgQGtleWRvd249XCJmb3JtLm9uS2V5ZG93bigkZXZlbnQpXCI+XG4gICAgICAgICAgPHYtY2FyZC10aXRsZSBwcmltYXJ5LXRpdGxlPlxuICAgICAgICAgICAgPGgzIGNsYXNzPVwiaGVhZGxpbmUgbWItMFwiPnt7ICR0KCdyZWdpc3RlcicpIH19PC9oMz5cbiAgICAgICAgICA8L3YtY2FyZC10aXRsZT5cbiAgICAgICAgICA8di1jYXJkLXRleHQ+XG5cbiAgICAgICAgICAgIDwhLS0gTmFtZSAtLT5cbiAgICAgICAgICAgIDx0ZXh0LWlucHV0XG4gICAgICAgICAgICAgIDpmb3JtPVwiZm9ybVwiXG4gICAgICAgICAgICAgIDpsYWJlbD1cIiR0KCduYW1lJylcIlxuICAgICAgICAgICAgICA6di1lcnJvcnM9XCJlcnJvcnNcIlxuICAgICAgICAgICAgICA6dmFsdWUuc3luYz1cImZvcm0ubmFtZVwiXG4gICAgICAgICAgICAgIGNvdW50ZXI9XCIzMFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgdi12YWxpZGF0ZT1cIidyZXF1aXJlZHxtYXg6MzAnXCJcbiAgICAgICAgICAgID48L3RleHQtaW5wdXQ+XG5cbiAgICAgICAgICAgIDwhLS0gRW1haWwgLS0+XG4gICAgICAgICAgICA8ZW1haWwtaW5wdXRcbiAgICAgICAgICAgICAgOmZvcm09XCJmb3JtXCJcbiAgICAgICAgICAgICAgOmxhYmVsPVwiJHQoJ2VtYWlsJylcIlxuICAgICAgICAgICAgICA6di1lcnJvcnM9XCJlcnJvcnNcIlxuICAgICAgICAgICAgICA6dmFsdWUuc3luYz1cImZvcm0uZW1haWxcIlxuICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICB2LXZhbGlkYXRlPVwiJ3JlcXVpcmVkfGVtYWlsJ1wiXG4gICAgICAgICAgICA+PC9lbWFpbC1pbnB1dD5cblxuICAgICAgICAgICAgPCEtLSBQYXNzd29yZCAtLT5cbiAgICAgICAgICAgIDxwYXNzd29yZC1pbnB1dFxuICAgICAgICAgICAgICA6Zm9ybT1cImZvcm1cIlxuICAgICAgICAgICAgICA6aGludD1cIiR0KCdwYXNzd29yZF9sZW5ndGhfaGludCcpXCJcbiAgICAgICAgICAgICAgOnYtZXJyb3JzPVwiZXJyb3JzXCJcbiAgICAgICAgICAgICAgOnZhbHVlLnN5bmM9XCJmb3JtLnBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgdi1vbjpleWU9XCJleWUgPSAkZXZlbnRcIlxuICAgICAgICAgICAgICB2LXZhbGlkYXRlPVwiJ3JlcXVpcmVkfG1pbjo4J1wiXG4gICAgICAgICAgICA+PC9wYXNzd29yZC1pbnB1dD5cblxuICAgICAgICAgICAgPCEtLSBQYXNzd29yZCBDb25maXJtYXRpb24gLS0+XG4gICAgICAgICAgICA8cGFzc3dvcmQtaW5wdXRcbiAgICAgICAgICAgICAgOmZvcm09XCJmb3JtXCJcbiAgICAgICAgICAgICAgOmhpZGU9XCJleWVcIlxuICAgICAgICAgICAgICA6bGFiZWw9XCIkdCgnY29uZmlybV9wYXNzd29yZCcpXCJcbiAgICAgICAgICAgICAgOnYtZXJyb3JzPVwiZXJyb3JzXCJcbiAgICAgICAgICAgICAgOnZhbHVlLnN5bmM9XCJmb3JtLnBhc3N3b3JkX2NvbmZpcm1hdGlvblwiXG4gICAgICAgICAgICAgIGRhdGEtdnYtYXM9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIGhpZGUtaWNvbj1cInRydWVcIlxuICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRfY29uZmlybWF0aW9uXCJcbiAgICAgICAgICAgICAgdi12YWxpZGF0ZT1cIidyZXF1aXJlZHxjb25maXJtZWQ6cGFzc3dvcmQnXCJcbiAgICAgICAgICAgID48L3Bhc3N3b3JkLWlucHV0PlxuXG4gICAgICAgICAgPC92LWNhcmQtdGV4dD5cblxuICAgICAgICAgIDx2LWNhcmQtYWN0aW9ucz5cbiAgICAgICAgICAgIDxzdWJtaXQtYnV0dG9uIDpmb3JtPVwiZm9ybVwiIDpsYWJlbD1cIiR0KCdyZWdpc3RlcicpXCI+PC9zdWJtaXQtYnV0dG9uPlxuICAgICAgICAgIDwvdi1jYXJkLWFjdGlvbnM+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvdi1jYXJkPlxuICAgIDwvdi1mbGV4PlxuICA8L3YtbGF5b3V0PlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IEZvcm0gZnJvbSAndmZvcm0nXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ3JlZ2lzdGVyLXZpZXcnLFxuICBtZXRhSW5mbyAoKSB7XG4gICAgcmV0dXJuIHsgdGl0bGU6IHRoaXMuJHQoJ3JlZ2lzdGVyJykgfVxuICB9LFxuXG4gIGRhdGE6ICgpID0+ICh7XG4gICAgZm9ybTogbmV3IEZvcm0oe1xuICAgICAgbmFtZTogJycsXG4gICAgICBlbWFpbDogJycsXG4gICAgICBwYXNzd29yZDogJycsXG4gICAgICBwYXNzd29yZF9jb25maXJtYXRpb246ICcnXG4gICAgfSksXG4gICAgZXllOiB0cnVlXG4gIH0pLFxuXG4gIG1ldGhvZHM6IHtcbiAgICBhc3luYyByZWdpc3RlciAoKSB7XG4gICAgICBpZiAoYXdhaXQgdGhpcy5mb3JtSGFzRXJyb3JzKCkpIHJldHVyblxuXG4gICAgICAvLyBSZWdpc3RlciB0aGUgdXNlci5cbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgdGhpcy5mb3JtLnBvc3QoJ3JlZ2lzdGVyJylcblxuICAgICAgLy8gTG9nIGluIHRoZSB1c2VyLlxuICAgICAgY29uc3QgeyBkYXRhOiB7IHRva2VuIH19ID0gYXdhaXQgdGhpcy5mb3JtLnBvc3QoJ2xvZ2luJylcblxuICAgICAgLy8gU2F2ZSB0aGUgdG9rZW4uXG4gICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnYXV0aC9zYXZlVG9rZW4nLCB7IHRva2VuIH0pXG5cbiAgICAgIC8vIFVwZGF0ZSB0aGUgdXNlci5cbiAgICAgIGF3YWl0IHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdhdXRoL3VwZGF0ZVVzZXInLCB7IHVzZXI6IGRhdGEgfSlcblxuICAgICAgLy8gUmVkaXJlY3QgaG9tZS5cbiAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHsgbmFtZTogJ2hvbWUnIH0pXG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2F1dGgvcmVnaXN0ZXIudnVlIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInYtbGF5b3V0XCIsXG4gICAgeyBhdHRyczogeyByb3c6IFwiXCIgfSB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInYtZmxleFwiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIHhzMTI6IFwiXCIsXG4gICAgICAgICAgICBzbTg6IFwiXCIsXG4gICAgICAgICAgICBcIm9mZnNldC1zbTJcIjogXCJcIixcbiAgICAgICAgICAgIGxnNDogXCJcIixcbiAgICAgICAgICAgIFwib2Zmc2V0LWxnNFwiOiBcIlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtY2FyZFwiLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInByb2dyZXNzLWJhclwiLCB7IGF0dHJzOiB7IHNob3c6IF92bS5mb3JtLmJ1c3kgfSB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJmb3JtXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgc3VibWl0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucmVnaXN0ZXIoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBrZXlkb3duOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uZm9ybS5vbktleWRvd24oJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInYtY2FyZC10aXRsZVwiLCB7IGF0dHJzOiB7IFwicHJpbWFyeS10aXRsZVwiOiBcIlwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImgzXCIsIHsgc3RhdGljQ2xhc3M6IFwiaGVhZGxpbmUgbWItMFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS4kdChcInJlZ2lzdGVyXCIpKSlcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtY2FyZC10ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRleHQtaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcInJlcXVpcmVkfG1heDozMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJ3JlcXVpcmVkfG1heDozMCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybTogX3ZtLmZvcm0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBfdm0uJHQoXCJuYW1lXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtZXJyb3JzXCI6IF92bS5lcnJvcnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVyOiBcIjMwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1cGRhdGU6dmFsdWVcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwibmFtZVwiLCAkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZW1haWwtaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcInJlcXVpcmVkfGVtYWlsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIncmVxdWlyZWR8ZW1haWwnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm06IF92bS5mb3JtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogX3ZtLiR0KFwiZW1haWxcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1lcnJvcnNcIjogX3ZtLmVycm9ycyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmVtYWlsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcInVwZGF0ZTp2YWx1ZVwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJlbWFpbFwiLCAkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwicGFzc3dvcmQtaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcInJlcXVpcmVkfG1pbjo4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIncmVxdWlyZWR8bWluOjgnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm06IF92bS5mb3JtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBoaW50OiBfdm0uJHQoXCJwYXNzd29yZF9sZW5ndGhfaGludFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWVycm9yc1wiOiBfdm0uZXJyb3JzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0ucGFzc3dvcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcInVwZGF0ZTp2YWx1ZVwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJwYXNzd29yZFwiLCAkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV5ZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmV5ZSA9ICRldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInBhc3N3b3JkLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJyZXF1aXJlZHxjb25maXJtZWQ6cGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIidyZXF1aXJlZHxjb25maXJtZWQ6cGFzc3dvcmQnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm06IF92bS5mb3JtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlOiBfdm0uZXllLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogX3ZtLiR0KFwiY29uZmlybV9wYXNzd29yZFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWVycm9yc1wiOiBfdm0uZXJyb3JzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0ucGFzc3dvcmRfY29uZmlybWF0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtYXNcIjogXCJwYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImhpZGUtaWNvblwiOiBcInRydWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJwYXNzd29yZF9jb25maXJtYXRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidXBkYXRlOnZhbHVlXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInBhc3N3b3JkX2NvbmZpcm1hdGlvblwiLCAkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtY2FyZC1hY3Rpb25zXCIsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInN1Ym1pdC1idXR0b25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZm9ybTogX3ZtLmZvcm0sIGxhYmVsOiBfdm0uJHQoXCJyZWdpc3RlclwiKSB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LWEzYWE5MTQ2XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi1hM2FhOTE0NlwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYXV0aC9yZWdpc3Rlci52dWVcbi8vIG1vZHVsZSBpZCA9IDI0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDE5Il0sInNvdXJjZVJvb3QiOiIifQ==
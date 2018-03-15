webpackJsonp([8],{

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(291)
/* template */
var __vue_template__ = __webpack_require__(292)
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
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
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

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vform__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vform___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vform__);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      form: new __WEBPACK_IMPORTED_MODULE_2_vform___default.a({
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

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
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
                return _this.form.post('/api/register');

              case 6:
                _ref = _context.sent;
                data = _ref.data;
                _context.next = 10;
                return _this.form.post('/api/login');

              case 10:
                _ref2 = _context.sent;
                token = _ref2.data.token;


                // Save the token.
                _this.$store.dispatch('saveToken', { token: token });

                // Update the user.
                _context.next = 15;
                return _this.$store.dispatch('updateUser', { user: data });

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

/***/ 292:
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
                      _vm.register($event)
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
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-a3aa9146", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2F1dGgvcmVnaXN0ZXIudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2F1dGgvcmVnaXN0ZXIudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYXV0aC9yZWdpc3Rlci52dWU/NGNlNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLDRDQUFvYjtBQUNwYjtBQUNBLDhDQUFzTTtBQUN0TTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNEJBOztBQUVBO1FBRUE7Z0NBQ0E7NEJBQ0E7QUFFQTs7Ozs7O2NBR0E7ZUFDQTtrQkFDQTsrQkFFQTtBQUxBO1dBUUE7QUFUQTs7Ozs7QUFXQTs7Ozs7Ozs7Ozs2QkFHQTs7Ozs7Ozs7Ozs7O3VDQUdBOzs7Ozs7dUNBRUE7Ozs7Ozs7QUFDQTtxREFFQTs7QUFDQTs7bUVBRUE7Ozs7QUFDQTsyQ0FDQTs7Ozs7Ozs7O0FBRUE7QUFuQkE7QUFoQkEsRzs7Ozs7OztBQ3ZFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLFNBQVMsVUFBVSxFQUFFO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsU0FBUyxzQkFBc0IsRUFBRTtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0Esc0NBQXNDLFNBQVMsc0JBQXNCLEVBQUU7QUFDdkUsOEJBQThCLCtCQUErQjtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQyx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6ImpzLzguNzZjM2VlYzcwNTgzOTUwOWFlNDUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDEzLjcuMUB2dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dLFtcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV0sW1xcXCJzdGFnZS0yXFxcIl1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIsXFxcInRyYW5zZm9ybS1hc3luYy10by1nZW5lcmF0b3JcXFwiLFxcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixcXFwic3ludGF4LWR5bmFtaWMtaW1wb3J0XFxcIl19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxMy43LjFAdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3JlZ2lzdGVyLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDEzLjcuMUB2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LWEzYWE5MTQ2XFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTMuNy4xQHZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3JlZ2lzdGVyLnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2F1dGgvcmVnaXN0ZXIudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LWEzYWE5MTQ2XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtYTNhYTkxNDZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYXV0aC9yZWdpc3Rlci52dWVcbi8vIG1vZHVsZSBpZCA9IDIzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDgiLCI8dGVtcGxhdGU+XG4gIDx2LWxheW91dCByb3c+XG4gICAgPHYtZmxleCB4czEyIHNtOCBvZmZzZXQtc20yIGxnNCBvZmZzZXQtbGc0PlxuICAgICAgPHYtY2FyZD5cbiAgICAgICAgPHByb2dyZXNzLWJhciA6c2hvdz1cImZvcm0uYnVzeVwiPjwvcHJvZ3Jlc3MtYmFyPlxuICAgICAgICA8Zm9ybSBAc3VibWl0LnByZXZlbnQ9XCJyZWdpc3RlclwiIEBrZXlkb3duPVwiZm9ybS5vbktleWRvd24oJGV2ZW50KVwiPlxuICAgICAgICAgIDx2LWNhcmQtdGl0bGUgcHJpbWFyeS10aXRsZT5cbiAgICAgICAgICAgIDxoMyBjbGFzcz1cImhlYWRsaW5lIG1iLTBcIj57eyAkdCgncmVnaXN0ZXInKSB9fTwvaDM+XG4gICAgICAgICAgPC92LWNhcmQtdGl0bGU+XG4gICAgICAgICAgPHYtY2FyZC10ZXh0PlxuXG4gICAgICAgICAgICA8IS0tIE5hbWUgLS0+XG4gICAgICAgICAgICA8dGV4dC1pbnB1dFxuICAgICAgICAgICAgICA6Zm9ybT1cImZvcm1cIlxuICAgICAgICAgICAgICA6bGFiZWw9XCIkdCgnbmFtZScpXCJcbiAgICAgICAgICAgICAgOnYtZXJyb3JzPVwiZXJyb3JzXCJcbiAgICAgICAgICAgICAgOnZhbHVlLnN5bmM9XCJmb3JtLm5hbWVcIlxuICAgICAgICAgICAgICBjb3VudGVyPVwiMzBcIlxuICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgIHYtdmFsaWRhdGU9XCIncmVxdWlyZWR8bWF4OjMwJ1wiXG4gICAgICAgICAgICA+PC90ZXh0LWlucHV0PlxuXG4gICAgICAgICAgICA8IS0tIEVtYWlsIC0tPlxuICAgICAgICAgICAgPGVtYWlsLWlucHV0XG4gICAgICAgICAgICAgIDpmb3JtPVwiZm9ybVwiXG4gICAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdlbWFpbCcpXCJcbiAgICAgICAgICAgICAgOnYtZXJyb3JzPVwiZXJyb3JzXCJcbiAgICAgICAgICAgICAgOnZhbHVlLnN5bmM9XCJmb3JtLmVtYWlsXCJcbiAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgdi12YWxpZGF0ZT1cIidyZXF1aXJlZHxlbWFpbCdcIlxuICAgICAgICAgICAgPjwvZW1haWwtaW5wdXQ+XG5cbiAgICAgICAgICAgIDwhLS0gUGFzc3dvcmQgLS0+XG4gICAgICAgICAgICA8cGFzc3dvcmQtaW5wdXRcbiAgICAgICAgICAgICAgOmZvcm09XCJmb3JtXCJcbiAgICAgICAgICAgICAgOmhpbnQ9XCIkdCgncGFzc3dvcmRfbGVuZ3RoX2hpbnQnKVwiXG4gICAgICAgICAgICAgIDp2LWVycm9ycz1cImVycm9yc1wiXG4gICAgICAgICAgICAgIDp2YWx1ZS5zeW5jPVwiZm9ybS5wYXNzd29yZFwiXG4gICAgICAgICAgICAgIHYtb246ZXllPVwiZXllID0gJGV2ZW50XCJcbiAgICAgICAgICAgICAgdi12YWxpZGF0ZT1cIidyZXF1aXJlZHxtaW46OCdcIlxuICAgICAgICAgICAgPjwvcGFzc3dvcmQtaW5wdXQ+XG5cbiAgICAgICAgICAgIDwhLS0gUGFzc3dvcmQgQ29uZmlybWF0aW9uIC0tPlxuICAgICAgICAgICAgPHBhc3N3b3JkLWlucHV0XG4gICAgICAgICAgICAgIDpmb3JtPVwiZm9ybVwiXG4gICAgICAgICAgICAgIDpoaWRlPVwiZXllXCJcbiAgICAgICAgICAgICAgOmxhYmVsPVwiJHQoJ2NvbmZpcm1fcGFzc3dvcmQnKVwiXG4gICAgICAgICAgICAgIDp2LWVycm9ycz1cImVycm9yc1wiXG4gICAgICAgICAgICAgIDp2YWx1ZS5zeW5jPVwiZm9ybS5wYXNzd29yZF9jb25maXJtYXRpb25cIlxuICAgICAgICAgICAgICBkYXRhLXZ2LWFzPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICBoaWRlLWljb249XCJ0cnVlXCJcbiAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkX2NvbmZpcm1hdGlvblwiXG4gICAgICAgICAgICAgIHYtdmFsaWRhdGU9XCIncmVxdWlyZWR8Y29uZmlybWVkOnBhc3N3b3JkJ1wiXG4gICAgICAgICAgICA+PC9wYXNzd29yZC1pbnB1dD5cblxuICAgICAgICAgIDwvdi1jYXJkLXRleHQ+XG5cbiAgICAgICAgICA8di1jYXJkLWFjdGlvbnM+XG4gICAgICAgICAgICA8c3VibWl0LWJ1dHRvbiA6Zm9ybT1cImZvcm1cIiA6bGFiZWw9XCIkdCgncmVnaXN0ZXInKVwiPjwvc3VibWl0LWJ1dHRvbj5cbiAgICAgICAgICA8L3YtY2FyZC1hY3Rpb25zPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L3YtY2FyZD5cbiAgICA8L3YtZmxleD5cbiAgPC92LWxheW91dD5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBGb3JtIGZyb20gJ3Zmb3JtJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdyZWdpc3Rlci12aWV3JyxcbiAgbWV0YUluZm8gKCkge1xuICAgIHJldHVybiB7IHRpdGxlOiB0aGlzLiR0KCdyZWdpc3RlcicpIH1cbiAgfSxcblxuICBkYXRhOiAoKSA9PiAoe1xuICAgIGZvcm06IG5ldyBGb3JtKHtcbiAgICAgIG5hbWU6ICcnLFxuICAgICAgZW1haWw6ICcnLFxuICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgcGFzc3dvcmRfY29uZmlybWF0aW9uOiAnJ1xuICAgIH0pLFxuICAgIGV5ZTogdHJ1ZVxuICB9KSxcblxuICBtZXRob2RzOiB7XG4gICAgYXN5bmMgcmVnaXN0ZXIgKCkge1xuICAgICAgaWYgKGF3YWl0IHRoaXMuZm9ybUhhc0Vycm9ycygpKSByZXR1cm5cblxuICAgICAgLy8gUmVnaXN0ZXIgdGhlIHVzZXIuXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHRoaXMuZm9ybS5wb3N0KCcvYXBpL3JlZ2lzdGVyJylcblxuICAgICAgLy8gTG9nIGluIHRoZSB1c2VyLlxuICAgICAgY29uc3QgeyBkYXRhOiB7IHRva2VuIH19ID0gYXdhaXQgdGhpcy5mb3JtLnBvc3QoJy9hcGkvbG9naW4nKVxuXG4gICAgICAvLyBTYXZlIHRoZSB0b2tlbi5cbiAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdzYXZlVG9rZW4nLCB7IHRva2VuIH0pXG5cbiAgICAgIC8vIFVwZGF0ZSB0aGUgdXNlci5cbiAgICAgIGF3YWl0IHRoaXMuJHN0b3JlLmRpc3BhdGNoKCd1cGRhdGVVc2VyJywgeyB1c2VyOiBkYXRhIH0pXG5cbiAgICAgIC8vIFJlZGlyZWN0IGhvbWUuXG4gICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7IG5hbWU6ICdob21lJyB9KVxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hdXRoL3JlZ2lzdGVyLnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ2LWxheW91dFwiLFxuICAgIHsgYXR0cnM6IHsgcm93OiBcIlwiIH0gfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICB4czEyOiBcIlwiLFxuICAgICAgICAgICAgc204OiBcIlwiLFxuICAgICAgICAgICAgXCJvZmZzZXQtc20yXCI6IFwiXCIsXG4gICAgICAgICAgICBsZzQ6IFwiXCIsXG4gICAgICAgICAgICBcIm9mZnNldC1sZzRcIjogXCJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWNhcmRcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJwcm9ncmVzcy1iYXJcIiwgeyBhdHRyczogeyBzaG93OiBfdm0uZm9ybS5idXN5IH0gfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZm9ybVwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIHN1Ym1pdDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICBfdm0ucmVnaXN0ZXIoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBrZXlkb3duOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uZm9ybS5vbktleWRvd24oJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInYtY2FyZC10aXRsZVwiLCB7IGF0dHJzOiB7IFwicHJpbWFyeS10aXRsZVwiOiBcIlwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImgzXCIsIHsgc3RhdGljQ2xhc3M6IFwiaGVhZGxpbmUgbWItMFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS4kdChcInJlZ2lzdGVyXCIpKSlcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtY2FyZC10ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRleHQtaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcInJlcXVpcmVkfG1heDozMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJ3JlcXVpcmVkfG1heDozMCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybTogX3ZtLmZvcm0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBfdm0uJHQoXCJuYW1lXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtZXJyb3JzXCI6IF92bS5lcnJvcnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVyOiBcIjMwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1cGRhdGU6dmFsdWVcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwibmFtZVwiLCAkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZW1haWwtaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcInJlcXVpcmVkfGVtYWlsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIncmVxdWlyZWR8ZW1haWwnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm06IF92bS5mb3JtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogX3ZtLiR0KFwiZW1haWxcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1lcnJvcnNcIjogX3ZtLmVycm9ycyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmVtYWlsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcInVwZGF0ZTp2YWx1ZVwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJlbWFpbFwiLCAkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwicGFzc3dvcmQtaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi12YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcInJlcXVpcmVkfG1pbjo4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIncmVxdWlyZWR8bWluOjgnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm06IF92bS5mb3JtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBoaW50OiBfdm0uJHQoXCJwYXNzd29yZF9sZW5ndGhfaGludFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWVycm9yc1wiOiBfdm0uZXJyb3JzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0ucGFzc3dvcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcInVwZGF0ZTp2YWx1ZVwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJwYXNzd29yZFwiLCAkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV5ZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmV5ZSA9ICRldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInBhc3N3b3JkLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJyZXF1aXJlZHxjb25maXJtZWQ6cGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIidyZXF1aXJlZHxjb25maXJtZWQ6cGFzc3dvcmQnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm06IF92bS5mb3JtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlOiBfdm0uZXllLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogX3ZtLiR0KFwiY29uZmlybV9wYXNzd29yZFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWVycm9yc1wiOiBfdm0uZXJyb3JzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0ucGFzc3dvcmRfY29uZmlybWF0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdnYtYXNcIjogXCJwYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImhpZGUtaWNvblwiOiBcInRydWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJwYXNzd29yZF9jb25maXJtYXRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidXBkYXRlOnZhbHVlXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInBhc3N3b3JkX2NvbmZpcm1hdGlvblwiLCAkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtY2FyZC1hY3Rpb25zXCIsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInN1Ym1pdC1idXR0b25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZm9ybTogX3ZtLmZvcm0sIGxhYmVsOiBfdm0uJHQoXCJyZWdpc3RlclwiKSB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LWEzYWE5MTQ2XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTMuNy4xQHZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtYTNhYTkxNDZcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxMy43LjFAdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hdXRoL3JlZ2lzdGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjkyXG4vLyBtb2R1bGUgY2h1bmtzID0gOCJdLCJzb3VyY2VSb290IjoiIn0=
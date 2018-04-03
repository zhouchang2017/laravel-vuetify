webpackJsonp([21],{

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(248)
/* template */
var __vue_template__ = __webpack_require__(249)
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
Component.options.__file = "resources/assets/js/pages/auth/password/email.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-45f9b03c", Component.options)
  } else {
    hotAPI.reload("data-v-45f9b03c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 248:
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



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'email-view',

  metaInfo: function metaInfo() {
    return { title: this.$t('reset_password') };
  },


  data: function data() {
    return {
      form: new __WEBPACK_IMPORTED_MODULE_1_vform___default.a({
        email: ''
      })
    };
  },

  methods: {
    send: function send() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var _ref, data;

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
                return _this.form.post('/api/password/email');

              case 6:
                _ref = _context.sent;
                data = _ref.data;


                _this.$store.dispatch('message/responseMessage', {
                  type: 'success',
                  text: data.status
                });

                _this.$router.push({ name: 'welcome' });

              case 10:
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

/***/ 249:
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
                      return _vm.send($event)
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
                          label: _vm.$t("send_password_reset_link")
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
    require("vue-hot-reload-api")      .rerender("data-v-45f9b03c", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2F1dGgvcGFzc3dvcmQvZW1haWwudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2F1dGgvcGFzc3dvcmQvZW1haWwudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYXV0aC9wYXNzd29yZC9lbWFpbC52dWU/MTFhNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLDRDQUFrUztBQUNsUztBQUNBLDhDQUFzTDtBQUN0TDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7O0FBRUE7UUFHQTs7Z0NBQ0E7NEJBQ0E7QUFFQTs7Ozs7O2VBTUE7QUFKQTtBQURBOzs7OztBQU9BOzs7Ozs7Ozs7OzZCQUVBOzs7Ozs7Ozs7Ozs7dUNBRUE7Ozs7Ozs7O3dCQUVBOzZCQUdBO0FBSkE7OzJDQUtBOzs7Ozs7Ozs7QUFFQTtBQWJBO0FBYkEsRzs7Ozs7OztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLFNBQVMsVUFBVSxFQUFFO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsU0FBUyxzQkFBc0IsRUFBRTtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0Esc0NBQXNDLFNBQVMsc0JBQXNCLEVBQUU7QUFDdkUsOEJBQThCLCtCQUErQjtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsImZpbGUiOiJqcy8yMS4wY2U3NjAwMDllYzg5MDZhZWQwNS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XSxcXFwic3RhZ2UtMlxcXCJdLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9lbWFpbC52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTQ1ZjliMDNjXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vZW1haWwudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYXV0aC9wYXNzd29yZC9lbWFpbC52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNDVmOWIwM2NcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi00NWY5YjAzY1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hdXRoL3Bhc3N3b3JkL2VtYWlsLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMjEiLCI8dGVtcGxhdGU+XG4gIDx2LWxheW91dCByb3c+XG4gICAgPHYtZmxleCB4czEyIHNtOCBvZmZzZXQtc20yIGxnNCBvZmZzZXQtbGc0PlxuICAgICAgPHYtY2FyZD5cbiAgICAgICAgPHByb2dyZXNzLWJhciA6c2hvdz1cImZvcm0uYnVzeVwiPjwvcHJvZ3Jlc3MtYmFyPlxuICAgICAgICA8Zm9ybSBAc3VibWl0LnByZXZlbnQ9XCJzZW5kXCIgQGtleWRvd249XCJmb3JtLm9uS2V5ZG93bigkZXZlbnQpXCI+XG4gICAgICAgICAgPHYtY2FyZC10aXRsZSBwcmltYXJ5LXRpdGxlPlxuICAgICAgICAgICAgPGgzIGNsYXNzPVwiaGVhZGxpbmUgbWItMFwiPnt7ICR0KCdyZXNldF9wYXNzd29yZCcpIH19PC9oMz5cbiAgICAgICAgICA8L3YtY2FyZC10aXRsZT5cbiAgICAgICAgICA8di1jYXJkLXRleHQ+XG5cbiAgICAgICAgICAgIDwhLS0gRW1haWwgLS0+XG4gICAgICAgICAgICA8ZW1haWwtaW5wdXRcbiAgICAgICAgICAgICAgOmZvcm09XCJmb3JtXCJcbiAgICAgICAgICAgICAgOmxhYmVsPVwiJHQoJ2VtYWlsJylcIlxuICAgICAgICAgICAgICA6di1lcnJvcnM9XCJlcnJvcnNcIlxuICAgICAgICAgICAgICA6dmFsdWUuc3luYz1cImZvcm0uZW1haWxcIlxuICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICB2LXZhbGlkYXRlPVwiJ3JlcXVpcmVkfGVtYWlsJ1wiXG4gICAgICAgICAgICA+PC9lbWFpbC1pbnB1dD5cblxuICAgICAgICAgIDwvdi1jYXJkLXRleHQ+XG4gICAgICAgICAgPHYtY2FyZC1hY3Rpb25zPlxuICAgICAgICAgICAgPHN1Ym1pdC1idXR0b24gOmZsYXQ9XCJ0cnVlXCIgOmZvcm09XCJmb3JtXCIgOmxhYmVsPVwiJHQoJ3NlbmRfcGFzc3dvcmRfcmVzZXRfbGluaycpXCI+PC9zdWJtaXQtYnV0dG9uPlxuICAgICAgICAgIDwvdi1jYXJkLWFjdGlvbnM+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvdi1jYXJkPlxuICAgIDwvdi1mbGV4PlxuICA8L3YtbGF5b3V0PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBGb3JtIGZyb20gJ3Zmb3JtJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdlbWFpbC12aWV3JyxcbiAgXG4gIG1ldGFJbmZvICgpIHtcbiAgICByZXR1cm4geyB0aXRsZTogdGhpcy4kdCgncmVzZXRfcGFzc3dvcmQnKSB9XG4gIH0sXG5cbiAgZGF0YTogKCkgPT4gKHtcbiAgICBmb3JtOiBuZXcgRm9ybSh7XG4gICAgICBlbWFpbDogJydcbiAgICB9KVxuICB9KSxcblxuICBtZXRob2RzOiB7XG4gICAgYXN5bmMgc2VuZCAoKSB7XG4gICAgICBpZiAoYXdhaXQgdGhpcy5mb3JtSGFzRXJyb3JzKCkpIHJldHVyblxuXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHRoaXMuZm9ybS5wb3N0KCcvYXBpL3Bhc3N3b3JkL2VtYWlsJylcblxuICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ21lc3NhZ2UvcmVzcG9uc2VNZXNzYWdlJywge1xuICAgICAgICB0eXBlOiAnc3VjY2VzcycsXG4gICAgICAgIHRleHQ6IGRhdGEuc3RhdHVzXG4gICAgICB9KVxuXG4gICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7IG5hbWU6ICd3ZWxjb21lJyB9KVxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hdXRoL3Bhc3N3b3JkL2VtYWlsLnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ2LWxheW91dFwiLFxuICAgIHsgYXR0cnM6IHsgcm93OiBcIlwiIH0gfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICB4czEyOiBcIlwiLFxuICAgICAgICAgICAgc204OiBcIlwiLFxuICAgICAgICAgICAgXCJvZmZzZXQtc20yXCI6IFwiXCIsXG4gICAgICAgICAgICBsZzQ6IFwiXCIsXG4gICAgICAgICAgICBcIm9mZnNldC1sZzRcIjogXCJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWNhcmRcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJwcm9ncmVzcy1iYXJcIiwgeyBhdHRyczogeyBzaG93OiBfdm0uZm9ybS5idXN5IH0gfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZm9ybVwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIHN1Ym1pdDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNlbmQoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBrZXlkb3duOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uZm9ybS5vbktleWRvd24oJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInYtY2FyZC10aXRsZVwiLCB7IGF0dHJzOiB7IFwicHJpbWFyeS10aXRsZVwiOiBcIlwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImgzXCIsIHsgc3RhdGljQ2xhc3M6IFwiaGVhZGxpbmUgbWItMFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS4kdChcInJlc2V0X3Bhc3N3b3JkXCIpKSlcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtY2FyZC10ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImVtYWlsLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdmFsaWRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJyZXF1aXJlZHxlbWFpbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJ3JlcXVpcmVkfGVtYWlsJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtOiBfdm0uZm9ybSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IF92bS4kdChcImVtYWlsXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtZXJyb3JzXCI6IF92bS5lcnJvcnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5lbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1cGRhdGU6dmFsdWVcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwiZW1haWxcIiwgJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWNhcmQtYWN0aW9uc1wiLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzdWJtaXQtYnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZsYXQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm06IF92bS5mb3JtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogX3ZtLiR0KFwic2VuZF9wYXNzd29yZF9yZXNldF9saW5rXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTQ1ZjliMDNjXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi00NWY5YjAzY1wiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYXV0aC9wYXNzd29yZC9lbWFpbC52dWVcbi8vIG1vZHVsZSBpZCA9IDI0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDIxIl0sInNvdXJjZVJvb3QiOiIifQ==
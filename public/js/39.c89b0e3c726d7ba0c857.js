webpackJsonp([39],{

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(163)
/* template */
var __vue_template__ = __webpack_require__(164)
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
Component.options.__file = "resources/assets/js/pages/settings/password.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3540833a", Component.options)
  } else {
    hotAPI.reload("data-v-3540833a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 163:
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



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'password-view',
  data: function data() {
    return {
      form: new __WEBPACK_IMPORTED_MODULE_1_vform___default.a({
        password: '',
        password_confirmation: ''
      }),
      eye: true
    };
  },

  methods: {
    update: function update() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
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

                _this.$emit('busy', true);

                _context.next = 7;
                return _this.form.patch('/api/settings/password');

              case 7:

                _this.form.reset();
                _this.$emit('busy', false);

                _this.$store.dispatch('message/responseMessage', {
                  type: 'success',
                  text: _this.$t('password_updated')
                });

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

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("v-card", { attrs: { flat: "" } }, [
    _c(
      "form",
      {
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.update($event)
          },
          keydown: function($event) {
            _vm.form.onKeydown($event)
          }
        }
      },
      [
        _c("v-card-title", { attrs: { "primary-title": "" } }, [
          _c("h5", { staticClass: "subheading mb-0" }, [
            _vm._v(_vm._s(_vm.$t("your_password")))
          ])
        ]),
        _vm._v(" "),
        _c(
          "v-card-text",
          [
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
              attrs: { flat: true, form: _vm.form, label: _vm.$t("update") }
            })
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
    require("vue-hot-reload-api")      .rerender("data-v-3540833a", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL3Bhc3N3b3JkLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zZXR0aW5ncy9wYXNzd29yZC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zZXR0aW5ncy9wYXNzd29yZC52dWU/NjA5NyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLDRDQUFrUztBQUNsUztBQUNBLDhDQUFtTDtBQUNuTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0VBOztBQUVBO1FBRUE7Ozs7a0JBR0E7K0JBRUE7QUFIQTtXQU1BO0FBUEE7Ozs7O0FBU0E7Ozs7Ozs7OzZCQUVBOzs7Ozs7Ozs7Ozs7b0NBRUE7Ozt3Q0FFQTs7OzsyQkFDQTtvQ0FFQTs7O3dCQUVBO2lDQUVBO0FBSEE7Ozs7Ozs7OztBQUtBO0FBaEJBO0FBVkEsRzs7Ozs7OztBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixTQUFTLFdBQVcsRUFBRTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLDRCQUE0QixTQUFTLHNCQUFzQixFQUFFO0FBQzdELG9CQUFvQixpQ0FBaUM7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6ImpzLzM5LmM4OWIwZTNjNzI2ZDdiYTBjODU3LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dLFxcXCJzdGFnZS0yXFxcIl0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV1dfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3Bhc3N3b3JkLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMzU0MDgzM2FcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9wYXNzd29yZC52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zZXR0aW5ncy9wYXNzd29yZC52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMzU0MDgzM2FcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0zNTQwODMzYVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zZXR0aW5ncy9wYXNzd29yZC52dWVcbi8vIG1vZHVsZSBpZCA9IDEyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDI2IDM5IiwiPHRlbXBsYXRlPlxuICA8di1jYXJkIGZsYXQ+XG4gICAgPGZvcm0gQHN1Ym1pdC5wcmV2ZW50PVwidXBkYXRlXCIgQGtleWRvd249XCJmb3JtLm9uS2V5ZG93bigkZXZlbnQpXCI+XG4gICAgICA8di1jYXJkLXRpdGxlIHByaW1hcnktdGl0bGU+XG4gICAgICAgIDxoNSBjbGFzcz1cInN1YmhlYWRpbmcgbWItMFwiPnt7ICR0KCd5b3VyX3Bhc3N3b3JkJykgfX08L2g1PlxuICAgICAgPC92LWNhcmQtdGl0bGU+XG4gICAgICA8di1jYXJkLXRleHQ+XG5cbiAgICAgICAgPCEtLSBQYXNzd29yZCAtLT5cbiAgICAgICAgPHBhc3N3b3JkLWlucHV0XG4gICAgICAgICAgOmZvcm09XCJmb3JtXCJcbiAgICAgICAgICA6aGludD1cIiR0KCdwYXNzd29yZF9sZW5ndGhfaGludCcpXCJcbiAgICAgICAgICA6di1lcnJvcnM9XCJlcnJvcnNcIlxuICAgICAgICAgIDp2YWx1ZS5zeW5jPVwiZm9ybS5wYXNzd29yZFwiXG4gICAgICAgICAgdi1vbjpleWU9XCJleWUgPSAkZXZlbnRcIlxuICAgICAgICAgIHYtdmFsaWRhdGU9XCIncmVxdWlyZWR8bWluOjgnXCJcbiAgICAgICAgPjwvcGFzc3dvcmQtaW5wdXQ+XG5cbiAgICAgICAgPCEtLSBQYXNzd29yZCBDb25maXJtYXRpb24gLS0+XG4gICAgICAgIDxwYXNzd29yZC1pbnB1dFxuICAgICAgICAgIDpmb3JtPVwiZm9ybVwiXG4gICAgICAgICAgOmhpZGU9XCJleWVcIlxuICAgICAgICAgIDpsYWJlbD1cIiR0KCdjb25maXJtX3Bhc3N3b3JkJylcIlxuICAgICAgICAgIDp2LWVycm9ycz1cImVycm9yc1wiXG4gICAgICAgICAgOnZhbHVlLnN5bmM9XCJmb3JtLnBhc3N3b3JkX2NvbmZpcm1hdGlvblwiXG4gICAgICAgICAgZGF0YS12di1hcz1cInBhc3N3b3JkXCJcbiAgICAgICAgICBoaWRlLWljb249XCJ0cnVlXCJcbiAgICAgICAgICBuYW1lPVwicGFzc3dvcmRfY29uZmlybWF0aW9uXCJcbiAgICAgICAgICB2LXZhbGlkYXRlPVwiJ3JlcXVpcmVkfGNvbmZpcm1lZDpwYXNzd29yZCdcIlxuICAgICAgICA+PC9wYXNzd29yZC1pbnB1dD5cblxuICAgICAgICA8IS0tIDxmb3JtLWZlZWRiYWNrIDpmb3JtPVwiZm9ybVwiIDp0ZXh0PVwiJHQoJ3Bhc3N3b3JkX3VwZGF0ZWQnKVwiPjwvZm9ybS1mZWVkYmFjaz4gLS0+XG5cbiAgICAgIDwvdi1jYXJkLXRleHQ+XG4gICAgICA8di1jYXJkLWFjdGlvbnM+XG4gICAgICAgIDxzdWJtaXQtYnV0dG9uIDpmbGF0PVwidHJ1ZVwiIDpmb3JtPVwiZm9ybVwiIDpsYWJlbD1cIiR0KCd1cGRhdGUnKVwiPjwvc3VibWl0LWJ1dHRvbj5cbiAgICAgIDwvdi1jYXJkLWFjdGlvbnM+XG4gICAgPC9mb3JtPlxuICA8L3YtY2FyZD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgRm9ybSBmcm9tICd2Zm9ybSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAncGFzc3dvcmQtdmlldycsXG4gIGRhdGE6ICgpID0+ICh7XG4gICAgZm9ybTogbmV3IEZvcm0oe1xuICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgcGFzc3dvcmRfY29uZmlybWF0aW9uOiAnJ1xuICAgIH0pLFxuICAgIGV5ZTogdHJ1ZVxuICB9KSxcblxuICBtZXRob2RzOiB7XG4gICAgYXN5bmMgdXBkYXRlICgpIHtcbiAgICAgIGlmIChhd2FpdCB0aGlzLmZvcm1IYXNFcnJvcnMoKSkgcmV0dXJuXG5cbiAgICAgIHRoaXMuJGVtaXQoJ2J1c3knLCB0cnVlKVxuXG4gICAgICBhd2FpdCB0aGlzLmZvcm0ucGF0Y2goJy9hcGkvc2V0dGluZ3MvcGFzc3dvcmQnKVxuXG4gICAgICB0aGlzLmZvcm0ucmVzZXQoKVxuICAgICAgdGhpcy4kZW1pdCgnYnVzeScsIGZhbHNlKVxuXG4gICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnbWVzc2FnZS9yZXNwb25zZU1lc3NhZ2UnLCB7XG4gICAgICAgIHR5cGU6ICdzdWNjZXNzJyxcbiAgICAgICAgdGV4dDogdGhpcy4kdCgncGFzc3dvcmRfdXBkYXRlZCcpXG4gICAgICB9KVxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zZXR0aW5ncy9wYXNzd29yZC52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwidi1jYXJkXCIsIHsgYXR0cnM6IHsgZmxhdDogXCJcIiB9IH0sIFtcbiAgICBfYyhcbiAgICAgIFwiZm9ybVwiLFxuICAgICAge1xuICAgICAgICBvbjoge1xuICAgICAgICAgIHN1Ym1pdDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgcmV0dXJuIF92bS51cGRhdGUoJGV2ZW50KVxuICAgICAgICAgIH0sXG4gICAgICAgICAga2V5ZG93bjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICBfdm0uZm9ybS5vbktleWRvd24oJGV2ZW50KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJ2LWNhcmQtdGl0bGVcIiwgeyBhdHRyczogeyBcInByaW1hcnktdGl0bGVcIjogXCJcIiB9IH0sIFtcbiAgICAgICAgICBfYyhcImg1XCIsIHsgc3RhdGljQ2xhc3M6IFwic3ViaGVhZGluZyBtYi0wXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJ5b3VyX3Bhc3N3b3JkXCIpKSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJ2LWNhcmQtdGV4dFwiLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwicGFzc3dvcmQtaW5wdXRcIiwge1xuICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogXCJyZXF1aXJlZHxtaW46OFwiLFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIncmVxdWlyZWR8bWluOjgnXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgZm9ybTogX3ZtLmZvcm0sXG4gICAgICAgICAgICAgICAgaGludDogX3ZtLiR0KFwicGFzc3dvcmRfbGVuZ3RoX2hpbnRcIiksXG4gICAgICAgICAgICAgICAgXCJ2LWVycm9yc1wiOiBfdm0uZXJyb3JzLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5wYXNzd29yZFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIFwidXBkYXRlOnZhbHVlXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwicGFzc3dvcmRcIiwgJGV2ZW50KVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXllOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIF92bS5leWUgPSAkZXZlbnRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwicGFzc3dvcmQtaW5wdXRcIiwge1xuICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogXCJyZXF1aXJlZHxjb25maXJtZWQ6cGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJ3JlcXVpcmVkfGNvbmZpcm1lZDpwYXNzd29yZCdcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBmb3JtOiBfdm0uZm9ybSxcbiAgICAgICAgICAgICAgICBoaWRlOiBfdm0uZXllLFxuICAgICAgICAgICAgICAgIGxhYmVsOiBfdm0uJHQoXCJjb25maXJtX3Bhc3N3b3JkXCIpLFxuICAgICAgICAgICAgICAgIFwidi1lcnJvcnNcIjogX3ZtLmVycm9ycyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0ucGFzc3dvcmRfY29uZmlybWF0aW9uLFxuICAgICAgICAgICAgICAgIFwiZGF0YS12di1hc1wiOiBcInBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgXCJoaWRlLWljb25cIjogXCJ0cnVlXCIsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJwYXNzd29yZF9jb25maXJtYXRpb25cIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIFwidXBkYXRlOnZhbHVlXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwicGFzc3dvcmRfY29uZmlybWF0aW9uXCIsICRldmVudClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwidi1jYXJkLWFjdGlvbnNcIixcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcInN1Ym1pdC1idXR0b25cIiwge1xuICAgICAgICAgICAgICBhdHRyczogeyBmbGF0OiB0cnVlLCBmb3JtOiBfdm0uZm9ybSwgbGFiZWw6IF92bS4kdChcInVwZGF0ZVwiKSB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApXG4gICAgICBdLFxuICAgICAgMVxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtMzU0MDgzM2FcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTM1NDA4MzNhXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zZXR0aW5ncy9wYXNzd29yZC52dWVcbi8vIG1vZHVsZSBpZCA9IDE2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDI2IDM5Il0sInNvdXJjZVJvb3QiOiIifQ==
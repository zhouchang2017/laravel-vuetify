webpackJsonp([16],{

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(165)
/* template */
var __vue_template__ = __webpack_require__(166)
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
Component.options.__file = "resources/assets/js/pages/settings/profile.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7ec4575a", Component.options)
  } else {
    hotAPI.reload("data-v-7ec4575a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vform__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vform___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vform__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(9);


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




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'profile-view',
  data: function data() {
    return {
      form: new __WEBPACK_IMPORTED_MODULE_1_vform___default.a({
        name: '',
        email: ''
      })
    };
  },

  computed: Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["b" /* mapGetters */])({
    user: 'authUser'
  }),

  created: function created() {
    var _this = this;

    // Fill the form with user data.
    this.form.keys().forEach(function (key) {
      _this.form[key] = _this.user[key];
    });
  },


  methods: {
    update: function update() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var _ref, data;

        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this2.formHasErrors();

              case 2:
                if (!_context.sent) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt('return');

              case 4:

                _this2.$emit('busy', true);

                _context.next = 7;
                return _this2.form.patch('/api/settings/profile');

              case 7:
                _ref = _context.sent;
                data = _ref.data;
                _context.next = 11;
                return _this2.$store.dispatch('updateUser', { user: data });

              case 11:
                _this2.$emit('busy', false);

                _this2.$store.dispatch('message/responseMessage', {
                  type: 'success',
                  text: _this2.$t('info_updated')
                });

              case 13:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }))();
    }
  }
});

/***/ }),

/***/ 166:
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
            _vm._v(_vm._s(_vm.$t("your_info")))
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
    require("vue-hot-reload-api")      .rerender("data-v-7ec4575a", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL3Byb2ZpbGUudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL3Byb2ZpbGUudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MvcHJvZmlsZS52dWU/MDMwMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLDRDQUFrUztBQUNsUztBQUNBLDhDQUFtTDtBQUNuTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7O0FBRUE7UUFFQTs7OztjQUdBO2VBSUE7QUFMQTtBQURBOzs7O1VBVUE7QUFIQTs7O0FBSUE7O0FBQ0E7NENBQ0E7bUNBQ0E7QUFDQTtBQUVBOzs7OztBQUVBOzs7Ozs7Ozs7OzhCQUVBOzs7Ozs7Ozs7Ozs7cUNBRUE7Ozt5Q0FFQTs7Ozs7O29FQUNBOzs7cUNBRUE7Ozt3QkFFQTtrQ0FFQTtBQUhBOzs7Ozs7Ozs7QUFLQTtBQWhCQTtBQXBCQSxHOzs7Ozs7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFNBQVMsV0FBVyxFQUFFO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsNEJBQTRCLFNBQVMsc0JBQXNCLEVBQUU7QUFDN0Qsb0JBQW9CLGlDQUFpQztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsImZpbGUiOiJqcy8xNi4wODkyNDU1YmRmNWVmZjNkNWY4OS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XSxcXFwic3RhZ2UtMlxcXCJdLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9wcm9maWxlLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtN2VjNDU3NWFcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9wcm9maWxlLnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3NldHRpbmdzL3Byb2ZpbGUudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTdlYzQ1NzVhXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtN2VjNDU3NWFcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MvcHJvZmlsZS52dWVcbi8vIG1vZHVsZSBpZCA9IDEyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDQgMTYiLCI8dGVtcGxhdGU+XG4gIDx2LWNhcmQgZmxhdD5cbiAgICA8Zm9ybSBAc3VibWl0LnByZXZlbnQ9XCJ1cGRhdGVcIiBAa2V5ZG93bj1cImZvcm0ub25LZXlkb3duKCRldmVudClcIj5cbiAgICAgIDx2LWNhcmQtdGl0bGUgcHJpbWFyeS10aXRsZT5cbiAgICAgICAgPGg1IGNsYXNzPVwic3ViaGVhZGluZyBtYi0wXCI+e3sgJHQoJ3lvdXJfaW5mbycpIH19PC9oNT5cbiAgICAgIDwvdi1jYXJkLXRpdGxlPlxuICAgICAgPHYtY2FyZC10ZXh0PlxuXG4gICAgICAgIDwhLS0gTmFtZSAtLT5cbiAgICAgICAgPHRleHQtaW5wdXRcbiAgICAgICAgICA6Zm9ybT1cImZvcm1cIlxuICAgICAgICAgIDpsYWJlbD1cIiR0KCduYW1lJylcIlxuICAgICAgICAgIDp2LWVycm9ycz1cImVycm9yc1wiXG4gICAgICAgICAgOnZhbHVlLnN5bmM9XCJmb3JtLm5hbWVcIlxuICAgICAgICAgIGNvdW50ZXI9XCIzMFwiXG4gICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgIHYtdmFsaWRhdGU9XCIncmVxdWlyZWR8bWF4OjMwJ1wiXG4gICAgICAgID48L3RleHQtaW5wdXQ+XG5cbiAgICAgICAgPCEtLSBFbWFpbCAtLT5cbiAgICAgICAgPGVtYWlsLWlucHV0XG4gICAgICAgICAgOmZvcm09XCJmb3JtXCJcbiAgICAgICAgICA6bGFiZWw9XCIkdCgnZW1haWwnKVwiXG4gICAgICAgICAgOnYtZXJyb3JzPVwiZXJyb3JzXCJcbiAgICAgICAgICA6dmFsdWUuc3luYz1cImZvcm0uZW1haWxcIlxuICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgdi12YWxpZGF0ZT1cIidyZXF1aXJlZHxlbWFpbCdcIlxuICAgICAgICA+PC9lbWFpbC1pbnB1dD5cblxuICAgICAgPC92LWNhcmQtdGV4dD5cbiAgICAgIDx2LWNhcmQtYWN0aW9ucz5cbiAgICAgICAgPHN1Ym1pdC1idXR0b24gOmZsYXQ9XCJ0cnVlXCIgOmZvcm09XCJmb3JtXCIgOmxhYmVsPVwiJHQoJ3VwZGF0ZScpXCI+PC9zdWJtaXQtYnV0dG9uPlxuICAgICAgPC92LWNhcmQtYWN0aW9ucz5cbiAgICA8L2Zvcm0+XG4gIDwvdi1jYXJkPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBGb3JtIGZyb20gJ3Zmb3JtJ1xuaW1wb3J0IHsgbWFwR2V0dGVycyB9IGZyb20gJ3Z1ZXgnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ3Byb2ZpbGUtdmlldycsXG4gIGRhdGE6ICgpID0+ICh7XG4gICAgZm9ybTogbmV3IEZvcm0oe1xuICAgICAgbmFtZTogJycsXG4gICAgICBlbWFpbDogJydcbiAgICB9KVxuICB9KSxcblxuICBjb21wdXRlZDogbWFwR2V0dGVycyh7XG4gICAgdXNlcjogJ2F1dGhVc2VyJ1xuICB9KSxcblxuICBjcmVhdGVkICgpIHtcbiAgICAvLyBGaWxsIHRoZSBmb3JtIHdpdGggdXNlciBkYXRhLlxuICAgIHRoaXMuZm9ybS5rZXlzKCkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgdGhpcy5mb3JtW2tleV0gPSB0aGlzLnVzZXJba2V5XVxuICAgIH0pXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGFzeW5jIHVwZGF0ZSAoKSB7XG4gICAgICBpZiAoYXdhaXQgdGhpcy5mb3JtSGFzRXJyb3JzKCkpIHJldHVyblxuXG4gICAgICB0aGlzLiRlbWl0KCdidXN5JywgdHJ1ZSlcblxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCB0aGlzLmZvcm0ucGF0Y2goJy9hcGkvc2V0dGluZ3MvcHJvZmlsZScpXG5cbiAgICAgIGF3YWl0IHRoaXMuJHN0b3JlLmRpc3BhdGNoKCd1cGRhdGVVc2VyJywgeyB1c2VyOiBkYXRhIH0pXG4gICAgICB0aGlzLiRlbWl0KCdidXN5JywgZmFsc2UpXG5cbiAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdtZXNzYWdlL3Jlc3BvbnNlTWVzc2FnZScsIHtcbiAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxuICAgICAgICB0ZXh0OiB0aGlzLiR0KCdpbmZvX3VwZGF0ZWQnKVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zZXR0aW5ncy9wcm9maWxlLnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJ2LWNhcmRcIiwgeyBhdHRyczogeyBmbGF0OiBcIlwiIH0gfSwgW1xuICAgIF9jKFxuICAgICAgXCJmb3JtXCIsXG4gICAgICB7XG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgc3VibWl0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICByZXR1cm4gX3ZtLnVwZGF0ZSgkZXZlbnQpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBrZXlkb3duOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgIF92bS5mb3JtLm9uS2V5ZG93bigkZXZlbnQpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgW1xuICAgICAgICBfYyhcInYtY2FyZC10aXRsZVwiLCB7IGF0dHJzOiB7IFwicHJpbWFyeS10aXRsZVwiOiBcIlwiIH0gfSwgW1xuICAgICAgICAgIF9jKFwiaDVcIiwgeyBzdGF0aWNDbGFzczogXCJzdWJoZWFkaW5nIG1iLTBcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS4kdChcInlvdXJfaW5mb1wiKSkpXG4gICAgICAgICAgXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwidi1jYXJkLXRleHRcIixcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcInRleHQtaW5wdXRcIiwge1xuICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogXCJyZXF1aXJlZHxtYXg6MzBcIixcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJ3JlcXVpcmVkfG1heDozMCdcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBmb3JtOiBfdm0uZm9ybSxcbiAgICAgICAgICAgICAgICBsYWJlbDogX3ZtLiR0KFwibmFtZVwiKSxcbiAgICAgICAgICAgICAgICBcInYtZXJyb3JzXCI6IF92bS5lcnJvcnMsXG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLm5hbWUsXG4gICAgICAgICAgICAgICAgY291bnRlcjogXCIzMFwiLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwibmFtZVwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgXCJ1cGRhdGU6dmFsdWVcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJuYW1lXCIsICRldmVudClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZW1haWwtaW5wdXRcIiwge1xuICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXZhbGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogXCJyZXF1aXJlZHxlbWFpbFwiLFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIncmVxdWlyZWR8ZW1haWwnXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgZm9ybTogX3ZtLmZvcm0sXG4gICAgICAgICAgICAgICAgbGFiZWw6IF92bS4kdChcImVtYWlsXCIpLFxuICAgICAgICAgICAgICAgIFwidi1lcnJvcnNcIjogX3ZtLmVycm9ycyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uZW1haWwsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJlbWFpbFwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgXCJ1cGRhdGU6dmFsdWVcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJlbWFpbFwiLCAkZXZlbnQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcInYtY2FyZC1hY3Rpb25zXCIsXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJzdWJtaXQtYnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHsgZmxhdDogdHJ1ZSwgZm9ybTogX3ZtLmZvcm0sIGxhYmVsOiBfdm0uJHQoXCJ1cGRhdGVcIikgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTdlYzQ1NzVhXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi03ZWM0NTc1YVwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MvcHJvZmlsZS52dWVcbi8vIG1vZHVsZSBpZCA9IDE2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDQgMTYiXSwic291cmNlUm9vdCI6IiJ9
webpackJsonp([2],{

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

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(147)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(149)
/* template */
var __vue_template__ = __webpack_require__(150)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7c5b266c"
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
Component.options.__file = "resources/assets/js/components/UploadButton.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7c5b266c", Component.options)
  } else {
    hotAPI.reload("data-v-7c5b266c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(148);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("b0b819ec", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7c5b266c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UploadButton.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7c5b266c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UploadButton.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(true);
// imports


// module
exports.push([module.i, "\ninput[type=file][data-v-7c5b266c] {\n    position: absolute;\n    left: -99999px;\n}\n.loading[data-v-7c5b266c] {\n    opacity: 0.4;\n}\n", "", {"version":3,"sources":["/Users/changzhou/code/laravel-vuetify/resources/assets/js/components/resources/assets/js/components/UploadButton.vue"],"names":[],"mappings":";AA2JA;IACA,mBAAA;IACA,eAAA;CACA;AAEA;IACA,aAAA;CACA","file":"UploadButton.vue","sourcesContent":["<template>\n    <div>\n        <v-card>\n            <v-card-media contain :class=\"{'loading':loading}\" v-show=\"imageUrl\" ref=\"imageUrl\" style=\"cursor: pointer;\"\n                          @click.stop=\"dialog = true\" :src=\"imageUrl\" height=\"200px\">\n            </v-card-media>\n\n            <v-btn large\n                   block\n                   raised\n                   color=\"info\"\n                   @click=\"onPickFile\"\n                   v-show=\"progress === 0\">\n                {{ selectLabel }}\n            </v-btn>\n            <v-progress-linear v-show=\"loading\" height=\"40\" class=\"my-0\"\n                               v-model=\"progress\" :color=\"color\"></v-progress-linear>\n            <v-btn large block raised class=\"error\" @click=\"removeFile\" v-show=\"progress === 100\">\n                {{ removeLabel }}\n            </v-btn>\n            <input\n                    type=\"file\"\n                    ref=\"image\"\n                    name=\"image\"\n                    :accept=\"accept\"\n                    @change=\"onFilePicked\"\n            >\n        </v-card>\n        <v-dialog fullscreen v-model=\"dialog\" max-width=\"100%\" lazy>\n            <v-card full-height>\n                <v-card-title>\n                    <span>图片预览</span>\n                    <v-spacer></v-spacer>\n                    <v-btn icon @click.stop=\"dialog = false\">\n\n                        <v-icon>clear</v-icon>\n                    </v-btn>\n                </v-card-title>\n                <v-card-media contain :class=\"{'loading':loading}\"\n                              :src=\"imageUrl\" :height=\"dialogHeight\">\n                </v-card-media>\n                <v-card-actions>\n                    <v-spacer></v-spacer>\n                    <v-btn flat @click.stop=\"removeFile\">Delete</v-btn>\n                    <v-btn color=\"primary\" flat @click.stop=\"dialog=false\">Close</v-btn>\n                </v-card-actions>\n            </v-card>\n        </v-dialog>\n    </div>\n</template>\n\n<script>\n  export default {\n    props: {\n      value: {\n        type: String\n      },\n      accept: {\n        type: String,\n        default: '*'\n      },\n      selectLabel: {\n        type: String,\n        default: 'Select an image'\n      },\n      removeLabel: {\n        type: String,\n        default: 'Remove'\n      }\n    },\n\n    data () {\n      return {\n        imageUrl: '',\n        progress: 0,\n        loading: false,\n        dialog: false\n      }\n    },\n\n    watch: {\n      // value (v) {\n      //   this.imageUrl = v\n      // }\n    },\n\n    mounted () {\n      this.imageUrl = ''\n    },\n    computed: {\n      dialogHeight () {\n        return this.$vuetify.breakpoint.height - 100\n      },\n      color () {\n        return ['error', 'warning', 'success'][Math.floor(this.progress / 40)]\n      }\n    },\n    methods: {\n\n      onPickFile () {\n        this.$refs.image.click()\n      },\n\n      async onFilePicked (event) {\n        const files = event.target.files || event.dataTransfer.files\n\n        if (files && files[0]) {\n          let filename = files[0].name\n\n          if (filename && filename.lastIndexOf('.') <= 0) {\n            return //return alert('Please add a valid image!')\n          }\n\n          const fileReader = new FileReader()\n          fileReader.addEventListener('load', () => {\n            this.imageUrl = fileReader.result\n          })\n          fileReader.readAsDataURL(files[0])\n\n          let path = await this.upload(files[0])\n          // this.imageUrl = path\n          this.$emit('getPath', path)\n        }\n      },\n\n      removeFile () {\n        this.imageUrl = ''\n        this.progress = 0\n        this.dialog = false\n        this.$store.dispatch('message/responseMessage', {text: this.$t('remove_img_success')})\n      },\n\n      async upload (e) {\n        let formData = new FormData()\n        let config = {\n          headers: {\n            'Content-Type': 'multipart/form-data'\n          },\n          onUploadProgress: progressEvent => {\n            this.progress = Math.round((\n              progressEvent.loaded * 100) / progressEvent.total)\n            if (this.progress >= 100) this.loading = false\n          }\n        }\n        formData.append('avatar', e)\n        this.loading = true\n        let {data} = await this.$store.dispatch('file/uploadImage', {formData, config})\n        this.loading = false\n        return data\n      }\n    }\n  }\n</script>\n\n<style scoped>\n    input[type=file] {\n        position: absolute;\n        left: -99999px;\n    }\n\n    .loading {\n        opacity: 0.4;\n    }\n</style>"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 149:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    value: {
      type: String
    },
    accept: {
      type: String,
      default: '*'
    },
    selectLabel: {
      type: String,
      default: 'Select an image'
    },
    removeLabel: {
      type: String,
      default: 'Remove'
    }
  },

  data: function data() {
    return {
      imageUrl: '',
      progress: 0,
      loading: false,
      dialog: false
    };
  },


  watch: {
    // value (v) {
    //   this.imageUrl = v
    // }
  },

  mounted: function mounted() {
    this.imageUrl = '';
  },

  computed: {
    dialogHeight: function dialogHeight() {
      return this.$vuetify.breakpoint.height - 100;
    },
    color: function color() {
      return ['error', 'warning', 'success'][Math.floor(this.progress / 40)];
    }
  },
  methods: {
    onPickFile: function onPickFile() {
      this.$refs.image.click();
    },
    onFilePicked: function onFilePicked(event) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var files, filename, fileReader, path;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                files = event.target.files || event.dataTransfer.files;

                if (!(files && files[0])) {
                  _context.next = 12;
                  break;
                }

                filename = files[0].name;

                if (!(filename && filename.lastIndexOf('.') <= 0)) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt('return');

              case 5:
                fileReader = new FileReader();

                fileReader.addEventListener('load', function () {
                  _this.imageUrl = fileReader.result;
                });
                fileReader.readAsDataURL(files[0]);

                _context.next = 10;
                return _this.upload(files[0]);

              case 10:
                path = _context.sent;

                // this.imageUrl = path
                _this.$emit('getPath', path);

              case 12:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    removeFile: function removeFile() {
      this.imageUrl = '';
      this.progress = 0;
      this.dialog = false;
      this.$store.dispatch('message/responseMessage', { text: this.$t('remove_img_success') });
    },
    upload: function upload(e) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var formData, config, _ref, data;

        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                formData = new FormData();
                config = {
                  headers: {
                    'Content-Type': 'multipart/form-data'
                  },
                  onUploadProgress: function onUploadProgress(progressEvent) {
                    _this2.progress = Math.round(progressEvent.loaded * 100 / progressEvent.total);
                    if (_this2.progress >= 100) _this2.loading = false;
                  }
                };

                formData.append('avatar', e);
                _this2.loading = true;
                _context2.next = 6;
                return _this2.$store.dispatch('file/uploadImage', { formData: formData, config: config });

              case 6:
                _ref = _context2.sent;
                data = _ref.data;

                _this2.loading = false;
                return _context2.abrupt('return', data);

              case 10:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    }
  }
});

/***/ }),

/***/ 150:
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
          _c("v-card-media", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.imageUrl,
                expression: "imageUrl"
              }
            ],
            ref: "imageUrl",
            class: { loading: _vm.loading },
            staticStyle: { cursor: "pointer" },
            attrs: { contain: "", src: _vm.imageUrl, height: "200px" },
            on: {
              click: function($event) {
                $event.stopPropagation()
                _vm.dialog = true
              }
            }
          }),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.progress === 0,
                  expression: "progress === 0"
                }
              ],
              attrs: { large: "", block: "", raised: "", color: "info" },
              on: { click: _vm.onPickFile }
            },
            [_vm._v("\n            " + _vm._s(_vm.selectLabel) + "\n        ")]
          ),
          _vm._v(" "),
          _c("v-progress-linear", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.loading,
                expression: "loading"
              }
            ],
            staticClass: "my-0",
            attrs: { height: "40", color: _vm.color },
            model: {
              value: _vm.progress,
              callback: function($$v) {
                _vm.progress = $$v
              },
              expression: "progress"
            }
          }),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.progress === 100,
                  expression: "progress === 100"
                }
              ],
              staticClass: "error",
              attrs: { large: "", block: "", raised: "" },
              on: { click: _vm.removeFile }
            },
            [_vm._v("\n            " + _vm._s(_vm.removeLabel) + "\n        ")]
          ),
          _vm._v(" "),
          _c("input", {
            ref: "image",
            attrs: { type: "file", name: "image", accept: _vm.accept },
            on: { change: _vm.onFilePicked }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { fullscreen: "", "max-width": "100%", lazy: "" },
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
            { attrs: { "full-height": "" } },
            [
              _c(
                "v-card-title",
                [
                  _c("span", [_vm._v("图片预览")]),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { icon: "" },
                      on: {
                        click: function($event) {
                          $event.stopPropagation()
                          _vm.dialog = false
                        }
                      }
                    },
                    [_c("v-icon", [_vm._v("clear")])],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("v-card-media", {
                class: { loading: _vm.loading },
                attrs: {
                  contain: "",
                  src: _vm.imageUrl,
                  height: _vm.dialogHeight
                }
              }),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { flat: "" },
                      on: {
                        click: function($event) {
                          $event.stopPropagation()
                          return _vm.removeFile($event)
                        }
                      }
                    },
                    [_vm._v("Delete")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "primary", flat: "" },
                      on: {
                        click: function($event) {
                          $event.stopPropagation()
                          _vm.dialog = false
                        }
                      }
                    },
                    [_vm._v("Close")]
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
    require("vue-hot-reload-api")      .rerender("data-v-7c5b266c", module.exports)
  }
}

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
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"settings.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_UploadButton__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_UploadButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_UploadButton__);


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
//
//
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
  name: 'nuxt_setting',
  data: function data() {
    return {
      tabs: 0,
      loaded: false,
      name: this.$t('nuxt_settings'),
      nuxts: [],
      loading: false,
      valid: true,
      titleRules: [function (v) {
        return !!v || 'Title is required';
      }, function (v) {
        return v && v.length <= 64 || 'Title must be less than 64 characters';
      }]
    };
  },

  components: {
    UploadButton: __WEBPACK_IMPORTED_MODULE_1__components_UploadButton___default.a
  },
  methods: {
    fetch: function fetch() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var queryBuild, nuxts;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.loading = true;
                queryBuild = { limit: 'all' };

                queryBuild.sortedBy = 'desc';
                queryBuild.orderBy = 'created_at';
                _context.next = 6;
                return _this.$store.dispatch('nuxt/index', queryBuild);

              case 6:
                nuxts = _context.sent;

                _this.$set(_this, 'nuxts', nuxts);
                _this.loading = false;

              case 9:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    submit: function submit() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!_this2.$refs.form.validate()) {
                  _context2.next = 5;
                  break;
                }

                _context2.next = 3;
                return _this2.$store.dispatch('post/store', { formDate: _this2.formDate });

              case 3:
                _this2.$store.dispatch('message/responseMessage', {
                  text: _this2.$t('post_create_success')
                });
                _this2.$router.replace({ name: 'post.index' });

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    },
    resetForm: function resetForm() {
      this.errorMessages = [];
      this.formHasErrors = false;
      this.$refs.form.reset();
    },
    getPath: function getPath(src, nuxt) {
      nuxt.formData.avatar = src;
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

              _this3.nuxts.forEach(function (item, index) {
                _this3.$set(_this3.nuxts[index], 'formData', {
                  avatar: '',
                  title: ''
                });
              });
              _this3.loaded = true;

            case 4:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, _this3);
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
    "v-card",
    [
      _c(
        "v-card-title",
        { staticClass: "grey lighten-4", attrs: { "primary-title": "" } },
        [_c("h3", { staticClass: "headline mb-0" }, [_vm._v(_vm._s(_vm.name))])]
      ),
      _vm._v(" "),
      _c("v-divider"),
      _vm._v(" "),
      _c(
        "v-toolbar",
        { attrs: { tabs: "", card: "" } },
        [
          _c("v-text-field", {
            staticClass: "mx-3",
            attrs: {
              "prepend-icon": "search",
              "append-icon": "mic",
              label: "Search",
              "solo-inverted": "",
              flat: ""
            }
          }),
          _vm._v(" "),
          _c(
            "v-tabs",
            {
              attrs: { slot: "extension", centered: "", "show-arrows": "" },
              slot: "extension",
              model: {
                value: _vm.tabs,
                callback: function($$v) {
                  _vm.tabs = $$v
                },
                expression: "tabs"
              }
            },
            [
              _c("v-tabs-slider", { attrs: { color: "primary" } }),
              _vm._v(" "),
              _vm._l(_vm.nuxts, function(nuxt) {
                return _c("v-tab", { key: nuxt.id }, [
                  _vm._v(
                    "\n                " + _vm._s(nuxt.name) + "\n            "
                  )
                ])
              })
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _vm.loaded
        ? _c(
            "v-tabs-items",
            {
              model: {
                value: _vm.tabs,
                callback: function($$v) {
                  _vm.tabs = $$v
                },
                expression: "tabs"
              }
            },
            _vm._l(_vm.nuxts, function(nuxt) {
              return _c(
                "v-tab-item",
                { key: nuxt.id },
                [
                  _c(
                    "v-form",
                    {
                      ref: "tab-" + nuxt.id + "form",
                      refInFor: true,
                      attrs: { "lazy-validation": "" },
                      model: {
                        value: _vm.valid,
                        callback: function($$v) {
                          _vm.valid = $$v
                        },
                        expression: "valid"
                      }
                    },
                    [
                      _c(
                        "v-card",
                        [
                          _c(
                            "v-card-title",
                            { attrs: { "primary-title": "" } },
                            [
                              _c("div", [
                                _c("div", { staticClass: "headline" }, [
                                  _vm._v("Index Navigation Link")
                                ]),
                                _vm._v(" "),
                                _c("span", { staticClass: "grey--text" }, [
                                  _vm._v("设置在客户端首页发、导航栏链接")
                                ])
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c("v-divider", { staticClass: "mt-5" }),
                          _vm._v(" "),
                          _c(
                            "v-card-title",
                            { attrs: { "primary-title": "" } },
                            [
                              _c("div", [
                                _c("div", { staticClass: "headline" }, [
                                  _vm._v("Banner")
                                ]),
                                _vm._v(" "),
                                _c("span", { staticClass: "grey--text" }, [
                                  _vm._v("设置在客户端显示的海报大图")
                                ])
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-card-text",
                            [
                              _c("v-text-field", {
                                attrs: {
                                  label: "文章标题",
                                  rules: _vm.titleRules,
                                  counter: 32,
                                  required: ""
                                },
                                model: {
                                  value: nuxt.formData.title,
                                  callback: function($$v) {
                                    _vm.$set(nuxt.formData, "title", $$v)
                                  },
                                  expression: "nuxt.formData.title"
                                }
                              }),
                              _vm._v(" "),
                              _c("upload-button", {
                                ref: "fileInput",
                                refInFor: true,
                                staticClass: "mx-0",
                                attrs: { accept: "image/*" },
                                on: {
                                  getPath: function($event) {
                                    _vm.getPath(_vm.src, nuxt)
                                  }
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-divider", { staticClass: "mt-5" }),
                          _vm._v(" "),
                          _c(
                            "v-card-title",
                            { attrs: { "primary-title": "" } },
                            [
                              _c("div", [
                                _c("div", { staticClass: "headline" }, [
                                  _vm._v("Recommend Catalog")
                                ]),
                                _vm._v(" "),
                                _c("span", { staticClass: "grey--text" }, [
                                  _vm._v("设置在客户端首页推荐的类目")
                                ])
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c("v-divider", { staticClass: "mt-5" }),
                          _vm._v(" "),
                          _c(
                            "v-card-actions",
                            [
                              _c(
                                "v-btn",
                                {
                                  attrs: { flat: "" },
                                  on: {
                                    click: function($event) {
                                      _vm.resetForm()
                                    }
                                  }
                                },
                                [_vm._v("Clear")]
                              ),
                              _vm._v(" "),
                              _c("v-spacer"),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  attrs: {
                                    color: "primary",
                                    disabled: !_vm.valid,
                                    flat: ""
                                  },
                                  on: { click: _vm.submit }
                                },
                                [_vm._v("Submit")]
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
            })
          )
        : _vm._e()
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL251eHQvc2V0dGluZ3MudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9VcGxvYWRCdXR0b24udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9VcGxvYWRCdXR0b24udnVlPzQxNWQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1VwbG9hZEJ1dHRvbi52dWU/YjkwYyIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1VwbG9hZEJ1dHRvbi52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1VwbG9hZEJ1dHRvbi52dWU/OWQ1YSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL251eHQvc2V0dGluZ3MudnVlPzdiOGMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9udXh0L3NldHRpbmdzLnZ1ZT85ZWRiIiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL251eHQvc2V0dGluZ3MudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvbnV4dC9zZXR0aW5ncy52dWU/OTUyNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLHlCQUFxTTtBQUNyTTtBQUNBO0FBQ0E7QUFDQSw0Q0FBa1M7QUFDbFM7QUFDQSw4Q0FBa0w7QUFDbEw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Q0E7QUFDQSxDIiwiZmlsZSI6ImpzLzIuY2MwZWMwNGNkYjkyMjU1NGY0NjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTRhNDFlNzYyXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vc2V0dGluZ3MudnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XSxcXFwic3RhZ2UtMlxcXCJdLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9zZXR0aW5ncy52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTRhNDFlNzYyXFxcIixcXFwiaGFzU2NvcGVkXFxcIjp0cnVlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zZXR0aW5ncy52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IFwiZGF0YS12LTRhNDFlNzYyXCJcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvcGFnZXMvbnV4dC9zZXR0aW5ncy52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNGE0MWU3NjJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi00YTQxZTc2MlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9udXh0L3NldHRpbmdzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoc3NyQ29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtN2M1YjI2NmNcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9VcGxvYWRCdXR0b24udnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XSxcXFwic3RhZ2UtMlxcXCJdLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9VcGxvYWRCdXR0b24udnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi03YzViMjY2Y1xcXCIsXFxcImhhc1Njb3BlZFxcXCI6dHJ1ZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vVXBsb2FkQnV0dG9uLnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gXCJkYXRhLXYtN2M1YjI2NmNcIlxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1VwbG9hZEJ1dHRvbi52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtN2M1YjI2NmNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi03YzViMjY2Y1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1VwbG9hZEJ1dHRvbi52dWVcbi8vIG1vZHVsZSBpZCA9IDE0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTdjNWIyNjZjXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vVXBsb2FkQnV0dG9uLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiYjBiODE5ZWNcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTdjNWIyNjZjXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vVXBsb2FkQnV0dG9uLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi03YzViMjY2Y1xcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1VwbG9hZEJ1dHRvbi52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtN2M1YjI2NmNcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1VwbG9hZEJ1dHRvbi52dWVcbi8vIG1vZHVsZSBpZCA9IDE0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbmlucHV0W3R5cGU9ZmlsZV1bZGF0YS12LTdjNWIyNjZjXSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogLTk5OTk5cHg7XFxufVxcbi5sb2FkaW5nW2RhdGEtdi03YzViMjY2Y10ge1xcbiAgICBvcGFjaXR5OiAwLjQ7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvY2hhbmd6aG91L2NvZGUvbGFyYXZlbC12dWV0aWZ5L3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVXBsb2FkQnV0dG9uLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBMkpBO0lBQ0EsbUJBQUE7SUFDQSxlQUFBO0NBQ0E7QUFFQTtJQUNBLGFBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiVXBsb2FkQnV0dG9uLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICAgIDxkaXY+XFxuICAgICAgICA8di1jYXJkPlxcbiAgICAgICAgICAgIDx2LWNhcmQtbWVkaWEgY29udGFpbiA6Y2xhc3M9XFxcInsnbG9hZGluZyc6bG9hZGluZ31cXFwiIHYtc2hvdz1cXFwiaW1hZ2VVcmxcXFwiIHJlZj1cXFwiaW1hZ2VVcmxcXFwiIHN0eWxlPVxcXCJjdXJzb3I6IHBvaW50ZXI7XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrLnN0b3A9XFxcImRpYWxvZyA9IHRydWVcXFwiIDpzcmM9XFxcImltYWdlVXJsXFxcIiBoZWlnaHQ9XFxcIjIwMHB4XFxcIj5cXG4gICAgICAgICAgICA8L3YtY2FyZC1tZWRpYT5cXG5cXG4gICAgICAgICAgICA8di1idG4gbGFyZ2VcXG4gICAgICAgICAgICAgICAgICAgYmxvY2tcXG4gICAgICAgICAgICAgICAgICAgcmFpc2VkXFxuICAgICAgICAgICAgICAgICAgIGNvbG9yPVxcXCJpbmZvXFxcIlxcbiAgICAgICAgICAgICAgICAgICBAY2xpY2s9XFxcIm9uUGlja0ZpbGVcXFwiXFxuICAgICAgICAgICAgICAgICAgIHYtc2hvdz1cXFwicHJvZ3Jlc3MgPT09IDBcXFwiPlxcbiAgICAgICAgICAgICAgICB7eyBzZWxlY3RMYWJlbCB9fVxcbiAgICAgICAgICAgIDwvdi1idG4+XFxuICAgICAgICAgICAgPHYtcHJvZ3Jlc3MtbGluZWFyIHYtc2hvdz1cXFwibG9hZGluZ1xcXCIgaGVpZ2h0PVxcXCI0MFxcXCIgY2xhc3M9XFxcIm15LTBcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XFxcInByb2dyZXNzXFxcIiA6Y29sb3I9XFxcImNvbG9yXFxcIj48L3YtcHJvZ3Jlc3MtbGluZWFyPlxcbiAgICAgICAgICAgIDx2LWJ0biBsYXJnZSBibG9jayByYWlzZWQgY2xhc3M9XFxcImVycm9yXFxcIiBAY2xpY2s9XFxcInJlbW92ZUZpbGVcXFwiIHYtc2hvdz1cXFwicHJvZ3Jlc3MgPT09IDEwMFxcXCI+XFxuICAgICAgICAgICAgICAgIHt7IHJlbW92ZUxhYmVsIH19XFxuICAgICAgICAgICAgPC92LWJ0bj5cXG4gICAgICAgICAgICA8aW5wdXRcXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XFxcImZpbGVcXFwiXFxuICAgICAgICAgICAgICAgICAgICByZWY9XFxcImltYWdlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cXFwiaW1hZ2VcXFwiXFxuICAgICAgICAgICAgICAgICAgICA6YWNjZXB0PVxcXCJhY2NlcHRcXFwiXFxuICAgICAgICAgICAgICAgICAgICBAY2hhbmdlPVxcXCJvbkZpbGVQaWNrZWRcXFwiXFxuICAgICAgICAgICAgPlxcbiAgICAgICAgPC92LWNhcmQ+XFxuICAgICAgICA8di1kaWFsb2cgZnVsbHNjcmVlbiB2LW1vZGVsPVxcXCJkaWFsb2dcXFwiIG1heC13aWR0aD1cXFwiMTAwJVxcXCIgbGF6eT5cXG4gICAgICAgICAgICA8di1jYXJkIGZ1bGwtaGVpZ2h0PlxcbiAgICAgICAgICAgICAgICA8di1jYXJkLXRpdGxlPlxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+5Zu+54mH6aKE6KeIPC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgPHYtc3BhY2VyPjwvdi1zcGFjZXI+XFxuICAgICAgICAgICAgICAgICAgICA8di1idG4gaWNvbiBAY2xpY2suc3RvcD1cXFwiZGlhbG9nID0gZmFsc2VcXFwiPlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWljb24+Y2xlYXI8L3YtaWNvbj5cXG4gICAgICAgICAgICAgICAgICAgIDwvdi1idG4+XFxuICAgICAgICAgICAgICAgIDwvdi1jYXJkLXRpdGxlPlxcbiAgICAgICAgICAgICAgICA8di1jYXJkLW1lZGlhIGNvbnRhaW4gOmNsYXNzPVxcXCJ7J2xvYWRpbmcnOmxvYWRpbmd9XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpzcmM9XFxcImltYWdlVXJsXFxcIiA6aGVpZ2h0PVxcXCJkaWFsb2dIZWlnaHRcXFwiPlxcbiAgICAgICAgICAgICAgICA8L3YtY2FyZC1tZWRpYT5cXG4gICAgICAgICAgICAgICAgPHYtY2FyZC1hY3Rpb25zPlxcbiAgICAgICAgICAgICAgICAgICAgPHYtc3BhY2VyPjwvdi1zcGFjZXI+XFxuICAgICAgICAgICAgICAgICAgICA8di1idG4gZmxhdCBAY2xpY2suc3RvcD1cXFwicmVtb3ZlRmlsZVxcXCI+RGVsZXRlPC92LWJ0bj5cXG4gICAgICAgICAgICAgICAgICAgIDx2LWJ0biBjb2xvcj1cXFwicHJpbWFyeVxcXCIgZmxhdCBAY2xpY2suc3RvcD1cXFwiZGlhbG9nPWZhbHNlXFxcIj5DbG9zZTwvdi1idG4+XFxuICAgICAgICAgICAgICAgIDwvdi1jYXJkLWFjdGlvbnM+XFxuICAgICAgICAgICAgPC92LWNhcmQ+XFxuICAgICAgICA8L3YtZGlhbG9nPlxcbiAgICA8L2Rpdj5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuICBleHBvcnQgZGVmYXVsdCB7XFxuICAgIHByb3BzOiB7XFxuICAgICAgdmFsdWU6IHtcXG4gICAgICAgIHR5cGU6IFN0cmluZ1xcbiAgICAgIH0sXFxuICAgICAgYWNjZXB0OiB7XFxuICAgICAgICB0eXBlOiBTdHJpbmcsXFxuICAgICAgICBkZWZhdWx0OiAnKidcXG4gICAgICB9LFxcbiAgICAgIHNlbGVjdExhYmVsOiB7XFxuICAgICAgICB0eXBlOiBTdHJpbmcsXFxuICAgICAgICBkZWZhdWx0OiAnU2VsZWN0IGFuIGltYWdlJ1xcbiAgICAgIH0sXFxuICAgICAgcmVtb3ZlTGFiZWw6IHtcXG4gICAgICAgIHR5cGU6IFN0cmluZyxcXG4gICAgICAgIGRlZmF1bHQ6ICdSZW1vdmUnXFxuICAgICAgfVxcbiAgICB9LFxcblxcbiAgICBkYXRhICgpIHtcXG4gICAgICByZXR1cm4ge1xcbiAgICAgICAgaW1hZ2VVcmw6ICcnLFxcbiAgICAgICAgcHJvZ3Jlc3M6IDAsXFxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcXG4gICAgICAgIGRpYWxvZzogZmFsc2VcXG4gICAgICB9XFxuICAgIH0sXFxuXFxuICAgIHdhdGNoOiB7XFxuICAgICAgLy8gdmFsdWUgKHYpIHtcXG4gICAgICAvLyAgIHRoaXMuaW1hZ2VVcmwgPSB2XFxuICAgICAgLy8gfVxcbiAgICB9LFxcblxcbiAgICBtb3VudGVkICgpIHtcXG4gICAgICB0aGlzLmltYWdlVXJsID0gJydcXG4gICAgfSxcXG4gICAgY29tcHV0ZWQ6IHtcXG4gICAgICBkaWFsb2dIZWlnaHQgKCkge1xcbiAgICAgICAgcmV0dXJuIHRoaXMuJHZ1ZXRpZnkuYnJlYWtwb2ludC5oZWlnaHQgLSAxMDBcXG4gICAgICB9LFxcbiAgICAgIGNvbG9yICgpIHtcXG4gICAgICAgIHJldHVybiBbJ2Vycm9yJywgJ3dhcm5pbmcnLCAnc3VjY2VzcyddW01hdGguZmxvb3IodGhpcy5wcm9ncmVzcyAvIDQwKV1cXG4gICAgICB9XFxuICAgIH0sXFxuICAgIG1ldGhvZHM6IHtcXG5cXG4gICAgICBvblBpY2tGaWxlICgpIHtcXG4gICAgICAgIHRoaXMuJHJlZnMuaW1hZ2UuY2xpY2soKVxcbiAgICAgIH0sXFxuXFxuICAgICAgYXN5bmMgb25GaWxlUGlja2VkIChldmVudCkge1xcbiAgICAgICAgY29uc3QgZmlsZXMgPSBldmVudC50YXJnZXQuZmlsZXMgfHwgZXZlbnQuZGF0YVRyYW5zZmVyLmZpbGVzXFxuXFxuICAgICAgICBpZiAoZmlsZXMgJiYgZmlsZXNbMF0pIHtcXG4gICAgICAgICAgbGV0IGZpbGVuYW1lID0gZmlsZXNbMF0ubmFtZVxcblxcbiAgICAgICAgICBpZiAoZmlsZW5hbWUgJiYgZmlsZW5hbWUubGFzdEluZGV4T2YoJy4nKSA8PSAwKSB7XFxuICAgICAgICAgICAgcmV0dXJuIC8vcmV0dXJuIGFsZXJ0KCdQbGVhc2UgYWRkIGEgdmFsaWQgaW1hZ2UhJylcXG4gICAgICAgICAgfVxcblxcbiAgICAgICAgICBjb25zdCBmaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxcbiAgICAgICAgICBmaWxlUmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XFxuICAgICAgICAgICAgdGhpcy5pbWFnZVVybCA9IGZpbGVSZWFkZXIucmVzdWx0XFxuICAgICAgICAgIH0pXFxuICAgICAgICAgIGZpbGVSZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlc1swXSlcXG5cXG4gICAgICAgICAgbGV0IHBhdGggPSBhd2FpdCB0aGlzLnVwbG9hZChmaWxlc1swXSlcXG4gICAgICAgICAgLy8gdGhpcy5pbWFnZVVybCA9IHBhdGhcXG4gICAgICAgICAgdGhpcy4kZW1pdCgnZ2V0UGF0aCcsIHBhdGgpXFxuICAgICAgICB9XFxuICAgICAgfSxcXG5cXG4gICAgICByZW1vdmVGaWxlICgpIHtcXG4gICAgICAgIHRoaXMuaW1hZ2VVcmwgPSAnJ1xcbiAgICAgICAgdGhpcy5wcm9ncmVzcyA9IDBcXG4gICAgICAgIHRoaXMuZGlhbG9nID0gZmFsc2VcXG4gICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdtZXNzYWdlL3Jlc3BvbnNlTWVzc2FnZScsIHt0ZXh0OiB0aGlzLiR0KCdyZW1vdmVfaW1nX3N1Y2Nlc3MnKX0pXFxuICAgICAgfSxcXG5cXG4gICAgICBhc3luYyB1cGxvYWQgKGUpIHtcXG4gICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpXFxuICAgICAgICBsZXQgY29uZmlnID0ge1xcbiAgICAgICAgICBoZWFkZXJzOiB7XFxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJ1xcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBvblVwbG9hZFByb2dyZXNzOiBwcm9ncmVzc0V2ZW50ID0+IHtcXG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzID0gTWF0aC5yb3VuZCgoXFxuICAgICAgICAgICAgICBwcm9ncmVzc0V2ZW50LmxvYWRlZCAqIDEwMCkgLyBwcm9ncmVzc0V2ZW50LnRvdGFsKVxcbiAgICAgICAgICAgIGlmICh0aGlzLnByb2dyZXNzID49IDEwMCkgdGhpcy5sb2FkaW5nID0gZmFsc2VcXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdhdmF0YXInLCBlKVxcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZVxcbiAgICAgICAgbGV0IHtkYXRhfSA9IGF3YWl0IHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdmaWxlL3VwbG9hZEltYWdlJywge2Zvcm1EYXRhLCBjb25maWd9KVxcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2VcXG4gICAgICAgIHJldHVybiBkYXRhXFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlIHNjb3BlZD5cXG4gICAgaW5wdXRbdHlwZT1maWxlXSB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBsZWZ0OiAtOTk5OTlweDtcXG4gICAgfVxcblxcbiAgICAubG9hZGluZyB7XFxuICAgICAgICBvcGFjaXR5OiAwLjQ7XFxuICAgIH1cXG48L3N0eWxlPlwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi03YzViMjY2Y1wiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVXBsb2FkQnV0dG9uLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIiLCI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPHYtY2FyZD5cbiAgICAgICAgICAgIDx2LWNhcmQtbWVkaWEgY29udGFpbiA6Y2xhc3M9XCJ7J2xvYWRpbmcnOmxvYWRpbmd9XCIgdi1zaG93PVwiaW1hZ2VVcmxcIiByZWY9XCJpbWFnZVVybFwiIHN0eWxlPVwiY3Vyc29yOiBwb2ludGVyO1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljay5zdG9wPVwiZGlhbG9nID0gdHJ1ZVwiIDpzcmM9XCJpbWFnZVVybFwiIGhlaWdodD1cIjIwMHB4XCI+XG4gICAgICAgICAgICA8L3YtY2FyZC1tZWRpYT5cblxuICAgICAgICAgICAgPHYtYnRuIGxhcmdlXG4gICAgICAgICAgICAgICAgICAgYmxvY2tcbiAgICAgICAgICAgICAgICAgICByYWlzZWRcbiAgICAgICAgICAgICAgICAgICBjb2xvcj1cImluZm9cIlxuICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIm9uUGlja0ZpbGVcIlxuICAgICAgICAgICAgICAgICAgIHYtc2hvdz1cInByb2dyZXNzID09PSAwXCI+XG4gICAgICAgICAgICAgICAge3sgc2VsZWN0TGFiZWwgfX1cbiAgICAgICAgICAgIDwvdi1idG4+XG4gICAgICAgICAgICA8di1wcm9ncmVzcy1saW5lYXIgdi1zaG93PVwibG9hZGluZ1wiIGhlaWdodD1cIjQwXCIgY2xhc3M9XCJteS0wXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwicHJvZ3Jlc3NcIiA6Y29sb3I9XCJjb2xvclwiPjwvdi1wcm9ncmVzcy1saW5lYXI+XG4gICAgICAgICAgICA8di1idG4gbGFyZ2UgYmxvY2sgcmFpc2VkIGNsYXNzPVwiZXJyb3JcIiBAY2xpY2s9XCJyZW1vdmVGaWxlXCIgdi1zaG93PVwicHJvZ3Jlc3MgPT09IDEwMFwiPlxuICAgICAgICAgICAgICAgIHt7IHJlbW92ZUxhYmVsIH19XG4gICAgICAgICAgICA8L3YtYnRuPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICAgICAgICAgICAgcmVmPVwiaW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiaW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgICA6YWNjZXB0PVwiYWNjZXB0XCJcbiAgICAgICAgICAgICAgICAgICAgQGNoYW5nZT1cIm9uRmlsZVBpY2tlZFwiXG4gICAgICAgICAgICA+XG4gICAgICAgIDwvdi1jYXJkPlxuICAgICAgICA8di1kaWFsb2cgZnVsbHNjcmVlbiB2LW1vZGVsPVwiZGlhbG9nXCIgbWF4LXdpZHRoPVwiMTAwJVwiIGxhenk+XG4gICAgICAgICAgICA8di1jYXJkIGZ1bGwtaGVpZ2h0PlxuICAgICAgICAgICAgICAgIDx2LWNhcmQtdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPuWbvueJh+mihOiniDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHYtc3BhY2VyPjwvdi1zcGFjZXI+XG4gICAgICAgICAgICAgICAgICAgIDx2LWJ0biBpY29uIEBjbGljay5zdG9wPVwiZGlhbG9nID0gZmFsc2VcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtaWNvbj5jbGVhcjwvdi1pY29uPlxuICAgICAgICAgICAgICAgICAgICA8L3YtYnRuPlxuICAgICAgICAgICAgICAgIDwvdi1jYXJkLXRpdGxlPlxuICAgICAgICAgICAgICAgIDx2LWNhcmQtbWVkaWEgY29udGFpbiA6Y2xhc3M9XCJ7J2xvYWRpbmcnOmxvYWRpbmd9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpzcmM9XCJpbWFnZVVybFwiIDpoZWlnaHQ9XCJkaWFsb2dIZWlnaHRcIj5cbiAgICAgICAgICAgICAgICA8L3YtY2FyZC1tZWRpYT5cbiAgICAgICAgICAgICAgICA8di1jYXJkLWFjdGlvbnM+XG4gICAgICAgICAgICAgICAgICAgIDx2LXNwYWNlcj48L3Ytc3BhY2VyPlxuICAgICAgICAgICAgICAgICAgICA8di1idG4gZmxhdCBAY2xpY2suc3RvcD1cInJlbW92ZUZpbGVcIj5EZWxldGU8L3YtYnRuPlxuICAgICAgICAgICAgICAgICAgICA8di1idG4gY29sb3I9XCJwcmltYXJ5XCIgZmxhdCBAY2xpY2suc3RvcD1cImRpYWxvZz1mYWxzZVwiPkNsb3NlPC92LWJ0bj5cbiAgICAgICAgICAgICAgICA8L3YtY2FyZC1hY3Rpb25zPlxuICAgICAgICAgICAgPC92LWNhcmQ+XG4gICAgICAgIDwvdi1kaWFsb2c+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZ1xuICAgICAgfSxcbiAgICAgIGFjY2VwdDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIGRlZmF1bHQ6ICcqJ1xuICAgICAgfSxcbiAgICAgIHNlbGVjdExhYmVsOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgZGVmYXVsdDogJ1NlbGVjdCBhbiBpbWFnZSdcbiAgICAgIH0sXG4gICAgICByZW1vdmVMYWJlbDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIGRlZmF1bHQ6ICdSZW1vdmUnXG4gICAgICB9XG4gICAgfSxcblxuICAgIGRhdGEgKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaW1hZ2VVcmw6ICcnLFxuICAgICAgICBwcm9ncmVzczogMCxcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgIGRpYWxvZzogZmFsc2VcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgd2F0Y2g6IHtcbiAgICAgIC8vIHZhbHVlICh2KSB7XG4gICAgICAvLyAgIHRoaXMuaW1hZ2VVcmwgPSB2XG4gICAgICAvLyB9XG4gICAgfSxcblxuICAgIG1vdW50ZWQgKCkge1xuICAgICAgdGhpcy5pbWFnZVVybCA9ICcnXG4gICAgfSxcbiAgICBjb21wdXRlZDoge1xuICAgICAgZGlhbG9nSGVpZ2h0ICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJHZ1ZXRpZnkuYnJlYWtwb2ludC5oZWlnaHQgLSAxMDBcbiAgICAgIH0sXG4gICAgICBjb2xvciAoKSB7XG4gICAgICAgIHJldHVybiBbJ2Vycm9yJywgJ3dhcm5pbmcnLCAnc3VjY2VzcyddW01hdGguZmxvb3IodGhpcy5wcm9ncmVzcyAvIDQwKV1cbiAgICAgIH1cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcblxuICAgICAgb25QaWNrRmlsZSAoKSB7XG4gICAgICAgIHRoaXMuJHJlZnMuaW1hZ2UuY2xpY2soKVxuICAgICAgfSxcblxuICAgICAgYXN5bmMgb25GaWxlUGlja2VkIChldmVudCkge1xuICAgICAgICBjb25zdCBmaWxlcyA9IGV2ZW50LnRhcmdldC5maWxlcyB8fCBldmVudC5kYXRhVHJhbnNmZXIuZmlsZXNcblxuICAgICAgICBpZiAoZmlsZXMgJiYgZmlsZXNbMF0pIHtcbiAgICAgICAgICBsZXQgZmlsZW5hbWUgPSBmaWxlc1swXS5uYW1lXG5cbiAgICAgICAgICBpZiAoZmlsZW5hbWUgJiYgZmlsZW5hbWUubGFzdEluZGV4T2YoJy4nKSA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gLy9yZXR1cm4gYWxlcnQoJ1BsZWFzZSBhZGQgYSB2YWxpZCBpbWFnZSEnKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXG4gICAgICAgICAgZmlsZVJlYWRlci5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pbWFnZVVybCA9IGZpbGVSZWFkZXIucmVzdWx0XG4gICAgICAgICAgfSlcbiAgICAgICAgICBmaWxlUmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZXNbMF0pXG5cbiAgICAgICAgICBsZXQgcGF0aCA9IGF3YWl0IHRoaXMudXBsb2FkKGZpbGVzWzBdKVxuICAgICAgICAgIC8vIHRoaXMuaW1hZ2VVcmwgPSBwYXRoXG4gICAgICAgICAgdGhpcy4kZW1pdCgnZ2V0UGF0aCcsIHBhdGgpXG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIHJlbW92ZUZpbGUgKCkge1xuICAgICAgICB0aGlzLmltYWdlVXJsID0gJydcbiAgICAgICAgdGhpcy5wcm9ncmVzcyA9IDBcbiAgICAgICAgdGhpcy5kaWFsb2cgPSBmYWxzZVxuICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnbWVzc2FnZS9yZXNwb25zZU1lc3NhZ2UnLCB7dGV4dDogdGhpcy4kdCgncmVtb3ZlX2ltZ19zdWNjZXNzJyl9KVxuICAgICAgfSxcblxuICAgICAgYXN5bmMgdXBsb2FkIChlKSB7XG4gICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpXG4gICAgICAgIGxldCBjb25maWcgPSB7XG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgb25VcGxvYWRQcm9ncmVzczogcHJvZ3Jlc3NFdmVudCA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzID0gTWF0aC5yb3VuZCgoXG4gICAgICAgICAgICAgIHByb2dyZXNzRXZlbnQubG9hZGVkICogMTAwKSAvIHByb2dyZXNzRXZlbnQudG90YWwpXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9ncmVzcyA+PSAxMDApIHRoaXMubG9hZGluZyA9IGZhbHNlXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnYXZhdGFyJywgZSlcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZVxuICAgICAgICBsZXQge2RhdGF9ID0gYXdhaXQgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2ZpbGUvdXBsb2FkSW1hZ2UnLCB7Zm9ybURhdGEsIGNvbmZpZ30pXG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlXG4gICAgICAgIHJldHVybiBkYXRhXG4gICAgICB9XG4gICAgfVxuICB9XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbiAgICBpbnB1dFt0eXBlPWZpbGVdIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAtOTk5OTlweDtcbiAgICB9XG5cbiAgICAubG9hZGluZyB7XG4gICAgICAgIG9wYWNpdHk6IDAuNDtcbiAgICB9XG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVXBsb2FkQnV0dG9uLnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWNhcmRcIixcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwidi1jYXJkLW1lZGlhXCIsIHtcbiAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5pbWFnZVVybCxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImltYWdlVXJsXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHJlZjogXCJpbWFnZVVybFwiLFxuICAgICAgICAgICAgY2xhc3M6IHsgbG9hZGluZzogX3ZtLmxvYWRpbmcgfSxcbiAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGN1cnNvcjogXCJwb2ludGVyXCIgfSxcbiAgICAgICAgICAgIGF0dHJzOiB7IGNvbnRhaW46IFwiXCIsIHNyYzogX3ZtLmltYWdlVXJsLCBoZWlnaHQ6IFwiMjAwcHhcIiB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgIF92bS5kaWFsb2cgPSB0cnVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5wcm9ncmVzcyA9PT0gMCxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicHJvZ3Jlc3MgPT09IDBcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgYXR0cnM6IHsgbGFyZ2U6IFwiXCIsIGJsb2NrOiBcIlwiLCByYWlzZWQ6IFwiXCIsIGNvbG9yOiBcImluZm9cIiB9LFxuICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLm9uUGlja0ZpbGUgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uc2VsZWN0TGFiZWwpICsgXCJcXG4gICAgICAgIFwiKV1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJ2LXByb2dyZXNzLWxpbmVhclwiLCB7XG4gICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ubG9hZGluZyxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImxvYWRpbmdcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibXktMFwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgaGVpZ2h0OiBcIjQwXCIsIGNvbG9yOiBfdm0uY29sb3IgfSxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0ucHJvZ3Jlc3MsXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0ucHJvZ3Jlc3MgPSAkJHZcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJwcm9ncmVzc1wiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucHJvZ3Jlc3MgPT09IDEwMCxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicHJvZ3Jlc3MgPT09IDEwMFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJlcnJvclwiLFxuICAgICAgICAgICAgICBhdHRyczogeyBsYXJnZTogXCJcIiwgYmxvY2s6IFwiXCIsIHJhaXNlZDogXCJcIiB9LFxuICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLnJlbW92ZUZpbGUgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ucmVtb3ZlTGFiZWwpICsgXCJcXG4gICAgICAgIFwiKV1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICByZWY6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiZmlsZVwiLCBuYW1lOiBcImltYWdlXCIsIGFjY2VwdDogX3ZtLmFjY2VwdCB9LFxuICAgICAgICAgICAgb246IHsgY2hhbmdlOiBfdm0ub25GaWxlUGlja2VkIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInYtZGlhbG9nXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczogeyBmdWxsc2NyZWVuOiBcIlwiLCBcIm1heC13aWR0aFwiOiBcIjEwMCVcIiwgbGF6eTogXCJcIiB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLmRpYWxvZyxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgX3ZtLmRpYWxvZyA9ICQkdlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZGlhbG9nXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1jYXJkXCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IFwiZnVsbC1oZWlnaHRcIjogXCJcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1jYXJkLXRpdGxlXCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLlm77niYfpooTop4hcIildKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInYtc3BhY2VyXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kaWFsb2cgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW19jKFwidi1pY29uXCIsIFtfdm0uX3YoXCJjbGVhclwiKV0pXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInYtY2FyZC1tZWRpYVwiLCB7XG4gICAgICAgICAgICAgICAgY2xhc3M6IHsgbG9hZGluZzogX3ZtLmxvYWRpbmcgfSxcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgY29udGFpbjogXCJcIixcbiAgICAgICAgICAgICAgICAgIHNyYzogX3ZtLmltYWdlVXJsLFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBfdm0uZGlhbG9nSGVpZ2h0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWNhcmQtYWN0aW9uc1wiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidi1zcGFjZXJcIiksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZsYXQ6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5yZW1vdmVGaWxlKCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJEZWxldGVcIildXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2xvcjogXCJwcmltYXJ5XCIsIGZsYXQ6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRpYWxvZyA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQ2xvc2VcIildXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtN2M1YjI2NmNcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTdjNWIyNjZjXCIsXCJoYXNTY29wZWRcIjp0cnVlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVXBsb2FkQnV0dG9uLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNGE0MWU3NjJcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9zZXR0aW5ncy52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjI0MjY4MDIyXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi00YTQxZTc2MlxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NldHRpbmdzLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi00YTQxZTc2MlxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NldHRpbmdzLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi00YTQxZTc2MlwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL251eHQvc2V0dGluZ3MudnVlXG4vLyBtb2R1bGUgaWQgPSAyMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJmaWxlXCI6XCJzZXR0aW5ncy52dWVcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi00YTQxZTc2MlwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL251eHQvc2V0dGluZ3MudnVlXG4vLyBtb2R1bGUgaWQgPSAyMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiPHRlbXBsYXRlPlxuICAgIDx2LWNhcmQ+XG4gICAgICAgIDx2LWNhcmQtdGl0bGUgcHJpbWFyeS10aXRsZSBjbGFzcz1cImdyZXkgbGlnaHRlbi00XCI+XG4gICAgICAgICAgICA8aDMgY2xhc3M9XCJoZWFkbGluZSBtYi0wXCI+e3sgbmFtZSB9fTwvaDM+XG4gICAgICAgIDwvdi1jYXJkLXRpdGxlPlxuICAgICAgICA8di1kaXZpZGVyPjwvdi1kaXZpZGVyPlxuXG4gICAgICAgIDx2LXRvb2xiYXJcbiAgICAgICAgICAgICAgICB0YWJzXG4gICAgICAgICAgICAgICAgY2FyZFxuICAgICAgICA+XG4gICAgICAgICAgICA8di10ZXh0LWZpZWxkXG4gICAgICAgICAgICAgICAgICAgIHByZXBlbmQtaWNvbj1cInNlYXJjaFwiXG4gICAgICAgICAgICAgICAgICAgIGFwcGVuZC1pY29uPVwibWljXCJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTZWFyY2hcIlxuICAgICAgICAgICAgICAgICAgICBzb2xvLWludmVydGVkXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibXgtM1wiXG4gICAgICAgICAgICAgICAgICAgIGZsYXRcbiAgICAgICAgICAgID48L3YtdGV4dC1maWVsZD5cbiAgICAgICAgICAgIDx2LXRhYnNcbiAgICAgICAgICAgICAgICAgICAgc2xvdD1cImV4dGVuc2lvblwiXG4gICAgICAgICAgICAgICAgICAgIGNlbnRlcmVkXG4gICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJ0YWJzXCJcbiAgICAgICAgICAgICAgICAgICAgc2hvdy1hcnJvd3NcblxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDx2LXRhYnMtc2xpZGVyIGNvbG9yPVwicHJpbWFyeVwiPjwvdi10YWJzLXNsaWRlcj5cbiAgICAgICAgICAgICAgICA8di10YWJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtZm9yPVwibnV4dCBpbiBudXh0c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA6a2V5PVwibnV4dC5pZFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7eyBudXh0Lm5hbWUgfX1cbiAgICAgICAgICAgICAgICA8L3YtdGFiPlxuICAgICAgICAgICAgPC92LXRhYnM+XG4gICAgICAgIDwvdi10b29sYmFyPlxuICAgICAgICA8di10YWJzLWl0ZW1zIHYtbW9kZWw9XCJ0YWJzXCIgdi1pZj1cImxvYWRlZFwiPlxuICAgICAgICAgICAgPHYtdGFiLWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgdi1mb3I9XCJudXh0IGluIG51eHRzXCJcbiAgICAgICAgICAgICAgICAgICAgOmtleT1cIm51eHQuaWRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDx2LWZvcm0gdi1tb2RlbD1cInZhbGlkXCIgOnJlZj1cIid0YWItJyArIG51eHQuaWQgKydmb3JtJ1wiIGxhenktdmFsaWRhdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPHYtY2FyZD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtY2FyZC10aXRsZSBwcmltYXJ5LXRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkbGluZVwiPkluZGV4IE5hdmlnYXRpb24gTGluazwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImdyZXktLXRleHRcIj7orr7nva7lnKjlrqLmiLfnq6/pppbpobXlj5HjgIHlr7zoiKrmoI/pk77mjqU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtY2FyZC10aXRsZT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtZGl2aWRlciBjbGFzcz1cIm10LTVcIj48L3YtZGl2aWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWNhcmQtdGl0bGUgcHJpbWFyeS10aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGxpbmVcIj5CYW5uZXI8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJncmV5LS10ZXh0XCI+6K6+572u5Zyo5a6i5oi356uv5pi+56S655qE5rW35oql5aSn5Zu+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LWNhcmQtdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di1jYXJkLXRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtdGV4dC1maWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLmlofnq6DmoIfpophcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cIm51eHQuZm9ybURhdGEudGl0bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnJ1bGVzPVwidGl0bGVSdWxlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y291bnRlcj1cIjMyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvdi10ZXh0LWZpZWxkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1cGxvYWQtYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm14LTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJmaWxlSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGdldFBhdGg9XCJnZXRQYXRoKHNyYyxudXh0KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1jYXJkLXRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di1kaXZpZGVyIGNsYXNzPVwibXQtNVwiPjwvdi1kaXZpZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtY2FyZC10aXRsZSBwcmltYXJ5LXRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkbGluZVwiPlJlY29tbWVuZCBDYXRhbG9nPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZ3JleS0tdGV4dFwiPuiuvue9ruWcqOWuouaIt+err+mmlumhteaOqOiNkOeahOexu+ebrjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1jYXJkLXRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtZGl2aWRlciBjbGFzcz1cIm10LTVcIj48L3YtZGl2aWRlcj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtY2FyZC1hY3Rpb25zPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0biBmbGF0IEBjbGljaz1cInJlc2V0Rm9ybSgpXCI+Q2xlYXI8L3YtYnRuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LXNwYWNlcj48L3Ytc3BhY2VyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHYtYnRuIGNvbG9yPVwicHJpbWFyeVwiIDpkaXNhYmxlZD1cIiF2YWxpZFwiIGZsYXQgQGNsaWNrPVwic3VibWl0XCI+U3VibWl0PC92LWJ0bj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1jYXJkLWFjdGlvbnM+XG4gICAgICAgICAgICAgICAgICAgIDwvdi1jYXJkPlxuICAgICAgICAgICAgICAgIDwvdi1mb3JtPlxuICAgICAgICAgICAgPC92LXRhYi1pdGVtPlxuICAgICAgICA8L3YtdGFicy1pdGVtcz5cbiAgICA8L3YtY2FyZD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCBVcGxvYWRCdXR0b24gZnJvbSAnfi9jb21wb25lbnRzL1VwbG9hZEJ1dHRvbidcblxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogJ251eHRfc2V0dGluZycsXG4gICAgZGF0YSAoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0YWJzOiAwLFxuICAgICAgICBsb2FkZWQ6IGZhbHNlLFxuICAgICAgICBuYW1lOiB0aGlzLiR0KCdudXh0X3NldHRpbmdzJyksXG4gICAgICAgIG51eHRzOiBbXSxcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgIHZhbGlkOiB0cnVlLFxuICAgICAgICB0aXRsZVJ1bGVzOiBbXG4gICAgICAgICAgKHYpID0+ICEhdiB8fCAnVGl0bGUgaXMgcmVxdWlyZWQnLFxuICAgICAgICAgICh2KSA9PiB2ICYmIHYubGVuZ3RoIDw9IDY0IHx8ICdUaXRsZSBtdXN0IGJlIGxlc3MgdGhhbiA2NCBjaGFyYWN0ZXJzJ1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICBVcGxvYWRCdXR0b25cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgIGFzeW5jIGZldGNoICgpIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZVxuICAgICAgICBsZXQgcXVlcnlCdWlsZCA9IHtsaW1pdDogJ2FsbCd9XG4gICAgICAgIHF1ZXJ5QnVpbGQuc29ydGVkQnkgPSAnZGVzYydcbiAgICAgICAgcXVlcnlCdWlsZC5vcmRlckJ5ID0gJ2NyZWF0ZWRfYXQnXG4gICAgICAgIGxldCBudXh0cyA9IGF3YWl0IHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdudXh0L2luZGV4JywgcXVlcnlCdWlsZClcbiAgICAgICAgdGhpcy4kc2V0KHRoaXMsICdudXh0cycsIG51eHRzKVxuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZVxuICAgICAgfSxcbiAgICAgIGFzeW5jIHN1Ym1pdCAoKSB7XG4gICAgICAgIGlmICh0aGlzLiRyZWZzLmZvcm0udmFsaWRhdGUoKSkge1xuICAgICAgICAgIC8vIE5hdGl2ZSBmb3JtIHN1Ym1pc3Npb24gaXMgbm90IHlldCBzdXBwb3J0ZWRcbiAgICAgICAgICBhd2FpdCB0aGlzLiRzdG9yZS5kaXNwYXRjaCgncG9zdC9zdG9yZScsIHtmb3JtRGF0ZTogdGhpcy5mb3JtRGF0ZX0pXG4gICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ21lc3NhZ2UvcmVzcG9uc2VNZXNzYWdlJywge1xuICAgICAgICAgICAgdGV4dDogdGhpcy4kdCgncG9zdF9jcmVhdGVfc3VjY2VzcycpXG4gICAgICAgICAgfSlcbiAgICAgICAgICB0aGlzLiRyb3V0ZXIucmVwbGFjZSh7bmFtZTogJ3Bvc3QuaW5kZXgnfSlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHJlc2V0Rm9ybSAoKSB7XG4gICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlcyA9IFtdXG4gICAgICAgIHRoaXMuZm9ybUhhc0Vycm9ycyA9IGZhbHNlXG4gICAgICAgIHRoaXMuJHJlZnMuZm9ybS5yZXNldCgpXG4gICAgICB9LFxuICAgICAgZ2V0UGF0aCAoc3JjLCBudXh0KSB7XG4gICAgICAgIG51eHQuZm9ybURhdGEuYXZhdGFyID0gc3JjXG4gICAgICB9LFxuICAgIH0sXG4gICAgYXN5bmMgY3JlYXRlZCAoKSB7XG4gICAgICBhd2FpdCB0aGlzLmZldGNoKClcblxuICAgICAgdGhpcy5udXh0cy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICB0aGlzLiRzZXQodGhpcy5udXh0c1tpbmRleF0sICdmb3JtRGF0YScsIHtcbiAgICAgICAgICBhdmF0YXI6ICcnLFxuICAgICAgICAgIHRpdGxlOiAnJ1xuICAgICAgICB9KVxuICAgICAgfSlcbiAgICAgIHRoaXMubG9hZGVkID0gdHJ1ZVxuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG5cbjwvc3R5bGU+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9udXh0L3NldHRpbmdzLnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ2LWNhcmRcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWNhcmQtdGl0bGVcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJncmV5IGxpZ2h0ZW4tNFwiLCBhdHRyczogeyBcInByaW1hcnktdGl0bGVcIjogXCJcIiB9IH0sXG4gICAgICAgIFtfYyhcImgzXCIsIHsgc3RhdGljQ2xhc3M6IFwiaGVhZGxpbmUgbWItMFwiIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5uYW1lKSldKV1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ2LWRpdmlkZXJcIiksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwidi10b29sYmFyXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgdGFiczogXCJcIiwgY2FyZDogXCJcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJteC0zXCIsXG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBcInByZXBlbmQtaWNvblwiOiBcInNlYXJjaFwiLFxuICAgICAgICAgICAgICBcImFwcGVuZC1pY29uXCI6IFwibWljXCIsXG4gICAgICAgICAgICAgIGxhYmVsOiBcIlNlYXJjaFwiLFxuICAgICAgICAgICAgICBcInNvbG8taW52ZXJ0ZWRcIjogXCJcIixcbiAgICAgICAgICAgICAgZmxhdDogXCJcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtdGFic1wiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBhdHRyczogeyBzbG90OiBcImV4dGVuc2lvblwiLCBjZW50ZXJlZDogXCJcIiwgXCJzaG93LWFycm93c1wiOiBcIlwiIH0sXG4gICAgICAgICAgICAgIHNsb3Q6IFwiZXh0ZW5zaW9uXCIsXG4gICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS50YWJzLFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgIF92bS50YWJzID0gJCR2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInRhYnNcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInYtdGFicy1zbGlkZXJcIiwgeyBhdHRyczogeyBjb2xvcjogXCJwcmltYXJ5XCIgfSB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLl9sKF92bS5udXh0cywgZnVuY3Rpb24obnV4dCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfYyhcInYtdGFiXCIsIHsga2V5OiBudXh0LmlkIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MobnV4dC5uYW1lKSArIFwiXFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDJcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLmxvYWRlZFxuICAgICAgICA/IF9jKFxuICAgICAgICAgICAgXCJ2LXRhYnMtaXRlbXNcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnRhYnMsXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgX3ZtLnRhYnMgPSAkJHZcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidGFic1wiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBfdm0uX2woX3ZtLm51eHRzLCBmdW5jdGlvbihudXh0KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICBcInYtdGFiLWl0ZW1cIixcbiAgICAgICAgICAgICAgICB7IGtleTogbnV4dC5pZCB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtZm9ybVwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgcmVmOiBcInRhYi1cIiArIG51eHQuaWQgKyBcImZvcm1cIixcbiAgICAgICAgICAgICAgICAgICAgICByZWZJbkZvcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcImxhenktdmFsaWRhdGlvblwiOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0udmFsaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52YWxpZCA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidmFsaWRcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWNhcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWNhcmQtdGl0bGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IFwicHJpbWFyeS10aXRsZVwiOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaGVhZGxpbmVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiSW5kZXggTmF2aWdhdGlvbiBMaW5rXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJncmV5LS10ZXh0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIuiuvue9ruWcqOWuouaIt+err+mmlumhteWPkeOAgeWvvOiIquagj+mTvuaOpVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1kaXZpZGVyXCIsIHsgc3RhdGljQ2xhc3M6IFwibXQtNVwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtY2FyZC10aXRsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgXCJwcmltYXJ5LXRpdGxlXCI6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJoZWFkbGluZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJCYW5uZXJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImdyZXktLXRleHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi6K6+572u5Zyo5a6i5oi356uv5pi+56S655qE5rW35oql5aSn5Zu+XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWNhcmQtdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCLmlofnq6DmoIfpophcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlczogX3ZtLnRpdGxlUnVsZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRlcjogMzIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbnV4dC5mb3JtRGF0YS50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChudXh0LmZvcm1EYXRhLCBcInRpdGxlXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwibnV4dC5mb3JtRGF0YS50aXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidXBsb2FkLWJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZjogXCJmaWxlSW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmSW5Gb3I6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm14LTBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgYWNjZXB0OiBcImltYWdlLypcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldFBhdGg6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmdldFBhdGgoX3ZtLnNyYywgbnV4dClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1kaXZpZGVyXCIsIHsgc3RhdGljQ2xhc3M6IFwibXQtNVwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtY2FyZC10aXRsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgXCJwcmltYXJ5LXRpdGxlXCI6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJoZWFkbGluZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJSZWNvbW1lbmQgQ2F0YWxvZ1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiZ3JleS0tdGV4dFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLorr7nva7lnKjlrqLmiLfnq6/pppbpobXmjqjojZDnmoTnsbvnm65cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtZGl2aWRlclwiLCB7IHN0YXRpY0NsYXNzOiBcIm10LTVcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWNhcmQtYWN0aW9uc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmbGF0OiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJlc2V0Rm9ybSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQ2xlYXJcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1zcGFjZXJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJwcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogIV92bS52YWxpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsYXQ6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uc3VibWl0IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlN1Ym1pdFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApXG4gICAgICAgIDogX3ZtLl9lKClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi00YTQxZTc2MlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNGE0MWU3NjJcIixcImhhc1Njb3BlZFwiOnRydWUsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvbnV4dC9zZXR0aW5ncy52dWVcbi8vIG1vZHVsZSBpZCA9IDIxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDIiXSwic291cmNlUm9vdCI6IiJ9
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
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"settings.vue","sourceRoot":""}]);

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
//
//
//
//
//
//
//
//
//
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
        "div",
        [
          _c(
            "v-toolbar",
            { attrs: { color: "purple", dark: "", tabs: "" } },
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
                  attrs: {
                    slot: "extension",
                    centered: "",
                    "slider-color": "white",
                    color: "transparent"
                  },
                  slot: "extension",
                  model: {
                    value: _vm.tabs,
                    callback: function($$v) {
                      _vm.tabs = $$v
                    },
                    expression: "tabs"
                  }
                },
                _vm._l(3, function(n) {
                  return _c("v-tab", { key: n }, [
                    _vm._v(
                      "\n                    Item " +
                        _vm._s(n) +
                        "\n                "
                    )
                  ])
                })
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
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
            _vm._l(3, function(n) {
              return _c(
                "v-tab-item",
                { key: n },
                [
                  _c(
                    "v-card",
                    [
                      _c("v-card-text", [
                        _vm._v(
                          "\n                        " +
                            _vm._s(_vm.text) +
                            "\n                    "
                        )
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL251eHQvc2V0dGluZ3MudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9VcGxvYWRCdXR0b24udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9VcGxvYWRCdXR0b24udnVlPzQxNWQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1VwbG9hZEJ1dHRvbi52dWU/YjkwYyIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1VwbG9hZEJ1dHRvbi52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1VwbG9hZEJ1dHRvbi52dWU/OWQ1YSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL251eHQvc2V0dGluZ3MudnVlPzdiOGMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9udXh0L3NldHRpbmdzLnZ1ZT85ZWRiIiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL251eHQvc2V0dGluZ3MudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvbnV4dC9zZXR0aW5ncy52dWU/OTUyNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLHlCQUFxTTtBQUNyTTtBQUNBO0FBQ0E7QUFDQSw0Q0FBa1M7QUFDbFM7QUFDQSw4Q0FBa0w7QUFDbEw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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IGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi00YTQxZTc2MlxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NldHRpbmdzLnZ1ZVwiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV0sXFxcInN0YWdlLTJcXFwiXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XV19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vc2V0dGluZ3MudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi00YTQxZTc2MlxcXCIsXFxcImhhc1Njb3BlZFxcXCI6dHJ1ZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc2V0dGluZ3MudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBcImRhdGEtdi00YTQxZTc2MlwiXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL251eHQvc2V0dGluZ3MudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTRhNDFlNzYyXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNGE0MWU3NjJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvbnV4dC9zZXR0aW5ncy52dWVcbi8vIG1vZHVsZSBpZCA9IDEzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTdjNWIyNjZjXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vVXBsb2FkQnV0dG9uLnZ1ZVwiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV0sXFxcInN0YWdlLTJcXFwiXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XV19IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vVXBsb2FkQnV0dG9uLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtN2M1YjI2NmNcXFwiLFxcXCJoYXNTY29wZWRcXFwiOnRydWUsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1VwbG9hZEJ1dHRvbi52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IFwiZGF0YS12LTdjNWIyNjZjXCJcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9VcGxvYWRCdXR0b24udnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTdjNWIyNjZjXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtN2M1YjI2NmNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9VcGxvYWRCdXR0b24udnVlXG4vLyBtb2R1bGUgaWQgPSAxNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi03YzViMjY2Y1xcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1VwbG9hZEJ1dHRvbi52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcImIwYjgxOWVjXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi03YzViMjY2Y1xcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1VwbG9hZEJ1dHRvbi52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtN2M1YjI2NmNcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9VcGxvYWRCdXR0b24udnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTdjNWIyNjZjXCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9VcGxvYWRCdXR0b24udnVlXG4vLyBtb2R1bGUgaWQgPSAxNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5pbnB1dFt0eXBlPWZpbGVdW2RhdGEtdi03YzViMjY2Y10ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IC05OTk5OXB4O1xcbn1cXG4ubG9hZGluZ1tkYXRhLXYtN2M1YjI2NmNdIHtcXG4gICAgb3BhY2l0eTogMC40O1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL2NoYW5nemhvdS9jb2RlL2xhcmF2ZWwtdnVldGlmeS9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1VwbG9hZEJ1dHRvbi52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQTJKQTtJQUNBLG1CQUFBO0lBQ0EsZUFBQTtDQUNBO0FBRUE7SUFDQSxhQUFBO0NBQ0FcIixcImZpbGVcIjpcIlVwbG9hZEJ1dHRvbi52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgICA8ZGl2PlxcbiAgICAgICAgPHYtY2FyZD5cXG4gICAgICAgICAgICA8di1jYXJkLW1lZGlhIGNvbnRhaW4gOmNsYXNzPVxcXCJ7J2xvYWRpbmcnOmxvYWRpbmd9XFxcIiB2LXNob3c9XFxcImltYWdlVXJsXFxcIiByZWY9XFxcImltYWdlVXJsXFxcIiBzdHlsZT1cXFwiY3Vyc29yOiBwb2ludGVyO1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljay5zdG9wPVxcXCJkaWFsb2cgPSB0cnVlXFxcIiA6c3JjPVxcXCJpbWFnZVVybFxcXCIgaGVpZ2h0PVxcXCIyMDBweFxcXCI+XFxuICAgICAgICAgICAgPC92LWNhcmQtbWVkaWE+XFxuXFxuICAgICAgICAgICAgPHYtYnRuIGxhcmdlXFxuICAgICAgICAgICAgICAgICAgIGJsb2NrXFxuICAgICAgICAgICAgICAgICAgIHJhaXNlZFxcbiAgICAgICAgICAgICAgICAgICBjb2xvcj1cXFwiaW5mb1xcXCJcXG4gICAgICAgICAgICAgICAgICAgQGNsaWNrPVxcXCJvblBpY2tGaWxlXFxcIlxcbiAgICAgICAgICAgICAgICAgICB2LXNob3c9XFxcInByb2dyZXNzID09PSAwXFxcIj5cXG4gICAgICAgICAgICAgICAge3sgc2VsZWN0TGFiZWwgfX1cXG4gICAgICAgICAgICA8L3YtYnRuPlxcbiAgICAgICAgICAgIDx2LXByb2dyZXNzLWxpbmVhciB2LXNob3c9XFxcImxvYWRpbmdcXFwiIGhlaWdodD1cXFwiNDBcXFwiIGNsYXNzPVxcXCJteS0wXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVxcXCJwcm9ncmVzc1xcXCIgOmNvbG9yPVxcXCJjb2xvclxcXCI+PC92LXByb2dyZXNzLWxpbmVhcj5cXG4gICAgICAgICAgICA8di1idG4gbGFyZ2UgYmxvY2sgcmFpc2VkIGNsYXNzPVxcXCJlcnJvclxcXCIgQGNsaWNrPVxcXCJyZW1vdmVGaWxlXFxcIiB2LXNob3c9XFxcInByb2dyZXNzID09PSAxMDBcXFwiPlxcbiAgICAgICAgICAgICAgICB7eyByZW1vdmVMYWJlbCB9fVxcbiAgICAgICAgICAgIDwvdi1idG4+XFxuICAgICAgICAgICAgPGlucHV0XFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVxcXCJmaWxlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgcmVmPVxcXCJpbWFnZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XFxcImltYWdlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgOmFjY2VwdD1cXFwiYWNjZXB0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgQGNoYW5nZT1cXFwib25GaWxlUGlja2VkXFxcIlxcbiAgICAgICAgICAgID5cXG4gICAgICAgIDwvdi1jYXJkPlxcbiAgICAgICAgPHYtZGlhbG9nIGZ1bGxzY3JlZW4gdi1tb2RlbD1cXFwiZGlhbG9nXFxcIiBtYXgtd2lkdGg9XFxcIjEwMCVcXFwiIGxhenk+XFxuICAgICAgICAgICAgPHYtY2FyZCBmdWxsLWhlaWdodD5cXG4gICAgICAgICAgICAgICAgPHYtY2FyZC10aXRsZT5cXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPuWbvueJh+mihOiniDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgIDx2LXNwYWNlcj48L3Ytc3BhY2VyPlxcbiAgICAgICAgICAgICAgICAgICAgPHYtYnRuIGljb24gQGNsaWNrLnN0b3A9XFxcImRpYWxvZyA9IGZhbHNlXFxcIj5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8di1pY29uPmNsZWFyPC92LWljb24+XFxuICAgICAgICAgICAgICAgICAgICA8L3YtYnRuPlxcbiAgICAgICAgICAgICAgICA8L3YtY2FyZC10aXRsZT5cXG4gICAgICAgICAgICAgICAgPHYtY2FyZC1tZWRpYSBjb250YWluIDpjbGFzcz1cXFwieydsb2FkaW5nJzpsb2FkaW5nfVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6c3JjPVxcXCJpbWFnZVVybFxcXCIgOmhlaWdodD1cXFwiZGlhbG9nSGVpZ2h0XFxcIj5cXG4gICAgICAgICAgICAgICAgPC92LWNhcmQtbWVkaWE+XFxuICAgICAgICAgICAgICAgIDx2LWNhcmQtYWN0aW9ucz5cXG4gICAgICAgICAgICAgICAgICAgIDx2LXNwYWNlcj48L3Ytc3BhY2VyPlxcbiAgICAgICAgICAgICAgICAgICAgPHYtYnRuIGZsYXQgQGNsaWNrLnN0b3A9XFxcInJlbW92ZUZpbGVcXFwiPkRlbGV0ZTwvdi1idG4+XFxuICAgICAgICAgICAgICAgICAgICA8di1idG4gY29sb3I9XFxcInByaW1hcnlcXFwiIGZsYXQgQGNsaWNrLnN0b3A9XFxcImRpYWxvZz1mYWxzZVxcXCI+Q2xvc2U8L3YtYnRuPlxcbiAgICAgICAgICAgICAgICA8L3YtY2FyZC1hY3Rpb25zPlxcbiAgICAgICAgICAgIDwvdi1jYXJkPlxcbiAgICAgICAgPC92LWRpYWxvZz5cXG4gICAgPC9kaXY+XFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcbiAgZXhwb3J0IGRlZmF1bHQge1xcbiAgICBwcm9wczoge1xcbiAgICAgIHZhbHVlOiB7XFxuICAgICAgICB0eXBlOiBTdHJpbmdcXG4gICAgICB9LFxcbiAgICAgIGFjY2VwdDoge1xcbiAgICAgICAgdHlwZTogU3RyaW5nLFxcbiAgICAgICAgZGVmYXVsdDogJyonXFxuICAgICAgfSxcXG4gICAgICBzZWxlY3RMYWJlbDoge1xcbiAgICAgICAgdHlwZTogU3RyaW5nLFxcbiAgICAgICAgZGVmYXVsdDogJ1NlbGVjdCBhbiBpbWFnZSdcXG4gICAgICB9LFxcbiAgICAgIHJlbW92ZUxhYmVsOiB7XFxuICAgICAgICB0eXBlOiBTdHJpbmcsXFxuICAgICAgICBkZWZhdWx0OiAnUmVtb3ZlJ1xcbiAgICAgIH1cXG4gICAgfSxcXG5cXG4gICAgZGF0YSAoKSB7XFxuICAgICAgcmV0dXJuIHtcXG4gICAgICAgIGltYWdlVXJsOiAnJyxcXG4gICAgICAgIHByb2dyZXNzOiAwLFxcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXFxuICAgICAgICBkaWFsb2c6IGZhbHNlXFxuICAgICAgfVxcbiAgICB9LFxcblxcbiAgICB3YXRjaDoge1xcbiAgICAgIC8vIHZhbHVlICh2KSB7XFxuICAgICAgLy8gICB0aGlzLmltYWdlVXJsID0gdlxcbiAgICAgIC8vIH1cXG4gICAgfSxcXG5cXG4gICAgbW91bnRlZCAoKSB7XFxuICAgICAgdGhpcy5pbWFnZVVybCA9ICcnXFxuICAgIH0sXFxuICAgIGNvbXB1dGVkOiB7XFxuICAgICAgZGlhbG9nSGVpZ2h0ICgpIHtcXG4gICAgICAgIHJldHVybiB0aGlzLiR2dWV0aWZ5LmJyZWFrcG9pbnQuaGVpZ2h0IC0gMTAwXFxuICAgICAgfSxcXG4gICAgICBjb2xvciAoKSB7XFxuICAgICAgICByZXR1cm4gWydlcnJvcicsICd3YXJuaW5nJywgJ3N1Y2Nlc3MnXVtNYXRoLmZsb29yKHRoaXMucHJvZ3Jlc3MgLyA0MCldXFxuICAgICAgfVxcbiAgICB9LFxcbiAgICBtZXRob2RzOiB7XFxuXFxuICAgICAgb25QaWNrRmlsZSAoKSB7XFxuICAgICAgICB0aGlzLiRyZWZzLmltYWdlLmNsaWNrKClcXG4gICAgICB9LFxcblxcbiAgICAgIGFzeW5jIG9uRmlsZVBpY2tlZCAoZXZlbnQpIHtcXG4gICAgICAgIGNvbnN0IGZpbGVzID0gZXZlbnQudGFyZ2V0LmZpbGVzIHx8IGV2ZW50LmRhdGFUcmFuc2Zlci5maWxlc1xcblxcbiAgICAgICAgaWYgKGZpbGVzICYmIGZpbGVzWzBdKSB7XFxuICAgICAgICAgIGxldCBmaWxlbmFtZSA9IGZpbGVzWzBdLm5hbWVcXG5cXG4gICAgICAgICAgaWYgKGZpbGVuYW1lICYmIGZpbGVuYW1lLmxhc3RJbmRleE9mKCcuJykgPD0gMCkge1xcbiAgICAgICAgICAgIHJldHVybiAvL3JldHVybiBhbGVydCgnUGxlYXNlIGFkZCBhIHZhbGlkIGltYWdlIScpXFxuICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgY29uc3QgZmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcXG4gICAgICAgICAgZmlsZVJlYWRlci5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VVcmwgPSBmaWxlUmVhZGVyLnJlc3VsdFxcbiAgICAgICAgICB9KVxcbiAgICAgICAgICBmaWxlUmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZXNbMF0pXFxuXFxuICAgICAgICAgIGxldCBwYXRoID0gYXdhaXQgdGhpcy51cGxvYWQoZmlsZXNbMF0pXFxuICAgICAgICAgIC8vIHRoaXMuaW1hZ2VVcmwgPSBwYXRoXFxuICAgICAgICAgIHRoaXMuJGVtaXQoJ2dldFBhdGgnLCBwYXRoKVxcbiAgICAgICAgfVxcbiAgICAgIH0sXFxuXFxuICAgICAgcmVtb3ZlRmlsZSAoKSB7XFxuICAgICAgICB0aGlzLmltYWdlVXJsID0gJydcXG4gICAgICAgIHRoaXMucHJvZ3Jlc3MgPSAwXFxuICAgICAgICB0aGlzLmRpYWxvZyA9IGZhbHNlXFxuICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnbWVzc2FnZS9yZXNwb25zZU1lc3NhZ2UnLCB7dGV4dDogdGhpcy4kdCgncmVtb3ZlX2ltZ19zdWNjZXNzJyl9KVxcbiAgICAgIH0sXFxuXFxuICAgICAgYXN5bmMgdXBsb2FkIChlKSB7XFxuICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKVxcbiAgICAgICAgbGV0IGNvbmZpZyA9IHtcXG4gICAgICAgICAgaGVhZGVyczoge1xcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YSdcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgb25VcGxvYWRQcm9ncmVzczogcHJvZ3Jlc3NFdmVudCA9PiB7XFxuICAgICAgICAgICAgdGhpcy5wcm9ncmVzcyA9IE1hdGgucm91bmQoKFxcbiAgICAgICAgICAgICAgcHJvZ3Jlc3NFdmVudC5sb2FkZWQgKiAxMDApIC8gcHJvZ3Jlc3NFdmVudC50b3RhbClcXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9ncmVzcyA+PSAxMDApIHRoaXMubG9hZGluZyA9IGZhbHNlXFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnYXZhdGFyJywgZSlcXG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWVcXG4gICAgICAgIGxldCB7ZGF0YX0gPSBhd2FpdCB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnZmlsZS91cGxvYWRJbWFnZScsIHtmb3JtRGF0YSwgY29uZmlnfSlcXG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlXFxuICAgICAgICByZXR1cm4gZGF0YVxcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbjwvc2NyaXB0PlxcblxcbjxzdHlsZSBzY29wZWQ+XFxuICAgIGlucHV0W3R5cGU9ZmlsZV0ge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgbGVmdDogLTk5OTk5cHg7XFxuICAgIH1cXG5cXG4gICAgLmxvYWRpbmcge1xcbiAgICAgICAgb3BhY2l0eTogMC40O1xcbiAgICB9XFxuPC9zdHlsZT5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtN2M1YjI2NmNcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1VwbG9hZEJ1dHRvbi52dWVcbi8vIG1vZHVsZSBpZCA9IDE0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIiwiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDx2LWNhcmQ+XG4gICAgICAgICAgICA8di1jYXJkLW1lZGlhIGNvbnRhaW4gOmNsYXNzPVwieydsb2FkaW5nJzpsb2FkaW5nfVwiIHYtc2hvdz1cImltYWdlVXJsXCIgcmVmPVwiaW1hZ2VVcmxcIiBzdHlsZT1cImN1cnNvcjogcG9pbnRlcjtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2suc3RvcD1cImRpYWxvZyA9IHRydWVcIiA6c3JjPVwiaW1hZ2VVcmxcIiBoZWlnaHQ9XCIyMDBweFwiPlxuICAgICAgICAgICAgPC92LWNhcmQtbWVkaWE+XG5cbiAgICAgICAgICAgIDx2LWJ0biBsYXJnZVxuICAgICAgICAgICAgICAgICAgIGJsb2NrXG4gICAgICAgICAgICAgICAgICAgcmFpc2VkXG4gICAgICAgICAgICAgICAgICAgY29sb3I9XCJpbmZvXCJcbiAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJvblBpY2tGaWxlXCJcbiAgICAgICAgICAgICAgICAgICB2LXNob3c9XCJwcm9ncmVzcyA9PT0gMFwiPlxuICAgICAgICAgICAgICAgIHt7IHNlbGVjdExhYmVsIH19XG4gICAgICAgICAgICA8L3YtYnRuPlxuICAgICAgICAgICAgPHYtcHJvZ3Jlc3MtbGluZWFyIHYtc2hvdz1cImxvYWRpbmdcIiBoZWlnaHQ9XCI0MFwiIGNsYXNzPVwibXktMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInByb2dyZXNzXCIgOmNvbG9yPVwiY29sb3JcIj48L3YtcHJvZ3Jlc3MtbGluZWFyPlxuICAgICAgICAgICAgPHYtYnRuIGxhcmdlIGJsb2NrIHJhaXNlZCBjbGFzcz1cImVycm9yXCIgQGNsaWNrPVwicmVtb3ZlRmlsZVwiIHYtc2hvdz1cInByb2dyZXNzID09PSAxMDBcIj5cbiAgICAgICAgICAgICAgICB7eyByZW1vdmVMYWJlbCB9fVxuICAgICAgICAgICAgPC92LWJ0bj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgICAgICAgICAgIHJlZj1cImltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgOmFjY2VwdD1cImFjY2VwdFwiXG4gICAgICAgICAgICAgICAgICAgIEBjaGFuZ2U9XCJvbkZpbGVQaWNrZWRcIlxuICAgICAgICAgICAgPlxuICAgICAgICA8L3YtY2FyZD5cbiAgICAgICAgPHYtZGlhbG9nIGZ1bGxzY3JlZW4gdi1tb2RlbD1cImRpYWxvZ1wiIG1heC13aWR0aD1cIjEwMCVcIiBsYXp5PlxuICAgICAgICAgICAgPHYtY2FyZCBmdWxsLWhlaWdodD5cbiAgICAgICAgICAgICAgICA8di1jYXJkLXRpdGxlPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj7lm77niYfpooTop4g8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDx2LXNwYWNlcj48L3Ytc3BhY2VyPlxuICAgICAgICAgICAgICAgICAgICA8di1idG4gaWNvbiBAY2xpY2suc3RvcD1cImRpYWxvZyA9IGZhbHNlXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWljb24+Y2xlYXI8L3YtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cbiAgICAgICAgICAgICAgICA8L3YtY2FyZC10aXRsZT5cbiAgICAgICAgICAgICAgICA8di1jYXJkLW1lZGlhIGNvbnRhaW4gOmNsYXNzPVwieydsb2FkaW5nJzpsb2FkaW5nfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6c3JjPVwiaW1hZ2VVcmxcIiA6aGVpZ2h0PVwiZGlhbG9nSGVpZ2h0XCI+XG4gICAgICAgICAgICAgICAgPC92LWNhcmQtbWVkaWE+XG4gICAgICAgICAgICAgICAgPHYtY2FyZC1hY3Rpb25zPlxuICAgICAgICAgICAgICAgICAgICA8di1zcGFjZXI+PC92LXNwYWNlcj5cbiAgICAgICAgICAgICAgICAgICAgPHYtYnRuIGZsYXQgQGNsaWNrLnN0b3A9XCJyZW1vdmVGaWxlXCI+RGVsZXRlPC92LWJ0bj5cbiAgICAgICAgICAgICAgICAgICAgPHYtYnRuIGNvbG9yPVwicHJpbWFyeVwiIGZsYXQgQGNsaWNrLnN0b3A9XCJkaWFsb2c9ZmFsc2VcIj5DbG9zZTwvdi1idG4+XG4gICAgICAgICAgICAgICAgPC92LWNhcmQtYWN0aW9ucz5cbiAgICAgICAgICAgIDwvdi1jYXJkPlxuICAgICAgICA8L3YtZGlhbG9nPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIHByb3BzOiB7XG4gICAgICB2YWx1ZToge1xuICAgICAgICB0eXBlOiBTdHJpbmdcbiAgICAgIH0sXG4gICAgICBhY2NlcHQ6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBkZWZhdWx0OiAnKidcbiAgICAgIH0sXG4gICAgICBzZWxlY3RMYWJlbDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIGRlZmF1bHQ6ICdTZWxlY3QgYW4gaW1hZ2UnXG4gICAgICB9LFxuICAgICAgcmVtb3ZlTGFiZWw6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBkZWZhdWx0OiAnUmVtb3ZlJ1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBkYXRhICgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGltYWdlVXJsOiAnJyxcbiAgICAgICAgcHJvZ3Jlc3M6IDAsXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICBkaWFsb2c6IGZhbHNlXG4gICAgICB9XG4gICAgfSxcblxuICAgIHdhdGNoOiB7XG4gICAgICAvLyB2YWx1ZSAodikge1xuICAgICAgLy8gICB0aGlzLmltYWdlVXJsID0gdlxuICAgICAgLy8gfVxuICAgIH0sXG5cbiAgICBtb3VudGVkICgpIHtcbiAgICAgIHRoaXMuaW1hZ2VVcmwgPSAnJ1xuICAgIH0sXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgIGRpYWxvZ0hlaWdodCAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiR2dWV0aWZ5LmJyZWFrcG9pbnQuaGVpZ2h0IC0gMTAwXG4gICAgICB9LFxuICAgICAgY29sb3IgKCkge1xuICAgICAgICByZXR1cm4gWydlcnJvcicsICd3YXJuaW5nJywgJ3N1Y2Nlc3MnXVtNYXRoLmZsb29yKHRoaXMucHJvZ3Jlc3MgLyA0MCldXG4gICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG5cbiAgICAgIG9uUGlja0ZpbGUgKCkge1xuICAgICAgICB0aGlzLiRyZWZzLmltYWdlLmNsaWNrKClcbiAgICAgIH0sXG5cbiAgICAgIGFzeW5jIG9uRmlsZVBpY2tlZCAoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgZmlsZXMgPSBldmVudC50YXJnZXQuZmlsZXMgfHwgZXZlbnQuZGF0YVRyYW5zZmVyLmZpbGVzXG5cbiAgICAgICAgaWYgKGZpbGVzICYmIGZpbGVzWzBdKSB7XG4gICAgICAgICAgbGV0IGZpbGVuYW1lID0gZmlsZXNbMF0ubmFtZVxuXG4gICAgICAgICAgaWYgKGZpbGVuYW1lICYmIGZpbGVuYW1lLmxhc3RJbmRleE9mKCcuJykgPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIC8vcmV0dXJuIGFsZXJ0KCdQbGVhc2UgYWRkIGEgdmFsaWQgaW1hZ2UhJylcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBmaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICAgICAgICAgIGZpbGVSZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VVcmwgPSBmaWxlUmVhZGVyLnJlc3VsdFxuICAgICAgICAgIH0pXG4gICAgICAgICAgZmlsZVJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGVzWzBdKVxuXG4gICAgICAgICAgbGV0IHBhdGggPSBhd2FpdCB0aGlzLnVwbG9hZChmaWxlc1swXSlcbiAgICAgICAgICAvLyB0aGlzLmltYWdlVXJsID0gcGF0aFxuICAgICAgICAgIHRoaXMuJGVtaXQoJ2dldFBhdGgnLCBwYXRoKVxuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICByZW1vdmVGaWxlICgpIHtcbiAgICAgICAgdGhpcy5pbWFnZVVybCA9ICcnXG4gICAgICAgIHRoaXMucHJvZ3Jlc3MgPSAwXG4gICAgICAgIHRoaXMuZGlhbG9nID0gZmFsc2VcbiAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ21lc3NhZ2UvcmVzcG9uc2VNZXNzYWdlJywge3RleHQ6IHRoaXMuJHQoJ3JlbW92ZV9pbWdfc3VjY2VzcycpfSlcbiAgICAgIH0sXG5cbiAgICAgIGFzeW5jIHVwbG9hZCAoZSkge1xuICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKVxuICAgICAgICBsZXQgY29uZmlnID0ge1xuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uVXBsb2FkUHJvZ3Jlc3M6IHByb2dyZXNzRXZlbnQgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9ncmVzcyA9IE1hdGgucm91bmQoKFxuICAgICAgICAgICAgICBwcm9ncmVzc0V2ZW50LmxvYWRlZCAqIDEwMCkgLyBwcm9ncmVzc0V2ZW50LnRvdGFsKVxuICAgICAgICAgICAgaWYgKHRoaXMucHJvZ3Jlc3MgPj0gMTAwKSB0aGlzLmxvYWRpbmcgPSBmYWxzZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2F2YXRhcicsIGUpXG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWVcbiAgICAgICAgbGV0IHtkYXRhfSA9IGF3YWl0IHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdmaWxlL3VwbG9hZEltYWdlJywge2Zvcm1EYXRhLCBjb25maWd9KVxuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZVxuICAgICAgICByZXR1cm4gZGF0YVxuICAgICAgfVxuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4gICAgaW5wdXRbdHlwZT1maWxlXSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogLTk5OTk5cHg7XG4gICAgfVxuXG4gICAgLmxvYWRpbmcge1xuICAgICAgICBvcGFjaXR5OiAwLjQ7XG4gICAgfVxuPC9zdHlsZT5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1VwbG9hZEJ1dHRvbi52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwidi1jYXJkXCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInYtY2FyZC1tZWRpYVwiLCB7XG4gICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uaW1hZ2VVcmwsXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJpbWFnZVVybFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICByZWY6IFwiaW1hZ2VVcmxcIixcbiAgICAgICAgICAgIGNsYXNzOiB7IGxvYWRpbmc6IF92bS5sb2FkaW5nIH0sXG4gICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBjdXJzb3I6IFwicG9pbnRlclwiIH0sXG4gICAgICAgICAgICBhdHRyczogeyBjb250YWluOiBcIlwiLCBzcmM6IF92bS5pbWFnZVVybCwgaGVpZ2h0OiBcIjIwMHB4XCIgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgICBfdm0uZGlhbG9nID0gdHJ1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucHJvZ3Jlc3MgPT09IDAsXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInByb2dyZXNzID09PSAwXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIGF0dHJzOiB7IGxhcmdlOiBcIlwiLCBibG9jazogXCJcIiwgcmFpc2VkOiBcIlwiLCBjb2xvcjogXCJpbmZvXCIgfSxcbiAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5vblBpY2tGaWxlIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLnNlbGVjdExhYmVsKSArIFwiXFxuICAgICAgICBcIildXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwidi1wcm9ncmVzcy1saW5lYXJcIiwge1xuICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmxvYWRpbmcsXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJsb2FkaW5nXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm15LTBcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IGhlaWdodDogXCI0MFwiLCBjb2xvcjogX3ZtLmNvbG9yIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnByb2dyZXNzLFxuICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgX3ZtLnByb2dyZXNzID0gJCR2XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicHJvZ3Jlc3NcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnByb2dyZXNzID09PSAxMDAsXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInByb2dyZXNzID09PSAxMDBcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZXJyb3JcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgbGFyZ2U6IFwiXCIsIGJsb2NrOiBcIlwiLCByYWlzZWQ6IFwiXCIgfSxcbiAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5yZW1vdmVGaWxlIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLnJlbW92ZUxhYmVsKSArIFwiXFxuICAgICAgICBcIildXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgcmVmOiBcImltYWdlXCIsXG4gICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImZpbGVcIiwgbmFtZTogXCJpbWFnZVwiLCBhY2NlcHQ6IF92bS5hY2NlcHQgfSxcbiAgICAgICAgICAgIG9uOiB7IGNoYW5nZTogX3ZtLm9uRmlsZVBpY2tlZCB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWRpYWxvZ1wiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHsgZnVsbHNjcmVlbjogXCJcIiwgXCJtYXgtd2lkdGhcIjogXCIxMDAlXCIsIGxhenk6IFwiXCIgfSxcbiAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgdmFsdWU6IF92bS5kaWFsb2csXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgIF92bS5kaWFsb2cgPSAkJHZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcImRpYWxvZ1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtY2FyZFwiLFxuICAgICAgICAgICAgeyBhdHRyczogeyBcImZ1bGwtaGVpZ2h0XCI6IFwiXCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtY2FyZC10aXRsZVwiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5Zu+54mH6aKE6KeIXCIpXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ2LXNwYWNlclwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGlhbG9nID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfYyhcInYtaWNvblwiLCBbX3ZtLl92KFwiY2xlYXJcIildKV0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ2LWNhcmQtbWVkaWFcIiwge1xuICAgICAgICAgICAgICAgIGNsYXNzOiB7IGxvYWRpbmc6IF92bS5sb2FkaW5nIH0sXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGNvbnRhaW46IFwiXCIsXG4gICAgICAgICAgICAgICAgICBzcmM6IF92bS5pbWFnZVVybCxcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogX3ZtLmRpYWxvZ0hlaWdodFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1jYXJkLWFjdGlvbnNcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInYtc3BhY2VyXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmbGF0OiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucmVtb3ZlRmlsZSgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiRGVsZXRlXCIpXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sb3I6IFwicHJpbWFyeVwiLCBmbGF0OiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kaWFsb2cgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkNsb3NlXCIpXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTdjNWIyNjZjXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi03YzViMjY2Y1wiLFwiaGFzU2NvcGVkXCI6dHJ1ZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1VwbG9hZEJ1dHRvbi52dWVcbi8vIG1vZHVsZSBpZCA9IDE1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTRhNDFlNzYyXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vc2V0dGluZ3MudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCIyNDI2ODAyMlwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNGE0MWU3NjJcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9zZXR0aW5ncy52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNGE0MWU3NjJcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9zZXR0aW5ncy52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNGE0MWU3NjJcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9udXh0L3NldHRpbmdzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwiZmlsZVwiOlwic2V0dGluZ3MudnVlXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNGE0MWU3NjJcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9udXh0L3NldHRpbmdzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjExXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIjx0ZW1wbGF0ZT5cbiAgICAgICAgPHYtY2FyZD5cbiAgICAgICAgICAgIDx2LWNhcmQtdGl0bGUgcHJpbWFyeS10aXRsZSBjbGFzcz1cImdyZXkgbGlnaHRlbi00XCI+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiaGVhZGxpbmUgbWItMFwiPnt7IG5hbWUgfX08L2gzPlxuICAgICAgICAgICAgPC92LWNhcmQtdGl0bGU+XG4gICAgICAgICAgICA8di1kaXZpZGVyPjwvdi1kaXZpZGVyPlxuICAgICAgICAgICAgPCEtLTx2LXRvb2xiYXItLT5cbiAgICAgICAgICAgICAgICAgICAgPCEtLXRhYnMtLT5cbiAgICAgICAgICAgIDwhLS0mZ3Q7LS0+XG4gICAgICAgICAgICAgICAgPCEtLTx2LXRleHQtZmllbGQtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS1wcmVwZW5kLWljb249XCJzZWFyY2hcIi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLWFwcGVuZC1pY29uPVwibWljXCItLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS1sYWJlbD1cIlNlYXJjaFwiLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tc29sby1pbnZlcnRlZC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLWNsYXNzPVwibXgtM1wiLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tZmxhdC0tPlxuICAgICAgICAgICAgICAgIDwhLS0mZ3Q7PC92LXRleHQtZmllbGQ+LS0+XG4gICAgICAgICAgICAgICAgPCEtLTx2LXRhYnMgdi1pZj1cImxvYWRlZFwiLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tc2xvdD1cImV4dGVuc2lvblwiLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tdi1tb2RlbD1cInRhYnNcIi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLWNlbnRlcmVkLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tc2hvdy1hcnJvd3MtLT5cbiAgICAgICAgICAgICAgICA8IS0tJmd0Oy0tPlxuXG4gICAgICAgICAgICAgICAgICAgIDwhLS08di10YWJzLXNsaWRlciBjb2xvcj1cInByaW1hcnlcIj48L3YtdGFicy1zbGlkZXI+LS0+XG4gICAgICAgICAgICAgICAgICAgIDwhLS08di10YWItLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tdi1mb3I9XCJudXh0IGluIG51eHRzXCItLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tOmtleT1cIm51eHQuaWRcIi0tPlxuICAgICAgICAgICAgICAgICAgICA8IS0tJmd0Oy0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLXt7IG51eHQubmFtZSB9fS0tPlxuICAgICAgICAgICAgICAgICAgICA8IS0tPC92LXRhYj4tLT5cbiAgICAgICAgICAgICAgICA8IS0tPC92LXRhYnM+LS0+XG4gICAgICAgICAgICA8IS0tPC92LXRvb2xiYXI+LS0+XG4gICAgICAgICAgICA8IS0tPHYtdGFicy1pdGVtcyB2LW1vZGVsPVwidGFic1wiIHYtaWY9XCJsb2FkZWRcIj4tLT5cbiAgICAgICAgICAgICAgICA8IS0tPHYtdGFiLWl0ZW0tLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS12LWZvcj1cIm51eHQgaW4gbnV4dHNcIi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTprZXk9XCJudXh0LmlkXCItLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS06aWQ9XCIndGFiLScgKyBudXh0LmlkXCItLT5cbiAgICAgICAgICAgICAgICA8IS0tJmd0Oy0tPlxuICAgICAgICAgICAgICAgICAgICA8IS0tPHYtZm9ybSB2LW1vZGVsPVwidmFsaWRcIiA6cmVmPVwiJ3RhYi0nICsgbnV4dC5pZCArJ2Zvcm0nXCIgbGF6eS12YWxpZGF0aW9uPi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTx2LWNhcmQ+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTx2LWNhcmQtdGV4dD4tLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTx2LXRleHQtZmllbGQtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tbGFiZWw9XCLmlofnq6DmoIfpophcIi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS12LW1vZGVsPVwibnV4dC5mb3JtRGF0YS50aXRsZVwiLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTpydWxlcz1cInRpdGxlUnVsZXNcIi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS06Y291bnRlcj1cIjMyXCItLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tcmVxdWlyZWQtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSZndDs8L3YtdGV4dC1maWVsZD4tLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTx1cGxvYWQtYnV0dG9uLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLWNsYXNzPVwibXgtMFwiLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLWFjY2VwdD1cImltYWdlLypcIi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS1yZWY9XCJmaWxlSW5wdXRcIi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS1AZ2V0UGF0aD1cImdldFBhdGgoc3JjLG51eHQpXCItLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLS8+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTwvdi1jYXJkLXRleHQ+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTx2LWRpdmlkZXIgY2xhc3M9XCJtdC01XCI+PC92LWRpdmlkZXI+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTx2LWNhcmQtYWN0aW9ucz4tLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTx2LWJ0biBmbGF0IEBjbGljaz1cInJlc2V0Rm9ybSgpXCI+Q2xlYXI8L3YtYnRuPi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tPHYtc3BhY2VyPjwvdi1zcGFjZXI+LS0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTx2LWJ0biBjb2xvcj1cInByaW1hcnlcIiA6ZGlzYWJsZWQ9XCIhdmFsaWRcIiBmbGF0IEBjbGljaz1cInN1Ym1pdFwiPlN1Ym1pdDwvdi1idG4+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTwvdi1jYXJkLWFjdGlvbnM+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tPC92LWNhcmQ+LS0+XG4gICAgICAgICAgICAgICAgICAgIDwhLS08L3YtZm9ybT4tLT5cbiAgICAgICAgICAgICAgICA8IS0tPC92LXRhYi1pdGVtPi0tPlxuICAgICAgICAgICAgPCEtLTwvdi10YWJzLWl0ZW1zPi0tPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8di10b29sYmFyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInB1cnBsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXJrXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJzXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8di10ZXh0LWZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlcGVuZC1pY29uPVwic2VhcmNoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBlbmQtaWNvbj1cIm1pY1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTZWFyY2hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvbG8taW52ZXJ0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm14LTNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsYXRcbiAgICAgICAgICAgICAgICAgICAgPjwvdi10ZXh0LWZpZWxkPlxuICAgICAgICAgICAgICAgICAgICA8di10YWJzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xvdD1cImV4dGVuc2lvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwidGFic1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVyLWNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwidHJhbnNwYXJlbnRcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di10YWJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1mb3I9XCJuIGluIDNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6a2V5PVwiblwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSXRlbSB7eyBuIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtdGFiPlxuICAgICAgICAgICAgICAgICAgICA8L3YtdGFicz5cbiAgICAgICAgICAgICAgICA8L3YtdG9vbGJhcj5cbiAgICAgICAgICAgICAgICA8di10YWJzLWl0ZW1zIHYtbW9kZWw9XCJ0YWJzXCI+XG4gICAgICAgICAgICAgICAgICAgIDx2LXRhYi1pdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1mb3I9XCJuIGluIDNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XCJuXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtY2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8di1jYXJkLXRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHRleHQgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3YtY2FyZC10ZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LWNhcmQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdi10YWItaXRlbT5cbiAgICAgICAgICAgICAgICA8L3YtdGFicy1pdGVtcz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3YtY2FyZD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCBVcGxvYWRCdXR0b24gZnJvbSAnfi9jb21wb25lbnRzL1VwbG9hZEJ1dHRvbidcblxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogJ251eHRfc2V0dGluZycsXG4gICAgZGF0YSAoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0YWJzOiAwLFxuICAgICAgICBsb2FkZWQ6IGZhbHNlLFxuICAgICAgICBuYW1lOiB0aGlzLiR0KCdudXh0X3NldHRpbmdzJyksXG4gICAgICAgIG51eHRzOiBbXSxcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgIHZhbGlkOiB0cnVlLFxuICAgICAgICB0aXRsZVJ1bGVzOiBbXG4gICAgICAgICAgKHYpID0+ICEhdiB8fCAnVGl0bGUgaXMgcmVxdWlyZWQnLFxuICAgICAgICAgICh2KSA9PiB2ICYmIHYubGVuZ3RoIDw9IDY0IHx8ICdUaXRsZSBtdXN0IGJlIGxlc3MgdGhhbiA2NCBjaGFyYWN0ZXJzJ1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICBVcGxvYWRCdXR0b25cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgIGFzeW5jIGZldGNoICgpIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZVxuICAgICAgICBsZXQgcXVlcnlCdWlsZCA9IHtsaW1pdDogJ2FsbCd9XG4gICAgICAgIHF1ZXJ5QnVpbGQuc29ydGVkQnkgPSAnZGVzYydcbiAgICAgICAgcXVlcnlCdWlsZC5vcmRlckJ5ID0gJ2NyZWF0ZWRfYXQnXG4gICAgICAgIGxldCBudXh0cyA9IGF3YWl0IHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdudXh0L2luZGV4JywgcXVlcnlCdWlsZClcbiAgICAgICAgdGhpcy4kc2V0KHRoaXMsICdudXh0cycsIG51eHRzKVxuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZVxuICAgICAgfSxcbiAgICAgIGFzeW5jIHN1Ym1pdCAoKSB7XG4gICAgICAgIGlmICh0aGlzLiRyZWZzLmZvcm0udmFsaWRhdGUoKSkge1xuICAgICAgICAgIC8vIE5hdGl2ZSBmb3JtIHN1Ym1pc3Npb24gaXMgbm90IHlldCBzdXBwb3J0ZWRcbiAgICAgICAgICBhd2FpdCB0aGlzLiRzdG9yZS5kaXNwYXRjaCgncG9zdC9zdG9yZScsIHtmb3JtRGF0ZTogdGhpcy5mb3JtRGF0ZX0pXG4gICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ21lc3NhZ2UvcmVzcG9uc2VNZXNzYWdlJywge1xuICAgICAgICAgICAgdGV4dDogdGhpcy4kdCgncG9zdF9jcmVhdGVfc3VjY2VzcycpXG4gICAgICAgICAgfSlcbiAgICAgICAgICB0aGlzLiRyb3V0ZXIucmVwbGFjZSh7bmFtZTogJ3Bvc3QuaW5kZXgnfSlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHJlc2V0Rm9ybSAoKSB7XG4gICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlcyA9IFtdXG4gICAgICAgIHRoaXMuZm9ybUhhc0Vycm9ycyA9IGZhbHNlXG4gICAgICAgIHRoaXMuJHJlZnMuZm9ybS5yZXNldCgpXG4gICAgICB9LFxuICAgICAgZ2V0UGF0aCAoc3JjLCBudXh0KSB7XG4gICAgICAgIG51eHQuZm9ybURhdGEuYXZhdGFyID0gc3JjXG4gICAgICB9LFxuICAgIH0sXG4gICAgYXN5bmMgY3JlYXRlZCAoKSB7XG4gICAgICBhd2FpdCB0aGlzLmZldGNoKClcblxuICAgICAgdGhpcy5udXh0cy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICB0aGlzLiRzZXQodGhpcy5udXh0c1tpbmRleF0sICdmb3JtRGF0YScsIHtcbiAgICAgICAgICBhdmF0YXI6ICcnLFxuICAgICAgICAgIHRpdGxlOiAnJ1xuICAgICAgICB9KVxuICAgICAgfSlcbiAgICAgIHRoaXMubG9hZGVkID0gdHJ1ZVxuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG5cbjwvc3R5bGU+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9udXh0L3NldHRpbmdzLnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ2LWNhcmRcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWNhcmQtdGl0bGVcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJncmV5IGxpZ2h0ZW4tNFwiLCBhdHRyczogeyBcInByaW1hcnktdGl0bGVcIjogXCJcIiB9IH0sXG4gICAgICAgIFtfYyhcImgzXCIsIHsgc3RhdGljQ2xhc3M6IFwiaGVhZGxpbmUgbWItMFwiIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5uYW1lKSldKV1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ2LWRpdmlkZXJcIiksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi10b29sYmFyXCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IGNvbG9yOiBcInB1cnBsZVwiLCBkYXJrOiBcIlwiLCB0YWJzOiBcIlwiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm14LTNcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgXCJwcmVwZW5kLWljb25cIjogXCJzZWFyY2hcIixcbiAgICAgICAgICAgICAgICAgIFwiYXBwZW5kLWljb25cIjogXCJtaWNcIixcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlNlYXJjaFwiLFxuICAgICAgICAgICAgICAgICAgXCJzb2xvLWludmVydGVkXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICBmbGF0OiBcIlwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LXRhYnNcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBzbG90OiBcImV4dGVuc2lvblwiLFxuICAgICAgICAgICAgICAgICAgICBjZW50ZXJlZDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJzbGlkZXItY29sb3JcIjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgc2xvdDogXCJleHRlbnNpb25cIixcbiAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0udGFicyxcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgIF92bS50YWJzID0gJCR2XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidGFic1wiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBfdm0uX2woMywgZnVuY3Rpb24obikge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwidi10YWJcIiwgeyBrZXk6IG4gfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIEl0ZW0gXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKG4pICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtdGFicy1pdGVtc1wiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0udGFicyxcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICBfdm0udGFicyA9ICQkdlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ0YWJzXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF92bS5fbCgzLCBmdW5jdGlvbihuKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICBcInYtdGFiLWl0ZW1cIixcbiAgICAgICAgICAgICAgICB7IGtleTogbiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtY2FyZFwiLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LWNhcmQtdGV4dFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0udGV4dCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi00YTQxZTc2MlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNGE0MWU3NjJcIixcImhhc1Njb3BlZFwiOnRydWUsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvbnV4dC9zZXR0aW5ncy52dWVcbi8vIG1vZHVsZSBpZCA9IDIxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDIiXSwic291cmNlUm9vdCI6IiJ9
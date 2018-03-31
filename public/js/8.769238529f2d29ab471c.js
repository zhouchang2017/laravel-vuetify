webpackJsonp([8],{

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(202)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(204)
/* template */
var __vue_template__ = __webpack_require__(205)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0ded157b"
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
Component.options.__file = "resources/assets/js/pages/nuxt/create.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0ded157b", Component.options)
  } else {
    hotAPI.reload("data-v-0ded157b", Component.options)
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

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(203);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("6b0e5f0b", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0ded157b\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./create.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0ded157b\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./create.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"create.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 204:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'nuxt_create',
  components: {
    UploadButton: __WEBPACK_IMPORTED_MODULE_1__components_UploadButton___default.a
  },
  data: function data() {
    return {
      name: this.$t('nuxt_create'),
      bannerAvatarIsUrl: true,
      search: null,
      loading: false,
      catelogs: {},
      posts: [],
      formData: {
        nuxt: {
          name: '',
          prefix: ''
        },
        banner: {
          title: '',
          avatar: '',
          type: 'main',
          link: '',
          postId: null
        },
        catelogs: []
      },
      valid: true,
      catelogsLoaded: false
    };
  },

  watch: {
    search: function search(val) {
      val && this.querySelections(val);
    }
  },
  methods: {
    querySelections: function querySelections(val) {
      var _this = this;

      this.loading = true;
      // Simulated ajax query
      setTimeout(_asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var queryBuild, _ref2, data;

        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                queryBuild = {
                  search: 'title:' + val,
                  searchFields: 'title:like'
                };
                _context.next = 3;
                return _this.$store.dispatch('post/index', queryBuild);

              case 3:
                _ref2 = _context.sent;
                data = _ref2.data;

                _this.posts = data;
                _this.loading = false;

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      })), 500);
    },
    getPath: function getPath(src) {
      console.log(src);
      this.formData.banner.avatar = src;
    },
    resetForm: function resetForm() {
      this.errorMessages = [];
      this.formHasErrors = false;
      this.$refs.form.reset();
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
                return _this2.$store.dispatch('nuxt/store', { formData: _this2.formData });

              case 3:
                _this2.$store.dispatch('message/responseMessage', {
                  text: _this2.$t('nuxt_create_success')
                });
                _this2.$router.replace({ name: 'nuxt.index' });

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    },
    fetchCatelog: function fetchCatelog() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3() {
        var queryBuild, catelogs;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                queryBuild = {};
                _context3.next = 3;
                return _this3.$store.dispatch('catelog/index', queryBuild);

              case 3:
                catelogs = _context3.sent;

                _this3.$set(_this3, 'catelogs', catelogs);
                _this3.catelogsLoaded = true;

              case 6:
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
              return _this4.fetchCatelog();

            case 2:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, _this4);
    }))();
  }
});

/***/ }),

/***/ 205:
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
        "v-form",
        {
          ref: "form",
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
              _c("v-card-title", { attrs: { "primary-title": "" } }, [
                _c("div", [
                  _c("div", { staticClass: "headline" }, [
                    _vm._v("Client Base Config")
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "grey--text" }, [
                    _vm._v("客户端基本配置")
                  ])
                ])
              ]),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c("v-text-field", {
                    attrs: {
                      label: "客户端名称",
                      rules: [
                        function() {
                          return (
                            !!_vm.formData.nuxt.name || "client is required!!"
                          )
                        }
                      ],
                      counter: 32,
                      required: ""
                    },
                    model: {
                      value: _vm.formData.nuxt.name,
                      callback: function($$v) {
                        _vm.$set(_vm.formData.nuxt, "name", $$v)
                      },
                      expression: "formData.nuxt.name"
                    }
                  }),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: {
                      label: "客户端前缀",
                      rules: [
                        function() {
                          return (
                            !!_vm.formData.nuxt.prefix || "prefix is required!!"
                          )
                        }
                      ],
                      counter: 10,
                      required: ""
                    },
                    model: {
                      value: _vm.formData.nuxt.prefix,
                      callback: function($$v) {
                        _vm.$set(_vm.formData.nuxt, "prefix", $$v)
                      },
                      expression: "formData.nuxt.prefix"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("v-divider", { staticClass: "mt-2" }),
              _vm._v(" "),
              _c("v-card-title", { attrs: { "primary-title": "" } }, [
                _c("div", [
                  _c("div", { staticClass: "headline" }, [_vm._v("Banner")]),
                  _vm._v(" "),
                  _c("span", { staticClass: "grey--text" }, [
                    _vm._v("设置在客户端显示的海报大图")
                  ])
                ])
              ]),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c(
                    "v-radio-group",
                    {
                      attrs: { row: "", label: "banner位置", mandatory: false },
                      model: {
                        value: _vm.formData.banner.type,
                        callback: function($$v) {
                          _vm.$set(_vm.formData.banner, "type", $$v)
                        },
                        expression: "formData.banner.type"
                      }
                    },
                    [
                      _c("v-radio", {
                        attrs: { label: "首页头部巨幕海报", value: "main" }
                      }),
                      _vm._v(" "),
                      _c("v-radio", {
                        attrs: { label: "首页中部海报", value: "mid" }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: {
                      label: "Banner标题",
                      rules: [
                        function() {
                          return (
                            !!_vm.formData.banner.title || "title is required!!"
                          )
                        }
                      ],
                      counter: 32,
                      required: ""
                    },
                    model: {
                      value: _vm.formData.banner.title,
                      callback: function($$v) {
                        _vm.$set(_vm.formData.banner, "title", $$v)
                      },
                      expression: "formData.banner.title"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "v-radio-group",
                    {
                      attrs: { row: "", label: "banner图片", mandatory: false },
                      model: {
                        value: _vm.bannerAvatarIsUrl,
                        callback: function($$v) {
                          _vm.bannerAvatarIsUrl = $$v
                        },
                        expression: "bannerAvatarIsUrl"
                      }
                    },
                    [
                      _c("v-radio", {
                        attrs: { label: "url地址", value: true }
                      }),
                      _vm._v(" "),
                      _c("v-radio", {
                        attrs: { label: "上传图片", value: false }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-text-field", {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.bannerAvatarIsUrl,
                        expression: "bannerAvatarIsUrl"
                      }
                    ],
                    attrs: { label: "图片地址", required: "" },
                    model: {
                      value: _vm.formData.banner.avatar,
                      callback: function($$v) {
                        _vm.$set(_vm.formData.banner, "avatar", $$v)
                      },
                      expression: "formData.banner.avatar"
                    }
                  }),
                  _vm._v(" "),
                  _c("upload-button", {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: !_vm.bannerAvatarIsUrl,
                        expression: "!bannerAvatarIsUrl"
                      }
                    ],
                    ref: "fileInput",
                    staticClass: "mx-0",
                    attrs: { accept: "image/*" },
                    on: { getPath: _vm.getPath }
                  }),
                  _vm._v(" "),
                  _c("v-select", {
                    attrs: {
                      clearable: "",
                      label: "关联文章",
                      "item-text": "title",
                      "item-value": "id",
                      autocomplete: "",
                      loading: _vm.loading,
                      "cache-items": "",
                      chips: "",
                      items: _vm.posts,
                      "search-input": _vm.search
                    },
                    on: {
                      "update:searchInput": function($event) {
                        _vm.search = $event
                      }
                    },
                    model: {
                      value: _vm.formData.banner.postId,
                      callback: function($$v) {
                        _vm.$set(_vm.formData.banner, "postId", $$v)
                      },
                      expression: "formData.banner.postId"
                    }
                  }),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: { label: "链接地址", required: "" },
                    model: {
                      value: _vm.formData.banner.link,
                      callback: function($$v) {
                        _vm.$set(_vm.formData.banner, "link", $$v)
                      },
                      expression: "formData.banner.link"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("v-divider", { staticClass: "mt-2" }),
              _vm._v(" "),
              _c("v-card-title", { attrs: { "primary-title": "" } }, [
                _c("div", [
                  _c("div", { staticClass: "headline" }, [
                    _vm._v("Recommend Catalog")
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "grey--text" }, [
                    _vm._v("设置在客户端首页推荐的分类")
                  ])
                ])
              ]),
              _vm._v(" "),
              _vm.catelogsLoaded
                ? _c(
                    "v-card-text",
                    [
                      _c("v-select", {
                        attrs: {
                          label: "文章分类",
                          items: _vm.catelogs,
                          "item-text": "name",
                          "item-value": "id",
                          multiple: "",
                          "max-height": "400",
                          hint: "请选择文章分类",
                          "persistent-hint": "",
                          rules: [
                            function(v) {
                              return v.length > 0 || "Catelogs is required"
                            }
                          ],
                          chips: "",
                          required: ""
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "selection",
                            fn: function(data) {
                              return [
                                _c(
                                  "v-chip",
                                  {
                                    key: JSON.stringify(data.item),
                                    staticClass: "chip--select-multi",
                                    attrs: {
                                      close: "",
                                      selected: data.selected
                                    },
                                    on: {
                                      input: function($event) {
                                        data.parent.selectItem(data.item)
                                      }
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n                            " +
                                        _vm._s(data.item.name) +
                                        "\n                        "
                                    )
                                  ]
                                )
                              ]
                            }
                          }
                        ]),
                        model: {
                          value: _vm.formData.catelogs,
                          callback: function($$v) {
                            _vm.$set(_vm.formData, "catelogs", $$v)
                          },
                          expression: "formData.catelogs"
                        }
                      })
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _c("v-divider", { staticClass: "mt-2" }),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c(
                    "v-btn",
                    { attrs: { flat: "" }, on: { click: _vm.resetForm } },
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
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0ded157b", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL251eHQvY3JlYXRlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVXBsb2FkQnV0dG9uLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVXBsb2FkQnV0dG9uLnZ1ZT80MTVkIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9VcGxvYWRCdXR0b24udnVlP2I5MGMiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9VcGxvYWRCdXR0b24udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9VcGxvYWRCdXR0b24udnVlPzlkNWEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9udXh0L2NyZWF0ZS52dWU/YzkwZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL251eHQvY3JlYXRlLnZ1ZT82OGQ3Iiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL251eHQvY3JlYXRlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL251eHQvY3JlYXRlLnZ1ZT8xNmJiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EseUJBQXFNO0FBQ3JNO0FBQ0E7QUFDQTtBQUNBLDRDQUFrUztBQUNsUztBQUNBLDhDQUFrTDtBQUNsTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNI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O0FBQ0EsdUJBQXVCO0FBQ3ZCLDJCQUEyQjtBQUMzQixxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsImZpbGUiOiJqcy84Ljc2OTIzODUyOWYyZDI5YWI0NzFjLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0wZGVkMTU3YlxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2NyZWF0ZS52dWVcIilcbn1cbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dLFxcXCJzdGFnZS0yXFxcIl0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV1dfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2NyZWF0ZS52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTBkZWQxNTdiXFxcIixcXFwiaGFzU2NvcGVkXFxcIjp0cnVlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9jcmVhdGUudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBcImRhdGEtdi0wZGVkMTU3YlwiXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL251eHQvY3JlYXRlLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0wZGVkMTU3YlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTBkZWQxNTdiXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL251eHQvY3JlYXRlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTM0XG4vLyBtb2R1bGUgY2h1bmtzID0gOCIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoc3NyQ29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtN2M1YjI2NmNcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9VcGxvYWRCdXR0b24udnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XSxcXFwic3RhZ2UtMlxcXCJdLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9VcGxvYWRCdXR0b24udnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi03YzViMjY2Y1xcXCIsXFxcImhhc1Njb3BlZFxcXCI6dHJ1ZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vVXBsb2FkQnV0dG9uLnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gXCJkYXRhLXYtN2M1YjI2NmNcIlxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1VwbG9hZEJ1dHRvbi52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtN2M1YjI2NmNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi03YzViMjY2Y1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1VwbG9hZEJ1dHRvbi52dWVcbi8vIG1vZHVsZSBpZCA9IDE0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDgiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtN2M1YjI2NmNcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9VcGxvYWRCdXR0b24udnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCJiMGI4MTllY1wiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtN2M1YjI2NmNcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9VcGxvYWRCdXR0b24udnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTdjNWIyNjZjXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vVXBsb2FkQnV0dG9uLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi03YzViMjY2Y1wiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVXBsb2FkQnV0dG9uLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgOCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5pbnB1dFt0eXBlPWZpbGVdW2RhdGEtdi03YzViMjY2Y10ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IC05OTk5OXB4O1xcbn1cXG4ubG9hZGluZ1tkYXRhLXYtN2M1YjI2NmNdIHtcXG4gICAgb3BhY2l0eTogMC40O1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL2NoYW5nemhvdS9jb2RlL2xhcmF2ZWwtdnVldGlmeS9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1VwbG9hZEJ1dHRvbi52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQTJKQTtJQUNBLG1CQUFBO0lBQ0EsZUFBQTtDQUNBO0FBRUE7SUFDQSxhQUFBO0NBQ0FcIixcImZpbGVcIjpcIlVwbG9hZEJ1dHRvbi52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgICA8ZGl2PlxcbiAgICAgICAgPHYtY2FyZD5cXG4gICAgICAgICAgICA8di1jYXJkLW1lZGlhIGNvbnRhaW4gOmNsYXNzPVxcXCJ7J2xvYWRpbmcnOmxvYWRpbmd9XFxcIiB2LXNob3c9XFxcImltYWdlVXJsXFxcIiByZWY9XFxcImltYWdlVXJsXFxcIiBzdHlsZT1cXFwiY3Vyc29yOiBwb2ludGVyO1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljay5zdG9wPVxcXCJkaWFsb2cgPSB0cnVlXFxcIiA6c3JjPVxcXCJpbWFnZVVybFxcXCIgaGVpZ2h0PVxcXCIyMDBweFxcXCI+XFxuICAgICAgICAgICAgPC92LWNhcmQtbWVkaWE+XFxuXFxuICAgICAgICAgICAgPHYtYnRuIGxhcmdlXFxuICAgICAgICAgICAgICAgICAgIGJsb2NrXFxuICAgICAgICAgICAgICAgICAgIHJhaXNlZFxcbiAgICAgICAgICAgICAgICAgICBjb2xvcj1cXFwiaW5mb1xcXCJcXG4gICAgICAgICAgICAgICAgICAgQGNsaWNrPVxcXCJvblBpY2tGaWxlXFxcIlxcbiAgICAgICAgICAgICAgICAgICB2LXNob3c9XFxcInByb2dyZXNzID09PSAwXFxcIj5cXG4gICAgICAgICAgICAgICAge3sgc2VsZWN0TGFiZWwgfX1cXG4gICAgICAgICAgICA8L3YtYnRuPlxcbiAgICAgICAgICAgIDx2LXByb2dyZXNzLWxpbmVhciB2LXNob3c9XFxcImxvYWRpbmdcXFwiIGhlaWdodD1cXFwiNDBcXFwiIGNsYXNzPVxcXCJteS0wXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVxcXCJwcm9ncmVzc1xcXCIgOmNvbG9yPVxcXCJjb2xvclxcXCI+PC92LXByb2dyZXNzLWxpbmVhcj5cXG4gICAgICAgICAgICA8di1idG4gbGFyZ2UgYmxvY2sgcmFpc2VkIGNsYXNzPVxcXCJlcnJvclxcXCIgQGNsaWNrPVxcXCJyZW1vdmVGaWxlXFxcIiB2LXNob3c9XFxcInByb2dyZXNzID09PSAxMDBcXFwiPlxcbiAgICAgICAgICAgICAgICB7eyByZW1vdmVMYWJlbCB9fVxcbiAgICAgICAgICAgIDwvdi1idG4+XFxuICAgICAgICAgICAgPGlucHV0XFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVxcXCJmaWxlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgcmVmPVxcXCJpbWFnZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XFxcImltYWdlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgOmFjY2VwdD1cXFwiYWNjZXB0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgQGNoYW5nZT1cXFwib25GaWxlUGlja2VkXFxcIlxcbiAgICAgICAgICAgID5cXG4gICAgICAgIDwvdi1jYXJkPlxcbiAgICAgICAgPHYtZGlhbG9nIGZ1bGxzY3JlZW4gdi1tb2RlbD1cXFwiZGlhbG9nXFxcIiBtYXgtd2lkdGg9XFxcIjEwMCVcXFwiIGxhenk+XFxuICAgICAgICAgICAgPHYtY2FyZCBmdWxsLWhlaWdodD5cXG4gICAgICAgICAgICAgICAgPHYtY2FyZC10aXRsZT5cXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPuWbvueJh+mihOiniDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgIDx2LXNwYWNlcj48L3Ytc3BhY2VyPlxcbiAgICAgICAgICAgICAgICAgICAgPHYtYnRuIGljb24gQGNsaWNrLnN0b3A9XFxcImRpYWxvZyA9IGZhbHNlXFxcIj5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8di1pY29uPmNsZWFyPC92LWljb24+XFxuICAgICAgICAgICAgICAgICAgICA8L3YtYnRuPlxcbiAgICAgICAgICAgICAgICA8L3YtY2FyZC10aXRsZT5cXG4gICAgICAgICAgICAgICAgPHYtY2FyZC1tZWRpYSBjb250YWluIDpjbGFzcz1cXFwieydsb2FkaW5nJzpsb2FkaW5nfVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6c3JjPVxcXCJpbWFnZVVybFxcXCIgOmhlaWdodD1cXFwiZGlhbG9nSGVpZ2h0XFxcIj5cXG4gICAgICAgICAgICAgICAgPC92LWNhcmQtbWVkaWE+XFxuICAgICAgICAgICAgICAgIDx2LWNhcmQtYWN0aW9ucz5cXG4gICAgICAgICAgICAgICAgICAgIDx2LXNwYWNlcj48L3Ytc3BhY2VyPlxcbiAgICAgICAgICAgICAgICAgICAgPHYtYnRuIGZsYXQgQGNsaWNrLnN0b3A9XFxcInJlbW92ZUZpbGVcXFwiPkRlbGV0ZTwvdi1idG4+XFxuICAgICAgICAgICAgICAgICAgICA8di1idG4gY29sb3I9XFxcInByaW1hcnlcXFwiIGZsYXQgQGNsaWNrLnN0b3A9XFxcImRpYWxvZz1mYWxzZVxcXCI+Q2xvc2U8L3YtYnRuPlxcbiAgICAgICAgICAgICAgICA8L3YtY2FyZC1hY3Rpb25zPlxcbiAgICAgICAgICAgIDwvdi1jYXJkPlxcbiAgICAgICAgPC92LWRpYWxvZz5cXG4gICAgPC9kaXY+XFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcbiAgZXhwb3J0IGRlZmF1bHQge1xcbiAgICBwcm9wczoge1xcbiAgICAgIHZhbHVlOiB7XFxuICAgICAgICB0eXBlOiBTdHJpbmdcXG4gICAgICB9LFxcbiAgICAgIGFjY2VwdDoge1xcbiAgICAgICAgdHlwZTogU3RyaW5nLFxcbiAgICAgICAgZGVmYXVsdDogJyonXFxuICAgICAgfSxcXG4gICAgICBzZWxlY3RMYWJlbDoge1xcbiAgICAgICAgdHlwZTogU3RyaW5nLFxcbiAgICAgICAgZGVmYXVsdDogJ1NlbGVjdCBhbiBpbWFnZSdcXG4gICAgICB9LFxcbiAgICAgIHJlbW92ZUxhYmVsOiB7XFxuICAgICAgICB0eXBlOiBTdHJpbmcsXFxuICAgICAgICBkZWZhdWx0OiAnUmVtb3ZlJ1xcbiAgICAgIH1cXG4gICAgfSxcXG5cXG4gICAgZGF0YSAoKSB7XFxuICAgICAgcmV0dXJuIHtcXG4gICAgICAgIGltYWdlVXJsOiAnJyxcXG4gICAgICAgIHByb2dyZXNzOiAwLFxcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXFxuICAgICAgICBkaWFsb2c6IGZhbHNlXFxuICAgICAgfVxcbiAgICB9LFxcblxcbiAgICB3YXRjaDoge1xcbiAgICAgIC8vIHZhbHVlICh2KSB7XFxuICAgICAgLy8gICB0aGlzLmltYWdlVXJsID0gdlxcbiAgICAgIC8vIH1cXG4gICAgfSxcXG5cXG4gICAgbW91bnRlZCAoKSB7XFxuICAgICAgdGhpcy5pbWFnZVVybCA9ICcnXFxuICAgIH0sXFxuICAgIGNvbXB1dGVkOiB7XFxuICAgICAgZGlhbG9nSGVpZ2h0ICgpIHtcXG4gICAgICAgIHJldHVybiB0aGlzLiR2dWV0aWZ5LmJyZWFrcG9pbnQuaGVpZ2h0IC0gMTAwXFxuICAgICAgfSxcXG4gICAgICBjb2xvciAoKSB7XFxuICAgICAgICByZXR1cm4gWydlcnJvcicsICd3YXJuaW5nJywgJ3N1Y2Nlc3MnXVtNYXRoLmZsb29yKHRoaXMucHJvZ3Jlc3MgLyA0MCldXFxuICAgICAgfVxcbiAgICB9LFxcbiAgICBtZXRob2RzOiB7XFxuXFxuICAgICAgb25QaWNrRmlsZSAoKSB7XFxuICAgICAgICB0aGlzLiRyZWZzLmltYWdlLmNsaWNrKClcXG4gICAgICB9LFxcblxcbiAgICAgIGFzeW5jIG9uRmlsZVBpY2tlZCAoZXZlbnQpIHtcXG4gICAgICAgIGNvbnN0IGZpbGVzID0gZXZlbnQudGFyZ2V0LmZpbGVzIHx8IGV2ZW50LmRhdGFUcmFuc2Zlci5maWxlc1xcblxcbiAgICAgICAgaWYgKGZpbGVzICYmIGZpbGVzWzBdKSB7XFxuICAgICAgICAgIGxldCBmaWxlbmFtZSA9IGZpbGVzWzBdLm5hbWVcXG5cXG4gICAgICAgICAgaWYgKGZpbGVuYW1lICYmIGZpbGVuYW1lLmxhc3RJbmRleE9mKCcuJykgPD0gMCkge1xcbiAgICAgICAgICAgIHJldHVybiAvL3JldHVybiBhbGVydCgnUGxlYXNlIGFkZCBhIHZhbGlkIGltYWdlIScpXFxuICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgY29uc3QgZmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcXG4gICAgICAgICAgZmlsZVJlYWRlci5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VVcmwgPSBmaWxlUmVhZGVyLnJlc3VsdFxcbiAgICAgICAgICB9KVxcbiAgICAgICAgICBmaWxlUmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZXNbMF0pXFxuXFxuICAgICAgICAgIGxldCBwYXRoID0gYXdhaXQgdGhpcy51cGxvYWQoZmlsZXNbMF0pXFxuICAgICAgICAgIC8vIHRoaXMuaW1hZ2VVcmwgPSBwYXRoXFxuICAgICAgICAgIHRoaXMuJGVtaXQoJ2dldFBhdGgnLCBwYXRoKVxcbiAgICAgICAgfVxcbiAgICAgIH0sXFxuXFxuICAgICAgcmVtb3ZlRmlsZSAoKSB7XFxuICAgICAgICB0aGlzLmltYWdlVXJsID0gJydcXG4gICAgICAgIHRoaXMucHJvZ3Jlc3MgPSAwXFxuICAgICAgICB0aGlzLmRpYWxvZyA9IGZhbHNlXFxuICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnbWVzc2FnZS9yZXNwb25zZU1lc3NhZ2UnLCB7dGV4dDogdGhpcy4kdCgncmVtb3ZlX2ltZ19zdWNjZXNzJyl9KVxcbiAgICAgIH0sXFxuXFxuICAgICAgYXN5bmMgdXBsb2FkIChlKSB7XFxuICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKVxcbiAgICAgICAgbGV0IGNvbmZpZyA9IHtcXG4gICAgICAgICAgaGVhZGVyczoge1xcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YSdcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgb25VcGxvYWRQcm9ncmVzczogcHJvZ3Jlc3NFdmVudCA9PiB7XFxuICAgICAgICAgICAgdGhpcy5wcm9ncmVzcyA9IE1hdGgucm91bmQoKFxcbiAgICAgICAgICAgICAgcHJvZ3Jlc3NFdmVudC5sb2FkZWQgKiAxMDApIC8gcHJvZ3Jlc3NFdmVudC50b3RhbClcXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9ncmVzcyA+PSAxMDApIHRoaXMubG9hZGluZyA9IGZhbHNlXFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnYXZhdGFyJywgZSlcXG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWVcXG4gICAgICAgIGxldCB7ZGF0YX0gPSBhd2FpdCB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnZmlsZS91cGxvYWRJbWFnZScsIHtmb3JtRGF0YSwgY29uZmlnfSlcXG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlXFxuICAgICAgICByZXR1cm4gZGF0YVxcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbjwvc2NyaXB0PlxcblxcbjxzdHlsZSBzY29wZWQ+XFxuICAgIGlucHV0W3R5cGU9ZmlsZV0ge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgbGVmdDogLTk5OTk5cHg7XFxuICAgIH1cXG5cXG4gICAgLmxvYWRpbmcge1xcbiAgICAgICAgb3BhY2l0eTogMC40O1xcbiAgICB9XFxuPC9zdHlsZT5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtN2M1YjI2NmNcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1VwbG9hZEJ1dHRvbi52dWVcbi8vIG1vZHVsZSBpZCA9IDE0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDgiLCI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPHYtY2FyZD5cbiAgICAgICAgICAgIDx2LWNhcmQtbWVkaWEgY29udGFpbiA6Y2xhc3M9XCJ7J2xvYWRpbmcnOmxvYWRpbmd9XCIgdi1zaG93PVwiaW1hZ2VVcmxcIiByZWY9XCJpbWFnZVVybFwiIHN0eWxlPVwiY3Vyc29yOiBwb2ludGVyO1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljay5zdG9wPVwiZGlhbG9nID0gdHJ1ZVwiIDpzcmM9XCJpbWFnZVVybFwiIGhlaWdodD1cIjIwMHB4XCI+XG4gICAgICAgICAgICA8L3YtY2FyZC1tZWRpYT5cblxuICAgICAgICAgICAgPHYtYnRuIGxhcmdlXG4gICAgICAgICAgICAgICAgICAgYmxvY2tcbiAgICAgICAgICAgICAgICAgICByYWlzZWRcbiAgICAgICAgICAgICAgICAgICBjb2xvcj1cImluZm9cIlxuICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIm9uUGlja0ZpbGVcIlxuICAgICAgICAgICAgICAgICAgIHYtc2hvdz1cInByb2dyZXNzID09PSAwXCI+XG4gICAgICAgICAgICAgICAge3sgc2VsZWN0TGFiZWwgfX1cbiAgICAgICAgICAgIDwvdi1idG4+XG4gICAgICAgICAgICA8di1wcm9ncmVzcy1saW5lYXIgdi1zaG93PVwibG9hZGluZ1wiIGhlaWdodD1cIjQwXCIgY2xhc3M9XCJteS0wXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwicHJvZ3Jlc3NcIiA6Y29sb3I9XCJjb2xvclwiPjwvdi1wcm9ncmVzcy1saW5lYXI+XG4gICAgICAgICAgICA8di1idG4gbGFyZ2UgYmxvY2sgcmFpc2VkIGNsYXNzPVwiZXJyb3JcIiBAY2xpY2s9XCJyZW1vdmVGaWxlXCIgdi1zaG93PVwicHJvZ3Jlc3MgPT09IDEwMFwiPlxuICAgICAgICAgICAgICAgIHt7IHJlbW92ZUxhYmVsIH19XG4gICAgICAgICAgICA8L3YtYnRuPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICAgICAgICAgICAgcmVmPVwiaW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiaW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgICA6YWNjZXB0PVwiYWNjZXB0XCJcbiAgICAgICAgICAgICAgICAgICAgQGNoYW5nZT1cIm9uRmlsZVBpY2tlZFwiXG4gICAgICAgICAgICA+XG4gICAgICAgIDwvdi1jYXJkPlxuICAgICAgICA8di1kaWFsb2cgZnVsbHNjcmVlbiB2LW1vZGVsPVwiZGlhbG9nXCIgbWF4LXdpZHRoPVwiMTAwJVwiIGxhenk+XG4gICAgICAgICAgICA8di1jYXJkIGZ1bGwtaGVpZ2h0PlxuICAgICAgICAgICAgICAgIDx2LWNhcmQtdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPuWbvueJh+mihOiniDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHYtc3BhY2VyPjwvdi1zcGFjZXI+XG4gICAgICAgICAgICAgICAgICAgIDx2LWJ0biBpY29uIEBjbGljay5zdG9wPVwiZGlhbG9nID0gZmFsc2VcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtaWNvbj5jbGVhcjwvdi1pY29uPlxuICAgICAgICAgICAgICAgICAgICA8L3YtYnRuPlxuICAgICAgICAgICAgICAgIDwvdi1jYXJkLXRpdGxlPlxuICAgICAgICAgICAgICAgIDx2LWNhcmQtbWVkaWEgY29udGFpbiA6Y2xhc3M9XCJ7J2xvYWRpbmcnOmxvYWRpbmd9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpzcmM9XCJpbWFnZVVybFwiIDpoZWlnaHQ9XCJkaWFsb2dIZWlnaHRcIj5cbiAgICAgICAgICAgICAgICA8L3YtY2FyZC1tZWRpYT5cbiAgICAgICAgICAgICAgICA8di1jYXJkLWFjdGlvbnM+XG4gICAgICAgICAgICAgICAgICAgIDx2LXNwYWNlcj48L3Ytc3BhY2VyPlxuICAgICAgICAgICAgICAgICAgICA8di1idG4gZmxhdCBAY2xpY2suc3RvcD1cInJlbW92ZUZpbGVcIj5EZWxldGU8L3YtYnRuPlxuICAgICAgICAgICAgICAgICAgICA8di1idG4gY29sb3I9XCJwcmltYXJ5XCIgZmxhdCBAY2xpY2suc3RvcD1cImRpYWxvZz1mYWxzZVwiPkNsb3NlPC92LWJ0bj5cbiAgICAgICAgICAgICAgICA8L3YtY2FyZC1hY3Rpb25zPlxuICAgICAgICAgICAgPC92LWNhcmQ+XG4gICAgICAgIDwvdi1kaWFsb2c+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZ1xuICAgICAgfSxcbiAgICAgIGFjY2VwdDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIGRlZmF1bHQ6ICcqJ1xuICAgICAgfSxcbiAgICAgIHNlbGVjdExhYmVsOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgZGVmYXVsdDogJ1NlbGVjdCBhbiBpbWFnZSdcbiAgICAgIH0sXG4gICAgICByZW1vdmVMYWJlbDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIGRlZmF1bHQ6ICdSZW1vdmUnXG4gICAgICB9XG4gICAgfSxcblxuICAgIGRhdGEgKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaW1hZ2VVcmw6ICcnLFxuICAgICAgICBwcm9ncmVzczogMCxcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgIGRpYWxvZzogZmFsc2VcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgd2F0Y2g6IHtcbiAgICAgIC8vIHZhbHVlICh2KSB7XG4gICAgICAvLyAgIHRoaXMuaW1hZ2VVcmwgPSB2XG4gICAgICAvLyB9XG4gICAgfSxcblxuICAgIG1vdW50ZWQgKCkge1xuICAgICAgdGhpcy5pbWFnZVVybCA9ICcnXG4gICAgfSxcbiAgICBjb21wdXRlZDoge1xuICAgICAgZGlhbG9nSGVpZ2h0ICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJHZ1ZXRpZnkuYnJlYWtwb2ludC5oZWlnaHQgLSAxMDBcbiAgICAgIH0sXG4gICAgICBjb2xvciAoKSB7XG4gICAgICAgIHJldHVybiBbJ2Vycm9yJywgJ3dhcm5pbmcnLCAnc3VjY2VzcyddW01hdGguZmxvb3IodGhpcy5wcm9ncmVzcyAvIDQwKV1cbiAgICAgIH1cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcblxuICAgICAgb25QaWNrRmlsZSAoKSB7XG4gICAgICAgIHRoaXMuJHJlZnMuaW1hZ2UuY2xpY2soKVxuICAgICAgfSxcblxuICAgICAgYXN5bmMgb25GaWxlUGlja2VkIChldmVudCkge1xuICAgICAgICBjb25zdCBmaWxlcyA9IGV2ZW50LnRhcmdldC5maWxlcyB8fCBldmVudC5kYXRhVHJhbnNmZXIuZmlsZXNcblxuICAgICAgICBpZiAoZmlsZXMgJiYgZmlsZXNbMF0pIHtcbiAgICAgICAgICBsZXQgZmlsZW5hbWUgPSBmaWxlc1swXS5uYW1lXG5cbiAgICAgICAgICBpZiAoZmlsZW5hbWUgJiYgZmlsZW5hbWUubGFzdEluZGV4T2YoJy4nKSA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gLy9yZXR1cm4gYWxlcnQoJ1BsZWFzZSBhZGQgYSB2YWxpZCBpbWFnZSEnKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXG4gICAgICAgICAgZmlsZVJlYWRlci5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pbWFnZVVybCA9IGZpbGVSZWFkZXIucmVzdWx0XG4gICAgICAgICAgfSlcbiAgICAgICAgICBmaWxlUmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZXNbMF0pXG5cbiAgICAgICAgICBsZXQgcGF0aCA9IGF3YWl0IHRoaXMudXBsb2FkKGZpbGVzWzBdKVxuICAgICAgICAgIC8vIHRoaXMuaW1hZ2VVcmwgPSBwYXRoXG4gICAgICAgICAgdGhpcy4kZW1pdCgnZ2V0UGF0aCcsIHBhdGgpXG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIHJlbW92ZUZpbGUgKCkge1xuICAgICAgICB0aGlzLmltYWdlVXJsID0gJydcbiAgICAgICAgdGhpcy5wcm9ncmVzcyA9IDBcbiAgICAgICAgdGhpcy5kaWFsb2cgPSBmYWxzZVxuICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnbWVzc2FnZS9yZXNwb25zZU1lc3NhZ2UnLCB7dGV4dDogdGhpcy4kdCgncmVtb3ZlX2ltZ19zdWNjZXNzJyl9KVxuICAgICAgfSxcblxuICAgICAgYXN5bmMgdXBsb2FkIChlKSB7XG4gICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpXG4gICAgICAgIGxldCBjb25maWcgPSB7XG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgb25VcGxvYWRQcm9ncmVzczogcHJvZ3Jlc3NFdmVudCA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzID0gTWF0aC5yb3VuZCgoXG4gICAgICAgICAgICAgIHByb2dyZXNzRXZlbnQubG9hZGVkICogMTAwKSAvIHByb2dyZXNzRXZlbnQudG90YWwpXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9ncmVzcyA+PSAxMDApIHRoaXMubG9hZGluZyA9IGZhbHNlXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnYXZhdGFyJywgZSlcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZVxuICAgICAgICBsZXQge2RhdGF9ID0gYXdhaXQgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2ZpbGUvdXBsb2FkSW1hZ2UnLCB7Zm9ybURhdGEsIGNvbmZpZ30pXG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlXG4gICAgICAgIHJldHVybiBkYXRhXG4gICAgICB9XG4gICAgfVxuICB9XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbiAgICBpbnB1dFt0eXBlPWZpbGVdIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAtOTk5OTlweDtcbiAgICB9XG5cbiAgICAubG9hZGluZyB7XG4gICAgICAgIG9wYWNpdHk6IDAuNDtcbiAgICB9XG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVXBsb2FkQnV0dG9uLnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWNhcmRcIixcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwidi1jYXJkLW1lZGlhXCIsIHtcbiAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5pbWFnZVVybCxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImltYWdlVXJsXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHJlZjogXCJpbWFnZVVybFwiLFxuICAgICAgICAgICAgY2xhc3M6IHsgbG9hZGluZzogX3ZtLmxvYWRpbmcgfSxcbiAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGN1cnNvcjogXCJwb2ludGVyXCIgfSxcbiAgICAgICAgICAgIGF0dHJzOiB7IGNvbnRhaW46IFwiXCIsIHNyYzogX3ZtLmltYWdlVXJsLCBoZWlnaHQ6IFwiMjAwcHhcIiB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgIF92bS5kaWFsb2cgPSB0cnVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5wcm9ncmVzcyA9PT0gMCxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicHJvZ3Jlc3MgPT09IDBcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgYXR0cnM6IHsgbGFyZ2U6IFwiXCIsIGJsb2NrOiBcIlwiLCByYWlzZWQ6IFwiXCIsIGNvbG9yOiBcImluZm9cIiB9LFxuICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLm9uUGlja0ZpbGUgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uc2VsZWN0TGFiZWwpICsgXCJcXG4gICAgICAgIFwiKV1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJ2LXByb2dyZXNzLWxpbmVhclwiLCB7XG4gICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ubG9hZGluZyxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImxvYWRpbmdcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibXktMFwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgaGVpZ2h0OiBcIjQwXCIsIGNvbG9yOiBfdm0uY29sb3IgfSxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0ucHJvZ3Jlc3MsXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0ucHJvZ3Jlc3MgPSAkJHZcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJwcm9ncmVzc1wiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucHJvZ3Jlc3MgPT09IDEwMCxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicHJvZ3Jlc3MgPT09IDEwMFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJlcnJvclwiLFxuICAgICAgICAgICAgICBhdHRyczogeyBsYXJnZTogXCJcIiwgYmxvY2s6IFwiXCIsIHJhaXNlZDogXCJcIiB9LFxuICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLnJlbW92ZUZpbGUgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ucmVtb3ZlTGFiZWwpICsgXCJcXG4gICAgICAgIFwiKV1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICByZWY6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiZmlsZVwiLCBuYW1lOiBcImltYWdlXCIsIGFjY2VwdDogX3ZtLmFjY2VwdCB9LFxuICAgICAgICAgICAgb246IHsgY2hhbmdlOiBfdm0ub25GaWxlUGlja2VkIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInYtZGlhbG9nXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczogeyBmdWxsc2NyZWVuOiBcIlwiLCBcIm1heC13aWR0aFwiOiBcIjEwMCVcIiwgbGF6eTogXCJcIiB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLmRpYWxvZyxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgX3ZtLmRpYWxvZyA9ICQkdlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZGlhbG9nXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1jYXJkXCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IFwiZnVsbC1oZWlnaHRcIjogXCJcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1jYXJkLXRpdGxlXCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLlm77niYfpooTop4hcIildKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInYtc3BhY2VyXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kaWFsb2cgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW19jKFwidi1pY29uXCIsIFtfdm0uX3YoXCJjbGVhclwiKV0pXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInYtY2FyZC1tZWRpYVwiLCB7XG4gICAgICAgICAgICAgICAgY2xhc3M6IHsgbG9hZGluZzogX3ZtLmxvYWRpbmcgfSxcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgY29udGFpbjogXCJcIixcbiAgICAgICAgICAgICAgICAgIHNyYzogX3ZtLmltYWdlVXJsLFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBfdm0uZGlhbG9nSGVpZ2h0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWNhcmQtYWN0aW9uc1wiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidi1zcGFjZXJcIiksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZsYXQ6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5yZW1vdmVGaWxlKCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJEZWxldGVcIildXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2xvcjogXCJwcmltYXJ5XCIsIGZsYXQ6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRpYWxvZyA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQ2xvc2VcIildXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtN2M1YjI2NmNcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTdjNWIyNjZjXCIsXCJoYXNTY29wZWRcIjp0cnVlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVXBsb2FkQnV0dG9uLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgOCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0wZGVkMTU3YlxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2NyZWF0ZS52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjZiMGU1ZjBiXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0wZGVkMTU3YlxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2NyZWF0ZS52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMGRlZDE1N2JcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9jcmVhdGUudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTBkZWQxNTdiXCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvbnV4dC9jcmVhdGUudnVlXG4vLyBtb2R1bGUgaWQgPSAyMDJcbi8vIG1vZHVsZSBjaHVua3MgPSA4IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJmaWxlXCI6XCJjcmVhdGUudnVlXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtMGRlZDE1N2JcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9udXh0L2NyZWF0ZS52dWVcbi8vIG1vZHVsZSBpZCA9IDIwM1xuLy8gbW9kdWxlIGNodW5rcyA9IDgiLCI8dGVtcGxhdGU+XG4gICAgPHYtY2FyZD5cbiAgICAgICAgPHYtY2FyZC10aXRsZSBwcmltYXJ5LXRpdGxlIGNsYXNzPVwiZ3JleSBsaWdodGVuLTRcIj5cbiAgICAgICAgICAgIDxoMyBjbGFzcz1cImhlYWRsaW5lIG1iLTBcIj57eyBuYW1lIH19PC9oMz5cbiAgICAgICAgPC92LWNhcmQtdGl0bGU+XG4gICAgICAgIDx2LWRpdmlkZXI+PC92LWRpdmlkZXI+XG4gICAgICAgIDx2LWZvcm0gdi1tb2RlbD1cInZhbGlkXCIgcmVmPVwiZm9ybVwiIGxhenktdmFsaWRhdGlvbj5cbiAgICAgICAgICAgIDx2LWNhcmQ+XG4gICAgICAgICAgICAgICAgPHYtY2FyZC10aXRsZSBwcmltYXJ5LXRpdGxlPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRsaW5lXCI+Q2xpZW50IEJhc2UgQ29uZmlnPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImdyZXktLXRleHRcIj7lrqLmiLfnq6/ln7rmnKzphY3nva48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvdi1jYXJkLXRpdGxlPlxuICAgICAgICAgICAgICAgIDx2LWNhcmQtdGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPHYtdGV4dC1maWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi5a6i5oi356uv5ZCN56ewXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybURhdGEubnV4dC5uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cnVsZXM9XCJbKCk9PiEhZm9ybURhdGEubnV4dC5uYW1lIHx8ICdjbGllbnQgaXMgcmVxdWlyZWQhISddXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y291bnRlcj1cIjMyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICA+PC92LXRleHQtZmllbGQ+XG4gICAgICAgICAgICAgICAgICAgIDx2LXRleHQtZmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIuWuouaIt+err+WJjee8gFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm1EYXRhLm51eHQucHJlZml4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cnVsZXM9XCJbKCk9PiEhZm9ybURhdGEubnV4dC5wcmVmaXggfHwgJ3ByZWZpeCBpcyByZXF1aXJlZCEhJ11cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjb3VudGVyPVwiMTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgID48L3YtdGV4dC1maWVsZD5cbiAgICAgICAgICAgICAgICA8L3YtY2FyZC10ZXh0PlxuICAgICAgICAgICAgICAgIDx2LWRpdmlkZXIgY2xhc3M9XCJtdC0yXCI+PC92LWRpdmlkZXI+XG4gICAgICAgICAgICAgICAgPHYtY2FyZC10aXRsZSBwcmltYXJ5LXRpdGxlPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRsaW5lXCI+QmFubmVyPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImdyZXktLXRleHRcIj7orr7nva7lnKjlrqLmiLfnq6/mmL7npLrnmoTmtbfmiqXlpKflm748L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvdi1jYXJkLXRpdGxlPlxuICAgICAgICAgICAgICAgIDx2LWNhcmQtdGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPHYtcmFkaW8tZ3JvdXAgcm93IGxhYmVsPVwiYmFubmVy5L2N572uXCIgdi1tb2RlbD1cImZvcm1EYXRhLmJhbm5lci50eXBlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm1hbmRhdG9yeT1cImZhbHNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di1yYWRpbyBsYWJlbD1cIummlumhteWktOmDqOW3qOW5lea1t+aKpVwiIHZhbHVlPVwibWFpblwiPjwvdi1yYWRpbz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LXJhZGlvIGxhYmVsPVwi6aaW6aG15Lit6YOo5rW35oqlXCIgdmFsdWU9XCJtaWRcIj48L3YtcmFkaW8+XG4gICAgICAgICAgICAgICAgICAgIDwvdi1yYWRpby1ncm91cD5cblxuICAgICAgICAgICAgICAgICAgICA8di10ZXh0LWZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJCYW5uZXLmoIfpophcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtRGF0YS5iYW5uZXIudGl0bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpydWxlcz1cIlsoKT0+ISFmb3JtRGF0YS5iYW5uZXIudGl0bGUgfHwgJ3RpdGxlIGlzIHJlcXVpcmVkISEnXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNvdW50ZXI9XCIzMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgPjwvdi10ZXh0LWZpZWxkPlxuXG4gICAgICAgICAgICAgICAgICAgIDx2LXJhZGlvLWdyb3VwIHJvdyBsYWJlbD1cImJhbm5lcuWbvueJh1wiIHYtbW9kZWw9XCJiYW5uZXJBdmF0YXJJc1VybFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDptYW5kYXRvcnk9XCJmYWxzZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtcmFkaW8gbGFiZWw9XCJ1cmzlnLDlnYBcIiA6dmFsdWU9XCJ0cnVlXCI+PC92LXJhZGlvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtcmFkaW8gbGFiZWw9XCLkuIrkvKDlm77niYdcIiA6dmFsdWU9XCJmYWxzZVwiPjwvdi1yYWRpbz5cbiAgICAgICAgICAgICAgICAgICAgPC92LXJhZGlvLWdyb3VwPlxuXG4gICAgICAgICAgICAgICAgICAgIDx2LXRleHQtZmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXNob3c9XCJiYW5uZXJBdmF0YXJJc1VybFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLlm77niYflnLDlnYBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtRGF0YS5iYW5uZXIuYXZhdGFyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICA+PC92LXRleHQtZmllbGQ+XG5cbiAgICAgICAgICAgICAgICAgICAgPHVwbG9hZC1idXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXNob3c9XCIhYmFubmVyQXZhdGFySXNVcmxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibXgtMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiZmlsZUlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAZ2V0UGF0aD1cImdldFBhdGhcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyYWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi5YWz6IGU5paH56ugXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLXRleHQ9XCJ0aXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS12YWx1ZT1cImlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bG9hZGluZz1cImxvYWRpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlLWl0ZW1zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpcHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6aXRlbXM9XCJwb3N0c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOnNlYXJjaC1pbnB1dC5zeW5jPVwic2VhcmNoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybURhdGEuYmFubmVyLnBvc3RJZFwiXG4gICAgICAgICAgICAgICAgICAgID48L3Ytc2VsZWN0PlxuXG4gICAgICAgICAgICAgICAgICAgIDx2LXRleHQtZmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIumTvuaOpeWcsOWdgFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm1EYXRhLmJhbm5lci5saW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICA+PC92LXRleHQtZmllbGQ+XG5cblxuICAgICAgICAgICAgICAgIDwvdi1jYXJkLXRleHQ+XG4gICAgICAgICAgICAgICAgPHYtZGl2aWRlciBjbGFzcz1cIm10LTJcIj48L3YtZGl2aWRlcj5cbiAgICAgICAgICAgICAgICA8di1jYXJkLXRpdGxlIHByaW1hcnktdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGxpbmVcIj5SZWNvbW1lbmQgQ2F0YWxvZzwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJncmV5LS10ZXh0XCI+6K6+572u5Zyo5a6i5oi356uv6aaW6aG15o6o6I2Q55qE5YiG57G7PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3YtY2FyZC10aXRsZT5cbiAgICAgICAgICAgICAgICA8di1jYXJkLXRleHQgdi1pZj1cImNhdGVsb2dzTG9hZGVkXCI+XG4gICAgICAgICAgICAgICAgICAgIDx2LXNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi5paH56ug5YiG57G7XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6aXRlbXM9XCJjYXRlbG9nc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS10ZXh0PVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS12YWx1ZT1cImlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybURhdGEuY2F0ZWxvZ3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodD1cIjQwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGludD1cIuivt+mAieaLqeaWh+eroOWIhuexu1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVyc2lzdGVudC1oaW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOnJ1bGVzPVwiWyh2KSA9PiB2Lmxlbmd0aCA+IDAgfHwgJ0NhdGVsb2dzIGlzIHJlcXVpcmVkJ11cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaXBzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJzZWxlY3Rpb25cIiBzbG90LXNjb3BlPVwiZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWNoaXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAaW5wdXQ9XCJkYXRhLnBhcmVudC5zZWxlY3RJdGVtKGRhdGEuaXRlbSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnNlbGVjdGVkPVwiZGF0YS5zZWxlY3RlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNoaXAtLXNlbGVjdC1tdWx0aVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6a2V5PVwiSlNPTi5zdHJpbmdpZnkoZGF0YS5pdGVtKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBkYXRhLml0ZW0ubmFtZSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdi1jaGlwPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgPC92LXNlbGVjdD5cbiAgICAgICAgICAgICAgICA8L3YtY2FyZC10ZXh0PlxuICAgICAgICAgICAgICAgIDx2LWRpdmlkZXIgY2xhc3M9XCJtdC0yXCI+PC92LWRpdmlkZXI+XG4gICAgICAgICAgICAgICAgPHYtY2FyZC1hY3Rpb25zPlxuICAgICAgICAgICAgICAgICAgICA8di1idG4gZmxhdCBAY2xpY2s9XCJyZXNldEZvcm1cIj5DbGVhcjwvdi1idG4+XG4gICAgICAgICAgICAgICAgICAgIDx2LXNwYWNlcj48L3Ytc3BhY2VyPlxuXG4gICAgICAgICAgICAgICAgICAgIDx2LWJ0biBjb2xvcj1cInByaW1hcnlcIiA6ZGlzYWJsZWQ9XCIhdmFsaWRcIiBmbGF0IEBjbGljaz1cInN1Ym1pdFwiPlN1Ym1pdDwvdi1idG4+XG4gICAgICAgICAgICAgICAgPC92LWNhcmQtYWN0aW9ucz5cbiAgICAgICAgICAgIDwvdi1jYXJkPlxuICAgICAgICA8L3YtZm9ybT5cbiAgICA8L3YtY2FyZD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCBVcGxvYWRCdXR0b24gZnJvbSAnfi9jb21wb25lbnRzL1VwbG9hZEJ1dHRvbidcblxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogJ251eHRfY3JlYXRlJyxcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICBVcGxvYWRCdXR0b24sXG4gICAgfSxcbiAgICBkYXRhICgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6IHRoaXMuJHQoJ251eHRfY3JlYXRlJyksXG4gICAgICAgIGJhbm5lckF2YXRhcklzVXJsOiB0cnVlLFxuICAgICAgICBzZWFyY2g6IG51bGwsXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICBjYXRlbG9nczoge30sXG4gICAgICAgIHBvc3RzOiBbXSxcbiAgICAgICAgZm9ybURhdGE6IHtcbiAgICAgICAgICBudXh0OiB7XG4gICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgIHByZWZpeDogJydcbiAgICAgICAgICB9LFxuICAgICAgICAgIGJhbm5lcjoge1xuICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgYXZhdGFyOiAnJyxcbiAgICAgICAgICAgIHR5cGU6ICdtYWluJyxcbiAgICAgICAgICAgIGxpbms6ICcnLFxuICAgICAgICAgICAgcG9zdElkOiBudWxsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjYXRlbG9nczogW11cbiAgICAgICAgfSxcbiAgICAgICAgdmFsaWQ6IHRydWUsXG4gICAgICAgIGNhdGVsb2dzTG9hZGVkOiBmYWxzZVxuICAgICAgfVxuICAgIH0sXG4gICAgd2F0Y2g6IHtcbiAgICAgIHNlYXJjaCAodmFsKSB7XG4gICAgICAgIHZhbCAmJiB0aGlzLnF1ZXJ5U2VsZWN0aW9ucyh2YWwpXG4gICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICBxdWVyeVNlbGVjdGlvbnMgKHZhbCkge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlXG4gICAgICAgIC8vIFNpbXVsYXRlZCBhamF4IHF1ZXJ5XG4gICAgICAgIHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIGxldCBxdWVyeUJ1aWxkID0ge1xuICAgICAgICAgICAgc2VhcmNoOiBgdGl0bGU6JHt2YWx9YCxcbiAgICAgICAgICAgIHNlYXJjaEZpZWxkczogJ3RpdGxlOmxpa2UnXG4gICAgICAgICAgfVxuICAgICAgICAgIGxldCB7ZGF0YX0gPSBhd2FpdCB0aGlzLiRzdG9yZS5kaXNwYXRjaCgncG9zdC9pbmRleCcsIHF1ZXJ5QnVpbGQpXG4gICAgICAgICAgdGhpcy5wb3N0cyA9IGRhdGFcbiAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZVxuICAgICAgICB9LCA1MDApXG4gICAgICB9LFxuICAgICAgZ2V0UGF0aCAoc3JjKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHNyYylcbiAgICAgICAgdGhpcy5mb3JtRGF0YS5iYW5uZXIuYXZhdGFyID0gc3JjXG4gICAgICB9LFxuICAgICAgcmVzZXRGb3JtICgpIHtcbiAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2VzID0gW11cbiAgICAgICAgdGhpcy5mb3JtSGFzRXJyb3JzID0gZmFsc2VcbiAgICAgICAgdGhpcy4kcmVmcy5mb3JtLnJlc2V0KClcbiAgICAgIH0sXG4gICAgICBhc3luYyBzdWJtaXQgKCkge1xuICAgICAgICBpZiAodGhpcy4kcmVmcy5mb3JtLnZhbGlkYXRlKCkpIHtcbiAgICAgICAgICAvLyBOYXRpdmUgZm9ybSBzdWJtaXNzaW9uIGlzIG5vdCB5ZXQgc3VwcG9ydGVkXG4gICAgICAgICAgYXdhaXQgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ251eHQvc3RvcmUnLCB7Zm9ybURhdGE6IHRoaXMuZm9ybURhdGF9KVxuICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdtZXNzYWdlL3Jlc3BvbnNlTWVzc2FnZScsIHtcbiAgICAgICAgICAgIHRleHQ6IHRoaXMuJHQoJ251eHRfY3JlYXRlX3N1Y2Nlc3MnKVxuICAgICAgICAgIH0pXG4gICAgICAgICAgdGhpcy4kcm91dGVyLnJlcGxhY2Uoe25hbWU6ICdudXh0LmluZGV4J30pXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBhc3luYyBmZXRjaENhdGVsb2cgKCkge1xuICAgICAgICBsZXQgcXVlcnlCdWlsZCA9IHt9XG4gICAgICAgIGxldCBjYXRlbG9ncyA9IGF3YWl0IHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdjYXRlbG9nL2luZGV4JywgcXVlcnlCdWlsZClcbiAgICAgICAgdGhpcy4kc2V0KHRoaXMsICdjYXRlbG9ncycsIGNhdGVsb2dzKVxuICAgICAgICB0aGlzLmNhdGVsb2dzTG9hZGVkID0gdHJ1ZVxuICAgICAgfVxuICAgIH0sXG4gICAgYXN5bmMgY3JlYXRlZCAoKSB7XG4gICAgICBhd2FpdCB0aGlzLmZldGNoQ2F0ZWxvZygpXG4gICAgfVxuXG4gIH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuXG48L3N0eWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvcGFnZXMvbnV4dC9jcmVhdGUudnVlIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInYtY2FyZFwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInYtY2FyZC10aXRsZVwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImdyZXkgbGlnaHRlbi00XCIsIGF0dHJzOiB7IFwicHJpbWFyeS10aXRsZVwiOiBcIlwiIH0gfSxcbiAgICAgICAgW19jKFwiaDNcIiwgeyBzdGF0aWNDbGFzczogXCJoZWFkbGluZSBtYi0wXCIgfSwgW192bS5fdihfdm0uX3MoX3ZtLm5hbWUpKV0pXVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInYtZGl2aWRlclwiKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWZvcm1cIixcbiAgICAgICAge1xuICAgICAgICAgIHJlZjogXCJmb3JtXCIsXG4gICAgICAgICAgYXR0cnM6IHsgXCJsYXp5LXZhbGlkYXRpb25cIjogXCJcIiB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLnZhbGlkLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICBfdm0udmFsaWQgPSAkJHZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcInZhbGlkXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1jYXJkXCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwidi1jYXJkLXRpdGxlXCIsIHsgYXR0cnM6IHsgXCJwcmltYXJ5LXRpdGxlXCI6IFwiXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJoZWFkbGluZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiQ2xpZW50IEJhc2UgQ29uZmlnXCIpXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJncmV5LS10ZXh0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLlrqLmiLfnq6/ln7rmnKzphY3nva5cIilcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1jYXJkLXRleHRcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwi5a6i5oi356uv5ZCN56ewXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcnVsZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICEhX3ZtLmZvcm1EYXRhLm51eHQubmFtZSB8fCBcImNsaWVudCBpcyByZXF1aXJlZCEhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgY291bnRlcjogMzIsXG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm1EYXRhLm51eHQubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybURhdGEubnV4dCwgXCJuYW1lXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybURhdGEubnV4dC5uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIuWuouaIt+err+WJjee8gFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhIV92bS5mb3JtRGF0YS5udXh0LnByZWZpeCB8fCBcInByZWZpeCBpcyByZXF1aXJlZCEhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgY291bnRlcjogMTAsXG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm1EYXRhLm51eHQucHJlZml4LFxuICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtRGF0YS5udXh0LCBcInByZWZpeFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm1EYXRhLm51eHQucHJlZml4XCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ2LWRpdmlkZXJcIiwgeyBzdGF0aWNDbGFzczogXCJtdC0yXCIgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidi1jYXJkLXRpdGxlXCIsIHsgYXR0cnM6IHsgXCJwcmltYXJ5LXRpdGxlXCI6IFwiXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJoZWFkbGluZVwiIH0sIFtfdm0uX3YoXCJCYW5uZXJcIildKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJncmV5LS10ZXh0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLorr7nva7lnKjlrqLmiLfnq6/mmL7npLrnmoTmtbfmiqXlpKflm75cIilcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1jYXJkLXRleHRcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LXJhZGlvLWdyb3VwXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyByb3c6IFwiXCIsIGxhYmVsOiBcImJhbm5lcuS9jee9rlwiLCBtYW5kYXRvcnk6IGZhbHNlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybURhdGEuYmFubmVyLnR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtRGF0YS5iYW5uZXIsIFwidHlwZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtRGF0YS5iYW5uZXIudHlwZVwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXJhZGlvXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGxhYmVsOiBcIummlumhteWktOmDqOW3qOW5lea1t+aKpVwiLCB2YWx1ZTogXCJtYWluXCIgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXJhZGlvXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGxhYmVsOiBcIummlumhteS4remDqOa1t+aKpVwiLCB2YWx1ZTogXCJtaWRcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiQmFubmVy5qCH6aKYXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcnVsZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICEhX3ZtLmZvcm1EYXRhLmJhbm5lci50aXRsZSB8fCBcInRpdGxlIGlzIHJlcXVpcmVkISFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBjb3VudGVyOiAzMixcbiAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogXCJcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybURhdGEuYmFubmVyLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtRGF0YS5iYW5uZXIsIFwidGl0bGVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtRGF0YS5iYW5uZXIudGl0bGVcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LXJhZGlvLWdyb3VwXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyByb3c6IFwiXCIsIGxhYmVsOiBcImJhbm5lcuWbvueJh1wiLCBtYW5kYXRvcnk6IGZhbHNlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uYmFubmVyQXZhdGFySXNVcmwsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5iYW5uZXJBdmF0YXJJc1VybCA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiYmFubmVyQXZhdGFySXNVcmxcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1yYWRpb1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBsYWJlbDogXCJ1cmzlnLDlnYBcIiwgdmFsdWU6IHRydWUgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXJhZGlvXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGxhYmVsOiBcIuS4iuS8oOWbvueJh1wiLCB2YWx1ZTogZmFsc2UgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5iYW5uZXJBdmF0YXJJc1VybCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiYmFubmVyQXZhdGFySXNVcmxcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbGFiZWw6IFwi5Zu+54mH5Zyw5Z2AXCIsIHJlcXVpcmVkOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtRGF0YS5iYW5uZXIuYXZhdGFyLFxuICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtRGF0YS5iYW5uZXIsIFwiYXZhdGFyXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybURhdGEuYmFubmVyLmF2YXRhclwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidXBsb2FkLWJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogIV92bS5iYW5uZXJBdmF0YXJJc1VybCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiIWJhbm5lckF2YXRhcklzVXJsXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIHJlZjogXCJmaWxlSW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibXgtMFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBhY2NlcHQ6IFwiaW1hZ2UvKlwiIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7IGdldFBhdGg6IF92bS5nZXRQYXRoIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidi1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGNsZWFyYWJsZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCLlhbPogZTmlofnq6BcIixcbiAgICAgICAgICAgICAgICAgICAgICBcIml0ZW0tdGV4dFwiOiBcInRpdGxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJpdGVtLXZhbHVlXCI6IFwiaWRcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogX3ZtLmxvYWRpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgXCJjYWNoZS1pdGVtc1wiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNoaXBzOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBfdm0ucG9zdHMsXG4gICAgICAgICAgICAgICAgICAgICAgXCJzZWFyY2gtaW5wdXRcIjogX3ZtLnNlYXJjaFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIFwidXBkYXRlOnNlYXJjaElucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlYXJjaCA9ICRldmVudFxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm1EYXRhLmJhbm5lci5wb3N0SWQsXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm1EYXRhLmJhbm5lciwgXCJwb3N0SWRcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtRGF0YS5iYW5uZXIucG9zdElkXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBsYWJlbDogXCLpk77mjqXlnLDlnYBcIiwgcmVxdWlyZWQ6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm1EYXRhLmJhbm5lci5saW5rLFxuICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtRGF0YS5iYW5uZXIsIFwibGlua1wiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm1EYXRhLmJhbm5lci5saW5rXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ2LWRpdmlkZXJcIiwgeyBzdGF0aWNDbGFzczogXCJtdC0yXCIgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidi1jYXJkLXRpdGxlXCIsIHsgYXR0cnM6IHsgXCJwcmltYXJ5LXRpdGxlXCI6IFwiXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJoZWFkbGluZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiUmVjb21tZW5kIENhdGFsb2dcIilcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImdyZXktLXRleHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIuiuvue9ruWcqOWuouaIt+err+mmlumhteaOqOiNkOeahOWIhuexu1wiKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLmNhdGVsb2dzTG9hZGVkXG4gICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWNhcmQtdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCLmlofnq6DliIbnsbtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IF92bS5jYXRlbG9ncyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpdGVtLXRleHRcIjogXCJuYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiaXRlbS12YWx1ZVwiOiBcImlkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxlOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1heC1oZWlnaHRcIjogXCI0MDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGludDogXCLor7fpgInmi6nmlofnq6DliIbnsbtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwZXJzaXN0ZW50LWhpbnRcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbih2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdi5sZW5ndGggPiAwIHx8IFwiQ2F0ZWxvZ3MgaXMgcmVxdWlyZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpcHM6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwic2VsZWN0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jaGlwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBKU09OLnN0cmluZ2lmeShkYXRhLml0ZW0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2hpcC0tc2VsZWN0LW11bHRpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IGRhdGEuc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5wYXJlbnQuc2VsZWN0SXRlbShkYXRhLml0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhkYXRhLml0ZW0ubmFtZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtRGF0YS5jYXRlbG9ncyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtRGF0YSwgXCJjYXRlbG9nc1wiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybURhdGEuY2F0ZWxvZ3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInYtZGl2aWRlclwiLCB7IHN0YXRpY0NsYXNzOiBcIm10LTJcIiB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWNhcmQtYWN0aW9uc1wiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgZmxhdDogXCJcIiB9LCBvbjogeyBjbGljazogX3ZtLnJlc2V0Rm9ybSB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJDbGVhclwiKV1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ2LXNwYWNlclwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInByaW1hcnlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiAhX3ZtLnZhbGlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmxhdDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5zdWJtaXQgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiU3VibWl0XCIpXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTBkZWQxNTdiXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0wZGVkMTU3YlwiLFwiaGFzU2NvcGVkXCI6dHJ1ZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9udXh0L2NyZWF0ZS52dWVcbi8vIG1vZHVsZSBpZCA9IDIwNVxuLy8gbW9kdWxlIGNodW5rcyA9IDgiXSwic291cmNlUm9vdCI6IiJ9
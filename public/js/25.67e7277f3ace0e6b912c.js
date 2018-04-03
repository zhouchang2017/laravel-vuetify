webpackJsonp([25],{

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(151)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(153)
/* template */
var __vue_template__ = __webpack_require__(154)
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

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(152);
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

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(true);
// imports


// module
exports.push([module.i, "\ninput[type=file][data-v-7c5b266c] {\n    position: absolute;\n    left: -99999px;\n}\n.loading[data-v-7c5b266c] {\n    opacity: 0.4;\n}\n", "", {"version":3,"sources":["/Users/changzhou/code/laravel-vuetify/resources/assets/js/components/resources/assets/js/components/UploadButton.vue"],"names":[],"mappings":";AA2JA;IACA,mBAAA;IACA,eAAA;CACA;AAEA;IACA,aAAA;CACA","file":"UploadButton.vue","sourcesContent":["<template>\n    <div>\n        <v-card>\n            <v-card-media contain :class=\"{'loading':loading}\" v-show=\"imageUrl\" ref=\"imageUrl\" style=\"cursor: pointer;\"\n                          @click.stop=\"dialog = true\" :src=\"imageUrl\" height=\"200px\">\n            </v-card-media>\n\n            <v-btn large\n                   block\n                   raised\n                   color=\"info\"\n                   @click=\"onPickFile\"\n                   v-show=\"progress === 0\">\n                {{ selectLabel }}\n            </v-btn>\n            <v-progress-linear v-show=\"loading\" height=\"40\" class=\"my-0\"\n                               v-model=\"progress\" :color=\"color\"></v-progress-linear>\n            <v-btn large block raised class=\"error\" @click=\"removeFile\" v-show=\"progress === 100\">\n                {{ removeLabel }}\n            </v-btn>\n            <input\n                    type=\"file\"\n                    ref=\"image\"\n                    name=\"image\"\n                    :accept=\"accept\"\n                    @change=\"onFilePicked\"\n            >\n        </v-card>\n        <v-dialog fullscreen v-model=\"dialog\" max-width=\"100%\" lazy>\n            <v-card full-height>\n                <v-card-title>\n                    <span>图片预览</span>\n                    <v-spacer></v-spacer>\n                    <v-btn icon @click.stop=\"dialog = false\">\n\n                        <v-icon>clear</v-icon>\n                    </v-btn>\n                </v-card-title>\n                <v-card-media contain :class=\"{'loading':loading}\"\n                              :src=\"imageUrl\" :height=\"dialogHeight\">\n                </v-card-media>\n                <v-card-actions>\n                    <v-spacer></v-spacer>\n                    <v-btn flat @click.stop=\"removeFile\">Delete</v-btn>\n                    <v-btn color=\"primary\" flat @click.stop=\"dialog=false\">Close</v-btn>\n                </v-card-actions>\n            </v-card>\n        </v-dialog>\n    </div>\n</template>\n\n<script>\n  export default {\n    props: {\n      value: {\n        type: String\n      },\n      accept: {\n        type: String,\n        default: '*'\n      },\n      selectLabel: {\n        type: String,\n        default: 'Select an image'\n      },\n      removeLabel: {\n        type: String,\n        default: 'Remove'\n      }\n    },\n\n    data () {\n      return {\n        imageUrl: '',\n        progress: 0,\n        loading: false,\n        dialog: false\n      }\n    },\n\n    watch: {\n      // value (v) {\n      //   this.imageUrl = v\n      // }\n    },\n\n    mounted () {\n      this.imageUrl = ''\n    },\n    computed: {\n      dialogHeight () {\n        return this.$vuetify.breakpoint.height - 100\n      },\n      color () {\n        return ['error', 'warning', 'success'][Math.floor(this.progress / 40)]\n      }\n    },\n    methods: {\n\n      onPickFile () {\n        this.$refs.image.click()\n      },\n\n      async onFilePicked (event) {\n        const files = event.target.files || event.dataTransfer.files\n\n        if (files && files[0]) {\n          let filename = files[0].name\n\n          if (filename && filename.lastIndexOf('.') <= 0) {\n            return //return alert('Please add a valid image!')\n          }\n\n          const fileReader = new FileReader()\n          fileReader.addEventListener('load', () => {\n            this.imageUrl = fileReader.result\n          })\n          fileReader.readAsDataURL(files[0])\n\n          let path = await this.upload(files[0])\n          // this.imageUrl = path\n          this.$emit('getPath', path)\n        }\n      },\n\n      removeFile () {\n        this.imageUrl = ''\n        this.progress = 0\n        this.dialog = false\n        this.$store.dispatch('message/responseMessage', {text: this.$t('remove_img_success')})\n      },\n\n      async upload (e) {\n        let formData = new FormData()\n        let config = {\n          headers: {\n            'Content-Type': 'multipart/form-data'\n          },\n          onUploadProgress: progressEvent => {\n            this.progress = Math.round((\n              progressEvent.loaded * 100) / progressEvent.total)\n            if (this.progress >= 100) this.loading = false\n          }\n        }\n        formData.append('avatar', e)\n        this.loading = true\n        let {data} = await this.$store.dispatch('file/uploadImage', {formData, config})\n        this.loading = false\n        return data\n      }\n    }\n  }\n</script>\n\n<style scoped>\n    input[type=file] {\n        position: absolute;\n        left: -99999px;\n    }\n\n    .loading {\n        opacity: 0.4;\n    }\n</style>"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 153:
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

/***/ 154:
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

/***/ 257:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(258)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(260)
/* template */
var __vue_template__ = __webpack_require__(261)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-df9b5f68"
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
Component.options.__file = "resources/assets/js/components/form/BannerCreate.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-df9b5f68", Component.options)
  } else {
    hotAPI.reload("data-v-df9b5f68", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 258:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(259);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("f76e7498", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-df9b5f68\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./BannerCreate.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-df9b5f68\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./BannerCreate.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 259:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"BannerCreate.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_UploadButton__ = __webpack_require__(150);
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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'banner-create-form',
  components: {
    UploadButton: __WEBPACK_IMPORTED_MODULE_1__components_UploadButton___default.a
  },
  data: function data() {
    return {
      bannerAvatarIsUrl: true,
      search: null,
      loading: false,
      posts: [],
      banner: {
        title: '',
        avatar: '',
        type: 'main',
        link: '',
        post_id: null,
        sort: 0
      },
      valid: true

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
        var queryBuild;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                queryBuild = {
                  search: 'title:' + val,
                  searchFields: 'title:like'
                };
                _context.next = 3;
                return _this.fetchPosts(queryBuild);

              case 3:
                _this.posts = _context.sent;

                _this.loading = false;

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      })), 500);
    },
    fetchPosts: function fetchPosts(queryBuild) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var _ref2, data;

        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this2.$store.dispatch('post/index', queryBuild);

              case 2:
                _ref2 = _context2.sent;
                data = _ref2.data;
                return _context2.abrupt('return', data);

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    },
    getPath: function getPath(src) {
      console.log(src);
      this.banner.avatar = src;
    },
    resetForm: function resetForm() {
      this.errorMessages = [];
      this.formHasErrors = false;
      this.$refs.form.reset();
    },
    submit: function submit() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3() {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!_this3.$refs.form.validate()) {
                  _context3.next = 5;
                  break;
                }

                _context3.next = 3;
                return _this3.$store.dispatch('nuxt/store', { formData: _this3.formData });

              case 3:
                _this3.$store.dispatch('message/responseMessage', {
                  text: _this3.$t('nuxt_create_success')
                });
                _this3.$router.replace({ name: 'nuxt.index' });

              case 5:
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
              return _this4.fetchPosts({});

            case 2:
              _this4.posts = _context4.sent;

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

/***/ 261:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
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
                    value: _vm.banner.type,
                    callback: function($$v) {
                      _vm.$set(_vm.banner, "type", $$v)
                    },
                    expression: "banner.type"
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
                      return !!_vm.banner.title || "title is required!!"
                    }
                  ],
                  counter: 32,
                  required: ""
                },
                model: {
                  value: _vm.banner.title,
                  callback: function($$v) {
                    _vm.$set(_vm.banner, "title", $$v)
                  },
                  expression: "banner.title"
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
                  _c("v-radio", { attrs: { label: "url地址", value: true } }),
                  _vm._v(" "),
                  _c("v-radio", { attrs: { label: "上传图片", value: false } })
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
                  value: _vm.banner.avatar,
                  callback: function($$v) {
                    _vm.$set(_vm.banner, "avatar", $$v)
                  },
                  expression: "banner.avatar"
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
                  value: _vm.banner.post_id,
                  callback: function($$v) {
                    _vm.$set(_vm.banner, "post_id", $$v)
                  },
                  expression: "banner.post_id"
                }
              }),
              _vm._v(" "),
              _c("v-text-field", {
                attrs: { disabled: !!_vm.banner.post_id, label: "链接地址" },
                model: {
                  value: _vm.banner.link,
                  callback: function($$v) {
                    _vm.$set(_vm.banner, "link", $$v)
                  },
                  expression: "banner.link"
                }
              }),
              _vm._v(" "),
              _c("v-text-field", {
                attrs: {
                  label: "排序权重",
                  required: "",
                  rules: [
                    function() {
                      return /^-?\d+$/.test(_vm.banner.sort) || "必须为数字"
                    }
                  ]
                },
                model: {
                  value: _vm.banner.sort,
                  callback: function($$v) {
                    _vm.$set(_vm.banner, "sort", $$v)
                  },
                  expression: "banner.sort"
                }
              })
            ],
            1
          ),
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
                  attrs: { color: "primary", disabled: !_vm.valid, flat: "" },
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
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-df9b5f68", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVXBsb2FkQnV0dG9uLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVXBsb2FkQnV0dG9uLnZ1ZT80MTVkIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9VcGxvYWRCdXR0b24udnVlP2I5MGMiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9VcGxvYWRCdXR0b24udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9VcGxvYWRCdXR0b24udnVlPzlkNWEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Zvcm0vQmFubmVyQ3JlYXRlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZm9ybS9CYW5uZXJDcmVhdGUudnVlPzMwMzciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Zvcm0vQmFubmVyQ3JlYXRlLnZ1ZT8zODIyIiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZm9ybS9CYW5uZXJDcmVhdGUudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9mb3JtL0Jhbm5lckNyZWF0ZS52dWU/ZmRiYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLHlCQUFrTTtBQUNsTTtBQUNBO0FBQ0E7QUFDQSw0Q0FBa1M7QUFDbFM7QUFDQSw4Q0FBK0s7QUFDL0s7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtB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QUNBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6ImpzLzI1LjY3ZTcyNzdmM2FjZTBlNmI5MTJjLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi03YzViMjY2Y1xcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1VwbG9hZEJ1dHRvbi52dWVcIilcbn1cbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dLFxcXCJzdGFnZS0yXFxcIl0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV1dfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1VwbG9hZEJ1dHRvbi52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTdjNWIyNjZjXFxcIixcXFwiaGFzU2NvcGVkXFxcIjp0cnVlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9VcGxvYWRCdXR0b24udnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBcImRhdGEtdi03YzViMjY2Y1wiXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVXBsb2FkQnV0dG9uLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi03YzViMjY2Y1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTdjNWIyNjZjXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVXBsb2FkQnV0dG9uLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyAyNSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi03YzViMjY2Y1xcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1VwbG9hZEJ1dHRvbi52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcImIwYjgxOWVjXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi03YzViMjY2Y1xcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1VwbG9hZEJ1dHRvbi52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtN2M1YjI2NmNcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9VcGxvYWRCdXR0b24udnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTdjNWIyNjZjXCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9VcGxvYWRCdXR0b24udnVlXG4vLyBtb2R1bGUgaWQgPSAxNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDI1IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbmlucHV0W3R5cGU9ZmlsZV1bZGF0YS12LTdjNWIyNjZjXSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogLTk5OTk5cHg7XFxufVxcbi5sb2FkaW5nW2RhdGEtdi03YzViMjY2Y10ge1xcbiAgICBvcGFjaXR5OiAwLjQ7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvY2hhbmd6aG91L2NvZGUvbGFyYXZlbC12dWV0aWZ5L3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVXBsb2FkQnV0dG9uLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBMkpBO0lBQ0EsbUJBQUE7SUFDQSxlQUFBO0NBQ0E7QUFFQTtJQUNBLGFBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiVXBsb2FkQnV0dG9uLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICAgIDxkaXY+XFxuICAgICAgICA8di1jYXJkPlxcbiAgICAgICAgICAgIDx2LWNhcmQtbWVkaWEgY29udGFpbiA6Y2xhc3M9XFxcInsnbG9hZGluZyc6bG9hZGluZ31cXFwiIHYtc2hvdz1cXFwiaW1hZ2VVcmxcXFwiIHJlZj1cXFwiaW1hZ2VVcmxcXFwiIHN0eWxlPVxcXCJjdXJzb3I6IHBvaW50ZXI7XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrLnN0b3A9XFxcImRpYWxvZyA9IHRydWVcXFwiIDpzcmM9XFxcImltYWdlVXJsXFxcIiBoZWlnaHQ9XFxcIjIwMHB4XFxcIj5cXG4gICAgICAgICAgICA8L3YtY2FyZC1tZWRpYT5cXG5cXG4gICAgICAgICAgICA8di1idG4gbGFyZ2VcXG4gICAgICAgICAgICAgICAgICAgYmxvY2tcXG4gICAgICAgICAgICAgICAgICAgcmFpc2VkXFxuICAgICAgICAgICAgICAgICAgIGNvbG9yPVxcXCJpbmZvXFxcIlxcbiAgICAgICAgICAgICAgICAgICBAY2xpY2s9XFxcIm9uUGlja0ZpbGVcXFwiXFxuICAgICAgICAgICAgICAgICAgIHYtc2hvdz1cXFwicHJvZ3Jlc3MgPT09IDBcXFwiPlxcbiAgICAgICAgICAgICAgICB7eyBzZWxlY3RMYWJlbCB9fVxcbiAgICAgICAgICAgIDwvdi1idG4+XFxuICAgICAgICAgICAgPHYtcHJvZ3Jlc3MtbGluZWFyIHYtc2hvdz1cXFwibG9hZGluZ1xcXCIgaGVpZ2h0PVxcXCI0MFxcXCIgY2xhc3M9XFxcIm15LTBcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XFxcInByb2dyZXNzXFxcIiA6Y29sb3I9XFxcImNvbG9yXFxcIj48L3YtcHJvZ3Jlc3MtbGluZWFyPlxcbiAgICAgICAgICAgIDx2LWJ0biBsYXJnZSBibG9jayByYWlzZWQgY2xhc3M9XFxcImVycm9yXFxcIiBAY2xpY2s9XFxcInJlbW92ZUZpbGVcXFwiIHYtc2hvdz1cXFwicHJvZ3Jlc3MgPT09IDEwMFxcXCI+XFxuICAgICAgICAgICAgICAgIHt7IHJlbW92ZUxhYmVsIH19XFxuICAgICAgICAgICAgPC92LWJ0bj5cXG4gICAgICAgICAgICA8aW5wdXRcXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XFxcImZpbGVcXFwiXFxuICAgICAgICAgICAgICAgICAgICByZWY9XFxcImltYWdlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cXFwiaW1hZ2VcXFwiXFxuICAgICAgICAgICAgICAgICAgICA6YWNjZXB0PVxcXCJhY2NlcHRcXFwiXFxuICAgICAgICAgICAgICAgICAgICBAY2hhbmdlPVxcXCJvbkZpbGVQaWNrZWRcXFwiXFxuICAgICAgICAgICAgPlxcbiAgICAgICAgPC92LWNhcmQ+XFxuICAgICAgICA8di1kaWFsb2cgZnVsbHNjcmVlbiB2LW1vZGVsPVxcXCJkaWFsb2dcXFwiIG1heC13aWR0aD1cXFwiMTAwJVxcXCIgbGF6eT5cXG4gICAgICAgICAgICA8di1jYXJkIGZ1bGwtaGVpZ2h0PlxcbiAgICAgICAgICAgICAgICA8di1jYXJkLXRpdGxlPlxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+5Zu+54mH6aKE6KeIPC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgPHYtc3BhY2VyPjwvdi1zcGFjZXI+XFxuICAgICAgICAgICAgICAgICAgICA8di1idG4gaWNvbiBAY2xpY2suc3RvcD1cXFwiZGlhbG9nID0gZmFsc2VcXFwiPlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LWljb24+Y2xlYXI8L3YtaWNvbj5cXG4gICAgICAgICAgICAgICAgICAgIDwvdi1idG4+XFxuICAgICAgICAgICAgICAgIDwvdi1jYXJkLXRpdGxlPlxcbiAgICAgICAgICAgICAgICA8di1jYXJkLW1lZGlhIGNvbnRhaW4gOmNsYXNzPVxcXCJ7J2xvYWRpbmcnOmxvYWRpbmd9XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpzcmM9XFxcImltYWdlVXJsXFxcIiA6aGVpZ2h0PVxcXCJkaWFsb2dIZWlnaHRcXFwiPlxcbiAgICAgICAgICAgICAgICA8L3YtY2FyZC1tZWRpYT5cXG4gICAgICAgICAgICAgICAgPHYtY2FyZC1hY3Rpb25zPlxcbiAgICAgICAgICAgICAgICAgICAgPHYtc3BhY2VyPjwvdi1zcGFjZXI+XFxuICAgICAgICAgICAgICAgICAgICA8di1idG4gZmxhdCBAY2xpY2suc3RvcD1cXFwicmVtb3ZlRmlsZVxcXCI+RGVsZXRlPC92LWJ0bj5cXG4gICAgICAgICAgICAgICAgICAgIDx2LWJ0biBjb2xvcj1cXFwicHJpbWFyeVxcXCIgZmxhdCBAY2xpY2suc3RvcD1cXFwiZGlhbG9nPWZhbHNlXFxcIj5DbG9zZTwvdi1idG4+XFxuICAgICAgICAgICAgICAgIDwvdi1jYXJkLWFjdGlvbnM+XFxuICAgICAgICAgICAgPC92LWNhcmQ+XFxuICAgICAgICA8L3YtZGlhbG9nPlxcbiAgICA8L2Rpdj5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuICBleHBvcnQgZGVmYXVsdCB7XFxuICAgIHByb3BzOiB7XFxuICAgICAgdmFsdWU6IHtcXG4gICAgICAgIHR5cGU6IFN0cmluZ1xcbiAgICAgIH0sXFxuICAgICAgYWNjZXB0OiB7XFxuICAgICAgICB0eXBlOiBTdHJpbmcsXFxuICAgICAgICBkZWZhdWx0OiAnKidcXG4gICAgICB9LFxcbiAgICAgIHNlbGVjdExhYmVsOiB7XFxuICAgICAgICB0eXBlOiBTdHJpbmcsXFxuICAgICAgICBkZWZhdWx0OiAnU2VsZWN0IGFuIGltYWdlJ1xcbiAgICAgIH0sXFxuICAgICAgcmVtb3ZlTGFiZWw6IHtcXG4gICAgICAgIHR5cGU6IFN0cmluZyxcXG4gICAgICAgIGRlZmF1bHQ6ICdSZW1vdmUnXFxuICAgICAgfVxcbiAgICB9LFxcblxcbiAgICBkYXRhICgpIHtcXG4gICAgICByZXR1cm4ge1xcbiAgICAgICAgaW1hZ2VVcmw6ICcnLFxcbiAgICAgICAgcHJvZ3Jlc3M6IDAsXFxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcXG4gICAgICAgIGRpYWxvZzogZmFsc2VcXG4gICAgICB9XFxuICAgIH0sXFxuXFxuICAgIHdhdGNoOiB7XFxuICAgICAgLy8gdmFsdWUgKHYpIHtcXG4gICAgICAvLyAgIHRoaXMuaW1hZ2VVcmwgPSB2XFxuICAgICAgLy8gfVxcbiAgICB9LFxcblxcbiAgICBtb3VudGVkICgpIHtcXG4gICAgICB0aGlzLmltYWdlVXJsID0gJydcXG4gICAgfSxcXG4gICAgY29tcHV0ZWQ6IHtcXG4gICAgICBkaWFsb2dIZWlnaHQgKCkge1xcbiAgICAgICAgcmV0dXJuIHRoaXMuJHZ1ZXRpZnkuYnJlYWtwb2ludC5oZWlnaHQgLSAxMDBcXG4gICAgICB9LFxcbiAgICAgIGNvbG9yICgpIHtcXG4gICAgICAgIHJldHVybiBbJ2Vycm9yJywgJ3dhcm5pbmcnLCAnc3VjY2VzcyddW01hdGguZmxvb3IodGhpcy5wcm9ncmVzcyAvIDQwKV1cXG4gICAgICB9XFxuICAgIH0sXFxuICAgIG1ldGhvZHM6IHtcXG5cXG4gICAgICBvblBpY2tGaWxlICgpIHtcXG4gICAgICAgIHRoaXMuJHJlZnMuaW1hZ2UuY2xpY2soKVxcbiAgICAgIH0sXFxuXFxuICAgICAgYXN5bmMgb25GaWxlUGlja2VkIChldmVudCkge1xcbiAgICAgICAgY29uc3QgZmlsZXMgPSBldmVudC50YXJnZXQuZmlsZXMgfHwgZXZlbnQuZGF0YVRyYW5zZmVyLmZpbGVzXFxuXFxuICAgICAgICBpZiAoZmlsZXMgJiYgZmlsZXNbMF0pIHtcXG4gICAgICAgICAgbGV0IGZpbGVuYW1lID0gZmlsZXNbMF0ubmFtZVxcblxcbiAgICAgICAgICBpZiAoZmlsZW5hbWUgJiYgZmlsZW5hbWUubGFzdEluZGV4T2YoJy4nKSA8PSAwKSB7XFxuICAgICAgICAgICAgcmV0dXJuIC8vcmV0dXJuIGFsZXJ0KCdQbGVhc2UgYWRkIGEgdmFsaWQgaW1hZ2UhJylcXG4gICAgICAgICAgfVxcblxcbiAgICAgICAgICBjb25zdCBmaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxcbiAgICAgICAgICBmaWxlUmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XFxuICAgICAgICAgICAgdGhpcy5pbWFnZVVybCA9IGZpbGVSZWFkZXIucmVzdWx0XFxuICAgICAgICAgIH0pXFxuICAgICAgICAgIGZpbGVSZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlc1swXSlcXG5cXG4gICAgICAgICAgbGV0IHBhdGggPSBhd2FpdCB0aGlzLnVwbG9hZChmaWxlc1swXSlcXG4gICAgICAgICAgLy8gdGhpcy5pbWFnZVVybCA9IHBhdGhcXG4gICAgICAgICAgdGhpcy4kZW1pdCgnZ2V0UGF0aCcsIHBhdGgpXFxuICAgICAgICB9XFxuICAgICAgfSxcXG5cXG4gICAgICByZW1vdmVGaWxlICgpIHtcXG4gICAgICAgIHRoaXMuaW1hZ2VVcmwgPSAnJ1xcbiAgICAgICAgdGhpcy5wcm9ncmVzcyA9IDBcXG4gICAgICAgIHRoaXMuZGlhbG9nID0gZmFsc2VcXG4gICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdtZXNzYWdlL3Jlc3BvbnNlTWVzc2FnZScsIHt0ZXh0OiB0aGlzLiR0KCdyZW1vdmVfaW1nX3N1Y2Nlc3MnKX0pXFxuICAgICAgfSxcXG5cXG4gICAgICBhc3luYyB1cGxvYWQgKGUpIHtcXG4gICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpXFxuICAgICAgICBsZXQgY29uZmlnID0ge1xcbiAgICAgICAgICBoZWFkZXJzOiB7XFxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJ1xcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBvblVwbG9hZFByb2dyZXNzOiBwcm9ncmVzc0V2ZW50ID0+IHtcXG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzID0gTWF0aC5yb3VuZCgoXFxuICAgICAgICAgICAgICBwcm9ncmVzc0V2ZW50LmxvYWRlZCAqIDEwMCkgLyBwcm9ncmVzc0V2ZW50LnRvdGFsKVxcbiAgICAgICAgICAgIGlmICh0aGlzLnByb2dyZXNzID49IDEwMCkgdGhpcy5sb2FkaW5nID0gZmFsc2VcXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdhdmF0YXInLCBlKVxcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZVxcbiAgICAgICAgbGV0IHtkYXRhfSA9IGF3YWl0IHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdmaWxlL3VwbG9hZEltYWdlJywge2Zvcm1EYXRhLCBjb25maWd9KVxcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2VcXG4gICAgICAgIHJldHVybiBkYXRhXFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlIHNjb3BlZD5cXG4gICAgaW5wdXRbdHlwZT1maWxlXSB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBsZWZ0OiAtOTk5OTlweDtcXG4gICAgfVxcblxcbiAgICAubG9hZGluZyB7XFxuICAgICAgICBvcGFjaXR5OiAwLjQ7XFxuICAgIH1cXG48L3N0eWxlPlwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi03YzViMjY2Y1wiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVXBsb2FkQnV0dG9uLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyAyNSIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8di1jYXJkPlxuICAgICAgICAgICAgPHYtY2FyZC1tZWRpYSBjb250YWluIDpjbGFzcz1cInsnbG9hZGluZyc6bG9hZGluZ31cIiB2LXNob3c9XCJpbWFnZVVybFwiIHJlZj1cImltYWdlVXJsXCIgc3R5bGU9XCJjdXJzb3I6IHBvaW50ZXI7XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrLnN0b3A9XCJkaWFsb2cgPSB0cnVlXCIgOnNyYz1cImltYWdlVXJsXCIgaGVpZ2h0PVwiMjAwcHhcIj5cbiAgICAgICAgICAgIDwvdi1jYXJkLW1lZGlhPlxuXG4gICAgICAgICAgICA8di1idG4gbGFyZ2VcbiAgICAgICAgICAgICAgICAgICBibG9ja1xuICAgICAgICAgICAgICAgICAgIHJhaXNlZFxuICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiaW5mb1wiXG4gICAgICAgICAgICAgICAgICAgQGNsaWNrPVwib25QaWNrRmlsZVwiXG4gICAgICAgICAgICAgICAgICAgdi1zaG93PVwicHJvZ3Jlc3MgPT09IDBcIj5cbiAgICAgICAgICAgICAgICB7eyBzZWxlY3RMYWJlbCB9fVxuICAgICAgICAgICAgPC92LWJ0bj5cbiAgICAgICAgICAgIDx2LXByb2dyZXNzLWxpbmVhciB2LXNob3c9XCJsb2FkaW5nXCIgaGVpZ2h0PVwiNDBcIiBjbGFzcz1cIm15LTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJwcm9ncmVzc1wiIDpjb2xvcj1cImNvbG9yXCI+PC92LXByb2dyZXNzLWxpbmVhcj5cbiAgICAgICAgICAgIDx2LWJ0biBsYXJnZSBibG9jayByYWlzZWQgY2xhc3M9XCJlcnJvclwiIEBjbGljaz1cInJlbW92ZUZpbGVcIiB2LXNob3c9XCJwcm9ncmVzcyA9PT0gMTAwXCI+XG4gICAgICAgICAgICAgICAge3sgcmVtb3ZlTGFiZWwgfX1cbiAgICAgICAgICAgIDwvdi1idG4+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgICAgICAgICAgICByZWY9XCJpbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJpbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgIDphY2NlcHQ9XCJhY2NlcHRcIlxuICAgICAgICAgICAgICAgICAgICBAY2hhbmdlPVwib25GaWxlUGlja2VkXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgPC92LWNhcmQ+XG4gICAgICAgIDx2LWRpYWxvZyBmdWxsc2NyZWVuIHYtbW9kZWw9XCJkaWFsb2dcIiBtYXgtd2lkdGg9XCIxMDAlXCIgbGF6eT5cbiAgICAgICAgICAgIDx2LWNhcmQgZnVsbC1oZWlnaHQ+XG4gICAgICAgICAgICAgICAgPHYtY2FyZC10aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+5Zu+54mH6aKE6KeIPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8di1zcGFjZXI+PC92LXNwYWNlcj5cbiAgICAgICAgICAgICAgICAgICAgPHYtYnRuIGljb24gQGNsaWNrLnN0b3A9XCJkaWFsb2cgPSBmYWxzZVwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8di1pY29uPmNsZWFyPC92LWljb24+XG4gICAgICAgICAgICAgICAgICAgIDwvdi1idG4+XG4gICAgICAgICAgICAgICAgPC92LWNhcmQtdGl0bGU+XG4gICAgICAgICAgICAgICAgPHYtY2FyZC1tZWRpYSBjb250YWluIDpjbGFzcz1cInsnbG9hZGluZyc6bG9hZGluZ31cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnNyYz1cImltYWdlVXJsXCIgOmhlaWdodD1cImRpYWxvZ0hlaWdodFwiPlxuICAgICAgICAgICAgICAgIDwvdi1jYXJkLW1lZGlhPlxuICAgICAgICAgICAgICAgIDx2LWNhcmQtYWN0aW9ucz5cbiAgICAgICAgICAgICAgICAgICAgPHYtc3BhY2VyPjwvdi1zcGFjZXI+XG4gICAgICAgICAgICAgICAgICAgIDx2LWJ0biBmbGF0IEBjbGljay5zdG9wPVwicmVtb3ZlRmlsZVwiPkRlbGV0ZTwvdi1idG4+XG4gICAgICAgICAgICAgICAgICAgIDx2LWJ0biBjb2xvcj1cInByaW1hcnlcIiBmbGF0IEBjbGljay5zdG9wPVwiZGlhbG9nPWZhbHNlXCI+Q2xvc2U8L3YtYnRuPlxuICAgICAgICAgICAgICAgIDwvdi1jYXJkLWFjdGlvbnM+XG4gICAgICAgICAgICA8L3YtY2FyZD5cbiAgICAgICAgPC92LWRpYWxvZz5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBwcm9wczoge1xuICAgICAgdmFsdWU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nXG4gICAgICB9LFxuICAgICAgYWNjZXB0OiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgZGVmYXVsdDogJyonXG4gICAgICB9LFxuICAgICAgc2VsZWN0TGFiZWw6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBkZWZhdWx0OiAnU2VsZWN0IGFuIGltYWdlJ1xuICAgICAgfSxcbiAgICAgIHJlbW92ZUxhYmVsOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgZGVmYXVsdDogJ1JlbW92ZSdcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZGF0YSAoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpbWFnZVVybDogJycsXG4gICAgICAgIHByb2dyZXNzOiAwLFxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgZGlhbG9nOiBmYWxzZVxuICAgICAgfVxuICAgIH0sXG5cbiAgICB3YXRjaDoge1xuICAgICAgLy8gdmFsdWUgKHYpIHtcbiAgICAgIC8vICAgdGhpcy5pbWFnZVVybCA9IHZcbiAgICAgIC8vIH1cbiAgICB9LFxuXG4gICAgbW91bnRlZCAoKSB7XG4gICAgICB0aGlzLmltYWdlVXJsID0gJydcbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICBkaWFsb2dIZWlnaHQgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kdnVldGlmeS5icmVha3BvaW50LmhlaWdodCAtIDEwMFxuICAgICAgfSxcbiAgICAgIGNvbG9yICgpIHtcbiAgICAgICAgcmV0dXJuIFsnZXJyb3InLCAnd2FybmluZycsICdzdWNjZXNzJ11bTWF0aC5mbG9vcih0aGlzLnByb2dyZXNzIC8gNDApXVxuICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuXG4gICAgICBvblBpY2tGaWxlICgpIHtcbiAgICAgICAgdGhpcy4kcmVmcy5pbWFnZS5jbGljaygpXG4gICAgICB9LFxuXG4gICAgICBhc3luYyBvbkZpbGVQaWNrZWQgKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGZpbGVzID0gZXZlbnQudGFyZ2V0LmZpbGVzIHx8IGV2ZW50LmRhdGFUcmFuc2Zlci5maWxlc1xuXG4gICAgICAgIGlmIChmaWxlcyAmJiBmaWxlc1swXSkge1xuICAgICAgICAgIGxldCBmaWxlbmFtZSA9IGZpbGVzWzBdLm5hbWVcblxuICAgICAgICAgIGlmIChmaWxlbmFtZSAmJiBmaWxlbmFtZS5sYXN0SW5kZXhPZignLicpIDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybiAvL3JldHVybiBhbGVydCgnUGxlYXNlIGFkZCBhIHZhbGlkIGltYWdlIScpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgZmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcbiAgICAgICAgICBmaWxlUmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmltYWdlVXJsID0gZmlsZVJlYWRlci5yZXN1bHRcbiAgICAgICAgICB9KVxuICAgICAgICAgIGZpbGVSZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlc1swXSlcblxuICAgICAgICAgIGxldCBwYXRoID0gYXdhaXQgdGhpcy51cGxvYWQoZmlsZXNbMF0pXG4gICAgICAgICAgLy8gdGhpcy5pbWFnZVVybCA9IHBhdGhcbiAgICAgICAgICB0aGlzLiRlbWl0KCdnZXRQYXRoJywgcGF0aClcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgcmVtb3ZlRmlsZSAoKSB7XG4gICAgICAgIHRoaXMuaW1hZ2VVcmwgPSAnJ1xuICAgICAgICB0aGlzLnByb2dyZXNzID0gMFxuICAgICAgICB0aGlzLmRpYWxvZyA9IGZhbHNlXG4gICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdtZXNzYWdlL3Jlc3BvbnNlTWVzc2FnZScsIHt0ZXh0OiB0aGlzLiR0KCdyZW1vdmVfaW1nX3N1Y2Nlc3MnKX0pXG4gICAgICB9LFxuXG4gICAgICBhc3luYyB1cGxvYWQgKGUpIHtcbiAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKClcbiAgICAgICAgbGV0IGNvbmZpZyA9IHtcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnXG4gICAgICAgICAgfSxcbiAgICAgICAgICBvblVwbG9hZFByb2dyZXNzOiBwcm9ncmVzc0V2ZW50ID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3MgPSBNYXRoLnJvdW5kKChcbiAgICAgICAgICAgICAgcHJvZ3Jlc3NFdmVudC5sb2FkZWQgKiAxMDApIC8gcHJvZ3Jlc3NFdmVudC50b3RhbClcbiAgICAgICAgICAgIGlmICh0aGlzLnByb2dyZXNzID49IDEwMCkgdGhpcy5sb2FkaW5nID0gZmFsc2VcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdhdmF0YXInLCBlKVxuICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlXG4gICAgICAgIGxldCB7ZGF0YX0gPSBhd2FpdCB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnZmlsZS91cGxvYWRJbWFnZScsIHtmb3JtRGF0YSwgY29uZmlnfSlcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2VcbiAgICAgICAgcmV0dXJuIGRhdGFcbiAgICAgIH1cbiAgICB9XG4gIH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuICAgIGlucHV0W3R5cGU9ZmlsZV0ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IC05OTk5OXB4O1xuICAgIH1cblxuICAgIC5sb2FkaW5nIHtcbiAgICAgICAgb3BhY2l0eTogMC40O1xuICAgIH1cbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9VcGxvYWRCdXR0b24udnVlIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInYtY2FyZFwiLFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJ2LWNhcmQtbWVkaWFcIiwge1xuICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmltYWdlVXJsLFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaW1hZ2VVcmxcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgcmVmOiBcImltYWdlVXJsXCIsXG4gICAgICAgICAgICBjbGFzczogeyBsb2FkaW5nOiBfdm0ubG9hZGluZyB9LFxuICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgY3Vyc29yOiBcInBvaW50ZXJcIiB9LFxuICAgICAgICAgICAgYXR0cnM6IHsgY29udGFpbjogXCJcIiwgc3JjOiBfdm0uaW1hZ2VVcmwsIGhlaWdodDogXCIyMDBweFwiIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgX3ZtLmRpYWxvZyA9IHRydWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnByb2dyZXNzID09PSAwLFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJwcm9ncmVzcyA9PT0gMFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBhdHRyczogeyBsYXJnZTogXCJcIiwgYmxvY2s6IFwiXCIsIHJhaXNlZDogXCJcIiwgY29sb3I6IFwiaW5mb1wiIH0sXG4gICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0ub25QaWNrRmlsZSB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5zZWxlY3RMYWJlbCkgKyBcIlxcbiAgICAgICAgXCIpXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInYtcHJvZ3Jlc3MtbGluZWFyXCIsIHtcbiAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5sb2FkaW5nLFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwibG9hZGluZ1wiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJteS0wXCIsXG4gICAgICAgICAgICBhdHRyczogeyBoZWlnaHQ6IFwiNDBcIiwgY29sb3I6IF92bS5jb2xvciB9LFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5wcm9ncmVzcyxcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgIF92bS5wcm9ncmVzcyA9ICQkdlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInByb2dyZXNzXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5wcm9ncmVzcyA9PT0gMTAwLFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJwcm9ncmVzcyA9PT0gMTAwXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImVycm9yXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IGxhcmdlOiBcIlwiLCBibG9jazogXCJcIiwgcmFpc2VkOiBcIlwiIH0sXG4gICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0ucmVtb3ZlRmlsZSB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5yZW1vdmVMYWJlbCkgKyBcIlxcbiAgICAgICAgXCIpXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgIHJlZjogXCJpbWFnZVwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJmaWxlXCIsIG5hbWU6IFwiaW1hZ2VcIiwgYWNjZXB0OiBfdm0uYWNjZXB0IH0sXG4gICAgICAgICAgICBvbjogeyBjaGFuZ2U6IF92bS5vbkZpbGVQaWNrZWQgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwidi1kaWFsb2dcIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7IGZ1bGxzY3JlZW46IFwiXCIsIFwibWF4LXdpZHRoXCI6IFwiMTAwJVwiLCBsYXp5OiBcIlwiIH0sXG4gICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgIHZhbHVlOiBfdm0uZGlhbG9nLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICBfdm0uZGlhbG9nID0gJCR2XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJkaWFsb2dcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWNhcmRcIixcbiAgICAgICAgICAgIHsgYXR0cnM6IHsgXCJmdWxsLWhlaWdodFwiOiBcIlwiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWNhcmQtdGl0bGVcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuWbvueJh+mihOiniFwiKV0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidi1zcGFjZXJcIiksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRpYWxvZyA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX2MoXCJ2LWljb25cIiwgW192bS5fdihcImNsZWFyXCIpXSldLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidi1jYXJkLW1lZGlhXCIsIHtcbiAgICAgICAgICAgICAgICBjbGFzczogeyBsb2FkaW5nOiBfdm0ubG9hZGluZyB9LFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBjb250YWluOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgc3JjOiBfdm0uaW1hZ2VVcmwsXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IF92bS5kaWFsb2dIZWlnaHRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtY2FyZC1hY3Rpb25zXCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ2LXNwYWNlclwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZmxhdDogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnJlbW92ZUZpbGUoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkRlbGV0ZVwiKV1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbG9yOiBcInByaW1hcnlcIiwgZmxhdDogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGlhbG9nID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJDbG9zZVwiKV1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi03YzViMjY2Y1wiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtN2M1YjI2NmNcIixcImhhc1Njb3BlZFwiOnRydWUsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9VcGxvYWRCdXR0b24udnVlXG4vLyBtb2R1bGUgaWQgPSAxNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDI1IiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi1kZjliNWY2OFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0Jhbm5lckNyZWF0ZS52dWVcIilcbn1cbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dLFxcXCJzdGFnZS0yXFxcIl0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV1dfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0Jhbm5lckNyZWF0ZS52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LWRmOWI1ZjY4XFxcIixcXFwiaGFzU2NvcGVkXFxcIjp0cnVlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9CYW5uZXJDcmVhdGUudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBcImRhdGEtdi1kZjliNWY2OFwiXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZm9ybS9CYW5uZXJDcmVhdGUudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LWRmOWI1ZjY4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtZGY5YjVmNjhcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9mb3JtL0Jhbm5lckNyZWF0ZS52dWVcbi8vIG1vZHVsZSBpZCA9IDI1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDI1IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LWRmOWI1ZjY4XFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQmFubmVyQ3JlYXRlLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiZjc2ZTc0OThcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LWRmOWI1ZjY4XFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQmFubmVyQ3JlYXRlLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi1kZjliNWY2OFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0Jhbm5lckNyZWF0ZS52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtZGY5YjVmNjhcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Zvcm0vQmFubmVyQ3JlYXRlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMjUiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcImZpbGVcIjpcIkJhbm5lckNyZWF0ZS52dWVcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi1kZjliNWY2OFwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZm9ybS9CYW5uZXJDcmVhdGUudnVlXG4vLyBtb2R1bGUgaWQgPSAyNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAyNSIsIjx0ZW1wbGF0ZT5cbiAgICA8di1mb3JtIHYtbW9kZWw9XCJ2YWxpZFwiIHJlZj1cImZvcm1cIiBsYXp5LXZhbGlkYXRpb24+XG4gICAgICAgIDx2LWNhcmQ+XG4gICAgICAgICAgICA8di1jYXJkLXRpdGxlIHByaW1hcnktdGl0bGU+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRsaW5lXCI+QmFubmVyPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZ3JleS0tdGV4dFwiPuiuvue9ruWcqOWuouaIt+err+aYvuekuueahOa1t+aKpeWkp+Wbvjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvdi1jYXJkLXRpdGxlPlxuICAgICAgICAgICAgPHYtY2FyZC10ZXh0PlxuICAgICAgICAgICAgICAgIDx2LXJhZGlvLWdyb3VwIHJvdyBsYWJlbD1cImJhbm5lcuS9jee9rlwiIHYtbW9kZWw9XCJiYW5uZXIudHlwZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm1hbmRhdG9yeT1cImZhbHNlXCI+XG4gICAgICAgICAgICAgICAgICAgIDx2LXJhZGlvIGxhYmVsPVwi6aaW6aG15aS06YOo5beo5bmV5rW35oqlXCIgdmFsdWU9XCJtYWluXCI+PC92LXJhZGlvPlxuICAgICAgICAgICAgICAgICAgICA8di1yYWRpbyBsYWJlbD1cIummlumhteS4remDqOa1t+aKpVwiIHZhbHVlPVwibWlkXCI+PC92LXJhZGlvPlxuICAgICAgICAgICAgICAgIDwvdi1yYWRpby1ncm91cD5cblxuICAgICAgICAgICAgICAgIDx2LXRleHQtZmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQmFubmVy5qCH6aKYXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJiYW5uZXIudGl0bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOnJ1bGVzPVwiWygpPT4hIWJhbm5lci50aXRsZSB8fCAndGl0bGUgaXMgcmVxdWlyZWQhISddXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpjb3VudGVyPVwiMzJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICA+PC92LXRleHQtZmllbGQ+XG5cbiAgICAgICAgICAgICAgICA8di1yYWRpby1ncm91cCByb3cgbGFiZWw9XCJiYW5uZXLlm77niYdcIiB2LW1vZGVsPVwiYmFubmVyQXZhdGFySXNVcmxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDptYW5kYXRvcnk9XCJmYWxzZVwiPlxuICAgICAgICAgICAgICAgICAgICA8di1yYWRpbyBsYWJlbD1cInVybOWcsOWdgFwiIDp2YWx1ZT1cInRydWVcIj48L3YtcmFkaW8+XG4gICAgICAgICAgICAgICAgICAgIDx2LXJhZGlvIGxhYmVsPVwi5LiK5Lyg5Zu+54mHXCIgOnZhbHVlPVwiZmFsc2VcIj48L3YtcmFkaW8+XG4gICAgICAgICAgICAgICAgPC92LXJhZGlvLWdyb3VwPlxuXG4gICAgICAgICAgICAgICAgPHYtdGV4dC1maWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgdi1zaG93PVwiYmFubmVyQXZhdGFySXNVcmxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLlm77niYflnLDlnYBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImJhbm5lci5hdmF0YXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICA+PC92LXRleHQtZmllbGQ+XG5cbiAgICAgICAgICAgICAgICA8dXBsb2FkLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgdi1zaG93PVwiIWJhbm5lckF2YXRhcklzVXJsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibXgtMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS8qXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImZpbGVJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBAZ2V0UGF0aD1cImdldFBhdGhcIlxuICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICA8di1zZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyYWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLlhbPogZTmlofnq6BcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS10ZXh0PVwidGl0bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS12YWx1ZT1cImlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgOmxvYWRpbmc9XCJsb2FkaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlLWl0ZW1zXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlwc1xuICAgICAgICAgICAgICAgICAgICAgICAgOml0ZW1zPVwicG9zdHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOnNlYXJjaC1pbnB1dC5zeW5jPVwic2VhcmNoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJiYW5uZXIucG9zdF9pZFwiXG4gICAgICAgICAgICAgICAgPjwvdi1zZWxlY3Q+XG5cbiAgICAgICAgICAgICAgICA8di10ZXh0LWZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCIhIWJhbm5lci5wb3N0X2lkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwi6ZO+5o6l5Zyw5Z2AXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJiYW5uZXIubGlua1wiXG4gICAgICAgICAgICAgICAgPjwvdi10ZXh0LWZpZWxkPlxuXG4gICAgICAgICAgICAgICAgPHYtdGV4dC1maWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLmjpLluo/mnYPph41cIlxuICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImJhbm5lci5zb3J0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICA6cnVsZXM9XCJbKCk9Pi9eLT9cXGQrJC8udGVzdChiYW5uZXIuc29ydCkgfHwgJ+W/hemhu+S4uuaVsOWtlyddXCJcbiAgICAgICAgICAgICAgICA+PC92LXRleHQtZmllbGQ+XG5cblxuICAgICAgICAgICAgPC92LWNhcmQtdGV4dD5cblxuICAgICAgICAgICAgPHYtZGl2aWRlciBjbGFzcz1cIm10LTJcIj48L3YtZGl2aWRlcj5cbiAgICAgICAgICAgIDx2LWNhcmQtYWN0aW9ucz5cbiAgICAgICAgICAgICAgICA8di1idG4gZmxhdCBAY2xpY2s9XCJyZXNldEZvcm1cIj5DbGVhcjwvdi1idG4+XG4gICAgICAgICAgICAgICAgPHYtc3BhY2VyPjwvdi1zcGFjZXI+XG5cbiAgICAgICAgICAgICAgICA8di1idG4gY29sb3I9XCJwcmltYXJ5XCIgOmRpc2FibGVkPVwiIXZhbGlkXCIgZmxhdCBAY2xpY2s9XCJzdWJtaXRcIj5TdWJtaXQ8L3YtYnRuPlxuICAgICAgICAgICAgPC92LWNhcmQtYWN0aW9ucz5cbiAgICAgICAgPC92LWNhcmQ+XG4gICAgPC92LWZvcm0+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgVXBsb2FkQnV0dG9uIGZyb20gJ34vY29tcG9uZW50cy9VcGxvYWRCdXR0b24nXG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiAnYmFubmVyLWNyZWF0ZS1mb3JtJyxcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICBVcGxvYWRCdXR0b24sXG4gICAgfSxcbiAgICBkYXRhICgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGJhbm5lckF2YXRhcklzVXJsOiB0cnVlLFxuICAgICAgICBzZWFyY2g6IG51bGwsXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICBwb3N0czogW10sXG4gICAgICAgIGJhbm5lcjoge1xuICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICBhdmF0YXI6ICcnLFxuICAgICAgICAgIHR5cGU6ICdtYWluJyxcbiAgICAgICAgICBsaW5rOiAnJyxcbiAgICAgICAgICBwb3N0X2lkOiBudWxsLFxuICAgICAgICAgIHNvcnQ6MFxuICAgICAgICB9LFxuICAgICAgICB2YWxpZDogdHJ1ZSxcblxuICAgICAgfVxuICAgIH0sXG4gICAgd2F0Y2g6IHtcbiAgICAgIHNlYXJjaCAodmFsKSB7XG4gICAgICAgIHZhbCAmJiB0aGlzLnF1ZXJ5U2VsZWN0aW9ucyh2YWwpXG4gICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOntcbiAgICAgIHF1ZXJ5U2VsZWN0aW9ucyAodmFsKSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWVcbiAgICAgICAgLy8gU2ltdWxhdGVkIGFqYXggcXVlcnlcbiAgICAgICAgc2V0VGltZW91dChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgbGV0IHF1ZXJ5QnVpbGQgPSB7XG4gICAgICAgICAgICBzZWFyY2g6IGB0aXRsZToke3ZhbH1gLFxuICAgICAgICAgICAgc2VhcmNoRmllbGRzOiAndGl0bGU6bGlrZSdcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5wb3N0cyA9IGF3YWl0IHRoaXMuZmV0Y2hQb3N0cyhxdWVyeUJ1aWxkKVxuICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlXG4gICAgICAgIH0sIDUwMClcbiAgICAgIH0sXG4gICAgICBhc3luYyBmZXRjaFBvc3RzKHF1ZXJ5QnVpbGQpe1xuICAgICAgICBsZXQge2RhdGF9ID0gYXdhaXQgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ3Bvc3QvaW5kZXgnLCBxdWVyeUJ1aWxkKVxuICAgICAgICByZXR1cm4gZGF0YVxuICAgICAgfSxcbiAgICAgIGdldFBhdGggKHNyYykge1xuICAgICAgICBjb25zb2xlLmxvZyhzcmMpXG4gICAgICAgIHRoaXMuYmFubmVyLmF2YXRhciA9IHNyY1xuICAgICAgfSxcbiAgICAgIHJlc2V0Rm9ybSAoKSB7XG4gICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlcyA9IFtdXG4gICAgICAgIHRoaXMuZm9ybUhhc0Vycm9ycyA9IGZhbHNlXG4gICAgICAgIHRoaXMuJHJlZnMuZm9ybS5yZXNldCgpXG4gICAgICB9LFxuICAgICAgYXN5bmMgc3VibWl0ICgpIHtcbiAgICAgICAgaWYgKHRoaXMuJHJlZnMuZm9ybS52YWxpZGF0ZSgpKSB7XG4gICAgICAgICAgLy8gTmF0aXZlIGZvcm0gc3VibWlzc2lvbiBpcyBub3QgeWV0IHN1cHBvcnRlZFxuICAgICAgICAgIGF3YWl0IHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdudXh0L3N0b3JlJywge2Zvcm1EYXRhOiB0aGlzLmZvcm1EYXRhfSlcbiAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnbWVzc2FnZS9yZXNwb25zZU1lc3NhZ2UnLCB7XG4gICAgICAgICAgICB0ZXh0OiB0aGlzLiR0KCdudXh0X2NyZWF0ZV9zdWNjZXNzJylcbiAgICAgICAgICB9KVxuICAgICAgICAgIHRoaXMuJHJvdXRlci5yZXBsYWNlKHtuYW1lOiAnbnV4dC5pbmRleCd9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBhc3luYyBjcmVhdGVkKCl7XG4gICAgICB0aGlzLnBvc3RzID0gYXdhaXQgdGhpcy5mZXRjaFBvc3RzKHt9KVxuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG5cbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9mb3JtL0Jhbm5lckNyZWF0ZS52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwidi1mb3JtXCIsXG4gICAge1xuICAgICAgcmVmOiBcImZvcm1cIixcbiAgICAgIGF0dHJzOiB7IFwibGF6eS12YWxpZGF0aW9uXCI6IFwiXCIgfSxcbiAgICAgIG1vZGVsOiB7XG4gICAgICAgIHZhbHVlOiBfdm0udmFsaWQsXG4gICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICBfdm0udmFsaWQgPSAkJHZcbiAgICAgICAgfSxcbiAgICAgICAgZXhwcmVzc2lvbjogXCJ2YWxpZFwiXG4gICAgICB9XG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWNhcmRcIixcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwidi1jYXJkLXRpdGxlXCIsIHsgYXR0cnM6IHsgXCJwcmltYXJ5LXRpdGxlXCI6IFwiXCIgfSB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaGVhZGxpbmVcIiB9LCBbX3ZtLl92KFwiQmFubmVyXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImdyZXktLXRleHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwi6K6+572u5Zyo5a6i5oi356uv5pi+56S655qE5rW35oql5aSn5Zu+XCIpXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtY2FyZC10ZXh0XCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1yYWRpby1ncm91cFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHJvdzogXCJcIiwgbGFiZWw6IFwiYmFubmVy5L2N572uXCIsIG1hbmRhdG9yeTogZmFsc2UgfSxcbiAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uYmFubmVyLnR5cGUsXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uYmFubmVyLCBcInR5cGVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImJhbm5lci50eXBlXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidi1yYWRpb1wiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGxhYmVsOiBcIummlumhteWktOmDqOW3qOW5lea1t+aKpVwiLCB2YWx1ZTogXCJtYWluXCIgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ2LXJhZGlvXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbGFiZWw6IFwi6aaW6aG15Lit6YOo5rW35oqlXCIsIHZhbHVlOiBcIm1pZFwiIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiQmFubmVy5qCH6aKYXCIsXG4gICAgICAgICAgICAgICAgICBydWxlczogW1xuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gISFfdm0uYmFubmVyLnRpdGxlIHx8IFwidGl0bGUgaXMgcmVxdWlyZWQhIVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBjb3VudGVyOiAzMixcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5iYW5uZXIudGl0bGUsXG4gICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5iYW5uZXIsIFwidGl0bGVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiYmFubmVyLnRpdGxlXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtcmFkaW8tZ3JvdXBcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczogeyByb3c6IFwiXCIsIGxhYmVsOiBcImJhbm5lcuWbvueJh1wiLCBtYW5kYXRvcnk6IGZhbHNlIH0sXG4gICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmJhbm5lckF2YXRhcklzVXJsLFxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLmJhbm5lckF2YXRhcklzVXJsID0gJCR2XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiYmFubmVyQXZhdGFySXNVcmxcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ2LXJhZGlvXCIsIHsgYXR0cnM6IHsgbGFiZWw6IFwidXJs5Zyw5Z2AXCIsIHZhbHVlOiB0cnVlIH0gfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ2LXJhZGlvXCIsIHsgYXR0cnM6IHsgbGFiZWw6IFwi5LiK5Lyg5Zu+54mHXCIsIHZhbHVlOiBmYWxzZSB9IH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmJhbm5lckF2YXRhcklzVXJsLFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImJhbm5lckF2YXRhcklzVXJsXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGxhYmVsOiBcIuWbvueJh+WcsOWdgFwiLCByZXF1aXJlZDogXCJcIiB9LFxuICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmJhbm5lci5hdmF0YXIsXG4gICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5iYW5uZXIsIFwiYXZhdGFyXCIsICQkdilcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImJhbm5lci5hdmF0YXJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidXBsb2FkLWJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICFfdm0uYmFubmVyQXZhdGFySXNVcmwsXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiIWJhbm5lckF2YXRhcklzVXJsXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHJlZjogXCJmaWxlSW5wdXRcIixcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJteC0wXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgYWNjZXB0OiBcImltYWdlLypcIiB9LFxuICAgICAgICAgICAgICAgIG9uOiB7IGdldFBhdGg6IF92bS5nZXRQYXRoIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidi1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBjbGVhcmFibGU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICBsYWJlbDogXCLlhbPogZTmlofnq6BcIixcbiAgICAgICAgICAgICAgICAgIFwiaXRlbS10ZXh0XCI6IFwidGl0bGVcIixcbiAgICAgICAgICAgICAgICAgIFwiaXRlbS12YWx1ZVwiOiBcImlkXCIsXG4gICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICBsb2FkaW5nOiBfdm0ubG9hZGluZyxcbiAgICAgICAgICAgICAgICAgIFwiY2FjaGUtaXRlbXNcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgIGNoaXBzOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgaXRlbXM6IF92bS5wb3N0cyxcbiAgICAgICAgICAgICAgICAgIFwic2VhcmNoLWlucHV0XCI6IF92bS5zZWFyY2hcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBcInVwZGF0ZTpzZWFyY2hJbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLnNlYXJjaCA9ICRldmVudFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uYmFubmVyLnBvc3RfaWQsXG4gICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5iYW5uZXIsIFwicG9zdF9pZFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJiYW5uZXIucG9zdF9pZFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGRpc2FibGVkOiAhIV92bS5iYW5uZXIucG9zdF9pZCwgbGFiZWw6IFwi6ZO+5o6l5Zyw5Z2AXCIgfSxcbiAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5iYW5uZXIubGluayxcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmJhbm5lciwgXCJsaW5rXCIsICQkdilcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImJhbm5lci5saW5rXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIuaOkuW6j+adg+mHjVwiLFxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICBydWxlczogW1xuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gL14tP1xcZCskLy50ZXN0KF92bS5iYW5uZXIuc29ydCkgfHwgXCLlv4XpobvkuLrmlbDlrZdcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5iYW5uZXIuc29ydCxcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmJhbm5lciwgXCJzb3J0XCIsICQkdilcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImJhbm5lci5zb3J0XCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInYtZGl2aWRlclwiLCB7IHN0YXRpY0NsYXNzOiBcIm10LTJcIiB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWNhcmQtYWN0aW9uc1wiLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyBmbGF0OiBcIlwiIH0sIG9uOiB7IGNsaWNrOiBfdm0ucmVzZXRGb3JtIH0gfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQ2xlYXJcIildXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidi1zcGFjZXJcIiksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2xvcjogXCJwcmltYXJ5XCIsIGRpc2FibGVkOiAhX3ZtLnZhbGlkLCBmbGF0OiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLnN1Ym1pdCB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiU3VibWl0XCIpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LWRmOWI1ZjY4XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi1kZjliNWY2OFwiLFwiaGFzU2NvcGVkXCI6dHJ1ZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Zvcm0vQmFubmVyQ3JlYXRlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMjUiXSwic291cmNlUm9vdCI6IiJ9
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
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"create.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 204:
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token (185:8)\n\n\u001b[0m \u001b[90m 183 | \u001b[39m          search\u001b[33m:\u001b[39m\u001b[32m`title:${val}`\u001b[39m\u001b[33m,\u001b[39m\n \u001b[90m 184 | \u001b[39m          searchFields\u001b[33m:\u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 185 | \u001b[39m        }\n \u001b[90m     | \u001b[39m        \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 186 | \u001b[39m        \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mitems \u001b[33m=\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$store\u001b[33m.\u001b[39mdispatch(\u001b[32m'post/index'\u001b[39m)\n \u001b[90m 187 | \u001b[39m        \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mloading \u001b[33m=\u001b[39m \u001b[36mfalse\u001b[39m\n \u001b[90m 188 | \u001b[39m      }\u001b[33m,\u001b[39m \u001b[35m500\u001b[39m)\u001b[0m\n");

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
                      label: "关联文章",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL251eHQvY3JlYXRlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL251eHQvY3JlYXRlLnZ1ZT9jOTBkIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvbnV4dC9jcmVhdGUudnVlPzY4ZDciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9udXh0L2NyZWF0ZS52dWU/MTZiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLHlCQUFxTTtBQUNyTTtBQUNBO0FBQ0E7QUFDQSw0Q0FBa1M7QUFDbFM7QUFDQSw4Q0FBa0w7QUFDbEw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEOzs7Ozs7OztBQzVDQTs7QUFFQTtBQUNBLHFDQUF3TztBQUN4TztBQUNBO0FBQ0E7QUFDQSxrRUFBMkg7QUFDM0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzSkFBc0osaUZBQWlGO0FBQ3ZPLCtKQUErSixpRkFBaUY7QUFDaFA7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDOzs7Ozs7O0FDcEJBO0FBQ0E7OztBQUdBO0FBQ0EsaWVBQWtlLHNGQUFzRjs7QUFFeGpCOzs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLHdDQUF3QyxzQkFBc0IsRUFBRTtBQUN6RSxtQkFBbUIsK0JBQStCO0FB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0Isc0JBQXNCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixTQUFTLFdBQVcsT0FBTyx1QkFBdUIsRUFBRTtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkIsMkJBQTJCO0FBQzNCLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6ImpzLzguNzQyMTBmNTgwZjA0NTViMDg3NGYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTBkZWQxNTdiXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vY3JlYXRlLnZ1ZVwiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV0sXFxcInN0YWdlLTJcXFwiXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XV19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vY3JlYXRlLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMGRlZDE1N2JcXFwiLFxcXCJoYXNTY29wZWRcXFwiOnRydWUsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2NyZWF0ZS52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IFwiZGF0YS12LTBkZWQxNTdiXCJcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvcGFnZXMvbnV4dC9jcmVhdGUudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTBkZWQxNTdiXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMGRlZDE1N2JcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvbnV4dC9jcmVhdGUudnVlXG4vLyBtb2R1bGUgaWQgPSAxMzRcbi8vIG1vZHVsZSBjaHVua3MgPSA4IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTBkZWQxNTdiXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vY3JlYXRlLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiNmIwZTVmMGJcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTBkZWQxNTdiXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vY3JlYXRlLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0wZGVkMTU3YlxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2NyZWF0ZS52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtMGRlZDE1N2JcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9udXh0L2NyZWF0ZS52dWVcbi8vIG1vZHVsZSBpZCA9IDIwMlxuLy8gbW9kdWxlIGNodW5rcyA9IDgiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcImZpbGVcIjpcImNyZWF0ZS52dWVcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi0wZGVkMTU3YlwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL251eHQvY3JlYXRlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjAzXG4vLyBtb2R1bGUgY2h1bmtzID0gOCIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ2LWNhcmRcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWNhcmQtdGl0bGVcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJncmV5IGxpZ2h0ZW4tNFwiLCBhdHRyczogeyBcInByaW1hcnktdGl0bGVcIjogXCJcIiB9IH0sXG4gICAgICAgIFtfYyhcImgzXCIsIHsgc3RhdGljQ2xhc3M6IFwiaGVhZGxpbmUgbWItMFwiIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5uYW1lKSldKV1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ2LWRpdmlkZXJcIiksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwidi1mb3JtXCIsXG4gICAgICAgIHtcbiAgICAgICAgICByZWY6IFwiZm9ybVwiLFxuICAgICAgICAgIGF0dHJzOiB7IFwibGF6eS12YWxpZGF0aW9uXCI6IFwiXCIgfSxcbiAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgdmFsdWU6IF92bS52YWxpZCxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgX3ZtLnZhbGlkID0gJCR2XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ2YWxpZFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtY2FyZFwiLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInYtY2FyZC10aXRsZVwiLCB7IGF0dHJzOiB7IFwicHJpbWFyeS10aXRsZVwiOiBcIlwiIH0gfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaGVhZGxpbmVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkNsaWVudCBCYXNlIENvbmZpZ1wiKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiZ3JleS0tdGV4dFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi5a6i5oi356uv5Z+65pys6YWN572uXCIpXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtY2FyZC10ZXh0XCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIuWuouaIt+err+WQjeensFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhIV92bS5mb3JtRGF0YS5udXh0Lm5hbWUgfHwgXCJjbGllbnQgaXMgcmVxdWlyZWQhIVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXI6IDMyLFxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtRGF0YS5udXh0Lm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm1EYXRhLm51eHQsIFwibmFtZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm1EYXRhLm51eHQubmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCLlrqLmiLfnq6/liY3nvIBcIixcbiAgICAgICAgICAgICAgICAgICAgICBydWxlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgISFfdm0uZm9ybURhdGEubnV4dC5wcmVmaXggfHwgXCJwcmVmaXggaXMgcmVxdWlyZWQhIVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXI6IDEwLFxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtRGF0YS5udXh0LnByZWZpeCxcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybURhdGEubnV4dCwgXCJwcmVmaXhcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtRGF0YS5udXh0LnByZWZpeFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidi1kaXZpZGVyXCIsIHsgc3RhdGljQ2xhc3M6IFwibXQtMlwiIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInYtY2FyZC10aXRsZVwiLCB7IGF0dHJzOiB7IFwicHJpbWFyeS10aXRsZVwiOiBcIlwiIH0gfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaGVhZGxpbmVcIiB9LCBbX3ZtLl92KFwiQmFubmVyXCIpXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiZ3JleS0tdGV4dFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi6K6+572u5Zyo5a6i5oi356uv5pi+56S655qE5rW35oql5aSn5Zu+XCIpXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtY2FyZC10ZXh0XCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1yYWRpby1ncm91cFwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcm93OiBcIlwiLCBsYWJlbDogXCJiYW5uZXLkvY3nva5cIiwgbWFuZGF0b3J5OiBmYWxzZSB9LFxuICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm1EYXRhLmJhbm5lci50eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybURhdGEuYmFubmVyLCBcInR5cGVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybURhdGEuYmFubmVyLnR5cGVcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1yYWRpb1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBsYWJlbDogXCLpppbpobXlpLTpg6jlt6jluZXmtbfmiqVcIiwgdmFsdWU6IFwibWFpblwiIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1yYWRpb1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBsYWJlbDogXCLpppbpobXkuK3pg6jmtbfmiqVcIiwgdmFsdWU6IFwibWlkXCIgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkJhbm5lcuagh+mimFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhIV92bS5mb3JtRGF0YS5iYW5uZXIudGl0bGUgfHwgXCJ0aXRsZSBpcyByZXF1aXJlZCEhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgY291bnRlcjogMzIsXG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm1EYXRhLmJhbm5lci50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybURhdGEuYmFubmVyLCBcInRpdGxlXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybURhdGEuYmFubmVyLnRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1yYWRpby1ncm91cFwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcm93OiBcIlwiLCBsYWJlbDogXCJiYW5uZXLlm77niYdcIiwgbWFuZGF0b3J5OiBmYWxzZSB9LFxuICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmJhbm5lckF2YXRhcklzVXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uYmFubmVyQXZhdGFySXNVcmwgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImJhbm5lckF2YXRhcklzVXJsXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtcmFkaW9cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbGFiZWw6IFwidXJs5Zyw5Z2AXCIsIHZhbHVlOiB0cnVlIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1yYWRpb1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBsYWJlbDogXCLkuIrkvKDlm77niYdcIiwgdmFsdWU6IGZhbHNlIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uYmFubmVyQXZhdGFySXNVcmwsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImJhbm5lckF2YXRhcklzVXJsXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGxhYmVsOiBcIuWbvueJh+WcsOWdgFwiLCByZXF1aXJlZDogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybURhdGEuYmFubmVyLmF2YXRhcixcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybURhdGEuYmFubmVyLCBcImF2YXRhclwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm1EYXRhLmJhbm5lci5hdmF0YXJcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInVwbG9hZC1idXR0b25cIiwge1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICFfdm0uYmFubmVyQXZhdGFySXNVcmwsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIiFiYW5uZXJBdmF0YXJJc1VybFwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICByZWY6IFwiZmlsZUlucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm14LTBcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgYWNjZXB0OiBcImltYWdlLypcIiB9LFxuICAgICAgICAgICAgICAgICAgICBvbjogeyBnZXRQYXRoOiBfdm0uZ2V0UGF0aCB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInYtc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCLlhbPogZTmlofnq6BcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogX3ZtLmxvYWRpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgXCJjYWNoZS1pdGVtc1wiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNoaXBzOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBfdm0ucG9zdHMsXG4gICAgICAgICAgICAgICAgICAgICAgXCJzZWFyY2gtaW5wdXRcIjogX3ZtLnNlYXJjaFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIFwidXBkYXRlOnNlYXJjaElucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlYXJjaCA9ICRldmVudFxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm1EYXRhLmJhbm5lci5wb3N0SWQsXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm1EYXRhLmJhbm5lciwgXCJwb3N0SWRcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtRGF0YS5iYW5uZXIucG9zdElkXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRleHQtZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBsYWJlbDogXCLpk77mjqXlnLDlnYBcIiwgcmVxdWlyZWQ6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm1EYXRhLmJhbm5lci5saW5rLFxuICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtRGF0YS5iYW5uZXIsIFwibGlua1wiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm1EYXRhLmJhbm5lci5saW5rXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ2LWRpdmlkZXJcIiwgeyBzdGF0aWNDbGFzczogXCJtdC0yXCIgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidi1jYXJkLXRpdGxlXCIsIHsgYXR0cnM6IHsgXCJwcmltYXJ5LXRpdGxlXCI6IFwiXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJoZWFkbGluZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiUmVjb21tZW5kIENhdGFsb2dcIilcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImdyZXktLXRleHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIuiuvue9ruWcqOWuouaIt+err+mmlumhteaOqOiNkOeahOWIhuexu1wiKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLmNhdGVsb2dzTG9hZGVkXG4gICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWNhcmQtdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCLmlofnq6DliIbnsbtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IF92bS5jYXRlbG9ncyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpdGVtLXRleHRcIjogXCJuYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiaXRlbS12YWx1ZVwiOiBcImlkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxlOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1heC1oZWlnaHRcIjogXCI0MDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGludDogXCLor7fpgInmi6nmlofnq6DliIbnsbtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwZXJzaXN0ZW50LWhpbnRcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbih2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdi5sZW5ndGggPiAwIHx8IFwiQ2F0ZWxvZ3MgaXMgcmVxdWlyZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpcHM6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwic2VsZWN0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jaGlwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBKU09OLnN0cmluZ2lmeShkYXRhLml0ZW0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2hpcC0tc2VsZWN0LW11bHRpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IGRhdGEuc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5wYXJlbnQuc2VsZWN0SXRlbShkYXRhLml0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhkYXRhLml0ZW0ubmFtZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtRGF0YS5jYXRlbG9ncyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtRGF0YSwgXCJjYXRlbG9nc1wiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybURhdGEuY2F0ZWxvZ3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInYtZGl2aWRlclwiLCB7IHN0YXRpY0NsYXNzOiBcIm10LTJcIiB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWNhcmQtYWN0aW9uc1wiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgZmxhdDogXCJcIiB9LCBvbjogeyBjbGljazogX3ZtLnJlc2V0Rm9ybSB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJDbGVhclwiKV1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ2LXNwYWNlclwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInByaW1hcnlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiAhX3ZtLnZhbGlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmxhdDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5zdWJtaXQgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiU3VibWl0XCIpXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTBkZWQxNTdiXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0wZGVkMTU3YlwiLFwiaGFzU2NvcGVkXCI6dHJ1ZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9udXh0L2NyZWF0ZS52dWVcbi8vIG1vZHVsZSBpZCA9IDIwNVxuLy8gbW9kdWxlIGNodW5rcyA9IDgiXSwic291cmNlUm9vdCI6IiJ9
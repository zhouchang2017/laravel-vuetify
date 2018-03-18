import Vue from 'vue'

Vue.directive('num', {
  inserted: function (el, binding) {
    el.innerHTML = binding.value.num
  },
  update: (el, binding) => {
    binding.value.vm = {...binding.value.vm, after: ''}
    TweenLite.to(binding.value.vm, 0.5, {after: binding.value.num})
    console.log(binding.value.vm)
    el.innerHTML = binding.value.num
  }
  // bind: function (el, binding, vnode) {
  //   var s = JSON.stringify
  //   el.innerHTML =
  //     'name: ' + s(binding.name) + '<br>' +
  //     'value: ' + s(binding.value) + '<br>' +
  //     'expression: ' + s(binding.expression) + '<br>' +
  //     'argument: ' + s(binding.arg) + '<br>' +
  //     'modifiers: ' + s(binding.modifiers) + '<br>' +
  //     'vnode keys: ' + Object.keys(vnode).join(', ')
  // }
})

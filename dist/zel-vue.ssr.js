'use strict';Object.defineProperty(exports,'__esModule',{value:true});function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script = {
  name: "ZelVueButton",
  props: {
    disabled: Boolean,
    fullWidth: Boolean,
    icon: {
      type: String,
      default: ""
    },
    size: String,
    variant: {
      type: String,
      default: "primary"
    }
  },
  computed: {
    buttonDisabled: function buttonDisabled() {
      return this.disabled || (this.elForm || {}).disabled;
    }
  },
  methods: {
    callback: function callback(e) {
      this.$emit('click', e);
    }
  }
};function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('button', {
    staticClass: "zep-button",
    class: [_vm.variant ? 'zep-button-' + _vm.variant : '', _vm.size === 'small' ? 'zep-button--small' : '', _vm.fullWidth ? 'zep-button--full' : ''],
    attrs: {
      "disabled": _vm.buttonDisabled
    },
    on: {
      "click": function click($event) {
        return _vm.callback($event);
      }
    }
  }, [_vm._ssrNode("<span" + _vm._ssrClass("zep-button__text", [_vm.variant === 'tertiary' ? 'zep-button__text--tertiary' : '']) + ">", "</span>", [_vm._t("default", [_vm._v("Primary Button")])], 2)]);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = undefined;
/* scoped */

var __vue_scope_id__ = undefined;
/* module identifier */

var __vue_module_identifier__ = "data-v-09594ed6";
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__ = normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, undefined, undefined);//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$1 = {
  name: "ZelVueCheckbox",
  // vue component name
  props: {
    disabled: Boolean,
    value: Boolean,
    label: String
  },
  computed: {
    checkboxDisabled: function checkboxDisabled() {
      return this.disabled || (this.elForm || {}).disabled;
    }
  }
};/* script */
var __vue_script__$1 = script$1;
/* template */

var __vue_render__$1 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "zep-checkbox"
  }, [_vm._ssrNode("<input id=\"checkboxZep\" type=\"checkbox\"" + _vm._ssrAttr("disabled", _vm.checkboxDisabled) + _vm._ssrAttr("checked", _vm.value) + " class=\"zep-checkbox__input\"> <label for=\"checkboxZep\" class=\"zep-checkbox__label\">" + _vm._ssrEscape(_vm._s(_vm.label)) + "</label>")]);
};

var __vue_staticRenderFns__$1 = [];
/* style */

var __vue_inject_styles__$1 = undefined;
/* scoped */

var __vue_scope_id__$1 = undefined;
/* module identifier */

var __vue_module_identifier__$1 = "data-v-984adfa8";
/* functional template */

var __vue_is_functional_template__$1 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$1 = normalizeComponent({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, undefined, undefined, undefined);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$2 = {
  props: {
    placeholder: {
      type: String
    },
    disabled: Boolean,
    label: String,
    value: String,
    error: Boolean,
    errMessage: String
  },
  computed: {
    inputDisabled: function inputDisabled() {
      return this.disabled || (this.elForm || {}).disabled;
    }
  }
};/* script */
var __vue_script__$2 = script$2;
/* template */

var __vue_render__$2 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "zep-input-container"
  }, [_vm._ssrNode("<input type=\"text\" id=\"inputZeppelin\"" + _vm._ssrAttr("placeholder", _vm.placeholder) + _vm._ssrAttr("disabled", _vm.inputDisabled) + _vm._ssrAttr("value", _vm.value) + " class=\"zep-input\"> <label for=\"inputZeppelin\" class=\"zep-input-container__label\">" + _vm._ssrEscape(_vm._s(_vm.placeholder)) + "</label> " + (_vm.error ? "<label for=\"inputZeppelin\" class=\"zep-input-container__feedback\">" + _vm._ssrEscape(_vm._s(_vm.errorMessage)) + "</label>" : "<!---->"))]);
};

var __vue_staticRenderFns__$2 = [];
/* style */

var __vue_inject_styles__$2 = undefined;
/* scoped */

var __vue_scope_id__$2 = undefined;
/* module identifier */

var __vue_module_identifier__$2 = "data-v-ce172a92";
/* functional template */

var __vue_is_functional_template__$2 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$2 = normalizeComponent({
  render: __vue_render__$2,
  staticRenderFns: __vue_staticRenderFns__$2
}, __vue_inject_styles__$2, __vue_script__$2, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, false, undefined, undefined, undefined);//
//
//
//
//
//
//
//
//
//
//
//
var script$3 = {
  name: "bulletlist",
  props: {
    dataSource: {
      type: Array,
      default: []
    }
  }
};/* script */
var __vue_script__$3 = script$3;
/* template */

var __vue_render__$3 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('ul', {
    staticClass: "zep-list"
  }, _vm._l(_vm.dataSource, function (item) {
    return _vm._ssrNode("<li class=\"zep-list__item\">", "</li>", [_vm._t("default", [_vm._v(_vm._s(item.text))])], 2);
  }), 0);
};

var __vue_staticRenderFns__$3 = [];
/* style */

var __vue_inject_styles__$3 = undefined;
/* scoped */

var __vue_scope_id__$3 = undefined;
/* module identifier */

var __vue_module_identifier__$3 = "data-v-28c99b7e";
/* functional template */

var __vue_is_functional_template__$3 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$3 = normalizeComponent({
  render: __vue_render__$3,
  staticRenderFns: __vue_staticRenderFns__$3
}, __vue_inject_styles__$3, __vue_script__$3, __vue_scope_id__$3, __vue_is_functional_template__$3, __vue_module_identifier__$3, false, undefined, undefined, undefined);//
//
//
//
//
//
//
//
//
//
//
//
//
var script$4 = {
  name: "attributeListItem",
  props: {
    dataSource: {
      type: Array,
      default: []
    }
  }
};/* script */
var __vue_script__$4 = script$4;
/* template */

var __vue_render__$4 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('ul', {
    staticClass: "zep-list"
  }, [_vm._ssrNode(_vm._ssrList(_vm.dataSource, function (item) {
    return "<li class=\"zep-list__item zep-list__item--attribute\"><span class=\"zep-list__label\">" + _vm._ssrEscape(_vm._s(item.label)) + "</span>" + _vm._ssrEscape(_vm._s(item.text) + "\n  ") + "</li>";
  }))]);
};

var __vue_staticRenderFns__$4 = [];
/* style */

var __vue_inject_styles__$4 = undefined;
/* scoped */

var __vue_scope_id__$4 = undefined;
/* module identifier */

var __vue_module_identifier__$4 = "data-v-312f6995";
/* functional template */

var __vue_is_functional_template__$4 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$4 = normalizeComponent({
  render: __vue_render__$4,
  staticRenderFns: __vue_staticRenderFns__$4
}, __vue_inject_styles__$4, __vue_script__$4, __vue_scope_id__$4, __vue_is_functional_template__$4, __vue_module_identifier__$4, false, undefined, undefined, undefined);//
//
//
//
//
//
//
//
//
//
var script$5 = {
  name: "notifications",
  props: {
    variant: {
      type: String,
      default: "info"
    },
    message: {
      type: String,
      required: true
    },
    autoHideDuration: {
      type: Number,
      default: 600
    },
    onClose: {
      type: Function
    }
  }
};/* script */
var __vue_script__$5 = script$5;
/* template */

var __vue_render__$5 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    class: [_vm.variant ? 'zep-notification  zep-notification--' + _vm.variant : ''],
    attrs: {
      "message": _vm.message,
      "autoHideDuration": _vm.autoHideDuration
    }
  }, [_vm._ssrNode(_vm._ssrEscape("\n  " + _vm._s(_vm.message) + "\n"))]);
};

var __vue_staticRenderFns__$5 = [];
/* style */

var __vue_inject_styles__$5 = undefined;
/* scoped */

var __vue_scope_id__$5 = undefined;
/* module identifier */

var __vue_module_identifier__$5 = "data-v-0eca7902";
/* functional template */

var __vue_is_functional_template__$5 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$5 = normalizeComponent({
  render: __vue_render__$5,
  staticRenderFns: __vue_staticRenderFns__$5
}, __vue_inject_styles__$5, __vue_script__$5, __vue_scope_id__$5, __vue_is_functional_template__$5, __vue_module_identifier__$5, false, undefined, undefined, undefined);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$6 = {
  name: "ZelNumberInput",
  props: {
    plustitle: String,
    minustitle: String,
    max: Number,
    min: Number,
    step: {
      type: Number,
      default: 1
    },
    value: {
      type: Number,
      default: 0
    }
  },
  data: function data() {
    return {};
  },
  methods: {
    clear: function clear() {
      return this.counter = 0;
    },
    updateCounter: function updateCounter(evt) {
      var counter = parseInt(evt.target.value, 10);

      if (counter >= this.min && counter <= this.max) {
        return this.counter = counter;
      } else {
        this.clear();
      }
    },
    increament: function increament(counter) {
      counter = parseInt(counter, 10);
      var step = this.step || 1;
      counter += step;

      if (counter <= this.max) {
        this.$emit("onplus-click", counter);
      }
    },
    decreament: function decreament(counter) {
      counter = parseInt(counter, 10);
      var step = this.step || 1;
      counter -= step;

      if (counter >= this.min) {
        this.$emit("onminus-click", counter);
      }
    }
  }
};/* script */
var __vue_script__$6 = script$6;
/* template */

var __vue_render__$6 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', [_vm._ssrNode("<div data-zep-type=\"number-input\" data-zep-step=\"1\" data-zep-max=\"10\" data-zep-min=\"0\" class=\"zep-numberinput\"><button id=\"minus\" class=\"zep-button zep-button-icon\"><svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" class=\"zep-button__icon\"><title>" + _vm._ssrEscape(_vm._s(_vm.minustitle)) + "</title> <path fill=\"currentColor\" d=\"M25.333 17.333h-18.667v-2.667h18.667z\"></path></svg></button> <label for=\"counter\" class=\"zep-visually-hidden\">Counter</label><input id=\"counter\" type=\"text\"" + _vm._ssrAttr("max", _vm.max) + _vm._ssrAttr("min", _vm.min) + _vm._ssrAttr("step", _vm.step) + _vm._ssrAttr("value", _vm.value) + " class=\"zep-input zep-input--number\"> <button id=\"plus\" class=\"zep-button zep-button-icon\"><svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" class=\"zep-button__icon\"><title>" + _vm._ssrEscape(_vm._s(_vm.plustitle)) + "</title> <path fill=\"currentColor\" d=\"M25.333 17.333h-8v8h-2.667v-8h-8v-2.667h8v-8h2.667v8h8z\"></path></svg></button></div>")]);
};

var __vue_staticRenderFns__$6 = [];
/* style */

var __vue_inject_styles__$6 = undefined;
/* scoped */

var __vue_scope_id__$6 = undefined;
/* module identifier */

var __vue_module_identifier__$6 = "data-v-00845b3d";
/* functional template */

var __vue_is_functional_template__$6 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$6 = normalizeComponent({
  render: __vue_render__$6,
  staticRenderFns: __vue_staticRenderFns__$6
}, __vue_inject_styles__$6, __vue_script__$6, __vue_scope_id__$6, __vue_is_functional_template__$6, __vue_module_identifier__$6, false, undefined, undefined, undefined);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$7 = {
  name: "radioButton",
  props: {
    name: {
      type: String,
      required: false
    },
    className: {
      type: String,
      required: false
    },
    id: {
      type: String,
      required: false
    },
    value: {
      type: String,
      required: false
    },
    required: {
      type: Boolean,
      required: false,
      default: false
    },
    checked: {
      type: Boolean,
      required: false,
      default: false
    },
    label: {
      type: String,
      required: true
    }
  },
  methods: {
    updateInput: function updateInput(event) {
      this.$emit("input", event.target.value);
    }
  }
};/* script */
var __vue_script__$7 = script$7;
/* template */

var __vue_render__$7 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('label', {
    staticClass: "zep-radio"
  }, [_vm._t("default", [_vm._v(_vm._s(_vm.label))]), _vm._ssrNode(" <input type=\"radio\"" + _vm._ssrAttr("name", _vm.name) + _vm._ssrAttr("id", _vm.id) + _vm._ssrAttr("required", _vm.required) + _vm._ssrAttr("checked", _vm.checked) + _vm._ssrAttr("value", _vm.value) + _vm._ssrClass(null, _vm.className) + "> <span class=\"zep-radio__indicator\"></span>")], 2);
};

var __vue_staticRenderFns__$7 = [];
/* style */

var __vue_inject_styles__$7 = undefined;
/* scoped */

var __vue_scope_id__$7 = undefined;
/* module identifier */

var __vue_module_identifier__$7 = "data-v-66ab634c";
/* functional template */

var __vue_is_functional_template__$7 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$7 = normalizeComponent({
  render: __vue_render__$7,
  staticRenderFns: __vue_staticRenderFns__$7
}, __vue_inject_styles__$7, __vue_script__$7, __vue_scope_id__$7, __vue_is_functional_template__$7, __vue_module_identifier__$7, false, undefined, undefined, undefined);/* eslint-disable import/prefer-default-export */var components=/*#__PURE__*/Object.freeze({__proto__:null,ZelVueButton: __vue_component__,ZelVueCheckbox: __vue_component__$1,ZelVueInput: __vue_component__$2,ZelBulletList: __vue_component__$3,ZelAttributeList: __vue_component__$4,ZelNotifications: __vue_component__$5,ZelNumberInput: __vue_component__$6,ZelRadioButton: __vue_component__$7});var install = function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Object.entries(components).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        componentName = _ref2[0],
        component = _ref2[1];

    Vue.component(componentName, component);
  });
}; // Create module definition for Vue.use()


var plugin = {
  install: install
}; // To auto-install when vue is found

/* global window global */

var GlobalVue = null;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
} // Default export is library as a whole, registered via Vue.use()
exports.ZelAttributeList=__vue_component__$4;exports.ZelBulletList=__vue_component__$3;exports.ZelNotifications=__vue_component__$5;exports.ZelNumberInput=__vue_component__$6;exports.ZelRadioButton=__vue_component__$7;exports.ZelVueButton=__vue_component__;exports.ZelVueCheckbox=__vue_component__$1;exports.ZelVueInput=__vue_component__$2;exports.default=plugin;
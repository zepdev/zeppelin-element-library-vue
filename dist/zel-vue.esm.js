//
//
//
//
//
//
//
//
//
//
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
    buttonDisabled() {
      return this.disabled || (this.elForm || {}).disabled;
    }

  },
  methods: {
    callback: function (e) {
      this.$emit('click', e);
    }
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
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
}

/* script */
const __vue_script__ = script;
/* template */

var __vue_render__ = function () {
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
      "click": function ($event) {
        return _vm.callback($event);
      }
    }
  }, [_c('span', {
    staticClass: "zep-button__text",
    class: [_vm.variant === 'tertiary' ? 'zep-button__text--tertiary' : '']
  }, [_vm._t("default", [_vm._v("Primary Button")])], 2)]);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = undefined;
/* scoped */

const __vue_scope_id__ = undefined;
/* module identifier */

const __vue_module_identifier__ = undefined;
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__ = normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, undefined, undefined);

//
//
//
//
//
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
    checkboxDisabled() {
      return this.disabled || (this.elForm || {}).disabled;
    }

  }
};

/* script */
const __vue_script__$1 = script$1;
/* template */

var __vue_render__$1 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "zep-checkbox"
  }, [_c('input', {
    staticClass: "zep-checkbox__input",
    attrs: {
      "id": "checkboxZep",
      "type": "checkbox",
      "disabled": _vm.checkboxDisabled
    },
    domProps: {
      "checked": _vm.value
    },
    on: {
      "change": function ($event) {
        return _vm.$emit('input', $event.target.checked);
      }
    }
  }), _vm._v(" "), _c('label', {
    staticClass: "zep-checkbox__label",
    attrs: {
      "for": "checkboxZep"
    }
  }, [_vm._v(_vm._s(_vm.label))])]);
};

var __vue_staticRenderFns__$1 = [];
/* style */

const __vue_inject_styles__$1 = undefined;
/* scoped */

const __vue_scope_id__$1 = undefined;
/* module identifier */

const __vue_module_identifier__$1 = undefined;
/* functional template */

const __vue_is_functional_template__$1 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$1 = normalizeComponent({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, undefined, undefined, undefined);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    inputDisabled() {
      return this.disabled || (this.elForm || {}).disabled;
    }

  }
};

/* script */
const __vue_script__$2 = script$2;
/* template */

var __vue_render__$2 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "zep-input-container"
  }, [_c('input', {
    staticClass: "zep-input",
    attrs: {
      "type": "text",
      "id": "inputZeppelin",
      "placeholder": _vm.placeholder,
      "disabled": _vm.inputDisabled
    },
    domProps: {
      "value": _vm.value
    },
    on: {
      "input": function ($event) {
        return _vm.$emit('input', $event.target.value);
      }
    }
  }), _vm._v(" "), _c('label', {
    staticClass: "zep-input-container__label",
    attrs: {
      "for": "inputZeppelin"
    }
  }, [_vm._v(_vm._s(_vm.placeholder))]), _vm._v(" "), _vm.error ? _c('label', {
    staticClass: "zep-input-container__feedback",
    attrs: {
      "for": "inputZeppelin"
    }
  }, [_vm._v(_vm._s(_vm.errorMessage))]) : _vm._e()]);
};

var __vue_staticRenderFns__$2 = [];
/* style */

const __vue_inject_styles__$2 = undefined;
/* scoped */

const __vue_scope_id__$2 = undefined;
/* module identifier */

const __vue_module_identifier__$2 = undefined;
/* functional template */

const __vue_is_functional_template__$2 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$2 = normalizeComponent({
  render: __vue_render__$2,
  staticRenderFns: __vue_staticRenderFns__$2
}, __vue_inject_styles__$2, __vue_script__$2, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, false, undefined, undefined, undefined);

//
//
//
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
};

/* script */
const __vue_script__$3 = script$3;
/* template */

var __vue_render__$3 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('ul', {
    staticClass: "zep-list"
  }, _vm._l(_vm.dataSource, function (item) {
    return _c('li', {
      key: item.text,
      staticClass: "zep-list__item"
    }, [_vm._t("default", [_vm._v(_vm._s(item.text))])], 2);
  }), 0);
};

var __vue_staticRenderFns__$3 = [];
/* style */

const __vue_inject_styles__$3 = undefined;
/* scoped */

const __vue_scope_id__$3 = undefined;
/* module identifier */

const __vue_module_identifier__$3 = undefined;
/* functional template */

const __vue_is_functional_template__$3 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$3 = normalizeComponent({
  render: __vue_render__$3,
  staticRenderFns: __vue_staticRenderFns__$3
}, __vue_inject_styles__$3, __vue_script__$3, __vue_scope_id__$3, __vue_is_functional_template__$3, __vue_module_identifier__$3, false, undefined, undefined, undefined);

//
//
//
//
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
};

/* script */
const __vue_script__$4 = script$4;
/* template */

var __vue_render__$4 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('ul', {
    staticClass: "zep-list"
  }, _vm._l(_vm.dataSource, function (item) {
    return _c('li', {
      key: item.label,
      staticClass: "zep-list__item zep-list__item--attribute"
    }, [_c('span', {
      staticClass: "zep-list__label"
    }, [_vm._v(_vm._s(item.label))]), _vm._v(_vm._s(item.text) + "\n  ")]);
  }), 0);
};

var __vue_staticRenderFns__$4 = [];
/* style */

const __vue_inject_styles__$4 = undefined;
/* scoped */

const __vue_scope_id__$4 = undefined;
/* module identifier */

const __vue_module_identifier__$4 = undefined;
/* functional template */

const __vue_is_functional_template__$4 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$4 = normalizeComponent({
  render: __vue_render__$4,
  staticRenderFns: __vue_staticRenderFns__$4
}, __vue_inject_styles__$4, __vue_script__$4, __vue_scope_id__$4, __vue_is_functional_template__$4, __vue_module_identifier__$4, false, undefined, undefined, undefined);

//
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
};

/* script */
const __vue_script__$5 = script$5;
/* template */

var __vue_render__$5 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    class: [_vm.variant ? 'zep-notification  zep-notification--' + _vm.variant : ''],
    attrs: {
      "message": _vm.message,
      "autoHideDuration": _vm.autoHideDuration
    }
  }, [_vm._v("\n  " + _vm._s(_vm.message) + "\n")]);
};

var __vue_staticRenderFns__$5 = [];
/* style */

const __vue_inject_styles__$5 = undefined;
/* scoped */

const __vue_scope_id__$5 = undefined;
/* module identifier */

const __vue_module_identifier__$5 = undefined;
/* functional template */

const __vue_is_functional_template__$5 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$5 = normalizeComponent({
  render: __vue_render__$5,
  staticRenderFns: __vue_staticRenderFns__$5
}, __vue_inject_styles__$5, __vue_script__$5, __vue_scope_id__$5, __vue_is_functional_template__$5, __vue_module_identifier__$5, false, undefined, undefined, undefined);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function () {
    return {};
  },
  methods: {
    clear() {
      return this.counter = 0;
    },

    updateCounter(evt) {
      let counter = parseInt(evt.target.value, 10);

      if (counter >= this.min && counter <= this.max) {
        return this.counter = counter;
      } else {
        this.clear();
      }
    },

    increament(counter) {
      counter = parseInt(counter, 10);
      let step = this.step || 1;
      counter += step;

      if (counter <= this.max) {
        this.$emit("onplus-click", counter);
      }
    },

    decreament(counter) {
      counter = parseInt(counter, 10);
      let step = this.step || 1;
      counter -= step;

      if (counter >= this.min) {
        this.$emit("onminus-click", counter);
      }
    }

  }
};

/* script */
const __vue_script__$6 = script$6;
/* template */

var __vue_render__$6 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', [_c('div', {
    staticClass: "zep-numberinput",
    attrs: {
      "data-zep-type": "number-input",
      "data-zep-step": "1",
      "data-zep-max": "10",
      "data-zep-min": "0"
    }
  }, [_c('button', {
    staticClass: "zep-button zep-button-icon",
    attrs: {
      "id": "minus"
    },
    on: {
      "click": function ($event) {
        return _vm.decreament(_vm.value);
      }
    }
  }, [_c('svg', {
    staticClass: "zep-button__icon",
    attrs: {
      "version": "1.1",
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "32",
      "height": "32",
      "viewBox": "0 0 32 32"
    }
  }, [_c('title', [_vm._v(_vm._s(_vm.minustitle))]), _vm._v(" "), _c('path', {
    attrs: {
      "fill": "currentColor",
      "d": "M25.333 17.333h-18.667v-2.667h18.667z"
    }
  })])]), _vm._v(" "), _c('label', {
    staticClass: "zep-visually-hidden",
    attrs: {
      "for": "counter"
    }
  }, [_vm._v("Counter")]), _c('input', {
    staticClass: "zep-input zep-input--number",
    attrs: {
      "id": "counter",
      "type": "text",
      "max": _vm.max,
      "min": _vm.min,
      "step": _vm.step
    },
    domProps: {
      "value": _vm.value
    },
    on: {
      "input": function ($event) {
        return _vm.$emit('input', $event.target.value);
      },
      "change": _vm.updateCounter,
      "focus": _vm.clear
    }
  }), _vm._v(" "), _c('button', {
    staticClass: "zep-button zep-button-icon",
    attrs: {
      "id": "plus"
    },
    on: {
      "click": function ($event) {
        return _vm.increament(_vm.value);
      }
    }
  }, [_c('svg', {
    staticClass: "zep-button__icon",
    attrs: {
      "version": "1.1",
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "32",
      "height": "32",
      "viewBox": "0 0 32 32"
    }
  }, [_c('title', [_vm._v(_vm._s(_vm.plustitle))]), _vm._v(" "), _c('path', {
    attrs: {
      "fill": "currentColor",
      "d": "M25.333 17.333h-8v8h-2.667v-8h-8v-2.667h8v-8h2.667v8h8z"
    }
  })])])])]);
};

var __vue_staticRenderFns__$6 = [];
/* style */

const __vue_inject_styles__$6 = undefined;
/* scoped */

const __vue_scope_id__$6 = undefined;
/* module identifier */

const __vue_module_identifier__$6 = undefined;
/* functional template */

const __vue_is_functional_template__$6 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$6 = normalizeComponent({
  render: __vue_render__$6,
  staticRenderFns: __vue_staticRenderFns__$6
}, __vue_inject_styles__$6, __vue_script__$6, __vue_scope_id__$6, __vue_is_functional_template__$6, __vue_module_identifier__$6, false, undefined, undefined, undefined);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    updateInput: function (event) {
      this.$emit("input", event.target.value);
    }
  }
};

/* script */
const __vue_script__$7 = script$7;
/* template */

var __vue_render__$7 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('label', {
    staticClass: "zep-radio"
  }, [_vm._t("default", [_vm._v(_vm._s(_vm.label))]), _vm._v(" "), _c('input', {
    class: _vm.className,
    attrs: {
      "type": "radio",
      "name": _vm.name,
      "id": _vm.id,
      "required": _vm.required
    },
    domProps: {
      "checked": _vm.checked,
      "value": _vm.value
    },
    on: {
      "change": _vm.updateInput
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "zep-radio__indicator"
  })], 2);
};

var __vue_staticRenderFns__$7 = [];
/* style */

const __vue_inject_styles__$7 = undefined;
/* scoped */

const __vue_scope_id__$7 = undefined;
/* module identifier */

const __vue_module_identifier__$7 = undefined;
/* functional template */

const __vue_is_functional_template__$7 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$7 = normalizeComponent({
  render: __vue_render__$7,
  staticRenderFns: __vue_staticRenderFns__$7
}, __vue_inject_styles__$7, __vue_script__$7, __vue_scope_id__$7, __vue_is_functional_template__$7, __vue_module_identifier__$7, false, undefined, undefined, undefined);

/* eslint-disable import/prefer-default-export */

var components = /*#__PURE__*/Object.freeze({
  __proto__: null,
  ZelVueButton: __vue_component__,
  ZelVueCheckbox: __vue_component__$1,
  ZelVueInput: __vue_component__$2,
  ZelBulletList: __vue_component__$3,
  ZelAttributeList: __vue_component__$4,
  ZelNotifications: __vue_component__$5,
  ZelNumberInput: __vue_component__$6,
  ZelRadioButton: __vue_component__$7
});

// Import vue components

const install = function (Vue) {
  if (install.installed) return;
  install.installed = true;
  Object.entries(components).forEach(([componentName, component]) => {
    Vue.component(componentName, component);
  });
}; // Create module definition for Vue.use()


const plugin = {
  install
}; // To auto-install when vue is found

/* global window global */

let GlobalVue = null;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
} // Default export is library as a whole, registered via Vue.use()

export default plugin;
export { __vue_component__$4 as ZelAttributeList, __vue_component__$3 as ZelBulletList, __vue_component__$5 as ZelNotifications, __vue_component__$6 as ZelNumberInput, __vue_component__$7 as ZelRadioButton, __vue_component__ as ZelVueButton, __vue_component__$1 as ZelVueCheckbox, __vue_component__$2 as ZelVueInput };

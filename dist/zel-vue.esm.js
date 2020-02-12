import '@babel/core';

//
//
//
//
//
//
//
//
//
//
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
//
var script$2 = {
  name: "ZelVueInput",
  props: {
    placeholder: {
      type: String
    },
    disabled: Boolean,
    label: {
      type: String,
      default: "label text"
    },
    value: String,
    error: Boolean,
    errorMessage: {
      type: String,
      default: "Required"
    }
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
    staticClass: "zep-input-container",
    class: [_vm.error && 'zep-input-container--error']
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
  }, [_vm._v(" " + _vm._s(_vm.label))]), _vm._v(" "), _vm.error ? _c('label', {
    staticClass: "zep-input-container__feedback",
    attrs: {
      "for": "inputZeppelin"
    }
  }, [_vm._v(_vm._s(_vm.errorMessage) + "\n    ")]) : _vm._e()]);
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
  name: "ZelVueBulletlist",
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
  name: "ZelVueAttributeListItem",
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
  name: "ZelVueNotification",
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
  }, [_vm._t("default", [_vm._v(_vm._s(_vm.message))])], 2);
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
var script$6 = {
  name: "ZelVueNumberInput",
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
  methods: {
    clear() {
      this.$emit("input", 0);
    },

    onInput(evt) {
      let value = parseInt(evt.target.value, 10);
      /^[0-9]*$/.test(evt.target.value) ? this.$emit("input", value) : 0;
    },

    onUpdateCounter(evt) {
      let counter = parseInt(evt.target.value, 10);

      if (counter >= this.min && counter <= this.max) {
        return counter;
      } else {
        this.clear();
      }
    },

    onIncreament(counter) {
      counter = parseInt(counter, 10);
      let step = this.step || 1;
      counter += step;

      if (counter <= this.max) {
        this.$emit("onplus-click", counter);
      }
    },

    onDecreament(counter) {
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
        return _vm.onDecreament(_vm.value);
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
  }, [_vm._v("Counter")]), _vm._v(" "), _c('input', {
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
      "input": _vm.onInput,
      "change": _vm.onUpdateCounter,
      "focus": _vm.clear
    }
  }), _vm._v(" "), _c('button', {
    staticClass: "zep-button zep-button-icon",
    attrs: {
      "id": "plus"
    },
    on: {
      "click": function ($event) {
        return _vm.onIncreament(_vm.value);
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
  name: "ZelVueRadioButton",
  props: {
    name: {
      type: String,
      required: false
    },
    classNameProp: {
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
    class: _vm.classNameProp,
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

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$8 = {
  name: "ZelVueSearchInput",
  props: {
    id: {
      type: String,
      required: false,
      default: "searchbar"
    },
    className: {
      type: String,
      required: false
    },
    lable: {
      type: String,
      default: "Search",
      required: false
    },
    titlelabel: {
      type: String,
      required: false,
      default: "zepicons-search"
    },
    plachholder: {
      type: String,
      default: "Search",
      required: false
    },
    dataSource: {
      type: Array,
      required: true
    },
    value: String
  },
  data: function () {
    return {
      currentItem: 0,
      dataItems: [],
      isFound: false
    };
  },
  methods: {
    findItem(event) {
      let searchValue = event.target.value;

      if (searchValue.length <= 0) {
        this.isFound = false;
        this.$emit("input");
        return [];
      }

      this.isFound = true;
      this.dataItems = this.dataSource.filter(item => {
        return item.toLowerCase().startsWith(searchValue.toLowerCase());
      });
      this.$emit("input", event.target.value);
    },

    setSelectedValue(value) {
      this.isFound = false;
      this.$emit("onlist-click", value);
    },

    setSelectedValueOnEnter() {
      this.isFound = false;
      let value = document.querySelector("li.active-item").innerText;
      this.$emit("onenter_keypress", value);
    },

    nextItem() {
      if (event.keyCode == 38 && this.currentItem > 0) {
        this.currentItem--;
      } else if (event.keyCode == 40 && this.currentItem < this.dataItems.length) {
        this.currentItem++;
      } else if (this.currentItem === this.dataItems.length) {
        this.currentItem = 0;
      }
    },

    classObject: function (index) {
      return {
        "active-item": this.currentItem === index
      };
    }
  }
};

const isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
    return (id, style) => addStyle(id, style);
}
let HEAD;
const styles = {};
function addStyle(id, css) {
    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
    if (!style.ids.has(id)) {
        style.ids.add(id);
        let code = css.source;
        if (css.map) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            // http://stackoverflow.com/a/26603875
            code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                    ' */';
        }
        if (!style.element) {
            style.element = document.createElement('style');
            style.element.type = 'text/css';
            if (css.media)
                style.element.setAttribute('media', css.media);
            if (HEAD === undefined) {
                HEAD = document.head || document.getElementsByTagName('head')[0];
            }
            HEAD.appendChild(style.element);
        }
        if ('styleSheet' in style.element) {
            style.styles.push(code);
            style.element.styleSheet.cssText = style.styles
                .filter(Boolean)
                .join('\n');
        }
        else {
            const index = style.ids.size - 1;
            const textNode = document.createTextNode(code);
            const nodes = style.element.childNodes;
            if (nodes[index])
                style.element.removeChild(nodes[index]);
            if (nodes.length)
                style.element.insertBefore(textNode, nodes[index]);
            else
                style.element.appendChild(textNode);
        }
    }
}

/* script */
const __vue_script__$8 = script$8;
/* template */

var __vue_render__$8 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "zep-search zep-search-container",
    staticStyle: {
      "width": "100%"
    }
  }, [_c('input', {
    staticClass: "zep-search__input",
    attrs: {
      "type": "text",
      "palceholder": _vm.plachholder,
      "dataSource": _vm.dataSource,
      "id": _vm.id
    },
    domProps: {
      "value": _vm.value
    },
    on: {
      "keypress": function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) {
          return null;
        }

        return _vm.setSelectedValueOnEnter($event);
      },
      "input": _vm.findItem,
      "keyup": _vm.nextItem
    }
  }), _vm._v(" "), _c('svg', {
    staticClass: "zep-search__icon",
    attrs: {
      "version": "1.1",
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "24",
      "height": "24",
      "viewBox": "0 0 24 24"
    }
  }, [_c('title', [_vm._t("default", [_vm._v(_vm._s(_vm.titlelabel))])], 2), _vm._v(" "), _c('path', {
    attrs: {
      "fill": "currentColor",
      "d": "M12.667 4c4.786 0 8.667 3.88 8.667 8.667 0 2.147-0.787 4.12-2.080 5.64l0.36 0.36h1.053l6.667 6.667-2 2-6.667-6.667v-1.053l-0.36-0.36c-1.52 1.293-3.493 2.080-5.64 2.080-4.786 0-8.667-3.88-8.667-8.667s3.88-8.667 8.667-8.667v0zM12.667 6.667c-3.333 0-6 2.667-6 6s2.667 6 6 6c3.333 0 6-2.667 6-6s-2.667-6-6-6z"
    }
  })]), _vm._v(" "), _c('ul', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.isFound,
      expression: "isFound"
    }],
    staticClass: "search_items"
  }, _vm._l(_vm.dataItems, function (item, index) {
    return _c('li', {
      key: index,
      class: _vm.classObject(index),
      on: {
        "click": function ($event) {
          return _vm.setSelectedValue(item);
        }
      }
    }, [_c('span', [_vm._v(_vm._s(item))])]);
  }), 0), _vm._v(" "), _c('label', {
    attrs: {
      "for": "searchbar"
    }
  }, [_vm._t("default", [_vm._v(_vm._s(_vm.lable))])], 2)]);
};

var __vue_staticRenderFns__$8 = [];
/* style */

const __vue_inject_styles__$8 = function (inject) {
  if (!inject) return;
  inject("data-v-61864c3e_0", {
    source: ".active-item[data-v-61864c3e]{background-color:#ddd}.search_items[data-v-61864c3e]{border:1px solid rgba(0,0,0,.72)}.search_items li[data-v-61864c3e]{padding:10px;font-size:14px;cursor:pointer}.zep-search-container[data-v-61864c3e]{position:relative}.zep-search-container ul[data-v-61864c3e]{position:absolute;z-index:1;width:100%;top:100%}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$8 = "data-v-61864c3e";
/* module identifier */

const __vue_module_identifier__$8 = undefined;
/* functional template */

const __vue_is_functional_template__$8 = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$8 = normalizeComponent({
  render: __vue_render__$8,
  staticRenderFns: __vue_staticRenderFns__$8
}, __vue_inject_styles__$8, __vue_script__$8, __vue_scope_id__$8, __vue_is_functional_template__$8, __vue_module_identifier__$8, false, createInjector, undefined, undefined);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$9 = {
  name: "ZelVueSelect",
  props: {
    label: {
      type: String,
      required: true,
      default: "label"
    },
    value: {
      type: String,
      required: true
    },
    dataSource: {
      type: Array,
      required: true,
      default: []
    },
    placeholder: {
      type: String,
      default: "Select One",
      required: true
    }
  },
  data: function () {
    return {
      showItems: false
    };
  },
  methods: {
    setSelectedValue(value) {
      this.$emit("selectlist-click", value);
      this.showItems = false;
    },

    getItem() {
      if (this.showItems) {
        this.showItems = false;
      } else {
        this.showItems = true;
      }
    }

  }
};

/* script */
const __vue_script__$9 = script$9;
/* template */

var __vue_render__$9 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "zep-select",
    staticStyle: {
      "width": "100%"
    }
  }, [_c('label', {
    staticClass: "zep-select__label",
    attrs: {
      "id": "exp_elem"
    }
  }, [_vm._t("default", [_vm._v(_vm._s(_vm.label))])], 2), _vm._v(" "), _c('div', {
    attrs: {
      "id": "exp_wrapper"
    }
  }, [_c('button', {
    staticClass: "zep-select__button",
    attrs: {
      "aria-haspopup": "listbox",
      "aria-labelledby": "exp_elem exp_button",
      "id": "exp_button",
      "value": _vm.value,
      "dataSource": _vm.dataSource
    },
    on: {
      "click": _vm.getItem
    }
  }, [_vm.value ? _vm._t("default", [_vm._v(_vm._s(_vm.value))]) : _vm._t("default", [_vm._v(_vm._s(_vm.placeholder))]), _vm._v(" "), _c('svg', {
    staticClass: "zep-select__icon",
    attrs: {
      "version": "1.1",
      "xmlns": "http://www.w3.org/2000/svg",
      "viewBox": "0 0 24 24"
    }
  }, [_c('title', [_vm._v("zepicons-navigation-dropdown")]), _vm._v(" "), _c('path', {
    attrs: {
      "fill": "currentColor",
      "d": "M9.333 18.667h13.333l-6.667 6.667-6.667-6.667zM22.667 13.333h-13.333l6.667-6.667 6.667 6.667z"
    }
  })])], 2), _vm._v(" "), _c('div', {
    staticClass: "item_container"
  }, [_c('ul', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.showItems,
      expression: "showItems"
    }],
    staticClass: "zep-select__list",
    attrs: {
      "id": "exp_elem_list",
      "tabindex": "-1",
      "role": "listbox",
      "aria-labelledby": "exp_elem"
    }
  }, _vm._l(_vm.dataSource, function (item, index) {
    return _c('li', {
      key: index,
      staticClass: "zep-select__listitem",
      attrs: {
        "id": index,
        "role": "option",
        "tabindex": index
      },
      on: {
        "click": function ($event) {
          return _vm.setSelectedValue(item);
        }
      }
    }, [_c('span', [_vm._v(_vm._s(item))])]);
  }), 0)])])]);
};

var __vue_staticRenderFns__$9 = [];
/* style */

const __vue_inject_styles__$9 = function (inject) {
  if (!inject) return;
  inject("data-v-3f21dfc1_0", {
    source: ".item_container[data-v-3f21dfc1]{position:relative;width:inherit}.item_container .zep-select__list[data-v-3f21dfc1]{cursor:pointer;max-height:300px;overflow:scroll}.zep-select__listitem[data-v-3f21dfc1]:hover{background-color:#eceeef}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$9 = "data-v-3f21dfc1";
/* module identifier */

const __vue_module_identifier__$9 = undefined;
/* functional template */

const __vue_is_functional_template__$9 = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$9 = normalizeComponent({
  render: __vue_render__$9,
  staticRenderFns: __vue_staticRenderFns__$9
}, __vue_inject_styles__$9, __vue_script__$9, __vue_scope_id__$9, __vue_is_functional_template__$9, __vue_module_identifier__$9, false, createInjector, undefined, undefined);

/* eslint-disable import/prefer-default-export */
 // export { default as ZelVueTable } from "./Table/zeltable.vue";

var components = /*#__PURE__*/Object.freeze({
  __proto__: null,
  ZelVueButton: __vue_component__,
  ZelVueCheckbox: __vue_component__$1,
  ZelVueInput: __vue_component__$2,
  ZelVueBulletList: __vue_component__$3,
  ZelVueAttributeList: __vue_component__$4,
  ZelVueNotifications: __vue_component__$5,
  ZelVueNumberInput: __vue_component__$6,
  ZelVueRadioButton: __vue_component__$7,
  ZelVueSearchInput: __vue_component__$8,
  ZelVueSelect: __vue_component__$9
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
export { __vue_component__$4 as ZelVueAttributeList, __vue_component__$3 as ZelVueBulletList, __vue_component__ as ZelVueButton, __vue_component__$1 as ZelVueCheckbox, __vue_component__$2 as ZelVueInput, __vue_component__$5 as ZelVueNotifications, __vue_component__$6 as ZelVueNumberInput, __vue_component__$7 as ZelVueRadioButton, __vue_component__$8 as ZelVueSearchInput, __vue_component__$9 as ZelVueSelect };

import { useSSRContext, defineComponent, computed, inject, provide, mergeProps } from 'vue';
import { a as appConfig, b as useAppConfig, d as defuTwMerge } from '../server.mjs';
import { omit } from 'lodash-es';
import { twMerge } from 'tailwind-merge';
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import 'fs';
import 'path';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  props: {
    name: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: null,
      validator(value) {
        return Object.keys(appConfig.ui.formGroup.size).includes(value);
      }
    },
    label: {
      type: String,
      default: null
    },
    description: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      default: false
    },
    help: {
      type: String,
      default: null
    },
    error: {
      type: [String, Boolean],
      default: null
    },
    hint: {
      type: String,
      default: null
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props, { attrs }) {
    const appConfig2 = useAppConfig();
    const ui = computed(() => defuTwMerge({}, props.ui, appConfig2.ui.formGroup));
    const wrapperClass = computed(() => twMerge(ui.value.wrapper, attrs.class));
    const formErrors = inject("form-errors", null);
    const error = computed(() => {
      var _a, _b;
      return props.error && typeof props.error === "string" || typeof props.error === "boolean" ? props.error : (_b = (_a = formErrors == null ? void 0 : formErrors.value) == null ? void 0 : _a.find((error2) => error2.path === props.name)) == null ? void 0 : _b.message;
    });
    const size = computed(() => {
      var _a;
      return ui.value.size[(_a = props.size) != null ? _a : appConfig2.ui.input.default.size];
    });
    provide("form-group", {
      error,
      name: computed(() => props.name),
      size: computed(() => props.size)
    });
    return {
      attrs: omit(attrs, ["class"]),
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      wrapperClass,
      // eslint-disable-next-line vue/no-dupe-keys
      size,
      // eslint-disable-next-line vue/no-dupe-keys
      error
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: _ctx.wrapperClass }, _ctx.attrs, _attrs))}><label>`);
  if (_ctx.label) {
    _push(`<div class="${ssrRenderClass([_ctx.ui.label.wrapper, _ctx.size])}"><p class="${ssrRenderClass([_ctx.ui.label.base, _ctx.required ? _ctx.ui.label.required : ""])}">${ssrInterpolate(_ctx.label)}</p>`);
    if (_ctx.hint) {
      _push(`<span class="${ssrRenderClass([_ctx.ui.hint])}">${ssrInterpolate(_ctx.hint)}</span>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.description) {
    _push(`<p class="${ssrRenderClass([_ctx.ui.description, _ctx.size])}">${ssrInterpolate(_ctx.description)}</p>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="${ssrRenderClass([_ctx.label ? _ctx.ui.container : ""])}">`);
  ssrRenderSlot(_ctx.$slots, "default", { error: _ctx.error }, null, _push, _parent);
  if (_ctx.error && typeof _ctx.error !== "boolean") {
    _push(`<p class="${ssrRenderClass([_ctx.ui.error, _ctx.size])}">${ssrInterpolate(_ctx.error)}</p>`);
  } else if (_ctx.help) {
    _push(`<p class="${ssrRenderClass([_ctx.ui.help, _ctx.size])}">${ssrInterpolate(_ctx.help)}</p>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></label></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/forms/FormGroup.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const FormGroup = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { FormGroup as default };
//# sourceMappingURL=FormGroup-9b4adcc1.mjs.map

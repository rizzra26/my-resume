import __nuxt_component_0 from './Icon-855b8e20.mjs';
import __nuxt_component_1 from './Avatar-07284992.mjs';
import __nuxt_component_2 from './Button-eb524539.mjs';
import { useSSRContext, defineComponent, computed, mergeProps } from 'vue';
import { a as appConfig, b as useAppConfig, d as defuTwMerge } from '../server.mjs';
import { twMerge, twJoin } from 'tailwind-merge';
import { omit } from 'lodash-es';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import './Link-d85e4f71.mjs';
import './nuxt-link-dcdeaa20.mjs';
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
  components: {
    UIcon: __nuxt_component_0,
    UAvatar: __nuxt_component_1,
    UButton: __nuxt_component_2
  },
  inheritAttrs: false,
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: () => appConfig.ui.alert.default.icon
    },
    avatar: {
      type: Object,
      default: null
    },
    closeButton: {
      type: Object,
      default: () => appConfig.ui.alert.default.closeButton
    },
    actions: {
      type: Array,
      default: () => []
    },
    color: {
      type: String,
      default: () => appConfig.ui.alert.default.color,
      validator(value) {
        return [...appConfig.ui.colors, ...Object.keys(appConfig.ui.alert.color)].includes(value);
      }
    },
    variant: {
      type: String,
      default: () => appConfig.ui.alert.default.variant,
      validator(value) {
        return [
          ...Object.keys(appConfig.ui.alert.variant),
          ...Object.values(appConfig.ui.alert.color).flatMap((value2) => Object.keys(value2))
        ].includes(value);
      }
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["close"],
  setup(props, { attrs }) {
    const appConfig2 = useAppConfig();
    const ui = computed(() => defuTwMerge({}, props.ui, appConfig2.ui.alert));
    const alertClass = computed(() => {
      var _a, _b;
      const variant = ((_b = (_a = ui.value.color) == null ? void 0 : _a[props.color]) == null ? void 0 : _b[props.variant]) || ui.value.variant[props.variant];
      return twMerge(twJoin(
        ui.value.wrapper,
        ui.value.rounded,
        ui.value.shadow,
        ui.value.padding,
        variant == null ? void 0 : variant.replaceAll("{color}", props.color)
      ), attrs.class);
    });
    return {
      attrs: omit(attrs, ["class"]),
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      alertClass
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UIcon = __nuxt_component_0;
  const _component_UAvatar = __nuxt_component_1;
  const _component_UButton = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: _ctx.alertClass }, _ctx.attrs, _attrs))}><div class="${ssrRenderClass([{ "items-start": _ctx.description || _ctx.$slots.description, "items-center": !_ctx.description && !_ctx.$slots.description }, "flex gap-3"])}">`);
  if (_ctx.icon) {
    _push(ssrRenderComponent(_component_UIcon, {
      name: _ctx.icon,
      class: _ctx.ui.icon.base
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if (_ctx.avatar) {
    _push(ssrRenderComponent(_component_UAvatar, mergeProps({ size: _ctx.ui.avatar.size, ..._ctx.avatar }, {
      class: _ctx.ui.avatar.base
    }), null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="w-0 flex-1"><p class="${ssrRenderClass(_ctx.ui.title)}">`);
  ssrRenderSlot(_ctx.$slots, "title", { title: _ctx.title }, () => {
    _push(`${ssrInterpolate(_ctx.title)}`);
  }, _push, _parent);
  _push(`</p>`);
  if (_ctx.description || _ctx.$slots.description) {
    _push(`<p class="${ssrRenderClass(_ctx.ui.description)}">`);
    ssrRenderSlot(_ctx.$slots, "description", { description: _ctx.description }, () => {
      _push(`${ssrInterpolate(_ctx.description)}`);
    }, _push, _parent);
    _push(`</p>`);
  } else {
    _push(`<!---->`);
  }
  if ((_ctx.description || _ctx.$slots.description) && _ctx.actions.length) {
    _push(`<div class="mt-3 flex items-center gap-2"><!--[-->`);
    ssrRenderList(_ctx.actions, (action, index) => {
      _push(ssrRenderComponent(_component_UButton, mergeProps({ key: index }, { ..._ctx.ui.default.actionButton, ...action }, {
        onClick: action.click
      }), null, _parent));
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="flex-shrink-0 flex items-center gap-3">`);
  if (!_ctx.description && !_ctx.$slots.description && _ctx.actions.length) {
    _push(`<div class="flex items-center gap-2"><!--[-->`);
    ssrRenderList(_ctx.actions, (action, index) => {
      _push(ssrRenderComponent(_component_UButton, mergeProps({ key: index }, { ..._ctx.ui.default.actionButton, ...action }, {
        onClick: action.click
      }), null, _parent));
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.closeButton) {
    _push(ssrRenderComponent(_component_UButton, mergeProps({ ..._ctx.ui.default.closeButton, ..._ctx.closeButton }, {
      onClick: ($event) => _ctx.$emit("close")
    }), null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/elements/Alert.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Alert = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { Alert as default };
//# sourceMappingURL=Alert-a27aa83a.mjs.map

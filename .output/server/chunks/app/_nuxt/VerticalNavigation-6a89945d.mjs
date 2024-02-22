import __nuxt_component_0$1 from './Link-d85e4f71.mjs';
import __nuxt_component_1 from './Avatar-07284992.mjs';
import __nuxt_component_0 from './Icon-855b8e20.mjs';
import { useSSRContext, defineComponent, computed, mergeProps, withCtx, renderSlot, openBlock, createBlock, createCommentVNode, toDisplayString } from 'vue';
import { b as useAppConfig, d as defuTwMerge } from '../server.mjs';
import { omit } from 'lodash-es';
import { twMerge } from 'tailwind-merge';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderSlot, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
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
    ULink: __nuxt_component_0$1
  },
  inheritAttrs: false,
  props: {
    links: {
      type: Array,
      default: () => []
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props, { attrs }) {
    const appConfig2 = useAppConfig();
    const ui = computed(() => defuTwMerge({}, props.ui, appConfig2.ui.verticalNavigation));
    const wrapperClass = computed(() => twMerge(ui.value.wrapper, attrs.class));
    return {
      attrs: omit(attrs, ["class"]),
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      wrapperClass,
      omit
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ULink = __nuxt_component_0$1;
  const _component_UAvatar = __nuxt_component_1;
  const _component_UIcon = __nuxt_component_0;
  _push(`<nav${ssrRenderAttrs(mergeProps({ class: _ctx.wrapperClass }, _ctx.attrs, _attrs))}><!--[-->`);
  ssrRenderList(_ctx.links, (link, index) => {
    _push(ssrRenderComponent(_component_ULink, mergeProps({ key: index }, _ctx.omit(link, ["label", "icon", "iconClass", "avatar", "badge", "click"]), {
      class: [_ctx.ui.base, _ctx.ui.padding, _ctx.ui.width, _ctx.ui.ring, _ctx.ui.rounded, _ctx.ui.font, _ctx.ui.size],
      "active-class": _ctx.ui.active,
      "inactive-class": _ctx.ui.inactive,
      onClick: link.click,
      onKeyup: ($event) => $event.target.blur()
    }), {
      default: withCtx(({ isActive }, _push2, _parent2, _scopeId) => {
        if (_push2) {
          ssrRenderSlot(_ctx.$slots, "avatar", {
            link,
            isActive
          }, () => {
            if (link.avatar) {
              _push2(ssrRenderComponent(_component_UAvatar, mergeProps({ size: _ctx.ui.avatar.size, ...link.avatar }, {
                class: [_ctx.ui.avatar.base]
              }), null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          }, _push2, _parent2, _scopeId);
          ssrRenderSlot(_ctx.$slots, "icon", {
            link,
            isActive
          }, () => {
            if (link.icon) {
              _push2(ssrRenderComponent(_component_UIcon, {
                name: link.icon,
                class: [_ctx.ui.icon.base, isActive ? _ctx.ui.icon.active : _ctx.ui.icon.inactive, link.iconClass]
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          }, _push2, _parent2, _scopeId);
          ssrRenderSlot(_ctx.$slots, "default", {
            link,
            isActive
          }, () => {
            if (link.label) {
              _push2(`<span class="${ssrRenderClass(_ctx.ui.label)}"${_scopeId}>${ssrInterpolate(link.label)}</span>`);
            } else {
              _push2(`<!---->`);
            }
          }, _push2, _parent2, _scopeId);
          ssrRenderSlot(_ctx.$slots, "badge", {
            link,
            isActive
          }, () => {
            if (link.badge) {
              _push2(`<span class="${ssrRenderClass([_ctx.ui.badge.base, isActive ? _ctx.ui.badge.active : _ctx.ui.badge.inactive])}"${_scopeId}>${ssrInterpolate(link.badge)}</span>`);
            } else {
              _push2(`<!---->`);
            }
          }, _push2, _parent2, _scopeId);
        } else {
          return [
            renderSlot(_ctx.$slots, "avatar", {
              link,
              isActive
            }, () => [
              link.avatar ? (openBlock(), createBlock(_component_UAvatar, mergeProps({ key: 0 }, { size: _ctx.ui.avatar.size, ...link.avatar }, {
                class: [_ctx.ui.avatar.base]
              }), null, 16, ["class"])) : createCommentVNode("", true)
            ]),
            renderSlot(_ctx.$slots, "icon", {
              link,
              isActive
            }, () => [
              link.icon ? (openBlock(), createBlock(_component_UIcon, {
                key: 0,
                name: link.icon,
                class: [_ctx.ui.icon.base, isActive ? _ctx.ui.icon.active : _ctx.ui.icon.inactive, link.iconClass]
              }, null, 8, ["name", "class"])) : createCommentVNode("", true)
            ]),
            renderSlot(_ctx.$slots, "default", {
              link,
              isActive
            }, () => [
              link.label ? (openBlock(), createBlock("span", {
                key: 0,
                class: _ctx.ui.label
              }, toDisplayString(link.label), 3)) : createCommentVNode("", true)
            ]),
            renderSlot(_ctx.$slots, "badge", {
              link,
              isActive
            }, () => [
              link.badge ? (openBlock(), createBlock("span", {
                key: 0,
                class: [_ctx.ui.badge.base, isActive ? _ctx.ui.badge.active : _ctx.ui.badge.inactive]
              }, toDisplayString(link.badge), 3)) : createCommentVNode("", true)
            ])
          ];
        }
      }),
      _: 2
    }, _parent));
  });
  _push(`<!--]--></nav>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/navigation/VerticalNavigation.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const VerticalNavigation = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { VerticalNavigation as default };
//# sourceMappingURL=VerticalNavigation-6a89945d.mjs.map

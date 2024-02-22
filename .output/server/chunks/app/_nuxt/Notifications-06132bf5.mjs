import __nuxt_component_0 from './Notification-8df0f19d.mjs';
import { useSSRContext, defineComponent, computed, mergeProps, createSlots, renderList, withCtx, renderSlot } from 'vue';
import { b as useAppConfig, d as defuTwMerge, f as useState } from '../server.mjs';
import { omit } from 'lodash-es';
import { twMerge, twJoin } from 'tailwind-merge';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderList, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import './Icon-855b8e20.mjs';
import './Avatar-07284992.mjs';
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
import './Button-eb524539.mjs';
import './Link-d85e4f71.mjs';
import './nuxt-link-dcdeaa20.mjs';

function useToast() {
  const notifications = useState("notifications", () => []);
  function add(notification) {
    const body = {
      id: (/* @__PURE__ */ new Date()).getTime().toString(),
      ...notification
    };
    const index = notifications.value.findIndex((n) => n.id === body.id);
    if (index === -1) {
      notifications.value.push(body);
    }
    return body;
  }
  function remove(id) {
    notifications.value = notifications.value.filter((n) => n.id !== id);
  }
  return {
    add,
    remove
  };
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  components: {
    UNotification: __nuxt_component_0
  },
  inheritAttrs: false,
  props: {
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props, { attrs }) {
    const appConfig2 = useAppConfig();
    const ui = computed(() => defuTwMerge({}, props.ui, appConfig2.ui.notifications));
    const toast = useToast();
    const notifications = useState("notifications", () => []);
    const wrapperClass = computed(() => {
      return twMerge(twJoin(
        ui.value.wrapper,
        ui.value.position,
        ui.value.width
      ), attrs.class);
    });
    return {
      attrs: omit(attrs, ["class"]),
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      toast,
      notifications,
      wrapperClass
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UNotification = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: _ctx.wrapperClass }, _ctx.attrs, _attrs))}>`);
  if (_ctx.notifications.length) {
    _push(`<div class="${ssrRenderClass(_ctx.ui.container)}"><!--[-->`);
    ssrRenderList(_ctx.notifications, (notification) => {
      _push(`<div>`);
      _push(ssrRenderComponent(_component_UNotification, mergeProps(notification, {
        class: notification.click && "cursor-pointer",
        onClick: ($event) => notification.click && notification.click(notification),
        onClose: ($event) => _ctx.toast.remove(notification.id)
      }), createSlots({ _: 2 }, [
        renderList(_ctx.$slots, (_, name) => {
          return {
            name,
            fn: withCtx((slotData, _push2, _parent2, _scopeId) => {
              if (_push2) {
                ssrRenderSlot(_ctx.$slots, name, slotData, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  renderSlot(_ctx.$slots, _ctx.name, slotData)
                ];
              }
            })
          };
        })
      ]), _parent));
      _push(`</div>`);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/overlays/Notifications.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Notifications = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { Notifications as default };
//# sourceMappingURL=Notifications-06132bf5.mjs.map

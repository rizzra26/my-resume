import { useSSRContext, defineComponent, computed, toRef, mergeProps } from 'vue';
import { x as defu } from '../../nitro/node-server.mjs';
import { b as useAppConfig, d as defuTwMerge } from '../server.mjs';
import { onClickOutside } from '@vueuse/core';
import { omit } from 'lodash-es';
import { twMerge, twJoin } from 'tailwind-merge';
import { u as usePopper } from './usePopper-4c6d2f66.mjs';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
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
    modelValue: {
      type: Boolean,
      default: false
    },
    virtualElement: {
      type: Object,
      required: true
    },
    popper: {
      type: Object,
      default: () => ({})
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue", "close"],
  setup(props, { attrs, emit }) {
    const appConfig2 = useAppConfig();
    const ui = computed(() => defuTwMerge({}, props.ui, appConfig2.ui.contextMenu));
    const popper = computed(() => defu({}, props.popper, ui.value.popper));
    const isOpen = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit("update:modelValue", value);
      }
    });
    toRef(props, "virtualElement");
    const [, container] = usePopper(popper.value);
    const wrapperClass = computed(() => {
      return twMerge(twJoin(
        ui.value.container,
        ui.value.width
      ), attrs.class);
    });
    onClickOutside(container, () => {
      isOpen.value = false;
    });
    return {
      attrs: omit(attrs, ["class"]),
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      isOpen,
      wrapperClass,
      container
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if (_ctx.isOpen) {
    _push(`<div${ssrRenderAttrs(mergeProps({
      ref: "container",
      class: _ctx.wrapperClass
    }, _ctx.attrs, _attrs))}><div class="${ssrRenderClass([_ctx.ui.base, _ctx.ui.ring, _ctx.ui.rounded, _ctx.ui.shadow, _ctx.ui.background])}">`);
    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
    _push(`</div></div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/overlays/ContextMenu.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ContextMenu = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { ContextMenu as default };
//# sourceMappingURL=ContextMenu-5d0200df.mjs.map

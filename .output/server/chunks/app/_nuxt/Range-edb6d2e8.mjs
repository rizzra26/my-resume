import { useSSRContext, defineComponent, computed, mergeProps } from 'vue';
import { a as appConfig, b as useAppConfig, d as defuTwMerge } from '../server.mjs';
import { omit } from 'lodash-es';
import { twMerge, twJoin } from 'tailwind-merge';
import { u as useFormGroup } from './useFormGroup-fb26c2fe.mjs';
import { ssrRenderAttrs, ssrGetDynamicModelProps, ssrRenderClass, ssrRenderStyle } from 'vue/server-renderer';
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
import '@vueuse/core';

const _sfc_main = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  props: {
    modelValue: {
      type: Number,
      default: 0
    },
    name: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    step: {
      type: Number,
      default: 1
    },
    size: {
      type: String,
      default: () => appConfig.ui.range.default.size,
      validator(value) {
        return Object.keys(appConfig.ui.range.size).includes(value);
      }
    },
    color: {
      type: String,
      default: () => appConfig.ui.range.default.color,
      validator(value) {
        return appConfig.ui.colors.includes(value);
      }
    },
    inputClass: {
      type: String,
      default: null
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue", "change"],
  setup(props, { emit, attrs }) {
    const appConfig2 = useAppConfig();
    const ui = computed(() => defuTwMerge({}, props.ui, appConfig2.ui.range));
    const { emitFormChange, formGroup } = useFormGroup();
    const color = computed(() => {
      var _a;
      return ((_a = formGroup == null ? void 0 : formGroup.error) == null ? void 0 : _a.value) ? "red" : props.color;
    });
    const size = computed(() => {
      var _a2;
      var _a;
      return (_a2 = (_a = formGroup == null ? void 0 : formGroup.size) == null ? void 0 : _a.value) != null ? _a2 : props.size;
    });
    const value = computed({
      get() {
        return props.modelValue;
      },
      set(value2) {
        emit("update:modelValue", value2);
      }
    });
    const onChange = (event) => {
      emit("change", event);
      emitFormChange();
    };
    const wrapperClass = computed(() => {
      return twMerge(twJoin(
        ui.value.wrapper,
        ui.value.size[size.value]
      ), attrs.class);
    });
    const inputClass = computed(() => {
      return twMerge(twJoin(
        ui.value.base,
        ui.value.background,
        ui.value.rounded,
        ui.value.ring.replaceAll("{color}", color.value),
        ui.value.size[size.value]
      ), props.inputClass);
    });
    const thumbClass = computed(() => {
      return twJoin(
        ui.value.thumb.base,
        // Intermediate class to allow thumb ring or background color (set to `current`) as it's impossible to safelist with arbitrary values
        ui.value.thumb.color.replaceAll("{color}", color.value),
        ui.value.thumb.ring,
        ui.value.thumb.background,
        ui.value.thumb.size[size.value]
      );
    });
    const trackClass = computed(() => {
      return twJoin(
        ui.value.track.base,
        ui.value.track.background,
        ui.value.track.rounded,
        ui.value.track.size[size.value]
      );
    });
    const progressClass = computed(() => {
      return twJoin(
        ui.value.progress.base,
        ui.value.progress.rounded,
        ui.value.progress.background.replaceAll("{color}", color.value),
        ui.value.progress.size[size.value]
      );
    });
    const progressStyle = computed(() => {
      const { modelValue, min, max } = props;
      const clampedValue = Math.max(min, Math.min(modelValue, max));
      const relativeValue = (clampedValue - min) / (max - min);
      return {
        width: `${relativeValue * 100}%`
      };
    });
    return {
      attrs: omit(attrs, ["class"]),
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      value,
      wrapperClass,
      // eslint-disable-next-line vue/no-dupe-keys
      inputClass,
      thumbClass,
      trackClass,
      progressClass,
      progressStyle,
      onChange
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  let _temp0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: _ctx.wrapperClass }, _attrs))}><input${ssrRenderAttrs((_temp0 = mergeProps({
    ref: "input",
    value: _ctx.value,
    name: _ctx.name,
    min: _ctx.min,
    max: _ctx.max,
    disabled: _ctx.disabled,
    step: _ctx.step,
    type: "range",
    class: [_ctx.inputClass, _ctx.thumbClass, _ctx.trackClass]
  }, _ctx.attrs), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, _ctx.value))))}><span class="${ssrRenderClass(_ctx.progressClass)}" style="${ssrRenderStyle(_ctx.progressStyle)}"></span></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/forms/Range.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Range = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { Range as default };
//# sourceMappingURL=Range-edb6d2e8.mjs.map

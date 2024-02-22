import { useSSRContext, defineComponent, ref, computed, watch, nextTick, mergeProps } from 'vue';
import { a as appConfig, b as useAppConfig, d as defuTwMerge } from '../server.mjs';
import { omit } from 'lodash-es';
import { twMerge, twJoin } from 'tailwind-merge';
import { u as useFormGroup } from './useFormGroup-fb26c2fe.mjs';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
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
      type: [String, Number],
      default: ""
    },
    name: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    rows: {
      type: Number,
      default: 3
    },
    autoresize: {
      type: Boolean,
      default: false
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    resize: {
      type: Boolean,
      default: false
    },
    padded: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: () => appConfig.ui.textarea.default.size,
      validator(value) {
        return Object.keys(appConfig.ui.textarea.size).includes(value);
      }
    },
    color: {
      type: String,
      default: () => appConfig.ui.textarea.default.color,
      validator(value) {
        return [...appConfig.ui.colors, ...Object.keys(appConfig.ui.textarea.color)].includes(value);
      }
    },
    variant: {
      type: String,
      default: () => appConfig.ui.textarea.default.variant,
      validator(value) {
        return [
          ...Object.keys(appConfig.ui.textarea.variant),
          ...Object.values(appConfig.ui.textarea.color).flatMap((value2) => Object.keys(value2))
        ].includes(value);
      }
    },
    textareaClass: {
      type: String,
      default: null
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue", "blur"],
  setup(props, { emit, attrs }) {
    const textarea = ref(null);
    const appConfig2 = useAppConfig();
    const ui = computed(() => defuTwMerge({}, props.ui, appConfig2.ui.textarea));
    const { emitFormBlur, emitFormInput, formGroup } = useFormGroup();
    const color = computed(() => {
      var _a;
      return ((_a = formGroup == null ? void 0 : formGroup.error) == null ? void 0 : _a.value) ? "red" : props.color;
    });
    const size = computed(() => {
      var _a2;
      var _a;
      return (_a2 = (_a = formGroup == null ? void 0 : formGroup.size) == null ? void 0 : _a.value) != null ? _a2 : props.size;
    });
    const autoResize = () => {
      if (props.autoresize) {
        if (!textarea.value) {
          return;
        }
        textarea.value.rows = props.rows;
        const styles = window.getComputedStyle(textarea.value);
        const paddingTop = parseInt(styles.paddingTop);
        const paddingBottom = parseInt(styles.paddingBottom);
        const padding = paddingTop + paddingBottom;
        const lineHeight = parseInt(styles.lineHeight);
        const { scrollHeight } = textarea.value;
        const newRows = (scrollHeight - padding) / lineHeight;
        if (newRows > props.rows) {
          textarea.value.rows = newRows;
        }
      }
    };
    const onInput = (event) => {
      autoResize();
      emit("update:modelValue", event.target.value);
      emitFormInput();
    };
    const onBlur = (event) => {
      emit("blur", event);
      emitFormBlur();
    };
    watch(() => props.modelValue, () => {
      nextTick(autoResize);
    });
    const wrapperClass = computed(() => twMerge(ui.value.wrapper, attrs.class));
    const textareaClass = computed(() => {
      var _a, _b;
      const variant = ((_b = (_a = ui.value.color) == null ? void 0 : _a[color.value]) == null ? void 0 : _b[props.variant]) || ui.value.variant[props.variant];
      return twMerge(twJoin(
        ui.value.base,
        ui.value.rounded,
        ui.value.placeholder,
        ui.value.size[size.value],
        props.padded ? ui.value.padding[size.value] : "p-0",
        variant == null ? void 0 : variant.replaceAll("{color}", color.value),
        !props.resize && "resize-none"
      ), props.textareaClass);
    });
    return {
      attrs: omit(attrs, ["class"]),
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      textarea,
      wrapperClass,
      // eslint-disable-next-line vue/no-dupe-keys
      textareaClass,
      onInput,
      onBlur
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  let _temp0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: _ctx.wrapperClass }, _attrs))}><textarea${ssrRenderAttrs(_temp0 = mergeProps({
    ref: "textarea",
    value: _ctx.modelValue,
    name: _ctx.name,
    rows: _ctx.rows,
    required: _ctx.required,
    disabled: _ctx.disabled,
    placeholder: _ctx.placeholder,
    class: ["form-textarea", _ctx.textareaClass]
  }, _ctx.attrs), "textarea")}>${ssrInterpolate("value" in _temp0 ? _temp0.value : "")}</textarea></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/forms/Textarea.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Textarea = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { Textarea as default };
//# sourceMappingURL=Textarea-efe0b039.mjs.map

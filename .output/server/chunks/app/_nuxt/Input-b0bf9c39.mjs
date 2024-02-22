import __nuxt_component_0 from './Icon-855b8e20.mjs';
import { useSSRContext, defineComponent, computed, ref, mergeProps } from 'vue';
import { a as appConfig, b as useAppConfig, d as defuTwMerge } from '../server.mjs';
import { omit } from 'lodash-es';
import { twMerge, twJoin } from 'tailwind-merge';
import { u as useFormGroup } from './useFormGroup-fb26c2fe.mjs';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderClass, ssrRenderComponent } from 'vue/server-renderer';
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
  components: {
    UIcon: __nuxt_component_0
  },
  inheritAttrs: false,
  props: {
    modelValue: {
      type: [String, Number],
      default: ""
    },
    type: {
      type: String,
      default: "text"
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
    autofocus: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: null
    },
    loadingIcon: {
      type: String,
      default: () => appConfig.ui.input.default.loadingIcon
    },
    leadingIcon: {
      type: String,
      default: null
    },
    trailingIcon: {
      type: String,
      default: null
    },
    trailing: {
      type: Boolean,
      default: false
    },
    leading: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    padded: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: () => appConfig.ui.input.default.size,
      validator(value) {
        return Object.keys(appConfig.ui.input.size).includes(value);
      }
    },
    color: {
      type: String,
      default: () => appConfig.ui.input.default.color,
      validator(value) {
        return [...appConfig.ui.colors, ...Object.keys(appConfig.ui.input.color)].includes(value);
      }
    },
    variant: {
      type: String,
      default: () => appConfig.ui.input.default.variant,
      validator(value) {
        return [
          ...Object.keys(appConfig.ui.input.variant),
          ...Object.values(appConfig.ui.input.color).flatMap((value2) => Object.keys(value2))
        ].includes(value);
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
  emits: ["update:modelValue", "blur"],
  setup(props, { emit, attrs, slots }) {
    const appConfig2 = useAppConfig();
    const ui = computed(() => defuTwMerge({}, props.ui, appConfig2.ui.input));
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
    const input = ref(null);
    const onInput = (event) => {
      emit("update:modelValue", event.target.value);
      emitFormInput();
    };
    const onBlur = (event) => {
      emitFormBlur();
      emit("blur", event);
    };
    const wrapperClass = computed(() => twMerge(ui.value.wrapper, attrs.class));
    const inputClass = computed(() => {
      var _a, _b;
      const variant = ((_b = (_a = ui.value.color) == null ? void 0 : _a[color.value]) == null ? void 0 : _b[props.variant]) || ui.value.variant[props.variant];
      return twMerge(twJoin(
        ui.value.base,
        ui.value.rounded,
        ui.value.placeholder,
        ui.value.size[size.value],
        props.padded ? ui.value.padding[size.value] : "p-0",
        variant == null ? void 0 : variant.replaceAll("{color}", color.value),
        (isLeading.value || slots.leading) && ui.value.leading.padding[size.value],
        (isTrailing.value || slots.trailing) && ui.value.trailing.padding[size.value]
      ), props.inputClass);
    });
    const isLeading = computed(() => {
      return props.icon && props.leading || props.icon && !props.trailing || props.loading && !props.trailing || props.leadingIcon;
    });
    const isTrailing = computed(() => {
      return props.icon && props.trailing || props.loading && props.trailing || props.trailingIcon;
    });
    const leadingIconName = computed(() => {
      if (props.loading) {
        return props.loadingIcon;
      }
      return props.leadingIcon || props.icon;
    });
    const trailingIconName = computed(() => {
      if (props.loading && !isLeading.value) {
        return props.loadingIcon;
      }
      return props.trailingIcon || props.icon;
    });
    const leadingWrapperIconClass = computed(() => {
      return twJoin(
        ui.value.icon.leading.wrapper,
        ui.value.icon.leading.pointer,
        ui.value.icon.leading.padding[size.value]
      );
    });
    const leadingIconClass = computed(() => {
      return twJoin(
        ui.value.icon.base,
        appConfig2.ui.colors.includes(color.value) && ui.value.icon.color.replaceAll("{color}", color.value),
        ui.value.icon.size[size.value],
        props.loading && "animate-spin"
      );
    });
    const trailingWrapperIconClass = computed(() => {
      return twJoin(
        ui.value.icon.trailing.wrapper,
        ui.value.icon.trailing.pointer,
        ui.value.icon.trailing.padding[size.value]
      );
    });
    const trailingIconClass = computed(() => {
      return twJoin(
        ui.value.icon.base,
        appConfig2.ui.colors.includes(color.value) && ui.value.icon.color.replaceAll("{color}", color.value),
        ui.value.icon.size[size.value],
        props.loading && !isLeading.value && "animate-spin"
      );
    });
    return {
      attrs: omit(attrs, ["class"]),
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      input,
      isLeading,
      isTrailing,
      wrapperClass,
      // eslint-disable-next-line vue/no-dupe-keys
      inputClass,
      leadingIconName,
      leadingIconClass,
      leadingWrapperIconClass,
      trailingIconName,
      trailingIconClass,
      trailingWrapperIconClass,
      onInput,
      onBlur
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UIcon = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: _ctx.wrapperClass }, _attrs))}><input${ssrRenderAttrs(mergeProps({
    ref: "input",
    name: _ctx.name,
    value: _ctx.modelValue,
    type: _ctx.type,
    required: _ctx.required,
    placeholder: _ctx.placeholder,
    disabled: _ctx.disabled || _ctx.loading,
    class: ["form-input", _ctx.inputClass]
  }, _ctx.attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  if (_ctx.isLeading && _ctx.leadingIconName || _ctx.$slots.leading) {
    _push(`<span class="${ssrRenderClass(_ctx.leadingWrapperIconClass)}">`);
    ssrRenderSlot(_ctx.$slots, "leading", {
      disabled: _ctx.disabled,
      loading: _ctx.loading
    }, () => {
      _push(ssrRenderComponent(_component_UIcon, {
        name: _ctx.leadingIconName,
        class: _ctx.leadingIconClass
      }, null, _parent));
    }, _push, _parent);
    _push(`</span>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.isTrailing && _ctx.trailingIconName || _ctx.$slots.trailing) {
    _push(`<span class="${ssrRenderClass(_ctx.trailingWrapperIconClass)}">`);
    ssrRenderSlot(_ctx.$slots, "trailing", {
      disabled: _ctx.disabled,
      loading: _ctx.loading
    }, () => {
      _push(ssrRenderComponent(_component_UIcon, {
        name: _ctx.trailingIconName,
        class: _ctx.trailingIconClass
      }, null, _parent));
    }, _push, _parent);
    _push(`</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/forms/Input.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Input = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { Input as default };
//# sourceMappingURL=Input-b0bf9c39.mjs.map

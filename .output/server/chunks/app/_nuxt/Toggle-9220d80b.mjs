import __nuxt_component_0 from './Icon-855b8e20.mjs';
import { defineComponent, onMounted, onUnmounted, unref, ref, computed, provide, inject, watch, h, Fragment, useSSRContext, resolveComponent, mergeProps, withCtx, createVNode, openBlock, createBlock, createCommentVNode } from 'vue';
import { a as appConfig, b as useAppConfig, d as defuTwMerge } from '../server.mjs';
import { omit } from 'lodash-es';
import { twMerge, twJoin } from 'tailwind-merge';
import { u as useFormGroup } from './useFormGroup-fb26c2fe.mjs';
import { ssrRenderComponent, ssrRenderClass } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import { t, H, o, K as K$1, T, a as o$1 } from './dom-075ad068.mjs';
import { M } from './description-4de76aed.mjs';
import { b } from './use-resolve-button-type-de78c0b4.mjs';
import { f, a as a$1 } from './hidden-990651e2.mjs';
import { d as d$1, p } from './use-controllable-8cdd501d.mjs';
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

let a = Symbol("LabelContext");
function d() {
  let t2 = inject(a, null);
  if (t2 === null) {
    let n = new Error("You used a <Label /> component, but it is not inside a parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(n, d), n;
  }
  return t2;
}
function K({ slot: t2 = {}, name: n = "Label", props: i = {} } = {}) {
  let e = ref([]);
  function l(r) {
    return e.value.push(r), () => {
      let o2 = e.value.indexOf(r);
      o2 !== -1 && e.value.splice(o2, 1);
    };
  }
  return provide(a, { register: l, slot: t2, name: n, props: i }), computed(() => e.value.length > 0 ? e.value.join(" ") : void 0);
}
defineComponent({ name: "Label", props: { as: { type: [Object, String], default: "label" }, passive: { type: [Boolean], default: false }, id: { type: String, default: () => `headlessui-label-${t()}` } }, setup(t2, { slots: n, attrs: i }) {
  let e = d();
  return onMounted(() => onUnmounted(e.register(t2.id))), () => {
    let { name: l = "Label", slot: r = {}, props: o2 = {} } = e, { id: p2, passive: c, ...u } = t2, s = { ...Object.entries(o2).reduce((f2, [b2, g]) => Object.assign(f2, { [b2]: unref(g) }), {}), id: p2 };
    return c && (delete s.onClick, delete s.htmlFor, delete u.onClick), H({ ourProps: s, theirProps: u, slot: r, attrs: i, slots: n, name: l });
  };
} });
let S = Symbol("GroupContext");
defineComponent({ name: "SwitchGroup", props: { as: { type: [Object, String], default: "template" } }, setup(l, { slots: p2, attrs: a2 }) {
  let o2 = ref(null), f2 = K({ name: "SwitchLabel", props: { htmlFor: computed(() => {
    var r;
    return (r = o2.value) == null ? void 0 : r.id;
  }), onClick(r) {
    o2.value && (r.currentTarget.tagName === "LABEL" && r.preventDefault(), o2.value.click(), o2.value.focus({ preventScroll: true }));
  } } }), t2 = M({ name: "SwitchDescription" });
  return provide(S, { switchRef: o2, labelledby: f2, describedby: t2 }), () => H({ theirProps: l, ourProps: {}, slot: {}, slots: p2, attrs: a2, name: "SwitchGroup" });
} });
let ue = defineComponent({ name: "Switch", emits: { "update:modelValue": (l) => true }, props: { as: { type: [Object, String], default: "button" }, modelValue: { type: Boolean, default: void 0 }, defaultChecked: { type: Boolean, optional: true }, form: { type: String, optional: true }, name: { type: String, optional: true }, value: { type: String, optional: true }, id: { type: String, default: () => `headlessui-switch-${t()}` } }, inheritAttrs: false, setup(l, { emit: p$1, attrs: a2, slots: o$2, expose: f$1 }) {
  let t2 = inject(S, null), [i, r] = d$1(computed(() => l.modelValue), (e) => p$1("update:modelValue", e), computed(() => l.defaultChecked));
  function s() {
    r(!i.value);
  }
  let w = ref(null), u = t2 === null ? w : t2.switchRef, g = b(computed(() => ({ as: l.as, type: a2.type })), u);
  f$1({ el: u, $el: u });
  function k(e) {
    e.preventDefault(), s();
  }
  function C(e) {
    e.key === o$1.Space ? (e.preventDefault(), s()) : e.key === o$1.Enter && p(e.currentTarget);
  }
  function E(e) {
    e.preventDefault();
  }
  let c = computed(() => {
    var e, n;
    return (n = (e = o(u)) == null ? void 0 : e.closest) == null ? void 0 : n.call(e, "form");
  });
  return onMounted(() => {
    watch([c], () => {
      if (!c.value || l.defaultChecked === void 0)
        return;
      function e() {
        r(l.defaultChecked);
      }
      return c.value.addEventListener("reset", e), () => {
        var n;
        (n = c.value) == null || n.removeEventListener("reset", e);
      };
    }, { immediate: true });
  }), () => {
    let { id: e, name: n, value: L, form: D, ...R } = l, K2 = { checked: i.value }, x = { id: e, ref: u, role: "switch", type: g.value, tabIndex: 0, "aria-checked": i.value, "aria-labelledby": t2 == null ? void 0 : t2.labelledby.value, "aria-describedby": t2 == null ? void 0 : t2.describedby.value, onClick: k, onKeyup: C, onKeypress: E };
    return h(Fragment, [n != null && i.value != null ? h(f, K$1({ features: a$1.Hidden, as: "input", type: "checkbox", hidden: true, readOnly: true, checked: i.value, form: D, name: n, value: L })) : null, H({ ourProps: x, theirProps: { ...a2, ...T(R, ["modelValue", "defaultChecked"]) }, slot: K2, attrs: a2, slots: o$2, name: "Switch" })]);
  };
} });
const _sfc_main = /* @__PURE__ */ defineComponent({
  components: {
    HSwitch: ue,
    UIcon: __nuxt_component_0
  },
  inheritAttrs: false,
  props: {
    name: {
      type: String,
      default: null
    },
    modelValue: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    onIcon: {
      type: String,
      default: () => appConfig.ui.toggle.default.onIcon
    },
    offIcon: {
      type: String,
      default: () => appConfig.ui.toggle.default.offIcon
    },
    color: {
      type: String,
      default: () => appConfig.ui.toggle.default.color,
      validator(value) {
        return appConfig.ui.colors.includes(value);
      }
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit, attrs }) {
    const appConfig2 = useAppConfig();
    const ui = computed(() => defuTwMerge({}, props.ui, appConfig2.ui.toggle));
    const { emitFormChange, formGroup } = useFormGroup();
    const color = computed(() => {
      var _a;
      return ((_a = formGroup == null ? void 0 : formGroup.error) == null ? void 0 : _a.value) ? "red" : props.color;
    });
    const active = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit("update:modelValue", value);
        emitFormChange();
      }
    });
    const switchClass = computed(() => {
      return twMerge(twJoin(
        ui.value.base,
        ui.value.rounded,
        ui.value.ring.replaceAll("{color}", color.value),
        (active.value ? ui.value.active : ui.value.inactive).replaceAll("{color}", color.value)
      ), attrs.class);
    });
    const onIconClass = computed(() => {
      return twJoin(
        ui.value.icon.on.replaceAll("{color}", color.value)
      );
    });
    const offIconClass = computed(() => {
      return twJoin(
        ui.value.icon.off.replaceAll("{color}", color.value)
      );
    });
    return {
      attrs: omit(attrs, ["class"]),
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      active,
      switchClass,
      onIconClass,
      offIconClass
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HSwitch = resolveComponent("HSwitch");
  const _component_UIcon = __nuxt_component_0;
  _push(ssrRenderComponent(_component_HSwitch, mergeProps({
    modelValue: _ctx.active,
    "onUpdate:modelValue": ($event) => _ctx.active = $event,
    name: _ctx.name,
    disabled: _ctx.disabled,
    class: _ctx.switchClass
  }, _ctx.attrs, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="${ssrRenderClass([_ctx.active ? _ctx.ui.container.active : _ctx.ui.container.inactive, _ctx.ui.container.base])}"${_scopeId}>`);
        if (_ctx.onIcon) {
          _push2(`<span class="${ssrRenderClass([_ctx.active ? _ctx.ui.icon.active : _ctx.ui.icon.inactive, _ctx.ui.icon.base])}" aria-hidden="true"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_UIcon, {
            name: _ctx.onIcon,
            class: _ctx.onIconClass
          }, null, _parent2, _scopeId));
          _push2(`</span>`);
        } else {
          _push2(`<!---->`);
        }
        if (_ctx.offIcon) {
          _push2(`<span class="${ssrRenderClass([_ctx.active ? _ctx.ui.icon.inactive : _ctx.ui.icon.active, _ctx.ui.icon.base])}" aria-hidden="true"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_UIcon, {
            name: _ctx.offIcon,
            class: _ctx.offIconClass
          }, null, _parent2, _scopeId));
          _push2(`</span>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</span>`);
      } else {
        return [
          createVNode("span", {
            class: [_ctx.active ? _ctx.ui.container.active : _ctx.ui.container.inactive, _ctx.ui.container.base]
          }, [
            _ctx.onIcon ? (openBlock(), createBlock("span", {
              key: 0,
              class: [_ctx.active ? _ctx.ui.icon.active : _ctx.ui.icon.inactive, _ctx.ui.icon.base],
              "aria-hidden": "true"
            }, [
              createVNode(_component_UIcon, {
                name: _ctx.onIcon,
                class: _ctx.onIconClass
              }, null, 8, ["name", "class"])
            ], 2)) : createCommentVNode("", true),
            _ctx.offIcon ? (openBlock(), createBlock("span", {
              key: 1,
              class: [_ctx.active ? _ctx.ui.icon.inactive : _ctx.ui.icon.active, _ctx.ui.icon.base],
              "aria-hidden": "true"
            }, [
              createVNode(_component_UIcon, {
                name: _ctx.offIcon,
                class: _ctx.offIconClass
              }, null, 8, ["name", "class"])
            ], 2)) : createCommentVNode("", true)
          ], 2)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/forms/Toggle.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Toggle = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { Toggle as default };
//# sourceMappingURL=Toggle-9220d80b.mjs.map

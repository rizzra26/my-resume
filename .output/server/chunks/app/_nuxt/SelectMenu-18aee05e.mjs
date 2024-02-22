import __nuxt_component_0 from './Icon-855b8e20.mjs';
import __nuxt_component_1 from './Avatar-07284992.mjs';
import { defineComponent, ref, computed, provide, onMounted, watch, h as h$1, Fragment, onUnmounted, watchEffect, nextTick, useSSRContext, inject, toRaw, resolveComponent, createVNode, resolveDynamicComponent, mergeProps, withCtx, renderSlot, openBlock, createBlock, createCommentVNode, toDisplayString, renderList, createTextVNode, Transition } from 'vue';
import { x as defu } from '../../nitro/node-server.mjs';
import { a as appConfig, b as useAppConfig, d as defuTwMerge } from '../server.mjs';
import { useDebounceFn, computedAsync } from '@vueuse/core';
import { omit } from 'lodash-es';
import { twMerge, twJoin } from 'tailwind-merge';
import { u as usePopper } from './usePopper-4c6d2f66.mjs';
import { u as useFormGroup } from './useFormGroup-fb26c2fe.mjs';
import { ssrRenderVNode, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderSlot, ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import { J as Je, G as Ge, X as Xe, Y as Ye, Q as Qe } from './combobox-7aea91ec.mjs';
import { u, o, K, H, T, t, N, a as o$1 } from './dom-075ad068.mjs';
import { x, a, u as u$1 } from './use-tracked-pointer-4d7dbbdb.mjs';
import { c, l, p } from './open-closed-4c4062c8.mjs';
import { b } from './use-resolve-button-type-de78c0b4.mjs';
import { w, h, O } from './focus-management-ebae29a2.mjs';
import { y } from './use-outside-click-a351c925.mjs';
import { f, a as a$1 } from './hidden-990651e2.mjs';
import { d, e } from './use-controllable-8cdd501d.mjs';
import { p as p$1 } from './use-text-value-e0c4fe6a.mjs';
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
import './disposables-a9659b4d.mjs';
import './micro-task-304cda21.mjs';

function pe(t2, v) {
  return t2 === v;
}
var ce = ((l2) => (l2[l2.Open = 0] = "Open", l2[l2.Closed = 1] = "Closed", l2))(ce || {}), ve = ((l2) => (l2[l2.Single = 0] = "Single", l2[l2.Multi = 1] = "Multi", l2))(ve || {}), be = ((l2) => (l2[l2.Pointer = 0] = "Pointer", l2[l2.Other = 1] = "Other", l2))(be || {});
function me(t2) {
  requestAnimationFrame(() => requestAnimationFrame(t2));
}
let $ = Symbol("ListboxContext");
function A(t2) {
  let v = inject($, null);
  if (v === null) {
    let l2 = new Error(`<${t2} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l2, A), l2;
  }
  return v;
}
let Be = defineComponent({ name: "Listbox", emits: { "update:modelValue": (t2) => true }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: false }, by: { type: [String, Function], default: () => pe }, horizontal: { type: [Boolean], default: false }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, form: { type: String, optional: true }, name: { type: String, optional: true }, multiple: { type: [Boolean], default: false } }, inheritAttrs: false, setup(t2, { slots: v, attrs: l$1, emit: L }) {
  let e$1 = ref(1), d$1 = ref(null), b2 = ref(null), m = ref(null), f$1 = ref([]), o$12 = ref(""), i = ref(null), T$1 = ref(1);
  function k(a2 = (n) => n) {
    let n = i.value !== null ? f$1.value[i.value] : null, u2 = O(a2(f$1.value.slice()), (O2) => o(O2.dataRef.domRef)), s = n ? u2.indexOf(n) : null;
    return s === -1 && (s = null), { options: u2, activeOptionIndex: s };
  }
  let y$1 = computed(() => t2.multiple ? 1 : 0), [h$2, M] = d(computed(() => t2.modelValue), (a2) => L("update:modelValue", a2), computed(() => t2.defaultValue)), w$1 = computed(() => h$2.value === void 0 ? u(y$1.value, { [1]: [], [0]: void 0 }) : h$2.value), r = { listboxState: e$1, value: w$1, mode: y$1, compare(a2, n) {
    if (typeof t2.by == "string") {
      let u2 = t2.by;
      return (a2 == null ? void 0 : a2[u2]) === (n == null ? void 0 : n[u2]);
    }
    return t2.by(a2, n);
  }, orientation: computed(() => t2.horizontal ? "horizontal" : "vertical"), labelRef: d$1, buttonRef: b2, optionsRef: m, disabled: computed(() => t2.disabled), options: f$1, searchQuery: o$12, activeOptionIndex: i, activationTrigger: T$1, closeListbox() {
    t2.disabled || e$1.value !== 1 && (e$1.value = 1, i.value = null);
  }, openListbox() {
    t2.disabled || e$1.value !== 0 && (e$1.value = 0);
  }, goToOption(a$12, n, u2) {
    if (t2.disabled || e$1.value === 1)
      return;
    let s = k(), O2 = x(a$12 === a.Specific ? { focus: a.Specific, id: n } : { focus: a$12 }, { resolveItems: () => s.options, resolveActiveIndex: () => s.activeOptionIndex, resolveId: (P) => P.id, resolveDisabled: (P) => P.dataRef.disabled });
    o$12.value = "", i.value = O2, T$1.value = u2 != null ? u2 : 1, f$1.value = s.options;
  }, search(a2) {
    if (t2.disabled || e$1.value === 1)
      return;
    let u2 = o$12.value !== "" ? 0 : 1;
    o$12.value += a2.toLowerCase();
    let O2 = (i.value !== null ? f$1.value.slice(i.value + u2).concat(f$1.value.slice(0, i.value + u2)) : f$1.value).find((I) => I.dataRef.textValue.startsWith(o$12.value) && !I.dataRef.disabled), P = O2 ? f$1.value.indexOf(O2) : -1;
    P === -1 || P === i.value || (i.value = P, T$1.value = 1);
  }, clearSearch() {
    t2.disabled || e$1.value !== 1 && o$12.value !== "" && (o$12.value = "");
  }, registerOption(a2, n) {
    let u2 = k((s) => [...s, { id: a2, dataRef: n }]);
    f$1.value = u2.options, i.value = u2.activeOptionIndex;
  }, unregisterOption(a2) {
    let n = k((u2) => {
      let s = u2.findIndex((O2) => O2.id === a2);
      return s !== -1 && u2.splice(s, 1), u2;
    });
    f$1.value = n.options, i.value = n.activeOptionIndex, T$1.value = 1;
  }, theirOnChange(a2) {
    t2.disabled || M(a2);
  }, select(a2) {
    t2.disabled || M(u(y$1.value, { [0]: () => a2, [1]: () => {
      let n = toRaw(r.value.value).slice(), u2 = toRaw(a2), s = n.findIndex((O2) => r.compare(u2, toRaw(O2)));
      return s === -1 ? n.push(u2) : n.splice(s, 1), n;
    } }));
  } };
  y([b2, m], (a2, n) => {
    var u2;
    r.closeListbox(), w(n, h.Loose) || (a2.preventDefault(), (u2 = o(b2)) == null || u2.focus());
  }, computed(() => e$1.value === 0)), provide($, r), c(computed(() => u(e$1.value, { [0]: l.Open, [1]: l.Closed })));
  let x$1 = computed(() => {
    var a2;
    return (a2 = o(b2)) == null ? void 0 : a2.closest("form");
  });
  return onMounted(() => {
    watch([x$1], () => {
      if (!x$1.value || t2.defaultValue === void 0)
        return;
      function a2() {
        r.theirOnChange(t2.defaultValue);
      }
      return x$1.value.addEventListener("reset", a2), () => {
        var n;
        (n = x$1.value) == null || n.removeEventListener("reset", a2);
      };
    }, { immediate: true });
  }), () => {
    let { name: a2, modelValue: n, disabled: u2, form: s, ...O2 } = t2, P = { open: e$1.value === 0, disabled: u2, value: w$1.value };
    return h$1(Fragment, [...a2 != null && w$1.value != null ? e({ [a2]: w$1.value }).map(([I, Q]) => h$1(f, K({ features: a$1.Hidden, key: I, as: "input", type: "hidden", hidden: true, readOnly: true, form: s, name: I, value: Q }))) : [], H({ ourProps: {}, theirProps: { ...l$1, ...T(O2, ["defaultValue", "onUpdate:modelValue", "horizontal", "multiple", "by"]) }, slot: P, slots: v, attrs: l$1, name: "Listbox" })]);
  };
} });
defineComponent({ name: "ListboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: () => `headlessui-listbox-label-${t()}` } }, setup(t2, { attrs: v, slots: l2 }) {
  let L = A("ListboxLabel");
  function e2() {
    var d2;
    (d2 = o(L.buttonRef)) == null || d2.focus({ preventScroll: true });
  }
  return () => {
    let d2 = { open: L.listboxState.value === 0, disabled: L.disabled.value }, { id: b2, ...m } = t2, f2 = { id: b2, ref: L.labelRef, onClick: e2 };
    return H({ ourProps: f2, theirProps: m, slot: d2, attrs: v, slots: l2, name: "ListboxLabel" });
  };
} });
let Ne = defineComponent({ name: "ListboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: () => `headlessui-listbox-button-${t()}` } }, setup(t2, { attrs: v, slots: l2, expose: L }) {
  let e2 = A("ListboxButton");
  L({ el: e2.buttonRef, $el: e2.buttonRef });
  function d2(o$2) {
    switch (o$2.key) {
      case o$1.Space:
      case o$1.Enter:
      case o$1.ArrowDown:
        o$2.preventDefault(), e2.openListbox(), nextTick(() => {
          var i;
          (i = o(e2.optionsRef)) == null || i.focus({ preventScroll: true }), e2.value.value || e2.goToOption(a.First);
        });
        break;
      case o$1.ArrowUp:
        o$2.preventDefault(), e2.openListbox(), nextTick(() => {
          var i;
          (i = o(e2.optionsRef)) == null || i.focus({ preventScroll: true }), e2.value.value || e2.goToOption(a.Last);
        });
        break;
    }
  }
  function b$1(o2) {
    switch (o2.key) {
      case o$1.Space:
        o2.preventDefault();
        break;
    }
  }
  function m(o$12) {
    e2.disabled.value || (e2.listboxState.value === 0 ? (e2.closeListbox(), nextTick(() => {
      var i;
      return (i = o(e2.buttonRef)) == null ? void 0 : i.focus({ preventScroll: true });
    })) : (o$12.preventDefault(), e2.openListbox(), me(() => {
      var i;
      return (i = o(e2.optionsRef)) == null ? void 0 : i.focus({ preventScroll: true });
    })));
  }
  let f2 = b(computed(() => ({ as: t2.as, type: v.type })), e2.buttonRef);
  return () => {
    var y2, h2;
    let o$12 = { open: e2.listboxState.value === 0, disabled: e2.disabled.value, value: e2.value.value }, { id: i, ...T2 } = t2, k = { ref: e2.buttonRef, id: i, type: f2.value, "aria-haspopup": "listbox", "aria-controls": (y2 = o(e2.optionsRef)) == null ? void 0 : y2.id, "aria-expanded": e2.listboxState.value === 0, "aria-labelledby": e2.labelRef.value ? [(h2 = o(e2.labelRef)) == null ? void 0 : h2.id, i].join(" ") : void 0, disabled: e2.disabled.value === true ? true : void 0, onKeydown: d2, onKeyup: b$1, onClick: m };
    return H({ ourProps: k, theirProps: T2, slot: o$12, attrs: v, slots: l2, name: "ListboxButton" });
  };
} }), He = defineComponent({ name: "ListboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, id: { type: String, default: () => `headlessui-listbox-options-${t()}` } }, setup(t2, { attrs: v, slots: l$1, expose: L }) {
  let e2 = A("ListboxOptions"), d2 = ref(null);
  L({ el: e2.optionsRef, $el: e2.optionsRef });
  function b2(o$2) {
    switch (d2.value && clearTimeout(d2.value), o$2.key) {
      case o$1.Space:
        if (e2.searchQuery.value !== "")
          return o$2.preventDefault(), o$2.stopPropagation(), e2.search(o$2.key);
      case o$1.Enter:
        if (o$2.preventDefault(), o$2.stopPropagation(), e2.activeOptionIndex.value !== null) {
          let i = e2.options.value[e2.activeOptionIndex.value];
          e2.select(i.dataRef.value);
        }
        e2.mode.value === 0 && (e2.closeListbox(), nextTick(() => {
          var i;
          return (i = o(e2.buttonRef)) == null ? void 0 : i.focus({ preventScroll: true });
        }));
        break;
      case u(e2.orientation.value, { vertical: o$1.ArrowDown, horizontal: o$1.ArrowRight }):
        return o$2.preventDefault(), o$2.stopPropagation(), e2.goToOption(a.Next);
      case u(e2.orientation.value, { vertical: o$1.ArrowUp, horizontal: o$1.ArrowLeft }):
        return o$2.preventDefault(), o$2.stopPropagation(), e2.goToOption(a.Previous);
      case o$1.Home:
      case o$1.PageUp:
        return o$2.preventDefault(), o$2.stopPropagation(), e2.goToOption(a.First);
      case o$1.End:
      case o$1.PageDown:
        return o$2.preventDefault(), o$2.stopPropagation(), e2.goToOption(a.Last);
      case o$1.Escape:
        o$2.preventDefault(), o$2.stopPropagation(), e2.closeListbox(), nextTick(() => {
          var i;
          return (i = o(e2.buttonRef)) == null ? void 0 : i.focus({ preventScroll: true });
        });
        break;
      case o$1.Tab:
        o$2.preventDefault(), o$2.stopPropagation();
        break;
      default:
        o$2.key.length === 1 && (e2.search(o$2.key), d2.value = setTimeout(() => e2.clearSearch(), 350));
        break;
    }
  }
  let m = p(), f2 = computed(() => m !== null ? (m.value & l.Open) === l.Open : e2.listboxState.value === 0);
  return () => {
    var y2, h2, M, w2;
    let o$12 = { open: e2.listboxState.value === 0 }, { id: i, ...T2 } = t2, k = { "aria-activedescendant": e2.activeOptionIndex.value === null || (y2 = e2.options.value[e2.activeOptionIndex.value]) == null ? void 0 : y2.id, "aria-multiselectable": e2.mode.value === 1 ? true : void 0, "aria-labelledby": (w2 = (h2 = o(e2.labelRef)) == null ? void 0 : h2.id) != null ? w2 : (M = o(e2.buttonRef)) == null ? void 0 : M.id, "aria-orientation": e2.orientation.value, id: i, onKeydown: b2, role: "listbox", tabIndex: 0, ref: e2.optionsRef };
    return H({ ourProps: k, theirProps: T2, slot: o$12, attrs: v, slots: l$1, features: N.RenderStrategy | N.Static, visible: f2.value, name: "ListboxOptions" });
  };
} }), Ue = defineComponent({ name: "ListboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: false }, id: { type: String, default: () => `headlessui-listbox.option-${t()}` } }, setup(t2, { slots: v, attrs: l2, expose: L }) {
  let e2 = A("ListboxOption"), d2 = ref(null);
  L({ el: d2, $el: d2 });
  let b2 = computed(() => e2.activeOptionIndex.value !== null ? e2.options.value[e2.activeOptionIndex.value].id === t2.id : false), m = computed(() => u(e2.mode.value, { [0]: () => e2.compare(toRaw(e2.value.value), toRaw(t2.value)), [1]: () => toRaw(e2.value.value).some((r) => e2.compare(toRaw(r), toRaw(t2.value))) })), f2 = computed(() => u(e2.mode.value, { [1]: () => {
    var x2;
    let r = toRaw(e2.value.value);
    return ((x2 = e2.options.value.find((a2) => r.some((n) => e2.compare(toRaw(n), toRaw(a2.dataRef.value))))) == null ? void 0 : x2.id) === t2.id;
  }, [0]: () => m.value })), o$12 = p$1(d2), i = computed(() => ({ disabled: t2.disabled, value: t2.value, get textValue() {
    return o$12();
  }, domRef: d2 }));
  onMounted(() => e2.registerOption(t2.id, i)), onUnmounted(() => e2.unregisterOption(t2.id)), onMounted(() => {
    watch([e2.listboxState, m], () => {
      e2.listboxState.value === 0 && m.value && u(e2.mode.value, { [1]: () => {
        f2.value && e2.goToOption(a.Specific, t2.id);
      }, [0]: () => {
        e2.goToOption(a.Specific, t2.id);
      } });
    }, { immediate: true });
  }), watchEffect(() => {
    e2.listboxState.value === 0 && b2.value && e2.activationTrigger.value !== 0 && nextTick(() => {
      var r, x2;
      return (x2 = (r = o(d2)) == null ? void 0 : r.scrollIntoView) == null ? void 0 : x2.call(r, { block: "nearest" });
    });
  });
  function T2(r) {
    if (t2.disabled)
      return r.preventDefault();
    e2.select(t2.value), e2.mode.value === 0 && (e2.closeListbox(), nextTick(() => {
      var x2;
      return (x2 = o(e2.buttonRef)) == null ? void 0 : x2.focus({ preventScroll: true });
    }));
  }
  function k() {
    if (t2.disabled)
      return e2.goToOption(a.Nothing);
    e2.goToOption(a.Specific, t2.id);
  }
  let y2 = u$1();
  function h2(r) {
    y2.update(r);
  }
  function M(r) {
    y2.wasMoved(r) && (t2.disabled || b2.value || e2.goToOption(a.Specific, t2.id, 0));
  }
  function w2(r) {
    y2.wasMoved(r) && (t2.disabled || b2.value && e2.goToOption(a.Nothing));
  }
  return () => {
    let { disabled: r } = t2, x2 = { active: b2.value, selected: m.value, disabled: r }, { id: a2, value: n, disabled: u2, ...s } = t2, O2 = { id: a2, ref: d2, role: "option", tabIndex: r === true ? void 0 : -1, "aria-disabled": r === true ? true : void 0, "aria-selected": m.value, disabled: void 0, onClick: T2, onFocus: k, onPointerenter: h2, onMouseenter: h2, onPointermove: M, onMousemove: M, onPointerleave: w2, onMouseleave: w2 };
    return H({ ourProps: O2, theirProps: s, slot: x2, attrs: l2, slots: v, name: "ListboxOption" });
  };
} });
const _sfc_main = /* @__PURE__ */ defineComponent({
  components: {
    HCombobox: Je,
    HComboboxButton: Ge,
    HComboboxOptions: Xe,
    HComboboxOption: Ye,
    HComboboxInput: Qe,
    HListbox: Be,
    HListboxButton: Ne,
    HListboxOptions: He,
    HListboxOption: Ue,
    UIcon: __nuxt_component_0,
    UAvatar: __nuxt_component_1
  },
  inheritAttrs: false,
  props: {
    modelValue: {
      type: [String, Number, Object, Array],
      default: ""
    },
    by: {
      type: String,
      default: void 0
    },
    options: {
      type: Array,
      default: () => []
    },
    name: {
      type: String,
      default: null
    },
    required: {
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
      default: () => appConfig.ui.select.default.trailingIcon
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
    selectedIcon: {
      type: String,
      default: () => appConfig.ui.selectMenu.default.selectedIcon
    },
    disabled: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean,
      default: false
    },
    searchable: {
      type: [Boolean, Function],
      default: false
    },
    searchablePlaceholder: {
      type: String,
      default: "Search..."
    },
    debounce: {
      type: Number,
      default: 200
    },
    creatable: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: null
    },
    padded: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: () => appConfig.ui.select.default.size,
      validator(value) {
        return Object.keys(appConfig.ui.select.size).includes(value);
      }
    },
    color: {
      type: String,
      default: () => appConfig.ui.select.default.color,
      validator(value) {
        return [...appConfig.ui.colors, ...Object.keys(appConfig.ui.select.color)].includes(value);
      }
    },
    variant: {
      type: String,
      default: () => appConfig.ui.select.default.variant,
      validator(value) {
        return [
          ...Object.keys(appConfig.ui.select.variant),
          ...Object.values(appConfig.ui.select.color).flatMap((value2) => Object.keys(value2))
        ].includes(value);
      }
    },
    optionAttribute: {
      type: String,
      default: "label"
    },
    valueAttribute: {
      type: String,
      default: null
    },
    searchAttributes: {
      type: Array,
      default: null
    },
    popper: {
      type: Object,
      default: () => ({})
    },
    selectClass: {
      type: String,
      default: null
    },
    ui: {
      type: Object,
      default: () => ({})
    },
    uiMenu: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue", "open", "close", "change"],
  setup(props, { emit, attrs, slots }) {
    const appConfig2 = useAppConfig();
    const ui = computed(() => defuTwMerge({}, props.ui, appConfig2.ui.select));
    const uiMenu = computed(() => defuTwMerge({}, props.uiMenu, appConfig2.ui.selectMenu));
    const popper = computed(() => defu({}, props.popper, uiMenu.value.popper));
    const [trigger, container] = usePopper(popper.value);
    const { emitFormBlur, emitFormChange, formGroup } = useFormGroup();
    const color = computed(() => {
      var _a;
      return ((_a = formGroup == null ? void 0 : formGroup.error) == null ? void 0 : _a.value) ? "red" : props.color;
    });
    const size = computed(() => {
      var _a2;
      var _a;
      return (_a2 = (_a = formGroup == null ? void 0 : formGroup.size) == null ? void 0 : _a.value) != null ? _a2 : props.size;
    });
    const query = ref("");
    const searchInput = ref();
    const wrapperClass = computed(() => twMerge(ui.value.wrapper, attrs.class));
    const selectClass = computed(() => {
      var _a, _b;
      const variant = ((_b = (_a = ui.value.color) == null ? void 0 : _a[color.value]) == null ? void 0 : _b[props.variant]) || ui.value.variant[props.variant];
      return twMerge(twJoin(
        ui.value.base,
        ui.value.rounded,
        "text-left cursor-default",
        ui.value.size[size.value],
        ui.value.gap[size.value],
        props.padded ? ui.value.padding[size.value] : "p-0",
        variant == null ? void 0 : variant.replaceAll("{color}", color.value),
        (isLeading.value || slots.leading) && ui.value.leading.padding[size.value],
        (isTrailing.value || slots.trailing) && ui.value.trailing.padding[size.value],
        "inline-flex items-center"
      ), props.selectClass);
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
    const debouncedSearch = typeof props.searchable === "function" ? useDebounceFn(props.searchable, props.debounce) : void 0;
    const filteredOptions = computedAsync(async () => {
      if (props.searchable && debouncedSearch) {
        return await debouncedSearch(query.value);
      }
      if (query.value === "") {
        return props.options;
      }
      return props.options.filter((option) => {
        var _a;
        return (((_a = props.searchAttributes) == null ? void 0 : _a.length) ? props.searchAttributes : [props.optionAttribute]).some((searchAttribute) => {
          return typeof option === "string" ? option.search(new RegExp(query.value, "i")) !== -1 : option[searchAttribute] && option[searchAttribute].search(new RegExp(query.value, "i")) !== -1;
        });
      });
    });
    const queryOption = computed(() => {
      return query.value === "" ? null : { [props.optionAttribute]: query.value };
    });
    watch(container, (value) => {
      if (value) {
        emit("open");
      } else {
        emit("close");
        emitFormBlur();
      }
    });
    function onUpdate(event) {
      var _a;
      if (query.value && ((_a = searchInput.value) == null ? void 0 : _a.$el)) {
        query.value = "";
        searchInput.value.$el.value = "";
      }
      emit("update:modelValue", event);
      emit("change", event);
      emitFormChange();
    }
    return {
      attrs: omit(attrs, ["class"]),
      // eslint-disable-next-line vue/no-dupe-keys
      uiMenu,
      trigger,
      container,
      isLeading,
      isTrailing,
      wrapperClass,
      // eslint-disable-next-line vue/no-dupe-keys
      selectClass,
      leadingIconName,
      leadingIconClass,
      leadingWrapperIconClass,
      trailingIconName,
      trailingIconClass,
      trailingWrapperIconClass,
      filteredOptions,
      queryOption,
      query,
      onUpdate
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UIcon = __nuxt_component_0;
  const _component_HComboboxInput = resolveComponent("HComboboxInput");
  const _component_UAvatar = __nuxt_component_1;
  ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.searchable ? "HCombobox" : "HListbox"), mergeProps({
    by: _ctx.by,
    name: _ctx.name,
    "model-value": _ctx.modelValue,
    multiple: _ctx.multiple,
    disabled: _ctx.disabled || _ctx.loading,
    as: "div",
    class: _ctx.wrapperClass,
    "onUpdate:modelValue": _ctx.onUpdate
  }, _attrs), {
    default: withCtx(({ open }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if (_ctx.required) {
          _push2(`<input${ssrRenderAttr("value", _ctx.modelValue)}${ssrIncludeBooleanAttr(_ctx.required) ? " required" : ""} class="absolute inset-0 w-px opacity-0 cursor-default" tabindex="-1" aria-hidden="true"${_scopeId}>`);
        } else {
          _push2(`<!---->`);
        }
        ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(_ctx.searchable ? "HComboboxButton" : "HListboxButton"), {
          ref: "trigger",
          as: "div",
          role: "button",
          class: "inline-flex w-full"
        }, {
          default: withCtx((_, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              ssrRenderSlot(_ctx.$slots, "default", {
                open,
                disabled: _ctx.disabled,
                loading: _ctx.loading
              }, () => {
                _push3(`<button${ssrRenderAttrs(mergeProps({
                  class: _ctx.selectClass,
                  disabled: _ctx.disabled || _ctx.loading,
                  type: "button"
                }, _ctx.attrs))}${_scopeId2}>`);
                if (_ctx.isLeading && _ctx.leadingIconName || _ctx.$slots.leading) {
                  _push3(`<span class="${ssrRenderClass(_ctx.leadingWrapperIconClass)}"${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "leading", {
                    disabled: _ctx.disabled,
                    loading: _ctx.loading
                  }, () => {
                    _push3(ssrRenderComponent(_component_UIcon, {
                      name: _ctx.leadingIconName,
                      class: _ctx.leadingIconClass
                    }, null, _parent3, _scopeId2));
                  }, _push3, _parent3, _scopeId2);
                  _push3(`</span>`);
                } else {
                  _push3(`<!---->`);
                }
                ssrRenderSlot(_ctx.$slots, "label", {}, () => {
                  if (_ctx.multiple && Array.isArray(_ctx.modelValue) && _ctx.modelValue.length) {
                    _push3(`<span class="block truncate"${_scopeId2}>${ssrInterpolate(_ctx.modelValue.length)} selected</span>`);
                  } else if (!_ctx.multiple && _ctx.modelValue) {
                    _push3(`<span class="block truncate"${_scopeId2}>${ssrInterpolate(typeof _ctx.modelValue === "string" ? _ctx.modelValue : _ctx.modelValue[_ctx.optionAttribute])}</span>`);
                  } else {
                    _push3(`<span class="${ssrRenderClass([_ctx.uiMenu.placeholder, "block truncate"])}"${_scopeId2}>${ssrInterpolate(_ctx.placeholder || "\xA0")}</span>`);
                  }
                }, _push3, _parent3, _scopeId2);
                if (_ctx.isTrailing && _ctx.trailingIconName || _ctx.$slots.trailing) {
                  _push3(`<span class="${ssrRenderClass(_ctx.trailingWrapperIconClass)}"${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "trailing", {
                    disabled: _ctx.disabled,
                    loading: _ctx.loading
                  }, () => {
                    _push3(ssrRenderComponent(_component_UIcon, {
                      name: _ctx.trailingIconName,
                      class: _ctx.trailingIconClass,
                      "aria-hidden": "true"
                    }, null, _parent3, _scopeId2));
                  }, _push3, _parent3, _scopeId2);
                  _push3(`</span>`);
                } else {
                  _push3(`<!---->`);
                }
                _push3(`</button>`);
              }, _push3, _parent3, _scopeId2);
            } else {
              return [
                renderSlot(_ctx.$slots, "default", {
                  open,
                  disabled: _ctx.disabled,
                  loading: _ctx.loading
                }, () => [
                  createVNode("button", mergeProps({
                    class: _ctx.selectClass,
                    disabled: _ctx.disabled || _ctx.loading,
                    type: "button"
                  }, _ctx.attrs), [
                    _ctx.isLeading && _ctx.leadingIconName || _ctx.$slots.leading ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: _ctx.leadingWrapperIconClass
                    }, [
                      renderSlot(_ctx.$slots, "leading", {
                        disabled: _ctx.disabled,
                        loading: _ctx.loading
                      }, () => [
                        createVNode(_component_UIcon, {
                          name: _ctx.leadingIconName,
                          class: _ctx.leadingIconClass
                        }, null, 8, ["name", "class"])
                      ])
                    ], 2)) : createCommentVNode("", true),
                    renderSlot(_ctx.$slots, "label", {}, () => [
                      _ctx.multiple && Array.isArray(_ctx.modelValue) && _ctx.modelValue.length ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: "block truncate"
                      }, toDisplayString(_ctx.modelValue.length) + " selected", 1)) : !_ctx.multiple && _ctx.modelValue ? (openBlock(), createBlock("span", {
                        key: 1,
                        class: "block truncate"
                      }, toDisplayString(typeof _ctx.modelValue === "string" ? _ctx.modelValue : _ctx.modelValue[_ctx.optionAttribute]), 1)) : (openBlock(), createBlock("span", {
                        key: 2,
                        class: ["block truncate", _ctx.uiMenu.placeholder]
                      }, toDisplayString(_ctx.placeholder || "\xA0"), 3))
                    ]),
                    _ctx.isTrailing && _ctx.trailingIconName || _ctx.$slots.trailing ? (openBlock(), createBlock("span", {
                      key: 1,
                      class: _ctx.trailingWrapperIconClass
                    }, [
                      renderSlot(_ctx.$slots, "trailing", {
                        disabled: _ctx.disabled,
                        loading: _ctx.loading
                      }, () => [
                        createVNode(_component_UIcon, {
                          name: _ctx.trailingIconName,
                          class: _ctx.trailingIconClass,
                          "aria-hidden": "true"
                        }, null, 8, ["name", "class"])
                      ])
                    ], 2)) : createCommentVNode("", true)
                  ], 16, ["disabled"])
                ])
              ];
            }
          }),
          _: 2
        }), _parent2, _scopeId);
        if (open) {
          _push2(`<div class="${ssrRenderClass([_ctx.uiMenu.container, _ctx.uiMenu.width])}"${_scopeId}>`);
          ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(_ctx.searchable ? "HComboboxOptions" : "HListboxOptions"), {
            static: "",
            class: [_ctx.uiMenu.base, _ctx.uiMenu.divide, _ctx.uiMenu.ring, _ctx.uiMenu.rounded, _ctx.uiMenu.shadow, _ctx.uiMenu.background, _ctx.uiMenu.padding, _ctx.uiMenu.height]
          }, {
            default: withCtx((_, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                if (_ctx.searchable) {
                  _push3(ssrRenderComponent(_component_HComboboxInput, {
                    ref: "searchInput",
                    "display-value": () => _ctx.query,
                    name: "q",
                    placeholder: _ctx.searchablePlaceholder,
                    autofocus: "",
                    autocomplete: "off",
                    class: _ctx.uiMenu.input,
                    onChange: ($event) => _ctx.query = $event.target.value
                  }, null, _parent3, _scopeId2));
                } else {
                  _push3(`<!---->`);
                }
                _push3(`<!--[-->`);
                ssrRenderList(_ctx.filteredOptions, (option, index) => {
                  ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(_ctx.searchable ? "HComboboxOption" : "HListboxOption"), {
                    key: index,
                    as: "template",
                    value: _ctx.valueAttribute ? option[_ctx.valueAttribute] : option,
                    disabled: option.disabled
                  }, {
                    default: withCtx(({ active, selected, disabled: optionDisabled }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<li class="${ssrRenderClass([_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive, selected && _ctx.uiMenu.option.selected, optionDisabled && _ctx.uiMenu.option.disabled])}"${_scopeId3}><div class="${ssrRenderClass(_ctx.uiMenu.option.container)}"${_scopeId3}>`);
                        ssrRenderSlot(_ctx.$slots, "option", {
                          option,
                          active,
                          selected
                        }, () => {
                          if (option.icon) {
                            _push4(ssrRenderComponent(_component_UIcon, {
                              name: option.icon,
                              class: [_ctx.uiMenu.option.icon.base, active ? _ctx.uiMenu.option.icon.active : _ctx.uiMenu.option.icon.inactive, option.iconClass],
                              "aria-hidden": "true"
                            }, null, _parent4, _scopeId3));
                          } else if (option.avatar) {
                            _push4(ssrRenderComponent(_component_UAvatar, mergeProps({ size: _ctx.uiMenu.option.avatar.size, ...option.avatar }, {
                              class: _ctx.uiMenu.option.avatar.base,
                              "aria-hidden": "true"
                            }), null, _parent4, _scopeId3));
                          } else if (option.chip) {
                            _push4(`<span class="${ssrRenderClass(_ctx.uiMenu.option.chip.base)}" style="${ssrRenderStyle({ background: `#${option.chip}` })}"${_scopeId3}></span>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`<span class="truncate"${_scopeId3}>${ssrInterpolate(typeof option === "string" ? option : option[_ctx.optionAttribute])}</span>`);
                        }, _push4, _parent4, _scopeId3);
                        _push4(`</div>`);
                        if (selected) {
                          _push4(`<span class="${ssrRenderClass([_ctx.uiMenu.option.selectedIcon.wrapper, _ctx.uiMenu.option.selectedIcon.padding])}"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_UIcon, {
                            name: _ctx.selectedIcon,
                            class: _ctx.uiMenu.option.selectedIcon.base,
                            "aria-hidden": "true"
                          }, null, _parent4, _scopeId3));
                          _push4(`</span>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`</li>`);
                      } else {
                        return [
                          createVNode("li", {
                            class: [_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive, selected && _ctx.uiMenu.option.selected, optionDisabled && _ctx.uiMenu.option.disabled]
                          }, [
                            createVNode("div", {
                              class: _ctx.uiMenu.option.container
                            }, [
                              renderSlot(_ctx.$slots, "option", {
                                option,
                                active,
                                selected
                              }, () => [
                                option.icon ? (openBlock(), createBlock(_component_UIcon, {
                                  key: 0,
                                  name: option.icon,
                                  class: [_ctx.uiMenu.option.icon.base, active ? _ctx.uiMenu.option.icon.active : _ctx.uiMenu.option.icon.inactive, option.iconClass],
                                  "aria-hidden": "true"
                                }, null, 8, ["name", "class"])) : option.avatar ? (openBlock(), createBlock(_component_UAvatar, mergeProps({ key: 1 }, { size: _ctx.uiMenu.option.avatar.size, ...option.avatar }, {
                                  class: _ctx.uiMenu.option.avatar.base,
                                  "aria-hidden": "true"
                                }), null, 16, ["class"])) : option.chip ? (openBlock(), createBlock("span", {
                                  key: 2,
                                  class: _ctx.uiMenu.option.chip.base,
                                  style: { background: `#${option.chip}` }
                                }, null, 6)) : createCommentVNode("", true),
                                createVNode("span", { class: "truncate" }, toDisplayString(typeof option === "string" ? option : option[_ctx.optionAttribute]), 1)
                              ])
                            ], 2),
                            selected ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: [_ctx.uiMenu.option.selectedIcon.wrapper, _ctx.uiMenu.option.selectedIcon.padding]
                            }, [
                              createVNode(_component_UIcon, {
                                name: _ctx.selectedIcon,
                                class: _ctx.uiMenu.option.selectedIcon.base,
                                "aria-hidden": "true"
                              }, null, 8, ["name", "class"])
                            ], 2)) : createCommentVNode("", true)
                          ], 2)
                        ];
                      }
                    }),
                    _: 2
                  }), _parent3, _scopeId2);
                });
                _push3(`<!--]-->`);
                if (_ctx.creatable && _ctx.queryOption && !_ctx.filteredOptions.length) {
                  ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(_ctx.searchable ? "HComboboxOption" : "HListboxOption"), {
                    value: _ctx.queryOption,
                    as: "template"
                  }, {
                    default: withCtx(({ active, selected }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<li class="${ssrRenderClass([_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive])}"${_scopeId3}><div class="${ssrRenderClass(_ctx.uiMenu.option.container)}"${_scopeId3}>`);
                        ssrRenderSlot(_ctx.$slots, "option-create", {
                          option: _ctx.queryOption,
                          active,
                          selected
                        }, () => {
                          _push4(`<span class="block truncate"${_scopeId3}>Create &quot;${ssrInterpolate(_ctx.queryOption[_ctx.optionAttribute])}&quot;</span>`);
                        }, _push4, _parent4, _scopeId3);
                        _push4(`</div></li>`);
                      } else {
                        return [
                          createVNode("li", {
                            class: [_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive]
                          }, [
                            createVNode("div", {
                              class: _ctx.uiMenu.option.container
                            }, [
                              renderSlot(_ctx.$slots, "option-create", {
                                option: _ctx.queryOption,
                                active,
                                selected
                              }, () => [
                                createVNode("span", { class: "block truncate" }, 'Create "' + toDisplayString(_ctx.queryOption[_ctx.optionAttribute]) + '"', 1)
                              ])
                            ], 2)
                          ], 2)
                        ];
                      }
                    }),
                    _: 2
                  }), _parent3, _scopeId2);
                } else if (_ctx.searchable && _ctx.query && !_ctx.filteredOptions.length) {
                  _push3(`<p class="${ssrRenderClass(_ctx.uiMenu.option.empty)}"${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "option-empty", { query: _ctx.query }, () => {
                    _push3(` No results for &quot;${ssrInterpolate(_ctx.query)}&quot;. `);
                  }, _push3, _parent3, _scopeId2);
                  _push3(`</p>`);
                } else {
                  _push3(`<!---->`);
                }
              } else {
                return [
                  _ctx.searchable ? (openBlock(), createBlock(_component_HComboboxInput, {
                    key: 0,
                    ref: "searchInput",
                    "display-value": () => _ctx.query,
                    name: "q",
                    placeholder: _ctx.searchablePlaceholder,
                    autofocus: "",
                    autocomplete: "off",
                    class: _ctx.uiMenu.input,
                    onChange: ($event) => _ctx.query = $event.target.value
                  }, null, 8, ["display-value", "placeholder", "class", "onChange"])) : createCommentVNode("", true),
                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.filteredOptions, (option, index) => {
                    return openBlock(), createBlock(resolveDynamicComponent(_ctx.searchable ? "HComboboxOption" : "HListboxOption"), {
                      key: index,
                      as: "template",
                      value: _ctx.valueAttribute ? option[_ctx.valueAttribute] : option,
                      disabled: option.disabled
                    }, {
                      default: withCtx(({ active, selected, disabled: optionDisabled }) => [
                        createVNode("li", {
                          class: [_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive, selected && _ctx.uiMenu.option.selected, optionDisabled && _ctx.uiMenu.option.disabled]
                        }, [
                          createVNode("div", {
                            class: _ctx.uiMenu.option.container
                          }, [
                            renderSlot(_ctx.$slots, "option", {
                              option,
                              active,
                              selected
                            }, () => [
                              option.icon ? (openBlock(), createBlock(_component_UIcon, {
                                key: 0,
                                name: option.icon,
                                class: [_ctx.uiMenu.option.icon.base, active ? _ctx.uiMenu.option.icon.active : _ctx.uiMenu.option.icon.inactive, option.iconClass],
                                "aria-hidden": "true"
                              }, null, 8, ["name", "class"])) : option.avatar ? (openBlock(), createBlock(_component_UAvatar, mergeProps({ key: 1 }, { size: _ctx.uiMenu.option.avatar.size, ...option.avatar }, {
                                class: _ctx.uiMenu.option.avatar.base,
                                "aria-hidden": "true"
                              }), null, 16, ["class"])) : option.chip ? (openBlock(), createBlock("span", {
                                key: 2,
                                class: _ctx.uiMenu.option.chip.base,
                                style: { background: `#${option.chip}` }
                              }, null, 6)) : createCommentVNode("", true),
                              createVNode("span", { class: "truncate" }, toDisplayString(typeof option === "string" ? option : option[_ctx.optionAttribute]), 1)
                            ])
                          ], 2),
                          selected ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: [_ctx.uiMenu.option.selectedIcon.wrapper, _ctx.uiMenu.option.selectedIcon.padding]
                          }, [
                            createVNode(_component_UIcon, {
                              name: _ctx.selectedIcon,
                              class: _ctx.uiMenu.option.selectedIcon.base,
                              "aria-hidden": "true"
                            }, null, 8, ["name", "class"])
                          ], 2)) : createCommentVNode("", true)
                        ], 2)
                      ]),
                      _: 2
                    }, 1032, ["value", "disabled"]);
                  }), 128)),
                  _ctx.creatable && _ctx.queryOption && !_ctx.filteredOptions.length ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.searchable ? "HComboboxOption" : "HListboxOption"), {
                    key: 1,
                    value: _ctx.queryOption,
                    as: "template"
                  }, {
                    default: withCtx(({ active, selected }) => [
                      createVNode("li", {
                        class: [_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive]
                      }, [
                        createVNode("div", {
                          class: _ctx.uiMenu.option.container
                        }, [
                          renderSlot(_ctx.$slots, "option-create", {
                            option: _ctx.queryOption,
                            active,
                            selected
                          }, () => [
                            createVNode("span", { class: "block truncate" }, 'Create "' + toDisplayString(_ctx.queryOption[_ctx.optionAttribute]) + '"', 1)
                          ])
                        ], 2)
                      ], 2)
                    ]),
                    _: 3
                  }, 8, ["value"])) : _ctx.searchable && _ctx.query && !_ctx.filteredOptions.length ? (openBlock(), createBlock("p", {
                    key: 2,
                    class: _ctx.uiMenu.option.empty
                  }, [
                    renderSlot(_ctx.$slots, "option-empty", { query: _ctx.query }, () => [
                      createTextVNode(' No results for "' + toDisplayString(_ctx.query) + '". ', 1)
                    ])
                  ], 2)) : createCommentVNode("", true)
                ];
              }
            }),
            _: 2
          }), _parent2, _scopeId);
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          _ctx.required ? (openBlock(), createBlock("input", {
            key: 0,
            value: _ctx.modelValue,
            required: _ctx.required,
            class: "absolute inset-0 w-px opacity-0 cursor-default",
            tabindex: "-1",
            "aria-hidden": "true"
          }, null, 8, ["value", "required"])) : createCommentVNode("", true),
          (openBlock(), createBlock(resolveDynamicComponent(_ctx.searchable ? "HComboboxButton" : "HListboxButton"), {
            ref: "trigger",
            as: "div",
            role: "button",
            class: "inline-flex w-full"
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "default", {
                open,
                disabled: _ctx.disabled,
                loading: _ctx.loading
              }, () => [
                createVNode("button", mergeProps({
                  class: _ctx.selectClass,
                  disabled: _ctx.disabled || _ctx.loading,
                  type: "button"
                }, _ctx.attrs), [
                  _ctx.isLeading && _ctx.leadingIconName || _ctx.$slots.leading ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: _ctx.leadingWrapperIconClass
                  }, [
                    renderSlot(_ctx.$slots, "leading", {
                      disabled: _ctx.disabled,
                      loading: _ctx.loading
                    }, () => [
                      createVNode(_component_UIcon, {
                        name: _ctx.leadingIconName,
                        class: _ctx.leadingIconClass
                      }, null, 8, ["name", "class"])
                    ])
                  ], 2)) : createCommentVNode("", true),
                  renderSlot(_ctx.$slots, "label", {}, () => [
                    _ctx.multiple && Array.isArray(_ctx.modelValue) && _ctx.modelValue.length ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: "block truncate"
                    }, toDisplayString(_ctx.modelValue.length) + " selected", 1)) : !_ctx.multiple && _ctx.modelValue ? (openBlock(), createBlock("span", {
                      key: 1,
                      class: "block truncate"
                    }, toDisplayString(typeof _ctx.modelValue === "string" ? _ctx.modelValue : _ctx.modelValue[_ctx.optionAttribute]), 1)) : (openBlock(), createBlock("span", {
                      key: 2,
                      class: ["block truncate", _ctx.uiMenu.placeholder]
                    }, toDisplayString(_ctx.placeholder || "\xA0"), 3))
                  ]),
                  _ctx.isTrailing && _ctx.trailingIconName || _ctx.$slots.trailing ? (openBlock(), createBlock("span", {
                    key: 1,
                    class: _ctx.trailingWrapperIconClass
                  }, [
                    renderSlot(_ctx.$slots, "trailing", {
                      disabled: _ctx.disabled,
                      loading: _ctx.loading
                    }, () => [
                      createVNode(_component_UIcon, {
                        name: _ctx.trailingIconName,
                        class: _ctx.trailingIconClass,
                        "aria-hidden": "true"
                      }, null, 8, ["name", "class"])
                    ])
                  ], 2)) : createCommentVNode("", true)
                ], 16, ["disabled"])
              ])
            ]),
            _: 2
          }, 1536)),
          open ? (openBlock(), createBlock("div", {
            key: 1,
            ref: "container",
            class: [_ctx.uiMenu.container, _ctx.uiMenu.width]
          }, [
            createVNode(Transition, mergeProps({ appear: "" }, _ctx.uiMenu.transition), {
              default: withCtx(() => [
                (openBlock(), createBlock(resolveDynamicComponent(_ctx.searchable ? "HComboboxOptions" : "HListboxOptions"), {
                  static: "",
                  class: [_ctx.uiMenu.base, _ctx.uiMenu.divide, _ctx.uiMenu.ring, _ctx.uiMenu.rounded, _ctx.uiMenu.shadow, _ctx.uiMenu.background, _ctx.uiMenu.padding, _ctx.uiMenu.height]
                }, {
                  default: withCtx(() => [
                    _ctx.searchable ? (openBlock(), createBlock(_component_HComboboxInput, {
                      key: 0,
                      ref: "searchInput",
                      "display-value": () => _ctx.query,
                      name: "q",
                      placeholder: _ctx.searchablePlaceholder,
                      autofocus: "",
                      autocomplete: "off",
                      class: _ctx.uiMenu.input,
                      onChange: ($event) => _ctx.query = $event.target.value
                    }, null, 8, ["display-value", "placeholder", "class", "onChange"])) : createCommentVNode("", true),
                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.filteredOptions, (option, index) => {
                      return openBlock(), createBlock(resolveDynamicComponent(_ctx.searchable ? "HComboboxOption" : "HListboxOption"), {
                        key: index,
                        as: "template",
                        value: _ctx.valueAttribute ? option[_ctx.valueAttribute] : option,
                        disabled: option.disabled
                      }, {
                        default: withCtx(({ active, selected, disabled: optionDisabled }) => [
                          createVNode("li", {
                            class: [_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive, selected && _ctx.uiMenu.option.selected, optionDisabled && _ctx.uiMenu.option.disabled]
                          }, [
                            createVNode("div", {
                              class: _ctx.uiMenu.option.container
                            }, [
                              renderSlot(_ctx.$slots, "option", {
                                option,
                                active,
                                selected
                              }, () => [
                                option.icon ? (openBlock(), createBlock(_component_UIcon, {
                                  key: 0,
                                  name: option.icon,
                                  class: [_ctx.uiMenu.option.icon.base, active ? _ctx.uiMenu.option.icon.active : _ctx.uiMenu.option.icon.inactive, option.iconClass],
                                  "aria-hidden": "true"
                                }, null, 8, ["name", "class"])) : option.avatar ? (openBlock(), createBlock(_component_UAvatar, mergeProps({ key: 1 }, { size: _ctx.uiMenu.option.avatar.size, ...option.avatar }, {
                                  class: _ctx.uiMenu.option.avatar.base,
                                  "aria-hidden": "true"
                                }), null, 16, ["class"])) : option.chip ? (openBlock(), createBlock("span", {
                                  key: 2,
                                  class: _ctx.uiMenu.option.chip.base,
                                  style: { background: `#${option.chip}` }
                                }, null, 6)) : createCommentVNode("", true),
                                createVNode("span", { class: "truncate" }, toDisplayString(typeof option === "string" ? option : option[_ctx.optionAttribute]), 1)
                              ])
                            ], 2),
                            selected ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: [_ctx.uiMenu.option.selectedIcon.wrapper, _ctx.uiMenu.option.selectedIcon.padding]
                            }, [
                              createVNode(_component_UIcon, {
                                name: _ctx.selectedIcon,
                                class: _ctx.uiMenu.option.selectedIcon.base,
                                "aria-hidden": "true"
                              }, null, 8, ["name", "class"])
                            ], 2)) : createCommentVNode("", true)
                          ], 2)
                        ]),
                        _: 2
                      }, 1032, ["value", "disabled"]);
                    }), 128)),
                    _ctx.creatable && _ctx.queryOption && !_ctx.filteredOptions.length ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.searchable ? "HComboboxOption" : "HListboxOption"), {
                      key: 1,
                      value: _ctx.queryOption,
                      as: "template"
                    }, {
                      default: withCtx(({ active, selected }) => [
                        createVNode("li", {
                          class: [_ctx.uiMenu.option.base, _ctx.uiMenu.option.rounded, _ctx.uiMenu.option.padding, _ctx.uiMenu.option.size, _ctx.uiMenu.option.color, active ? _ctx.uiMenu.option.active : _ctx.uiMenu.option.inactive]
                        }, [
                          createVNode("div", {
                            class: _ctx.uiMenu.option.container
                          }, [
                            renderSlot(_ctx.$slots, "option-create", {
                              option: _ctx.queryOption,
                              active,
                              selected
                            }, () => [
                              createVNode("span", { class: "block truncate" }, 'Create "' + toDisplayString(_ctx.queryOption[_ctx.optionAttribute]) + '"', 1)
                            ])
                          ], 2)
                        ], 2)
                      ]),
                      _: 3
                    }, 8, ["value"])) : _ctx.searchable && _ctx.query && !_ctx.filteredOptions.length ? (openBlock(), createBlock("p", {
                      key: 2,
                      class: _ctx.uiMenu.option.empty
                    }, [
                      renderSlot(_ctx.$slots, "option-empty", { query: _ctx.query }, () => [
                        createTextVNode(' No results for "' + toDisplayString(_ctx.query) + '". ', 1)
                      ])
                    ], 2)) : createCommentVNode("", true)
                  ]),
                  _: 3
                }, 8, ["class"]))
              ]),
              _: 3
            }, 16)
          ], 2)) : createCommentVNode("", true)
        ];
      }
    }),
    _: 3
  }), _parent);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/forms/SelectMenu.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SelectMenu = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { SelectMenu as default };
//# sourceMappingURL=SelectMenu-18aee05e.mjs.map

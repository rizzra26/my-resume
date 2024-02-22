import { defineComponent, ref, computed, toRaw, provide, onMounted, watch, h, Fragment, watchEffect, onUnmounted, nextTick, inject } from 'vue';
import { u, o, K, H, T, t, N, a as o$1 } from './dom-075ad068.mjs';
import { x, a, p as p$1, u as u$1 } from './use-tracked-pointer-4d7dbbdb.mjs';
import { c, l, p } from './open-closed-4c4062c8.mjs';
import { b } from './use-resolve-button-type-de78c0b4.mjs';
import { m, O } from './focus-management-ebae29a2.mjs';
import { y } from './use-outside-click-a351c925.mjs';
import { f, a as a$1 } from './hidden-990651e2.mjs';
import { d, e } from './use-controllable-8cdd501d.mjs';
import { o as o$2, n } from './disposables-a9659b4d.mjs';

function Oe(l2, y2) {
  return l2 === y2;
}
var Se = ((r) => (r[r.Open = 0] = "Open", r[r.Closed = 1] = "Closed", r))(Se || {}), Ce = ((r) => (r[r.Single = 0] = "Single", r[r.Multi = 1] = "Multi", r))(Ce || {}), ge = ((r) => (r[r.Pointer = 0] = "Pointer", r[r.Other = 1] = "Other", r))(ge || {});
let Y = Symbol("ComboboxContext");
function $(l2) {
  let y2 = inject(Y, null);
  if (y2 === null) {
    let r = new Error(`<${l2} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, $), r;
  }
  return y2;
}
let Je = defineComponent({ name: "Combobox", emits: { "update:modelValue": (l2) => true }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: false }, by: { type: [String, Function], default: () => Oe }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, form: { type: String, optional: true }, name: { type: String, optional: true }, nullable: { type: Boolean, default: false }, multiple: { type: [Boolean], default: false } }, inheritAttrs: false, setup(l$1, { slots: y$1, attrs: r, emit: w }) {
  let e$1 = ref(1), t2 = ref(null), S = ref(null), p2 = ref(null), d$1 = ref(null), b2 = ref({ static: false, hold: false }), v = ref([]), O$1 = ref(null), I = ref(1), P = ref(false);
  function j(n2 = (u2) => u2) {
    let u2 = O$1.value !== null ? v.value[O$1.value] : null, s = O(n2(v.value.slice()), (f2) => o(f2.dataRef.domRef)), a2 = u2 ? s.indexOf(u2) : null;
    return a2 === -1 && (a2 = null), { options: s, activeOptionIndex: a2 };
  }
  let k = computed(() => l$1.multiple ? 1 : 0), m2 = computed(() => l$1.nullable), [o$12, h$1] = d(computed(() => l$1.modelValue), (n2) => w("update:modelValue", n2), computed(() => l$1.defaultValue)), C = computed(() => o$12.value === void 0 ? u(k.value, { [1]: [], [0]: void 0 }) : o$12.value), E = null, R = null, i = { comboboxState: e$1, value: C, mode: k, compare(n2, u2) {
    if (typeof l$1.by == "string") {
      let s = l$1.by;
      return (n2 == null ? void 0 : n2[s]) === (u2 == null ? void 0 : u2[s]);
    }
    return l$1.by(n2, u2);
  }, defaultValue: computed(() => l$1.defaultValue), nullable: m2, inputRef: S, labelRef: t2, buttonRef: p2, optionsRef: d$1, disabled: computed(() => l$1.disabled), options: v, change(n2) {
    h$1(n2);
  }, activeOptionIndex: computed(() => {
    if (P.value && O$1.value === null && v.value.length > 0) {
      let n2 = v.value.findIndex((u2) => !u2.dataRef.disabled);
      n2 !== -1 && (O$1.value = n2);
    }
    return O$1.value;
  }), activationTrigger: I, optionsPropsRef: b2, closeCombobox() {
    P.value = false, !l$1.disabled && e$1.value !== 1 && (e$1.value = 1, O$1.value = null);
  }, openCombobox() {
    if (P.value = true, l$1.disabled || e$1.value === 0)
      return;
    let n2 = v.value.findIndex((u$12) => {
      let s = toRaw(u$12.dataRef.value);
      return u(k.value, { [0]: () => i.compare(toRaw(i.value.value), toRaw(s)), [1]: () => toRaw(i.value.value).some((f2) => i.compare(toRaw(f2), toRaw(s))) });
    });
    n2 !== -1 && (O$1.value = n2), e$1.value = 0;
  }, goToOption(n2, u2, s) {
    P.value = false, E !== null && cancelAnimationFrame(E), E = requestAnimationFrame(() => {
      if (l$1.disabled || d$1.value && !b2.value.static && e$1.value === 1)
        return;
      let a$12 = j();
      if (a$12.activeOptionIndex === null) {
        let T2 = a$12.options.findIndex((B) => !B.dataRef.disabled);
        T2 !== -1 && (a$12.activeOptionIndex = T2);
      }
      let f2 = x(n2 === a.Specific ? { focus: a.Specific, id: u2 } : { focus: n2 }, { resolveItems: () => a$12.options, resolveActiveIndex: () => a$12.activeOptionIndex, resolveId: (T2) => T2.id, resolveDisabled: (T2) => T2.dataRef.disabled });
      O$1.value = f2, I.value = s != null ? s : 1, v.value = a$12.options;
    });
  }, selectOption(n2) {
    let u$12 = v.value.find((a2) => a2.id === n2);
    if (!u$12)
      return;
    let { dataRef: s } = u$12;
    h$1(u(k.value, { [0]: () => s.value, [1]: () => {
      let a2 = toRaw(i.value.value).slice(), f2 = toRaw(s.value), T2 = a2.findIndex((B) => i.compare(f2, toRaw(B)));
      return T2 === -1 ? a2.push(f2) : a2.splice(T2, 1), a2;
    } }));
  }, selectActiveOption() {
    if (i.activeOptionIndex.value === null)
      return;
    let { dataRef: n2, id: u$12 } = v.value[i.activeOptionIndex.value];
    h$1(u(k.value, { [0]: () => n2.value, [1]: () => {
      let s = toRaw(i.value.value).slice(), a2 = toRaw(n2.value), f2 = s.findIndex((T2) => i.compare(a2, toRaw(T2)));
      return f2 === -1 ? s.push(a2) : s.splice(f2, 1), s;
    } })), i.goToOption(a.Specific, u$12);
  }, registerOption(n2, u$12) {
    R && cancelAnimationFrame(R);
    let s = { id: n2, dataRef: u$12 }, a2 = j((f2) => (f2.push(s), f2));
    if (O$1.value === null) {
      let f2 = u$12.value.value;
      u(k.value, { [0]: () => i.compare(toRaw(i.value.value), toRaw(f2)), [1]: () => toRaw(i.value.value).some((B) => i.compare(toRaw(B), toRaw(f2))) }) && (a2.activeOptionIndex = a2.options.indexOf(s));
    }
    v.value = a2.options, O$1.value = a2.activeOptionIndex, I.value = 1, a2.options.some((f2) => !o(f2.dataRef.domRef)) && (R = requestAnimationFrame(() => {
      let f2 = j();
      v.value = f2.options, O$1.value = f2.activeOptionIndex;
    }));
  }, unregisterOption(n2) {
    var s;
    i.activeOptionIndex.value !== null && ((s = i.options.value[i.activeOptionIndex.value]) == null ? void 0 : s.id) === n2 && (P.value = true);
    let u2 = j((a2) => {
      let f2 = a2.findIndex((T2) => T2.id === n2);
      return f2 !== -1 && a2.splice(f2, 1), a2;
    });
    v.value = u2.options, O$1.value = u2.activeOptionIndex, I.value = 1;
  } };
  y([S, p2, d$1], () => i.closeCombobox(), computed(() => e$1.value === 0)), provide(Y, i), c(computed(() => u(e$1.value, { [0]: l.Open, [1]: l.Closed })));
  let A = computed(() => i.activeOptionIndex.value === null ? null : v.value[i.activeOptionIndex.value].dataRef.value), F = computed(() => {
    var n2;
    return (n2 = o(S)) == null ? void 0 : n2.closest("form");
  });
  return onMounted(() => {
    watch([F], () => {
      if (!F.value || l$1.defaultValue === void 0)
        return;
      function n2() {
        i.change(l$1.defaultValue);
      }
      return F.value.addEventListener("reset", n2), () => {
        var u2;
        (u2 = F.value) == null || u2.removeEventListener("reset", n2);
      };
    }, { immediate: true });
  }), () => {
    let { name: n2, disabled: u2, form: s, ...a2 } = l$1, f$1 = { open: e$1.value === 0, disabled: u2, activeIndex: i.activeOptionIndex.value, activeOption: A.value, value: C.value };
    return h(Fragment, [...n2 != null && C.value != null ? e({ [n2]: C.value }).map(([T2, B]) => h(f, K({ features: a$1.Hidden, key: T2, as: "input", type: "hidden", hidden: true, readOnly: true, form: s, name: T2, value: B }))) : [], H({ theirProps: { ...r, ...T(a2, ["modelValue", "defaultValue", "nullable", "multiple", "onUpdate:modelValue", "by"]) }, ourProps: {}, slot: f$1, slots: y$1, attrs: r, name: "Combobox" })]);
  };
} });
defineComponent({ name: "ComboboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: () => `headlessui-combobox-label-${t()}` } }, setup(l2, { attrs: y2, slots: r }) {
  let w = $("ComboboxLabel");
  function e2() {
    var t2;
    (t2 = o(w.inputRef)) == null || t2.focus({ preventScroll: true });
  }
  return () => {
    let t2 = { open: w.comboboxState.value === 0, disabled: w.disabled.value }, { id: S, ...p2 } = l2, d2 = { id: S, ref: w.labelRef, onClick: e2 };
    return H({ ourProps: d2, theirProps: p2, slot: t2, attrs: y2, slots: r, name: "ComboboxLabel" });
  };
} });
let Ge = defineComponent({ name: "ComboboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: () => `headlessui-combobox-button-${t()}` } }, setup(l2, { attrs: y2, slots: r, expose: w }) {
  let e2 = $("ComboboxButton");
  w({ el: e2.buttonRef, $el: e2.buttonRef });
  function t2(d2) {
    e2.disabled.value || (e2.comboboxState.value === 0 ? e2.closeCombobox() : (d2.preventDefault(), e2.openCombobox()), nextTick(() => {
      var b2;
      return (b2 = o(e2.inputRef)) == null ? void 0 : b2.focus({ preventScroll: true });
    }));
  }
  function S(d2) {
    switch (d2.key) {
      case o$1.ArrowDown:
        d2.preventDefault(), d2.stopPropagation(), e2.comboboxState.value === 1 && e2.openCombobox(), nextTick(() => {
          var b2;
          return (b2 = e2.inputRef.value) == null ? void 0 : b2.focus({ preventScroll: true });
        });
        return;
      case o$1.ArrowUp:
        d2.preventDefault(), d2.stopPropagation(), e2.comboboxState.value === 1 && (e2.openCombobox(), nextTick(() => {
          e2.value.value || e2.goToOption(a.Last);
        })), nextTick(() => {
          var b2;
          return (b2 = e2.inputRef.value) == null ? void 0 : b2.focus({ preventScroll: true });
        });
        return;
      case o$1.Escape:
        if (e2.comboboxState.value !== 0)
          return;
        d2.preventDefault(), e2.optionsRef.value && !e2.optionsPropsRef.value.static && d2.stopPropagation(), e2.closeCombobox(), nextTick(() => {
          var b2;
          return (b2 = e2.inputRef.value) == null ? void 0 : b2.focus({ preventScroll: true });
        });
        return;
    }
  }
  let p2 = b(computed(() => ({ as: l2.as, type: y2.type })), e2.buttonRef);
  return () => {
    var I, P;
    let d2 = { open: e2.comboboxState.value === 0, disabled: e2.disabled.value, value: e2.value.value }, { id: b2, ...v } = l2, O2 = { ref: e2.buttonRef, id: b2, type: p2.value, tabindex: "-1", "aria-haspopup": "listbox", "aria-controls": (I = o(e2.optionsRef)) == null ? void 0 : I.id, "aria-expanded": e2.comboboxState.value === 0, "aria-labelledby": e2.labelRef.value ? [(P = o(e2.labelRef)) == null ? void 0 : P.id, b2].join(" ") : void 0, disabled: e2.disabled.value === true ? true : void 0, onKeydown: S, onClick: t2 };
    return H({ ourProps: O2, theirProps: v, slot: d2, attrs: y2, slots: r, name: "ComboboxButton" });
  };
} }), Qe = defineComponent({ name: "ComboboxInput", props: { as: { type: [Object, String], default: "input" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, displayValue: { type: Function }, defaultValue: { type: String, default: void 0 }, id: { type: String, default: () => `headlessui-combobox-input-${t()}` } }, emits: { change: (l2) => true }, setup(l2, { emit: y2, attrs: r, slots: w, expose: e2 }) {
  let t2 = $("ComboboxInput"), S = computed(() => m(o(t2.inputRef))), p2 = { value: false };
  e2({ el: t2.inputRef, $el: t2.inputRef });
  function d2() {
    t2.change(null);
    let o$12 = o(t2.optionsRef);
    o$12 && (o$12.scrollTop = 0), t2.goToOption(a.Nothing);
  }
  let b2 = computed(() => {
    var h2;
    let o$12 = t2.value.value;
    return o(t2.inputRef) ? typeof l2.displayValue != "undefined" && o$12 !== void 0 ? (h2 = l2.displayValue(o$12)) != null ? h2 : "" : typeof o$12 == "string" ? o$12 : "" : "";
  });
  onMounted(() => {
    watch([b2, t2.comboboxState, S], ([o$12, h2], [C, E]) => {
      if (p2.value)
        return;
      let R = o(t2.inputRef);
      R && ((E === 0 && h2 === 1 || o$12 !== C) && (R.value = o$12), requestAnimationFrame(() => {
        var F;
        if (p2.value || !R || ((F = S.value) == null ? void 0 : F.activeElement) !== R)
          return;
        let { selectionStart: i, selectionEnd: A } = R;
        Math.abs((A != null ? A : 0) - (i != null ? i : 0)) === 0 && i === 0 && R.setSelectionRange(R.value.length, R.value.length);
      }));
    }, { immediate: true }), watch([t2.comboboxState], ([o$12], [h2]) => {
      if (o$12 === 0 && h2 === 1) {
        if (p2.value)
          return;
        let C = o(t2.inputRef);
        if (!C)
          return;
        let E = C.value, { selectionStart: R, selectionEnd: i, selectionDirection: A } = C;
        C.value = "", C.value = E, A !== null ? C.setSelectionRange(R, i, A) : C.setSelectionRange(R, i);
      }
    });
  });
  let v = ref(false);
  function O2() {
    v.value = true;
  }
  function I() {
    o$2().nextFrame(() => {
      v.value = false;
    });
  }
  function P(o2) {
    switch (p2.value = true, o2.key) {
      case o$1.Enter:
        if (p2.value = false, t2.comboboxState.value !== 0 || v.value)
          return;
        if (o2.preventDefault(), o2.stopPropagation(), t2.activeOptionIndex.value === null) {
          t2.closeCombobox();
          return;
        }
        t2.selectActiveOption(), t2.mode.value === 0 && t2.closeCombobox();
        break;
      case o$1.ArrowDown:
        return p2.value = false, o2.preventDefault(), o2.stopPropagation(), u(t2.comboboxState.value, { [0]: () => t2.goToOption(a.Next), [1]: () => t2.openCombobox() });
      case o$1.ArrowUp:
        return p2.value = false, o2.preventDefault(), o2.stopPropagation(), u(t2.comboboxState.value, { [0]: () => t2.goToOption(a.Previous), [1]: () => {
          t2.openCombobox(), nextTick(() => {
            t2.value.value || t2.goToOption(a.Last);
          });
        } });
      case o$1.Home:
        if (o2.shiftKey)
          break;
        return p2.value = false, o2.preventDefault(), o2.stopPropagation(), t2.goToOption(a.First);
      case o$1.PageUp:
        return p2.value = false, o2.preventDefault(), o2.stopPropagation(), t2.goToOption(a.First);
      case o$1.End:
        if (o2.shiftKey)
          break;
        return p2.value = false, o2.preventDefault(), o2.stopPropagation(), t2.goToOption(a.Last);
      case o$1.PageDown:
        return p2.value = false, o2.preventDefault(), o2.stopPropagation(), t2.goToOption(a.Last);
      case o$1.Escape:
        if (p2.value = false, t2.comboboxState.value !== 0)
          return;
        o2.preventDefault(), t2.optionsRef.value && !t2.optionsPropsRef.value.static && o2.stopPropagation(), t2.nullable.value && t2.mode.value === 0 && t2.value.value === null && d2(), t2.closeCombobox();
        break;
      case o$1.Tab:
        if (p2.value = false, t2.comboboxState.value !== 0)
          return;
        t2.mode.value === 0 && t2.selectActiveOption(), t2.closeCombobox();
        break;
    }
  }
  function j(o2) {
    y2("change", o2), t2.nullable.value && t2.mode.value === 0 && o2.target.value === "" && d2(), t2.openCombobox();
  }
  function k() {
    p2.value = false;
  }
  let m$1 = computed(() => {
    var o2, h2, C, E;
    return (E = (C = (h2 = l2.defaultValue) != null ? h2 : t2.defaultValue.value !== void 0 ? (o2 = l2.displayValue) == null ? void 0 : o2.call(l2, t2.defaultValue.value) : null) != null ? C : t2.defaultValue.value) != null ? E : "";
  });
  return () => {
    var A, F, n2, u2, s, a2;
    let o$12 = { open: t2.comboboxState.value === 0 }, { id: h2, displayValue: C, onChange: E, ...R } = l2, i = { "aria-controls": (A = t2.optionsRef.value) == null ? void 0 : A.id, "aria-expanded": t2.comboboxState.value === 0, "aria-activedescendant": t2.activeOptionIndex.value === null || (F = t2.options.value[t2.activeOptionIndex.value]) == null ? void 0 : F.id, "aria-labelledby": (s = (n2 = o(t2.labelRef)) == null ? void 0 : n2.id) != null ? s : (u2 = o(t2.buttonRef)) == null ? void 0 : u2.id, "aria-autocomplete": "list", id: h2, onCompositionstart: O2, onCompositionend: I, onKeydown: P, onInput: j, onBlur: k, role: "combobox", type: (a2 = r.type) != null ? a2 : "text", tabIndex: 0, ref: t2.inputRef, defaultValue: m$1.value, disabled: t2.disabled.value === true ? true : void 0 };
    return H({ ourProps: i, theirProps: R, slot: o$12, attrs: r, slots: w, features: N.RenderStrategy | N.Static, name: "ComboboxInput" });
  };
} }), Xe = defineComponent({ name: "ComboboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, hold: { type: [Boolean], default: false } }, setup(l$1, { attrs: y2, slots: r, expose: w }) {
  let e2 = $("ComboboxOptions"), t$1 = `headlessui-combobox-options-${t()}`;
  w({ el: e2.optionsRef, $el: e2.optionsRef }), watchEffect(() => {
    e2.optionsPropsRef.value.static = l$1.static;
  }), watchEffect(() => {
    e2.optionsPropsRef.value.hold = l$1.hold;
  });
  let S = p(), p$2 = computed(() => S !== null ? (S.value & l.Open) === l.Open : e2.comboboxState.value === 0);
  return p$1({ container: computed(() => o(e2.optionsRef)), enabled: computed(() => e2.comboboxState.value === 0), accept(d2) {
    return d2.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : d2.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(d2) {
    d2.setAttribute("role", "none");
  } }), () => {
    var O2, I, P;
    let d2 = { open: e2.comboboxState.value === 0 }, b2 = { "aria-labelledby": (P = (O2 = o(e2.labelRef)) == null ? void 0 : O2.id) != null ? P : (I = o(e2.buttonRef)) == null ? void 0 : I.id, id: t$1, ref: e2.optionsRef, role: "listbox", "aria-multiselectable": e2.mode.value === 1 ? true : void 0 }, v = T(l$1, ["hold"]);
    return H({ ourProps: b2, theirProps: v, slot: d2, attrs: y2, slots: r, features: N.RenderStrategy | N.Static, visible: p$2.value, name: "ComboboxOptions" });
  };
} }), Ye = defineComponent({ name: "ComboboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: false } }, setup(l2, { slots: y2, attrs: r, expose: w }) {
  let e2 = $("ComboboxOption"), t$1 = `headlessui-combobox-option-${t()}`, S = ref(null);
  w({ el: S, $el: S });
  let p2 = computed(() => e2.activeOptionIndex.value !== null ? e2.options.value[e2.activeOptionIndex.value].id === t$1 : false), d2 = computed(() => u(e2.mode.value, { [0]: () => e2.compare(toRaw(e2.value.value), toRaw(l2.value)), [1]: () => toRaw(e2.value.value).some((m2) => e2.compare(toRaw(m2), toRaw(l2.value))) })), b2 = computed(() => ({ disabled: l2.disabled, value: l2.value, domRef: S }));
  onMounted(() => e2.registerOption(t$1, b2)), onUnmounted(() => e2.unregisterOption(t$1)), watchEffect(() => {
    e2.comboboxState.value === 0 && p2.value && e2.activationTrigger.value !== 0 && nextTick(() => {
      var m2, o$12;
      return (o$12 = (m2 = o(S)) == null ? void 0 : m2.scrollIntoView) == null ? void 0 : o$12.call(m2, { block: "nearest" });
    });
  });
  function v(m2) {
    if (l2.disabled)
      return m2.preventDefault();
    e2.selectOption(t$1), e2.mode.value === 0 && e2.closeCombobox(), n() || requestAnimationFrame(() => {
      var o$12;
      return (o$12 = o(e2.inputRef)) == null ? void 0 : o$12.focus();
    });
  }
  function O2() {
    if (l2.disabled)
      return e2.goToOption(a.Nothing);
    e2.goToOption(a.Specific, t$1);
  }
  let I = u$1();
  function P(m2) {
    I.update(m2);
  }
  function j(m2) {
    I.wasMoved(m2) && (l2.disabled || p2.value || e2.goToOption(a.Specific, t$1, 0));
  }
  function k(m2) {
    I.wasMoved(m2) && (l2.disabled || p2.value && (e2.optionsPropsRef.value.hold || e2.goToOption(a.Nothing)));
  }
  return () => {
    let { disabled: m2 } = l2, o2 = { active: p2.value, selected: d2.value, disabled: m2 }, h2 = { id: t$1, ref: S, role: "option", tabIndex: m2 === true ? void 0 : -1, "aria-disabled": m2 === true ? true : void 0, "aria-selected": d2.value, disabled: void 0, onClick: v, onFocus: O2, onPointerenter: P, onMouseenter: P, onPointermove: j, onMousemove: j, onPointerleave: k, onMouseleave: k };
    return H({ ourProps: h2, theirProps: l2, slot: o2, attrs: r, slots: y2, name: "ComboboxOption" });
  };
} });

export { Ge as G, Je as J, Qe as Q, Xe as X, Ye as Y };
//# sourceMappingURL=combobox-7aea91ec.mjs.map

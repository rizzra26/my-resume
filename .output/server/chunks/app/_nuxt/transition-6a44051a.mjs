import { defineComponent, ref, computed, onMounted, onUnmounted, h, Fragment, watchEffect, watch, inject, provide, nextTick, normalizeClass, shallowRef } from 'vue';
import { H, o, t as t$2, u as u$1, a as o$1, N as N$3, S as S$2, T as T$1 } from './dom-075ad068.mjs';
import { f, a as a$2 } from './hidden-990651e2.mjs';
import { m as m$3, S as S$1, P, N as N$2, T, c as c$1$1 } from './focus-management-ebae29a2.mjs';
import { n, E as E$1, V, p as p$2, P as P$1, U, _, d as d$2 } from './use-root-containers-aed59af0.mjs';
import { t as t$1 } from './micro-task-304cda21.mjs';
import { M as M$1 } from './description-4de76aed.mjs';
import { p as p$1, l as l$2, C as C$1, c as c$1 } from './open-closed-4c4062c8.mjs';
import { y } from './use-outside-click-a351c925.mjs';
import { o as o$2, t as t$3 } from './disposables-a9659b4d.mjs';

function B(e) {
  if (!e)
    return /* @__PURE__ */ new Set();
  if (typeof e == "function")
    return new Set(e());
  let t2 = /* @__PURE__ */ new Set();
  for (let l2 of e.value) {
    let o$12 = o(l2);
    o$12 instanceof HTMLElement && t2.add(o$12);
  }
  return t2;
}
var A = ((n2) => (n2[n2.None = 1] = "None", n2[n2.InitialFocus = 2] = "InitialFocus", n2[n2.TabLock = 4] = "TabLock", n2[n2.FocusLock = 8] = "FocusLock", n2[n2.RestoreFocus = 16] = "RestoreFocus", n2[n2.All = 30] = "All", n2))(A || {});
let ce$1 = Object.assign(defineComponent({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: [Object, Function], default: ref(/* @__PURE__ */ new Set()) } }, inheritAttrs: false, setup(e, { attrs: t2, slots: l2, expose: o$12 }) {
  let r = ref(null);
  o$12({ el: r, $el: r });
  let i2 = computed(() => m$3(r)), n$1 = ref(false);
  onMounted(() => n$1.value = true), onUnmounted(() => n$1.value = false), z({ ownerDocument: i2 }, computed(() => n$1.value && Boolean(e.features & 16)));
  let m2 = J({ ownerDocument: i2, container: r, initialFocus: computed(() => e.initialFocus) }, computed(() => n$1.value && Boolean(e.features & 2)));
  Q$1({ ownerDocument: i2, container: r, containers: e.containers, previousActiveElement: m2 }, computed(() => n$1.value && Boolean(e.features & 8)));
  let c2 = n();
  function u2(a2) {
    let d2 = o(r);
    if (!d2)
      return;
    ((g2) => g2())(() => {
      u$1(c2.value, { [d$2.Forwards]: () => {
        P(d2, N$2.First, { skipElements: [a2.relatedTarget] });
      }, [d$2.Backwards]: () => {
        P(d2, N$2.Last, { skipElements: [a2.relatedTarget] });
      } });
    });
  }
  let s = ref(false);
  function H$1(a2) {
    a2.key === "Tab" && (s.value = true, requestAnimationFrame(() => {
      s.value = false;
    }));
  }
  function M2(a2) {
    if (!n$1.value)
      return;
    let d2 = B(e.containers);
    o(r) instanceof HTMLElement && d2.add(o(r));
    let E2 = a2.relatedTarget;
    E2 instanceof HTMLElement && E2.dataset.headlessuiFocusGuard !== "true" && (N$1(d2, E2) || (s.value ? P(o(r), u$1(c2.value, { [d$2.Forwards]: () => N$2.Next, [d$2.Backwards]: () => N$2.Previous }) | N$2.WrapAround, { relativeTo: a2.target }) : a2.target instanceof HTMLElement && S$1(a2.target)));
  }
  return () => {
    let a2 = {}, d2 = { ref: r, onKeydown: H$1, onFocusout: M2 }, { features: E2, initialFocus: g2, containers: X, ...O } = e;
    return h(Fragment, [Boolean(E2 & 4) && h(f, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: u2, features: a$2.Focusable }), H({ ourProps: d2, theirProps: { ...t2, ...O }, slot: a2, attrs: t2, slots: l2, name: "FocusTrap" }), Boolean(E2 & 4) && h(f, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: u2, features: a$2.Focusable })]);
  };
} }), { features: A }), L$2 = [];
function x(e) {
  let t2 = ref(L$2.slice());
  return watch([e], ([l2], [o2]) => {
    o2 === true && l2 === false ? t$1(() => {
      t2.value.splice(0);
    }) : o2 === false && l2 === true && (t2.value = L$2.slice());
  }, { flush: "post" }), () => {
    var l2;
    return (l2 = t2.value.find((o2) => o2 != null && o2.isConnected)) != null ? l2 : null;
  };
}
function z({ ownerDocument: e }, t2) {
  let l2 = x(t2);
  onMounted(() => {
    watchEffect(() => {
      var o2, r;
      t2.value || ((o2 = e.value) == null ? void 0 : o2.activeElement) === ((r = e.value) == null ? void 0 : r.body) && S$1(l2());
    }, { flush: "post" });
  }), onUnmounted(() => {
    t2.value && S$1(l2());
  });
}
function J({ ownerDocument: e, container: t2, initialFocus: l2 }, o$12) {
  let r = ref(null), i2 = ref(false);
  return onMounted(() => i2.value = true), onUnmounted(() => i2.value = false), onMounted(() => {
    watch([t2, l2, o$12], (n2, m2) => {
      if (n2.every((u2, s) => (m2 == null ? void 0 : m2[s]) === u2) || !o$12.value)
        return;
      let c2 = o(t2);
      c2 && t$1(() => {
        var H2, M2;
        if (!i2.value)
          return;
        let u2 = o(l2), s = (H2 = e.value) == null ? void 0 : H2.activeElement;
        if (u2) {
          if (u2 === s) {
            r.value = s;
            return;
          }
        } else if (c2.contains(s)) {
          r.value = s;
          return;
        }
        u2 ? S$1(u2) : P(c2, N$2.First | N$2.NoScroll) === T.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), r.value = (M2 = e.value) == null ? void 0 : M2.activeElement;
      });
    }, { immediate: true, flush: "post" });
  }), r;
}
function Q$1({ ownerDocument: e, container: t2, containers: l2, previousActiveElement: o$12 }, r) {
  var i2;
  E$1((i2 = e.value) == null ? void 0 : i2.defaultView, "focus", (n2) => {
    if (!r.value)
      return;
    let m2 = B(l2);
    o(t2) instanceof HTMLElement && m2.add(o(t2));
    let c2 = o$12.value;
    if (!c2)
      return;
    let u2 = n2.target;
    u2 && u2 instanceof HTMLElement ? N$1(m2, u2) ? (o$12.value = u2, S$1(u2)) : (n2.preventDefault(), n2.stopPropagation(), S$1(c2)) : S$1(o$12.value);
  }, true);
}
function N$1(e, t2) {
  for (let l2 of e)
    if (l2.contains(t2))
      return true;
  return false;
}
let i = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
function E(d2, f2 = ref(true)) {
  watchEffect((o$12) => {
    var a2;
    if (!f2.value)
      return;
    let e = o(d2);
    if (!e)
      return;
    o$12(function() {
      var u2;
      if (!e)
        return;
      let r = (u2 = t.get(e)) != null ? u2 : 1;
      if (r === 1 ? t.delete(e) : t.set(e, r - 1), r !== 1)
        return;
      let n2 = i.get(e);
      n2 && (n2["aria-hidden"] === null ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", n2["aria-hidden"]), e.inert = n2.inert, i.delete(e));
    });
    let l2 = (a2 = t.get(e)) != null ? a2 : 0;
    t.set(e, l2 + 1), l2 === 0 && (i.set(e, { "aria-hidden": e.getAttribute("aria-hidden"), inert: e.inert }), e.setAttribute("aria-hidden", "true"), e.inert = true);
  });
}
let u = Symbol("StackContext");
var p = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(p || {});
function v() {
  return inject(u, () => {
  });
}
function S({ type: o2, enabled: r, element: e, onUpdate: i2 }) {
  let a2 = v();
  function t2(...n2) {
    i2 == null || i2(...n2), a2(...n2);
  }
  onMounted(() => {
    watch(r, (n2, d2) => {
      n2 ? t2(0, o2, e) : d2 === true && t2(1, o2, e);
    }, { immediate: true, flush: "sync" });
  }), onUnmounted(() => {
    r.value && t2(1, o2, e);
  }), provide(u, t2);
}
function m$2(t2) {
  let e = shallowRef(t2.getSnapshot());
  return onUnmounted(t2.subscribe(() => {
    e.value = t2.getSnapshot();
  })), e;
}
function a$1(o2, r) {
  let t2 = o2(), n2 = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return t2;
  }, subscribe(e) {
    return n2.add(e), () => n2.delete(e);
  }, dispatch(e, ...s) {
    let i2 = r[e].call(t2, ...s);
    i2 && (t2 = i2, n2.forEach((c2) => c2()));
  } };
}
function c() {
  let o2;
  return { before({ doc: e }) {
    var l2;
    let n2 = e.documentElement;
    o2 = ((l2 = e.defaultView) != null ? l2 : window).innerWidth - n2.clientWidth;
  }, after({ doc: e, d: n2 }) {
    let t2 = e.documentElement, l2 = t2.clientWidth - t2.offsetWidth, r = o2 - l2;
    n2.style(t2, "paddingRight", `${r}px`);
  } };
}
function w() {
  if (!t$3())
    return {};
  let r;
  return { before() {
    r = window.pageYOffset;
  }, after({ doc: n2, d: o2, meta: s }) {
    function i2(e) {
      return s.containers.flatMap((t2) => t2()).some((t2) => t2.contains(e));
    }
    if (window.getComputedStyle(n2.documentElement).scrollBehavior !== "auto") {
      let e = o$2();
      e.style(n2.documentElement, "scroll-behavior", "auto"), o2.add(() => o2.microTask(() => e.dispose()));
    }
    o2.style(n2.body, "marginTop", `-${r}px`), window.scrollTo(0, 0);
    let l2 = null;
    o2.addEventListener(n2, "click", (e) => {
      if (e.target instanceof HTMLElement)
        try {
          let t2 = e.target.closest("a");
          if (!t2)
            return;
          let { hash: c2 } = new URL(t2.href), a2 = n2.querySelector(c2);
          a2 && !i2(a2) && (l2 = a2);
        } catch {
        }
    }, true), o2.addEventListener(n2, "touchmove", (e) => {
      e.target instanceof HTMLElement && !i2(e.target) && e.preventDefault();
    }, { passive: false }), o2.add(() => {
      window.scrollTo(0, window.pageYOffset + r), l2 && l2.isConnected && (l2.scrollIntoView({ block: "nearest" }), l2 = null);
    });
  } };
}
function l$1() {
  return { before({ doc: e, d: o2 }) {
    o2.style(e.documentElement, "overflow", "hidden");
  } };
}
function m$1(e) {
  let n2 = {};
  for (let t2 of e)
    Object.assign(n2, t2(n2));
  return n2;
}
let a = a$1(() => /* @__PURE__ */ new Map(), { PUSH(e, n2) {
  var o2;
  let t2 = (o2 = this.get(e)) != null ? o2 : { doc: e, count: 0, d: o$2(), meta: /* @__PURE__ */ new Set() };
  return t2.count++, t2.meta.add(n2), this.set(e, t2), this;
}, POP(e, n2) {
  let t2 = this.get(e);
  return t2 && (t2.count--, t2.meta.delete(n2)), this;
}, SCROLL_PREVENT({ doc: e, d: n2, meta: t2 }) {
  let o2 = { doc: e, d: n2, meta: m$1(t2) }, c$12 = [w(), c(), l$1()];
  c$12.forEach(({ before: r }) => r == null ? void 0 : r(o2)), c$12.forEach(({ after: r }) => r == null ? void 0 : r(o2));
}, SCROLL_ALLOW({ d: e }) {
  e.dispose();
}, TEARDOWN({ doc: e }) {
  this.delete(e);
} });
a.subscribe(() => {
  let e = a.getSnapshot(), n2 = /* @__PURE__ */ new Map();
  for (let [t2] of e)
    n2.set(t2, t2.documentElement.style.overflow);
  for (let t2 of e.values()) {
    let o2 = n2.get(t2.doc) === "hidden", c2 = t2.count !== 0;
    (c2 && !o2 || !c2 && o2) && a.dispatch(t2.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", t2), t2.count === 0 && a.dispatch("TEARDOWN", t2);
  }
});
function d$1(t2, a$12, n2) {
  let i2 = m$2(a), l2 = computed(() => {
    let e = t2.value ? i2.value.get(t2.value) : void 0;
    return e ? e.count > 0 : false;
  });
  return watch([t2, a$12], ([e, m2], [r], o2) => {
    if (!e || !m2)
      return;
    a.dispatch("PUSH", e, n2);
    let f2 = false;
    o2(() => {
      f2 || (a.dispatch("POP", r != null ? r : e, n2), f2 = true);
    });
  }, { immediate: true }), l2;
}
var Oe = ((t2) => (t2[t2.Open = 0] = "Open", t2[t2.Closed = 1] = "Closed", t2))(Oe || {});
let F$1 = Symbol("DialogContext");
function C(o2) {
  let n2 = inject(F$1, null);
  if (n2 === null) {
    let t2 = new Error(`<${o2} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t2, C), t2;
  }
  return n2;
}
let M = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", Ue = defineComponent({ name: "Dialog", inheritAttrs: false, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, open: { type: [Boolean, String], default: M }, initialFocus: { type: Object, default: null }, id: { type: String, default: () => `headlessui-dialog-${t$2()}` } }, emits: { close: (o2) => true }, setup(o$12, { emit: n2, attrs: t2, slots: u2, expose: i2 }) {
  var N2;
  let r = ref(false);
  onMounted(() => {
    r.value = true;
  });
  let s = ref(0), p$3 = p$1(), m2 = computed(() => o$12.open === M && p$3 !== null ? (p$3.value & l$2.Open) === l$2.Open : o$12.open), v2 = ref(null), T2 = computed(() => m$3(v2));
  if (i2({ el: v2, $el: v2 }), !(o$12.open !== M || p$3 !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof m2.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${m2.value === M ? void 0 : o$12.open}`);
  let c2 = computed(() => r.value && m2.value ? 0 : 1), R2 = computed(() => c2.value === 0), E$2 = computed(() => s.value > 1), $ = inject(F$1, null) !== null, [G, V$1] = V(), { resolveContainers: x2, mainTreeNodeRef: j, MainTreeNode: W2 } = p$2({ portals: G, defaultContainers: [computed(() => {
    var e;
    return (e = y$1.panelRef.value) != null ? e : v2.value;
  })] }), J2 = computed(() => E$2.value ? "parent" : "leaf"), H$1 = computed(() => p$3 !== null ? (p$3.value & l$2.Closing) === l$2.Closing : false), Q2 = computed(() => $ || H$1.value ? false : R2.value), X = computed(() => {
    var e, l2, f2;
    return (f2 = Array.from((l2 = (e = T2.value) == null ? void 0 : e.querySelectorAll("body > *")) != null ? l2 : []).find((d2) => d2.id === "headlessui-portal-root" ? false : d2.contains(o(j)) && d2 instanceof HTMLElement)) != null ? f2 : null;
  });
  E(X, Q2);
  let Z = computed(() => E$2.value ? true : R2.value), ee = computed(() => {
    var e, l2, f2;
    return (f2 = Array.from((l2 = (e = T2.value) == null ? void 0 : e.querySelectorAll("[data-headlessui-portal]")) != null ? l2 : []).find((d2) => d2.contains(o(j)) && d2 instanceof HTMLElement)) != null ? f2 : null;
  });
  E(ee, Z), S({ type: "Dialog", enabled: computed(() => c2.value === 0), element: v2, onUpdate: (e, l2) => {
    if (l2 === "Dialog")
      return u$1(e, { [p.Add]: () => s.value += 1, [p.Remove]: () => s.value -= 1 });
  } });
  let te = M$1({ name: "DialogDescription", slot: computed(() => ({ open: m2.value })) }), k = ref(null), y$1 = { titleId: k, panelRef: ref(null), dialogState: c2, setTitleId(e) {
    k.value !== e && (k.value = e);
  }, close() {
    n2("close", false);
  } };
  provide(F$1, y$1);
  let le = computed(() => !(!R2.value || E$2.value));
  y(x2, (e, l2) => {
    y$1.close(), nextTick(() => l2 == null ? void 0 : l2.focus());
  }, le);
  let oe = computed(() => !(E$2.value || c2.value !== 0));
  E$1((N2 = T2.value) == null ? void 0 : N2.defaultView, "keydown", (e) => {
    oe.value && (e.defaultPrevented || e.key === o$1.Escape && (e.preventDefault(), e.stopPropagation(), y$1.close()));
  });
  let re = computed(() => !(H$1.value || c2.value !== 0 || $));
  return d$1(T2, re, (e) => {
    var l2;
    return { containers: [...(l2 = e.containers) != null ? l2 : [], x2] };
  }), watchEffect((e) => {
    if (c2.value !== 0)
      return;
    let l2 = o(v2);
    if (!l2)
      return;
    let f2 = new ResizeObserver((d2) => {
      for (let A2 of d2) {
        let D = A2.target.getBoundingClientRect();
        D.x === 0 && D.y === 0 && D.width === 0 && D.height === 0 && y$1.close();
      }
    });
    f2.observe(l2), e(() => f2.disconnect());
  }), () => {
    let { id: e, open: l2, initialFocus: f2, ...d2 } = o$12, A2 = { ...t2, ref: v2, id: e, role: "dialog", "aria-modal": c2.value === 0 ? true : void 0, "aria-labelledby": k.value, "aria-describedby": te.value }, D = { open: c2.value === 0 };
    return h(P$1, { force: true }, () => [h(U, () => h(_, { target: v2.value }, () => h(P$1, { force: false }, () => h(ce$1, { initialFocus: f2, containers: x2, features: R2.value ? u$1(J2.value, { parent: ce$1.features.RestoreFocus, leaf: ce$1.features.All & ~ce$1.features.FocusLock }) : ce$1.features.None }, () => h(V$1, {}, () => H({ ourProps: A2, theirProps: { ...d2, ...t2 }, slot: D, attrs: t2, slots: u2, visible: c2.value === 0, features: N$3.RenderStrategy | N$3.Static, name: "Dialog" })))))), h(W2)]);
  };
} });
defineComponent({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-overlay-${t$2()}` } }, setup(o2, { attrs: n2, slots: t2 }) {
  let u2 = C("DialogOverlay");
  function i2(r) {
    r.target === r.currentTarget && (r.preventDefault(), r.stopPropagation(), u2.close());
  }
  return () => {
    let { id: r, ...s } = o2;
    return H({ ourProps: { id: r, "aria-hidden": true, onClick: i2 }, theirProps: s, slot: { open: u2.dialogState.value === 0 }, attrs: n2, slots: t2, name: "DialogOverlay" });
  };
} });
defineComponent({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-backdrop-${t$2()}` } }, inheritAttrs: false, setup(o2, { attrs: n2, slots: t2, expose: u2 }) {
  let i2 = C("DialogBackdrop"), r = ref(null);
  return u2({ el: r, $el: r }), onMounted(() => {
    if (i2.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { id: s, ...p2 } = o2, m2 = { id: s, ref: r, "aria-hidden": true };
    return h(P$1, { force: true }, () => h(U, () => H({ ourProps: m2, theirProps: { ...n2, ...p2 }, slot: { open: i2.dialogState.value === 0 }, attrs: n2, slots: t2, name: "DialogBackdrop" })));
  };
} });
let Ge = defineComponent({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-panel-${t$2()}` } }, setup(o2, { attrs: n2, slots: t2, expose: u2 }) {
  let i2 = C("DialogPanel");
  u2({ el: i2.panelRef, $el: i2.panelRef });
  function r(s) {
    s.stopPropagation();
  }
  return () => {
    let { id: s, ...p2 } = o2, m2 = { id: s, ref: i2.panelRef, onClick: r };
    return H({ ourProps: m2, theirProps: p2, slot: { open: i2.dialogState.value === 0 }, attrs: n2, slots: t2, name: "DialogPanel" });
  };
} });
defineComponent({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: () => `headlessui-dialog-title-${t$2()}` } }, setup(o2, { attrs: n2, slots: t2 }) {
  let u2 = C("DialogTitle");
  return onMounted(() => {
    u2.setTitleId(o2.id), onUnmounted(() => u2.setTitleId(null));
  }), () => {
    let { id: i2, ...r } = o2;
    return H({ ourProps: { id: i2 }, theirProps: r, slot: { open: u2.dialogState.value === 0 }, attrs: n2, slots: t2, name: "DialogTitle" });
  };
} });
function l(r) {
  let e = { called: false };
  return (...t2) => {
    if (!e.called)
      return e.called = true, r(...t2);
  };
}
function m(e, ...t2) {
  e && t2.length > 0 && e.classList.add(...t2);
}
function d(e, ...t2) {
  e && t2.length > 0 && e.classList.remove(...t2);
}
var g$1 = ((i2) => (i2.Finished = "finished", i2.Cancelled = "cancelled", i2))(g$1 || {});
function F(e, t2) {
  let i2 = o$2();
  if (!e)
    return i2.dispose;
  let { transitionDuration: n2, transitionDelay: a2 } = getComputedStyle(e), [l2, s] = [n2, a2].map((o2) => {
    let [u2 = 0] = o2.split(",").filter(Boolean).map((r) => r.includes("ms") ? parseFloat(r) : parseFloat(r) * 1e3).sort((r, c2) => c2 - r);
    return u2;
  });
  return l2 !== 0 ? i2.setTimeout(() => t2("finished"), l2 + s) : t2("finished"), i2.add(() => t2("cancelled")), i2.dispose;
}
function L$1(e, t2, i2, n2, a2, l$12) {
  let s = o$2(), o2 = l$12 !== void 0 ? l(l$12) : () => {
  };
  return d(e, ...a2), m(e, ...t2, ...i2), s.nextFrame(() => {
    d(e, ...i2), m(e, ...n2), s.add(F(e, (u2) => (d(e, ...n2, ...t2), m(e, ...a2), o2(u2))));
  }), s.add(() => d(e, ...t2, ...i2, ...n2, ...a2)), s.add(() => o2("cancelled")), s.dispose;
}
function g(e = "") {
  return e.split(" ").filter((t2) => t2.trim().length > 1);
}
let R = Symbol("TransitionContext");
var pe = ((a2) => (a2.Visible = "visible", a2.Hidden = "hidden", a2))(pe || {});
function me() {
  return inject(R, null) !== null;
}
function Te() {
  let e = inject(R, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function ge() {
  let e = inject(N, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let N = Symbol("NestingContext");
function L(e) {
  return "children" in e ? L(e.children) : e.value.filter(({ state: t2 }) => t2 === "visible").length > 0;
}
function Q(e) {
  let t2 = ref([]), a2 = ref(false);
  onMounted(() => a2.value = true), onUnmounted(() => a2.value = false);
  function s(n2, r = S$2.Hidden) {
    let l2 = t2.value.findIndex(({ id: f2 }) => f2 === n2);
    l2 !== -1 && (u$1(r, { [S$2.Unmount]() {
      t2.value.splice(l2, 1);
    }, [S$2.Hidden]() {
      t2.value[l2].state = "hidden";
    } }), !L(t2) && a2.value && (e == null || e()));
  }
  function h2(n2) {
    let r = t2.value.find(({ id: l2 }) => l2 === n2);
    return r ? r.state !== "visible" && (r.state = "visible") : t2.value.push({ id: n2, state: "visible" }), () => s(n2, S$2.Unmount);
  }
  return { children: t2, register: h2, unregister: s };
}
let W = N$3.RenderStrategy, he = defineComponent({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: true }, appear: { type: [Boolean], default: false }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => true, afterEnter: () => true, beforeLeave: () => true, afterLeave: () => true }, setup(e, { emit: t2, attrs: a2, slots: s, expose: h$1 }) {
  let n2 = ref(0);
  function r() {
    n2.value |= l$2.Opening, t2("beforeEnter");
  }
  function l2() {
    n2.value &= ~l$2.Opening, t2("afterEnter");
  }
  function f2() {
    n2.value |= l$2.Closing, t2("beforeLeave");
  }
  function S2() {
    n2.value &= ~l$2.Closing, t2("afterLeave");
  }
  if (!me() && C$1())
    return () => h(Se, { ...e, onBeforeEnter: r, onAfterEnter: l2, onBeforeLeave: f2, onAfterLeave: S2 }, s);
  let d2 = ref(null), b = computed(() => e.unmount ? S$2.Unmount : S$2.Hidden);
  h$1({ el: d2, $el: d2 });
  let { show: v2, appear: A2 } = Te(), { register: D, unregister: H$1 } = ge(), i2 = ref(v2.value ? "visible" : "hidden"), I = { value: true }, c2 = t$2(), y2 = { value: false }, P2 = Q(() => {
    !y2.value && i2.value !== "hidden" && (i2.value = "hidden", H$1(c2), S2());
  });
  onMounted(() => {
    let o2 = D(c2);
    onUnmounted(o2);
  }), watchEffect(() => {
    if (b.value === S$2.Hidden && c2) {
      if (v2.value && i2.value !== "visible") {
        i2.value = "visible";
        return;
      }
      u$1(i2.value, { ["hidden"]: () => H$1(c2), ["visible"]: () => D(c2) });
    }
  });
  let j = g(e.enter), M2 = g(e.enterFrom), X = g(e.enterTo), _2 = g(e.entered), Y = g(e.leave), Z = g(e.leaveFrom), ee = g(e.leaveTo);
  onMounted(() => {
    watchEffect(() => {
      if (i2.value === "visible") {
        let o$12 = o(d2);
        if (o$12 instanceof Comment && o$12.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function te(o$12) {
    let E2 = I.value && !A2.value, p2 = o(d2);
    !p2 || !(p2 instanceof HTMLElement) || E2 || (y2.value = true, v2.value && r(), v2.value || f2(), o$12(v2.value ? L$1(p2, j, M2, X, _2, (V2) => {
      y2.value = false, V2 === g$1.Finished && l2();
    }) : L$1(p2, Y, Z, ee, _2, (V2) => {
      y2.value = false, V2 === g$1.Finished && (L(P2) || (i2.value = "hidden", H$1(c2), S2()));
    })));
  }
  return onMounted(() => {
    watch([v2], (o2, E2, p2) => {
      te(p2), I.value = false;
    }, { immediate: true });
  }), provide(N, P2), c$1(computed(() => u$1(i2.value, { ["visible"]: l$2.Open, ["hidden"]: l$2.Closed }) | n2.value)), () => {
    let { appear: o2, show: E2, enter: p2, enterFrom: V2, enterTo: Ce, entered: be, leave: ye, leaveFrom: Ee, leaveTo: Ve, ...U2 } = e, ne = { ref: d2 }, re = { ...U2, ...A2.value && v2.value && c$1$1.isServer ? { class: normalizeClass([a2.class, U2.class, ...j, ...M2]) } : {} };
    return H({ theirProps: re, ourProps: ne, slot: {}, slots: s, attrs: a2, features: W, visible: i2.value === "visible", name: "TransitionChild" });
  };
} }), ce = he, Se = defineComponent({ inheritAttrs: false, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: true }, appear: { type: [Boolean], default: false }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => true, afterEnter: () => true, beforeLeave: () => true, afterLeave: () => true }, setup(e, { emit: t2, attrs: a2, slots: s }) {
  let h$1 = p$1(), n2 = computed(() => e.show === null && h$1 !== null ? (h$1.value & l$2.Open) === l$2.Open : e.show);
  watchEffect(() => {
    if (![true, false].includes(n2.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let r = ref(n2.value ? "visible" : "hidden"), l2 = Q(() => {
    r.value = "hidden";
  }), f2 = ref(true), S2 = { show: n2, appear: computed(() => e.appear || !f2.value) };
  return onMounted(() => {
    watchEffect(() => {
      f2.value = false, n2.value ? r.value = "visible" : L(l2) || (r.value = "hidden");
    });
  }), provide(N, l2), provide(R, S2), () => {
    let d2 = T$1(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), b = { unmount: e.unmount };
    return H({ ourProps: { ...b, as: "template" }, theirProps: {}, slot: {}, slots: { ...s, default: () => [h(ce, { onBeforeEnter: () => t2("beforeEnter"), onAfterEnter: () => t2("afterEnter"), onBeforeLeave: () => t2("beforeLeave"), onAfterLeave: () => t2("afterLeave"), ...a2, ...b, ...d2 }, s.default)] }, attrs: {}, features: W, visible: r.value === "visible", name: "Transition" });
  };
} });

export { Ge as G, Se as S, Ue as U, he as h };
//# sourceMappingURL=transition-6a44051a.mjs.map

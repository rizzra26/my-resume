import { ref, watchEffect, defineComponent, provide, computed, inject, onMounted, onUnmounted, h as h$1, Teleport, reactive } from 'vue';
import { w } from './use-outside-click-a351c925.mjs';
import { c as c$1, m } from './focus-management-ebae29a2.mjs';
import { H, o } from './dom-075ad068.mjs';
import { f as f$1, a } from './hidden-990651e2.mjs';

var d = ((r) => (r[r.Forwards = 0] = "Forwards", r[r.Backwards = 1] = "Backwards", r))(d || {});
function n() {
  let o2 = ref(0);
  return w("keydown", (e2) => {
    e2.key === "Tab" && (o2.value = e2.shiftKey ? 1 : 0);
  }), o2;
}
function E$1(n2, e2, o2, r) {
  c$1.isServer || watchEffect((t) => {
    n2 = n2 != null ? n2 : window, n2.addEventListener(e2, o2, r), t(() => n2.removeEventListener(e2, o2, r));
  });
}
let e = Symbol("ForcePortalRootContext");
function u() {
  return inject(e, false);
}
let P = defineComponent({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: false } }, setup(o2, { slots: t, attrs: r }) {
  return provide(e, o2.force), () => {
    let { force: f2, ...n2 } = o2;
    return H({ theirProps: n2, ourProps: {}, slot: {}, slots: t, attrs: r, name: "ForcePortalRoot" });
  };
} });
function E(t) {
  let e2 = m(t);
  if (!e2) {
    if (t === null)
      return null;
    throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${t}`);
  }
  let u2 = e2.getElementById("headlessui-portal-root");
  if (u2)
    return u2;
  let r = e2.createElement("div");
  return r.setAttribute("id", "headlessui-portal-root"), e2.body.appendChild(r);
}
let U = defineComponent({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(t, { slots: e2, attrs: u$1 }) {
  let r = ref(null), i = computed(() => m(r)), l = u(), n2 = inject(h, null), o$1 = ref(l === true || n2 == null ? E(r.value) : n2.resolveTarget());
  watchEffect(() => {
    l || n2 != null && (o$1.value = n2.resolveTarget());
  });
  let d2 = inject(f, null);
  return onMounted(() => {
    let a2 = o(r);
    a2 && d2 && onUnmounted(d2.register(a2));
  }), onUnmounted(() => {
    var v, P2;
    let a2 = (v = i.value) == null ? void 0 : v.getElementById("headlessui-portal-root");
    a2 && o$1.value === a2 && o$1.value.children.length <= 0 && ((P2 = o$1.value.parentElement) == null || P2.removeChild(o$1.value));
  }), () => {
    if (o$1.value === null)
      return null;
    let a2 = { ref: r, "data-headlessui-portal": "" };
    return h$1(Teleport, { to: o$1.value }, H({ ourProps: a2, theirProps: t, slot: {}, attrs: u$1, slots: e2, name: "Portal" }));
  };
} }), f = Symbol("PortalParentContext");
function V() {
  let t = inject(f, null), e2 = ref([]);
  function u2(l) {
    return e2.value.push(l), t && t.register(l), () => r(l);
  }
  function r(l) {
    let n2 = e2.value.indexOf(l);
    n2 !== -1 && e2.value.splice(n2, 1), t && t.unregister(l);
  }
  let i = { register: u2, unregister: r, portals: e2 };
  return [e2, defineComponent({ name: "PortalWrapper", setup(l, { slots: n2 }) {
    return provide(f, i), () => {
      var o2;
      return (o2 = n2.default) == null ? void 0 : o2.call(n2);
    };
  } })];
}
let h = Symbol("PortalGroupContext"), _ = defineComponent({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(t, { attrs: e2, slots: u2 }) {
  let r = reactive({ resolveTarget() {
    return t.target;
  } });
  return provide(h, r), () => {
    let { target: i, ...l } = t;
    return H({ theirProps: l, ourProps: {}, slot: {}, attrs: e2, slots: u2, name: "PortalGroup" });
  };
} });
function p({ defaultContainers: t = [], portals: o$1, mainTreeNodeRef: s } = {}) {
  let i = ref(null), r = m(i);
  function u2() {
    var l;
    let n2 = [];
    for (let e2 of t)
      e2 !== null && (e2 instanceof HTMLElement ? n2.push(e2) : "value" in e2 && e2.value instanceof HTMLElement && n2.push(e2.value));
    if (o$1 != null && o$1.value)
      for (let e2 of o$1.value)
        n2.push(e2);
    for (let e2 of (l = r == null ? void 0 : r.querySelectorAll("html > *, body > *")) != null ? l : [])
      e2 !== document.body && e2 !== document.head && e2 instanceof HTMLElement && e2.id !== "headlessui-portal-root" && (e2.contains(o(i)) || n2.some((c2) => e2.contains(c2)) || n2.push(e2));
    return n2;
  }
  return { resolveContainers: u2, contains(n2) {
    return u2().some((l) => l.contains(n2));
  }, mainTreeNodeRef: i, MainTreeNode() {
    return s != null ? null : h$1(f$1, { features: a.Hidden, ref: i });
  } };
}
function N() {
  let t = ref(null);
  return { mainTreeNodeRef: t, MainTreeNode() {
    return h$1(f$1, { features: a.Hidden, ref: t });
  } };
}

export { E$1 as E, N, P, U, V, _, d, n, p };
//# sourceMappingURL=use-root-containers-aed59af0.mjs.map

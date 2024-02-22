import { ref, computed, watchEffect } from 'vue';
import { c as c$1, w as w$1, h } from './focus-management-ebae29a2.mjs';
import { o } from './dom-075ad068.mjs';

function u(e, t, n) {
  c$1.isServer || watchEffect((o2) => {
    document.addEventListener(e, t, n), o2(() => document.removeEventListener(e, t, n));
  });
}
function w(e, n, t) {
  c$1.isServer || watchEffect((o2) => {
    window.addEventListener(e, n, t), o2(() => window.removeEventListener(e, n, t));
  });
}
function y(f, c2, i = computed(() => true)) {
  function a(e, r) {
    if (!i.value || e.defaultPrevented)
      return;
    let t = r(e);
    if (t === null || !t.getRootNode().contains(t))
      return;
    let m = function o2(n) {
      return typeof n == "function" ? o2(n()) : Array.isArray(n) || n instanceof Set ? n : [n];
    }(f);
    for (let o$1 of m) {
      if (o$1 === null)
        continue;
      let n = o$1 instanceof HTMLElement ? o$1 : o(o$1);
      if (n != null && n.contains(t) || e.composed && e.composedPath().includes(n))
        return;
    }
    return !w$1(t, h.Loose) && t.tabIndex !== -1 && e.preventDefault(), c2(e, t);
  }
  let u$1 = ref(null);
  u("pointerdown", (e) => {
    var r, t;
    i.value && (u$1.value = ((t = (r = e.composedPath) == null ? void 0 : r.call(e)) == null ? void 0 : t[0]) || e.target);
  }, true), u("mousedown", (e) => {
    var r, t;
    i.value && (u$1.value = ((t = (r = e.composedPath) == null ? void 0 : r.call(e)) == null ? void 0 : t[0]) || e.target);
  }, true), u("click", (e) => {
    u$1.value && (a(e, () => u$1.value), u$1.value = null);
  }, true), u("touchend", (e) => a(e, () => e.target instanceof HTMLElement ? e.target : null), true), w("blur", (e) => a(e, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), true);
}

export { w, y };
//# sourceMappingURL=use-outside-click-a351c925.mjs.map

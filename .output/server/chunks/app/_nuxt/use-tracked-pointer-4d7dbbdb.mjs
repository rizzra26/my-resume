import { watchEffect, ref } from 'vue';
import { m } from './focus-management-ebae29a2.mjs';

function f(r2) {
  throw new Error("Unexpected object: " + r2);
}
var a = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(a || {});
function x(r2, n) {
  let t = n.resolveItems();
  if (t.length <= 0)
    return null;
  let l = n.resolveActiveIndex(), s = l != null ? l : -1, d = (() => {
    switch (r2.focus) {
      case 0:
        return t.findIndex((e) => !n.resolveDisabled(e));
      case 1: {
        let e = t.slice().reverse().findIndex((i, c, u2) => s !== -1 && u2.length - c - 1 >= s ? false : !n.resolveDisabled(i));
        return e === -1 ? e : t.length - 1 - e;
      }
      case 2:
        return t.findIndex((e, i) => i <= s ? false : !n.resolveDisabled(e));
      case 3: {
        let e = t.slice().reverse().findIndex((i) => !n.resolveDisabled(i));
        return e === -1 ? e : t.length - 1 - e;
      }
      case 4:
        return t.findIndex((e) => n.resolveId(e) === r2.id);
      case 5:
        return null;
      default:
        f(r2);
    }
  })();
  return d === -1 ? l : d;
}
function p({ container: e, accept: t, walk: d, enabled: o }) {
  watchEffect(() => {
    let r2 = e.value;
    if (!r2 || o !== void 0 && !o.value)
      return;
    let l = m(e);
    if (!l)
      return;
    let c = Object.assign((f2) => t(f2), { acceptNode: t }), n = l.createTreeWalker(r2, NodeFilter.SHOW_ELEMENT, c, false);
    for (; n.nextNode(); )
      d(n.currentNode);
  });
}
function r(e) {
  return [e.screenX, e.screenY];
}
function u() {
  let e = ref([-1, -1]);
  return { wasMoved(n) {
    let t = r(n);
    return e.value[0] === t[0] && e.value[1] === t[1] ? false : (e.value = t, true);
  }, update(n) {
    e.value = r(n);
  } };
}

export { a, p, u, x };
//# sourceMappingURL=use-tracked-pointer-4d7dbbdb.mjs.map

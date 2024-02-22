import { cloneVNode, h, Fragment } from 'vue';

function u(r, n2, ...a) {
  if (r in n2) {
    let e2 = n2[r];
    return typeof e2 == "function" ? e2(...a) : e2;
  }
  let t2 = new Error(`Tried to handle "${r}" but there is no handler defined. Only defined handlers are: ${Object.keys(n2).map((e2) => `"${e2}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t2, u), t2;
}
var N = ((o2) => (o2[o2.None = 0] = "None", o2[o2.RenderStrategy = 1] = "RenderStrategy", o2[o2.Static = 2] = "Static", o2))(N || {}), S = ((e2) => (e2[e2.Unmount = 0] = "Unmount", e2[e2.Hidden = 1] = "Hidden", e2))(S || {});
function H({ visible: r = true, features: t2 = 0, ourProps: e2, theirProps: o2, ...i }) {
  var a;
  let n2 = j(o2, e2), l = Object.assign(i, { props: n2 });
  if (r || t2 & 2 && n2.static)
    return y(l);
  if (t2 & 1) {
    let d = (a = n2.unmount) == null || a ? 0 : 1;
    return u(d, { [0]() {
      return null;
    }, [1]() {
      return y({ ...i, props: { ...n2, hidden: true, style: { display: "none" } } });
    } });
  }
  return y(l);
}
function y({ props: r, attrs: t2, slots: e2, slot: o2, name: i }) {
  var m, h$1;
  let { as: n2, ...l } = T(r, ["unmount", "static"]), a = (m = e2.default) == null ? void 0 : m.call(e2, o2), d = {};
  if (o2) {
    let u2 = false, c = [];
    for (let [p, f] of Object.entries(o2))
      typeof f == "boolean" && (u2 = true), f === true && c.push(p);
    u2 && (d["data-headlessui-state"] = c.join(" "));
  }
  if (n2 === "template") {
    if (a = b(a != null ? a : []), Object.keys(l).length > 0 || Object.keys(t2).length > 0) {
      let [u2, ...c] = a != null ? a : [];
      if (!v(u2) || c.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${i} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(l).concat(Object.keys(t2)).map((s) => s.trim()).filter((s, g, R) => R.indexOf(s) === g).sort((s, g) => s.localeCompare(g)).map((s) => `  - ${s}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((s) => `  - ${s}`).join(`
`)].join(`
`));
      let p = j((h$1 = u2.props) != null ? h$1 : {}, l), f = cloneVNode(u2, p);
      for (let s in p)
        s.startsWith("on") && (f.props || (f.props = {}), f.props[s] = p[s]);
      return f;
    }
    return Array.isArray(a) && a.length === 1 ? a[0] : a;
  }
  return h(n2, Object.assign({}, l, d), { default: () => a });
}
function b(r) {
  return r.flatMap((t2) => t2.type === Fragment ? b(t2.children) : [t2]);
}
function j(...r) {
  if (r.length === 0)
    return {};
  if (r.length === 1)
    return r[0];
  let t2 = {}, e2 = {};
  for (let i of r)
    for (let n2 in i)
      n2.startsWith("on") && typeof i[n2] == "function" ? (e2[n2] != null || (e2[n2] = []), e2[n2].push(i[n2])) : t2[n2] = i[n2];
  if (t2.disabled || t2["aria-disabled"])
    return Object.assign(t2, Object.fromEntries(Object.keys(e2).map((i) => [i, void 0])));
  for (let i in e2)
    Object.assign(t2, { [i](n2, ...l) {
      let a = e2[i];
      for (let d of a) {
        if (n2 instanceof Event && n2.defaultPrevented)
          return;
        d(n2, ...l);
      }
    } });
  return t2;
}
function K(r) {
  let t2 = Object.assign({}, r);
  for (let e2 in t2)
    t2[e2] === void 0 && delete t2[e2];
  return t2;
}
function T(r, t2 = []) {
  let e2 = Object.assign({}, r);
  for (let o2 of t2)
    o2 in e2 && delete e2[o2];
  return e2;
}
function v(r) {
  return r == null ? false : typeof r.type == "string" || typeof r.type == "object" || typeof r.type == "function";
}
let e = 0;
function n() {
  return ++e;
}
function t() {
  return n();
}
var o$1 = ((r) => (r.Space = " ", r.Enter = "Enter", r.Escape = "Escape", r.Backspace = "Backspace", r.Delete = "Delete", r.ArrowLeft = "ArrowLeft", r.ArrowUp = "ArrowUp", r.ArrowRight = "ArrowRight", r.ArrowDown = "ArrowDown", r.Home = "Home", r.End = "End", r.PageUp = "PageUp", r.PageDown = "PageDown", r.Tab = "Tab", r))(o$1 || {});
function o(n2) {
  var l;
  return n2 == null || n2.value == null ? null : (l = n2.value.$el) != null ? l : n2.value;
}

export { H, K, N, S, T, o$1 as a, o, t, u };
//# sourceMappingURL=dom-075ad068.mjs.map

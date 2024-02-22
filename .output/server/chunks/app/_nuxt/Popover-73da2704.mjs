import { defineComponent, ref, computed, provide, watchEffect, h as h$1, Fragment, onMounted, onUnmounted, shallowRef, useSSRContext, inject, resolveComponent, mergeProps, withCtx, renderSlot, createVNode, openBlock, createBlock, Transition, createCommentVNode } from 'vue';
import { x as defu } from '../../nitro/node-server.mjs';
import { b as useAppConfig, d as defuTwMerge } from '../server.mjs';
import { omit } from 'lodash-es';
import { twMerge } from 'tailwind-merge';
import { u as usePopper } from './usePopper-4c6d2f66.mjs';
import { ssrRenderComponent, ssrRenderSlot, ssrIncludeBooleanAttr, ssrRenderClass, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import { o, u, H, t, N, a as o$1 } from './dom-075ad068.mjs';
import { m, E, w, h, P, N as N$1, T } from './focus-management-ebae29a2.mjs';
import { c, l, p as p$1 } from './open-closed-4c4062c8.mjs';
import { b } from './use-resolve-button-type-de78c0b4.mjs';
import { y } from './use-outside-click-a351c925.mjs';
import { V as V$1, p, E as E$1, n, N as N$2, d } from './use-root-containers-aed59af0.mjs';
import { f, a } from './hidden-990651e2.mjs';
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

var Se = ((p2) => (p2[p2.Open = 0] = "Open", p2[p2.Closed = 1] = "Closed", p2))(Se || {});
let re = Symbol("PopoverContext");
function V(P2) {
  let b2 = inject(re, null);
  if (b2 === null) {
    let p2 = new Error(`<${P2} /> is missing a parent <${ye.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(p2, V), p2;
  }
  return b2;
}
let le = Symbol("PopoverGroupContext");
function ae() {
  return inject(le, null);
}
let ue = Symbol("PopoverPanelContext");
function ge() {
  return inject(ue, null);
}
let ye = defineComponent({ name: "Popover", inheritAttrs: false, props: { as: { type: [Object, String], default: "div" } }, setup(P2, { slots: b2, attrs: p$12, expose: h$2 }) {
  var v;
  let t2 = ref(null);
  h$2({ el: t2, $el: t2 });
  let e = ref(1), d2 = ref(null), c$1 = ref(null), O = ref(null), f2 = ref(null), y$1 = computed(() => m(t2)), M = computed(() => {
    var Y, Z;
    if (!o(d2) || !o(f2))
      return false;
    for (let B of document.querySelectorAll("body > *"))
      if (Number(B == null ? void 0 : B.contains(o(d2))) ^ Number(B == null ? void 0 : B.contains(o(f2))))
        return true;
    let o$12 = E(), a2 = o$12.indexOf(o(d2)), g = (a2 + o$12.length - 1) % o$12.length, E$12 = (a2 + 1) % o$12.length, N2 = o$12[g], $ = o$12[E$12];
    return !((Y = o(f2)) != null && Y.contains(N2)) && !((Z = o(f2)) != null && Z.contains($));
  }), l$1 = { popoverState: e, buttonId: ref(null), panelId: ref(null), panel: f2, button: d2, isPortalled: M, beforePanelSentinel: c$1, afterPanelSentinel: O, togglePopover() {
    e.value = u(e.value, { [0]: 1, [1]: 0 });
  }, closePopover() {
    e.value !== 1 && (e.value = 1);
  }, close(o$12) {
    l$1.closePopover();
    let a2 = (() => o$12 ? o$12 instanceof HTMLElement ? o$12 : o$12.value instanceof HTMLElement ? o(o$12) : o(l$1.button) : o(l$1.button))();
    a2 == null || a2.focus();
  } };
  provide(re, l$1), c(computed(() => u(e.value, { [0]: l.Open, [1]: l.Closed })));
  let m$1 = { buttonId: l$1.buttonId, panelId: l$1.panelId, close() {
    l$1.closePopover();
  } }, S = ae(), I = S == null ? void 0 : S.registerPopover, [s, u$1] = V$1(), i = p({ mainTreeNodeRef: S == null ? void 0 : S.mainTreeNodeRef, portals: s, defaultContainers: [d2, f2] });
  function n2() {
    var o$12, a2, g, E2;
    return (E2 = S == null ? void 0 : S.isFocusWithinPopoverGroup()) != null ? E2 : ((o$12 = y$1.value) == null ? void 0 : o$12.activeElement) && (((a2 = o(d2)) == null ? void 0 : a2.contains(y$1.value.activeElement)) || ((g = o(f2)) == null ? void 0 : g.contains(y$1.value.activeElement)));
  }
  return watchEffect(() => I == null ? void 0 : I(m$1)), E$1((v = y$1.value) == null ? void 0 : v.defaultView, "focus", (o$12) => {
    var a2, g;
    o$12.target !== window && o$12.target instanceof HTMLElement && e.value === 0 && (n2() || d2 && f2 && (i.contains(o$12.target) || (a2 = o(l$1.beforePanelSentinel)) != null && a2.contains(o$12.target) || (g = o(l$1.afterPanelSentinel)) != null && g.contains(o$12.target) || l$1.closePopover()));
  }, true), y(i.resolveContainers, (o$12, a2) => {
    var g;
    l$1.closePopover(), w(a2, h.Loose) || (o$12.preventDefault(), (g = o(d2)) == null || g.focus());
  }, computed(() => e.value === 0)), () => {
    let o2 = { open: e.value === 0, close: l$1.close };
    return h$1(Fragment, [h$1(u$1, {}, () => H({ theirProps: { ...P2, ...p$12 }, ourProps: { ref: t2 }, slot: o2, slots: b2, attrs: p$12, name: "Popover" })), h$1(i.MainTreeNode)]);
  };
} }), je = defineComponent({ name: "PopoverButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: false }, id: { type: String, default: () => `headlessui-popover-button-${t()}` } }, inheritAttrs: false, setup(P$1, { attrs: b$1, slots: p2, expose: h2 }) {
  let t$1 = V("PopoverButton"), e = computed(() => m(t$1.button));
  h2({ el: t$1.button, $el: t$1.button }), onMounted(() => {
    t$1.buttonId.value = P$1.id;
  }), onUnmounted(() => {
    t$1.buttonId.value = null;
  });
  let d$1 = ae(), c2 = d$1 == null ? void 0 : d$1.closeOthers, O = ge(), f$1 = computed(() => O === null ? false : O.value === t$1.panelId.value), y2 = ref(null), M = `headlessui-focus-sentinel-${t()}`;
  f$1.value || watchEffect(() => {
    t$1.button.value = y2.value;
  });
  let l2 = b(computed(() => ({ as: P$1.as, type: b$1.type })), y2);
  function m$1(n2) {
    var v, o$2, a2, g, E2;
    if (f$1.value) {
      if (t$1.popoverState.value === 1)
        return;
      switch (n2.key) {
        case o$1.Space:
        case o$1.Enter:
          n2.preventDefault(), (o$2 = (v = n2.target).click) == null || o$2.call(v), t$1.closePopover(), (a2 = o(t$1.button)) == null || a2.focus();
          break;
      }
    } else
      switch (n2.key) {
        case o$1.Space:
        case o$1.Enter:
          n2.preventDefault(), n2.stopPropagation(), t$1.popoverState.value === 1 && (c2 == null || c2(t$1.buttonId.value)), t$1.togglePopover();
          break;
        case o$1.Escape:
          if (t$1.popoverState.value !== 0)
            return c2 == null ? void 0 : c2(t$1.buttonId.value);
          if (!o(t$1.button) || (g = e.value) != null && g.activeElement && !((E2 = o(t$1.button)) != null && E2.contains(e.value.activeElement)))
            return;
          n2.preventDefault(), n2.stopPropagation(), t$1.closePopover();
          break;
      }
  }
  function S(n2) {
    f$1.value || n2.key === o$1.Space && n2.preventDefault();
  }
  function I(n2) {
    var v, o$12;
    P$1.disabled || (f$1.value ? (t$1.closePopover(), (v = o(t$1.button)) == null || v.focus()) : (n2.preventDefault(), n2.stopPropagation(), t$1.popoverState.value === 1 && (c2 == null || c2(t$1.buttonId.value)), t$1.togglePopover(), (o$12 = o(t$1.button)) == null || o$12.focus()));
  }
  function s(n2) {
    n2.preventDefault(), n2.stopPropagation();
  }
  let u$1 = n();
  function i() {
    let n2 = o(t$1.panel);
    if (!n2)
      return;
    function v() {
      u(u$1.value, { [d.Forwards]: () => P(n2, N$1.First), [d.Backwards]: () => P(n2, N$1.Last) }) === T.Error && P(E().filter((a2) => a2.dataset.headlessuiFocusGuard !== "true"), u(u$1.value, { [d.Forwards]: N$1.Next, [d.Backwards]: N$1.Previous }), { relativeTo: o(t$1.button) });
    }
    v();
  }
  return () => {
    let n2 = t$1.popoverState.value === 0, v = { open: n2 }, { id: o$12, ...a$1 } = P$1, g = f$1.value ? { ref: y2, type: l2.value, onKeydown: m$1, onClick: I } : { ref: y2, id: o$12, type: l2.value, "aria-expanded": t$1.popoverState.value === 0, "aria-controls": o(t$1.panel) ? t$1.panelId.value : void 0, disabled: P$1.disabled ? true : void 0, onKeydown: m$1, onKeyup: S, onClick: I, onMousedown: s };
    return h$1(Fragment, [H({ ourProps: g, theirProps: { ...b$1, ...a$1 }, slot: v, attrs: b$1, slots: p2, name: "PopoverButton" }), n2 && !f$1.value && t$1.isPortalled.value && h$1(f, { id: M, features: a.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: i })]);
  };
} });
defineComponent({ name: "PopoverOverlay", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true } }, setup(P2, { attrs: b2, slots: p2 }) {
  let h2 = V("PopoverOverlay"), t$1 = `headlessui-popover-overlay-${t()}`, e = p$1(), d2 = computed(() => e !== null ? (e.value & l.Open) === l.Open : h2.popoverState.value === 0);
  function c2() {
    h2.closePopover();
  }
  return () => {
    let O = { open: h2.popoverState.value === 0 };
    return H({ ourProps: { id: t$1, "aria-hidden": true, onClick: c2 }, theirProps: P2, slot: O, attrs: b2, slots: p2, features: N.RenderStrategy | N.Static, visible: d2.value, name: "PopoverOverlay" });
  };
} });
let We = defineComponent({ name: "PopoverPanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, focus: { type: Boolean, default: false }, id: { type: String, default: () => `headlessui-popover-panel-${t()}` } }, inheritAttrs: false, setup(P$1, { attrs: b2, slots: p2, expose: h2 }) {
  let { focus: t$1 } = P$1, e = V("PopoverPanel"), d$1 = computed(() => m(e.panel)), c2 = `headlessui-focus-sentinel-before-${t()}`, O = `headlessui-focus-sentinel-after-${t()}`;
  h2({ el: e.panel, $el: e.panel }), onMounted(() => {
    e.panelId.value = P$1.id;
  }), onUnmounted(() => {
    e.panelId.value = null;
  }), provide(ue, e.panelId), watchEffect(() => {
    var u2, i;
    if (!t$1 || e.popoverState.value !== 0 || !e.panel)
      return;
    let s = (u2 = d$1.value) == null ? void 0 : u2.activeElement;
    (i = o(e.panel)) != null && i.contains(s) || P(o(e.panel), N$1.First);
  });
  let f$1 = p$1(), y2 = computed(() => f$1 !== null ? (f$1.value & l.Open) === l.Open : e.popoverState.value === 0);
  function M(s) {
    var u2, i;
    switch (s.key) {
      case o$1.Escape:
        if (e.popoverState.value !== 0 || !o(e.panel) || d$1.value && !((u2 = o(e.panel)) != null && u2.contains(d$1.value.activeElement)))
          return;
        s.preventDefault(), s.stopPropagation(), e.closePopover(), (i = o(e.button)) == null || i.focus();
        break;
    }
  }
  function l$1(s) {
    var i, n2, v, o$12, a2;
    let u2 = s.relatedTarget;
    u2 && o(e.panel) && ((i = o(e.panel)) != null && i.contains(u2) || (e.closePopover(), ((v = (n2 = o(e.beforePanelSentinel)) == null ? void 0 : n2.contains) != null && v.call(n2, u2) || (a2 = (o$12 = o(e.afterPanelSentinel)) == null ? void 0 : o$12.contains) != null && a2.call(o$12, u2)) && u2.focus({ preventScroll: true })));
  }
  let m$1 = n();
  function S() {
    let s = o(e.panel);
    if (!s)
      return;
    function u$1() {
      u(m$1.value, { [d.Forwards]: () => {
        var n2;
        P(s, N$1.First) === T.Error && ((n2 = o(e.afterPanelSentinel)) == null || n2.focus());
      }, [d.Backwards]: () => {
        var i;
        (i = o(e.button)) == null || i.focus({ preventScroll: true });
      } });
    }
    u$1();
  }
  function I() {
    let s = o(e.panel);
    if (!s)
      return;
    function u$1() {
      u(m$1.value, { [d.Forwards]: () => {
        let i = o(e.button), n2 = o(e.panel);
        if (!i)
          return;
        let v = E(), o$12 = v.indexOf(i), a2 = v.slice(0, o$12 + 1), E$12 = [...v.slice(o$12 + 1), ...a2];
        for (let N2 of E$12.slice())
          if (N2.dataset.headlessuiFocusGuard === "true" || n2 != null && n2.contains(N2)) {
            let $ = E$12.indexOf(N2);
            $ !== -1 && E$12.splice($, 1);
          }
        P(E$12, N$1.First, { sorted: false });
      }, [d.Backwards]: () => {
        var n2;
        P(s, N$1.Previous) === T.Error && ((n2 = o(e.button)) == null || n2.focus());
      } });
    }
    u$1();
  }
  return () => {
    let s = { open: e.popoverState.value === 0, close: e.close }, { id: u2, focus: i, ...n2 } = P$1, v = { ref: e.panel, id: u2, onKeydown: M, onFocusout: t$1 && e.popoverState.value === 0 ? l$1 : void 0, tabIndex: -1 };
    return H({ ourProps: v, theirProps: { ...b2, ...n2 }, attrs: b2, slot: s, slots: { ...p2, default: (...o2) => {
      var a$1;
      return [h$1(Fragment, [y2.value && e.isPortalled.value && h$1(f, { id: c2, ref: e.beforePanelSentinel, features: a.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: S }), (a$1 = p2.default) == null ? void 0 : a$1.call(p2, ...o2), y2.value && e.isPortalled.value && h$1(f, { id: O, ref: e.afterPanelSentinel, features: a.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: I })])];
    } }, features: N.RenderStrategy | N.Static, visible: y2.value, name: "PopoverPanel" });
  };
} });
defineComponent({ name: "PopoverGroup", inheritAttrs: false, props: { as: { type: [Object, String], default: "div" } }, setup(P2, { attrs: b2, slots: p2, expose: h2 }) {
  let t2 = ref(null), e = shallowRef([]), d2 = computed(() => m(t2)), c2 = N$2();
  h2({ el: t2, $el: t2 });
  function O(l2) {
    let m2 = e.value.indexOf(l2);
    m2 !== -1 && e.value.splice(m2, 1);
  }
  function f2(l2) {
    return e.value.push(l2), () => {
      O(l2);
    };
  }
  function y2() {
    var S;
    let l2 = d2.value;
    if (!l2)
      return false;
    let m2 = l2.activeElement;
    return (S = o(t2)) != null && S.contains(m2) ? true : e.value.some((I) => {
      var s, u2;
      return ((s = l2.getElementById(I.buttonId.value)) == null ? void 0 : s.contains(m2)) || ((u2 = l2.getElementById(I.panelId.value)) == null ? void 0 : u2.contains(m2));
    });
  }
  function M(l2) {
    for (let m2 of e.value)
      m2.buttonId.value !== l2 && m2.close();
  }
  return provide(le, { registerPopover: f2, unregisterPopover: O, isFocusWithinPopoverGroup: y2, closeOthers: M, mainTreeNodeRef: c2.mainTreeNodeRef }), () => h$1(Fragment, [H({ ourProps: { ref: t2 }, theirProps: { ...P2, ...b2 }, slot: {}, attrs: b2, slots: p2, name: "PopoverGroup" }), h$1(c2.MainTreeNode)]);
} });
const _sfc_main = /* @__PURE__ */ defineComponent({
  components: {
    HPopover: ye,
    HPopoverButton: je,
    HPopoverPanel: We
  },
  inheritAttrs: false,
  props: {
    mode: {
      type: String,
      default: "click",
      validator: (value) => ["click", "hover"].includes(value)
    },
    disabled: {
      type: Boolean,
      default: false
    },
    openDelay: {
      type: Number,
      default: 0
    },
    closeDelay: {
      type: Number,
      default: 0
    },
    popper: {
      type: Object,
      default: () => ({})
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props, { attrs }) {
    const appConfig2 = useAppConfig();
    const ui = computed(() => defuTwMerge({}, props.ui, appConfig2.ui.popover));
    const popper = computed(() => defu(props.mode === "hover" ? { offsetDistance: 0 } : {}, props.popper, ui.value.popper));
    const [trigger, container] = usePopper(popper.value);
    const popover = ref(null);
    const popoverApi = ref(null);
    let openTimeout = null;
    let closeTimeout = null;
    const containerStyle = computed(() => {
      var _a, _b;
      const offsetDistance = ((_a = props.popper) == null ? void 0 : _a.offsetDistance) || ((_b = ui.value.popper) == null ? void 0 : _b.offsetDistance) || 8;
      return props.mode === "hover" ? { paddingTop: `${offsetDistance}px`, paddingBottom: `${offsetDistance}px` } : {};
    });
    const wrapperClass = computed(() => twMerge(ui.value.wrapper, attrs.class));
    function onMouseOver() {
      if (props.mode !== "hover" || !popoverApi.value) {
        return;
      }
      if (closeTimeout) {
        clearTimeout(closeTimeout);
        closeTimeout = null;
      }
      if (popoverApi.value.popoverState === 0) {
        return;
      }
      openTimeout = openTimeout || setTimeout(() => {
        popoverApi.value.togglePopover && popoverApi.value.togglePopover();
        openTimeout = null;
      }, props.openDelay);
    }
    function onMouseLeave() {
      if (props.mode !== "hover" || !popoverApi.value) {
        return;
      }
      if (openTimeout) {
        clearTimeout(openTimeout);
        openTimeout = null;
      }
      if (popoverApi.value.popoverState === 1) {
        return;
      }
      closeTimeout = closeTimeout || setTimeout(() => {
        popoverApi.value.closePopover && popoverApi.value.closePopover();
        closeTimeout = null;
      }, props.closeDelay);
    }
    return {
      attrs: omit(attrs, ["class"]),
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      popover,
      trigger,
      container,
      containerStyle,
      wrapperClass,
      onMouseOver,
      onMouseLeave
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HPopover = resolveComponent("HPopover");
  const _component_HPopoverButton = resolveComponent("HPopoverButton");
  const _component_HPopoverPanel = resolveComponent("HPopoverPanel");
  _push(ssrRenderComponent(_component_HPopover, mergeProps({
    ref: "popover",
    class: _ctx.wrapperClass
  }, _ctx.attrs, { onMouseleave: _ctx.onMouseLeave }, _attrs), {
    default: withCtx(({ open, close }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_HPopoverButton, {
          ref: "trigger",
          as: "div",
          disabled: _ctx.disabled,
          class: "inline-flex w-full",
          role: "button",
          onMouseover: _ctx.onMouseOver
        }, {
          default: withCtx((_, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              ssrRenderSlot(_ctx.$slots, "default", {
                open,
                close
              }, () => {
                _push3(`<button${ssrIncludeBooleanAttr(_ctx.disabled) ? " disabled" : ""}${_scopeId2}> Open </button>`);
              }, _push3, _parent3, _scopeId2);
            } else {
              return [
                renderSlot(_ctx.$slots, "default", {
                  open,
                  close
                }, () => [
                  createVNode("button", { disabled: _ctx.disabled }, " Open ", 8, ["disabled"])
                ])
              ];
            }
          }),
          _: 2
        }, _parent2, _scopeId));
        if (open) {
          _push2(`<div class="${ssrRenderClass([_ctx.ui.container, _ctx.ui.width])}" style="${ssrRenderStyle(_ctx.containerStyle)}"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_HPopoverPanel, {
            class: [_ctx.ui.base, _ctx.ui.background, _ctx.ui.ring, _ctx.ui.rounded, _ctx.ui.shadow],
            static: ""
          }, {
            default: withCtx((_, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                ssrRenderSlot(_ctx.$slots, "panel", {
                  open,
                  close
                }, null, _push3, _parent3, _scopeId2);
              } else {
                return [
                  renderSlot(_ctx.$slots, "panel", {
                    open,
                    close
                  })
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          createVNode(_component_HPopoverButton, {
            ref: "trigger",
            as: "div",
            disabled: _ctx.disabled,
            class: "inline-flex w-full",
            role: "button",
            onMouseover: _ctx.onMouseOver
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "default", {
                open,
                close
              }, () => [
                createVNode("button", { disabled: _ctx.disabled }, " Open ", 8, ["disabled"])
              ])
            ]),
            _: 2
          }, 1032, ["disabled", "onMouseover"]),
          open ? (openBlock(), createBlock("div", {
            key: 0,
            ref: "container",
            class: [_ctx.ui.container, _ctx.ui.width],
            style: _ctx.containerStyle,
            onMouseover: _ctx.onMouseOver
          }, [
            createVNode(Transition, mergeProps({ appear: "" }, _ctx.ui.transition), {
              default: withCtx(() => [
                createVNode(_component_HPopoverPanel, {
                  class: [_ctx.ui.base, _ctx.ui.background, _ctx.ui.ring, _ctx.ui.rounded, _ctx.ui.shadow],
                  static: ""
                }, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "panel", {
                      open,
                      close
                    })
                  ]),
                  _: 2
                }, 1032, ["class"])
              ]),
              _: 2
            }, 1040)
          ], 46, ["onMouseover"])) : createCommentVNode("", true)
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/overlays/Popover.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Popover = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { Popover as default };
//# sourceMappingURL=Popover-73da2704.mjs.map

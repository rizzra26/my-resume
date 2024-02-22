import __nuxt_component_0$2 from './Link-d85e4f71.mjs';
import __nuxt_component_0 from './Icon-855b8e20.mjs';
import __nuxt_component_1 from './Avatar-07284992.mjs';
import __nuxt_component_0$1 from './Kbd-ef6dba12.mjs';
import { defineComponent, ref, computed, provide, onMounted, onUnmounted, watchEffect, nextTick, useSSRContext, inject, resolveComponent, mergeProps, withCtx, renderSlot, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList, Transition } from 'vue';
import { x as defu } from '../../nitro/node-server.mjs';
import { b as useAppConfig, d as defuTwMerge } from '../server.mjs';
import { omit } from 'lodash-es';
import { twMerge } from 'tailwind-merge';
import { u as usePopper } from './usePopper-4c6d2f66.mjs';
import { ssrRenderComponent, ssrRenderSlot, ssrIncludeBooleanAttr, ssrRenderClass, ssrRenderStyle, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import { o, u, H, t, N, a as o$1 } from './dom-075ad068.mjs';
import { p, u as u$1, x, a } from './use-tracked-pointer-4d7dbbdb.mjs';
import { c, l, p as p$1 } from './open-closed-4c4062c8.mjs';
import { b } from './use-resolve-button-type-de78c0b4.mjs';
import { w, h, v, N as N$1, _, O as O$1 } from './focus-management-ebae29a2.mjs';
import { y } from './use-outside-click-a351c925.mjs';
import { p as p$2 } from './use-text-value-e0c4fe6a.mjs';
import './nuxt-link-dcdeaa20.mjs';
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

var Y = ((l2) => (l2[l2.Open = 0] = "Open", l2[l2.Closed = 1] = "Closed", l2))(Y || {}), Z = ((l2) => (l2[l2.Pointer = 0] = "Pointer", l2[l2.Other = 1] = "Other", l2))(Z || {});
function ee(r) {
  requestAnimationFrame(() => requestAnimationFrame(r));
}
let A = Symbol("MenuContext");
function O(r) {
  let b2 = inject(A, null);
  if (b2 === null) {
    let l2 = new Error(`<${r} /> is missing a parent <Menu /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l2, O), l2;
  }
  return b2;
}
let Me = defineComponent({ name: "Menu", props: { as: { type: [Object, String], default: "template" } }, setup(r, { slots: b2, attrs: l$1 }) {
  let I = ref(1), e = ref(null), f = ref(null), s = ref([]), g = ref(""), d = ref(null), o$12 = ref(1);
  function t2(a2 = (i) => i) {
    let i = d.value !== null ? s.value[d.value] : null, u2 = O$1(a2(s.value.slice()), (v2) => o(v2.dataRef.domRef)), n = i ? u2.indexOf(i) : null;
    return n === -1 && (n = null), { items: u2, activeItemIndex: n };
  }
  let p2 = { menuState: I, buttonRef: e, itemsRef: f, items: s, searchQuery: g, activeItemIndex: d, activationTrigger: o$12, closeMenu: () => {
    I.value = 1, d.value = null;
  }, openMenu: () => I.value = 0, goToItem(a$1, i, u2) {
    let n = t2(), v2 = x(a$1 === a.Specific ? { focus: a.Specific, id: i } : { focus: a$1 }, { resolveItems: () => n.items, resolveActiveIndex: () => n.activeItemIndex, resolveId: (M) => M.id, resolveDisabled: (M) => M.dataRef.disabled });
    g.value = "", d.value = v2, o$12.value = u2 != null ? u2 : 1, s.value = n.items;
  }, search(a2) {
    let u2 = g.value !== "" ? 0 : 1;
    g.value += a2.toLowerCase();
    let v2 = (d.value !== null ? s.value.slice(d.value + u2).concat(s.value.slice(0, d.value + u2)) : s.value).find((x2) => x2.dataRef.textValue.startsWith(g.value) && !x2.dataRef.disabled), M = v2 ? s.value.indexOf(v2) : -1;
    M === -1 || M === d.value || (d.value = M, o$12.value = 1);
  }, clearSearch() {
    g.value = "";
  }, registerItem(a2, i) {
    let u2 = t2((n) => [...n, { id: a2, dataRef: i }]);
    s.value = u2.items, d.value = u2.activeItemIndex, o$12.value = 1;
  }, unregisterItem(a2) {
    let i = t2((u2) => {
      let n = u2.findIndex((v2) => v2.id === a2);
      return n !== -1 && u2.splice(n, 1), u2;
    });
    s.value = i.items, d.value = i.activeItemIndex, o$12.value = 1;
  } };
  return y([e, f], (a2, i) => {
    var u2;
    p2.closeMenu(), w(i, h.Loose) || (a2.preventDefault(), (u2 = o(e)) == null || u2.focus());
  }, computed(() => I.value === 0)), provide(A, p2), c(computed(() => u(I.value, { [0]: l.Open, [1]: l.Closed }))), () => {
    let a2 = { open: I.value === 0, close: p2.closeMenu };
    return H({ ourProps: {}, theirProps: r, slot: a2, slots: b2, attrs: l$1, name: "Menu" });
  };
} }), Re = defineComponent({ name: "MenuButton", props: { disabled: { type: Boolean, default: false }, as: { type: [Object, String], default: "button" }, id: { type: String, default: () => `headlessui-menu-button-${t()}` } }, setup(r, { attrs: b$1, slots: l2, expose: I }) {
  let e = O("MenuButton");
  I({ el: e.buttonRef, $el: e.buttonRef });
  function f(o$2) {
    switch (o$2.key) {
      case o$1.Space:
      case o$1.Enter:
      case o$1.ArrowDown:
        o$2.preventDefault(), o$2.stopPropagation(), e.openMenu(), nextTick(() => {
          var t2;
          (t2 = o(e.itemsRef)) == null || t2.focus({ preventScroll: true }), e.goToItem(a.First);
        });
        break;
      case o$1.ArrowUp:
        o$2.preventDefault(), o$2.stopPropagation(), e.openMenu(), nextTick(() => {
          var t2;
          (t2 = o(e.itemsRef)) == null || t2.focus({ preventScroll: true }), e.goToItem(a.Last);
        });
        break;
    }
  }
  function s(o2) {
    switch (o2.key) {
      case o$1.Space:
        o2.preventDefault();
        break;
    }
  }
  function g(o$12) {
    r.disabled || (e.menuState.value === 0 ? (e.closeMenu(), nextTick(() => {
      var t2;
      return (t2 = o(e.buttonRef)) == null ? void 0 : t2.focus({ preventScroll: true });
    })) : (o$12.preventDefault(), e.openMenu(), ee(() => {
      var t2;
      return (t2 = o(e.itemsRef)) == null ? void 0 : t2.focus({ preventScroll: true });
    })));
  }
  let d = b(computed(() => ({ as: r.as, type: b$1.type })), e.buttonRef);
  return () => {
    var i;
    let o$12 = { open: e.menuState.value === 0 }, { id: t2, ...p2 } = r, a2 = { ref: e.buttonRef, id: t2, type: d.value, "aria-haspopup": "menu", "aria-controls": (i = o(e.itemsRef)) == null ? void 0 : i.id, "aria-expanded": e.menuState.value === 0, onKeydown: f, onKeyup: s, onClick: g };
    return H({ ourProps: a2, theirProps: p2, slot: o$12, attrs: b$1, slots: l2, name: "MenuButton" });
  };
} }), he = defineComponent({ name: "MenuItems", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, id: { type: String, default: () => `headlessui-menu-items-${t()}` } }, setup(r, { attrs: b2, slots: l$1, expose: I }) {
  let e = O("MenuItems"), f = ref(null);
  I({ el: e.itemsRef, $el: e.itemsRef }), p({ container: computed(() => o(e.itemsRef)), enabled: computed(() => e.menuState.value === 0), accept(t2) {
    return t2.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : t2.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(t2) {
    t2.setAttribute("role", "none");
  } });
  function s(t2) {
    var p2;
    switch (f.value && clearTimeout(f.value), t2.key) {
      case o$1.Space:
        if (e.searchQuery.value !== "")
          return t2.preventDefault(), t2.stopPropagation(), e.search(t2.key);
      case o$1.Enter:
        if (t2.preventDefault(), t2.stopPropagation(), e.activeItemIndex.value !== null) {
          let i = e.items.value[e.activeItemIndex.value];
          (p2 = o(i.dataRef.domRef)) == null || p2.click();
        }
        e.closeMenu(), _(o(e.buttonRef));
        break;
      case o$1.ArrowDown:
        return t2.preventDefault(), t2.stopPropagation(), e.goToItem(a.Next);
      case o$1.ArrowUp:
        return t2.preventDefault(), t2.stopPropagation(), e.goToItem(a.Previous);
      case o$1.Home:
      case o$1.PageUp:
        return t2.preventDefault(), t2.stopPropagation(), e.goToItem(a.First);
      case o$1.End:
      case o$1.PageDown:
        return t2.preventDefault(), t2.stopPropagation(), e.goToItem(a.Last);
      case o$1.Escape:
        t2.preventDefault(), t2.stopPropagation(), e.closeMenu(), nextTick(() => {
          var a2;
          return (a2 = o(e.buttonRef)) == null ? void 0 : a2.focus({ preventScroll: true });
        });
        break;
      case o$1.Tab:
        t2.preventDefault(), t2.stopPropagation(), e.closeMenu(), nextTick(() => v(o(e.buttonRef), t2.shiftKey ? N$1.Previous : N$1.Next));
        break;
      default:
        t2.key.length === 1 && (e.search(t2.key), f.value = setTimeout(() => e.clearSearch(), 350));
        break;
    }
  }
  function g(t2) {
    switch (t2.key) {
      case o$1.Space:
        t2.preventDefault();
        break;
    }
  }
  let d = p$1(), o$2 = computed(() => d !== null ? (d.value & l.Open) === l.Open : e.menuState.value === 0);
  return () => {
    var u2, n;
    let t2 = { open: e.menuState.value === 0 }, { id: p2, ...a2 } = r, i = { "aria-activedescendant": e.activeItemIndex.value === null || (u2 = e.items.value[e.activeItemIndex.value]) == null ? void 0 : u2.id, "aria-labelledby": (n = o(e.buttonRef)) == null ? void 0 : n.id, id: p2, onKeydown: s, onKeyup: g, role: "menu", tabIndex: 0, ref: e.itemsRef };
    return H({ ourProps: i, theirProps: a2, slot: t2, attrs: b2, slots: l$1, features: N.RenderStrategy | N.Static, visible: o$2.value, name: "MenuItems" });
  };
} }), ye = defineComponent({ name: "MenuItem", inheritAttrs: false, props: { as: { type: [Object, String], default: "template" }, disabled: { type: Boolean, default: false }, id: { type: String, default: () => `headlessui-menu-item-${t()}` } }, setup(r, { slots: b2, attrs: l2, expose: I }) {
  let e = O("MenuItem"), f = ref(null);
  I({ el: f, $el: f });
  let s = computed(() => e.activeItemIndex.value !== null ? e.items.value[e.activeItemIndex.value].id === r.id : false), g = p$2(f), d = computed(() => ({ disabled: r.disabled, get textValue() {
    return g();
  }, domRef: f }));
  onMounted(() => e.registerItem(r.id, d)), onUnmounted(() => e.unregisterItem(r.id)), watchEffect(() => {
    e.menuState.value === 0 && s.value && e.activationTrigger.value !== 0 && nextTick(() => {
      var n, v2;
      return (v2 = (n = o(f)) == null ? void 0 : n.scrollIntoView) == null ? void 0 : v2.call(n, { block: "nearest" });
    });
  });
  function o$12(n) {
    if (r.disabled)
      return n.preventDefault();
    e.closeMenu(), _(o(e.buttonRef));
  }
  function t2() {
    if (r.disabled)
      return e.goToItem(a.Nothing);
    e.goToItem(a.Specific, r.id);
  }
  let p2 = u$1();
  function a$1(n) {
    p2.update(n);
  }
  function i(n) {
    p2.wasMoved(n) && (r.disabled || s.value || e.goToItem(a.Specific, r.id, 0));
  }
  function u2(n) {
    p2.wasMoved(n) && (r.disabled || s.value && e.goToItem(a.Nothing));
  }
  return () => {
    let { disabled: n } = r, v2 = { active: s.value, disabled: n, close: e.closeMenu }, { id: M, ...x2 } = r;
    return H({ ourProps: { id: M, ref: f, role: "menuitem", tabIndex: n === true ? void 0 : -1, "aria-disabled": n === true ? true : void 0, disabled: void 0, onClick: o$12, onFocus: t2, onPointerenter: a$1, onMouseenter: a$1, onPointermove: i, onMousemove: i, onPointerleave: u2, onMouseleave: u2 }, theirProps: { ...l2, ...x2 }, slot: v2, attrs: l2, slots: b2, name: "MenuItem" });
  };
} });
const _sfc_main = /* @__PURE__ */ defineComponent({
  components: {
    HMenu: Me,
    HMenuButton: Re,
    HMenuItems: he,
    HMenuItem: ye,
    UIcon: __nuxt_component_0,
    UAvatar: __nuxt_component_1,
    UKbd: __nuxt_component_0$1,
    ULink: __nuxt_component_0$2
  },
  inheritAttrs: false,
  props: {
    items: {
      type: Array,
      default: () => []
    },
    mode: {
      type: String,
      default: "click",
      validator: (value) => ["click", "hover"].includes(value)
    },
    disabled: {
      type: Boolean,
      default: false
    },
    popper: {
      type: Object,
      default: () => ({})
    },
    openDelay: {
      type: Number,
      default: 0
    },
    closeDelay: {
      type: Number,
      default: 0
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props, { attrs }) {
    const appConfig2 = useAppConfig();
    const ui = computed(() => defuTwMerge({}, props.ui, appConfig2.ui.dropdown));
    const popper = computed(() => defu(props.mode === "hover" ? { offsetDistance: 0 } : {}, props.popper, ui.value.popper));
    const [trigger, container] = usePopper(popper.value);
    const menuApi = ref(null);
    let openTimeout = null;
    let closeTimeout = null;
    const containerStyle = computed(() => {
      var _a, _b;
      const offsetDistance = ((_a = props.popper) == null ? void 0 : _a.offsetDistance) || ((_b = ui.value.popper) == null ? void 0 : _b.offsetDistance) || 8;
      return props.mode === "hover" ? { paddingTop: `${offsetDistance}px`, paddingBottom: `${offsetDistance}px` } : {};
    });
    const wrapperClass = computed(() => twMerge(ui.value.wrapper, attrs.class));
    function onMouseOver() {
      if (props.mode !== "hover" || !menuApi.value) {
        return;
      }
      if (closeTimeout) {
        clearTimeout(closeTimeout);
        closeTimeout = null;
      }
      if (menuApi.value.menuState === 0) {
        return;
      }
      openTimeout = openTimeout || setTimeout(() => {
        menuApi.value.openMenu && menuApi.value.openMenu();
        openTimeout = null;
      }, props.openDelay);
    }
    function onMouseLeave() {
      if (props.mode !== "hover" || !menuApi.value) {
        return;
      }
      if (openTimeout) {
        clearTimeout(openTimeout);
        openTimeout = null;
      }
      if (menuApi.value.menuState === 1) {
        return;
      }
      closeTimeout = closeTimeout || setTimeout(() => {
        menuApi.value.closeMenu && menuApi.value.closeMenu();
        closeTimeout = null;
      }, props.closeDelay);
    }
    return {
      attrs: omit(attrs, ["class"]),
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      trigger,
      container,
      containerStyle,
      wrapperClass,
      onMouseOver,
      onMouseLeave,
      omit
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HMenu = resolveComponent("HMenu");
  const _component_HMenuButton = resolveComponent("HMenuButton");
  const _component_HMenuItems = resolveComponent("HMenuItems");
  const _component_HMenuItem = resolveComponent("HMenuItem");
  const _component_ULink = __nuxt_component_0$2;
  const _component_UIcon = __nuxt_component_0;
  const _component_UAvatar = __nuxt_component_1;
  const _component_UKbd = __nuxt_component_0$1;
  _push(ssrRenderComponent(_component_HMenu, mergeProps({
    as: "div",
    class: _ctx.wrapperClass
  }, _ctx.attrs, { onMouseleave: _ctx.onMouseLeave }, _attrs), {
    default: withCtx(({ open }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_HMenuButton, {
          ref: "trigger",
          as: "div",
          disabled: _ctx.disabled,
          class: "inline-flex w-full",
          role: "button",
          onMouseover: _ctx.onMouseOver
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              ssrRenderSlot(_ctx.$slots, "default", {
                open,
                disabled: _ctx.disabled
              }, () => {
                _push3(`<button${ssrIncludeBooleanAttr(_ctx.disabled) ? " disabled" : ""}${_scopeId2}> Open </button>`);
              }, _push3, _parent3, _scopeId2);
            } else {
              return [
                renderSlot(_ctx.$slots, "default", {
                  open,
                  disabled: _ctx.disabled
                }, () => [
                  createVNode("button", { disabled: _ctx.disabled }, " Open ", 8, ["disabled"])
                ])
              ];
            }
          }),
          _: 2
        }, _parent2, _scopeId));
        if (open && _ctx.items.length) {
          _push2(`<div class="${ssrRenderClass([_ctx.ui.container, _ctx.ui.width])}" style="${ssrRenderStyle(_ctx.containerStyle)}"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_HMenuItems, {
            class: [_ctx.ui.base, _ctx.ui.divide, _ctx.ui.ring, _ctx.ui.rounded, _ctx.ui.shadow, _ctx.ui.background, _ctx.ui.height],
            static: ""
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<!--[-->`);
                ssrRenderList(_ctx.items, (subItems, index) => {
                  _push3(`<div class="${ssrRenderClass(_ctx.ui.padding)}"${_scopeId2}><!--[-->`);
                  ssrRenderList(subItems, (item, subIndex) => {
                    _push3(ssrRenderComponent(_component_HMenuItem, {
                      key: subIndex,
                      disabled: item.disabled
                    }, {
                      default: withCtx(({ active, disabled: itemDisabled }, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_ULink, mergeProps(_ctx.omit(item, ["label", "slot", "icon", "iconClass", "avatar", "shortcuts", "disabled", "click"]), {
                            class: [_ctx.ui.item.base, _ctx.ui.item.padding, _ctx.ui.item.size, _ctx.ui.item.rounded, active ? _ctx.ui.item.active : _ctx.ui.item.inactive, itemDisabled && _ctx.ui.item.disabled],
                            onClick: item.click
                          }), {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                ssrRenderSlot(_ctx.$slots, item.slot || "item", { item }, () => {
                                  var _a;
                                  if (item.icon) {
                                    _push5(ssrRenderComponent(_component_UIcon, {
                                      name: item.icon,
                                      class: [_ctx.ui.item.icon.base, active ? _ctx.ui.item.icon.active : _ctx.ui.item.icon.inactive, item.iconClass]
                                    }, null, _parent5, _scopeId4));
                                  } else if (item.avatar) {
                                    _push5(ssrRenderComponent(_component_UAvatar, mergeProps({ size: _ctx.ui.item.avatar.size, ...item.avatar }, {
                                      class: _ctx.ui.item.avatar.base
                                    }), null, _parent5, _scopeId4));
                                  } else {
                                    _push5(`<!---->`);
                                  }
                                  _push5(`<span class="truncate"${_scopeId4}>${ssrInterpolate(item.label)}</span>`);
                                  if ((_a = item.shortcuts) == null ? void 0 : _a.length) {
                                    _push5(`<span class="${ssrRenderClass(_ctx.ui.item.shortcuts)}"${_scopeId4}><!--[-->`);
                                    ssrRenderList(item.shortcuts, (shortcut) => {
                                      _push5(ssrRenderComponent(_component_UKbd, { key: shortcut }, {
                                        default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                          if (_push6) {
                                            _push6(`${ssrInterpolate(shortcut)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(shortcut), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent5, _scopeId4));
                                    });
                                    _push5(`<!--]--></span>`);
                                  } else {
                                    _push5(`<!---->`);
                                  }
                                }, _push5, _parent5, _scopeId4);
                              } else {
                                return [
                                  renderSlot(_ctx.$slots, item.slot || "item", { item }, () => {
                                    var _a;
                                    return [
                                      item.icon ? (openBlock(), createBlock(_component_UIcon, {
                                        key: 0,
                                        name: item.icon,
                                        class: [_ctx.ui.item.icon.base, active ? _ctx.ui.item.icon.active : _ctx.ui.item.icon.inactive, item.iconClass]
                                      }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(_component_UAvatar, mergeProps({ key: 1 }, { size: _ctx.ui.item.avatar.size, ...item.avatar }, {
                                        class: _ctx.ui.item.avatar.base
                                      }), null, 16, ["class"])) : createCommentVNode("", true),
                                      createVNode("span", { class: "truncate" }, toDisplayString(item.label), 1),
                                      ((_a = item.shortcuts) == null ? void 0 : _a.length) ? (openBlock(), createBlock("span", {
                                        key: 2,
                                        class: _ctx.ui.item.shortcuts
                                      }, [
                                        (openBlock(true), createBlock(Fragment, null, renderList(item.shortcuts, (shortcut) => {
                                          return openBlock(), createBlock(_component_UKbd, { key: shortcut }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(shortcut), 1)
                                            ]),
                                            _: 2
                                          }, 1024);
                                        }), 128))
                                      ], 2)) : createCommentVNode("", true)
                                    ];
                                  })
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_ULink, mergeProps(_ctx.omit(item, ["label", "slot", "icon", "iconClass", "avatar", "shortcuts", "disabled", "click"]), {
                              class: [_ctx.ui.item.base, _ctx.ui.item.padding, _ctx.ui.item.size, _ctx.ui.item.rounded, active ? _ctx.ui.item.active : _ctx.ui.item.inactive, itemDisabled && _ctx.ui.item.disabled],
                              onClick: item.click
                            }), {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, item.slot || "item", { item }, () => {
                                  var _a;
                                  return [
                                    item.icon ? (openBlock(), createBlock(_component_UIcon, {
                                      key: 0,
                                      name: item.icon,
                                      class: [_ctx.ui.item.icon.base, active ? _ctx.ui.item.icon.active : _ctx.ui.item.icon.inactive, item.iconClass]
                                    }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(_component_UAvatar, mergeProps({ key: 1 }, { size: _ctx.ui.item.avatar.size, ...item.avatar }, {
                                      class: _ctx.ui.item.avatar.base
                                    }), null, 16, ["class"])) : createCommentVNode("", true),
                                    createVNode("span", { class: "truncate" }, toDisplayString(item.label), 1),
                                    ((_a = item.shortcuts) == null ? void 0 : _a.length) ? (openBlock(), createBlock("span", {
                                      key: 2,
                                      class: _ctx.ui.item.shortcuts
                                    }, [
                                      (openBlock(true), createBlock(Fragment, null, renderList(item.shortcuts, (shortcut) => {
                                        return openBlock(), createBlock(_component_UKbd, { key: shortcut }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(shortcut), 1)
                                          ]),
                                          _: 2
                                        }, 1024);
                                      }), 128))
                                    ], 2)) : createCommentVNode("", true)
                                  ];
                                })
                              ]),
                              _: 2
                            }, 1040, ["class", "onClick"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]--></div>`);
                });
                _push3(`<!--]-->`);
              } else {
                return [
                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (subItems, index) => {
                    return openBlock(), createBlock("div", {
                      key: index,
                      class: _ctx.ui.padding
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(subItems, (item, subIndex) => {
                        return openBlock(), createBlock(_component_HMenuItem, {
                          key: subIndex,
                          disabled: item.disabled
                        }, {
                          default: withCtx(({ active, disabled: itemDisabled }) => [
                            createVNode(_component_ULink, mergeProps(_ctx.omit(item, ["label", "slot", "icon", "iconClass", "avatar", "shortcuts", "disabled", "click"]), {
                              class: [_ctx.ui.item.base, _ctx.ui.item.padding, _ctx.ui.item.size, _ctx.ui.item.rounded, active ? _ctx.ui.item.active : _ctx.ui.item.inactive, itemDisabled && _ctx.ui.item.disabled],
                              onClick: item.click
                            }), {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, item.slot || "item", { item }, () => {
                                  var _a;
                                  return [
                                    item.icon ? (openBlock(), createBlock(_component_UIcon, {
                                      key: 0,
                                      name: item.icon,
                                      class: [_ctx.ui.item.icon.base, active ? _ctx.ui.item.icon.active : _ctx.ui.item.icon.inactive, item.iconClass]
                                    }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(_component_UAvatar, mergeProps({ key: 1 }, { size: _ctx.ui.item.avatar.size, ...item.avatar }, {
                                      class: _ctx.ui.item.avatar.base
                                    }), null, 16, ["class"])) : createCommentVNode("", true),
                                    createVNode("span", { class: "truncate" }, toDisplayString(item.label), 1),
                                    ((_a = item.shortcuts) == null ? void 0 : _a.length) ? (openBlock(), createBlock("span", {
                                      key: 2,
                                      class: _ctx.ui.item.shortcuts
                                    }, [
                                      (openBlock(true), createBlock(Fragment, null, renderList(item.shortcuts, (shortcut) => {
                                        return openBlock(), createBlock(_component_UKbd, { key: shortcut }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(shortcut), 1)
                                          ]),
                                          _: 2
                                        }, 1024);
                                      }), 128))
                                    ], 2)) : createCommentVNode("", true)
                                  ];
                                })
                              ]),
                              _: 2
                            }, 1040, ["class", "onClick"])
                          ]),
                          _: 2
                        }, 1032, ["disabled"]);
                      }), 128))
                    ], 2);
                  }), 128))
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
          createVNode(_component_HMenuButton, {
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
                disabled: _ctx.disabled
              }, () => [
                createVNode("button", { disabled: _ctx.disabled }, " Open ", 8, ["disabled"])
              ])
            ]),
            _: 2
          }, 1032, ["disabled", "onMouseover"]),
          open && _ctx.items.length ? (openBlock(), createBlock("div", {
            key: 0,
            ref: "container",
            class: [_ctx.ui.container, _ctx.ui.width],
            style: _ctx.containerStyle,
            onMouseover: _ctx.onMouseOver
          }, [
            createVNode(Transition, mergeProps({ appear: "" }, _ctx.ui.transition), {
              default: withCtx(() => [
                createVNode(_component_HMenuItems, {
                  class: [_ctx.ui.base, _ctx.ui.divide, _ctx.ui.ring, _ctx.ui.rounded, _ctx.ui.shadow, _ctx.ui.background, _ctx.ui.height],
                  static: ""
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (subItems, index) => {
                      return openBlock(), createBlock("div", {
                        key: index,
                        class: _ctx.ui.padding
                      }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(subItems, (item, subIndex) => {
                          return openBlock(), createBlock(_component_HMenuItem, {
                            key: subIndex,
                            disabled: item.disabled
                          }, {
                            default: withCtx(({ active, disabled: itemDisabled }) => [
                              createVNode(_component_ULink, mergeProps(_ctx.omit(item, ["label", "slot", "icon", "iconClass", "avatar", "shortcuts", "disabled", "click"]), {
                                class: [_ctx.ui.item.base, _ctx.ui.item.padding, _ctx.ui.item.size, _ctx.ui.item.rounded, active ? _ctx.ui.item.active : _ctx.ui.item.inactive, itemDisabled && _ctx.ui.item.disabled],
                                onClick: item.click
                              }), {
                                default: withCtx(() => [
                                  renderSlot(_ctx.$slots, item.slot || "item", { item }, () => {
                                    var _a;
                                    return [
                                      item.icon ? (openBlock(), createBlock(_component_UIcon, {
                                        key: 0,
                                        name: item.icon,
                                        class: [_ctx.ui.item.icon.base, active ? _ctx.ui.item.icon.active : _ctx.ui.item.icon.inactive, item.iconClass]
                                      }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(_component_UAvatar, mergeProps({ key: 1 }, { size: _ctx.ui.item.avatar.size, ...item.avatar }, {
                                        class: _ctx.ui.item.avatar.base
                                      }), null, 16, ["class"])) : createCommentVNode("", true),
                                      createVNode("span", { class: "truncate" }, toDisplayString(item.label), 1),
                                      ((_a = item.shortcuts) == null ? void 0 : _a.length) ? (openBlock(), createBlock("span", {
                                        key: 2,
                                        class: _ctx.ui.item.shortcuts
                                      }, [
                                        (openBlock(true), createBlock(Fragment, null, renderList(item.shortcuts, (shortcut) => {
                                          return openBlock(), createBlock(_component_UKbd, { key: shortcut }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(shortcut), 1)
                                            ]),
                                            _: 2
                                          }, 1024);
                                        }), 128))
                                      ], 2)) : createCommentVNode("", true)
                                    ];
                                  })
                                ]),
                                _: 2
                              }, 1040, ["class", "onClick"])
                            ]),
                            _: 2
                          }, 1032, ["disabled"]);
                        }), 128))
                      ], 2);
                    }), 128))
                  ]),
                  _: 3
                }, 8, ["class"])
              ]),
              _: 3
            }, 16)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/elements/Dropdown.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Dropdown = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { Dropdown as default };
//# sourceMappingURL=Dropdown-b2610be0.mjs.map

import { defineComponent, ref, h, computed, provide, onMounted, watch, watchEffect, Fragment, onUnmounted, inject, useSSRContext, resolveComponent, mergeProps, withCtx, createVNode, renderSlot, createTextVNode, toDisplayString, openBlock, createBlock, renderList } from 'vue';
import { b as useAppConfig, d as defuTwMerge } from '../server.mjs';
import { useResizeObserver } from '@vueuse/core';
import { omit } from 'lodash-es';
import { twMerge } from 'tailwind-merge';
import { ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrRenderSlot, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import { o, H, T, t, N, u, a as o$1 } from './dom-075ad068.mjs';
import { O, T as T$1, m, P, N as N$1 } from './focus-management-ebae29a2.mjs';
import { b } from './use-resolve-button-type-de78c0b4.mjs';
import { f, a } from './hidden-990651e2.mjs';
import { t as t$1 } from './micro-task-304cda21.mjs';
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

let d = defineComponent({ props: { onFocus: { type: Function, required: true } }, setup(t2) {
  let n = ref(true);
  return () => n.value ? h(f, { as: "button", type: "button", features: a.Focusable, onFocus(o2) {
    o2.preventDefault();
    let e, a2 = 50;
    function r() {
      var u2;
      if (a2-- <= 0) {
        e && cancelAnimationFrame(e);
        return;
      }
      if ((u2 = t2.onFocus) != null && u2.call(t2)) {
        n.value = false, cancelAnimationFrame(e);
        return;
      }
      e = requestAnimationFrame(r);
    }
    e = requestAnimationFrame(r);
  } }) : null;
} });
var te = ((i) => (i[i.Forwards = 0] = "Forwards", i[i.Backwards = 1] = "Backwards", i))(te || {}), le = ((s) => (s[s.Less = -1] = "Less", s[s.Equal = 0] = "Equal", s[s.Greater = 1] = "Greater", s))(le || {});
let U = Symbol("TabsContext");
function k(a2) {
  let v = inject(U, null);
  if (v === null) {
    let i = new Error(`<${a2} /> is missing a parent <TabGroup /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(i, k), i;
  }
  return v;
}
let j = Symbol("TabsSSRContext"), xe = defineComponent({ name: "TabGroup", emits: { change: (a2) => true }, props: { as: { type: [Object, String], default: "template" }, selectedIndex: { type: [Number], default: null }, defaultIndex: { type: [Number], default: 0 }, vertical: { type: [Boolean], default: false }, manual: { type: [Boolean], default: false } }, inheritAttrs: false, setup(a2, { slots: v, attrs: i, emit: s }) {
  var P2;
  let l = ref((P2 = a2.selectedIndex) != null ? P2 : a2.defaultIndex), n = ref([]), o$12 = ref([]), h$1 = computed(() => a2.selectedIndex !== null), b2 = computed(() => h$1.value ? a2.selectedIndex : l.value);
  function m2(t2) {
    var S;
    let e = O(r.tabs.value, o), u$1 = O(r.panels.value, o), f2 = e.filter((p) => {
      var g;
      return !((g = o(p)) != null && g.hasAttribute("disabled"));
    });
    if (t2 < 0 || t2 > e.length - 1) {
      let p = u(l.value === null ? 0 : Math.sign(t2 - l.value), { [-1]: () => 1, [0]: () => u(Math.sign(t2), { [-1]: () => 0, [0]: () => 0, [1]: () => 1 }), [1]: () => 0 }), g = u(p, { [0]: () => e.indexOf(f2[0]), [1]: () => e.indexOf(f2[f2.length - 1]) });
      g !== -1 && (l.value = g), r.tabs.value = e, r.panels.value = u$1;
    } else {
      let p = e.slice(0, t2), G = [...e.slice(t2), ...p].find((W) => f2.includes(W));
      if (!G)
        return;
      let B = (S = e.indexOf(G)) != null ? S : r.selectedIndex.value;
      B === -1 && (B = r.selectedIndex.value), l.value = B, r.tabs.value = e, r.panels.value = u$1;
    }
  }
  let r = { selectedIndex: computed(() => {
    var t2, e;
    return (e = (t2 = l.value) != null ? t2 : a2.defaultIndex) != null ? e : null;
  }), orientation: computed(() => a2.vertical ? "vertical" : "horizontal"), activation: computed(() => a2.manual ? "manual" : "auto"), tabs: n, panels: o$12, setSelectedIndex(t2) {
    b2.value !== t2 && s("change", t2), h$1.value || m2(t2);
  }, registerTab(t2) {
    var f2;
    if (n.value.includes(t2))
      return;
    let e = n.value[l.value];
    n.value.push(t2), n.value = O(n.value, o);
    let u2 = (f2 = n.value.indexOf(e)) != null ? f2 : l.value;
    u2 !== -1 && (l.value = u2);
  }, unregisterTab(t2) {
    let e = n.value.indexOf(t2);
    e !== -1 && n.value.splice(e, 1);
  }, registerPanel(t2) {
    o$12.value.includes(t2) || (o$12.value.push(t2), o$12.value = O(o$12.value, o));
  }, unregisterPanel(t2) {
    let e = o$12.value.indexOf(t2);
    e !== -1 && o$12.value.splice(e, 1);
  } };
  provide(U, r);
  let w = ref({ tabs: [], panels: [] }), y = ref(false);
  onMounted(() => {
    y.value = true;
  }), provide(j, computed(() => y.value ? null : w.value));
  let E = computed(() => a2.selectedIndex);
  return onMounted(() => {
    watch([E], () => {
      var t2;
      return m2((t2 = a2.selectedIndex) != null ? t2 : a2.defaultIndex);
    }, { immediate: true });
  }), watchEffect(() => {
    if (!h$1.value || b2.value == null || r.tabs.value.length <= 0)
      return;
    let t2 = O(r.tabs.value, o);
    t2.some((u2, f2) => o(r.tabs.value[f2]) !== o(u2)) && r.setSelectedIndex(t2.findIndex((u2) => o(u2) === o(r.tabs.value[b2.value])));
  }), () => {
    let t2 = { selectedIndex: l.value };
    return h(Fragment, [n.value.length <= 0 && h(d, { onFocus: () => {
      for (let e of n.value) {
        let u2 = o(e);
        if ((u2 == null ? void 0 : u2.tabIndex) === 0)
          return u2.focus(), true;
      }
      return false;
    } }), H({ theirProps: { ...i, ...T(a2, ["selectedIndex", "defaultIndex", "manual", "vertical", "onChange"]) }, ourProps: {}, slot: t2, slots: v, attrs: i, name: "TabGroup" })]);
  };
} }), Ie = defineComponent({ name: "TabList", props: { as: { type: [Object, String], default: "div" } }, setup(a2, { attrs: v, slots: i }) {
  let s = k("TabList");
  return () => {
    let l = { selectedIndex: s.selectedIndex.value }, n = { role: "tablist", "aria-orientation": s.orientation.value };
    return H({ ourProps: n, theirProps: a2, slot: l, attrs: v, slots: i, name: "TabList" });
  };
} }), ye = defineComponent({ name: "Tab", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: false }, id: { type: String, default: () => `headlessui-tabs-tab-${t()}` } }, setup(a2, { attrs: v, slots: i, expose: s }) {
  let l = k("Tab"), n = ref(null);
  s({ el: n, $el: n }), onMounted(() => l.registerTab(n)), onUnmounted(() => l.unregisterTab(n));
  let o$2 = inject(j), h2 = computed(() => {
    if (o$2.value) {
      let e = o$2.value.tabs.indexOf(a2.id);
      return e === -1 ? o$2.value.tabs.push(a2.id) - 1 : e;
    }
    return -1;
  }), b$1 = computed(() => {
    let e = l.tabs.value.indexOf(n);
    return e === -1 ? h2.value : e;
  }), m$1 = computed(() => b$1.value === l.selectedIndex.value);
  function r(e) {
    var f2;
    let u2 = e();
    if (u2 === T$1.Success && l.activation.value === "auto") {
      let S = (f2 = m(n)) == null ? void 0 : f2.activeElement, p = l.tabs.value.findIndex((g) => o(g) === S);
      p !== -1 && l.setSelectedIndex(p);
    }
    return u2;
  }
  function w(e) {
    let u$1 = l.tabs.value.map((S) => o(S)).filter(Boolean);
    if (e.key === o$1.Space || e.key === o$1.Enter) {
      e.preventDefault(), e.stopPropagation(), l.setSelectedIndex(b$1.value);
      return;
    }
    switch (e.key) {
      case o$1.Home:
      case o$1.PageUp:
        return e.preventDefault(), e.stopPropagation(), r(() => P(u$1, N$1.First));
      case o$1.End:
      case o$1.PageDown:
        return e.preventDefault(), e.stopPropagation(), r(() => P(u$1, N$1.Last));
    }
    if (r(() => u(l.orientation.value, { vertical() {
      return e.key === o$1.ArrowUp ? P(u$1, N$1.Previous | N$1.WrapAround) : e.key === o$1.ArrowDown ? P(u$1, N$1.Next | N$1.WrapAround) : T$1.Error;
    }, horizontal() {
      return e.key === o$1.ArrowLeft ? P(u$1, N$1.Previous | N$1.WrapAround) : e.key === o$1.ArrowRight ? P(u$1, N$1.Next | N$1.WrapAround) : T$1.Error;
    } })) === T$1.Success)
      return e.preventDefault();
  }
  let y = ref(false);
  function E() {
    var e;
    y.value || (y.value = true, !a2.disabled && ((e = o(n)) == null || e.focus({ preventScroll: true }), l.setSelectedIndex(b$1.value), t$1(() => {
      y.value = false;
    })));
  }
  function P$1(e) {
    e.preventDefault();
  }
  let t2 = b(computed(() => ({ as: a2.as, type: v.type })), n);
  return () => {
    var p;
    let e = { selected: m$1.value }, { id: u2, ...f2 } = a2, S = { ref: n, onKeydown: w, onMousedown: P$1, onClick: E, id: u2, role: "tab", type: t2.value, "aria-controls": (p = o(l.panels.value[b$1.value])) == null ? void 0 : p.id, "aria-selected": m$1.value, tabIndex: m$1.value ? 0 : -1, disabled: a2.disabled ? true : void 0 };
    return H({ ourProps: S, theirProps: f2, slot: e, attrs: v, slots: i, name: "Tab" });
  };
} }), Se = defineComponent({ name: "TabPanels", props: { as: { type: [Object, String], default: "div" } }, setup(a2, { slots: v, attrs: i }) {
  let s = k("TabPanels");
  return () => {
    let l = { selectedIndex: s.selectedIndex.value };
    return H({ theirProps: a2, ourProps: {}, slot: l, attrs: i, slots: v, name: "TabPanels" });
  };
} }), ge = defineComponent({ name: "TabPanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, id: { type: String, default: () => `headlessui-tabs-panel-${t()}` }, tabIndex: { type: Number, default: 0 } }, setup(a2, { attrs: v, slots: i, expose: s }) {
  let l = k("TabPanel"), n = ref(null);
  s({ el: n, $el: n }), onMounted(() => l.registerPanel(n)), onUnmounted(() => l.unregisterPanel(n));
  let o$12 = inject(j), h$1 = computed(() => {
    if (o$12.value) {
      let r = o$12.value.panels.indexOf(a2.id);
      return r === -1 ? o$12.value.panels.push(a2.id) - 1 : r;
    }
    return -1;
  }), b2 = computed(() => {
    let r = l.panels.value.indexOf(n);
    return r === -1 ? h$1.value : r;
  }), m2 = computed(() => b2.value === l.selectedIndex.value);
  return () => {
    var t2;
    let r = { selected: m2.value }, { id: w, tabIndex: y, ...E } = a2, P2 = { ref: n, id: w, role: "tabpanel", "aria-labelledby": (t2 = o(l.tabs.value[b2.value])) == null ? void 0 : t2.id, tabIndex: m2.value ? y : -1 };
    return !m2.value && a2.unmount && !a2.static ? h(f, { as: "span", ...P2 }) : H({ ourProps: P2, theirProps: E, slot: r, attrs: v, slots: i, features: N.Static | N.RenderStrategy, visible: m2.value, name: "TabPanel" });
  };
} });
const _sfc_main = /* @__PURE__ */ defineComponent({
  components: {
    HTabGroup: xe,
    HTabList: Ie,
    HTab: ye,
    HTabPanels: Se,
    HTabPanel: ge
  },
  inheritAttrs: false,
  props: {
    modelValue: {
      type: Number,
      default: void 0
    },
    orientation: {
      type: String,
      default: "horizontal",
      validator: (value) => ["horizontal", "vertical"].includes(value)
    },
    defaultIndex: {
      type: Number,
      default: 0
    },
    items: {
      type: Array,
      default: () => []
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue", "change"],
  setup(props, { attrs, emit }) {
    const appConfig2 = useAppConfig();
    const ui = computed(() => defuTwMerge({}, props.ui, appConfig2.ui.tabs));
    const listRef = ref();
    const itemRefs = ref([]);
    const markerRef = ref();
    const selectedIndex = ref(props.modelValue || props.defaultIndex);
    const wrapperClass = computed(() => twMerge(ui.value.wrapper, attrs.class));
    function calcMarkerSize(index) {
      var _a;
      const tab = (_a = itemRefs.value[index]) == null ? void 0 : _a.$el;
      if (!tab) {
        return;
      }
      markerRef.value.style.top = `${tab.offsetTop}px`;
      markerRef.value.style.left = `${tab.offsetLeft}px`;
      markerRef.value.style.width = `${tab.offsetWidth}px`;
      markerRef.value.style.height = `${tab.offsetHeight}px`;
    }
    function onChange(index) {
      selectedIndex.value = index;
      emit("change", index);
      if (props.modelValue !== void 0) {
        emit("update:modelValue", index);
      }
      calcMarkerSize(index);
    }
    useResizeObserver(listRef, () => {
      calcMarkerSize(selectedIndex.value);
    });
    watch(() => props.modelValue, (value) => {
      selectedIndex.value = value;
      calcMarkerSize(value);
    });
    return {
      attrs: omit(attrs, ["class"]),
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      listRef,
      itemRefs,
      markerRef,
      selectedIndex,
      wrapperClass,
      onChange
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HTabGroup = resolveComponent("HTabGroup");
  const _component_HTabList = resolveComponent("HTabList");
  const _component_HTab = resolveComponent("HTab");
  const _component_HTabPanels = resolveComponent("HTabPanels");
  const _component_HTabPanel = resolveComponent("HTabPanel");
  _push(ssrRenderComponent(_component_HTabGroup, mergeProps({
    vertical: _ctx.orientation === "vertical",
    "selected-index": _ctx.selectedIndex,
    as: "div",
    class: _ctx.wrapperClass
  }, _ctx.attrs, { onChange: _ctx.onChange }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_HTabList, {
          ref: "listRef",
          class: [_ctx.ui.list.base, _ctx.ui.list.background, _ctx.ui.list.rounded, _ctx.ui.list.shadow, _ctx.ui.list.padding, _ctx.ui.list.width, _ctx.orientation === "horizontal" && _ctx.ui.list.height, _ctx.orientation === "horizontal" && "inline-grid items-center"],
          style: [_ctx.orientation === "horizontal" && `grid-template-columns: repeat(${_ctx.items.length}, minmax(0, 1fr))`]
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="${ssrRenderClass(_ctx.ui.list.marker.wrapper)}"${_scopeId2}><div class="${ssrRenderClass([_ctx.ui.list.marker.base, _ctx.ui.list.marker.background, _ctx.ui.list.marker.rounded, _ctx.ui.list.marker.shadow])}"${_scopeId2}></div></div><!--[-->`);
              ssrRenderList(_ctx.items, (item, index) => {
                _push3(ssrRenderComponent(_component_HTab, {
                  key: index,
                  ref_for: true,
                  ref: "itemRefs",
                  disabled: item.disabled,
                  as: "template"
                }, {
                  default: withCtx(({ selected, disabled }, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`<button class="${ssrRenderClass([_ctx.ui.list.tab.base, _ctx.ui.list.tab.background, _ctx.ui.list.tab.height, _ctx.ui.list.tab.padding, _ctx.ui.list.tab.size, _ctx.ui.list.tab.font, _ctx.ui.list.tab.rounded, _ctx.ui.list.tab.shadow, selected ? _ctx.ui.list.tab.active : _ctx.ui.list.tab.inactive])}"${_scopeId3}>`);
                      ssrRenderSlot(_ctx.$slots, "default", {
                        item,
                        index,
                        selected,
                        disabled
                      }, () => {
                        _push4(`${ssrInterpolate(item.label)}`);
                      }, _push4, _parent4, _scopeId3);
                      _push4(`</button>`);
                    } else {
                      return [
                        createVNode("button", {
                          class: [_ctx.ui.list.tab.base, _ctx.ui.list.tab.background, _ctx.ui.list.tab.height, _ctx.ui.list.tab.padding, _ctx.ui.list.tab.size, _ctx.ui.list.tab.font, _ctx.ui.list.tab.rounded, _ctx.ui.list.tab.shadow, selected ? _ctx.ui.list.tab.active : _ctx.ui.list.tab.inactive]
                        }, [
                          renderSlot(_ctx.$slots, "default", {
                            item,
                            index,
                            selected,
                            disabled
                          }, () => [
                            createTextVNode(toDisplayString(item.label), 1)
                          ])
                        ], 2)
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
              });
              _push3(`<!--]-->`);
            } else {
              return [
                createVNode("div", {
                  ref: "markerRef",
                  class: _ctx.ui.list.marker.wrapper
                }, [
                  createVNode("div", {
                    class: [_ctx.ui.list.marker.base, _ctx.ui.list.marker.background, _ctx.ui.list.marker.rounded, _ctx.ui.list.marker.shadow]
                  }, null, 2)
                ], 2),
                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (item, index) => {
                  return openBlock(), createBlock(_component_HTab, {
                    key: index,
                    ref_for: true,
                    ref: "itemRefs",
                    disabled: item.disabled,
                    as: "template"
                  }, {
                    default: withCtx(({ selected, disabled }) => [
                      createVNode("button", {
                        class: [_ctx.ui.list.tab.base, _ctx.ui.list.tab.background, _ctx.ui.list.tab.height, _ctx.ui.list.tab.padding, _ctx.ui.list.tab.size, _ctx.ui.list.tab.font, _ctx.ui.list.tab.rounded, _ctx.ui.list.tab.shadow, selected ? _ctx.ui.list.tab.active : _ctx.ui.list.tab.inactive]
                      }, [
                        renderSlot(_ctx.$slots, "default", {
                          item,
                          index,
                          selected,
                          disabled
                        }, () => [
                          createTextVNode(toDisplayString(item.label), 1)
                        ])
                      ], 2)
                    ]),
                    _: 2
                  }, 1032, ["disabled"]);
                }), 128))
              ];
            }
          }),
          _: 3
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_HTabPanels, {
          class: _ctx.ui.container
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<!--[-->`);
              ssrRenderList(_ctx.items, (item, index) => {
                _push3(ssrRenderComponent(_component_HTabPanel, {
                  key: index,
                  class: _ctx.ui.base
                }, {
                  default: withCtx(({ selected }, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      ssrRenderSlot(_ctx.$slots, item.slot || "item", {
                        item,
                        index,
                        selected
                      }, () => {
                        _push4(`${ssrInterpolate(item.content)}`);
                      }, _push4, _parent4, _scopeId3);
                    } else {
                      return [
                        renderSlot(_ctx.$slots, item.slot || "item", {
                          item,
                          index,
                          selected
                        }, () => [
                          createTextVNode(toDisplayString(item.content), 1)
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
              });
              _push3(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (item, index) => {
                  return openBlock(), createBlock(_component_HTabPanel, {
                    key: index,
                    class: _ctx.ui.base
                  }, {
                    default: withCtx(({ selected }) => [
                      renderSlot(_ctx.$slots, item.slot || "item", {
                        item,
                        index,
                        selected
                      }, () => [
                        createTextVNode(toDisplayString(item.content), 1)
                      ])
                    ]),
                    _: 2
                  }, 1032, ["class"]);
                }), 128))
              ];
            }
          }),
          _: 3
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_HTabList, {
            ref: "listRef",
            class: [_ctx.ui.list.base, _ctx.ui.list.background, _ctx.ui.list.rounded, _ctx.ui.list.shadow, _ctx.ui.list.padding, _ctx.ui.list.width, _ctx.orientation === "horizontal" && _ctx.ui.list.height, _ctx.orientation === "horizontal" && "inline-grid items-center"],
            style: [_ctx.orientation === "horizontal" && `grid-template-columns: repeat(${_ctx.items.length}, minmax(0, 1fr))`]
          }, {
            default: withCtx(() => [
              createVNode("div", {
                ref: "markerRef",
                class: _ctx.ui.list.marker.wrapper
              }, [
                createVNode("div", {
                  class: [_ctx.ui.list.marker.base, _ctx.ui.list.marker.background, _ctx.ui.list.marker.rounded, _ctx.ui.list.marker.shadow]
                }, null, 2)
              ], 2),
              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (item, index) => {
                return openBlock(), createBlock(_component_HTab, {
                  key: index,
                  ref_for: true,
                  ref: "itemRefs",
                  disabled: item.disabled,
                  as: "template"
                }, {
                  default: withCtx(({ selected, disabled }) => [
                    createVNode("button", {
                      class: [_ctx.ui.list.tab.base, _ctx.ui.list.tab.background, _ctx.ui.list.tab.height, _ctx.ui.list.tab.padding, _ctx.ui.list.tab.size, _ctx.ui.list.tab.font, _ctx.ui.list.tab.rounded, _ctx.ui.list.tab.shadow, selected ? _ctx.ui.list.tab.active : _ctx.ui.list.tab.inactive]
                    }, [
                      renderSlot(_ctx.$slots, "default", {
                        item,
                        index,
                        selected,
                        disabled
                      }, () => [
                        createTextVNode(toDisplayString(item.label), 1)
                      ])
                    ], 2)
                  ]),
                  _: 2
                }, 1032, ["disabled"]);
              }), 128))
            ]),
            _: 3
          }, 8, ["class", "style"]),
          createVNode(_component_HTabPanels, {
            class: _ctx.ui.container
          }, {
            default: withCtx(() => [
              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (item, index) => {
                return openBlock(), createBlock(_component_HTabPanel, {
                  key: index,
                  class: _ctx.ui.base
                }, {
                  default: withCtx(({ selected }) => [
                    renderSlot(_ctx.$slots, item.slot || "item", {
                      item,
                      index,
                      selected
                    }, () => [
                      createTextVNode(toDisplayString(item.content), 1)
                    ])
                  ]),
                  _: 2
                }, 1032, ["class"]);
              }), 128))
            ]),
            _: 3
          }, 8, ["class"])
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/navigation/Tabs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Tabs = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { Tabs as default };
//# sourceMappingURL=Tabs-9f722e18.mjs.map

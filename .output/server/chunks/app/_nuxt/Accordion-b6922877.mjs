import __nuxt_component_2 from './Button-eb524539.mjs';
import __nuxt_component_0 from './Icon-855b8e20.mjs';
import { defineComponent, ref, provide, computed, onMounted, onUnmounted, watchEffect, useSSRContext, inject, watch, resolveComponent, mergeProps, withCtx, createVNode, renderSlot, createTextVNode, toDisplayString, Transition, withDirectives, vShow } from 'vue';
import { a as appConfig, b as useAppConfig, d as defuTwMerge } from '../server.mjs';
import { omit } from 'lodash-es';
import { twMerge } from 'tailwind-merge';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderSlot, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import { t, u, o, H, N, a as o$1 } from './dom-075ad068.mjs';
import { c, l, p } from './open-closed-4c4062c8.mjs';
import { b } from './use-resolve-button-type-de78c0b4.mjs';
import './Link-d85e4f71.mjs';
import './nuxt-link-dcdeaa20.mjs';
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

var $ = ((o2) => (o2[o2.Open = 0] = "Open", o2[o2.Closed = 1] = "Closed", o2))($ || {});
let T = Symbol("DisclosureContext");
function O(t2) {
  let r = inject(T, null);
  if (r === null) {
    let o2 = new Error(`<${t2} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o2, O), o2;
  }
  return r;
}
let k = Symbol("DisclosurePanelContext");
function U() {
  return inject(k, null);
}
let V = defineComponent({ name: "Disclosure", props: { as: { type: [Object, String], default: "template" }, defaultOpen: { type: [Boolean], default: false } }, setup(t$1, { slots: r, attrs: o$12 }) {
  let s = ref(t$1.defaultOpen ? 0 : 1), e = ref(null), i = ref(null), n = { buttonId: ref(`headlessui-disclosure-button-${t()}`), panelId: ref(`headlessui-disclosure-panel-${t()}`), disclosureState: s, panel: e, button: i, toggleDisclosure() {
    s.value = u(s.value, { [0]: 1, [1]: 0 });
  }, closeDisclosure() {
    s.value !== 1 && (s.value = 1);
  }, close(l2) {
    n.closeDisclosure();
    let a = (() => l2 ? l2 instanceof HTMLElement ? l2 : l2.value instanceof HTMLElement ? o(l2) : o(n.button) : o(n.button))();
    a == null || a.focus();
  } };
  return provide(T, n), c(computed(() => u(s.value, { [0]: l.Open, [1]: l.Closed }))), () => {
    let { defaultOpen: l2, ...a } = t$1, c2 = { open: s.value === 0, close: n.close };
    return H({ theirProps: a, ourProps: {}, slot: c2, slots: r, attrs: o$12, name: "Disclosure" });
  };
} }), X = defineComponent({ name: "DisclosureButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: false }, id: { type: String, default: null } }, setup(t2, { attrs: r, slots: o$2, expose: s }) {
  let e = O("DisclosureButton"), i = U(), n = computed(() => i === null ? false : i.value === e.panelId.value);
  onMounted(() => {
    n.value || t2.id !== null && (e.buttonId.value = t2.id);
  }), onUnmounted(() => {
    n.value || (e.buttonId.value = null);
  });
  let l2 = ref(null);
  s({ el: l2, $el: l2 }), n.value || watchEffect(() => {
    e.button.value = l2.value;
  });
  let a = b(computed(() => ({ as: t2.as, type: r.type })), l2);
  function c2() {
    var u2;
    t2.disabled || (n.value ? (e.toggleDisclosure(), (u2 = o(e.button)) == null || u2.focus()) : e.toggleDisclosure());
  }
  function D(u2) {
    var S;
    if (!t2.disabled)
      if (n.value)
        switch (u2.key) {
          case o$1.Space:
          case o$1.Enter:
            u2.preventDefault(), u2.stopPropagation(), e.toggleDisclosure(), (S = o(e.button)) == null || S.focus();
            break;
        }
      else
        switch (u2.key) {
          case o$1.Space:
          case o$1.Enter:
            u2.preventDefault(), u2.stopPropagation(), e.toggleDisclosure();
            break;
        }
  }
  function v(u2) {
    switch (u2.key) {
      case o$1.Space:
        u2.preventDefault();
        break;
    }
  }
  return () => {
    var C;
    let u2 = { open: e.disclosureState.value === 0 }, { id: S, ...K } = t2, M = n.value ? { ref: l2, type: a.value, onClick: c2, onKeydown: D } : { id: (C = e.buttonId.value) != null ? C : S, ref: l2, type: a.value, "aria-expanded": e.disclosureState.value === 0, "aria-controls": e.disclosureState.value === 0 || o(e.panel) ? e.panelId.value : void 0, disabled: t2.disabled ? true : void 0, onClick: c2, onKeydown: D, onKeyup: v };
    return H({ ourProps: M, theirProps: K, slot: u2, attrs: r, slots: o$2, name: "DisclosureButton" });
  };
} }), Y = defineComponent({ name: "DisclosurePanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, id: { type: String, default: null } }, setup(t2, { attrs: r, slots: o2, expose: s }) {
  let e = O("DisclosurePanel");
  onMounted(() => {
    t2.id !== null && (e.panelId.value = t2.id);
  }), onUnmounted(() => {
    e.panelId.value = null;
  }), s({ el: e.panel, $el: e.panel }), provide(k, e.panelId);
  let i = p(), n = computed(() => i !== null ? (i.value & l.Open) === l.Open : e.disclosureState.value === 0);
  return () => {
    var v;
    let l2 = { open: e.disclosureState.value === 0, close: e.close }, { id: a, ...c2 } = t2, D = { id: (v = e.panelId.value) != null ? v : a, ref: e.panel };
    return H({ ourProps: D, theirProps: c2, slot: l2, attrs: r, slots: o2, features: N.RenderStrategy | N.Static, visible: n.value, name: "DisclosurePanel" });
  };
} });
const StateEmitter = /* @__PURE__ */ defineComponent({
  props: {
    open: {
      type: Boolean,
      default: false
    }
  },
  emits: ["open", "close"],
  setup(props, { emit }) {
    watch(() => props.open, (value) => {
      if (value) {
        emit("open");
      } else {
        emit("close");
      }
    });
    return () => {
    };
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  components: {
    HDisclosure: V,
    HDisclosureButton: X,
    HDisclosurePanel: Y,
    UIcon: __nuxt_component_0,
    UButton: __nuxt_component_2,
    StateEmitter
  },
  inheritAttrs: false,
  props: {
    items: {
      type: Array,
      default: () => []
    },
    defaultOpen: {
      type: Boolean,
      default: false
    },
    openIcon: {
      type: String,
      default: () => appConfig.ui.accordion.default.openIcon
    },
    closeIcon: {
      type: String,
      default: () => appConfig.ui.accordion.default.closeIcon
    },
    multiple: {
      type: Boolean,
      default: false
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props, { attrs }) {
    const appConfig2 = useAppConfig();
    const ui = computed(() => defuTwMerge({}, props.ui, appConfig2.ui.accordion));
    const uiButton = computed(() => appConfig2.ui.button);
    const wrapperClass = computed(() => twMerge(ui.value.wrapper, attrs.class));
    const buttonRefs = ref([]);
    function closeOthers(itemIndex) {
      if (!props.items[itemIndex].closeOthers && props.multiple) {
        return;
      }
      buttonRefs.value.forEach((close, index) => {
        if (index === itemIndex)
          return;
        close();
      });
    }
    function onEnter(el, done) {
      el.style.height = "0";
      el.offsetHeight;
      el.style.height = el.scrollHeight + "px";
      el.addEventListener("transitionend", done, { once: true });
    }
    function onBeforeLeave(el) {
      el.style.height = el.scrollHeight + "px";
      el.offsetHeight;
    }
    function onAfterEnter(el) {
      el.style.height = "auto";
    }
    function onLeave(el, done) {
      el.style.height = "0";
      el.addEventListener("transitionend", done, { once: true });
    }
    return {
      attrs: omit(attrs, ["class"]),
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      uiButton,
      wrapperClass,
      buttonRefs,
      closeOthers,
      omit,
      onEnter,
      onBeforeLeave,
      onAfterEnter,
      onLeave
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HDisclosure = resolveComponent("HDisclosure");
  const _component_HDisclosureButton = resolveComponent("HDisclosureButton");
  const _component_UButton = __nuxt_component_2;
  const _component_UIcon = __nuxt_component_0;
  const _component_StateEmitter = resolveComponent("StateEmitter");
  const _component_HDisclosurePanel = resolveComponent("HDisclosurePanel");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: _ctx.wrapperClass }, _attrs))}><!--[-->`);
  ssrRenderList(_ctx.items, (item, index) => {
    _push(ssrRenderComponent(_component_HDisclosure, {
      key: index,
      "default-open": _ctx.defaultOpen || item.defaultOpen
    }, {
      default: withCtx(({ open, close }, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_HDisclosureButton, {
            ref_for: true,
            ref: () => _ctx.buttonRefs[index] = close,
            as: "template",
            disabled: item.disabled
          }, {
            default: withCtx((_, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                ssrRenderSlot(_ctx.$slots, "default", {
                  item,
                  index,
                  open,
                  close
                }, () => {
                  _push3(ssrRenderComponent(_component_UButton, { ..._ctx.omit(_ctx.ui.default, ["openIcon", "closeIcon"]), ..._ctx.attrs, ..._ctx.omit(item, ["slot", "disabled", "content", "defaultOpen"]) }, {
                    trailing: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UIcon, {
                          name: !open ? _ctx.openIcon : _ctx.closeIcon ? _ctx.closeIcon : _ctx.openIcon,
                          class: [
                            open && !_ctx.closeIcon ? "-rotate-180" : "",
                            _ctx.uiButton.icon.size[item.size || _ctx.uiButton.default.size],
                            _ctx.ui.item.icon
                          ]
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UIcon, {
                            name: !open ? _ctx.openIcon : _ctx.closeIcon ? _ctx.closeIcon : _ctx.openIcon,
                            class: [
                              open && !_ctx.closeIcon ? "-rotate-180" : "",
                              _ctx.uiButton.icon.size[item.size || _ctx.uiButton.default.size],
                              _ctx.ui.item.icon
                            ]
                          }, null, 8, ["name", "class"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                }, _push3, _parent3, _scopeId2);
              } else {
                return [
                  renderSlot(_ctx.$slots, "default", {
                    item,
                    index,
                    open,
                    close
                  }, () => [
                    createVNode(_component_UButton, { ..._ctx.omit(_ctx.ui.default, ["openIcon", "closeIcon"]), ..._ctx.attrs, ..._ctx.omit(item, ["slot", "disabled", "content", "defaultOpen"]) }, {
                      trailing: withCtx(() => [
                        createVNode(_component_UIcon, {
                          name: !open ? _ctx.openIcon : _ctx.closeIcon ? _ctx.closeIcon : _ctx.openIcon,
                          class: [
                            open && !_ctx.closeIcon ? "-rotate-180" : "",
                            _ctx.uiButton.icon.size[item.size || _ctx.uiButton.default.size],
                            _ctx.ui.item.icon
                          ]
                        }, null, 8, ["name", "class"])
                      ]),
                      _: 2
                    }, 1040)
                  ])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
          _push2(ssrRenderComponent(_component_StateEmitter, {
            open,
            onOpen: ($event) => _ctx.closeOthers(index)
          }, null, _parent2, _scopeId));
          _push2(`<div style="${ssrRenderStyle(open ? null : { display: "none" })}"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_HDisclosurePanel, {
            class: [_ctx.ui.item.base, _ctx.ui.item.size, _ctx.ui.item.color, _ctx.ui.item.padding],
            static: ""
          }, {
            default: withCtx((_, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                ssrRenderSlot(_ctx.$slots, item.slot || "item", {
                  item,
                  index,
                  open,
                  close
                }, () => {
                  _push3(`${ssrInterpolate(item.content)}`);
                }, _push3, _parent3, _scopeId2);
              } else {
                return [
                  renderSlot(_ctx.$slots, item.slot || "item", {
                    item,
                    index,
                    open,
                    close
                  }, () => [
                    createTextVNode(toDisplayString(item.content), 1)
                  ])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
          _push2(`</div>`);
        } else {
          return [
            createVNode(_component_HDisclosureButton, {
              ref_for: true,
              ref: () => _ctx.buttonRefs[index] = close,
              as: "template",
              disabled: item.disabled
            }, {
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "default", {
                  item,
                  index,
                  open,
                  close
                }, () => [
                  createVNode(_component_UButton, { ..._ctx.omit(_ctx.ui.default, ["openIcon", "closeIcon"]), ..._ctx.attrs, ..._ctx.omit(item, ["slot", "disabled", "content", "defaultOpen"]) }, {
                    trailing: withCtx(() => [
                      createVNode(_component_UIcon, {
                        name: !open ? _ctx.openIcon : _ctx.closeIcon ? _ctx.closeIcon : _ctx.openIcon,
                        class: [
                          open && !_ctx.closeIcon ? "-rotate-180" : "",
                          _ctx.uiButton.icon.size[item.size || _ctx.uiButton.default.size],
                          _ctx.ui.item.icon
                        ]
                      }, null, 8, ["name", "class"])
                    ]),
                    _: 2
                  }, 1040)
                ])
              ]),
              _: 2
            }, 1032, ["disabled"]),
            createVNode(_component_StateEmitter, {
              open,
              onOpen: ($event) => _ctx.closeOthers(index)
            }, null, 8, ["open", "onOpen"]),
            createVNode(Transition, mergeProps(_ctx.ui.transition, {
              onEnter: _ctx.onEnter,
              onAfterEnter: _ctx.onAfterEnter,
              onBeforeLeave: _ctx.onBeforeLeave,
              onLeave: _ctx.onLeave
            }), {
              default: withCtx(() => [
                withDirectives(createVNode("div", null, [
                  createVNode(_component_HDisclosurePanel, {
                    class: [_ctx.ui.item.base, _ctx.ui.item.size, _ctx.ui.item.color, _ctx.ui.item.padding],
                    static: ""
                  }, {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, item.slot || "item", {
                        item,
                        index,
                        open,
                        close
                      }, () => [
                        createTextVNode(toDisplayString(item.content), 1)
                      ])
                    ]),
                    _: 2
                  }, 1032, ["class"])
                ], 512), [
                  [vShow, open]
                ])
              ]),
              _: 2
            }, 1040, ["onEnter", "onAfterEnter", "onBeforeLeave", "onLeave"])
          ];
        }
      }),
      _: 2
    }, _parent));
  });
  _push(`<!--]--></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/elements/Accordion.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Accordion = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { Accordion as default };
//# sourceMappingURL=Accordion-b6922877.mjs.map

import __nuxt_component_0 from './Icon-855b8e20.mjs';
import __nuxt_component_2 from './Button-eb524539.mjs';
import { useSSRContext, defineComponent, computed, ref, watch, resolveComponent, mergeProps, withCtx, createSlots, renderList, renderSlot, openBlock, createBlock, Fragment, withDirectives, createVNode, createCommentVNode, vShow, toDisplayString } from 'vue';
import { x as defu } from '../../nitro/node-server.mjs';
import { a as appConfig, b as useAppConfig, d as defuTwMerge } from '../server.mjs';
import { useDebounceFn } from '@vueuse/core';
import { useFuse } from '@vueuse/integrations/useFuse';
import { twMerge, twJoin } from 'tailwind-merge';
import { map, groupBy, omit } from 'lodash-es';
import CommandPaletteGroup from './CommandPaletteGroup-54e2ee58.mjs';
import { ssrRenderComponent, ssrRenderStyle, ssrRenderClass, ssrRenderList, ssrRenderSlot, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import { J as Je, Q as Qe, X as Xe } from './combobox-7aea91ec.mjs';
import './Link-d85e4f71.mjs';
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
import './Avatar-07284992.mjs';
import './Kbd-ef6dba12.mjs';
import './dom-075ad068.mjs';
import './use-tracked-pointer-4d7dbbdb.mjs';
import './focus-management-ebae29a2.mjs';
import './open-closed-4c4062c8.mjs';
import './use-resolve-button-type-de78c0b4.mjs';
import './use-outside-click-a351c925.mjs';
import './hidden-990651e2.mjs';
import './use-controllable-8cdd501d.mjs';
import './disposables-a9659b4d.mjs';
import './micro-task-304cda21.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  components: {
    HCombobox: Je,
    HComboboxInput: Qe,
    HComboboxOptions: Xe,
    UIcon: __nuxt_component_0,
    UButton: __nuxt_component_2,
    CommandPaletteGroup
  },
  inheritAttrs: false,
  props: {
    modelValue: {
      type: [String, Number, Object, Array],
      default: null
    },
    by: {
      type: String,
      default: "id"
    },
    multiple: {
      type: Boolean,
      default: false
    },
    nullable: {
      type: Boolean,
      default: false
    },
    searchable: {
      type: Boolean,
      default: true
    },
    loading: {
      type: Boolean,
      default: false
    },
    groups: {
      type: Array,
      default: () => []
    },
    icon: {
      type: String,
      default: () => appConfig.ui.commandPalette.default.icon
    },
    loadingIcon: {
      type: String,
      default: () => appConfig.ui.commandPalette.default.loadingIcon
    },
    selectedIcon: {
      type: String,
      default: () => appConfig.ui.commandPalette.default.selectedIcon
    },
    closeButton: {
      type: Object,
      default: () => appConfig.ui.commandPalette.default.closeButton
    },
    emptyState: {
      type: Object,
      default: () => appConfig.ui.commandPalette.default.emptyState
    },
    placeholder: {
      type: String,
      default: "Search..."
    },
    groupAttribute: {
      type: String,
      default: "label"
    },
    commandAttribute: {
      type: String,
      default: "label"
    },
    autoselect: {
      type: Boolean,
      default: true
    },
    autoclear: {
      type: Boolean,
      default: true
    },
    debounce: {
      type: Number,
      default: 200
    },
    fuse: {
      type: Object,
      default: () => ({})
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue", "close"],
  setup(props, { emit, attrs, expose }) {
    const appConfig2 = useAppConfig();
    const ui = computed(() => defuTwMerge({}, props.ui, appConfig2.ui.commandPalette));
    const query = ref("");
    const comboboxInput = ref();
    const comboboxApi = ref(null);
    const isLoading = ref(false);
    const options = computed(() => defu({}, props.fuse, {
      fuseOptions: {
        keys: [props.commandAttribute]
      },
      resultLimit: 12,
      matchAllWhenSearchEmpty: true
    }));
    const commands = computed(() => props.groups.filter((group) => !group.search).reduce((acc, group) => {
      return acc.concat(group.commands.map((command) => ({ ...command, group: group.key })));
    }, []));
    const searchResults = ref({});
    const { results } = useFuse(query, commands, options);
    const groups = computed(() => [
      ...map(groupBy(results.value, (command) => command.item.group), (results2, key) => {
        const commands2 = results2.map((result) => {
          const { item, ...data } = result;
          return {
            ...item,
            ...data
          };
        });
        return {
          ...props.groups.find((group) => group.key === key),
          commands: commands2.slice(0, options.value.resultLimit)
        };
      }),
      ...props.groups.filter((group) => !!group.search).map((group) => ({ ...group, commands: (searchResults.value[group.key] || []).slice(0, options.value.resultLimit) })).filter((group) => group.commands.length)
    ]);
    const debouncedSearch = useDebounceFn(async () => {
      const searchableGroups = props.groups.filter((group) => !!group.search);
      if (!searchableGroups.length) {
        return;
      }
      isLoading.value = true;
      await Promise.all(searchableGroups.map(async (group) => {
        searchResults.value[group.key] = await group.search(query.value);
      }));
      isLoading.value = false;
    }, props.debounce);
    watch(query, () => {
      debouncedSearch();
      setTimeout(() => {
        var _a;
        (_a = comboboxInput.value) == null ? void 0 : _a.$el.dispatchEvent(new KeyboardEvent("keydown", { key: "PageUp" }));
      }, 0);
    });
    const wrapperClass = computed(() => twMerge(ui.value.wrapper, attrs.class));
    const iconName = computed(() => {
      if ((props.loading || isLoading.value) && props.loadingIcon) {
        return props.loadingIcon;
      }
      return props.icon;
    });
    const iconClass = computed(() => {
      return twJoin(
        ui.value.input.icon.base,
        ui.value.input.icon.size,
        (props.loading || isLoading.value) && props.loadingIcon && "animate-spin"
      );
    });
    const emptyState = computed(() => ({ ...ui.value.default.emptyState, ...props.emptyState }));
    function onSelect(option) {
      emit("update:modelValue", option, { query: query.value });
      if (props.autoclear) {
        setTimeout(() => {
          query.value = "";
        }, 0);
      }
    }
    function onClear() {
      if (query.value) {
        query.value = "";
      } else {
        emit("close");
      }
    }
    expose({
      query,
      updateQuery: (q) => {
        query.value = q;
      },
      comboboxApi,
      results
    });
    return {
      attrs: omit(attrs, ["class"]),
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      // eslint-disable-next-line vue/no-dupe-keys
      groups,
      comboboxInput,
      query,
      wrapperClass,
      iconName,
      iconClass,
      // eslint-disable-next-line vue/no-dupe-keys
      emptyState,
      onSelect,
      onClear
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HCombobox = resolveComponent("HCombobox");
  const _component_UIcon = __nuxt_component_0;
  const _component_HComboboxInput = resolveComponent("HComboboxInput");
  const _component_UButton = __nuxt_component_2;
  const _component_HComboboxOptions = resolveComponent("HComboboxOptions");
  const _component_CommandPaletteGroup = resolveComponent("CommandPaletteGroup");
  _push(ssrRenderComponent(_component_HCombobox, mergeProps({
    by: _ctx.by,
    "model-value": _ctx.modelValue,
    multiple: _ctx.multiple,
    nullable: _ctx.nullable,
    class: _ctx.wrapperClass
  }, _ctx.attrs, {
    as: "div",
    "onUpdate:modelValue": _ctx.onSelect
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div style="${ssrRenderStyle(_ctx.searchable ? null : { display: "none" })}" class="${ssrRenderClass(_ctx.ui.input.wrapper)}"${_scopeId}>`);
        if (_ctx.iconName) {
          _push2(ssrRenderComponent(_component_UIcon, {
            name: _ctx.iconName,
            class: _ctx.iconClass,
            "aria-hidden": "true"
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(ssrRenderComponent(_component_HComboboxInput, {
          ref: "comboboxInput",
          value: _ctx.query,
          class: [_ctx.ui.input.base, _ctx.ui.input.size, _ctx.ui.input.height, _ctx.ui.input.padding, _ctx.icon && _ctx.ui.input.icon.padding],
          placeholder: _ctx.placeholder,
          autocomplete: "off",
          onChange: ($event) => _ctx.query = $event.target.value
        }, null, _parent2, _scopeId));
        if (_ctx.closeButton) {
          _push2(ssrRenderComponent(_component_UButton, mergeProps({ ..._ctx.ui.default.closeButton, ..._ctx.closeButton }, {
            class: _ctx.ui.input.closeButton,
            "aria-label": "Close",
            onClick: _ctx.onClear
          }), null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div>`);
        if (_ctx.groups.length) {
          _push2(ssrRenderComponent(_component_HComboboxOptions, {
            static: "",
            hold: "",
            as: "div",
            "aria-label": "Commands",
            class: _ctx.ui.container
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<!--[-->`);
                ssrRenderList(_ctx.groups, (group) => {
                  _push3(ssrRenderComponent(_component_CommandPaletteGroup, {
                    key: group.key,
                    query: _ctx.query,
                    group,
                    "group-attribute": _ctx.groupAttribute,
                    "command-attribute": _ctx.commandAttribute,
                    "selected-icon": _ctx.selectedIcon,
                    ui: _ctx.ui
                  }, createSlots({ _: 2 }, [
                    renderList(_ctx.$slots, (_3, name) => {
                      return {
                        name,
                        fn: withCtx((slotData, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            ssrRenderSlot(_ctx.$slots, name, slotData, null, _push4, _parent4, _scopeId3);
                          } else {
                            return [
                              renderSlot(_ctx.$slots, _ctx.name, slotData)
                            ];
                          }
                        })
                      };
                    })
                  ]), _parent3, _scopeId2));
                });
                _push3(`<!--]-->`);
              } else {
                return [
                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.groups, (group) => {
                    return openBlock(), createBlock(_component_CommandPaletteGroup, {
                      key: group.key,
                      query: _ctx.query,
                      group,
                      "group-attribute": _ctx.groupAttribute,
                      "command-attribute": _ctx.commandAttribute,
                      "selected-icon": _ctx.selectedIcon,
                      ui: _ctx.ui
                    }, createSlots({ _: 2 }, [
                      renderList(_ctx.$slots, (_3, name) => {
                        return {
                          name,
                          fn: withCtx((slotData) => [
                            renderSlot(_ctx.$slots, name, slotData)
                          ])
                        };
                      })
                    ]), 1032, ["query", "group", "group-attribute", "command-attribute", "selected-icon", "ui"]);
                  }), 128))
                ];
              }
            }),
            _: 3
          }, _parent2, _scopeId));
        } else if (_ctx.emptyState) {
          ssrRenderSlot(_ctx.$slots, "empty-state", {}, () => {
            _push2(`<div class="${ssrRenderClass(_ctx.ui.emptyState.wrapper)}"${_scopeId}>`);
            if (_ctx.emptyState.icon) {
              _push2(ssrRenderComponent(_component_UIcon, {
                name: _ctx.emptyState.icon,
                class: _ctx.ui.emptyState.icon,
                "aria-hidden": "true"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`<p class="${ssrRenderClass(_ctx.query ? _ctx.ui.emptyState.queryLabel : _ctx.ui.emptyState.label)}"${_scopeId}>${ssrInterpolate(_ctx.query ? _ctx.emptyState.queryLabel : _ctx.emptyState.label)}</p></div>`);
          }, _push2, _parent2, _scopeId);
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          withDirectives(createVNode("div", {
            class: _ctx.ui.input.wrapper
          }, [
            _ctx.iconName ? (openBlock(), createBlock(_component_UIcon, {
              key: 0,
              name: _ctx.iconName,
              class: _ctx.iconClass,
              "aria-hidden": "true"
            }, null, 8, ["name", "class"])) : createCommentVNode("", true),
            createVNode(_component_HComboboxInput, {
              ref: "comboboxInput",
              value: _ctx.query,
              class: [_ctx.ui.input.base, _ctx.ui.input.size, _ctx.ui.input.height, _ctx.ui.input.padding, _ctx.icon && _ctx.ui.input.icon.padding],
              placeholder: _ctx.placeholder,
              autocomplete: "off",
              onChange: ($event) => _ctx.query = $event.target.value
            }, null, 8, ["value", "class", "placeholder", "onChange"]),
            _ctx.closeButton ? (openBlock(), createBlock(_component_UButton, mergeProps({ key: 1 }, { ..._ctx.ui.default.closeButton, ..._ctx.closeButton }, {
              class: _ctx.ui.input.closeButton,
              "aria-label": "Close",
              onClick: _ctx.onClear
            }), null, 16, ["class", "onClick"])) : createCommentVNode("", true)
          ], 2), [
            [vShow, _ctx.searchable]
          ]),
          _ctx.groups.length ? (openBlock(), createBlock(_component_HComboboxOptions, {
            key: 0,
            static: "",
            hold: "",
            as: "div",
            "aria-label": "Commands",
            class: _ctx.ui.container
          }, {
            default: withCtx(() => [
              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.groups, (group) => {
                return openBlock(), createBlock(_component_CommandPaletteGroup, {
                  key: group.key,
                  query: _ctx.query,
                  group,
                  "group-attribute": _ctx.groupAttribute,
                  "command-attribute": _ctx.commandAttribute,
                  "selected-icon": _ctx.selectedIcon,
                  ui: _ctx.ui
                }, createSlots({ _: 2 }, [
                  renderList(_ctx.$slots, (_2, name) => {
                    return {
                      name,
                      fn: withCtx((slotData) => [
                        renderSlot(_ctx.$slots, name, slotData)
                      ])
                    };
                  })
                ]), 1032, ["query", "group", "group-attribute", "command-attribute", "selected-icon", "ui"]);
              }), 128))
            ]),
            _: 3
          }, 8, ["class"])) : _ctx.emptyState ? renderSlot(_ctx.$slots, "empty-state", { key: 1 }, () => [
            createVNode("div", {
              class: _ctx.ui.emptyState.wrapper
            }, [
              _ctx.emptyState.icon ? (openBlock(), createBlock(_component_UIcon, {
                key: 0,
                name: _ctx.emptyState.icon,
                class: _ctx.ui.emptyState.icon,
                "aria-hidden": "true"
              }, null, 8, ["name", "class"])) : createCommentVNode("", true),
              createVNode("p", {
                class: _ctx.query ? _ctx.ui.emptyState.queryLabel : _ctx.ui.emptyState.label
              }, toDisplayString(_ctx.query ? _ctx.emptyState.queryLabel : _ctx.emptyState.label), 3)
            ], 2)
          ]) : createCommentVNode("", true)
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/navigation/CommandPalette.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CommandPalette = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { CommandPalette as default };
//# sourceMappingURL=CommandPalette-1e60e6f6.mjs.map

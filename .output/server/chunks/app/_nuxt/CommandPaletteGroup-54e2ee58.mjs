import __nuxt_component_0 from './Icon-855b8e20.mjs';
import __nuxt_component_1 from './Avatar-07284992.mjs';
import __nuxt_component_0$1 from './Kbd-ef6dba12.mjs';
import { useSSRContext, defineComponent, computed, resolveComponent, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, renderSlot, openBlock, createBlock, createCommentVNode, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderComponent, ssrRenderSlot, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import { Y as Ye } from './combobox-7aea91ec.mjs';
import '../server.mjs';
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
import 'tailwind-merge';
import 'lodash-es';
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
    HComboboxOption: Ye,
    UIcon: __nuxt_component_0,
    UAvatar: __nuxt_component_1,
    UKbd: __nuxt_component_0$1
  },
  props: {
    group: {
      type: Object,
      required: true
    },
    query: {
      type: String,
      default: ""
    },
    groupAttribute: {
      type: String,
      required: true
    },
    commandAttribute: {
      type: String,
      required: true
    },
    selectedIcon: {
      type: String,
      required: true
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const label = computed(() => {
      const label2 = props.group[props.groupAttribute];
      return typeof label2 === "function" ? label2(props.query) : label2;
    });
    function highlight(text, { indices, value }) {
      if (text === value) {
        return "";
      }
      let content = "";
      let nextUnhighlightedIndiceStartingIndex = 0;
      indices.forEach((indice) => {
        const lastIndiceNextIndex = indice[1] + 1;
        const isMatched = lastIndiceNextIndex - indice[0] >= props.query.length;
        content += [
          value.substring(nextUnhighlightedIndiceStartingIndex, indice[0]),
          isMatched && "<mark>",
          value.substring(indice[0], lastIndiceNextIndex),
          isMatched && "</mark>"
        ].filter(Boolean).join("");
        nextUnhighlightedIndiceStartingIndex = lastIndiceNextIndex;
      });
      content += value.substring(nextUnhighlightedIndiceStartingIndex);
      const index = content.indexOf("<mark>");
      if (index > 60) {
        content = `...${content.substring(index - 60)}`;
      }
      return content;
    }
    return {
      label,
      highlight
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HComboboxOption = resolveComponent("HComboboxOption");
  const _component_UIcon = __nuxt_component_0;
  const _component_UAvatar = __nuxt_component_1;
  const _component_UKbd = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.ui.group.wrapper,
    role: "option"
  }, _attrs))}>`);
  if (_ctx.label) {
    _push(`<h2 class="${ssrRenderClass(_ctx.ui.group.label)}">${ssrInterpolate(_ctx.label)}</h2>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="${ssrRenderClass(_ctx.ui.group.container)}" role="listbox"${ssrRenderAttr("aria-label", _ctx.group[_ctx.groupAttribute])}><!--[-->`);
  ssrRenderList(_ctx.group.commands, (command, index) => {
    _push(ssrRenderComponent(_component_HComboboxOption, {
      key: `${_ctx.group.key}-${index}`,
      value: command,
      disabled: command.disabled,
      as: "template"
    }, {
      default: withCtx(({ active, selected }, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="${ssrRenderClass([_ctx.ui.group.command.base, active ? _ctx.ui.group.command.active : _ctx.ui.group.command.inactive, command.disabled ? "cursor-not-allowed" : "cursor-pointer"])}"${_scopeId}><div class="${ssrRenderClass(_ctx.ui.group.command.container)}"${_scopeId}>`);
          ssrRenderSlot(_ctx.$slots, `${_ctx.group.key}-icon`, {
            group: _ctx.group,
            command,
            active,
            selected
          }, () => {
            if (command.icon) {
              _push2(ssrRenderComponent(_component_UIcon, {
                name: command.icon,
                class: [_ctx.ui.group.command.icon.base, active ? _ctx.ui.group.command.icon.active : _ctx.ui.group.command.icon.inactive, command.iconClass],
                "aria-hidden": "true"
              }, null, _parent2, _scopeId));
            } else if (command.avatar) {
              _push2(ssrRenderComponent(_component_UAvatar, mergeProps({ size: _ctx.ui.group.command.avatar.size, ...command.avatar }, {
                class: _ctx.ui.group.command.avatar.base,
                "aria-hidden": "true"
              }), null, _parent2, _scopeId));
            } else if (command.chip) {
              _push2(`<span class="${ssrRenderClass(_ctx.ui.group.command.chip.base)}" style="${ssrRenderStyle({ background: `#${command.chip}` })}"${_scopeId}></span>`);
            } else {
              _push2(`<!---->`);
            }
          }, _push2, _parent2, _scopeId);
          _push2(`<div class="${ssrRenderClass([_ctx.ui.group.command.label, command.disabled && _ctx.ui.group.command.disabled])}"${_scopeId}>`);
          ssrRenderSlot(_ctx.$slots, `${_ctx.group.key}-command`, {
            group: _ctx.group,
            command,
            active,
            selected
          }, () => {
            var _a, _b;
            if (command.prefix) {
              _push2(`<span class="${ssrRenderClass([command.prefixClass || _ctx.ui.group.command.prefix, "flex-shrink-0"])}"${_scopeId}>${ssrInterpolate(command.prefix)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<span class="${ssrRenderClass([{ "flex-none": command.suffix || ((_a = command.matches) == null ? void 0 : _a.length) }, "truncate"])}"${_scopeId}>${ssrInterpolate(command[_ctx.commandAttribute])}</span>`);
            if ((_b = command.matches) == null ? void 0 : _b.length) {
              _push2(`<span class="${ssrRenderClass([command.suffixClass || _ctx.ui.group.command.suffix, "truncate"])}"${_scopeId}>${_ctx.highlight(command[_ctx.commandAttribute], command.matches[0])}</span>`);
            } else if (command.suffix) {
              _push2(`<span class="${ssrRenderClass([command.suffixClass || _ctx.ui.group.command.suffix, "truncate"])}"${_scopeId}>${ssrInterpolate(command.suffix)}</span>`);
            } else {
              _push2(`<!---->`);
            }
          }, _push2, _parent2, _scopeId);
          _push2(`</div></div>`);
          if (selected) {
            _push2(ssrRenderComponent(_component_UIcon, {
              name: _ctx.selectedIcon,
              class: _ctx.ui.group.command.selectedIcon.base,
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
          } else if (active && (_ctx.group.active || _ctx.$slots[`${_ctx.group.key}-active`])) {
            ssrRenderSlot(_ctx.$slots, `${_ctx.group.key}-active`, {
              group: _ctx.group,
              command,
              active,
              selected
            }, () => {
              if (_ctx.group.active) {
                _push2(`<span class="${ssrRenderClass(_ctx.ui.group.active)}"${_scopeId}>${ssrInterpolate(_ctx.group.active)}</span>`);
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
          } else {
            ssrRenderSlot(_ctx.$slots, `${_ctx.group.key}-inactive`, {
              group: _ctx.group,
              command,
              active,
              selected
            }, () => {
              var _a;
              if ((_a = command.shortcuts) == null ? void 0 : _a.length) {
                _push2(`<span class="${ssrRenderClass(_ctx.ui.group.command.shortcuts)}"${_scopeId}><!--[-->`);
                ssrRenderList(command.shortcuts, (shortcut) => {
                  _push2(ssrRenderComponent(_component_UKbd, { key: shortcut }, {
                    default: withCtx((_, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(shortcut)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(shortcut), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                });
                _push2(`<!--]--></span>`);
              } else if (!command.disabled && _ctx.group.inactive) {
                _push2(`<span class="${ssrRenderClass(_ctx.ui.group.inactive)}"${_scopeId}>${ssrInterpolate(_ctx.group.inactive)}</span>`);
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
          }
          _push2(`</div>`);
        } else {
          return [
            createVNode("div", {
              class: [_ctx.ui.group.command.base, active ? _ctx.ui.group.command.active : _ctx.ui.group.command.inactive, command.disabled ? "cursor-not-allowed" : "cursor-pointer"]
            }, [
              createVNode("div", {
                class: _ctx.ui.group.command.container
              }, [
                renderSlot(_ctx.$slots, `${_ctx.group.key}-icon`, {
                  group: _ctx.group,
                  command,
                  active,
                  selected
                }, () => [
                  command.icon ? (openBlock(), createBlock(_component_UIcon, {
                    key: 0,
                    name: command.icon,
                    class: [_ctx.ui.group.command.icon.base, active ? _ctx.ui.group.command.icon.active : _ctx.ui.group.command.icon.inactive, command.iconClass],
                    "aria-hidden": "true"
                  }, null, 8, ["name", "class"])) : command.avatar ? (openBlock(), createBlock(_component_UAvatar, mergeProps({ key: 1 }, { size: _ctx.ui.group.command.avatar.size, ...command.avatar }, {
                    class: _ctx.ui.group.command.avatar.base,
                    "aria-hidden": "true"
                  }), null, 16, ["class"])) : command.chip ? (openBlock(), createBlock("span", {
                    key: 2,
                    class: _ctx.ui.group.command.chip.base,
                    style: { background: `#${command.chip}` }
                  }, null, 6)) : createCommentVNode("", true)
                ]),
                createVNode("div", {
                  class: [_ctx.ui.group.command.label, command.disabled && _ctx.ui.group.command.disabled]
                }, [
                  renderSlot(_ctx.$slots, `${_ctx.group.key}-command`, {
                    group: _ctx.group,
                    command,
                    active,
                    selected
                  }, () => {
                    var _a, _b;
                    return [
                      command.prefix ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: ["flex-shrink-0", command.prefixClass || _ctx.ui.group.command.prefix]
                      }, toDisplayString(command.prefix), 3)) : createCommentVNode("", true),
                      createVNode("span", {
                        class: ["truncate", { "flex-none": command.suffix || ((_a = command.matches) == null ? void 0 : _a.length) }]
                      }, toDisplayString(command[_ctx.commandAttribute]), 3),
                      ((_b = command.matches) == null ? void 0 : _b.length) ? (openBlock(), createBlock("span", {
                        key: 1,
                        class: ["truncate", command.suffixClass || _ctx.ui.group.command.suffix],
                        innerHTML: _ctx.highlight(command[_ctx.commandAttribute], command.matches[0])
                      }, null, 10, ["innerHTML"])) : command.suffix ? (openBlock(), createBlock("span", {
                        key: 2,
                        class: ["truncate", command.suffixClass || _ctx.ui.group.command.suffix]
                      }, toDisplayString(command.suffix), 3)) : createCommentVNode("", true)
                    ];
                  })
                ], 2)
              ], 2),
              selected ? (openBlock(), createBlock(_component_UIcon, {
                key: 0,
                name: _ctx.selectedIcon,
                class: _ctx.ui.group.command.selectedIcon.base,
                "aria-hidden": "true"
              }, null, 8, ["name", "class"])) : active && (_ctx.group.active || _ctx.$slots[`${_ctx.group.key}-active`]) ? renderSlot(_ctx.$slots, `${_ctx.group.key}-active`, {
                key: 1,
                group: _ctx.group,
                command,
                active,
                selected
              }, () => [
                _ctx.group.active ? (openBlock(), createBlock("span", {
                  key: 0,
                  class: _ctx.ui.group.active
                }, toDisplayString(_ctx.group.active), 3)) : createCommentVNode("", true)
              ]) : renderSlot(_ctx.$slots, `${_ctx.group.key}-inactive`, {
                key: 2,
                group: _ctx.group,
                command,
                active,
                selected
              }, () => {
                var _a;
                return [
                  ((_a = command.shortcuts) == null ? void 0 : _a.length) ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: _ctx.ui.group.command.shortcuts
                  }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(command.shortcuts, (shortcut) => {
                      return openBlock(), createBlock(_component_UKbd, { key: shortcut }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(shortcut), 1)
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ], 2)) : !command.disabled && _ctx.group.inactive ? (openBlock(), createBlock("span", {
                    key: 1,
                    class: _ctx.ui.group.inactive
                  }, toDisplayString(_ctx.group.inactive), 3)) : createCommentVNode("", true)
                ];
              })
            ], 2)
          ];
        }
      }),
      _: 2
    }, _parent));
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/navigation/CommandPaletteGroup.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CommandPaletteGroup = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { CommandPaletteGroup as default };
//# sourceMappingURL=CommandPaletteGroup-54e2ee58.mjs.map

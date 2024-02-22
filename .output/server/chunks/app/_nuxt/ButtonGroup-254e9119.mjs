import { defineComponent, computed, cloneVNode, h } from 'vue';
import { a as appConfig, b as useAppConfig, d as defuTwMerge, g as getSlotsChildren } from '../server.mjs';
import { omit } from 'lodash-es';
import { twMerge, twJoin } from 'tailwind-merge';
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
import 'vue/server-renderer';

const ButtonGroup = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  props: {
    size: {
      type: String,
      default: null,
      validator(value) {
        return Object.keys(appConfig.ui.button.size).includes(value);
      }
    },
    orientation: {
      type: String,
      default: "horizontal",
      validator(value) {
        return ["horizontal", "vertical"].includes(value);
      }
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props, { attrs, slots }) {
    const appConfig2 = useAppConfig();
    const ui = computed(() => defuTwMerge({}, props.ui, appConfig2.ui.buttonGroup));
    const children = computed(() => getSlotsChildren(slots));
    const rounded = computed(() => {
      const roundedMap = {
        "rounded-none": { horizontal: { left: "rounded-s-none", right: "rounded-e-none" }, vertical: { top: "rounded-t-none", bottom: "rounded-b-none" } },
        "rounded-sm": { horizontal: { left: "rounded-s-sm", right: "rounded-e-sm" }, vertical: { top: "rounded-t-sm", bottom: "rounded-b-sm" } },
        rounded: { horizontal: { left: "rounded-s", right: "rounded-e" }, vertical: { top: "rounded-t", bottom: "rounded-b" } },
        "rounded-md": { horizontal: { left: "rounded-s-md", right: "rounded-e-md" }, vertical: { top: "rounded-t-md", bottom: "rounded-b-md" } },
        "rounded-lg": { horizontal: { left: "rounded-s-lg", right: "rounded-e-lg" }, vertical: { top: "rounded-t-lg", bottom: "rounded-b-lg" } },
        "rounded-xl": { horizontal: { left: "rounded-s-xl", right: "rounded-e-xl" }, vertical: { top: "rounded-t-xl", bottom: "rounded-b-xl" } },
        "rounded-2xl": { horizontal: { left: "rounded-s-2xl", right: "rounded-e-2xl" }, vertical: { top: "rounded-t-2xl", bottom: "rounded-b-2xl" } },
        "rounded-3xl": { horizontal: { left: "rounded-s-3xl", right: "rounded-e-3xl" }, vertical: { top: "rounded-t-3xl", bottom: "rounded-b-3xl" } },
        "rounded-full": { horizontal: { left: "rounded-s-full", right: "rounded-e-full" }, vertical: { top: "rounded-t-full", bottom: "rounded-b-full" } }
      };
      return roundedMap[ui.value.rounded][props.orientation];
    });
    const clones = computed(() => children.value.map((node, index) => {
      var _a;
      const vProps = {};
      if (props.orientation === "vertical") {
        ui.value.wrapper = "flex flex-col -space-y-px";
      } else {
        ui.value.wrapper = "inline-flex -space-x-px";
      }
      if (props.size) {
        vProps.size = props.size;
      }
      vProps.ui = ((_a = node.props) == null ? void 0 : _a.ui) || {};
      vProps.ui.rounded = "rounded-none";
      vProps.ui.base = "!shadow-none";
      if (index === 0) {
        vProps.ui.rounded += ` ${rounded.value.left || rounded.value.top}`;
      }
      if (index === children.value.length - 1) {
        vProps.ui.rounded += ` ${rounded.value.right || rounded.value.bottom}`;
      }
      return cloneVNode(node, vProps);
    }));
    return () => h("div", { class: twMerge(twJoin(ui.value.wrapper, ui.value.rounded, ui.value.shadow), attrs.class), ...omit(attrs, ["class"]) }, clones.value);
  }
});

export { ButtonGroup as default };
//# sourceMappingURL=ButtonGroup-254e9119.mjs.map

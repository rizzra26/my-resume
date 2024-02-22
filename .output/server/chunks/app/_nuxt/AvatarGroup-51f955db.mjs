import { defineComponent, computed, cloneVNode, h } from 'vue';
import { a as appConfig, b as useAppConfig, d as defuTwMerge, g as getSlotsChildren } from '../server.mjs';
import { omit } from 'lodash-es';
import { twMerge, twJoin } from 'tailwind-merge';
import __nuxt_component_1 from './Avatar-07284992.mjs';
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
import './Icon-855b8e20.mjs';
import './_plugin-vue_export-helper-cc2b3d55.mjs';

const AvatarGroup = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  props: {
    size: {
      type: String,
      default: null,
      validator(value) {
        return Object.keys(appConfig.ui.avatar.size).includes(value);
      }
    },
    max: {
      type: Number,
      default: null
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props, { attrs, slots }) {
    const appConfig2 = useAppConfig();
    const ui = computed(() => defuTwMerge({}, props.ui, appConfig2.ui.avatarGroup));
    const children = computed(() => getSlotsChildren(slots));
    const max = computed(() => typeof props.max === "string" ? parseInt(props.max, 10) : props.max);
    const clones = computed(() => children.value.map((node, index) => {
      const vProps = {};
      if (!props.max || max.value && index < max.value) {
        if (props.size) {
          vProps.size = props.size;
        }
        vProps.class = node.props.class || "";
        vProps.class = twMerge(twJoin(vProps.class, ui.value.ring, ui.value.margin), vProps.class);
        return cloneVNode(node, vProps);
      }
      if (max.value !== void 0 && index === max.value) {
        return h(__nuxt_component_1, {
          size: props.size || appConfig2.ui.avatar.default.size,
          text: `+${children.value.length - max.value}`,
          class: twJoin(ui.value.ring, ui.value.margin)
        });
      }
      return null;
    }).filter(Boolean).reverse());
    return () => h("div", { class: twMerge(ui.value.wrapper, attrs.class), ...omit(attrs, ["class"]) }, clones.value);
  }
});

export { AvatarGroup as default };
//# sourceMappingURL=AvatarGroup-51f955db.mjs.map

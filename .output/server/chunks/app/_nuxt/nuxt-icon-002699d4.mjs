import { defineComponent, ref, withAsyncContext, watchEffect, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "nuxt-icon",
  __ssrInlineRender: true,
  props: {
    name: {},
    filled: { type: Boolean, default: false }
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const icon = ref("");
    let hasStroke = false;
    async function getIcon() {
      try {
        const iconsImport = /* @__PURE__ */ Object.assign({
          "/assets/icons/at.svg": () => import('./at-e6f8fe40.mjs').then((m) => m["default"]),
          "/assets/icons/dot.svg": () => import('./dot-1f48230a.mjs').then((m) => m["default"]),
          "/assets/icons/github.svg": () => import('./github-4db9a158.mjs').then((m) => m["default"]),
          "/assets/icons/linkedin.svg": () => import('./linkedin-800a330a.mjs').then((m) => m["default"]),
          "/assets/icons/printer.svg": () => import('./printer-7d95ae2a.mjs').then((m) => m["default"])
        });
        const rawIcon = await iconsImport[`/assets/icons/${props.name}.svg`]();
        if (rawIcon.includes("stroke")) {
          hasStroke = true;
        }
        icon.value = rawIcon;
      } catch {
        console.error(
          `[nuxt-icons] Icon '${props.name}' doesn't exist in 'assets/icons'`
        );
      }
    }
    [__temp, __restore] = withAsyncContext(() => getIcon()), await __temp, __restore();
    watchEffect(getIcon);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${ssrRenderAttrs(mergeProps({
        class: ["nuxt-icon", { "nuxt-icon--fill": !_ctx.filled, "nuxt-icon--stroke": unref(hasStroke) && !_ctx.filled }]
      }, _attrs))}>${unref(icon)}</span>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt-icons/dist/runtime/components/nuxt-icon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=nuxt-icon-002699d4.mjs.map

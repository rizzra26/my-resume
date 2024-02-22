import __nuxt_component_2 from './Button-eb524539.mjs';
import { useSSRContext, defineComponent, computed, mergeProps } from 'vue';
import { a as appConfig, b as useAppConfig, d as defuTwMerge } from '../server.mjs';
import { omit } from 'lodash-es';
import { twMerge } from 'tailwind-merge';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
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
import './Icon-855b8e20.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  components: {
    UButton: __nuxt_component_2
  },
  inheritAttrs: false,
  props: {
    modelValue: {
      type: Number,
      required: true
    },
    pageCount: {
      type: Number,
      default: 10
    },
    total: {
      type: Number,
      required: true
    },
    max: {
      type: Number,
      default: 7,
      validate(value) {
        return value >= 7 && value < Number.MAX_VALUE;
      }
    },
    size: {
      type: String,
      default: () => appConfig.ui.pagination.default.size,
      validator(value) {
        return Object.keys(appConfig.ui.button.size).includes(value);
      }
    },
    activeButton: {
      type: Object,
      default: () => appConfig.ui.pagination.default.activeButton
    },
    inactiveButton: {
      type: Object,
      default: () => appConfig.ui.pagination.default.inactiveButton
    },
    prevButton: {
      type: Object,
      default: () => appConfig.ui.pagination.default.prevButton
    },
    nextButton: {
      type: Object,
      default: () => appConfig.ui.pagination.default.nextButton
    },
    divider: {
      type: String,
      default: "\u2026"
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue"],
  setup(props, { attrs, emit }) {
    const appConfig2 = useAppConfig();
    const ui = computed(() => defuTwMerge({}, props.ui, appConfig2.ui.pagination));
    const currentPage = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit("update:modelValue", value);
      }
    });
    const pages = computed(() => Array.from({ length: Math.ceil(props.total / props.pageCount) }, (_, i) => i + 1));
    const displayedPages = computed(() => {
      if (!props.max || pages.value.length <= 5) {
        return pages.value;
      } else {
        const current = currentPage.value;
        const max = pages.value.length;
        const r = Math.floor((Math.min(props.max, max) - 5) / 2);
        const r1 = current - r;
        const r2 = current + r;
        const beforeWrapped = r1 - 1 > 1;
        const afterWrapped = r2 + 1 < max;
        const items = [1];
        if (beforeWrapped)
          items.push(props.divider);
        if (!afterWrapped) {
          const addedItems = current + r + 2 - max;
          for (let i = current - r - addedItems; i <= current - r - 1; i++) {
            items.push(i);
          }
        }
        for (let i = r1 > 2 ? r1 : 2; i <= Math.min(max, r2); i++) {
          items.push(i);
        }
        if (!beforeWrapped) {
          const addedItems = 1 - (current - r - 2);
          for (let i = current + r + 1; i <= current + r + addedItems; i++) {
            items.push(i);
          }
        }
        if (afterWrapped)
          items.push(props.divider);
        if (r2 < max)
          items.push(max);
        if (items.length >= 3 && items[1] === props.divider && items[2] === 3) {
          items[1] = 2;
        }
        if (items.length >= 3 && items[items.length - 2] === props.divider && items[items.length - 1] === items.length) {
          items[items.length - 2] = items.length - 1;
        }
        return items;
      }
    });
    const canGoPrev = computed(() => currentPage.value > 1);
    const canGoNext = computed(() => currentPage.value < pages.value.length);
    const wrapperClass = computed(() => twMerge(ui.value.wrapper, attrs.class));
    function onClickPage(page) {
      if (typeof page === "string") {
        return;
      }
      currentPage.value = page;
    }
    function onClickPrev() {
      if (!canGoPrev.value) {
        return;
      }
      currentPage.value--;
    }
    function onClickNext() {
      if (!canGoNext.value) {
        return;
      }
      currentPage.value++;
    }
    return {
      attrs: omit(attrs, ["class"]),
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      currentPage,
      pages,
      displayedPages,
      canGoPrev,
      canGoNext,
      wrapperClass,
      onClickPrev,
      onClickNext,
      onClickPage
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UButton = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: _ctx.wrapperClass }, _ctx.attrs, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "prev", { onClick: _ctx.onClickPrev }, () => {
    if (_ctx.prevButton) {
      _push(ssrRenderComponent(_component_UButton, mergeProps({
        size: _ctx.size,
        disabled: !_ctx.canGoPrev,
        class: [_ctx.ui.base, _ctx.ui.rounded]
      }, { ..._ctx.ui.default.prevButton, ..._ctx.prevButton }, {
        ui: { rounded: "" },
        onClick: _ctx.onClickPrev
      }), null, _parent));
    } else {
      _push(`<!---->`);
    }
  }, _push, _parent);
  _push(`<!--[-->`);
  ssrRenderList(_ctx.displayedPages, (page, index) => {
    _push(ssrRenderComponent(_component_UButton, mergeProps({
      key: `${page}-${index}`,
      size: _ctx.size,
      label: `${page}`
    }, page === _ctx.currentPage ? { ..._ctx.ui.default.activeButton, ..._ctx.activeButton } : { ..._ctx.ui.default.inactiveButton, ..._ctx.inactiveButton }, {
      class: [{ "pointer-events-none": typeof page === "string", "z-[1]": page === _ctx.currentPage }, _ctx.ui.base, _ctx.ui.rounded],
      ui: { rounded: "" },
      onClick: () => _ctx.onClickPage(page)
    }), null, _parent));
  });
  _push(`<!--]-->`);
  ssrRenderSlot(_ctx.$slots, "next", { onClick: _ctx.onClickNext }, () => {
    if (_ctx.nextButton) {
      _push(ssrRenderComponent(_component_UButton, mergeProps({
        size: _ctx.size,
        disabled: !_ctx.canGoNext,
        class: [_ctx.ui.base, _ctx.ui.rounded]
      }, { ..._ctx.ui.default.nextButton, ..._ctx.nextButton }, {
        ui: { rounded: "" },
        onClick: _ctx.onClickNext
      }), null, _parent));
    } else {
      _push(`<!---->`);
    }
  }, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/navigation/Pagination.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Pagination = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { Pagination as default };
//# sourceMappingURL=Pagination-f2ce3bdd.mjs.map

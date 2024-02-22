import __nuxt_component_0$1 from './Checkbox-a73b4052.mjs';
import __nuxt_component_2 from './Button-eb524539.mjs';
import __nuxt_component_0 from './Icon-855b8e20.mjs';
import { useSSRContext, defineComponent, computed, ref, toRaw, mergeProps } from 'vue';
import { x as defu } from '../../nitro/node-server.mjs';
import { a as appConfig, b as useAppConfig, d as defuTwMerge } from '../server.mjs';
import { omit, capitalize, orderBy, get } from 'lodash-es';
import { twMerge } from 'tailwind-merge';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrRenderSlot, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import './useFormGroup-fb26c2fe.mjs';
import '@vueuse/core';
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

function defaultComparator(a, z) {
  return a === z;
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  components: {
    UButton: __nuxt_component_2,
    UIcon: __nuxt_component_0,
    UCheckbox: __nuxt_component_0$1
  },
  inheritAttrs: false,
  props: {
    modelValue: {
      type: Array,
      default: null
    },
    by: {
      type: [String, Function],
      default: () => defaultComparator
    },
    rows: {
      type: Array,
      default: () => []
    },
    columns: {
      type: Array,
      default: null
    },
    columnAttribute: {
      type: String,
      default: "label"
    },
    sort: {
      type: Object,
      default: () => ({})
    },
    sortButton: {
      type: Object,
      default: () => appConfig.ui.table.default.sortButton
    },
    sortAscIcon: {
      type: String,
      default: () => appConfig.ui.table.default.sortAscIcon
    },
    sortDescIcon: {
      type: String,
      default: () => appConfig.ui.table.default.sortDescIcon
    },
    loading: {
      type: Boolean,
      default: false
    },
    loadingState: {
      type: Object,
      default: () => appConfig.ui.table.default.loadingState
    },
    emptyState: {
      type: Object,
      default: () => appConfig.ui.table.default.emptyState
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit, attrs }) {
    const appConfig2 = useAppConfig();
    const ui = computed(() => defuTwMerge({}, props.ui, appConfig2.ui.table));
    const wrapperClass = computed(() => twMerge(ui.value.wrapper, attrs.class));
    const columns = computed(() => {
      var _a, _b;
      return (_b = props.columns) != null ? _b : Object.keys(omit((_a = props.rows[0]) != null ? _a : {}, ["click"])).map((key) => ({ key, label: capitalize(key), sortable: false }));
    });
    const sort = ref(defu({}, props.sort, { column: null, direction: "asc" }));
    const rows = computed(() => {
      var _a;
      if (!((_a = sort.value) == null ? void 0 : _a.column)) {
        return props.rows;
      }
      const { column, direction } = sort.value;
      return orderBy(props.rows, column, direction);
    });
    const selected = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit("update:modelValue", value);
      }
    });
    const indeterminate = computed(() => selected.value && selected.value.length > 0 && selected.value.length < props.rows.length);
    const emptyState = computed(() => {
      if (props.emptyState === null)
        return null;
      return { ...ui.value.default.emptyState, ...props.emptyState };
    });
    const loadingState = computed(() => {
      if (props.loadingState === null)
        return null;
      return { ...ui.value.default.loadingState, ...props.loadingState };
    });
    function compare(a, z) {
      if (typeof props.by === "string") {
        const property = props.by;
        return (a == null ? void 0 : a[property]) === (z == null ? void 0 : z[property]);
      }
      return props.by(a, z);
    }
    function isSelected(row) {
      if (!props.modelValue) {
        return false;
      }
      return selected.value.some((item) => compare(toRaw(item), toRaw(row)));
    }
    function onSort(column) {
      if (sort.value.column === column.key) {
        const direction = !column.direction || column.direction === "asc" ? "desc" : "asc";
        if (sort.value.direction === direction) {
          sort.value = defu({}, props.sort, { column: null, direction: "asc" });
        } else {
          sort.value.direction = sort.value.direction === "asc" ? "desc" : "asc";
        }
      } else {
        sort.value = { column: column.key, direction: column.direction || "asc" };
      }
    }
    function onSelect(row) {
      if (!attrs.onSelect) {
        return;
      }
      attrs.onSelect(row);
    }
    function selectAllRows() {
      props.rows.forEach((row) => {
        if (selected.value.some((item) => compare(toRaw(item), toRaw(row)))) {
          return;
        }
        onSelect(row);
      });
    }
    function onChange(event) {
      if (event.target.checked) {
        selectAllRows();
      } else {
        selected.value = [];
      }
    }
    function getRowData(row, rowKey, defaultValue = "Failed to get cell value") {
      return get(row, rowKey, defaultValue);
    }
    return {
      attrs: omit(attrs, ["class"]),
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      wrapperClass,
      // eslint-disable-next-line vue/no-dupe-keys
      sort,
      // eslint-disable-next-line vue/no-dupe-keys
      columns,
      // eslint-disable-next-line vue/no-dupe-keys
      rows,
      selected,
      indeterminate,
      // eslint-disable-next-line vue/no-dupe-keys
      emptyState,
      // eslint-disable-next-line vue/no-dupe-keys
      loadingState,
      isSelected,
      onSort,
      onSelect,
      onChange,
      getRowData
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UCheckbox = __nuxt_component_0$1;
  const _component_UButton = __nuxt_component_2;
  const _component_UIcon = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: _ctx.wrapperClass }, _ctx.attrs, _attrs))}><table class="${ssrRenderClass([_ctx.ui.base, _ctx.ui.divide])}"><thead class="${ssrRenderClass(_ctx.ui.thead)}"><tr class="${ssrRenderClass(_ctx.ui.tr.base)}">`);
  if (_ctx.modelValue) {
    _push(`<th scope="col" class="ps-4">`);
    _push(ssrRenderComponent(_component_UCheckbox, {
      checked: _ctx.indeterminate || _ctx.selected.length === _ctx.rows.length,
      indeterminate: _ctx.indeterminate,
      onChange: _ctx.onChange
    }, null, _parent));
    _push(`</th>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<!--[-->`);
  ssrRenderList(_ctx.columns, (column, index) => {
    _push(`<th scope="col" class="${ssrRenderClass([_ctx.ui.th.base, _ctx.ui.th.padding, _ctx.ui.th.color, _ctx.ui.th.font, _ctx.ui.th.size, column.class])}">`);
    ssrRenderSlot(_ctx.$slots, `${column.key}-header`, {
      column,
      sort: _ctx.sort,
      onSort: _ctx.onSort
    }, () => {
      if (column.sortable) {
        _push(ssrRenderComponent(_component_UButton, mergeProps({ ..._ctx.ui.default.sortButton, ..._ctx.sortButton }, {
          icon: !_ctx.sort.column || _ctx.sort.column !== column.key ? _ctx.sortButton.icon || _ctx.ui.default.sortButton.icon : _ctx.sort.direction === "asc" ? _ctx.sortAscIcon : _ctx.sortDescIcon,
          label: column[_ctx.columnAttribute],
          onClick: ($event) => _ctx.onSort(column)
        }), null, _parent));
      } else {
        _push(`<span>${ssrInterpolate(column[_ctx.columnAttribute])}</span>`);
      }
    }, _push, _parent);
    _push(`</th>`);
  });
  _push(`<!--]--></tr></thead><tbody class="${ssrRenderClass(_ctx.ui.tbody)}">`);
  if (_ctx.loadingState && _ctx.loading) {
    _push(`<tr><td${ssrRenderAttr("colspan", _ctx.columns.length + (_ctx.modelValue ? 1 : 0))}>`);
    ssrRenderSlot(_ctx.$slots, "loading-state", {}, () => {
      _push(`<div class="${ssrRenderClass(_ctx.ui.loadingState.wrapper)}">`);
      if (_ctx.loadingState.icon) {
        _push(ssrRenderComponent(_component_UIcon, {
          name: _ctx.loadingState.icon,
          class: _ctx.ui.loadingState.icon,
          "aria-hidden": "true"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<p class="${ssrRenderClass(_ctx.ui.loadingState.label)}">${ssrInterpolate(_ctx.loadingState.label)}</p></div>`);
    }, _push, _parent);
    _push(`</td></tr>`);
  } else if (_ctx.emptyState && !_ctx.rows.length) {
    _push(`<tr><td${ssrRenderAttr("colspan", _ctx.columns.length + (_ctx.modelValue ? 1 : 0))}>`);
    ssrRenderSlot(_ctx.$slots, "empty-state", {}, () => {
      _push(`<div class="${ssrRenderClass(_ctx.ui.emptyState.wrapper)}">`);
      if (_ctx.emptyState.icon) {
        _push(ssrRenderComponent(_component_UIcon, {
          name: _ctx.emptyState.icon,
          class: _ctx.ui.emptyState.icon,
          "aria-hidden": "true"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<p class="${ssrRenderClass(_ctx.ui.emptyState.label)}">${ssrInterpolate(_ctx.emptyState.label)}</p></div>`);
    }, _push, _parent);
    _push(`</td></tr>`);
  } else {
    _push(`<!--[-->`);
    ssrRenderList(_ctx.rows, (row, index) => {
      _push(`<tr class="${ssrRenderClass([_ctx.ui.tr.base, _ctx.isSelected(row) && _ctx.ui.tr.selected, _ctx.$attrs.onSelect && _ctx.ui.tr.active])}">`);
      if (_ctx.modelValue) {
        _push(`<td class="ps-4">`);
        _push(ssrRenderComponent(_component_UCheckbox, {
          modelValue: _ctx.selected,
          "onUpdate:modelValue": ($event) => _ctx.selected = $event,
          value: row,
          onClick: () => {
          }
        }, null, _parent));
        _push(`</td>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(_ctx.columns, (column, subIndex) => {
        _push(`<td class="${ssrRenderClass([_ctx.ui.td.base, _ctx.ui.td.padding, _ctx.ui.td.color, _ctx.ui.td.font, _ctx.ui.td.size])}">`);
        ssrRenderSlot(_ctx.$slots, `${column.key}-data`, {
          column,
          row,
          index,
          getRowData: (defaultValue) => _ctx.getRowData(row, column.key, defaultValue)
        }, () => {
          _push(`${ssrInterpolate(_ctx.getRowData(row, column.key))}`);
        }, _push, _parent);
        _push(`</td>`);
      });
      _push(`<!--]--></tr>`);
    });
    _push(`<!--]-->`);
  }
  _push(`</tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/data/Table.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Table = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { Table as default };
//# sourceMappingURL=Table-223b9f06.mjs.map

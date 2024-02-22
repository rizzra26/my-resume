import { ref, provide, computed, defineComponent, onMounted, onUnmounted, unref, inject } from 'vue';
import { t, H } from './dom-075ad068.mjs';

let p = Symbol("DescriptionContext");
function b() {
  let t2 = inject(p, null);
  if (t2 === null)
    throw new Error("Missing parent");
  return t2;
}
function M({ slot: t2 = ref({}), name: i = "Description", props: o = {} } = {}) {
  let e = ref([]);
  function s(n) {
    return e.value.push(n), () => {
      let r = e.value.indexOf(n);
      r !== -1 && e.value.splice(r, 1);
    };
  }
  return provide(p, { register: s, slot: t2, name: i, props: o }), computed(() => e.value.length > 0 ? e.value.join(" ") : void 0);
}
defineComponent({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: () => `headlessui-description-${t()}` } }, setup(t2, { attrs: i, slots: o }) {
  let e = b();
  return onMounted(() => onUnmounted(e.register(t2.id))), () => {
    let { name: s = "Description", slot: n = ref({}), props: r = {} } = e, { id: d, ...l } = t2, c = { ...Object.entries(r).reduce((f, [a, g]) => Object.assign(f, { [a]: unref(g) }), {}), id: d };
    return H({ ourProps: c, theirProps: l, slot: n.value, attrs: i, slots: o, name: s });
  };
} });

export { M };
//# sourceMappingURL=description-4de76aed.mjs.map

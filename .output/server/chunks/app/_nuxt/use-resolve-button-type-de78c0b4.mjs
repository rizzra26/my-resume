import { ref, onMounted, watchEffect } from 'vue';
import { o } from './dom-075ad068.mjs';

function r(t, e) {
  if (t)
    return t;
  let n = e != null ? e : "button";
  if (typeof n == "string" && n.toLowerCase() === "button")
    return "button";
}
function b(t, e) {
  let n = ref(r(t.value.type, t.value.as));
  return onMounted(() => {
    n.value = r(t.value.type, t.value.as);
  }), watchEffect(() => {
    var o$1;
    n.value || o(e) && o(e) instanceof HTMLButtonElement && !((o$1 = o(e)) != null && o$1.hasAttribute("type")) && (n.value = "button");
  }), n;
}

export { b };
//# sourceMappingURL=use-resolve-button-type-de78c0b4.mjs.map

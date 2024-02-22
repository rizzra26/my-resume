import { inject, provide } from 'vue';

let n = Symbol("Context");
var l = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(l || {});
function C() {
  return p() !== null;
}
function p() {
  return inject(n, null);
}
function c(o) {
  provide(n, o);
}

export { C, c, l, p };
//# sourceMappingURL=open-closed-4c4062c8.mjs.map

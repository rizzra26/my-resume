import { t as t$1 } from './micro-task-304cda21.mjs';

function t() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function i() {
  return /Android/gi.test(window.navigator.userAgent);
}
function n() {
  return t() || i();
}
function o() {
  let a = [], s = { addEventListener(e, t2, r, i2) {
    return e.addEventListener(t2, r, i2), s.add(() => e.removeEventListener(t2, r, i2));
  }, requestAnimationFrame(...e) {
    let t2 = requestAnimationFrame(...e);
    s.add(() => cancelAnimationFrame(t2));
  }, nextFrame(...e) {
    s.requestAnimationFrame(() => {
      s.requestAnimationFrame(...e);
    });
  }, setTimeout(...e) {
    let t2 = setTimeout(...e);
    s.add(() => clearTimeout(t2));
  }, microTask(...e) {
    let t2 = { current: true };
    return t$1(() => {
      t2.current && e[0]();
    }), s.add(() => {
      t2.current = false;
    });
  }, style(e, t2, r) {
    let i2 = e.style.getPropertyValue(t2);
    return Object.assign(e.style, { [t2]: r }), this.add(() => {
      Object.assign(e.style, { [t2]: i2 });
    });
  }, group(e) {
    let t2 = o();
    return e(t2), this.add(() => t2.dispose());
  }, add(e) {
    return a.push(e), () => {
      let t2 = a.indexOf(e);
      if (t2 >= 0)
        for (let r of a.splice(t2, 1))
          r();
    };
  }, dispose() {
    for (let e of a.splice(0))
      e();
  } };
  return s;
}

export { n, o, t };
//# sourceMappingURL=disposables-a9659b4d.mjs.map

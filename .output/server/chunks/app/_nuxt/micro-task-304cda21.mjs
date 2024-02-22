function t(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((o) => setTimeout(() => {
    throw o;
  }));
}

export { t };
//# sourceMappingURL=micro-task-304cda21.mjs.map

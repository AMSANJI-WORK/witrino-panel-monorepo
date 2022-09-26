const registerModule = (store, router, name, module) => {
  if (module.store) {
    store.registerModule(name, module.store);
  }

  if (module.router) {
    module.router(router);
  }
};

export const registerModules = (store, router, modules) => {
  Object.keys(modules).forEach((moduleKey) => {
    const module = modules[moduleKey];
    registerModule(store, router, moduleKey, module);
  });
};

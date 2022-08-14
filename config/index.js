import sharedConfig from "./vite.shared";
export function getClientConfiguration(pathfile) {
  return { ...sharedConfig, ...pathfile };
}

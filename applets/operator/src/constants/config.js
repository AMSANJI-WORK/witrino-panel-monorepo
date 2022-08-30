export const Config = Object.freeze({
  // baseURL: 'https://polotik.com/api',
  baseURL: `${import.meta.env.VITE_APP_API_BASE_URL}/api`,
  version: "/v1",
});
export const ConfigMock = Object.freeze({
  // baseURL: 'https://polotik.com/api',
  baseURL: `/`,
});
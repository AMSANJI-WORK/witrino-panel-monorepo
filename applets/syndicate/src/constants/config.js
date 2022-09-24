export const Config = Object.freeze({
  // baseURL: 'https://polotik.com/api',
  baseURL: `${import.meta.env.VITE_APP_API_BASE_URL}/api`,
  version: "/v1",
});
export const ConfigMock = Object.freeze({
  // baseURL: 'https://polotik.com/api',
  baseURL: `/api`,
});

export const ThemesColorsyndicate = Object.freeze({
  "light-red": "#FF4D6D",
  "lighten-green": "#02C39A",
  "lemon-green": "#D0FF0B",
  "light-pink": "#FF00FF",
  "dark-grey": "#555B6E",
  "light-blue": "#25CED1",
  "grey-blue": "#487BEA",
  "dark-blue": "#0710FF",
});

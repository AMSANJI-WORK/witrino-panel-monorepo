export const Config = Object.freeze({
  baseURL: `${import.meta.env.VITE_BASE_URL}/api`,
  // version: "/v1",
});
export const ConfigMock = Object.freeze({
  baseURL: `/api`,
});
export const ConfigDaynamic = Object.freeze({
  baseURL: `${import.meta.env.VITE_BASE_URL}`,
});
export const ThemesColorbuisness = Object.freeze({
  red: "#F55861",
  dark: "#393939",
  green: "#1BCC56",
  "pink-red": "#FF006F",
  "blue-darken-5": "#001E52",
  "light-blue": "#5492FE",
});
export const ThemesColorEdtehadieh = Object.freeze({
  "light-red": "#FF4D6D",
  "lighten-green": "#02C39A",
  "lemon-green": "#D0FF0B",
  "light-pink": "#FF00FF",
  "dark-grey": "#555B6E",
  "light-blue": "#25CED1",
  "grey-blue": "#487BEA",
  "dark-blue": "#0710FF",
  "auth-blue": "#303C87",
});
export const ThemesColorAdmin = Object.freeze({
  primery: "#FF9E00",
  secondary: "#C7C7C7",
  "pink-red": "#FF006F",
  "dark-primery": "#2B2D42",
  "blue-lighten-5": "#5C69FF",
});

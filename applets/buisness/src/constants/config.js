export const Config = Object.freeze({
  // baseURL: 'https://polotik.com/api',
  baseURL: `${import.meta.env.VITE_APP_API_BASE_URL}/api`,
  version: "/v1",
});
export const ConfigMock = Object.freeze({
  // baseURL: 'https://polotik.com/api',
  baseURL: `/api`,
});
export const ThemesColorBusiness =  Object.freeze({
  red: "#F55861",
  secondary: "#C7C7C7",
  dark: "#393939",
  green: "#1BCC56",
  "pink-red": "#FF006F",
  "blue-darken-5": "#001E52",
  "light-blue": "#5492FE",
});

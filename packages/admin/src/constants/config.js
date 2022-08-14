export const Config = Object.freeze({
  // baseURL: 'https://polotik.com/api',
  baseURL: `${import.meta.env.VITE_APP_API_BASE_URL}/api`,
  version: "/v1",
});
export const ConfigMock = Object.freeze({
  // baseURL: 'https://polotik.com/api',
  baseURL: `/`,
});
export const ThemesColorAdmin = Object.freeze({
  red: "#F55861",
  dark: "#1E1F2A",
  green: "#1BCC56",
  primery: "#FF9E00",
  secondary: "#C7C7C7",
  "pink-red": "#FF006F",
  "light-blue": "#5492FE",
  "dark-primery": "#2B2D42",
  "blue-darken-5": "#001E52",
  "blue-lighten-5": "#5C69FF",
});

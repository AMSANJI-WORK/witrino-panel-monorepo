import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "@mdi/font/css/materialdesignicons.css";

Vue.use(Vuetify);

const opts = {
  rtl: true,
  ripple: false,
  customProperties: true,
  icons: {
    iconfont: "mdi",
  },
  theme: {
    themes: {
      light: {
        "w-primary-grey-blue": "#CDDEFF",
        "w-primary-grey-blue-darken-1": "#BFDBF7",
        "w-primary-dark": "#495057",
        "w-primary-golden": "#FFE49E",
        "w-primary-blue": "#275EC8",
        "w-primary-blue-darken-1": "#004E98",
        "w-primary-blue-lighten-1": "#1789FC",
        "w-primary-secondary": "#F0F1FA",
        "w-primary-purple": "#7428BF",
        "w-primary-purple-lighten-1": "#9529FF",
        "w-primary-purple-lighten-2": "#EADEFF",
        "w-primary-blue-darken-2": "#2D2E97",
        "w-primary-blue-darken-3": "#595CFF",
        "w-primary-blue-darken-4": "#D8EFFF",
        "w-primary-green-lighten-2": "#23DE9E",
        "w-primary-green-darken-1": "#116146",
        "w-primary-red-darken": "#850A0A",
        "w-primary-orange-darken": "#FF8F2C",
        "w-primary-secondary-darken-1": "#EFF0F9",
        red: "#F55861",
        dark: "#393939",
        green: "#1BCC56",
        "pink-red": "#FF006F",
        "blue-darken-5": "#001E52",
        "light-blue": "#5492FE",
        "light-red": "#FF4D6D",
        "lighten-green": "#02C39A",
        "lemon-green": "#D0FF0B",
        "light-pink": "#FF00FF",
        "dark-grey": "#555B6E",
        "grey-blue": "#487BEA",
        "dark-blue": "#0710FF",
        "auth-blue": "#303C87",
        primery: "#FF9E00",
        secondary: "#C7C7C7",
        "pink-red": "#FF006F",
        "dark-primery": "#2B2D42",
        "blue-lighten-5": "#5C69FF",
      },
      dark: {},
    },
  },
};

export default new Vuetify(opts);

import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "@mdi/font/css/materialdesignicons.css";
import {
  ThemesColorAdmin,
  ThemesColorEdtehadieh,
  ThemesColorNamayande,
} from "@witrino/constants/config";

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
        ...ThemesColorAdmin,
        ...ThemesColorEdtehadieh,
        ...ThemesColorNamayande,
      },
      dark: {},
    },
  },
};

export default new Vuetify(opts);

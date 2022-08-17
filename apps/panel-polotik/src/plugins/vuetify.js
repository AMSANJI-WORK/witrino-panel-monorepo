import Vue from "vue";
import Vuetify from "vuetify";
import "@mdi/font/css/materialdesignIcons.css"; // Ensure you are using css-loader
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

const opts = {
  customProperties: true,
  Icons: {
    iconfont: "mdi", // default - only for display purposes
  },
  rtl: true,
  theme: {
    themes: {
      light: {
        red: "#F55861",
        secondary: "#C7C7C7",
        dark: "#393939",
        "blue-lighten-6": "#E6F3FF",
        green: "#187968",
        "green-lighten-5": "#DAF5F0",
        "green-lighten-6": "#EDFAF8",
      },
      dark: {},
    },
  },
};

export default new Vuetify(opts);
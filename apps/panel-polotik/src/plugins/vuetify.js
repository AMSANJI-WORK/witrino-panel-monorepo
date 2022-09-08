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
        "p-red-primary": "#F55861",
        "p-red-primary-darken": "#FF0157",
        "p-green-primary-darken": "#45D266",
        "p-secondary-primary": "#8A8A8A",
        "p-green-primary": "#187968",
        "p-dark-primary": "#393939",
        "p-blue-lighten-primary": "#C8F9F0",
        "p-purple-lighten-primary": "#D9E6FF",
        "p-brown-primary": "#FFF0D9",
        "p-blue-lighten-1": "#E6F3FF",
        "p-green-lighten-1": "#DAF5F0",
        "p-green-lighten-2": "#EDFAF8",
      },
      dark: {},
    },
  },
};

export default new Vuetify(opts);

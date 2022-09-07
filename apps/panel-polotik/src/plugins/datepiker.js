import Vue from "vue";

import VuePersianDatetimePicker from "vue-persian-datetime-picker";

export default Vue.use(VuePersianDatetimePicker, {
  name: "CustomDatePicker",
  props: {
    color: "#187968",
    autoSubmit: true,
  },
});

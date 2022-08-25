import moment from "moment-jalaali";
const UtilityMixin = {
  computed: {
    minDate() {
      return moment(new Date(Date.now())).format("jYYYY/jMM/jDD");
    },
  },
  filters: {
    alphaNumericSpace(inInput) {
      return inInput.replace(/[^\w ]/g, "").replace(/^ +|( ) +/g, "$1");
    },
    numberToStringFa(value) {
      if (!value || value == 0) return "0".num2persian() + " تومان";
      return value.num2persian() + " تومان";
    },
    toRial(str) {
      if (str) {
        var tempStr = String(str);
        tempStr = tempStr.replace(/\,/g, "");
        var objRegex = new RegExp("(-?[0-9]+)([0-9]{3})");
        while (objRegex.test(tempStr)) {
          tempStr = tempStr.replace(objRegex, "$1,$2");
        }
        if (tempStr === "") return "0";
        return tempStr;
      }
    },
  },
  methods: {
    // numberToStringFa(value) {
    //   if (!value || value == 0) return "0".num2persian() + " تومان";
    //   return value.num2persian() + " تومان";
    // },
  },
};
export default UtilityMixin;

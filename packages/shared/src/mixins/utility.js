const UtilityMixin = {
  methods: {
    numberToStringFa(value) {
      if (!value || value == 0) return "0".num2persian() + " تومان";
      return value.num2persian() + " تومان";
    },
  },
};
export default UtilityMixin;

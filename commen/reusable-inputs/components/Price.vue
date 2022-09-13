<template>
  <v-text-field
    v-bind="$attrs"
    outlined
    dense
    :value="price | toRial"
    @input="updateValue"
    :hint="price | numberToStringFa"
    persistent-hint
    suffix="تومان"
  ></v-text-field>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    value: {
      type: [String, Number],
    },
  },
  data() {
    return {
      price: "",
    };
  },
  filters: {
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
  computed: {
    priceToNumber() {
      return parseFloat(this.price.replace(/,/g, "")) || 0;
    },
  },
  methods: {
    updateValue(e) {
      this.price = e.replace(/[a-zA-Z]+/g, "");
      this.$emit("input", this.priceToNumber);
    },
  },
};
</script>

<style lang="scss" scoped></style>

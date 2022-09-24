<template>
  <v-text-field
    :value="value | toRial"
    @input="updateValue"
    :hint="value | numberToStringFa"
    dense
    v-bind="$attrs"
    outlined
    persistent-hint
    suffix="تومان"
  ></v-text-field>
</template>

<script>
import UtilityMixin from "@shared/mixins/utility";
export default {
  inheritAttrs: false,
  mixins: [UtilityMixin],
  props: {
    value: [String, Number],
  },
  data() {
    return {
      price: null,
    };
  },
  computed: {
    priceToNumber() {
      if (!this.price) return "0";
      return parseFloat(this.price.replace(/,/g, "")) || 0;
    },
  },
  methods: {
    updateValue(e) {
      if (!e) e = "0";
      this.price = e.replace(/[a-zA-Z]+/g, "");
      this.$emit("input", this.priceToNumber);
    },
  },
};
</script>

<style lang="scss" scoped></style>

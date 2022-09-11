<template>
  <v-text-field
    v-bind="$attrs"
    outlined
    dense
    :loading="formLoading"
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
      type: String,
    },
  },
  data() {
    return {
      price: null,
    };
  },
  computed: {
    priceToNumber() {
      return parseFloat(this.price.replace(/,/g, ""));
    },
  },
  methods: {
    updateValue() {
      this.price = this.price.replace(/[^a-zA-Z]+/g, "");
      this.$emit("input", this.priceToNumber);
    },
  },
};
</script>

<style lang="scss" scoped></style>

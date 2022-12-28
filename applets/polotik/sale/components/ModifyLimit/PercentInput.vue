<template>
  <v-text-field
    :value="value"
    @input="updateValue"
    :hint="value | numberToStringFa"
    dense
    :loading="formLoading"
    outlined
    :rules="[rules.required]"
    :label="label"
    suffix="درصد"
    prefix=" %"
  ></v-text-field>
</template>

<script>
import saleLoadingMixin from "@applets/polotik/sale/mixins/loading";
import fromRules from "@applets/commen/form/mixins/rules";

import UtilityMixin from "@applets/commen/mixins/utility.js";
export default {
  mixins: [saleLoadingMixin, UtilityMixin, fromRules],
  props: {
    value: [Number, String],
    label: String,
  },
  filters: {
    numberToStringFa(value) {
      if (!value || value == 0) return "0".num2persian() + " درصد";
      return value.num2persian() + " درصد";
    },
  },
  methods: {
    updateValue(value) {
      this.$emit("input", value);
    },
  },
};
</script>

<style lang="scss" scoped></style>

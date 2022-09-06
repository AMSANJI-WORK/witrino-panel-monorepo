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
import saleLoadingMixin from "@packages/polotik/sale/mixins/loading";
import UtilityMixin from "@shared/mixins/utility";
export default {
  mixins: [saleLoadingMixin, UtilityMixin],
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

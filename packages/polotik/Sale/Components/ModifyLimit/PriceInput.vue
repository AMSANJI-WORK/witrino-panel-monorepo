<template>
  <v-text-field
    :value="value | toRial"
    @input="updateValue"
    :hint="value | numberToStringFa"
    dense
    :loading="formLoading"
    outlined
    :rules="[rules.required]"
    :label="label"
    persistent-hint
    suffix="تومان"
  ></v-text-field>
</template>

<script>
import saleLoadingMixin from "@packages/polotik/sale/mixins/loading";
import UtilityMixin from "@shared/mixins/utility";
export default {
  mixins: [saleLoadingMixin, UtilityMixin],
  props: {
    value: String,
    label: String,
  },
  methods: {
    updateValue(value) {
      this.$emit("input", value);
    },
  },
};
</script>

<style lang="scss" scoped></style>

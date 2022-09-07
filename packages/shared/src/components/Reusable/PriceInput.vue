<template>
  <v-text-field
    :value="value | toRial"
    @input="updateValue"
    :hint="value | numberToStringFa"
    dense
    :loading="formLoading"
    outlined
    :rules="[rules.required]"
    persistent-hint
    v-bind="$attrs"
    suffix="تومان"
  ></v-text-field>
</template>

<script>
import FormMixin from "@shared/mixins/form";
import UtilityMixin from "@shared/mixins/utility";
export default {
  inheritAttrs: false,
  mixins: [FormMixin, UtilityMixin],
  props: {
    value: String,
  },
  methods: {
    updateValue(value) {
      this.$emit("input", value);
    },
  },
};
</script>

<style lang="scss" scoped></style>

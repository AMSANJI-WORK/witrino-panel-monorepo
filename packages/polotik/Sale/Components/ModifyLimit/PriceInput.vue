<template>
  <v-text-field
    :value="value | toRial"
    @input="updateValue"
    :hint="value | numberToStringFa"
    dense
    :loading="fromLoading"
    outlined
    :rules="[rules.required]"
    :label="label"
    persistent-hint
    suffix="تومان"
  ></v-text-field>
</template>

<script>
import FormMixin from "@polotik/mixins/base/form";
import UtilityMixin from "@polotik/mixins/utility";
export default {
  mixins: [FormMixin, UtilityMixin],
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

<template>
  <v-text-field
    dense
    outlined
    :class="$attrs['unit-amount-class']"
    :loading="formLoading"
    :value="value"
    @input="updateValue"
    :rules="[rules.required]"
    label="مقدار"
    :hint="value | unitAmountToFa"
    persistent-hint
  ></v-text-field>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import fromRules from "@commen/form/mixins/rules";
export default {
  mixins: [fromRules],
  props: {
    value: [Number, String],
    selectedUnit: [Object, Number],
  },
  filters: {
    unitAmountToFa(value) {
      if (value) return value.num2persian();
    },
  },
  computed: {
    ...mapGetters("service/units", {
      units: "units",
      selectedUnitObject: "selectedUnit",
      formLoading: "formLoading/formLoading",
    }),
  },
  methods: {
    ...mapMutations("service/units", ["getSelectedUnit"]),
    updateValue(value) {
      this.$emit("input", value);
    },
  },
};
</script>

<style lang="scss" scoped></style>

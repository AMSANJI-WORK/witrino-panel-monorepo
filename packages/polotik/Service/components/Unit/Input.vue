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
    :suffix="selectedUnit | selectedUnitToFa"
  ></v-text-field>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import FormMixin from "@polotik/mixins/base/form";
export default {
  mixins: [FormMixin],
  props: {
    value: [Number, String],
    selectedUnit: [Object, Number],
  },
  filters: {
    unitAmountToFa(value) {
      // return `${value.num2persian()} ${this.selectedUnitName}`;
      if (value) return value.num2persian();
    },
    // later
    selectedUnitToFa(value) {
      // if (typeof value == Object) return value.name;
      // else if (value != null && typeof value == Number) {
      //   this.getSelectedUnit(value);
      //   console.log(value);
      //   return this.selectedUnit.name;
      // }
    },
  },
  computed: {
    ...mapGetters("guilds/services/units", {
      units: "units",
      selectedUnitObject: "selectedUnit",
    }),
  },
  methods: {
    ...mapMutations("guilds/services/units", ["getSelectedUnit"]),
    updateValue(value) {
      this.$emit("input", value);
    },
  },
};
</script>

<style lang="scss" scoped></style>

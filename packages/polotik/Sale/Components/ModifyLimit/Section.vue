<template>
  <v-sheet elevation="0" class="d-flex flex-wrap transparent" width="100%">
    <v-col cols="12" sm="4" class="py-0">
      <v-select
        dense
        outlined
        class="rounded-lg"
        :value="value"
        @input="updateValue"
        :items="priceTypeItems"
        :loading="formLoading"
        label="نوع محدودیت"
      >
      </v-select>
    </v-col>

    <v-col class="d-flex flex-wrap pa-0" v-if="value === 'isPercent'">
      <slot name="percent" />
    </v-col>
    <v-col
      class="d-flex flex-wrap pa-0 pl-3"
      v-if="value === 'isAmount'"
      style="width: 100%"
    >
      <slot name="price" />
    </v-col>
  </v-sheet>
</template>

<script>
import FormMixin from "@polotik/mixins/base/form";
export default {
  mixins: [FormMixin],
  props: ["value"],
  methods: {
    updateValue(value) {
      this.$emit("input", value);
    },
  },
  computed: {
    priceTypeItems() {
      return [
        {
          text: "مبلغی",
          value: "isAmount",
        },
        {
          text: "درصدی",
          value: "isPercent",
        },
      ];
    },
  },
};
</script>

<style lang="scss" scoped></style>

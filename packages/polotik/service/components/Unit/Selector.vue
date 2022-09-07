<template>
  <v-select
    dense
    outlined
    :value="value"
    @input="updateValue"
    :loading="formLoading"
    :rules="[rules.required]"
    :items="units"
    item-text="name"
    item-value="id"
    label="مبنا"
  >
    <template v-slot:no-data>
      <v-select-input-no-data />
    </template>
  </v-select>
</template>

<script>
import { mapGetters } from "vuex";
import fromRules from "@commen/form/mixins/rules";
import VSelectInputNoData from "@polotik/components/Reusable/VSelectInputNoData.vue";
export default {
  components: {
    VSelectInputNoData,
  },
  mixins: [fromRules],
  props: ["value"],
  computed: {
    ...mapGetters("guilds/services/units", {
      units: "units",
      formLoading: "formLoading/formLoading",
    }),
  },
  methods: {
    updateValue(value) {
      this.$emit("input", value);
    },
  },
};
</script>

<style lang="scss" scoped></style>

<template>
  <v-select
    dense
    outlined
    :value="value"
    @input="updateValue"
    :loading="fromLoading"
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
import FormMixin from "@polotik/mixins/base/form";
import VSelectInputNoData from "@polotik/components/Reusable/VSelectInputNoData.vue";
export default {
  components: {
    VSelectInputNoData,
  },
  mixins: [FormMixin],
  props: ["value"],
  computed: {
    ...mapGetters("guilds/services/units", ["units"]),
  },
  methods: {
    updateValue(value) {
      this.$emit("input", value);
    },
  },
};
</script>

<style lang="scss" scoped></style>

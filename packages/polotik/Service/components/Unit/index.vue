<template>
  <v-col cols="12" :sm="$attrs.sm" :md="$attrs.md" :lg="$attrs.lg">
    <v-responsive :max-width="$attrs['max-width-unit']">
      <slot name="selector" />
    </v-responsive>
    <slot name="input" />
  </v-col>
</template>

<script>
import FormMixin from "@polotik/mixins/base/form";
import UtilityMixin from "@shared/mixins/utility";
import { createNamespacedHelpers } from "vuex";
import servicesTypes from "@packages/polotik/Service/store/types";
import VSelectInputNoData from "@polotik/components/Reusable/VSelectInputNoData.vue";
const { mapActions, mapGetters } = createNamespacedHelpers(
  "guilds/services/units"
);
export default {
  inheritAttrs: false,
  components: { VSelectInputNoData },
  mixins: [FormMixin, UtilityMixin],
  data: () => ({
    selectedUnitName: null,
    amount: null,
    unit: null,
  }),
  computed: {
    ...mapGetters(["units"]),
  },
  filters: {
    unitAmountToFa(value) {
      if (!this.unit || !value) return "";
      return `${value.num2persian()} ${this.selectedUnitName}`;
    },
  },
  methods: {
    ...mapActions({
      getAllUnitsAsync: `${servicesTypes.GET_ALL_UNITS_ASYNC}`,
    }),
  },
  created() {
    this.getAllUnitsAsync();
  },
};
</script>

<style lang="scss" scoped></style>

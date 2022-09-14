<template>
  <v-col cols="12" :sm="$attrs.sm" :md="$attrs.md" :lg="$attrs.lg">
    <v-responsive :max-width="$attrs['max-width-unit']">
      <slot name="selector" />
    </v-responsive>
    <slot name="input" />
  </v-col>
</template>

<script>
import UtilityMixin from "@shared/mixins/utility";
import { createNamespacedHelpers } from "vuex";
import servicesTypes from "@packages/polotik/service/store/types";
import fromRules from "@commen/form/mixins/rules";
import VSelectInputNoData from "@polotik/components/Reusable/VSelectInputNoData.vue";
const { mapActions, mapGetters } = createNamespacedHelpers(
  "guilds/services/units"
);
export default {
  inheritAttrs: false,
  components: { VSelectInputNoData },
  mixins: [fromRules, UtilityMixin],
  data: () => ({
    selectedUnitName: null,
    amount: null,
    unit: null,
  }),
  computed: {
    ...mapGetters(["units"]),
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

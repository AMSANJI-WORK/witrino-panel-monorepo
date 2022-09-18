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
import { mapActions, mapGetters } from "vuex";
import serviceTypes from "@packages/polotik/service/store/types";
import fromRules from "@commen/form/mixins/rules";
import VSelectInputNoData from "@polotik/components/Reusable/VSelectInputNoData.vue";
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
    ...mapGetters("service/units", ["units"]),
  },
  methods: {
    ...mapActions("service/units", {
      getAllUnitsAsync: `${serviceTypes.GET_ALL_UNITS_ASYNC}`,
    }),
  },
  created() {
    this.getAllUnitsAsync();
  },
};
</script>

<style lang="scss" scoped></style>

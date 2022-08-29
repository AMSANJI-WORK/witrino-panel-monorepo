<template>
  <v-form ref="theme-form" class="d-flex flex-wrap">
    <v-col cols="12" sm="6">
      <SelectorTheme v-model="serviceThemeData.attributes[0].value" />
    </v-col>
    <v-col cols="12" sm="6">
      <PriceInput
        class="rounded-lg"
        label="قیمت"
        v-model="serviceThemeData.attributes[1].value"
      />
    </v-col>
  </v-form>
</template>

<script>
import PriceInput from "@shared/components/Reusable/PriceInput.vue";
import SelectorTheme from "@packages/admin/theme/components/Selector.vue";
import { planTypes } from "@packages/admin/plan/store/types";
import { mapMutations } from "vuex";
export default {
  components: {
    SelectorTheme,
    PriceInput,
  },
  props: {
    isVisible: Boolean,
  },
  data() {
    return {
      serviceThemeData: {
        service_id: 1,
        attributes: [
          {
            attr_id: 1,
            value: [],
          },
          {
            attr_id: 2,
            value: null,
          },
        ],
      },
    };
  },
  watch: {
    serviceThemeData: {
      handler() {
        this.setThemeServiceConfig();
      },
      deep: true,
    },
    isVisible(newValue) {
      if (newValue && this.$route.path.includes("edit")) this.setData();
    },
  },
  computed: {
    priceConvertToNumber() {
      return parseFloat(
        this.serviceThemeData.attributes[1].value.replace(/,/g, "")
      );
    },
    plan() {
      return this.$store.getters["admin/plan/plan"];
    },
    themeServiceConfig() {
      let serviceThemeConfig = Object.create(this.serviceThemeData);
      serviceThemeConfig.attributes[1].value = this.priceConvertToNumber;
      return serviceThemeConfig;
    },
  },
  methods: {
    ...mapMutations("admin/plan", {
      setPlanDetails: planTypes.SET_PLAN_DETAILS,
    }),
    setData() {
      let themeService = this.plan.details.find(
        (detail) => detail.service_id == 1
      );
      let attributes = [...JSON.parse(themeService.details)];
      this.serviceThemeData.attributes = [
        ...this.serviceThemeData.attributes,
        ...attributes,
      ];
      console.log(this.serviceThemeData.attributes);
    },
    validataTheme() {
      return this.$refs["theme-form"].validate();
    },
    setThemeServiceConfig() {
      this.setPlanDetails(this.serviceThemeData);
    },
  },
};
</script>

<style lang="scss" scoped></style>

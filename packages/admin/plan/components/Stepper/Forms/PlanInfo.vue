<template>
  <v-form ref="planInfo" class="d-flex flex-wrap">
    <v-col cols="12" sm="6" md="4">
      <v-switch
        :label="formDto.is_viewed | viewedToFa"
        inset
        :loading="formLoading"
        v-model="formDto.is_viewed"
        color="green"
        class="mt-0"
      ></v-switch>
    </v-col>
    <v-col cols="12" sm="6" md="4">
      <v-switch
        inset
        v-model="formDto.is_active"
        :loading="formLoading"
        :label="formDto.is_active | activeToFa"
        color="green"
        class="mt-0"
      ></v-switch>
    </v-col>
    <v-col cols="0" md="4" />
    <v-col cols="12" sm="6">
      <v-text-field
        class="rounded-lg"
        :loading="formLoading"
        v-model="formDto.title"
        label="عنوان"
        dense
        outlined
        :rules="[rules.required]"
      ></v-text-field>
    </v-col>
    <v-col cols="12" sm="6">
      <ServiceSelector v-model="selectedService" />
    </v-col>
    <v-col cols="12" sm="6">
      <PriceInput class="rounded-lg" v-model="formDto.price" label="قیمت" />
    </v-col>
    <v-col cols="12" sm="6">
      <v-text-field
        class="rounded-lg"
        label="دوره"
        dense
        :loading="formLoading"
        outlined
        v-model.number="formDto.duration"
        type="number"
        suffix="روز"
        :rules="[rules.required]"
      ></v-text-field>
    </v-col>
    <v-col cols="12">
      <v-textarea
        class="rounded-lg"
        label="توضیحات"
        dense
        :loading="formLoading"
        v-model="formDto.description"
        outlined
        :rules="[rules.required]"
      ></v-textarea>
    </v-col>
    <v-col cols="12">
      <slot name="form-action" :validate="validate" :submit="submit" />
    </v-col>
  </v-form>
</template>

<script>
import fromRules from "@commen/form/mixins/rules";;
import PlanMixin from "@packages/admin/plan/mixins/modify";
import PriceInput from "@commen/reusable-inputs/components/Price.vue";
import ServiceSelector from "@packages/admin/service/components/Selector.vue";
export default {
  mixins: [PlanMixin, fromRules],
  components: {
    ServiceSelector,
    PriceInput,
  },
  data() {
    return {
      selectedService: [],
      formDto: {
        created_id: null,
        updated_id: null,
        is_viewed: null,
        is_active: null,
        title: null,
        description: null,
        price: null,
        duration: null,
      },
    };
  },
  watch: {
    selectedService(newValue) {
      this.setDetailForm(newValue);
    },
    plan: {
      handler() {
        if (this.$route.path.includes("edit")) this.setData();
      },
      immediate: true,
      deep: true,
    },
  },
  filters: {
    activeToFa(value) {
      if (value) return "فعال";
      return "غیرفعال";
    },
    viewedToFa(value) {
      if (value) return "قابل مشاهده";
      return "غیر قابل مشاهده";
    },
  },
  computed: {
    planInfoRefrence() {
      return this.$refs.planInfo;
    },
    themeList() {
      return this.$store.getters["admin/theme/themeList"];
    },
  },
  methods: {
    setData() {
      Object.keys(this.formDto).forEach(
        (key) => (this.formDto[key] = this.plan[key])
      );
      this.selectedService = this.plan.details.map((detail) =>
        Number(detail.service_id)
      );
    },
    setServiceData() {
      if (this.selectedService.includes(1) && this.themeList.length == 0)
        this.$store.dispatch("admin/theme/get/GET_ALL_THEME_ASYNC");
    },
    submit() {
      this.setPlanStepByStep(this.formDto);
      this.setServiceData();
    },
    validate() {
      return this.planInfoRefrence.validate();
    },
  },
};
</script>

<style lang="scss" scoped></style>

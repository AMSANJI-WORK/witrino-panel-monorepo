<template>
  <v-form ref="planInfo" class="d-flex flex-wrap">
    <v-col cols="12" sm="6" md="4">
      <v-switch
        :label="formDto.is_viewed | viewedToFa"
        inset
        :loading="fromLoading"
        v-model="formDto.is_viewed"
        color="green"
        class="mt-0"
      ></v-switch>
    </v-col>
    <v-col cols="12" sm="6" md="4">
      <v-switch
        inset
        v-model="formDto.is_active"
        :loading="fromLoading"
        :label="formDto.is_active | activeToFa"
        color="green"
        class="mt-0"
      ></v-switch>
    </v-col>
    <v-col cols="0" md="4" />
    <v-col cols="12" sm="6">
      <v-text-field
        class="rounded-lg"
        :loading="fromLoading"
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
        :loading="fromLoading"
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
        :loading="fromLoading"
        v-model="formDto.description"
        outlined
        :rules="[rules.required]"
      ></v-textarea>
    </v-col>
    <v-col cols="12">
      <slot name="form-action" :validate="validate" />
    </v-col>
  </v-form>
</template>

<script>
import PlanMixin from "@packages/admin/plan/mixins/modify";
import FormMixin from "@shared/mixins/form";
import ServiceSelector from "@packages/admin/service/components/Selector.vue";
import PriceInput from "@shared/components/Reusable/PriceInput.vue";
export default {
  mixins: [PlanMixin, FormMixin],
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
        details: [],
      },
    };
  },
  watch: {
    selectedService() {
      this.setPlanDetails();
      this.initializeFormPlanDetail();
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
  },
  methods: {
    setPlanDetails() {
      this.formDto.details = this.selectedService.map((service) => {
        return {
          service_id: service.id,
          attributes: service.attributes.map((attr) => {
            return { attr_id: attr.id, value: null };
          }),
        };
      });
    },
    initializeFormPlanDetail() {
      let formDatailSchema = this.selectedService.map((service) => {
        const { title, attributes } = service;
        let selectedAttrs = attributes.map((attr) => {
          return {
            service_id: attr.service_id,
            title: attr.title,
            title_en: attr.title_en,
            type: attr.type,
            default_value: attr.default_value,
            default_url: attr.default_url,
            is_required: attr.is_required,
            is_can_add: attr.is_can_add,
          };
        });
        return {
          serviceTitle: title,
          serviceAttributes: selectedAttrs,
        };
      });
      this.setPlanDetailFormSchema(formDatailSchema);
    },

    validate() {
      this.setPlanStepByStep(this.formDto);
      return this.planInfoRefrence.validate();
    },
  },
};
</script>

<style lang="scss" scoped></style>

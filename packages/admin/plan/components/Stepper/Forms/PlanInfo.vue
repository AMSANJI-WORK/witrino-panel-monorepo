<template>
  <v-form ref="planInfo" class="d-flex flex-wrap">
    <v-col cols="12" sm="6" md="4">
      <v-switch
        :label="formDto.is_viewed | viewedToFa"
        inset
        v-model="formDto.is_viewed"
        color="green"
        class="mt-0"
      ></v-switch>
    </v-col>
    <v-col cols="12" sm="6" md="4">
      <v-switch
        inset
        v-model="formDto.is_active"
        :label="formDto.is_active | activeToFa"
        color="green"
        class="mt-0"
      ></v-switch>
    </v-col>
    <v-col cols="0" md="4" />
    <v-col cols="12" sm="6">
      <v-text-field
        class="rounded-lg"
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
      <v-text-field
        class="rounded-lg"
        label="قیمت"
        dense
        outlined
        :rules="[rules.required]"
      ></v-text-field>
    </v-col>
    <v-col cols="12" sm="6">
      <v-text-field
        class="rounded-lg"
        label="دوره"
        dense
        outlined
        :rules="[rules.required]"
      ></v-text-field>
    </v-col>
    <v-col cols="12">
      <v-textarea
        class="rounded-lg"
        label="توضیحات"
        dense
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
export default {
  mixins: [PlanMixin, FormMixin],
  components: {
    ServiceSelector,
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
      console.log(newValue);
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
    validate() {
      return this.planInfoRefrence.validate();
    },
  },
};
</script>

<style lang="scss" scoped></style>

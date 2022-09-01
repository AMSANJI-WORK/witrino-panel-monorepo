<template>
  <v-form>
    <v-col v-show="themeServiceVisible" cols="12">
      <ThemeService ref="theme-service" :is-visible="themeServiceVisible" />
    </v-col>
    <v-col cols="12">
      <slot name="form-action" :validate="validate" :submit="submit" />
    </v-col>
  </v-form>
</template>

<script>
import PlanMixin from "@packages/admin/plan/mixins/modify";
import ThemeService from "@packages/admin/plan/components/Stepper/Forms/Services/Theme.vue";
export default {
  mixins: [PlanMixin],
  components: {
    ThemeService,
  },
  data() {
    return {};
  },
  computed: {
    formDatailSchema() {
      return this.$store.getters["admin/plan/dfrom/schema"];
    },
    themeServiceVisible() {
      return this.formDatailSchema.includes(1);
    },
  },
  methods: {
    submit() {},
    validate() {
      let validateServices = [];
      if (this.themeServiceVisible) {
        validateServices = [
          ...validateServices,
          this.$refs["theme-service"].validataTheme(),
        ];
      }
      validateServices = [...new Set(validateServices)];
      const isFormValid = (validationResult) => validationResult === true;
      return validateServices.every(isFormValid);
    },
  },
};
</script>

<style lang="scss" scoped></style>

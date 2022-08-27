<template>
  <v-form ref="planDetail">
    <!-- <DaynamicFormContent
      v-if="schemaList != 0"
      v-for="(schema, index) in schemaList"
      :from-schema="schema"
      :key="index"
    /> -->
    <v-col cols="12">
      <slot name="form-action" :validate="validate" />
    </v-col>
  </v-form>
</template>

<script>
import PlanMixin from "@packages/admin/plan/mixins/modify";
import DaynamicFormContent from "@packages/admin/plan/components/DaynamicFormContent.vue";
export default {
  mixins: [PlanMixin],
  components: {
    DaynamicFormContent,
  },
  data() {
    return {};
  },
  watch: {
    schemaList(newValue) {},
  },
  computed: {
    formDatailSchema() {
      return this.$store.getters["admin/plan/dfrom/schema"];
    },
    schemaList() {
      return this.formDatailSchema.map((section) => {
        return {
          title: section.serviceTitle,
          properties: section.serviceAttributes,
        };
      });
    },
  },
  methods: {
    validate() {
      return this.$refs.planDetail.validate();
    },
  },
};
</script>

<style lang="scss" scoped></style>

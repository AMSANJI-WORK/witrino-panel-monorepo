<template>
  <v-form ref="planDetail">
    <v-jsf
      v-model="model"
      :schema="schema"
      :options="options"
      @input="logEvent('input', $event)"
      @change="logEvent('change', $event)"
      @input-child="logEvent('input-child', $event)"
      @change-child="logEvent('change-child', $event)"
    />
    <v-col cols="12">
      <slot name="form-action" :validate="validate" />
    </v-col>
  </v-form>
</template>

<script>
import PlanMixin from "@packages/admin/plan/mixins/modify";
import FormMixin from "@shared/mixins/form";
export default {
  mixins: [PlanMixin, FormMixin],
  data() {
    return {
      model: {
        objectSection: {},
      },
      options: {
        sectionsClass: "pa-5",
      },
      schema: {
        type: "object",
        properties: {
          objectSection: {
            type: "object",
            title: "I'm a section with a default value",
            properties: {
              child1: {
                type: "string",
                "x-class": "pa-3",
                "x-props": {
                  outlined: true,
                  dense: true,
                },
                "x-options": {
                  fieldColProps: {
                    cols: 12,
                    md: 6,
                  },
                },
              },
              child2: {
                type: "string",
                "x-class": "pa-3",
                "x-props": {
                  outlined: true,
                  dense: true,
                },
                "x-options": {
                  fieldColProps: {
                    cols: 12,
                    md: 6,
                  },
                },
              },
            },
          },
        },
      },
    };
  },
  computed: {
    formDatailSchema() {
      return this.$store.getters["admin/plan/dfrom/schema"];
    },
    planDetailRefrence() {
      return this.$refs.planDetail;
    },
  },
  methods: {
    logEvent(key, $event) {
      console.log(this.formDatailSchema);
      console.log("vjsf event", key, $event);
    },

    validate() {
      return this.planDetailRefrence.validate();
    },
  },
};
</script>

<style lang="scss" scoped></style>

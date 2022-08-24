<template>
  <v-form ref="form" v-model="valid">
    <VJsf
      v-model="model"
      :schema="schema"
      :options="options"
      @input="logEvent('input', $event)"
      @change="logEvent('change', $event)"
      @input-child="logEvent('input-child', $event)"
      @change-child="logEvent('change-child', $event)"
    />
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
        objectSection: {
          child1: "child 1 default value",
          child2: "child 2 default value",
        },
        stringProp: "I'm a default value",
      },
      options: {},
      schema: {
        type: "object",
        properties: {
          stringProp: {
            type: "string",
            title: "I'm a string",
            default: "I'm a default value",
          },
          objectSection: {
            type: "object",
            title: "I'm a section with a default value",
            default: {
              child1: "child 1 default value",
              child2: "child 2 default value",
            },
            properties: {
              child1: {
                type: "string",
              },
              child2: {
                type: "string",
              },
            },
          },
        },
      },
      valid: null,
    };
  },
  methods: {
    logEvent(key, $event) {
      console.log("vjsf event", key, $event);
    },
  },
};
</script>

<style lang="scss" scoped></style>

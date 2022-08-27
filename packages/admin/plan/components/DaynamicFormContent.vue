<template>
  <v-sheet class="transparent d-flex flex-wrap">
    <v-col cols="12">
      <SectionDivider
        bind-class="my-5"
        title-class="font-weight-bold text-subtitle-2"
        card-title-class="px-5"
        :title="fromSchema.title"
        :visible-divider="true"
      />
    </v-col>

    <v-col
      cols="12"
      sm="6"
      v-for="(selectInput, index) in getInputTypeSelect"
      :key="index"
    >
      <v-select
        dense
        outlined
        class="rounded-lg"
        :loading="fromLoading"
        :label="selectInput.title"
        :items="themes"
      >
        <template slot="no-data">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title> مقداری یافت نشد </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-select>
    </v-col>
    <v-col
      cols="12"
      sm="6"
      v-for="normalInput in getInputTypeOther"
      :key="normalInput.id"
    >
      <v-text-field
        dense
        outlined
        class="rounded-lg"
        :label="normalInput.title"
        :loading="fromLoading"
      ></v-text-field>
    </v-col>
  </v-sheet>
</template>

<script>
import SectionDivider from "@shared/components/Reusable/SectionDivider.vue";
import daynamicClient from "@witrino/repositories/clients/daynamic";

import FormMixin from "@shared/mixins/form";
export default {
  mixins: [FormMixin],
  components: { SectionDivider },
  props: {
    fromSchema: Object,
  },
  data() {
    return {
      themes: [],
    };
  },
  computed: {
    getInputTypeSelect() {
      return (
        this.fromSchema?.properties.filter((prop) => prop.type == "select") ??
        []
      );
    },
    getInputTypeOther() {
      return (
        this.fromSchema?.properties.filter((prop) => prop.type != "select") ??
        []
      );
    },
  },
  methods: {
    setRules(value) {
      return value === 1 ? [this.rules.required] : [];
    },
    async fetchDefaultUrl(_URL_) {
      try {
        if (_URL_ == "") return null;
        const {
          data: {
            data: { data },
          },
        } = await daynamicClient.post(_URL_);
        this.themes = data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>

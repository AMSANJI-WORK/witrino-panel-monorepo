<template>
  <v-col cols="12" :sm="$attrs.sm" :md="$attrs.md" :lg="$attrs.lg">
    <v-autocomplete
      dense
      outlined
      :class="inputClass"
      :loading="formLoading"
      :rules="[rules.required]"
      item-text="name"
      item-value="id"
      :items="categories"
      :label="label"
      :hint="hint"
      persistent-hint
      :multiple="multiple"
      :value="value"
      @input="updateValue"
    >
      <template v-slot:no-data> <v-select-input-no-data /> </template>
      <template v-slot:selection="{ item, index }">
        <v-select-input-selection
          :data-source="{
            item,
            index,
            length,
          }"
        />
      </template>
    </v-autocomplete>
  </v-col>
</template>

<script>
import { mapGetters } from "vuex";
import VSelectInputNoData from "@polotik/components/Reusable/VSelectInputNoData.vue";
import VSelectInputSelection from "@polotik/components/Reusable/VSelectInputSelection.vue";
import fromRules from "@commen/form/mixins/rules";

export default {
  inheritAttrs: false,
  mixins: [fromRules],
  components: {
    VSelectInputNoData,
    VSelectInputSelection,
  },
  props: {
    value: Array,
    label: {
      type: String,
      default: "دسته بندی",
    },
    hint: {
      type: String,
      default: "",
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    inputClass: {
      type: String,
      default: "rounded-lg",
    },
  },
  data() {
    return {
      length: 0,
    };
  },
  watch: {
    categories: {
      handler(newValue) {},
      immediate: true,
    },
  },
  computed: {
    ...mapGetters("guilds/services/category", {
      categories: "categories",
      formLoading: "formLoading/formLoading",
    }),
  },
  methods: {
    updateValue(value) {
      this.length = value.length;
      this.$emit("input", value);
    },
  },
};
</script>

<style lang="scss" scoped></style>

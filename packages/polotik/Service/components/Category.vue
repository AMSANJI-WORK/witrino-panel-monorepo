<template>
  <v-col cols="12" :sm="$attrs.sm" :md="$attrs.md" :lg="$attrs.lg">
    <v-autocomplete
      dense
      outlined
      :class="inputClass"
      :loading="fromLoading"
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
import FormMixin from "@shared/mixins/form";
import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("guilds/services/category");
import VSelectInputNoData from "@polotik/components/Reusable/VSelectInputNoData.vue";
import VSelectInputSelection from "@polotik/components/Reusable/VSelectInputSelection.vue";
export default {
  inheritAttrs: false,
  components: {
    VSelectInputNoData,
    VSelectInputSelection,
  },
  mixins: [FormMixin],
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
    ...mapGetters(["categories"]),
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

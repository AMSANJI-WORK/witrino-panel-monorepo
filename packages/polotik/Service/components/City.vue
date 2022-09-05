<template>
  <v-col cols="12" :sm="$attrs.sm" :md="$attrs.md" :lg="$attrs.lg">
    <v-autocomplete
      dense
      outlined
      class="rounded-lg"
      :class="$attrs['city-selector-class']"
      :loading="formLoading"
      :value="value"
      :rules="[rules.required]"
      :items="cities"
      item-text="name"
      item-value="id"
      :label="label"
      @input="updateValue"
    >
      <template v-slot:no-data>
        <v-select-input-no-data />
      </template>
    </v-autocomplete>
  </v-col>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers(
  "guilds/services/cities"
);
import VSelectInputNoData from "@polotik/components/Reusable/VSelectInputNoData.vue";
import servicesTypes from "@packages/polotik/service/store/types";
import FormMixin from "@polotik/mixins/base/form";
export default {
  inheritAttrs: false,
  mixins: [FormMixin],
  props: {
    value: [Number, Object],
    label: {
      type: String,
      default: "مکان",
    },
  },
  components: {
    VSelectInputNoData,
  },
  data() {
    return {
      content: this.value,
    };
  },
  watch: {
    cities: {
      handler(newValue) {},
      immediate: true,
    },
  },
  computed: {
    ...mapGetters(["cities"]),
  },
  methods: {
    updateValue(value) {
      this.$emit("input", value);
    },
    ...mapActions({
      getAllCitiesAsync: `${servicesTypes.GET_ALL_CITIES_ASYNC}`,
    }),
  },
  created() {
    this.getAllCitiesAsync();
  },
};
</script>

<style lang="scss" scoped></style>

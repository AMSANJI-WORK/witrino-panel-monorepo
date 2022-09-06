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
import { mapGetters, mapActions } from "vuex";
import VSelectInputNoData from "@polotik/components/Reusable/VSelectInputNoData.vue";
import servicesTypes from "@packages/polotik/service/store/types";
import fromRules from "@commen/form/mixins/rules";

export default {
  inheritAttrs: false,
  props: {
    value: [Number, Object],
    label: {
      type: String,
      default: "مکان",
    },
  },
  mixins: [fromRules],
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
    ...mapGetters("guilds/services/cities", {
      cities: "cities",
      formLoading: "formLoading/formLoading",
    }),
  },
  methods: {
    updateValue(value) {
      this.$emit("input", value);
    },
    ...mapActions("guilds/services/cities", {
      getAllCitiesAsync: `${servicesTypes.GET_ALL_CITIES_ASYNC}`,
    }),
  },
  created() {
    this.getAllCitiesAsync();
  },
};
</script>

<style lang="scss" scoped></style>

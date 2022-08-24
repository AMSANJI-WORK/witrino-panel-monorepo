<template>
  <v-select
    outlined
    dense
    class="rounded-lg"
    multiple
    :items="serviceList"
    small-chips
    item-text="title"
    item-value="id"
    return-object
    :loading="fromLoading"
    :services="[rules.required]"
    label="انتخاب سرویس"
    :value="value"
    @input="updateValue"
  >
    <template v-slot:no-data>
      <v-sheet class="transparent text-caption text-center">
        موردی یافت نشد
      </v-sheet>
    </template>
    <template v-slot:selection="{ item, index }">
      <v-chip x-small v-if="index === 0">
        <span>{{ item.name }}</span>
      </v-chip>
      <span v-if="index === 1" class="grey--text text-caption">
        (+{{ value.length - 1 }} مورد دیگر)
      </span>
    </template>
  </v-select>
</template>

<script>
import FormMixin from "@shared/mixins/form";
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("admin/service");
import { serviceTypes } from "@packages/admin/service/store/types";
export default {
  mixins: [FormMixin],
  props: {
    value: {
      type: [Array, null],
      default: null,
    },
  },
  computed: {
    ...mapGetters(["serviceList"]),
  },
  methods: {
    ...mapActions({
      getAllService: `get/${serviceTypes.GET_ALL_SERVICE_ASYNC}`,
    }),
    updateValue(value) {
      this.$emit("input", value);
    },
  },
};
</script>

<style lang="scss" scoped></style>

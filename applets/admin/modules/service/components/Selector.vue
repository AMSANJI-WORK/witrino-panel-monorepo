<template>
  <v-select
    outlined
    dense
    class="rounded-lg"
    multiple
    :items="list"
    small-chips
    item-text="title"
    item-value="id"
    :loading="formLoading"
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
        <span>{{ item.title }}</span>
      </v-chip>
      <span v-if="index === 1" class="grey--text text-caption">
        (+{{ value.length - 1 }} مورد دیگر)
      </span>
    </template>
  </v-select>
</template>

<script>
import fromRules from "@commen/form/mixins/rules";;
import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("admin/service");
export default {
  mixins: [fromRules],
  props: {
    value: {
      type: [Array, null],
      default: null,
    },
  },
  computed: {
    ...mapGetters(["list"]),
  },
  methods: {
    updateValue(value) {
      this.$emit("input", value);
    },
  },
};
</script>

<style lang="scss" scoped></style>

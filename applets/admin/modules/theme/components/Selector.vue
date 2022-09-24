<template>
  <v-select
    outlined
    dense
    class="rounded-lg"
    multiple
    :items="themeList"
    small-chips
    item-text="name"
    item-value="id"
    :loading="formLoading"
    :rules="[rules.required]"
    label="انتخاب تم"
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
import fromRules from "@commen/form/mixins/rules";
import { mapGetters } from "vuex";
export default {
  mixins: [fromRules],
  props: {
    value: {
      type: [Array, null],
      default: null,
    },
  },
  computed: {
    ...mapGetters("admin/theme", { themeList: "list" }),
  },
  methods: {
    updateValue(value) {
      this.$emit("input", value);
    },
  },
};
</script>

<style lang="scss" scoped></style>

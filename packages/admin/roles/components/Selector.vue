<template>
  <v-select
    outlined
    dense
    class="rounded-lg"
    multiple
    :items="roleList"
    small-chips
    :single-line="true"
    item-text="name"
    item-value="id"
    :loading="formLoading"
    :roles="[rules.required]"
    :value="value"
    @input="updateValue"
  >
    <template #label>
      <v-icon class="ml-1">mdi-account-star</v-icon>
      <span>دسترسی</span>
    </template>
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
import loadingFormRole from "../mixins/loading";
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("admin/role");
import { roleTypes } from "@packages/admin/roles/store/types";
export default {
  mixins: [fromRules, loadingFormRole],
  props: {
    value: {
      type: [Array, null],
      default: null,
    },
  },
  computed: {
    ...mapGetters(["roleList"]),
  },
  methods: {
    ...mapActions({
      getAllRole: `get/${roleTypes.GET_ALL_ROLE_ASYNC}`,
    }),
    updateValue(value) {
      console.log(value);
      this.$emit("input", value);
    },
  },
  created() {
    if (this.roleList.length == 0) this.getAllRole();
  },
};
</script>

<style lang="scss" scoped></style>

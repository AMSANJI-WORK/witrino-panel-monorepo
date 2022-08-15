<template>
  <v-col cols="12" sm="6" class="pb-0">
    <v-select
      outlined
      dense
      class="rounded-lg"
      multiple
      :items="roles"
      small-chips
      :single-line="true"
      item-text="name"
      item-value="id"
      :loading="fromLoading"
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
  </v-col>
</template>

<script>
import FormMixin from "@shared/mixins/form";
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("admin/role");
import { roleTypes } from "@packages/admin/roles/store/types";
export default {
  mixins: [FormMixin],
  props: {
    value: {
      type: [Array, null],
      default: null,
    },
  },
  computed: {
    ...mapGetters(["roles"]),
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
    if (this.roles.length == 0) this.getAllRole();
  },
};
</script>

<style lang="scss" scoped></style>

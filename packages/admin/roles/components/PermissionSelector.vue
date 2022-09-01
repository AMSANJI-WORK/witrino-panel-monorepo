<template>
  <v-autocomplete
    outlined
    dense
    class="rounded-lg"
    label="انتخاب مجوز"
    multiple
    :items="permissionList"
    small-chips
    item-text="name"
    item-value="id"
    :loading="fromLoading"
    :roles="[rules.required]"
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
  </v-autocomplete>
</template>

<script>
import FormMixin from "@shared/mixins/form";
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers(
  "admin/role/permission"
);
export default {
  mixins: [FormMixin],
  props: {
    value: {
      type: [Array, null],
      default: null,
    },
  },
  computed: {
    ...mapGetters(["permissionList"]),
  },
  methods: {
    ...mapActions({
      setPermissionsAsync: "SET_PERMISSIONS_ASYNC",
    }),
    updateValue(value) {
      this.$emit("input", value);
    },
  },
  created() {
    if (this.permissionList.length == 0) this.setPermissionsAsync();
  },
};
</script>

<style lang="scss" scoped></style>

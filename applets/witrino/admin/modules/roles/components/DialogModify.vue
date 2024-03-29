<template>
  <v-dialog
    :value="value"
    @input="$emit('input', $event)"
    max-width="800"
    @click:outside="cancel"
  >
    <template v-slot:activator="{ on, attrs }" v-if="hasActivator">
      <v-btn
        color="primary"
        class="white--text rounded-lg"
        v-bind="attrs"
        v-on="on"
      >
        افزودن سطح دسترسی
      </v-btn>
    </template>
    <v-card>
      <v-card-title class="text-h5">{{ editedId | formTitle }}</v-card-title>
      <v-spacer></v-spacer>
      <v-card-text class="pb-0">
        <v-container>
          <v-form ref="role" @submit.prevent="submit" class="d-flex flex-wrap">
            <v-col cols="12" sm="6" md="4" class="pb-0">
              <v-text-field
                label="نام فارسی"
                outlined
                dense
                class="rounded-lg"
                :roles="[rules.required]"
                :loading="formLoading"
                v-model="editableRole.name"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4" class="pb-0">
              <v-text-field
                outlined
                dense
                class="rounded-lg"
                label="نام انگلیسی"
                :loading="formLoading"
                :roles="[rules.required]"
                v-model="editableRole.name_en"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4" class="pb-0">
              <PermissionSelector v-model="editableRole.permissions" />
            </v-col>
          </v-form>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="red darken-1" text @click.native="cancel">انصراف </v-btn>
        <v-btn
          text
          color="blue darken-1"
          :loading="formLoading"
          @click.native="save"
          >بله</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import RoleMixin from "../mixins/modify";
import fromRules from "@applets/commen/form/mixins/rules";
import loadingFormRole from "../mixins/loading";
import PermissionSelector from "./PermissionSelector.vue";
let service = "Role";
export default {
  components: {
    PermissionSelector,
  },
  mixins: [RoleMixin, fromRules, loadingFormRole],
  props: {
    hasActivator: {
      type: Boolean,
      default: true,
    },
    editedId: {
      types: Number,
      default: -1,
    },
    value: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      editableRoleDefault: {
        created_id: null,
        updated_id: null,
        name: null,
        name_en: null,
        permissions: [],
      },
    };
  },
  watch: {
    editedId(newValue) {
      if (newValue) this.getRoleData();
    },
    value(newValue) {
      if (!newValue) this.cancel();
    },
  },
  filters: {
    formTitle(value) {
      return `${value == -1 ? "افزودن" : "ویرایش"} سطح دسترسی`;
    },
  },
  methods: {
    cancel() {
      Object.assign(this.editableRole, this.editableRoleDefault);
      this.$emit("input", false);
    },
    save() {
      if (this.$refs.role.validate()) {
        this.editedId == -1
          ? this.createRole({
              service,
              payload: {
                ...this.editableRole,
                created_id: this.userId,
              },
            }).then(() => this.$nextTick(() => this.cancel()))
          : this.updateRole({
              service,
              payload: {
                id: this.editedId,
                update_id: this.userId,
                ...this.editableRole,
              },
            }).then(() => this.$nextTick(() => this.cancel()));
      }
    },
    getRoleData() {
      if (this.editedId != -1)
        this.getRole({ service, payload: { id: this.editedId } }).then(() =>
          Object.assign(this.editableRole, this.role)
        );
    },
  },
};
</script>

<style lang="scss" scoped>
:deep(.v-text-field--outlined > .v-input__control > .v-input__slot) {
  background: #f6f6f6;
}
:deep(.v-input--is-focused .v-input__slot) {
  background: #fff !important;
}
</style>

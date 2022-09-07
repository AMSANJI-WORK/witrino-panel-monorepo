<template>
  <v-sheet class="transparent mx-md-15 mx-sm-7 mx-4">
    <v-form ref="editUser" class="d-flex flex-wrap mx-md-15 mx-sm-7 mx-0">
      <v-sheet
        cols="12"
        class="d-flex align-top justify-center pb-0"
        width="100%"
      >
        <ModifyAvatar />
      </v-sheet>
      <v-sheet
        width="100%"
        class="d-flex flex-wrap align-top justify-md-center justify-space-between py-sm-0 py-2"
      >
        <v-col class="pa-0 d-flex">
          <p class="text-caption mx-3 mt-1">
            {{ editableUser.is_active | activeToFa }}
          </p>
          <v-switch
            v-model="editableUser.is_active"
            :rules="[rules.required]"
            inset
            color="green"
            class="mt-0"
          ></v-switch>
        </v-col>
        <v-col class="pa-0 d-flex justify-sm-end">
          <p class="text-caption mx-3 mt-1 text-no-wrap">
            {{ editableUser.is_viewed | viewedToFa }}
          </p>
          <v-switch
            v-model="editableUser.is_viewed"
            :rules="[rules.required]"
            inset
            color="green"
            class="mt-0"
          ></v-switch>
        </v-col>
      </v-sheet>
      <v-col cols="12" sm="6" class="pb-0">
        <v-text-field
          :loading="formLoading"
          v-model="editableUser.full_name"
          :rules="[rules.required]"
          class="rounded-lg"
          dense
          outlined
        >
          <template #label>
            <v-icon class="ml-1">mdi-account</v-icon>
            <span>نام‌و نام خانوادگی</span>
          </template>
        </v-text-field>
      </v-col>
      <v-col cols="12" sm="6" class="pb-0">
        <v-text-field
          class="rounded-lg"
          v-model="editableUser.father_name"
          dense
          outlined
          :loading="formLoading"
        >
          <template #label>
            <v-icon class="ml-1">mdi-human-cane</v-icon>
            <span>نام پدر </span>
          </template>
        </v-text-field>
      </v-col>
      <v-col cols="12" sm="6" class="pb-0">
        <v-text-field
          v-model="editableUser.national_no"
          :rules="[rules.required]"
          class="rounded-lg"
          dense
          outlined
          :loading="formLoading"
        >
          <template #label>
            <v-icon class="ml-1">mdi-account-key</v-icon>
            <span>کد ملی</span>
          </template>
        </v-text-field>
      </v-col>
      <v-col cols="12" sm="6" class="pb-0">
        <v-text-field
          class="rounded-lg"
          v-model="editableUser.mobile"
          :rules="[rules.required]"
          dense
          outlined
          :loading="formLoading"
        >
          <template #label class="pb-0">
            <v-icon class="ml-1 mdi-rotate-270">mdi-phone-in-talk</v-icon>
            <span>شماره همراه </span>
          </template>
        </v-text-field>
      </v-col>
      <v-col cols="12" sm="6" class="pb-0">
        <v-text-field
          class="rounded-lg"
          v-model="editableUser.email"
          dense
          outlined
          :loading="formLoading"
        >
          <template #label>
            <v-icon class="ml-1">mdi-email</v-icon>
            <span>ایمیل</span>
          </template>
        </v-text-field>
      </v-col>
      <v-col cols="12" sm="6" class="pb-0">
        <v-text-field
          class="rounded-lg"
          v-model="editableUser.phone"
          dense
          outlined
          :loading="formLoading"
        >
          <template #label>
            <v-icon class="ml-1">mdi-phone-classic</v-icon>
            <span>تلفن ثابت</span>
          </template>
        </v-text-field>
      </v-col>
      <v-col cols="12" sm="6" class="pb-0">
        <RoleSelector v-model="editableUser.roles" />
      </v-col>
      <v-col cols="12" sm="6" class="pb-0">
        <v-select
          class="rounded-lg"
          :items="genders"
          v-model="editableUser.jensiat"
          :rules="[rules.required]"
          :loading="formLoading"
          dense
          outlined
        >
          <template #label>
            <v-icon class="ml-1">mdi-gender-male</v-icon>
            <span>جنسیت</span>
          </template>
        </v-select>
      </v-col>
      <v-col cols="12" class="d-flex justify-end pb-8">
        <v-btn
          dark
          class="rounded-lg font-weight-thin px-10 d-sm-flex d-none"
          :color="submitBtnColor"
          :loading="formLoading"
          @click="submit"
        >
          {{ submitBtnText }}
        </v-btn>
        <v-btn
          dark
          class="rounded-lg font-weight-thin d-flex d-sm-none"
          :color="submitBtnColor"
          :loading="formLoading"
          block
          large
          @click="submit"
          >{{ submitBtnText }}</v-btn
        >
      </v-col>
    </v-form>
  </v-sheet>
</template>

<script>
import FormMixin from "@shared/mixins/form";
import RoleSelector from "@packages/admin/roles/components/Selector.vue";
import ModifyAvatar from "./ModifyFormAvatar.vue";
import UserMixin from "@packages/admin/users/mixins/modify";
export default {
  components: {
    ModifyAvatar,
    RoleSelector,
  },
  mixins: [FormMixin, UserMixin],
  data: () => ({
    showPass: false,
    genders: [
      {
        value: "woman",
        text: "زن",
      },
      {
        value: "man",
        text: "مرد",
      },
    ],
  }),
  computed: {
    validateFrom() {
      return this.$refs.editUser.validate();
    },
  },
  filters: {
    activeToFa(value) {
      if (value) return "فعال";
      return "غیرفعال";
    },
    viewedToFa(value) {
      if (value) return "قابل مشاهده";
      return "غیر قابل مشاهده";
    },
  },
  methods: {
    update() {
      this.editableUser = {
        ...this.editableUser,
        updated_id: this.currentUserId,
      };
      this.updateUser(this.editableUser);
    },
    create() {
      this.editableUser = {
        ...this.editableUser,
        created_id: this.currentUserId,
      };
      this.createUser(this.editableUser);
    },
    submit() {
      if (this.validateFrom)
        this.checkRoutePass ? this.update() : this.create();
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

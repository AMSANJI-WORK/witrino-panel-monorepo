<template>
  <v-sheet class="transparent rounded-lg mx-md-15 mx-sm-7 mx-4">
    <v-form ref="editProfile" class="d-flex flex-wrap mx-md-15 mx-sm-7 mx-0">
      <v-col cols="12" class="d-flex align-top justify-sm-center">
        <ModifyAvatar />
      </v-col>
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
          readonly
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
import ProfileMixin from "../mixins/edit";
import fromRules from "@commen/form/mixins/rules";
import loadingFormUser from "@applets/admin/modules/users/mixins/loading";
import ModifyAvatar from "@applets/admin/modules/users/components/ModifyFormAvatar.vue";
export default {
  components: {
    ModifyAvatar,
  },
  mixins: [fromRules, ProfileMixin, loadingFormUser],
  data: () => ({
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
      return this.$refs.editProfile.validate();
    },
  },
  filters: {
    activeToFa(value) {
      if (value) return "فعال";
      return "غیرفعال";
    },
  },
  methods: {
    update() {
      this.editableUser = {
        ...this.editableUser,
        updated_id: this.currentUserId,
      };
      this.updateUser({ service: "User", payload: { ...this.editableUser } });
    },
    submit() {
      if (this.validateFrom) this.update();
    },
  },
};
</script>

<style lang="scss" scoped>
:deep(.v-input--is-focused .v-input__slot) {
  background: #fff !important;
}
:deep(.v-text-field--outlined > .v-input__control > .v-input__slot) {
  background: #f6f6f6;
  font-size: 13px;
}
</style>

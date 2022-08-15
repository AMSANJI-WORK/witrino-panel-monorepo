<template>
  <v-sheet class="transparent d-flex flex-wrap px-sm-10 mx-sm-10 mx-auto">
    <v-col cols="12" md="6" class="py-1">
      <v-label label="شروع همکاری" :labelValue="user.create_at | hireDate">
        <template #icon>
          <v-icon class="ml-sm-4 ml-1">mdi-calendar-month</v-icon>
        </template>
      </v-label>
    </v-col>
    <v-col cols="12" md="6" class="py-1"
      ><v-label label="شماره همراه" :labelValue="user.mobile">
        <template #icon>
          <v-icon class="ml-sm-4 ml-1 mdi-rotate-270">mdi-phone-in-talk</v-icon>
        </template>
      </v-label>
    </v-col>
    <v-col cols="12" md="6" class="py-1">
      <v-label label="جنسیت" :labelValue="user.jensiat | gender">
        <template #icon>
          <v-icon class="ml-sm-4 ml-1">mdi-gender-male</v-icon>
        </template>
      </v-label>
    </v-col>
    <v-col cols="12" md="6" class="py-1">
      <v-label label="ایمیل" :labelValue="user.email">
        <template #icon>
          <v-icon class="ml-sm-4 ml-1">mdi-email</v-icon>
        </template>
      </v-label>
    </v-col>
    <v-col cols="12" md="6" class="py-1">
      <v-label label="نام پدر" :labelValue="user.father_name">
        <template #icon>
          <v-icon class="ml-sm-4 ml-1">mdi-human-cane</v-icon>
        </template>
      </v-label>
    </v-col>
    <v-col cols="12" md="6" class="py-1">
      <v-label label="تلفن ثابت" :labelValue="user.phone">
        <template #icon>
          <v-icon class="ml-sm-4 ml-1">mdi-phone-classic</v-icon>
        </template>
      </v-label>
    </v-col>
    <v-col cols="12"> </v-col>
  </v-sheet>
</template>

<script>
import moment from "moment-jalaali";
import UserMixin from "@packages/admin/users/mixins/modify";
import VLabel from "@shared/components/Reusable/VLabel.vue";
export default {
  mixins: [UserMixin],
  components: {
    VLabel,
  },
  filters: {
    gender(value) {
      return value?.includes("w") ? "خانم" : "آقا";
    },
    hireDate(value) {
      return moment(value).format("jYYYY/jMM/jDD");
    },
  },
};
</script>

<style lang="scss" scoped></style>

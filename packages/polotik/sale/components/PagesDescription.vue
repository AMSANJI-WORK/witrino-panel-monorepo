<template>
  <notification>
    <template v-slot:cardTilte>
      <v-chip small class="white p-green-primary--text">
        <v-icon color="p-green-primary" small class="mx-1">mdi-note-edit-outline</v-icon>
        {{ formTitle }}
      </v-chip>
    </template>
    <template v-slot:cardSubTilte> حراجی قیمت کالا و خدمت </template>
    <template v-slot:cardText>
      از طریق سامانه حراجی، امکان ارسال به تمام واحدهای تجاری ثبت شده در
      سامانه پلتیک در دسترس شماست. از طریق این سامانه میتوانید کالا یا خدمت مورد
      نظر خود را ثبت کرده و با دریافت قیمت از ارائه دهندگان متعدد، مناسب ترین
      گزینه را نتخاب کنید.
    </template>
  </notification>
</template>

<script>
import Notification from "@commen/card/components/Notification.vue";
export default {
  components: { Notification },
  computed: {
    pagaPath() {
      return this.$route.path;
    },
    formTitle() {
      if (this.pagaPath.includes("create")) return "ایجاد حراجی جدید";
      else if (this.pagaPath.includes("edit")) return "ویرایش حراجی";
      else if (this.pagaPath.includes("list")) return "توضیحات حراجی";
      return "مشاهده حراجی";
    },
  },
};
</script>

<style lang="scss" scoped></style>

<template>
  <notification>
    <template v-slot:cardTilte>
      <v-chip small class="white p-green-primary--text">
        <v-icon color="p-green-primary" small class="mx-1">mdi-note-edit-outline</v-icon>
        {{ formTitle }}
      </v-chip>
    </template>
    <template v-slot:cardSubTilte> استعلام قیمت کالا و خدمت </template>
    <template v-slot:cardText>
      از طریق سامانه استعلام، امکان ارسال به تمام واحدهای تجاری ثبت شده در
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
      if (this.pagaPath.includes("create")) return "ایجاد استعلام جدید";
      else if (this.pagaPath.includes("edit")) return "ویرایش استعلام";
      else if (this.pagaPath.includes("list")) return "توضیحات استعلام";
      return "مشاهده استعلام";
    },
  },
};
</script>

<style lang="scss" scoped></style>

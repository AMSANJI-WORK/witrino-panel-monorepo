<template>
  <notification>
    <template v-slot:cardTilte>
      <v-chip small class="white green--text">
        <v-icon color="green" small class="mx-1">mdi-note-edit-outline</v-icon>
        {{ formTitle }}
      </v-chip>
    </template>
    <template v-slot:cardSubTilte>
      مبادله پایاپای کالا و خدمات از طریق سامانه تهاتر
    </template>
    <template v-slot:cardText>
      مبادله پایاپای کالا و خدمات از طریق سامانه تهاتر از طریق این سامانه
      میتوانید کالا یا خدمت خود را در معرض مبادله با دیگران قرار دهید. با درج
      عنوان، تصویر و توضیحات کالا و خدمات مورد نظر، اقدام به ثبت آگهی تهاتر
      نموده و با تعیین ارزش تقریبی، مخاطبان خود را دعوت به ارائه پیشنهاد نمایید.
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
      if (this.pagaPath.includes("create")) return "ایجاد تهاتر جدید";
      else if (this.pagaPath.includes("edit")) return "ویرایش تهاتر";
      else if (this.pagaPath.includes("list")) return "توضیحات تهاتر";
      return "مشاهده تهاتر";
    },
  },
};
</script>

<style lang="scss" scoped></style>

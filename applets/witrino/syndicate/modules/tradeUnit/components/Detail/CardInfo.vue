<template>
  <v-card
    class="grey lighten-4 pa-4 rounded-lg d-flex flex-md-row flex-column"
    elevation="0"
  >
    <v-avatar size="150" class="ma-md-3 mx-auto">
      <img :src="require('@applets/commen/assets/image/png/etehadieh-profile.png')" />
    </v-avatar>
    <v-card-text
      class="d-flex flex-md-row flex-column justify-space-between align-center align-md-start"
    >
      <div class="d-flex flex-column align-center align-md-start">
        <v-card-title class="font-weight-bold pt-0">
          فروشگاه مبلمان رضایی
          <p class="text-caption mr-3">۴.۵</p>
          <v-icon color="yellow darken-3" small>mdi-star</v-icon>
        </v-card-title>
        <v-card-subtitle class="text-caption">رضا رضایی</v-card-subtitle>
        <v-label label="شماره تماس" labelValue="۰۹۱۲۴۵۷۸۹۶۵">
          <template #icon>
            <v-icon color="#1FDB84">mdi-phone-in-talk</v-icon>
          </template>
        </v-label>
        <v-label label="شروع همکاری" labelValue="5 اردیبهشت 1403">
          <template #icon>
            <w-calender />
          </template>
        </v-label>
        <v-label
          label="آدرس"
          labelValue="کهنوج روستای رشکرد مزرعه علی صدیقی نیا"
        >
          <template #icon>
            <v-icon color="red">mdi-map-marker</v-icon>
          </template>
        </v-label>
        <v-label label="تاریخ انقضا پروانه" labelValue="5 اردیبهشت 1403">
          <template #icon>
            <v-icon color="blue">mdi-text-box-check-outline</v-icon>
          </template>
        </v-label>
      </div>

      <div class="d-flex flex-column align-center">
        <v-btn color="green" class="my-2 px-md-8 white--text" x-small
          >فعال</v-btn
        >
        <QRCode />
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import QRCode from "@applets/commen/icons/components/QRCode.vue";
import VLabel from "@applets/commen/label/components/Label.vue";
import WCalender from "@applets/commen/icons/components/WCalender.vue";
export default {
  components: {
    QRCode,
    VLabel,
    WCalender,
  },
};
</script>

<style lang="scss" scoped></style>

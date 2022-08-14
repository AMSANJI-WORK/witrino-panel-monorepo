<template>
  <v-sheet class="rounded-lg pa-lg-10 pa-md-6 py-2" elevation="2" width="100%">
    <v-col cols="12" class="py-0">
      <v-btn icon @click="$router.back()">
        <v-icon color="blue-darken-5">mdi-arrow-right</v-icon>
      </v-btn>
    </v-col>
    <v-row justify="center" align="center" class="my-0">
      <v-col cols="12">
        <h4 class="text-h6 text-center">ارسال کد تایید</h4>
      </v-col>
      <v-col cols="12" class="pb-0">
        <span class="text-caption mr-4"
          >کد تایید برای شماره {{ userPhoneNumber }}پیامک شد</span
        >
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="12" class="py-0">
        <OtpForm class="px-4" />
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script>
import OtpForm from "@auth/components/Form/Otp.vue";
export default {
  components: {
    OtpForm,
  },
  computed: {
    userPhoneNumber() {
      return this.$route.query.mobile;
    },
  },
};
</script>

<style lang="scss" scoped></style>

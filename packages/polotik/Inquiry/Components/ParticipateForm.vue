<template>
  <v-col cols="12" class="d-flex flex-md-row flex-wrap align-center">
    <label for="offerPrice" class="ml-md-7 ml-3 pr-3">قیمت پیشنهادی شما</label>
    <v-responsive max-width="250" class="d-flex">
      <v-form ref="inquiryParticipate">
        <v-text-field
          class="rounded-l-0 white mt-7"
          outlined
          dense
          :loading="fromLoading"
          :rules="[rules.required]"
          :value="inquiryParticipate.data.price | toRial"
          @input="(value) => (inquiryParticipate.data.price = value)"
          :hint="inquiryParticipate.data.price | numberToStringFa"
          persistent-hint
          suffix="تومان"
          name="offerPrice"
        ></v-text-field>
      </v-form>
    </v-responsive>

    <v-btn
      dark
      class="rounded-r-0 rounded-lg"
      style="padding: 20px 0px; margin-top: 1px"
      color="success"
      :loading="submitBtnLoading"
      @click="submitRequest"
      elevation="5"
    >
      ارسال</v-btn
    >
    <v-spacer></v-spacer>
    <v-btn
      color="red"
      :disabled="true"
      class="py-5 ml-4 rounded-lg white--text"
      elevation="10"
    >
      اطلاعات تماس</v-btn
    >
  </v-col>
</template>

<script>
import { mapActions } from "vuex";
import FormMixin from "@polotik/mixins/base/form";
import UtilityMixin from "@shared/mixins/utility";
import TYPES from "@packages/polotik/inquiry/store/modules/request/types";

export default {
  mixins: [FormMixin, UtilityMixin],
  data() {
    return {
      inquiryParticipate: {
        title: "تست",
        description: "تست درخواست استعلام ایجاد",
        status: 1,
        data: {
          price: null,
        },
      },
    };
  },
  methods: {
    ...mapActions("guilds/inquiry/request", {
      createRequestInquiryAsync: TYPES.CREATE_OFFER_ASYNC,
    }),
    submitRequest() {
      if (this.$refs.inquiryParticipate.validate())
        this.createRequestInquiryAsync({
          target: { name: "inquiry", id: this.$route.params.id },
          participateForm: this.inquiryParticipate,
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>

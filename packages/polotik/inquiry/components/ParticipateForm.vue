<template>
  <v-col cols="12" class="d-flex flex-md-row flex-wrap align-center">
    <label for="offerPrice" class="ml-md-7 ml-3 pr-3">قیمت پیشنهادی شما</label>
    <v-responsive max-width="250" class="d-flex">
      <v-form ref="inquiryParticipate">
        <PriceInput
          class="rounded-l-0 white mt-7"
          v-model="inquiryParticipate.price"
          :loading="formLoading"
          :rules="[rules.required]"
        />
      </v-form>
    </v-responsive>

    <v-btn
      dark
      class="rounded-r-0 rounded-lg"
      style="padding: 20px 0px; margin-top: 1px"
      color="success"
      :loading="formLoading"
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
import inquiryLoadingMixin from "@packages/polotik/inquiry/mixins/loading";
import fromRules from "@commen/form/mixins/rules";
import OFFER_TYPES from "@commen/offer/polotik/store/types";
import PriceInput from "@commen/reusable-inputs/components/Price.vue";

export default {
  mixins: [inquiryLoadingMixin, fromRules],
  components: {
    PriceInput,
  },
  data() {
    return {
      inquiryParticipate: {
        price: null,
        title: "تست",
        description: "تست درخواست استعلام ایجاد",
        status: 1,
      },
    };
  },
  methods: {
    ...mapActions("inquiry/request", {
      createRequestInquiryAsync: OFFER_TYPES.CREATE_OFFER_ASYNC,
    }),
    submitRequest() {
      if (this.$refs.inquiryParticipate.validate())
        this.createRequestInquiryAsync({
          target: { name: "inquiry", id: this.$route.params.id },
          participateForm: this.inquiryParticipate,
        }).then(() => {
          this.$router.push("outcome");
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>

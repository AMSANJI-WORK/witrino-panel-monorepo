<template>
  <v-col cols="12">
    <v-card-title class="pt-0 pr-3 text--secondary">
      ارسال نظر
      <v-spacer></v-spacer>
      <v-btn
        color="success"
        class="rounded-lg white--text"
        :loading="fromLoading"
        @click="submitRequest"
        elevation="10"
      >
        ارسال
      </v-btn>
    </v-card-title>
    <v-form ref="barterParticipate">
      <v-textarea
        dense
        :loading="fromLoading"
        v-model="barterParticipate.data.comment"
        class="rounded-lg pl-4 pr-3"
        outlined
        placeholder="نظرات یا پیشنهادات خود را میتوانید در این قسمت ثبت کنید"
      ></v-textarea>
    </v-form>
  </v-col>
</template>

<script>
import FormMixin from "@polotik/mixins/base/form";
import TYPES from "@packages/polotik/barter/modules/offers/store/types";
import { mapActions } from 'vuex';

export default {
  mixins: [FormMixin],
  data() {
    return {
      barterParticipate: {
        title: "تست",
        description: "تست درخواست تهاتر ایجاد",
        status: 1,
        data: {
          comment: "",
        },
      },
    };
  },
  methods: {
    ...mapActions("guilds/barter/request", {
      createRequestBarterAsync: TYPES.CREATE_OFFER_BARTER_ASYNC,
    }),
    submitRequest() {
      console.log(true);
      if (this.$refs.barterParticipate.validate())
        this.createRequestBarterAsync({
          target: { name: "barter", id: this.$route.params.id },
          participateForm: this.barterParticipate,
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>

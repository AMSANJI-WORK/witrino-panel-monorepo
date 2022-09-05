<template>
  <v-col cols="12">
    <v-card-title class="pt-0 pr-3 text--secondary">
      ارسال نظر
      <v-spacer></v-spacer>
      <v-btn
        color="success"
        class="rounded-lg white--text"
        :loading="formLoading"
        @click="submitRequest"
        elevation="10"
      >
        ارسال
      </v-btn>
    </v-card-title>
    <v-form ref="barterParticipate">
      <v-textarea
        dense
        :loading="formLoading"
        v-model="barterParticipate.data.comment"
        class="rounded-lg pl-4 pr-3"
        outlined
        placeholder="نظرات یا پیشنهادات خود را میتوانید در این قسمت ثبت کنید"
      ></v-textarea>
    </v-form>
  </v-col>
</template>

<script>
import barterLoadingMixin from "@packages/polotik/barter/mixins/loading";
import TYPES from "@packages/polotik/barter/modules/offers/store/types";
import { mapActions } from "vuex";

export default {
  mixins: [barterLoadingMixin],
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
        }).then(() => {
          this.$router.go(0);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>

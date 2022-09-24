<template>
  <v-col cols="12">
    <v-card-title class="pt-0 pr-3 text--secondary">
      ارسال پیشنهاد
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
        :rules="[rules.required]"
        :loading="formLoading"
        v-model="barterParticipate.description"
        class="rounded-lg pl-4 pr-3"
        outlined
        placeholder="نظرات یا پیشنهادات خود را میتوانید در این قسمت ثبت کنید"
      ></v-textarea>
    </v-form>
  </v-col>
</template>

<script>
import barterLoadingMixin from "@applets/polotik/barter/mixins/loading";
import OFFER_TYPES from "@commen/offer/polotik/store/types";
import fromRules from "@commen/form/mixins/rules";

import { mapActions } from "vuex";

export default {
  mixins: [barterLoadingMixin, fromRules],
  data() {
    return {
      barterParticipate: {
        title: "تست",
        description: null,
        status: 1,
      },
    };
  },
  methods: {
    ...mapActions("barter/request", {
      createRequestBarterAsync: OFFER_TYPES.CREATE_OFFER_ASYNC,
    }),
    submitRequest() {
      if (this.$refs.barterParticipate.validate())
        this.createRequestBarterAsync({
          target: { name: "barter", id: this.$route.params.id },
          participateForm: this.barterParticipate,
        }).then(() => {
          this.$router.push("outcome");
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>

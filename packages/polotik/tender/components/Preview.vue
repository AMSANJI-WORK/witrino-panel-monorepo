<template>
  <v-card elevation="6" class="mx-2 rounded-lg">
    <preview-content />
    <v-card-actions>
      <v-spacer></v-spacer>
      <tender-participate-form v-if="showDialogBtn" />
      <v-btn
        v-if="tender?.user_offer?.length >= 1"
        color="success"
        @click="$router.push('outcome')"
        >پیگیری پیشنهاد من</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
import Cookies from "js-cookie";
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapGetters, mapMutations } =
  createNamespacedHelpers("guilds/tender");
import PreviewContent from "./PreviewContent/index.vue";
import TenderParticipateForm from "./ParticipateForm.vue";
export default {
  components: {
    PreviewContent,
    TenderParticipateForm,
  },
  watch: {
    tender: {
      handler(newValue) {},
      immediate: true,
    },
  },
  computed: {
    ...mapGetters(["tender"]),
    tenderId() {
      return this.$route.params.id;
    },
    showDialogBtn() {
      return (
        this.currentUserId != this.tender.user_id &&
        !this.tender?.user_offer?.length >= 1
      );
    },
    currentUserId() {
      return Cookies.get("user-id");
    },
  },
  methods: {
    ...mapActions({ getTenderData: "GET_A_TENDER_ASYNC" }),
    ...mapMutations({ resetTender: "RESET_TENDER" }),
  },
  created() {
    this.getTenderData(this.tenderId);
  },
};
</script>
<style lang="scss" scoped></style>

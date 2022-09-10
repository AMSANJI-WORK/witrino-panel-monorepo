<template>
  <v-card elevation="6" class="mx-2 rounded-lg">
    <preview-content />
    <v-card-actions class="px-5 pb-4">
      <v-spacer></v-spacer>
      <auction-participate-form v-if="showDialogBtn" />
      <v-btn
        v-if="auction?.user_offer?.length >= 1"
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
  createNamespacedHelpers("guilds/auction");
import PreviewContent from "./PreviewContent/index.vue";
import AuctionParticipateForm from "./ParticipateForm.vue";
export default {
  components: {
    PreviewContent,
    AuctionParticipateForm,
  },
  watch: {
    auction: {
      handler(newValue) {},
      immediate: true,
    },
  },
  computed: {
    ...mapGetters(["auction"]),
    auctionId() {
      return this.$route.params.id;
    },
    cities() {
      return this.$store.getters["guilds/services/cities/cities"];
    },
    currentUserId() {
      return Cookies.get("user-id");
    },
    showDialogBtn() {
      return (
        this.currentUserId != this.auction.user_id &&
        !this.auction?.user_offer?.length >= 1
      );
    },
  },
  methods: {
    ...mapMutations({ resetAuction: "RESET_AUCTION" }),
    ...mapActions({ getAnAuctionData: "GET_ONE_AUCTION_ASYNC" }),
  },
  created() {
    if (this.cities.length == 0)
      this.$store.dispatch("guilds/services/cities/GET_ALL_CITIES_ASYNC");
    this.getAnAuctionData(this.auctionId);
  },
};
</script>
<style lang="scss" scoped>
:deep(.v-slider--horizontal .v-slider__track-container) {
  width: 100%;
  height: 7px;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}
</style>

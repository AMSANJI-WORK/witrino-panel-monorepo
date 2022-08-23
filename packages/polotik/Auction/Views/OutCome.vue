<template>
  <v-sheet class="transparent">
    <OutCome />
  </v-sheet>
</template>

<script>
import { mapActions } from "vuex";
import { GET_AN_AUCTION_ASYNC } from "@packages/polotik/Auction/Store/get/types";
import OutCome from "@packages/polotik/Auction/Components/OutCome/index.vue";
export default {
  components: {
    OutCome ,
  },
  methods: {
    ...mapActions("guilds/auction", {
      getAnAuction: GET_AN_AUCTION_ASYNC,
    }),
  },
  created() {
    this.getAnAuction(this.$route.params.id);
  },
};
</script>

<style lang="scss" scoped></style>

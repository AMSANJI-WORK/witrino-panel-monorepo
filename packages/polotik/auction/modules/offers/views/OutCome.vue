<template>
  <v-sheet class="transparent">
    <OutCome />
  </v-sheet>
</template>

<script>
import { mapActions } from "vuex";
import { GET_ONE_AUCTION_ASYNC } from "@packages/polotik/auction/store/get/types";
import OutCome from "@packages/polotik/auction/modules/offers/components/OutCome/index.vue";
export default {
  components: {
    OutCome,
  },
  methods: {
    ...mapActions("guilds/auction", {
      getAnAuction: GET_ONE_AUCTION_ASYNC,
    }),
  },
  created() {
    this.getAnAuction(this.$route.params.id);
  },
};
</script>

<style lang="scss" scoped></style>

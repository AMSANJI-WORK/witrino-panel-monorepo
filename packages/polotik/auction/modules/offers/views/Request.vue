<template>
  <v-sheet class="transparent">
    <Requset />
  </v-sheet>
</template>

<script>
import Requset from "@packages/polotik/auction/modules/offers/components/Requset/index.vue";
import { GET_ONE_AUCTION_ASYNC } from "@packages/polotik/auction/store/get/types";
import { mapActions } from "vuex";
export default {
  components: {
    Requset,
  },
  computed: {},
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

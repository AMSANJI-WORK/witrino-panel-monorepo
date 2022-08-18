<template>
  <v-sheet class="transparent">
    <Requset />
    <div class="d-flex pa-2 mt-2">
      <v-spacer></v-spacer>
      <v-pagination
        v-model="pagination.page"
        :length="pagination.lastPage"
        :total-visible="6"
      ></v-pagination>
      <v-spacer></v-spacer>
      <div class="my-auto grey--text font-weight-thin">
        تعداد : {{ pagination.recordCount }}
      </div>
    </div>
  </v-sheet>
</template>

<script>
import Requset from "@packages/polotik/Auction/Components/Requset/index.vue";
import { GET_AN_AUCTION_ASYNC } from "@packages/polotik/Auction/Store/get/types";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    Requset,
  },
  computed: {
    ...mapGetters("guilds/auction/request", ["pagination"]),
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

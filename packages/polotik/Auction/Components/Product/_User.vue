<template>
  <v-sheet class="transparent">
    <v-slide-x-transition>
      <PageListSkeletonMenu v-show="skeletonLoading.menu" />
    </v-slide-x-transition>
    <v-card elevation="0" v-show="!skeletonLoading.menu">
      <v-slide-x-transition :group="true">
        <Product
          v-for="auction in auctionListUser"
          :data-source="auction"
          :key="auction.id"
          :current-user-id="currentUserId"
        />
      </v-slide-x-transition>

      <div class="d-flex pa-2 mt-2">
        <v-spacer></v-spacer>
        <v-pagination
          v-model="paginationSelfItem.page"
          :length="paginationSelfItem.lastPage"
          :total-visible="6"
        ></v-pagination>
        <v-spacer></v-spacer>
        <div class="my-auto grey--text font-weight-thin">
          تعداد (کل) : {{ paginationSelfItem.recordCount }}
        </div>
      </div>
    </v-card>
  </v-sheet>
</template>

<script>
import { mapGetters } from "vuex";
import PageListSkeletonMenu from "@polotik/modules/loading/components/PageListSkeletonMenu.vue";
import auctionLoadingMixin from "@packages/polotik/auction/mixins/loading";
import Cookies from "js-cookie";
import Product from "./index.vue";

export default {
  components: { Product, PageListSkeletonMenu },
  mixins: [auctionLoadingMixin],
  watch: {
    "paginationSelfItem.page": function () {
      this.$emit("changePage");
    },
  },
  computed: {
    ...mapGetters({
      paginationSelfItem: "guilds/auction/pagination/paginationSelfItem",
      auctionListUser: "guilds/auction/auctionList",
    }),
    currentUserId() {
      return Number(Cookies.get("user-id"));
    },
  },
};
</script>

<style lang="scss" scoped></style>

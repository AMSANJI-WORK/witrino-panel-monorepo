<template>
  <v-sheet class="transparent">
    <v-slide-x-transition>
      <PageListSkeletonMenu v-show="skeletonLoading.menu" />
    </v-slide-x-transition>
    <v-card elevation="0" v-show="!skeletonLoading.menu">
      <v-slide-x-transition :group="true">
        <Product
          v-for="auction in auctionList"
          :key="auction.id"
          :data-source="auction"
          :current-user-id="currentUserId"
        />
      </v-slide-x-transition>
      <div class="d-flex pa-2 mt-2">
        <v-spacer></v-spacer>
        <v-pagination
          v-model="pagination.page"
          :length="pagination.lastPage"
          :total-visible="6"
        ></v-pagination>
        <v-spacer></v-spacer>
        <div class="my-auto grey--text font-weight-thin">
          تعداد (کل) : {{ pagination.recordCount }}
        </div>
      </div>
    </v-card>
  </v-sheet>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import auctionLoadingMixin from "@packages/polotik/auction/mixins/loading";
import PageListSkeletonMenu from "@commen/loading/modules/skeleton/components/PageList/SkeletonMenu.vue";
import Cookies from "js-cookie";
import Product from "./index.vue";

export default {
  components: { Product, PageListSkeletonMenu },
  mixins: [auctionLoadingMixin],
  watch: {
    "pagination.page": function (newValue) {
      this.$emit("changePage");
    },
  },
  computed: {
    ...mapGetters({
      pagination: "guilds/auction/pagination/paginationSelfOffered",
      auctionList: "guilds/auction/auctionList",
    }),
    ...mapMutations({ changePage: "CHANGE_PAGINATION_PAGE" }),
    currentUserId() {
      return Number(Cookies.get("user-id"));
    },
  },
};
</script>

<style lang="scss" scoped></style>

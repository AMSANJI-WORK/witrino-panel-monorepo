<template>
  <v-sheet class="transparent">
    <v-slide-x-transition>
      <PageListSkeletonMenu v-show="skeletonLoading.menu" />
    </v-slide-x-transition>
    <v-card elevation="0" v-show="!skeletonLoading.menu">
      <v-slide-x-transition :group="true">
        <Product
          v-for="tender in tenderList"
          :key="tender.id"
          :data-source="tender"
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
import tenderLoadingMixin from "@packages/polotik/tender/mixins/loading";


import Cookies from "js-cookie";
import Product from "./index.vue";
import PageListSkeletonMenu from "@commen/loading/modules/skeleton/components/PageList/SkeletonMenu.vue";

export default {
  components: { Product, PageListSkeletonMenu },
  mixins: [tenderLoadingMixin],
  watch: {
    "pagination.page": function (newValue) {
      this.$emit("changePage");
    },
  },
  computed: {
    ...mapGetters("guilds/tender", {
      pagination: "pagination/pagination",
      tenderList: "tenderList",
    }),
    ...mapMutations({ changePage: "CHANGE_PAGINATION_PAGE" }),
    currentUserId() {
      return Number(Cookies.get("user-id"));
    },
  },
};
</script>

<style lang="scss" scoped></style>

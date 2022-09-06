<template>
  <v-sheet class="transparent">
    <v-slide-x-transition>
      <PageListSkeletonMenu v-show="skeletonLoading.menu" />
    </v-slide-x-transition>
    <v-card elevation="0" v-show="!skeletonLoading.menu">
      <v-slide-x-transition :group="true">
        <Product
          v-for="inquiry in inquiryListUser"
          :data-source="inquiry"
          :key="inquiry.id"
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
import { mapGetters } from "vuex";
import inquiryLoadingMixin from "@packages/polotik/inquiry/mixins/loading";
import Cookies from "js-cookie";
import Product from "./index.vue";
import PageListSkeletonMenu from "@polotik/modules/loading/components/PageListSkeletonMenu.vue";

export default {
  components: { Product, PageListSkeletonMenu },
  mixins: [inquiryLoadingMixin],
  watch: {
    "pagination.page": function () {
      this.$emit("changePage");
    },
  },
  computed: {
    ...mapGetters("guilds/inquiry", {
      pagination: "pagination/paginationSelfItem",
      inquiryListUser: "inquiryList",
    }),
    currentUserId() {
      return Number(Cookies.get("user-id"));
    },
  },
};
</script>

<style lang="scss" scoped></style>

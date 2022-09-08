<template>
  <v-sheet class="transparent">
    <v-slide-x-transition>
      <PageListSkeletonMenu v-show="skeletonLoading.menu" />
    </v-slide-x-transition>
    <v-card elevation="0" v-show="!skeletonLoading.menu">
      <v-slide-x-transition :group="true">
        <Product
          v-for="inquiry in inquiryList"
          :key="inquiry.id"
          :data-source="inquiry"
          :date-end="inquiry.end"
          :date-start="inquiry.start"
          
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
import PageListSkeletonMenu from "@commen/loading/modules/skeleton/components/PageList/SkeletonMenu.vue";
import Product from "@commen/card/components/polotik/Request.vue";

export default {
  components: {
    Product,
    PageListSkeletonMenu,
  },
  mixins: [inquiryLoadingMixin],
  watch: {
    "pagination.page": function () {
      this.$emit("changePage");
    },
  },
  computed: {
    ...mapGetters("guilds/inquiry", {
      pagination: "pagination/pagination",
      inquiryList: "inquiryList",
    }),
    currentUserId() {
      return Number(Cookies.get("user-id"));
    },
  },
};
</script>

<style lang="scss" scoped></style>

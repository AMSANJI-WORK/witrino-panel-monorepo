<template>
  <v-sheet class="transparent">
    <v-slide-x-transition>
      <PageListSkeletonMenu v-show="skletonLoding.menu" />
    </v-slide-x-transition>
    <v-card elevation="0" v-show="!skletonLoding.menu">
      <v-slide-x-transition :group="true">
        <Product
          v-for="barter in barterList"
          :key="barter.id"
          :data-source="barter"
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
import FormMixin from "@polotik/mixins/base/form";
import PageListSkeletonMenu from "@polotik/modules/loading/components/PageListSkeletonMenu.vue";
import Cookies from "js-cookie";
import Product from "./index.vue";

export default {
  components: { Product, PageListSkeletonMenu },
  mixins: [FormMixin],
  watch: {
    "pagination.page": function (newValue) {
      this.$emit("changePage");
    },
  },
  computed: {
    ...mapGetters({
      pagination: "pagination/pagination",
      skletonLoding: "loading/skletonLoding",
      barterList: "guilds/barter/barterList",
    }),
    ...mapMutations({ changePage: "CHANGE_PAGINATION_PAGE" }),
    currentUserId() {
      return Number(Cookies.get("user-id"));
    },
  },
};
</script>

<style lang="scss" scoped></style>

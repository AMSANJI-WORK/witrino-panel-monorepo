<template>
  <v-card elevation="0" :loading="fromLoading">
    <v-slide-x-transition :group="true">
      <product
        v-for="tender in allTenders"
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
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import FormMixin from "@polotik/mixins/base/form";
import Cookies from "js-cookie";
import Product from "./index.vue";

export default {
  components: { Product },
  mixins: [FormMixin],
  watch: {
    "pagination.page": function (newValue) {
      this.$emit("changePage");
    },
  },
  computed: {
    ...mapGetters({
      pagination: "pagination/pagination",
      allTenders: "guilds/tender/allTenders",
    }),
    ...mapMutations({ changePage: "CHANGE_PAGINATION_PAGE" }),
    currentUserId() {
      return Number(Cookies.get("user-id"));
    },
  },
};
</script>

<style lang="scss" scoped></style>

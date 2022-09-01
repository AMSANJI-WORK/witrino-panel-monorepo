<template>
  <v-card elevation="0" :loading="fromLoading">
    <product
      v-for="inquiry in allInquiries"
      :key="inquiry.id"
      :data-source="inquiry"
      :current-user-id="currentUserId"
    />
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
import { mapGetters } from "vuex";
import FormMixin from "@polotik/mixins/base/form";
import Cookies from "js-cookie";
import Product from "./index.vue";
// import ProductLoding from "@polotik/components/Reusable/Product/Loding.vue";
export default {
  components: {
    Product,
  },
  mixins: [FormMixin],
  watch: {
    "pagination.page": function () {
      this.$emit("changePage");
    },
  },
  computed: {
    ...mapGetters({
      pagination: "pagination/pagination",
      allInquiries: "guilds/inquiry/allInquiries",
    }),
    currentUserId() {
      return Number(Cookies.get("user-id"));
    },
  },
};
</script>

<style lang="scss" scoped></style>

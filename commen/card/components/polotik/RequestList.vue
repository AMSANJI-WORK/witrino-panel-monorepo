<template>
  <v-sheet class="transparent">
    <v-slide-x-transition>
      <PageListSkeletonMenu v-show="skeletonLoading.menu" />
    </v-slide-x-transition>
    <v-card elevation="0" v-show="!skeletonLoading.menu">
      <v-slide-x-transition :group="true">
        <Product
          v-for="request in requestList"
          :key="request.id"
          :data-source="request"
          :date-end="dateEnd(request)"
          :date-start="dateStart(request)"
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
import PageListSkeletonMenu from "@commen/loading/modules/skeleton/components/PageList/SkeletonMenu.vue";
import Product from "@commen/card/components/polotik/Request.vue";

export default {
  components: { Product, PageListSkeletonMenu },
  props: {
    paginationType: {
      type: String,
      default: "pagination",
    },
  },
  watch: {
    "pagination.page": function (newValue) {
      this.$emit("changePage");
    },
  },
  computed: {
    skeletonLoading() {
      return this.$store.getters[
        `guilds${this.acitveService}/skeletonLoading/skeletonLoading`
      ];
    },
    acitveService() {
      return this.$route.matched[1].path;
    },
    requestList() {
      return this.$store.getters[
        `guilds${this.acitveService}${this.acitveService}List`
      ];
    },
    pagination() {
      return this.$store.getters[
        `guilds${this.acitveService}/pagination/${this.paginationType}`
      ];
    },
  },
  methods: {
    dateEnd(request) {
      return request.end ?? request.start;
    },
    dateStart(request) {
      return !request.end
        ? request.data.conditions.docs.collectionDocsTime.start
        : request.start;
    },
  },
};
</script>

<style lang="scss" scoped></style>

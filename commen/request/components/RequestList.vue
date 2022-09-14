<template>
  <v-sheet class="transparent">
    <v-slide-x-transition>
      <PageListSkeletonMenu v-show="skeletonLoading.menu" />
    </v-slide-x-transition>
    <v-card elevation="0" v-show="!skeletonLoading.menu" class="pb-5">
      <v-slide-x-transition :group="true">
        <Product
          v-for="request in requestList"
          :key="request.id"
          :data-source="request"
          :date-end="dateEnd(request)"
          :date-start="dateStart(request)"
        />
      </v-slide-x-transition>
      <v-card
        class="grey lighten-1 ma-3 rounded-lg"
        v-show="requestList.length == 0"
      >
        <v-card-text>
          <v-card-title class="font-weight-bold white--text">
            <v-spacer></v-spacer>
            <slot name="no-data" />
            <span v-if="!$slots['no-data']"> هیچ آگهی یافت نشد </span>
            <v-spacer></v-spacer>
          </v-card-title>
        </v-card-text>
      </v-card>
      <v-sheet
        class="d-flex pa-2 transparent"
        v-if="pagination.recordCount > 5"
      >
        <v-spacer></v-spacer>
        <v-pagination
          v-model="pagination.page"
          :length="pagination.lastPage"
          @input="() => $emit('changePage')"
          :total-visible="6"
        ></v-pagination>
        <v-spacer></v-spacer>
        <v-sheet class="my-auto grey--text font-weight-thin transparent">
          تعداد (کل) : {{ pagination.recordCount }}
        </v-sheet>
      </v-sheet>
    </v-card>
  </v-sheet>
</template>

<script>
import Product from "./One.vue";
import PageListSkeletonMenu from "@commen/loading/modules/skeleton/components/PageList/SkeletonMenu.vue";
import CommenMixin from "../mixins/commen";

export default {
  components: { Product, PageListSkeletonMenu },
  mixins: [CommenMixin],
  props: {
    paginationType: {
      type: String,
      default: "pagination",
    },
  },
  computed: {
    skeletonLoading() {
      return this.$store.getters[
        `guilds/${this.activeService}/skeletonLoading/skeletonLoading`
      ];
    },
    requestList() {
      return this.$store.getters[
        `guilds/${this.activeService}/${this.activeService}List`
      ];
    },
    pagination() {
      return this.$store.getters[
        `guilds/${this.activeService}/${this.paginationType}/pagination`
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

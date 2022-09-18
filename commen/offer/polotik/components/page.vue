<template>
  <v-card class="rounded-lg mx-2">
    <v-card-subtitle
      class="d-flex grey lighten-2 black--text justify-space-between align-center"
    >
      {{ dataSource.title }}
      <v-btn color="primary" small @click="viewTheAd">مشاهده آگهی</v-btn>
    </v-card-subtitle>
    <v-card-text>
      <RequestInfo :date-end="dateEnd" :date-start="dateStart" />
      <RequestOfferList />
    </v-card-text>
  </v-card>
</template>

<script>
import RequestInfo from "./ProductInfo.vue";
import RequestOfferList from "./List.vue";

export default {
  components: {
    RequestInfo,
    RequestOfferList,
  },
  computed: {
    activeService() {
      return this.$route.matched[0].path.slice(1);
    },
    dataSource() {
      return this.$store.getters[`${this.activeService}/${this.activeService}`];
    },
    dateEnd() {
      return this.dataSource.end ?? this.dataSource.start;
    },
    dateStart() {
      return !this.dataSource.end
        ? this.dataSource.data?.conditions?.docs?.collectionDocsTime?.start
        : this.dataSource.start;
    },
  },
  methods: {
    viewTheAd() {
      this.$router.push(`preview`);
    },
  },
};
</script>

<style lang="scss" scoped></style>

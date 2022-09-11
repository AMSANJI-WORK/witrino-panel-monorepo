<template>
  <v-card class="rounded-lg mx-2">
    <v-card-subtitle class="grey lighten-2 black--text">
      {{ dataSource.title }}
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
      return this.$route.matched[1].path.slice(1);
    },
    dataSource() {
      return this.$store.getters[
        `guilds/${this.activeService}/${this.activeService}`
      ];
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
};
</script>

<style lang="scss" scoped></style>

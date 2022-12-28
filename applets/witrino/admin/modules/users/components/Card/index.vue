<template>
  <v-sheet class="mx-2 rounded-lg pb-7">
    <CardHeader />
    <section-divider cardTitleClass="pa-0" bind-class="mb-2 mx-7" />
    <CardDetail />
  </v-sheet>
</template>

<script>
import SectionDivider from "@applets/commen/section-divider/components/SectionDivider.vue";
import CardDetail from "./Detail.vue";
import CardHeader from "./Header.vue";
export default {
  components: {
    CardDetail,
    CardHeader,
    SectionDivider,
  },
  computed: {
    userId() {
      return this.$route.params.id;
    },
  },
};
</script>

<style lang="scss" scoped></style>

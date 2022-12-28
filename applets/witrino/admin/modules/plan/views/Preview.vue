<template>
  <v-sheet class="transparent mx-2">
    <SectionDivider
      title-class="text-subtitle-2"
      bind-class="mb-5 mt-3"
      title="جزئیات اطلاعات پلن"
      cardTitleClass="px-0"
    />
    <!-- <Card /> -->
  </v-sheet>
</template>

<script>
// import Card from "../components/Card/index.vue";
import SectionDivider from "@applets/commen/section-divider/components/SectionDivider.vue";
export default {
  components: {
    SectionDivider,
    // Card,
  },
  created() {},
};
</script>

<style lang="scss" scoped></style>

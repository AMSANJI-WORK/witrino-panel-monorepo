<template>
  <v-sheet class="transparent mx-2">
    <section-divider
      title-class="text-subtitle-2"
      bind-class="mb-5 mt-3"
      title="جزئیات اطلاعات پلن"
      cardTitleClass="px-0"
    >
    </section-divider>
    <!-- <Card /> -->
  </v-sheet>
</template>

<script>
// import Card from "../components/Card/index.vue";
import SectionDivider from "@shared/components/Reusable/SectionDivider.vue";
export default {
  components: {
    SectionDivider,
    // Card,
  },
  created() {},
};
</script>

<style lang="scss" scoped></style>

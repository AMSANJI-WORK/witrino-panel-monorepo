<template>
  <v-sheet class="rounded-lg transparent mx-2">
    <SectionDivider
      card-title-class="px-0 pt-0"
      title-class="text-subtitle-2"
      bind-class="my-5"
      title="بازرس"
    >
    </SectionDivider>
    <DetailCard />
    <DetailTabs />
  </v-sheet>
</template>

<script>
import DetailTabs from "@applets/edtehadieh/src/modules/Inspector/components/Detail/Tabs.vue";
import DetailCard from "@applets/edtehadieh/src/modules/Inspector/components/Detail/Card.vue";
import SectionDivider from "@commen/section-divider/components/SectionDivider.vue";
export default {
  components: {
    DetailTabs,
    DetailCard,
    SectionDivider,
  },
};
</script>

<style lang="scss" scoped></style>

<template>
  <v-sheet class="transparent mx-2">
    <section-divider
      bind-class="my-5"
      title-class="font-weight-bold text-h6"
      card-title-class="px-0"
      title="بایگانی"
    />
    <Tabs />
  </v-sheet>
</template>

<script>
import Tabs from "@applets/witrino/syndicate/modules/archive/components/Tabs.vue";
import SectionDivider from "@applets/commen/section-divider/components/SectionDivider.vue";
export default {
  components: {
    Tabs,
    SectionDivider,
  },
};
</script>

<style lang="scss" scoped></style>

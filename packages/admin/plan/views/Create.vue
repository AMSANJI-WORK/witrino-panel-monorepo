<template>
  <Modify>
    <template #title>
      <SectionDivider
        bind-class="my-5"
        title-class="font-weight-bold text-h6"
        card-title-class="px-0"
        title="افزودن پلن"
      />
    </template>
  </Modify>
</template>

<script>
import Modify from "../components/Modify.vue";
import SectionDivider from "@commen/section-divider/components/SectionDivider.vue";

export default {
  beforeRouteLeave(to, from, next) {
    this.$store.commit("shared/stepper/RESET_STEP");
    next();
  },
  components: {
    Modify,
    SectionDivider,
  },
};
</script>

<style lang="scss" scoped></style>

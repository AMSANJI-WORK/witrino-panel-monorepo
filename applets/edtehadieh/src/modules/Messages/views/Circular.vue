<template>
  <v-sheet class="transparent mx-2">
    <section-divider
      title-class="text-subtitle-2"
      bind-class="my-5"
      title="ابلاغ بخشنامه"
    >
    </section-divider>
    <CircularForm />
  </v-sheet>
</template>

<script>
import SectionDivider from "@commen/section-divider/components/SectionDivider.vue";
import CircularForm from "@applets/edtehadieh/src/modules/Messages/components/Circular/Form.vue";
export default {
  components: { SectionDivider, CircularForm },
};
</script>

<style lang="scss" scope SectionDividerd></style>

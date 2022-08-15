<template>
  <v-sheet class="transparent mx-2">
    <section-divider
      title-class="text-subtitle-2"
      bind-class="my-5"
      title="ارسال پیام"
    >
    </section-divider>
    <SendForm />
  </v-sheet>
</template>

<script>
import SectionDivider from "@shared/components/Reusable/SectionDivider.vue";
import SendForm from "@edtehadieh/modules/Messages/components/Send/Form.vue";

export default {
  components: { SectionDivider, SendForm },
};
</script>

<style lang="scss" scoped></style>

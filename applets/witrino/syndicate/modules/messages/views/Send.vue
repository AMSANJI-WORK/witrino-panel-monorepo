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
import SectionDivider from "@applets/commen/section-divider/components/SectionDivider.vue";
import SendForm from "@applets/witrino/syndicate/modules/messages/components/Send/Form.vue";

export default {
  components: { SectionDivider, SendForm },
};
</script>

<style lang="scss" scoped></style>

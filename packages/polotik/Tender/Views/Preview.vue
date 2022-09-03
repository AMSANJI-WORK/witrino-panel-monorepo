<template>
  <v-sheet class="transparent">
    <v-slide-x-transition>
      <PagePreviewTypeSecond v-show="skletonLoding.one" />
    </v-slide-x-transition>
    <v-slide-x-transition>
      <v-sheet v-show="!skletonLoding.one" class="transparent">
        <PreviewForm />
      </v-sheet>
    </v-slide-x-transition>
  </v-sheet>
</template>

<script>
import PreviewForm from "@packages/polotik/tender/components/Preview.vue";
import ToggleVisibleMixin from "@polotik/modules/loading/mixins/visible-type";

import PagePreviewTypeSecond from "@polotik/modules/loading/components/PagePreviewTypeSecond.vue";

export default {
  mixins: [ToggleVisibleMixin],
  components: {
    PreviewForm,
    PagePreviewTypeSecond,
  },
  created() {
    this.$store.commit("CHANGE_SERVICE", "tender");
  },
};
</script>

<style lang="scss" scoped></style>

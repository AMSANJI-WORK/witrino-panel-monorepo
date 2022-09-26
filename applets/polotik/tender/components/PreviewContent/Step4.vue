<template>
  <v-col cols="12" class="d-flex flex-wrap pa-0">
    <v-col cols="12" class="py-0">
      <div class="d-flex flex-wrap" style="width: 100%">
        <v-image-item-stepper
          v-for="(image, index) in item.data.gallery"
          :key="index"
          :data-source="image"
          :data-index="index"
        />
      </div>
    </v-col>
    <v-col cols="12" class="py-0 mt-10">
      <VLabel label="توضیحات" :label-value="item.description" />
    </v-col>
    <v-col cols="12">
      <div
        v-if="!routeIsPreview"
        class="d-flex flex-row-reverse"
        style="width: 100%"
      >
        <v-btn
          class="white--text font-weight-bold justify-end"
          x-small
          rounded
          color="yellow darken-4"
          @click="changeStep(4)"
          >ویرایش</v-btn
        >
      </div>
      <v-divider class="my-4"></v-divider>
    </v-col>
  </v-col>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import VLabel from "@commen/label/components/Label.vue";
import VImageItemStepper from "@polotik/components/Reusable/VImageItemStepper.vue";
export default {
  components: { VLabel, VImageItemStepper },
  watch: {
    gallery(newValue) {},
  },
  computed: {
    ...mapGetters("tender", ["item"]),
    gallery() {
      return this.item.data.gallery;
    },
    routeIsPreview() {
      return this.$route.path.includes("preview");
    },
  },
  methods: {
    ...mapMutations("tender", { changeStep: "CHANGE_STEP" }),
  },
};
</script>

<style lang="scss" scoped></style>

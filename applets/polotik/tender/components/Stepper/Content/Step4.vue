<template>
  <v-form
    @submit.prevent="submit"
    ref="docsAndDescription"
    class="my-4 d-flex flex-wrap"
  >
    <v-col cols="12">
      <v-textarea
        outlined
        :rules="[rules.required]"
        label="توضیحات"
        :loading="formLoading"
        v-model="formData.description"
      ></v-textarea>
    </v-col>
    <v-col cols="12" class="d-flex flex-wrap align-center mb-5 pt-0">
      <UploadImage
        @dalete-image="deleteImage"
        @upload-reolved="updateGallery"
        :data-source="formData.gallery"
        active-service="tender"
      />
    </v-col>

    <v-field-space style-class="my-sm-4 d-md-block d-none" />
    <v-stepper-level-btn
      :next="5"
      :back="3"
      :form-refrence="$refs.docsAndDescription"
      @formValidated="submit"
    />
  </v-form>
</template>

<script>
import fromRules from "@commen/form/mixins/rules";
import tenderLoadingMixin from "@applets/polotik/tender/mixins/loading";
import StepperMixin from "@applets/polotik/tender/mixins/stepper";
import VFieldSpace from "@polotik/components/Reusable/VFieldSpace.vue";
import UploadImage from "@commen/upload/polotik/components/UploadImage.vue";
import VStepperLevelBtn from "@polotik/components/Reusable/VStepperLevelBtn.vue";
export default {
  components: {
    VFieldSpace,
    UploadImage,
    VStepperLevelBtn,
  },
  mixins: [tenderLoadingMixin, fromRules, StepperMixin],
  data: () => ({
    formData: {
      gallery: [],
      description: null,
    },
  }),
  methods: {
    setData() {
      const {
        data: { gallery },
        description,
      } = this.dataSource;
      this.formData.gallery = gallery;
      this.formData.description = description;
    },
    updateGallery(e) {
      this.formData.gallery = [...this.formData.gallery, ...e];
    },
    deleteImage(imageIdx) {
      this.formData.gallery.splice(imageIdx, 1);
    },
    submit() {
      this.$emit("stepFourComplete", this.formData);
    },
  },
};
</script>

<style lang="scss" scoped>
.button-upload {
  transition: 0.3s all;
  border: gray dashed 2px;
}
.button-upload:hover {
  border: #187968 dashed 2px;
}
.button-upload-icon:hover {
  color: #187968;
  cursor: pointer;
}
.button-upload-icon {
  transition: 0.3s all;
}
</style>

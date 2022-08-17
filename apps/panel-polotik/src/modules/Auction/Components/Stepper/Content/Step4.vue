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
        :loading="fromLoading"
        v-model="formData.description"
      ></v-textarea>
    </v-col>
    <v-col cols="12" class="d-flex flex-wrap align-center mb-5 pt-0">
      <upload-image @uploadedImagesSuccess="setUploadedImageInGallery" />
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
import FormMixin from "@polotik/mixins/base/form";
import StepperMixin from "@polotik/modules/Auction/Mixins/stepper";
import VFieldSpace from "@polotik/components/Reusable/VFieldSpace.vue";
import VStepperLevelBtn from "@polotik/components/Reusable/VStepperLevelBtn.vue";
import UploadImage from "@polotik/modules/Upload/components/UploadImage.vue";
export default {
  components: { VFieldSpace, VStepperLevelBtn, UploadImage },
  mixins: [FormMixin, StepperMixin],
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
      this.formData.gallery = [...gallery];
      this.formData.description = description;
    },
    setUploadedImageInGallery(uplaodImages) {
      this.formData.gallery = uplaodImages;
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

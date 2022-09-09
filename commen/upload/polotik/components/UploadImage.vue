<template>
  <v-card
    elevation="0"
    class="pa-0 ma-0 d-flex flex-wrap align-center mb-5 pt-0"
  >
    <input
      ref="uploader"
      accept="image/png, image/jpeg, image/bmp"
      class="d-none"
      multiple
      truncate-length="10"
      type="file"
      @change="onFileChanged"
    />
    <v-image-item
      v-for="(image, index) in uploadedImages"
      :key="index"
      :data-source="image"
      :data-index="index"
      @deleteImageFromUpload="deleteImage(index)"
    />
    <v-tooltip left>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="v-btn--outlined button-upload rounded-lg mt-5"
          height="110"
          width="110"
          v-bind="attrs"
          v-on="on"
          :loading="loading"
          :ripple="false"
          @click="handleFileImport"
        >
          <v-badge left overlap color="p-red-primary" icon="mdi-plus">
            <v-icon class="button-upload-icon" large>mdi-image-outline</v-icon>
          </v-badge>
        </v-btn>
      </template>
      <span class="font-weight-medium text-small white--text"
        >بارگذاری تصویر</span
      >
    </v-tooltip>
  </v-card>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";

import VImageItem from "@packages/polotik/upload/components/VImageItem.vue";
import { UPLOAD_FILE_ASYNC } from "@packages/polotik/upload/store/types";
export default {
  components: {
    VImageItem,
  },
  data() {
    return {
      isSelecting: false,
      selectedFile: null,
      images: [],
      host: import.meta.env.VITE_BASE_URL,
    };
  },
  computed: {
    ...mapState({
      loading: (state) => state.upload.loading,
    }),
    ...mapGetters({
      uploadedImages: "upload/successUploadedImages",
    }),
  },
  methods: {
    ...mapMutations({
      deleteImageGallery: "upload/DELETE_IMAGE",
    }),
    ...mapActions({
      uploadImageAsync: `upload/${UPLOAD_FILE_ASYNC}`,
    }),
    handleFileImport() {
      this.isSelecting = true;
      window.addEventListener(
        "focus",
        () => {
          this.isSelecting = false;
        },
        { once: true }
      );
      this.$refs.uploader.click();
    },
    async uploadFileAsync() {
      try {
        await this.uploadImageAsync(this.images);
        this.$emit("uploadedImagesSuccess", this.uploadedImages);
      } catch (error) {
        console.error("upload file reject");
      }
    },
    onFileChanged(e) {
      this.selectedFile = e.target.files;
      this.images = [...this.selectedFile, ...this.images];
      this.uploadFileAsync();
    },
    deleteImageGalleryActiveRoute(targetImageId) {
      let activeService = this.$route.matched[1].path;
      this.$store.commit(
        `guilds${activeService}/DELETE_IMAGE_FROM_GALLERY`,
        targetImageId
      );
    },
    deleteImage(indexImage) {
      this.images.splice(indexImage, 1);
      this.deleteImageGallery(indexImage);
      this.deleteImageGalleryActiveRoute(indexImage);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@commen/assets/styles/scss/variable.scss";
.button-upload {
  transition: 0.3s all;
  border: gray dashed 2px;
}
.button-upload:hover {
  border: $p-green-primary dashed 2px;
}
.button-upload-icon:hover {
  color: $p-green-primary;
  cursor: pointer;
}
.button-upload-icon {
  transition: 0.3s all;
}
</style>

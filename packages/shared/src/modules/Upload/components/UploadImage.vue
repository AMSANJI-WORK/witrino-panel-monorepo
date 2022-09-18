<template>
  <v-card
    elevation="0"
    class="pa-0 ma-0 d-flex flex-wrap align-center mb-5 pt-0 transparent"
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
      <!-- :loading="loading" -->
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="v-btn--outlined button-upload rounded-lg mt-5"
          height="110"
          width="110"
          v-bind="attrs"
          v-on="on"
          :ripple="false"
          @click="handleFileImport"
        >
          <v-badge left overlap color="red" icon="mdi-plus">
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
// import { mapActions, mapGetters, mapMutations, mapState } from "vuex";

import VImageItem from "./VImageItem.vue";
// import { UPLOAD_FILE_ASYNC } from "@shared/store/modules/upload/types";
export default {
  components: {
    VImageItem,
  },
  data() {
    return {
      isSelecting: false,
      selectedFile: null,
      images: [],
      uploadedImages: [],
      //   host: import.meta.env.VITE_BASE_URL,
    };
  },
  computed: {
    pathRoute() {
      return this.$route.path;
    },
  },
  methods: {
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
    uploadFileAsync() {
      return new Promise((resolve, reject) => {
        this.uploadImageAsync(this.images)
          .then(() => {
            resolve("upload file resolve");
            this.$emit("uploadedImagesSuccess", this.uploadedImages);
          })
          .catch(() => {
            reject("upload file reject");
          });
      });
    },
    onFileChanged(e) {
      this.selectedFile = e.target.files;
      this.images = [...this.selectedFile, ...this.images];
    },
    deleteImage(indexImage) {
      this.images.splice(indexImage, 1);
    },
  },
};
</script>

<style lang="scss" scoped>
.theme--light.v-btn.v-btn--has-bg {
  background-color: #fff;
}
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

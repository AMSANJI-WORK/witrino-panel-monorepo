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
      :value="value"
      @input="updateValue"
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
import VImageItem from "@packages/polotik/upload/components/VImageItem.vue";
import { UPLOAD_FILE_ASYNC } from "@packages/polotik/upload/store/types";
export default {
  components: {
    VImageItem,
  },
  props: {
    value: {
      type: [null, Array],
      default: null,
    },
  },
  data() {
    return {
      isSelecting: false,
      selectedFile: null,
      host: import.meta.env.VITE_BASE_URL,
    };
  },
  computed: {
    loading() {
      return this.$store.getters[`guilds${this.activeService}/upload/loading`];
    },
    activeService() {
      return this.$route.matched[1].path;
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
    updateValue(e) {
      this.$store
        .dispatch(
          `guilds${this.activeService}/upload/${UPLOAD_FILE_ASYNC}`,
          e.target.files
        )
        .then((response) => this.$emit("upload-resolve", response))
        .catch((error) => console.log(error));
    },
    deleteImageGallery(targetImageId) {
      this.$store.commit(
        `guilds${this.activeService}/DELETE_IMAGE_FROM_GALLERY`,
        targetImageId
      );
    },
    deleteImage(indexImage) {
      this.deleteImageGallery(indexImage);
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

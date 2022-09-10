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
      @change="uploadSelectedImages"
    />
    <VImageItem
      v-for="(image, index) in dataSource"
      :key="index"
      :data-source="image"
      :data-index="index"
      @deleteImageFromUpload="(index) => $emit('dalete-image', index)"
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
import VImageItem from "./VImageItem.vue";
import { UPLOAD_FILE_ASYNC } from "../store/types";
export default {
  components: {
    VImageItem,
  },
  props: {
    dataSource: Array,
    activeService: String,
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
      return this.$store.getters[`${this.activeService}/upload/loading`];
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
    uploadSelectedImages(e) {
      this.$store
        .dispatch(
          `${this.activeService}/upload/${UPLOAD_FILE_ASYNC}`,
          e.target.files
        )
        .then((response) => this.$emit("upload-reolved", response))
        .catch((error) => console.log(error));
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

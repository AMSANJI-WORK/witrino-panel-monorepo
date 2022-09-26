<template>
  <v-badge color="" bottom offset-x="60" offset-y="60" left>
    <span slot="badge">
      <v-badge color="" left overlap>
        <input
          ref="uploader1"
          accept="image/png, image/jpeg, image/bmp"
          class="d-none"
          type="file"
          @change="onFileChanged"
        />
        <v-tooltip right>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              fab
              elevation="3"
              small
              v-bind="attrs"
              v-on="on"
              @click="handleFileImport"
              ><v-icon color="dark">mdi-camera-plus</v-icon></v-btn
            >
          </template>
          <span class="font-weight-medium text-caption white--text"
            >بارگذاری تصویر</span
          >
        </v-tooltip>
      </v-badge>
    </span>
    <v-avatar size="150" color="grey" class="ma-md-3 mx-auto rounded-circle">
      <img
        class="rounded-circle"
        :src="require('@commen/assets/image/png/image-default.png')"
        v-if="!image"
      />
      <img v-else class="rounded-circle" :src="getImage(image)" />
    </v-avatar>
  </v-badge>
</template>

<script>
import VLabel from "@commen/label/components/Label.vue";
export default {
  components: {
    VLabel,
  },
  data() {
    return {
      isSelecting: false,
      selectedFile: null,
      switch1: true,
      image: null,
    };
  },
  filters: {
    activeToFa(value) {
      if (value) return "فعال";
      return "غیرفعال";
    },
  },
  methods: {
    btnActiveColor(activeType) {
      if (activeType) return "green";
      return "red";
    },
    getImage(image) {
      return URL.createObjectURL(image);
    },
    handleFileImport() {
      this.isSelecting = true;
      // After obtaining the focus when closing the FilePicker, return the button state to normal
      window.addEventListener(
        "focus",
        () => {
          this.isSelecting = false;
        },
        { once: true }
      );
      // Trigger click on the FileInput
      this.$refs.uploader1.click();
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
      this.selectedFile = e.target.files[0];
      this.image = this.selectedFile;
      this.$toast.success("عکس شما با موفقیت ویرایش شد");
      //   this.uploadFileAsync();
    },
  },
};
</script>

<style lang="scss" scoped></style>

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
                        <v-icon class="button-upload-icon" large
                            >mdi-image-outline</v-icon
                        >
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
        // ...mapState({
        //   loading: (state) => state.upload.loading,
        // }),
        // ...mapGetters({
        //   uploadedImages: "upload/successUploadedImages",
        // }),
        pathRoute() {
            return this.$route.path;
        },
    },
    methods: {
        // ...mapMutations({
        //   deleteImageFromGallery: "upload/DELETE_IMAGE",
        //   deleteImageFromInquiryGallery: "guilds/inquiry/DELETE_IMAGE_FROM_GALLERY",
        //   deleteImageFromBarterGallery: "guilds/barter/DELETE_IMAGE_FROM_GALLERY",
        //   deleteImageFromSaleGallery: "guilds/sale/DELETE_IMAGE_FROM_GALLERY",
        //   deleteImageFromTenderGallery: "guilds/tender/DELETE_IMAGE_FROM_GALLERY",
        //   deleteImageFromAuctionGallery: "guilds/auction/DELETE_IMAGE_FROM_GALLERY",
        // }),
        // ...mapActions({
        //   uploadImageAsync: `upload/${UPLOAD_FILE_ASYNC}`,
        // }),
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
            this.$refs.uploader.click();
        },
        uploadFileAsync() {
            return new Promise((resolve, reject) => {
                this.uploadImageAsync(this.images)
                    .then(() => {
                        resolve("upload file resolve");
                        this.$emit(
                            "uploadedImagesSuccess",
                            this.uploadedImages
                        );
                    })
                    .catch(() => {
                        reject("upload file reject");
                    });
            });
        },
        onFileChanged(e) {
            this.selectedFile = e.target.files;
            this.images = [...this.selectedFile, ...this.images];
            //   this.uploadFileAsync();
        },
        // deleteImageFromGalleryEachRoute(targetImageId) {
        //   if (this.pathRoute.includes("sale")) {
        //     this.deleteImageFromSaleGallery(targetImageId);
        //   } else if (this.pathRoute.includes("auction")) {
        //     this.deleteImageFromAuctionGallery(targetImageId);
        //   } else if (this.pathRoute.includes("tender")) {
        //     this.deleteImageFromTenderGallery(targetImageId);
        //   } else if (this.pathRoute.includes("inquiry")) {
        //     this.deleteImageFromInquiryGallery(targetImageId);
        //   } else {
        //     this.deleteImageFromBarterGallery(targetImageId);
        //   }
        // },
        deleteImage(indexImage) {
            this.images.splice(indexImage, 1);
            //   this.deleteImageFromGallery(indexImage);
            //   this.deleteImageFromGalleryEachRoute(indexImage);
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

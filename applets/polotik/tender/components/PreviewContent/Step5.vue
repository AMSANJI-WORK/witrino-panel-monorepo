<template>
  <v-col cols="12" class="d-flex flex-row flex-wrap pa-0">
    <v-col cols="12" class="py-0" :class="hiddenClass">
      <div
        class="d-flex flex-wrap"
        v-if="isCurrentUser || !routeIsPreview"
        style="width: 100%"
      >
        <v-col cols="12" sm="6" class="py-0">
          <VLabel label="امکان ثبت اطلاعات" />
          <v-chip
            :color="chipColor('participation')"
            x-small
            class="white--text font-weight-medium"
            >{{ chipText("participation") }}</v-chip
          >
        </v-col>
        <div
          class="d-flex flex-wrap"
          v-if="item.data.tenderInfo.settings.participation"
          style="width: 100%"
        >
          <v-col cols="12" sm="6" class="py-0">
            <VLabel label="امکان درج قیمت پیشنهادی" />
            <v-chip
              :color="chipColor('offerPrice')"
              x-small
              class="white--text font-weight-medium"
              >{{ chipText("offerPrice") }}</v-chip
            >
          </v-col>
          <v-col cols="12" sm="6" class="py-0">
            <VLabel label="امکان پیوست فایل" />
            <v-chip
              :color="chipColor('uploadable')"
              x-small
              class="white--text font-weight-medium"
              >{{ chipText("uploadable") }}</v-chip
            >
          </v-col>
          <v-col cols="12" sm="6" class="py-0">
            <VLabel label="امکان ثبت نظر" />
            <v-chip
              :color="chipColor('commentable')"
              x-small
              class="white--text font-weight-medium"
              >{{ chipText("commentable") }}</v-chip
            >
          </v-col>
          <v-col cols="12" sm="6" class="py-0">
            <VLabel label="امکان ثبت نظر" />
            <v-chip
              :color="chipColor('commentable')"
              x-small
              class="white--text font-weight-medium"
              >{{ chipText("commentable") }}</v-chip
            >
          </v-col>
          <v-col cols="12" class="py-0">
            <VLabel
              label="توضیحات راهنمای تکمیل فرم"
              :label-value="item.data.tenderInfo.settings.description"
            />
          </v-col>
        </div>
      </div>
    </v-col>

    <v-col cols="12" :class="hiddenClass">
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
          @click="changeStep(5)"
          >ویرایش</v-btn
        >
      </div>
      <v-divider class="my-4"></v-divider>
    </v-col>
  </v-col>
</template>

<script>
import {  mapMutations, mapGetters  } from "vuex";
import VLabel from "@commen/label/components/Label.vue";
export default {
  components: { VLabel },
  computed: {
    ...mapGetters("tender",["item"]),
    routeIsPreview() {
      return this.$route.path.includes("preview");
    },
    hiddenClass() {
      return this.isCurrentUser || !this.routeIsPreview ? "" : "d-none";
    },
    isCurrentUser() {
      return this.currentUserId == this.item.data.tenderInfo.user.id;
    },
  },
  methods: {
    ...mapMutations("tender",{ changeStep: "CHANGE_STEP" }),
    chipColor(property) {
      return this.item.data.tenderInfo.settings[`${property}`]
        ? "success"
        : "red";
    },
    chipText(property) {
      return this.item.data.tenderInfo.settings[`${property}`]
        ? "دارد"
        : "ندارد";
    },
  },
};
</script>

<style lang="scss" scoped></style>

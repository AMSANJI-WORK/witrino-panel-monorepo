<template>
  <div class="d-flex flex-row flex-wrap" style="width: 100">
    <v-col cols="12" sm="6" class="py-0">
      <VLabel label="مهلت تهیه اسناد" />
      از
      {{ collectionDocsStartTimeToFa }}, تا
      {{ collectionDocsEndTimeToFa }}
    </v-col>
    <v-col cols="12" sm="6" class="py-0">
      <VLabel label="مهلت ارسال اسناد" :label-value="sendDocsDateToFa" />
    </v-col>
    <v-col cols="12" sm="6" class="py-0">
      <VLabel label="تاریخ برگزاری" :label-value="startAuctionDateToFa" />
    </v-col>
    <v-col cols="12" sm="6" class="py-0">
      <VLabel
        label="زمان (ساعت)"
        :label-value="item.data.auctionInfo.time"
      />
    </v-col>
    <v-col cols="12" class="py-0">
      <VLabel label="آدرس" :label-value="item.data.auctionInfo.address" />
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
          @click="changeStep(3)"
          >ویرایش</v-btn
        >
      </div>
      <v-divider class="my-4"></v-divider>
    </v-col>
  </div>
</template>

<script>
import moment from "moment-jalaali";
import { mapMutations, mapGetters } from "vuex";
import VLabel from "@applets/commen/label/components/Label.vue";
export default {
  components: { VLabel },
  computed: {
    ...mapGetters("auction", ["item"]),
    routeIsPreview() {
      return this.$route.path.includes("preview");
    },
    startAuctionDateToFa() {
      return moment(this.item.start).format("jYYYY/jMM/jDD");
    },
    sendDocsDateToFa() {
      return moment(this.item.data.conditions.docs.sendDocsDate).format(
        "jYYYY/jMM/jDD"
      );
    },
    collectionDocsStartTimeToFa() {
      return moment(
        this.item.data.conditions.docs.collectionDocsTime.start
      ).format("jYYYY/jMM/jDD");
    },
    collectionDocsEndTimeToFa() {
      return moment(
        this.item.data.conditions.docs.collectionDocsTime.end
      ).format("jYYYY/jMM/jDD");
    },
  },
  methods: {
    ...mapMutations("auction", { changeStep: "CHANGE_STEP" }),
  },
};
</script>

<style lang="scss" scoped></style>

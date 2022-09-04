<template>
  <div class="d-flex flex-row flex-wrap" style="width: 100">
    <v-col cols="12" sm="6" class="py-0">
      <v-label label="مهلت تهیه اسناد" />
      از
      {{ collectionDocsStartTimeToFa }}, تا
      {{ collectionDocsEndTimeToFa }}
    </v-col>
    <v-col cols="12" sm="6" class="py-0">
      <v-label label="مهلت ارسال اسناد" :label-value="sendDocsDateToFa" />
    </v-col>
    <v-col cols="12" sm="6" class="py-0">
      <v-label label="تاریخ برگزاری" :label-value="startAuctionDateToFa" />
    </v-col>
    <v-col cols="12" sm="6" class="py-0">
      <v-label
        label="زمان (ساعت)"
        :label-value="auction.data.auctionInfo.time"
      />
    </v-col>
    <v-col cols="12" class="py-0">
      <v-label label="آدرس" :label-value="auction.data.auctionInfo.address" />
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
import { createNamespacedHelpers } from "vuex";
const { mapMutations, mapGetters } = createNamespacedHelpers("guilds/auction");
import VLabel from "@commen/label/components/Label.vue";
export default {
  components: { VLabel },
  computed: {
    ...mapGetters(["auction"]),
    routeIsPreview() {
      return this.$route.path.includes("preview");
    },
    startAuctionDateToFa() {
      return moment(this.auction.start).format("jYYYY/jMM/jDD");
    },
    sendDocsDateToFa() {
      return moment(this.auction.data.conditions.docs.sendDocsDate).format(
        "jYYYY/jMM/jDD"
      );
    },
    collectionDocsStartTimeToFa() {
      return moment(
        this.auction.data.conditions.docs.collectionDocsTime.start
      ).format("jYYYY/jMM/jDD");
    },
    collectionDocsEndTimeToFa() {
      return moment(
        this.auction.data.conditions.docs.collectionDocsTime.end
      ).format("jYYYY/jMM/jDD");
    },
  },
  methods: {
    ...mapMutations({ changeStep: "CHANGE_STEP" }),
  },
};
</script>

<style lang="scss" scoped></style>

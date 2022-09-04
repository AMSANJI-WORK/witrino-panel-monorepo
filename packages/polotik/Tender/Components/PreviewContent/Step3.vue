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
      <v-label label="تاریخ برگزاری" :label-value="startTenderDateToFa" />
    </v-col>
    <v-col cols="12" sm="6" class="py-0">
      <v-label
        label="زمان (ساعت)"
        :label-value="tender.data.tenderInfo.time"
      />
    </v-col>
    <v-col cols="12" class="py-0">
      <v-label label="آدرس" :label-value="tender.data.tenderInfo.address" />
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
const { mapMutations, mapGetters } = createNamespacedHelpers("guilds/tender");
import VLabel from "@commen/label/components/Label.vue";
export default {
  components: { VLabel },
  computed: {
    ...mapGetters(["tender"]),
    routeIsPreview() {
      return this.$route.path.includes("preview");
    },
    startTenderDateToFa() {
      return moment(this.tender.start).format("jYYYY/jMM/jDD");
    },
    sendDocsDateToFa() {
      return moment(this.tender.data.conditions.docs.sendDocsDate).format(
        "jYYYY/jMM/jDD"
      );
    },
    collectionDocsStartTimeToFa() {
      return moment(
        this.tender.data.conditions.docs.collectionDocsTime.start
      ).format("jYYYY/jMM/jDD");
    },
    collectionDocsEndTimeToFa() {
      return moment(
        this.tender.data.conditions.docs.collectionDocsTime.end
      ).format("jYYYY/jMM/jDD");
    },
  },
  methods: {
    ...mapMutations({ changeStep: "CHANGE_STEP" }),
  },
};
</script>

<style lang="scss" scoped></style>

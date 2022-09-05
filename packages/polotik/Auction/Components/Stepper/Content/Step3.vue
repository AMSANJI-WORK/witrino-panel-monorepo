<template>
  <v-form
    @submit.prevent="submit"
    ref="calender"
    class="my-md-12 my-4 d-flex flex-wrap"
  >
    <v-col cols="12" sm="6">
      <v-text-field
        id="auction-collect-docs-time"
        readonly
        v-model="collectionDocsTime"
        label="مهلت تهیه اسناد"
        :loading="formLoading"
        append-icon="mdi-calendar"
        :rules="[rules.required]"
        dense
        outlined
      ></v-text-field>
      <date-picker
        range
        v-model="collectionDocsTime"
        format="jYYYY/jMM/jDD"
        element="auction-collect-docs-time"
        color="#187968"
        :min="minDate"
        auto-submit
      />
    </v-col>
    <v-col cols="12" sm="6">
      <v-text-field
        id="auction-send-docs-time"
        readonly
        v-model="sendDocsDate"
        label="مهلت ارسال اسناد"
        :loading="formLoading"
        append-icon="mdi-calendar"
        :rules="[rules.required]"
        dense
        outlined
      ></v-text-field>
      <date-picker
        v-model="sendDocsDate"
        format="jYYYY/jMM/jDD"
        element="auction-send-docs-time"
        color="#187968"
        :min="minSendDocsDate"
        auto-submit
      />
    </v-col>
    <v-col cols="12" sm="6">
      <v-text-field
        id="start-time"
        readonly
        label="تاریخ برگزاری"
        v-model="startAuctionDate"
        :loading="formLoading"
        append-icon="mdi-calendar"
        :rules="[rules.required]"
        dense
        outlined
      ></v-text-field>
      <date-picker
        v-model="startAuctionDate"
        format="jYYYY/jMM/jDD"
        element="start-time"
        color="#187968"
        :min="minStartAuctionDate"
        auto-submit
      />
    </v-col>

    <v-col cols="12" sm="6">
      <v-text-field
        id="timeStart"
        readonly
        label="زمان برگزاری (ساعت)"
        :loading="formLoading"
        v-model="formData.time"
        name="sendDate"
        append-icon="mdi-timer-outline"
        dense
        outlined
      ></v-text-field>
      <date-picker
        element="timeStart"
        v-model="formData.time"
        type="time"
        color="#187968"
        auto-submit
      />
    </v-col>
    <v-col cols="12">
      <v-textarea
        label="آدرس"
        name="auctionAddress"
        v-model="formData.auctionAddress"
        :loading="formLoading"
        dense
        outlined
      ></v-textarea>
    </v-col>
    <v-field-space styleClass="my-sm-4 d-md-block d-none" />
    <v-stepper-level-btn
      :next="4"
      :back="2"
      :form-refrence="$refs.calender"
      @formValidated="submit"
    />
  </v-form>
</template>

<script>
import moment from "moment-jalaali";
import auctionLoadingMixin from "@packages/polotik/auction/mixins/loading";
import UtilityMixin from "@shared/mixins/utility";
import StepperMixin from "@packages/polotik/auction/mixins/stepper";
import VFieldSpace from "@polotik/components/Reusable/VFieldSpace.vue";
import VStepperLevelBtn from "@polotik/components/Reusable/VStepperLevelBtn.vue";
export default {
  components: {
    VFieldSpace,
    VStepperLevelBtn,
  },
  mixins: [auctionLoadingMixin, StepperMixin, UtilityMixin],
  data: () => ({
    collectionDocsTime: [],
    startAuctionDate: "",
    sendDocsDate: "",
    formData: {
      collectionDocsTimeStart: null,
      collectionDocsTimeEnd: null,
      startAuctionDate: null,
      auctionAddress: null,
      sendDocsDate: null,
      time: null,
    },
  }),
  watch: {
    startAuctionDate(newVal) {
      this.formData.startAuctionDate = moment(newVal, "jYYYY/jMM/jDD").format(
        "YYYY-MM-DD"
      );
    },
    sendDocsDate(newVal) {
      this.formData.sendDocsDate = moment(newVal, "jYYYY/jMM/jDD").format(
        "YYYY-MM-DD"
      );
    },
    collectionDocsTime(newVal) {
      this.formData.collectionDocsTimeStart = moment(
        this.collectionDocsTime[0],
        "jYYYY/jMM/jDD"
      ).format("YYYY-MM-DD");
      this.formData.collectionDocsTimeEnd = moment(
        this.collectionDocsTime[1],
        "jYYYY/jMM/jDD"
      ).format("YYYY-MM-DD");
    },
  },
  computed: {
    startAuctionDateToFa() {
      return moment(this.formData.startAuctionDate).format("jYYYY/jMM/jDD");
    },
    minSendDocsDate() {
      return moment(this.formData.collectionDocsTimeEnd).format(
        "jYYYY/jMM/jDD"
      );
    },
    minStartAuctionDate() {
      return this.sendDocsDate;
    },
    sendDocsDateToFa() {
      return moment(this.formData.sendDocsDate).format("jYYYY/jMM/jDD");
    },
    collectionDocsStartTimeToFa() {
      return moment(this.formData.collectionDocsTimeStart).format(
        "jYYYY/jMM/jDD"
      );
    },
    collectionDocsEndTimeToFa() {
      return moment(this.formData.collectionDocsTimeEnd).format(
        "jYYYY/jMM/jDD"
      );
    },
  },
  methods: {
    setData() {
      const {
        start,
        data: {
          conditions: {
            docs: { collectionDocsTime, sendDocsDate },
          },
          auctionInfo: { address, time },
        },
      } = this.dataSource;
      this.formData.collectionDocsTimeStart = collectionDocsTime.start;
      this.formData.collectionDocsTimeEnd = collectionDocsTime.end;
      this.formData.startAuctionDate = start;
      this.formData.auctionAddress = address;
      this.formData.sendDocsDate = sendDocsDate;
      this.formData.time = time;
      //--------
      this.collectionDocsTime = [
        this.collectionDocsStartTimeToFa,
        this.collectionDocsEndTimeToFa,
      ];
      this.startAuctionDate = this.startAuctionDateToFa;
      this.sendDocsDate = this.sendDocsDateToFa;
    },

    submit() {
      this.$emit("stepThreeComplete", this.formData);
    },
  },
};
</script>

<style lang="scss" scoped></style>

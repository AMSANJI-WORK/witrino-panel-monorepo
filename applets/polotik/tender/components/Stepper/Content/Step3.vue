<template>
  <v-form
    @submit.prevent="submit"
    ref="calender"
    class="my-md-12 my-4 d-flex flex-wrap"
  >
    <v-col cols="12" sm="6">
      <v-text-field
        id="tender-collect-docs-time"
        readonly
        v-model="collectionDocsTime"
        label="مهلت تهیه اسناد"
        :loading="formLoading"
        append-icon="mdi-calendar"
        :rules="[rules.required]"
        dense
        outlined
      ></v-text-field>
      <CustomDatePicker
        range
        v-model="collectionDocsTime"
        format="jYYYY/jMM/jDD"
        element="tender-collect-docs-time"
        :min="minDate"
      />
    </v-col>
    <v-col cols="12" sm="6">
      <v-text-field
        id="tender-send-docs-time"
        readonly
        v-model="sendDocsDate"
        label="مهلت ارسال اسناد"
        :loading="formLoading"
        append-icon="mdi-calendar"
        :rules="[rules.required]"
        dense
        outlined
      ></v-text-field>
      <CustomDatePicker
        v-model="sendDocsDate"
        format="jYYYY/jMM/jDD"
        element="tender-send-docs-time"
        :min="minSendDocsDate"
      />
    </v-col>
    <v-col cols="12" sm="6">
      <v-text-field
        id="start-time"
        readonly
        label="تاریخ برگزاری"
        v-model="startTenderDate"
        :loading="formLoading"
        append-icon="mdi-calendar"
        :rules="[rules.required]"
        dense
        outlined
      ></v-text-field>
      <CustomDatePicker
        v-model="startTenderDate"
        format="jYYYY/jMM/jDD"
        element="start-time"
        :min="minStartTenderDate"
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
      <CustomDatePicker
        element="timeStart"
        v-model="formData.time"
        type="time"
      />
    </v-col>
    <v-col cols="12">
      <v-textarea
        label="آدرس"
        name="tenderAddress"
        v-model="formData.tenderAddress"
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
import tenderLoadingMixin from "@applets/polotik/tender/mixins/loading";
import fromRules from "@commen/form/mixins/rules";
import UtilityMixin from "@shared/mixins/utility";
import StepperMixin from "@applets/polotik/tender/mixins/stepper";
import VFieldSpace from "@polotik/components/Reusable/VFieldSpace.vue";
import VStepperLevelBtn from "@polotik/components/Reusable/VStepperLevelBtn.vue";
export default {
  components: {
    VFieldSpace,
    VStepperLevelBtn,
  },
  mixins: [tenderLoadingMixin, fromRules, StepperMixin, UtilityMixin],
  data: () => ({
    collectionDocsTime: [],
    startTenderDate: "",
    sendDocsDate: "",
    formData: {
      collectionDocsTimeStart: null,
      collectionDocsTimeEnd: null,
      startTenderDate: null,
      tenderAddress: null,
      sendDocsDate: null,
      time: null,
    },
  }),
  watch: {
    startTenderDate(newVal) {
      this.formData.startTenderDate = moment(newVal, "jYYYY/jMM/jDD").format(
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
    startTenderDateToFa() {
      return moment(this.formData.startTenderDate).format("jYYYY/jMM/jDD");
    },
    minSendDocsDate() {
      return moment(this.formData.collectionDocsTimeEnd).format(
        "jYYYY/jMM/jDD"
      );
    },
    minStartTenderDate() {
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
          tenderInfo: { address, time },
        },
      } = this.dataSource;
      this.formData.collectionDocsTimeStart = collectionDocsTime.start;
      this.formData.collectionDocsTimeEnd = collectionDocsTime.end;
      this.formData.startTenderDate = start;
      this.formData.tenderAddress = address;
      this.formData.sendDocsDate = sendDocsDate;
      this.formData.time = time;
      //--------
      this.collectionDocsTime = [
        this.collectionDocsStartTimeToFa,
        this.collectionDocsEndTimeToFa,
      ];
      this.startTenderDate = this.startTenderDateToFa;
      this.sendDocsDate = this.sendDocsDateToFa;
    },

    submit() {
      this.$emit("stepThreeComplete", this.formData);
    },
  },
};
</script>

<style lang="scss" scoped></style>

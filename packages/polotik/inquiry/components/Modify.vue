<template>
  <v-form ref="inquiry">
    <v-card
      elevation="2"
      outlined
      class="d-flex flex-row flex-wrap rounded-lg pa-md-10 py-3 mx-2 my-5 align-stretch"
    >
      <Carousel
        class="d-md-none d-block"
        :gallery="editableInquiry.data.gallery"
      />
      <v-col cols="12" md="6">
        <v-sheet class="d-flex flex-row flex-wrap transparent">
          <v-col cols="12" class="py-0">
            <v-text-field
              v-model="editableInquiry.title"
              name="title"
              class="rounded-lg"
              dense
              :loading="formLoading"
              outlined
              :rules="[rules.required]"
              label="عنوان"
            ></v-text-field>
          </v-col>
          <unit-service
            class="py-0 d-flex mt-3 rounded-lg"
            max-width-unit="130"
          >
            <template #selector>
              <UnitServiceSelector
                class="rounded-l-0 rounded-r-lg"
                v-model="editableInquiry.data.unit"
              />
            </template>
            <template #input>
              <UnitServiceInput
                class="rounded-l-lg rounded-r-0"
                :selected-unit="editableInquiry.data.unit"
                v-model="editableInquiry.data.amount"
              />
            </template>
          </unit-service>
          <CategoryService
            v-model="editableInquiry.data.category"
            :multiple="true"
          />
          <v-col cols="12" class="py-0">
            <v-text-field
              id="from-date"
              readonly
              label="تاریخ شروع"
              class="rounded-lg"
              :loading="formLoading"
              name="fromDate"
              append-icon="mdi-calendar"
              :rules="[rules.required, fromDateRule]"
              v-model="fromDate"
              dense
              outlined
            ></v-text-field>
            <CustomDatePicker
              format="jYYYY/jMM/jDD"
              element="from-date"
              v-model="fromDate"
              :min="minDate"
            />
          </v-col>
          <CityService v-model="editableInquiry.data.place" :multiple="true" />
          <v-col cols="12" class="py-0">
            <v-slider
              v-model="endDay"
              danse
              :rules="[rules.required]"
              thumb-color="yellow darken-4"
              track-fill-color="yellow darken-4"
              track-color="yellow darken-2"
              :tick-labels="tickLables"
              tick-color="white"
              :loading="formLoading"
              thumb-label="always"
              ticks="always"
              tick-size="1"
              :min="1"
              :max="30"
              step="1"
              label="مدت اعتبار (روز)"
            >
              <template v-slot:label>
                <span class="d-md-block d-none">مدت اعتبار (روز)</span>
                <span class="d-flex d-md-none">اعتبار (روز)</span>
              </template>
            </v-slider>
          </v-col>
        </v-sheet>
      </v-col>
      <Carousel
        class="d-none d-md-block"
        :gallery="editableInquiry.data.gallery"
      />
      <v-col cols="12" class="py-0">
        <v-textarea
          outlined
          :rules="[rules.required]"
          label="توضیحات"
          :loading="formLoading"
          v-model="editableInquiry.description"
        ></v-textarea>
      </v-col>

      <v-col cols="12">
        <v-divider class="pb-2"></v-divider>
      </v-col>
      <v-col class="d-flex flex-wrap align-center mb-5 pt-0">
        <UploadImage
          @upload-reolved="updateGallery"
          @dalete-image="deleteImage"
          :data-source="editableInquiry.data.gallery"
          active-service="inquiry"
        />
      </v-col>

      <v-col cols="12" class="d-md-flex flex-row-reverse d-none">
        <v-btn
          dark
          :color="submitBtnColor"
          :loading="formLoading"
          elevation="5"
          @click="submit"
          >{{ submitBtnTilte }}</v-btn
        >
      </v-col>
      <v-col cols="12" class="d-md-none d-block">
        <v-btn
          dark
          block
          :color="submitBtnColor"
          :loading="formLoading"
          elevation="5"
          @click="submit"
          >{{ submitBtnTilte }}</v-btn
        >
      </v-col>
    </v-card>
  </v-form>
</template>

<script>
import moment from "moment-jalaali";
import inquiryLoadingMixin from "@packages/polotik/inquiry/mixins/loading";
import InquiryMixin from "@packages/polotik/inquiry/mixins";
import ServicesMixin from "@polotik/mixins/base/service";
import UtilityMixin from "@shared/mixins/utility";
import { mapActions } from "vuex";
import Carousel from "@polotik/components/Reusable/Carousel.vue";
import UploadImage from "@commen/upload/polotik/components/UploadImage.vue";
import CategoryService from "@packages/polotik/service/components/Category.vue";
import CityService from "@packages/polotik/service/components/City.vue";
import UnitService from "@packages/polotik/service/components/Unit/index.vue";
import UnitServiceSelector from "@packages/polotik/service/components/Unit/Selector.vue";
import UnitServiceInput from "@packages/polotik/service/components/Unit/Input.vue";
import serviceTypes from "@packages/polotik/service/store/types";
import fromRules from "@commen/form/mixins/rules";

export default {
  mixins: [
    InquiryMixin,
    fromRules,
    inquiryLoadingMixin,
    ServicesMixin,
    UtilityMixin,
  ],
  components: {
    CategoryService,
    CityService,
    UnitService,
    UnitServiceInput,
    UnitServiceSelector,
    UploadImage,
    Carousel,
  },
  data() {
    return {
      tickLables: [],
      endDay: 1,
    };
  },
  watch: {
    fromDate(newValue) {
      this.editableInquiry.start = moment(newValue, "jYYYY/jMM/jDD").format(
        "YYYY-MM-DD"
      );
    },
    calculateEndDate(newValue) {
      this.editableInquiry.end = moment(newValue).format("YYYY-MM-DD");
    },
  },
  computed: {
    calculateEndDate() {
      let date = new Date(this.editableInquiry.start);
      date.setDate(date.getDate() + this.endDay);
      return date;
    },
    isFormValidate() {
      return this.$refs["inquiry"].validate();
    },
    submitBtnTilte() {
      return this.route.includes("edit") ? "ویرایش" : "ثبت درخواست";
    },
    modifyImageTitle() {
      return this.routeIsCreate ? "ویرایش عکس ها" : "افزودن عكس";
    },
    routeIsCreate() {
      return !this.route.includes("create");
    },
    compareStartDateWithCurrentDate() {
      const oneDay = 1000 * 60 * 60 * 24;
      const startDateDefrenceWithCurrentDate =
        new Date(this.editableInquiry.start) - new Date(Date.now());

      const defrencePerDay = Math.ceil(
        startDateDefrenceWithCurrentDate / oneDay
      );
      if (defrencePerDay <= 0) return new Date(Date.now());
      return new Date(this.editableInquiry.start);
    },
    remainingDays() {
      const timeDefrence = Math.abs(
        this.compareStartDateWithCurrentDate -
          new Date(this.editableInquiry.end)
      );
      const oneDay = 1000 * 60 * 60 * 24;
      return Math.ceil(timeDefrence / oneDay);
    },
  },
  methods: {
    ...mapActions({
      getAllCategoriesAsync: `service/category/${serviceTypes.GET_ALL_CATEGORIES_ASYNC}`,
    }),
    setEditableInquiryData() {
      Object.assign(this.editableInquiry, this.item);
      this.fromDate = this.calculateFromDate;
      this.endDay = this.remainingDays;
    },
    checkRoutePath() {
      this.getAllCategoriesAsync({ target: "inquiry" });
      if (this.routeIsCreate)
        this.getAnInquiryAsync(this.inquiryId).then(() =>
          this.setEditableInquiryData()
        );
    },
    updateGallery(e) {
      this.editableInquiry.data.gallery = [
        ...this.editableInquiry.data.gallery,
        ...e,
      ];
    },
    deleteImage(imageIdx) {
      this.editableInquiry.data.gallery.splice(imageIdx, 1);
    },
    submit() {
      if (this.isFormValidate) this.routeIsCreate ? this.edit() : this.create();
    },
    resetForm() {
      this.$refs["inquiry"].reset();
      this.$router.push("/inquiry/list");
    },
    create() {
      this.editableInquiry.user_id = this.currentUserId;
      this.createInquiryAsync(this.editableInquiry).then(() =>
        this.resetForm()
      );
    },
    beforeEdit() {
      delete this.editableInquiry.created_at;
      delete this.editableInquiry.updated_at;
      const {
        data: { unit, category },
      } = this.editableInquiry;
      this.editableInquiry.data.unit = unit.id;

      this.editableInquiry.data.category = category.map((el) => {
        return el?.id ? el.id : el;
      });
    },
    edit() {
      this.beforeEdit();
      this.updateInquiryAsync(this.editableInquiry).then(() =>
        this.resetForm()
      );
    },
  },
  created() {
    this.checkRoutePath();
  },
};
</script>
<style lang="scss" scoped>
:deep(.v-slider--horizontal .v-slider__track-container) {
  width: 100%;
  height: 7px;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}
:depp(.v-slider__thumb-label) {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem !important;
  color: #fff;
  width: 24px !important;
  height: 24px !important;
  border-radius: 50% 50% 0;
  bottom: 100%;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>

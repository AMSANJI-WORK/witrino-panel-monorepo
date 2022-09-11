<template>
  <v-form ref="barter">
    <v-card
      elevation="2"
      outlined
      class="d-flex flex-wrap rounded-lg pa-md-10 py-3 mx-2 my-5"
    >
      <Carousel
        class="d-md-none d-block"
        :gallery="editableBarter.data.gallery"
      />
      <v-col cols="12" md="6" class="d-flex flex-row flex-wrap">
        <v-col cols="12" class="py-0">
          <v-text-field
            v-model="editableBarter.title"
            name="title"
            dense
            class="rounded-lg"
            :loading="formLoading"
            outlined
            :rules="[rules.required]"
            label="عنوان"
          ></v-text-field>
        </v-col>
        <v-col cols="12" class="py-0">
          <v-text-field
            id="from-date"
            readonly
            class="rounded-lg"
            label="تاریخ شروع"
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
        <v-col cols="12" class="py-0">
          <v-text-field
            :value="editableBarter.data.price | toRial"
            @input="(value) => (editableBarter.data.price = value)"
            :hint="editableBarter.data.price | numberToStringFa"
            :loading="formLoading"
            class="rounded-lg"
            :rules="[rules.required]"
            label="ارزش تقریبی"
            suffix="تومان"
            dense
            persistent-hint
            outlined
          ></v-text-field>
        </v-col>
        <CityService
          class="py-0"
          v-model="editableBarter.data.place"
          :multiple="true"
        />
        <!--  -->
        <v-col cols="12" class="py-0">
          <v-text-field
            v-model="editableBarter.data.service.requestedTitle"
            :loading="formLoading"
            class="rounded-t-lg py-0 rounded-b-0"
            :rules="[rules.required]"
            label="محصول / خدمت درخواستی"
            dense
            placeholder="عنوان محصول / خدمت درخواستی"
            hide-details
            persistent-hint
            outlined
          ></v-text-field>
        </v-col>
        <CategoryService
          v-model="editableBarter.data.service.requested"
          input-class="rounded-t-0 rounded-b-lg"
          class="pt-0"
          :multiple="true"
          label=""
          hint="توضیحات (خدمت درخواستی)"
        />

        <v-col cols="12" class="py-0">
          <v-text-field
            v-model="editableBarter.data.service.availableTitle"
            :loading="formLoading"
            class="rounded-t-lg py-0 rounded-b-0"
            :rules="[rules.required]"
            label="خدمت / محصول"
            placeholder="عنوان محصول / خدمت قابل ارائه"
            dense
            hide-details
            persistent-hint
            outlined
          ></v-text-field>
        </v-col>
        <CategoryService
          class="pt-0"
          v-model="editableBarter.data.service.available"
          :multiple="true"
          input-class="rounded-t-0 rounded-b-lg"
          label=""
          hint="توضیحات (خدمت قابل ارائه)"
        />

        <v-col cols="12" class="py-0 mt-5 mx-1">
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
      </v-col>
      <Carousel
        class="d-none d-md-block"
        :gallery="editableBarter.data.gallery"
      />

      <v-col cols="12" class="py-0">
        <v-textarea
          outlined
          class="rounded-lg"
          :rules="[rules.required]"
          label="توضیحات"
          :loading="formLoading"
          v-model="editableBarter.description"
        ></v-textarea>
      </v-col>

      <v-col cols="12">
        <v-divider class="pb-2"></v-divider>
      </v-col>
      <v-col class="d-flex flex-wrap align-center mb-5 pt-0">
        <UploadImage
          @dalete-image="deleteImage"
          @upload-reolved="updateGallery"
          :data-source="editableBarter.data.gallery"
          active-service="guilds/barter"
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
import { mapActions } from "vuex";
import servicesTypes from "@packages/polotik/service/store/types";
import BarterMixin from "@packages/polotik/barter/mixins";
import barterLoadingMixin from "@packages/polotik/barter/mixins/loading";
import fromRules from "@commen/form/mixins/rules";
import UploadImage from "@commen/upload/polotik/components/UploadImage.vue";
import ServicesMixin from "@polotik/mixins/base/services";
import UtilityMixin from "@shared/mixins/utility";
import VSelectInputNoData from "@polotik/components/Reusable/VSelectInputNoData.vue";
import Carousel from "@polotik/components/Reusable/Carousel.vue";
import CategoryService from "@packages/polotik/service/components/Category.vue";
import CityService from "@packages/polotik/service/components/City.vue";

export default {
  mixins: [
    BarterMixin,
    ServicesMixin,
    barterLoadingMixin,
    fromRules,
    UtilityMixin,
  ],
  components: {
    CityService,
    CategoryService,
    VSelectInputNoData,
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
      this.editableBarter.start = moment(newValue, "jYYYY/jMM/jDD").format(
        "YYYY-MM-DD"
      );
    },
    calculateEndDate(newValue) {
      console.log(this.editableBarter.end);
      this.editableBarter.end = moment(newValue).format("YYYY-MM-DD");
    },
  },
  computed: {
    calculateEndDate() {
      let date = new Date(this.editableBarter.start);
      date.setDate(date.getDate() + this.endDay);
      return date;
    },
    isFormValidate() {
      return this.$refs["barter"].validate();
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
        new Date(this.editableBarter.start) - new Date(Date.now());

      const defrencePerDay = Math.ceil(
        startDateDefrenceWithCurrentDate / oneDay
      );
      if (defrencePerDay <= 0) return new Date(Date.now());
      return new Date(this.editableBarter.start);
    },
    remainingDays() {
      const timeDefrence = Math.abs(
        this.compareStartDateWithCurrentDate - new Date(this.editableBarter.end)
      );
      const oneDay = 1000 * 60 * 60 * 24;
      return Math.ceil(timeDefrence / oneDay);
    },
  },
  methods: {
    ...mapActions({
      getAllCategoriesAsync: `guilds/services/category/${servicesTypes.GET_ALL_CATEGORIES_ASYNC}`,
    }),
    setData() {
      Object.assign(this.editableBarter, this.barter);
      this.endDay = this.remainingDays;
      this.fromDate = this.calculateFromDate;
    },
    checkRoutePath() {
      this.getAllCategoriesAsync({ target: "barter" });
      if (this.routeIsCreate)
        this.getABarterAsync(this.barterId).then(() => this.setData());
    },
    submit() {
      if (this.isFormValidate) {
        this.routeIsCreate ? this.edit() : this.create();
      }
    },
    updateGallery(e) {
      this.editableBarter.data.gallery = [
        ...this.editableBarter.data.gallery,
        ...e,
      ];
    },
    deleteImage(imageIdx) {
      this.editableBarter.data.gallery.splice(imageIdx, 1);
    },
    resetForm() {
      this.$refs["barter"].reset();
      this.$router.push("/barter/list");
    },
    create() {
      this.editableBarter.user_id = this.currentUserId;
      this.createBarterAsync(this.editableBarter).then(() => this.resetForm());
    },
    beforeEdit() {
      delete this.editableBarter.created_at;
      delete this.editableBarter.updated_at;
    },
    edit() {
      this.beforeEdit();
      this.updateBarterAsync(this.editableBarter).then(() => this.resetForm());
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
:deep(.v-slider__thumb-label) {
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

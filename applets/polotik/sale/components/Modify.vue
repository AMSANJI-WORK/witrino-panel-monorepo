<template>
  <v-form ref="sale">
    <v-card
      elevation="2"
      outlined
      class="d-flex flex-row flex-wrap rounded-lg pa-md-10 py-7 mx-2 my-5"
    >
      <v-col cols="12" sm="6" class="py-0">
        <v-text-field
          v-model="currentUser.name"
          class="rounded-lg"
          dense
          readonly
          :loading="formLoading"
          outlined
          :rules="[rules.required]"
          label="برگزار کننده"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" class="py-0">
        <v-text-field
          v-model="editableSale.title"
          name="title"
          class="rounded-lg"
          dense
          :loading="formLoading"
          outlined
          :rules="[rules.required]"
          label="عنوان"
        ></v-text-field>
      </v-col>
      <unit-service sm="6" max-width-unit="130" class="py-0 d-flex rounded-lg">
        <template #selector>
          <UnitServiceSelector
            class="rounded-l-0 rounded-r-lg"
            v-model="editableSale.data.unit"
          />
        </template>
        <template #input>
          <UnitServiceInput
            class="rounded-l-lg rounded-r-0"
            :selected-unit="editableSale.data.unit"
            :value="editableSale.data.amount | toRial"
            @input="(value) => (editableSale.data.amount = value)"
          />
        </template>
      </unit-service>
      <CategoryService
        class="py-0"
        sm="6"
        label="دسته بندی حراجی"
        v-model="editableSale.data.category"
        :multiple="true"
      />
      <v-col cols="12" sm="6" class="py-0">
        <PriceInput
          class="rounded-lg"
          v-model="editableSale.data.price.base"
          :loading="formLoading"
          :rules="[rules.required]"
          persistent-hint
          label="قیمت پایه"
        />
      </v-col>
      <v-col cols="12" sm="6" class="py-0">
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
          format="jYYYY/jMM/jDD HH:mm"
          element="from-date"
          v-model="fromDate"
          type="datetime"
          :min="minDate"
          compact-time
        />
      </v-col>
      <v-col cols="12" sm="6" class="py-0">
        <v-text-field
          id="end-date"
          readonly
          class="rounded-lg"
          label="تاریخ پایان"
          :loading="formLoading"
          name="fromDate"
          append-icon="mdi-calendar"
          :rules="[rules.required, fromDateRule]"
          v-model="endDate"
          dense
          outlined
        ></v-text-field>
        <CustomDatePicker
          format="jYYYY/jMM/jDD HH:mm"
          element="end-date"
          type="datetime"
          v-model="endDate"
          :min="minEndDate"
          compact-time
        />
      </v-col>
      <CityService
        sm="6"
        class="py-0"
        v-model="editableSale.data.place"
        label="محل برگزاری"
      />

      <v-col cols="12" class="py-0">
        <v-textarea
          outlined
          :rules="[rules.required]"
          label="توضیحات"
          class="rounded-lg"
          :loading="formLoading"
          v-model="editableSale.description"
        ></v-textarea>
      </v-col>
      <v-expand-transition>
        <v-sheet
          elevation="0"
          class="d-flex flex-wrap transparent"
          v-if="editableSale.data.price.limited"
          width="100%"
        >
          <limit-section v-model="priceType">
            <template #percent>
              <v-col cols="6" sm="6" class="pa-0 pr-md-0 pr-3">
                <LimitPercentInput
                  label="حداقل افزایش"
                  class="rounded-lg rounded-l-0"
                  :loading="formLoading"
                  v-model="editableSale.data.price.present.min"
                />
              </v-col>
              <v-col cols="6" sm="6" class="pa-0 pl-3">
                <LimitPercentInput
                  label="حداکثر افزایش"
                  class="rounded-lg rounded-r-0"
                  v-model.number="editableSale.data.price.present.max"
                />
              </v-col>
            </template>
            <template #price>
              <v-col cols="6" sm="6" class="pa-0 pr-md-0 pr-3">
                <LimitPriceInput
                  label="حداقل افزایش"
                  class="rounded-lg rounded-l-0"
                  :loading="formLoading"
                  :value="editableSale.data.price.min | toRial"
                  @input="(value) => (editableSale.data.price.min = value)"
                />
              </v-col>
              <v-col cols="6" sm="6" class="pa-0 pl-sm-3">
                <LimitPriceInput
                  label="حداکثر افزایش"
                  :loading="formLoading"
                  class="rounded-lg rounded-r-0"
                  :value="editableSale.data.price.max | toRial"
                  @input="(value) => (editableSale.data.price.max = value)"
                />
              </v-col>
            </template>
          </limit-section>
        </v-sheet>
      </v-expand-transition>
      <v-col cols="12" sm="6" class="py-0 pt-5 pt-md-0">
        <v-checkbox dense v-model="editableSale.data.price.limited">
          <template v-slot:label>
            <span class="text-md-body-1 text-body-2"
              >مدت محدود کردن قیمت پیشنهادی</span
            >
          </template>
        </v-checkbox>
      </v-col>
      <v-col cols="12" sm="6" class="py-0">
        <v-checkbox
          dense
          v-model="editableSale.data.participate.userPanel"
          label="امکان شرکت کاربران شبکه هوشمند"
          color="primary"
        >
          <template v-slot:label>
            <span class="text-md-body-1 text-body-2"
              >امکان شرکت کاربران شبکه هوشمند</span
            >
          </template>
        </v-checkbox>
      </v-col>
      <v-col cols="12" sm="6" class="py-0">
        <v-checkbox
          dense
          v-model="editableSale.data.participate.public"
          color="primary"
        >
          <template v-slot:label>
            <span class="text-md-body-1 text-body-2"
              >امکان شرکت افراد عادی</span
            >
          </template>
        </v-checkbox>
      </v-col>
      <v-col cols="12" sm="6" class="py-0">
        <v-checkbox
          dense
          v-model="editableSale.data.participate.seeParticipantsInfo"
          color="primary"
        >
          <template v-slot:label>
            <span class="text-md-body-1 text-body-2"
              >نمایش اطلاعات افراد برای یکدیگر</span
            >
          </template>
        </v-checkbox>
      </v-col>

      <v-field-space />
      <v-col cols="12">
        <v-divider class="pb-2"></v-divider>
      </v-col>
      <v-col class="d-flex flex-wrap align-center mb-5 pt-0">
        <UploadImage
          @upload-reolved="updateGallery"
          @dalete-image="deleteImage"
          :data-source="editableSale.data.gallery"
          active-service="sale"
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
import SaleMixin from "@applets/polotik/sale/mixins";
import saleLoadingMixin from "@applets/polotik/sale/mixins/loading";
import UtilityMixin from "@applets/commen/mixins/utility.js";
import ServicesMixin from "@polotik/mixins/base/service";
import serviceTypes from "@applets/polotik/service/store/types";
import { mapActions } from "vuex";
import UploadImage from "@applets/commen/upload/polotik/components/UploadImage.vue";
import VFieldSpace from "@polotik/components/Reusable/VFieldSpace.vue";
import CategoryService from "@applets/polotik/service/components/Category.vue";
import CityService from "@applets/polotik/service/components/City.vue";
import UnitService from "@applets/polotik/service/components/Unit/index.vue";
import UnitServiceSelector from "@applets/polotik/service/components/Unit/Selector.vue";
import UnitServiceInput from "@applets/polotik/service/components/Unit/Input.vue";
import LimitSection from "@applets/polotik/sale/components/ModifyLimit/Section.vue";
import LimitPriceInput from "@applets/polotik/sale/components/ModifyLimit/PriceInput.vue";
import LimitPercentInput from "@applets/polotik/sale/components/ModifyLimit/PercentInput.vue";
import VSelectInputNoData from "@polotik/components/Reusable/VSelectInputNoData.vue";
import VSelectInputSelection from "@polotik/components/Reusable/VSelectInputSelection.vue";
import fromRules from "@applets/commen/form/mixins/rules";
import PriceInput from "@applets/commen/reusable-inputs/components/Price.vue";

export default {
  mixins: [SaleMixin, fromRules, saleLoadingMixin, ServicesMixin, UtilityMixin],
  components: {
    PriceInput,
    LimitSection,
    LimitPriceInput,
    LimitPercentInput,
    CategoryService,
    CityService,
    VFieldSpace,
    UploadImage,
    VSelectInputNoData,
    VSelectInputSelection,
    UnitService,
    UnitServiceSelector,
    UnitServiceInput,
  },
  data: () => ({
    priceType: null,
  }),
  watch: {
    fromDate: function (v) {
      this.editableSale.start = moment(v, "jYYYY/jMM/jDD HH:mm:ss").format(
        "YYYY-MM-DD HH:mm:ss"
      );
    },
    endDate: function (v) {
      this.editableSale.end = moment(v, "jYYYY/jMM/jDD HH:mm:ss").format(
        "YYYY-MM-DD HH:mm:ss"
      );
    },
  },
  computed: {
    priceTypeItems() {
      return [
        {
          text: "مبلغی",
          value: "isAmount",
        },
        {
          text: "درصدی",
          value: "isPercent",
        },
      ];
    },
    currentUser() {
      return JSON.parse(localStorage.getItem("currentUser"));
    },
    minEndDate() {
      return moment(this.editableSale.start).format("jYYYY/jMM/jDD HH:mm");
    },
    isFormValidate() {
      return this.$refs["sale"].validate();
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
  },
  methods: {
    ...mapActions({
      getAllCategoriesAsync: `service/category/${serviceTypes.GET_ALL_CATEGORIES_ASYNC}`,
    }),

    setEditableSaleData() {
      Object.assign(this.editableSale, this.item);
      const {
        price: { priceType },
      } = this.editableSale.data;
      this.priceType = priceType;
      this.fromDate = this.calculateFromDate;
      this.endDate = this.calculateEndDate;
    },
    checkRoutePath() {
      this.getAllCitiesAsync();
      this.getAllCategoriesAsync({ target: "sales" });
      if (this.routeIsCreate)
        this.getASaleAsync(this.saleId).then(() => this.setEditableSaleData());
    },
    checkPriceLimit() {
      this.editableSale.data.price.limited ? this.checkPriceType() : null;
    },
    checkPriceType() {
      this.editableSale.data.price.priceType = this.priceType;
      if (this.priceType === "isAmount") {
        this.editableSale.data.price.present.min = 0;
        this.editableSale.data.price.present.max = 0;
      } else {
        this.editableSale.data.price.min = 0;
        this.editableSale.data.price.max = 0;
      }
    },
    updateGallery(e) {
      this.editableSale.data.gallery = [
        ...this.editableSale.data.gallery,
        ...e,
      ];
    },
    deleteImage(imageIdx) {
      this.editableSale.data.gallery.splice(imageIdx, 1);
    },
    submit() {
      if (this.isFormValidate) {
        this.checkPriceLimit();
        this.routeIsCreate ? this.edit() : this.create();
      }
    },
    resetForm() {
      this.$refs["sale"].reset();
      this.$router.push("/sale/list");
    },

    create() {
      this.editableSale.user_id = this.currentUserId;
      this.createSaleAsync(this.editableSale).then(() => this.resetForm());
    },
    beforeEdit() {
      delete this.editableSale.created_at;
      delete this.editableSale.updated_at;
      const {
        data: { unit, category },
      } = this.editableSale;
      this.editableSale.data.unit = unit.id;
      this.editableSale.data.category = category.map((el) => {
        return el?.id ? el.id : el;
      });
    },
    edit() {
      this.beforeEdit();
      this.updateSaleAsync(this.editableSale).then(() => this.resetForm());
    },
  },
  created() {
    this.checkRoutePath();
  },
};
</script>
<style lang="scss" scoped>
.v-text-field--outlined > .v-input__control > .v-input__slot {
  background: #fff;
}
:deep(.v-slider--horizontal .v-slider__track-container) {
  width: 100%;
  height: 7px;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}
</style>

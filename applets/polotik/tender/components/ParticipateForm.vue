<template>
  <v-dialog v-model="dialog" max-width="700">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        color="red"
        :disabled="!settings.participation"
        class="white--text"
        v-bind="attrs"
        v-on="on"
        >ارسال اطلاعات</v-btn
      >
    </template>

    <v-card>
      <v-card-title class="grey lighten-2 font-weight-bold">
        ارسال اطلاعات
      </v-card-title>
      <v-card-subtitle class="pt-5">
        {{ settings.description }}
      </v-card-subtitle>
      <v-card-text>
        <v-form
          ref="participateTenderForm"
          class="d-flex flex-wrap"
          v-if="settings.participation"
        >
          <v-col cols="12" sm="6">
            <v-text-field
              class="rounded-lg"
              v-model="tenderParticipate.title"
              dense
              :loading="formLoading"
              outlined
              :rules="[rules.required]"
              label="عنوان درخواست"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" :class="settings.offerPrice ? '' : 'd-none'">
            <PriceInput
              class="rounded-lg"
              label="مبلغ پیشنهادی"
              v-model="tenderParticipate.price"
              :loading="formLoading"
              :rules="[rules.required]"
              persistent-hint
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              suffix="+98"
              type="number"
              persistent-hint
              class="rounded-lg"
              label="شماره همراه"
              :loading="formLoading"
              :rules="[rules.required]"
              v-model="tenderParticipate.data.phone"
              dense
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" class="pb-0">
            <v-textarea
              class="rounded-lg"
              v-model="tenderParticipate.data.address"
              dense
              row-height="3"
              auto-grow
              :loading="formLoading"
              outlined
              :rules="[rules.required]"
              label="آدرس"
            ></v-textarea>
          </v-col>
          <v-col cols="12" :class="settings.commentable ? '' : 'd-none'">
            <v-textarea
              class="rounded-lg"
              v-model="tenderParticipate.data.comment"
              dense
              persistent-hint
              row-height="3"
              auto-grow
              :loading="formLoading"
              outlined
              label="تبت نظر"
              placeholder="نظر خود را درباره این مناقصه ثبت کنید"
            ></v-textarea>
          </v-col>
          <v-col cols="12">
            <v-textarea
              class="rounded-lg"
              v-model="tenderParticipate.description"
              dense
              :rules="[rules.required]"
              persistent-hint
              :loading="formLoading"
              outlined
              label="توضیحات"
            ></v-textarea>
          </v-col>

          <v-col cols="12" :class="settings.uploadable ? '' : 'd-none'">
            <v-divider />
            <div style="width: 100%" class="d-flex flex-wrap">
              <UploadImage
                @dalete-image="deleteImage"
                @upload-reolved="updateGallery"
                :data-source="tenderParticipate.data.gallery"
                active-service="tender/request"
              />
            </div>
          </v-col>
        </v-form>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="red lighten-2"
          text
          :loading="formLoading"
          @click="cansel"
        >
          انصراف
        </v-btn>
        <v-btn
          color="success"
          elevation="5"
          :loading="formLoading"
          @click="submitTenderParticipate"
        >
          ثبت
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import tenderLoadingMixin from "@applets/polotik/tender/mixins/loading";
import fromRules from "@commen/form/mixins/rules";
import UtilityMixin from "@shared/mixins/utility";
import StepperMixin from "@applets/polotik/tender/mixins/stepper";
import { mapGetters, mapState, mapActions } from "vuex";
import UploadImage from "@commen/upload/polotik/components/UploadImage.vue";
import PriceInput from "@commen/reusable-inputs/components/Price.vue";
import OFFER_TYPES from "@applets/polotik/commen/offer/polotik/store/types";
export default {
  components: {
    PriceInput,
    UploadImage,
  },
  mixins: [tenderLoadingMixin, fromRules, StepperMixin, UtilityMixin],
  data() {
    return {
      dialog: false,
      comment: false,
      tenderParticipate: {
        title: null,
        description: null,
        status: 1,
        price: null,
        data: {
          gallery: [],
          docs: [],
          address: null,
          phone: null,
          comment: null,
        },
      },
    };
  },
  watch: {
    item: {
      handler(newValue) {},
      immediate: true,
    },
  },
  computed: {
    ...mapGetters({
      item: "tender/item",
    }),

    ...mapState({
      formLoading: (state) => state.formLoading,
    }),
    tenderId() {
      return this.$route.params.id;
    },
    form() {
      return this.$refs.participateTenderForm;
    },
    settings() {
      return this.item.data.tenderInfo.settings;
    },
  },
  methods: {
    ...mapActions({
      createOfferTenderAsync: `tender/request/${OFFER_TYPES.CREATE_OFFER_ASYNC}`,
    }),
    cansel() {
      this.dialog = false;
      this.form.reset();
    },
    updateGallery(e) {
      this.tenderParticipate.data.gallery = [
        ...this.tenderParticipate.data.gallery,
        ...e,
      ];
    },
    deleteImage(imageIdx) {
      this.tenderParticipate.data.gallery.splice(imageIdx, 1);
    },
    submitTenderParticipate() {
      if (this.form.validate()) {
        this.createOfferTenderAsync({
          target: { name: "tender", id: this.tenderId },
          participateForm: this.tenderParticipate,
        }).then(() => {
          this.cansel();
          this.$router.push("outcome");
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>

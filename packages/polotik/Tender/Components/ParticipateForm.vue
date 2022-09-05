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
            <v-text-field
              suffix="تومان"
              label="مبلغ پیشنهادی"
              class="rounded-lg"
              persistent-hint
              :value="tenderParticipate.data.price | toRial"
              @input="(value) => (tenderParticipate.data.price = value)"
              :hint="tenderParticipate.data.price | numberToStringFa"
              :disabled="!settings.offerPrice"
              :loading="formLoading"
              :rules="[rules.required]"
              dense
              outlined
            ></v-text-field>
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
              <upload-image @uploadedImagesSuccess="sevaImagesInGallery" />
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
import FormMixin from "@polotik/mixins/base/form";
import UtilityMixin from "@shared/mixins/utility";
import StepperMixin from "@packages/polotik/tender/mixins/stepper";
import { mapGetters, mapState, mapActions } from "vuex";
import UploadImage from "@packages/polotik/Upload/components/UploadImage.vue";
import TYPES from "@packages/polotik/tender/modules/offers/store/types";
export default {
  components: {
    UploadImage,
  },
  mixins: [FormMixin, StepperMixin, UtilityMixin],
  data() {
    return {
      dialog: false,
      comment: false,
      tenderParticipate: {
        title: null,
        description: null,
        status: 1,
        data: {
          price: null,
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
    tender: {
      handler(newValue) {},
      immediate: true,
    },
  },
  computed: {
    ...mapGetters({
      tender: "guilds/tender/tender",
      uploadedImages: "upload/successUploadedImages",
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
      return this.tender.data.tenderInfo.settings;
    },
  },
  methods: {
    ...mapActions({
      createOfferTenderAsync: `guilds/tender/request/${TYPES.CREATE_OFFER_TENDER_ASYNC}`,
    }),
    cansel() {
      this.dialog = false;
      this.form.reset();
    },
    sevaImagesInGallery(payload) {
      const oldGallery = this.tenderParticipate.data.gallery;
      this.tenderParticipate.data.gallery = [...payload, ...oldGallery];
    },
    submitTenderParticipate() {
      if (this.form.validate()) {
        this.createOfferTenderAsync({
          target: { name: "tender", id: this.tenderId },
          participateForm: this.tenderParticipate,
        }).then(() => {
          this.cansel();
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>

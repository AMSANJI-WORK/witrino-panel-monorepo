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
          ref="participateAuctionForm"
          class="d-flex flex-wrap"
          v-if="settings.participation"
        >
          <v-col cols="12" sm="6">
            <v-text-field
              class="rounded-lg"
              v-model="auctionParticipate.title"
              dense
              :loading="formLoading"
              outlined
              :rules="[rules.required]"
              label="عنوان درخواست"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" :class="settings.offerPrice ? '' : 'd-none'">
            <v-text-field
              class="rounded-lg"
              :value="auctionParticipate.data.price | toRial"
              @input="(value) => (auctionParticipate.data.price = value)"
              :hint="auctionParticipate.data.price | numberToStringFa"
              dense
              persistent-hint
              :disabled="!settings.offerPrice"
              suffix="تومان"
              :loading="formLoading"
              outlined
              :rules="[rules.required]"
              label="مبلغ پیشنهادی"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              class="rounded-lg"
              v-model="auctionParticipate.data.phone"
              dense
              persistent-hint
              suffix="98+"
              :loading="formLoading"
              type="number"
              outlined
              :rules="[rules.required]"
              label="شماره همراه"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" class="pb-0">
            <v-textarea
              class="rounded-lg"
              v-model="auctionParticipate.data.address"
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
              v-model="auctionParticipate.data.comment"
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
              v-model="auctionParticipate.description"
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
          color="primary"
          :loading="formLoading"
          @click="submitAuctionParticipate"
        >
          ثبت
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import auctionLoadingMixin from "@packages/polotik/auction/mixins/loading";
import UtilityMixin from "@shared/mixins/utility";
import StepperMixin from "@packages/polotik/auction/mixins/stepper";
import UploadImage from "@packages/polotik/upload/components/UploadImage.vue";
import TYPES from "@packages/polotik/auction/modules/offers/store/types";

export default {
  components: {
    UploadImage,
  },
  mixins: [auctionLoadingMixin, StepperMixin, UtilityMixin],
  data() {
    return {
      dialog: false,
      comment: false,
      auctionParticipate: {
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
    auction: {
      handler(newValue) {},
      immediate: true,
    },
  },
  computed: {
    ...mapGetters({
      auction: "guilds/auction/auction",
      uploadedImages: "upload/successUploadedImages",
    }),
    auctionId() {
      return this.$route.params.id;
    },
    form() {
      return this.$refs.participateAuctionForm;
    },
    settings() {
      return this.auction.data.auctionInfo.settings;
    },
  },
  methods: {
    ...mapActions({
      createOfferAuctionAsync: `guilds/auction/request/${TYPES.CREATE_OFFER_AUCTION_ASYNC}`,
    }),
    cansel() {
      this.dialog = false;
      this.form.reset();
    },
    sevaImagesInGallery(payload) {
      const oldGallery = this.auctionParticipate.data.gallery;
      this.auctionParticipate.data.gallery = [...payload, ...oldGallery];
      console.log(this.auctionParticipate.data.gallery);
    },
    submitAuctionParticipate() {
      if (this.form.validate()) {
        this.createOfferAuctionAsync({
          target: { name: "auction", id: this.auctionId },
          participateForm: this.auctionParticipate,
        }).then(() => {
          this.$router.go(0);
          this.cansel();
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>

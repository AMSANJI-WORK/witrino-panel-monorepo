import { mapGetters, mapActions, mapMutations } from "vuex";

import Types from "@packages/polotik/auction/store/modules/root/types";
import VStepperTitle from "@polotik/components/Reusable/VStepperTitle.vue";
import VStepperLevelBtn from "@polotik/components/Reusable/VStepperLevelBtn.vue";
import AuctionStepperHeader from "@packages/polotik/auction/components/Stepper/Header.vue";
import AuctionStepOne from "@packages/polotik/auction/components/Stepper/Content/Step1.vue";
import AuctionStepTwo from "@packages/polotik/auction/components/Stepper/Content/Step2.vue";
import AuctionStepThree from "@packages/polotik/auction/components/Stepper/Content/Step3.vue";
import AuctionStepFour from "@packages/polotik/auction/components/Stepper/Content/Step4.vue";
import AuctionStepFive from "@packages/polotik/auction/components/Stepper/Content/Step5.vue";
import AuctionPreviewContent from "@packages/polotik/auction/components/PreviewContent/index.vue";

const AuctionModifyMixin = {
  components: {
    AuctionStepperHeader,
    AuctionPreviewContent,
    VStepperLevelBtn,
    VStepperTitle,
    AuctionStepOne,
    AuctionStepTwo,
    AuctionStepThree,
    AuctionStepFour,
    AuctionStepFive,
  },
  computed: {
    ...mapGetters("auction", ["auction", "step"]),
    ...mapGetters("upload", { uploadedImages: "successUploadedImages" }),
    auctionId() {
      return this.$route.params.id;
    },
    isMobile() {
      return window.innerWidth < 600;
    },
    modifyPageTitle() {
      return this.$route.path.includes("edit")
        ? "ویرایش مزایده"
        : "تعریف مزایده";
    },
    submitBtnTilte() {
      return this.$route.path.includes("edit") ? "ثبت ویرایش" : "ثبت نهایی";
    },
    submitBtnColor() {
      if (this.$route.path.includes("edit")) return "yellow darken-4";
      return "success";
    },
  },
  methods: {
    ...mapActions("auction", {
      createAuctionAsync: `${Types.CREATE_AUCTION_ASYNC}`,
      updateAuctionAsync: `${Types.UPDATE_AUCTION_ASYNC}`,
      getAnAuctionAsync: `${Types.GET_ONE_AUCTION_ASYNC}`,
    }),
    ...mapMutations("auction", {
      changeStep: "CHANGE_STEP",
      toggleLoading: "TOGGLE_LOADING",
      setStepOneData: "SET_STEP_ONE_DATA",
      setStepTwoData: "SET_STEP_TWO_DATA",
      setStepThreeData: "SET_STEP_THREE_DATA",
      setStepFourData: "SET_STEP_FOUR_DATA",
      setStepFiveData: "SET_STEP_FIVE_DATA",
    }),
    isEditPage() {
      if (this.$route.path.includes("edit"))
        this.getAnAuctionAsync(this.auctionId);
    },
    submitFormAction() {
      if (this.$route.path.includes("edit")) this.edit();
      this.create();
    },
    submit() {
      this.submitFormAction();
    },
    resetForm() {
      this.$router.push("/auction/list");
      this.changeStep(1);
    },
    create() {
      this.createAuctionAsync(this.auction).then(() => this.resetForm());
    },
    edit() {
      this.updateAuctionAsync(this.auction).then(() => this.resetForm());
    },
  },
  created() {
    this.isEditPage();
  },
};
export default AuctionModifyMixin;

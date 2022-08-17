import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

import Types from "@polotik/modules/Auction/Store/modules/root/types";
import VStepperTitle from "@polotik/components/Reusable/VStepperTitle.vue";
import VStepperLevelBtn from "@polotik/components/Reusable/VStepperLevelBtn.vue";
import AuctionStepperHeader from "@polotik/modules/Auction/Components/Stepper/Header.vue";
import AuctionStepOne from "@polotik/modules/Auction/Components/Stepper/Content/Step1.vue";
import AuctionStepTwo from "@polotik/modules/Auction/Components/Stepper/Content/Step2.vue";
import AuctionStepThree from "@polotik/modules/Auction/Components/Stepper/Content/Step3.vue";
import AuctionStepFour from "@polotik/modules/Auction/Components/Stepper/Content/Step4.vue";
import AuctionStepFive from "@polotik/modules/Auction/Components/Stepper/Content/Step5.vue";
import AuctionPreviewContent from "@polotik/modules/Auction/Components/PreviewContent/index.vue";

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
    ...mapGetters("guilds/auction", ["auction", "step"]),
    ...mapGetters("upload", { uploadedImages: "successUploadedImages" }),
    ...mapState({
      submitBtnLoading: (state) => state.submitBtnLoading,
    }),
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
    ...mapActions("guilds/auction", {
      createAuctionAsync: `${Types.CREATE_AUCTION_ASYNC}`,
      updateAuctionAsync: `${Types.UPDATE_AUCTION_ASYNC}`,
      getAnAuctionAsync: `${Types.GET_AN_AUCTION_ASYNC}`,
    }),
    ...mapMutations("upload", {
      addUploadedImages: `ADD_IMAGE`,
      resetImages: `REST_IMAGES`,
    }),
    ...mapMutations("guilds/auction", {
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
        this.getAnAuctionAsync(this.auctionId).then(() => {
          this.addUploadedImages(this.auction.data.gallery);
        });
    },
    submitFormAction() {
      if (this.$route.path.includes("edit")) return this.edit();
      return this.create();
    },
    submit() {
      this.submitFormAction();
    },
    resetForm() {
      this.$router.push("/auction/list");
      this.changeStep(1);
      this.resetImages();
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

import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

import Types from "@packages/polotik/tender/store/modules/root/types";
import TenderStepOne from "@packages/polotik/tender/components/Stepper/Content/Step1.vue";
import TenderStepTwo from "@packages/polotik/tender/components/Stepper/Content/Step2.vue";
import TenderStepThree from "@packages/polotik/tender/components/Stepper/Content/Step3.vue";
import TenderStepFour from "@packages/polotik/tender/components/Stepper/Content/Step4.vue";
import TenderStepFive from "@packages/polotik/tender/components/Stepper/Content/Step5.vue";
import TenderPreviewContent from "@packages/polotik/tender/components/PreviewContent/index.vue";
import TenderStepperHeader from "@packages/polotik/tender/components/Stepper/Header.vue";
import VStepperTitle from "@polotik/components/Reusable/VStepperTitle.vue";
import VStepperLevelBtn from "@polotik/components/Reusable/VStepperLevelBtn.vue";

const TenderModifyMixin = {
  components: {
    TenderStepperHeader,
    TenderPreviewContent,
    VStepperLevelBtn,
    VStepperTitle,
    TenderStepOne,
    TenderStepTwo,
    TenderStepThree,
    TenderStepFour,
    TenderStepFive,
  },
  computed: {
    ...mapGetters("guilds/tender", ["tender", "step"]),
    ...mapGetters("upload", { uploadedImages: "successUploadedImages" }),
    ...mapState({
      fromLoading: (state) => state.fromLoading,
    }),
    tenderId() {
      return this.$route.params.id;
    },
    isMobile() {
      return window.innerWidth < 600;
    },
    modifyPageTitle() {
      return this.$route.path.includes("edit")
        ? "ویرایش مناقصه"
        : "تعریف مناقصه";
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
    ...mapActions("guilds/tender", {
      createTenderAsync: `${Types.CREATE_TENDER_ASYNC}`,
      updateTenderAsync: `${Types.UPDATE_TENDER_ASYNC}`,
      getATenderAsync: `${Types.GET_A_TENDER_ASYNC}`,
    }),
    ...mapMutations("upload", {
      addUploadedImages: `ADD_IMAGE`,
      resetImages: `REST_IMAGES`,
    }),
    ...mapMutations("guilds/tender", {
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
        this.getATenderAsync(this.tenderId).then(() => {
          this.addUploadedImages(this.tender.data.gallery);
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
      this.$router.push("/tender/list");
      this.changeStep(1);
      this.resetImages();
    },
    create() {
      this.createTenderAsync(this.tender).then(() => this.resetForm());
    },
    edit() {
      this.updateTenderAsync(this.tender).then(() => this.resetForm());
    },
  },
  created() {
    console.log(this.$store.state);

    this.isEditPage();
  },
};
export default TenderModifyMixin;

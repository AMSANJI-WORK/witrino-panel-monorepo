import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

import Types from "@applets/polotik/tender/store/modules/root/types";
import TenderStepOne from "@applets/polotik/tender/components/Stepper/Content/Step1.vue";
import TenderStepTwo from "@applets/polotik/tender/components/Stepper/Content/Step2.vue";
import TenderStepThree from "@applets/polotik/tender/components/Stepper/Content/Step3.vue";
import TenderStepFour from "@applets/polotik/tender/components/Stepper/Content/Step4.vue";
import TenderStepFive from "@applets/polotik/tender/components/Stepper/Content/Step5.vue";
import TenderPreviewContent from "@applets/polotik/tender/components/PreviewContent/index.vue";
import TenderStepperHeader from "@applets/polotik/tender/components/Stepper/Header.vue";
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
    ...mapGetters("tender", ["item", "step"]),
    ...mapGetters("upload", { uploadedImages: "successUploadedImages" }),
    ...mapState({
      formLoading: (state) => state.formLoading,
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
    ...mapActions("tender", {
      createTenderAsync: `${Types.CREATE_ASYNC}`,
      updateTenderAsync: `${Types.UPDATE_ASYNC}`,
      getATenderAsync: `${Types.GET_ONE_ASYNC}`,
    }),
    ...mapMutations("upload", {
      addUploadedImages: `ADD_IMAGE`,
      resetImages: `REST_IMAGES`,
    }),
    ...mapMutations("tender", {
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
        this.getATenderAsync(this.tenderId);
    },
    submitFormAction() {
      if (this.$route.path.includes("edit")) return this.edit();
      return this.create();
    },
    submit() {
      this.submitFormAction();
    },
    resetForm() {
      this.$router.push("/tender");
      this.changeStep(1);
    },
    create() {
      this.createTenderAsync(this.item).then(() => this.resetForm());
    },
    edit() {
      this.updateTenderAsync(this.item).then(() => this.resetForm());
    },
  },
  created() {
    this.isEditPage();
  },
};
export default TenderModifyMixin;

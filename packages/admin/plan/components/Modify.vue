<template>
  <v-sheet class="transparent">
    <v-stepper
      alt-labels
      v-model="step"
      class="elevation-6 rounded-lg mx-2 d-md-block d-none"
      color="#187968"
    >
      <StepperHeaderTitle :page-title="modifyPageTitle" />
      <StepperHeader />

      <v-stepper-items>
        <v-stepper-content step="1">
          <form-plan-info>
            <template #form-action="{ validate }">
              <v-sheet class="d-flex">
                <v-spacer></v-spacer>
                <ButtonNext :submit="validate" />
              </v-sheet>
            </template>
          </form-plan-info>
        </v-stepper-content>
        <v-stepper-content step="2">
          <v-form ref="plan-detail"> </v-form>
        </v-stepper-content>
        <v-stepper-content step="3">
          <v-card
            elevation="0"
            class="my-md-12 my-4 mx-sm-5 mx-0 px-1 px-md-auto"
          >
          </v-card>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
    <v-stepper
      v-model="step"
      vertical
      class="d-block d-md-none mx-2 rounded-lg"
    >
      <v-stepper-step
        class="font-weight-medium pr-3"
        :complete="step > 1"
        step="1"
      >
        اطلاعات پلن
      </v-stepper-step>

      <v-stepper-content step="1" class="mr-3 pl-5 pr-2">
        <form-plan-info>
          <template #form-action="{ validate }">
            <v-sheet class="d-flex">
              <v-spacer></v-spacer>
              <ButtonNext :submit="validate" />
            </v-sheet>
          </template>
        </form-plan-info>
      </v-stepper-content>
      <v-stepper-step class="font-weight-medium pr-3" :complete="step > 2" step="2">
        اطلاعات سرویس ها
      </v-stepper-step>

      <v-stepper-content step="2" class="mr-3 pl-5 pr-2"> </v-stepper-content>

      <v-stepper-step class="font-weight-medium pr-3" step="3">
        ثبت نهایی</v-stepper-step
      >
      <v-stepper-content step="3" class="mr-3 pl-5 pr-2">
        <v-card
          elevation="0"
          class="my-md-12 my-4 mx-sm-5 mx-0 px-1 px-md-auto"
        >
        </v-card>
      </v-stepper-content>
    </v-stepper>
  </v-sheet>
</template>

<script>
import StepperHeader from "./Stepper/Header.vue";
import StepperHeaderTitle from "./Stepper/HeaderTitle.vue";
import FormPlanInfo from "./Stepper/Forms/PlanInfo.vue";
import FormPlanDetail from "./Stepper/Forms/PlanDetail.vue";
import ButtonNext from "./Stepper/ButtonNext.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    ButtonNext,
    FormPlanInfo,
    FormPlanDetail,
    StepperHeader,
    StepperHeaderTitle,
  },
  computed: {
    ...mapGetters("shared/stepper", ["step"]),
    modifyPageTitle() {
      return this.$router.currentRoute.path.includes("edit")
        ? "ویرایش پلن"
        : "افزودن پلن";
    },
  },
  methods: {},
  created() {
    this.$store.dispatch("admin/service/get/GET_ALL_SERVICE_ASYNC");
  },
};
</script>
<style lang="scss" scoped>
@media only screen and (min-width: 900px) {
  .v-stepper__content {
    top: 0;
    padding: 0px 24px 16px;
    flex: 1 0 auto;
    width: 100%;
  }
}
@media only screen and (max-width: 900px) {
  .v-stepper__content {
    top: 0;
    padding: 0px 10px 5px;
    flex: 1 0 auto;
    width: 100%;
  }
}

.v-text-field--outlined > .v-input__control > .v-input__slot {
  background: #fff;
  border-radius: 8px;
}
.v-stepper--alt-labels .v-stepper__header {
  height: auto;
}
:deep(.v-input--is-focused .v-input__slot) {
  background: #fff !important;
}
:deep(.v-text-field--outlined > .v-input__control > .v-input__slot) {
  background: #f6f6f6;
  font-size: 13px;
}
</style>

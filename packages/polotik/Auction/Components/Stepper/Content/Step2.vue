<template>
  <v-form
    @submit.prevent="submit"
    ref="conditions"
    class="my-md-12 my-4 d-flex flex-wrap"
  >
    <v-col cols="12" sm="6">
      <v-text-field
        dense
        persistent-hint
        suffix="تومان"
        :hint="formData.guaranteePrice | numberToStringFa"
        :value="formData.guaranteePrice | toRial"
        @input="(value) => (formData.guaranteePrice = value)"
        :loading="fromLoading"
        outlined
        :rules="[rules.required]"
        label="مبلغ ضمانت"
      ></v-text-field>
    </v-col>
    <v-col cols="12" sm="6">
      <v-select
        dense
        multiple
        small-chips
        outlined
        label="نوع ضمانت"
        v-model="formData.guaranteeType"
        :loading="fromLoading"
        :rules="[rules.required]"
        :items="['سند', 'چک', 'اوراق بهادار', 'طلا']"
      ></v-select>
    </v-col>
    <v-col cols="12" sm="6">
      <v-text-field
        @input="(value) => (formData.docsPrice = value)"
        :value="formData.docsPrice | toRial"
        :hint="formData.docsPrice | numberToStringFa"
        :readonly="formData.isDocsFree"
        persistent-hint
        suffix="تومان"
        outlined
        dense
        :loading="fromLoading"
      >
        <!--  -->
        <template v-slot:label>
          <v-row class="px-1">
            <v-col> <span>مبلغ اسناد / رایگان</span> </v-col>
            <v-spacer>
              <v-switch
                class="my-1 py-2"
                dense
                hide-details
                v-model="formData.isDocsFree"
              ></v-switch>
            </v-spacer>
          </v-row>
        </template>
      </v-text-field>
    </v-col>

    <v-col cols="12" sm="6">
      <v-textarea
        dense
        outlined
        auto-grow
        row-height="1"
        v-model="formData.docsCollectType"
        :loading="fromLoading"
        :rules="[rules.required]"
        label="نحوه تهیه اسناد"
      ></v-textarea>
    </v-col>
    <v-col cols="12">
      <v-switch
        dense
        class="mt-0"
        hide-details
        v-model="formData.isRealPersonParticipate"
        label="امکان ثبت نام افراد حقیقی"
      ></v-switch
    ></v-col>
    <v-col cols="12">
      <v-textarea
        dense
        outlined
        label="شرایط متقاضی"
        :rules="[rules.required]"
        v-model="formData.askerInformation"
        :loading="fromLoading"
        placeholder="شرایط متقاضی (توضیحات)"
      >
      </v-textarea>
    </v-col>
    <v-field-space styleClass="my-sm-4 d-md-block d-none" />
    <v-stepper-level-btn
      :next="3"
      :back="1"
      :form-refrence="$refs.conditions"
      @formValidated="submit"
    />
  </v-form>
</template>

<script>
import FormMixin from "@polotik/mixins/base/form";
import UtilityMixin from "@polotik/mixins/utility";
import StepperMixin from "@packages/polotik/Auction/Mixins/stepper";
import VFieldSpace from "@polotik/components/Reusable/VFieldSpace.vue";
import VStepperLevelBtn from "@polotik/components/Reusable/VStepperLevelBtn.vue";

export default {
  components: {
    VFieldSpace,
    VStepperLevelBtn,
  },
  mixins: [FormMixin, StepperMixin, UtilityMixin],
  data: () => ({
    formData: {
      askerInformation: null,
      isDocsFree: false,
      guaranteePrice: null,
      guaranteeType: null,
      docsCollectType: null,
      docsPrice: null,
      isRealPersonParticipate: false,
    },
  }),
  watch: {
    "formData.isDocsFree": function (newValue) {
      if (newValue)
        Promise.resolve().then(() => {
          this.formData.docsPrice = null;
        });
    },
  },
  methods: {
    setData() {
      const {
        data: {
          conditions: { docs, askerInfo, guarantee, participateRealPerson },
        },
      } = this.dataSource;
      this.formData.docsPrice = docs.price;
      this.formData.isDocsFree = docs.isFree;
      this.formData.askerInformation = askerInfo;
      this.formData.docsCollectType = docs.collectType;
      this.formData.guaranteeType = guarantee.type;
      this.formData.guaranteePrice = guarantee.price;
      this.formData.isRealPersonParticipate = participateRealPerson;
    },

    submit() {
      this.$emit("stepTwoComplete", this.formData);
    },
  },
};
</script>

<style lang="scss" scoped></style>

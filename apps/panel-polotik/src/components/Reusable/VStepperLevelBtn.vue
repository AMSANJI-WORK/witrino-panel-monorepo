<template>
  <v-col cols="12" class="d-flex flex-row-reverse mb-2">
    <v-btn
      rounded
      small
      v-if="!nextBtnFunction"
      color="primary"
      @click="validateForm"
    >
      <span class="px-4 d-md-block d-none">مرحله بعد</span>
      <span class="d-block d-md-none">بعد</span>
      <v-icon class="mx-1 d-block d-md-none" small>mdi-arrow-left</v-icon>
    </v-btn>
    <v-btn
      rounded
      small
      v-else
      class="white--text"
      :color="nextBtnColor"
      :loading="nextBtnLoading"
      @click="nextBtnFunction"
    >
      <span class="px-4 d-md-block d-none">{{ nextBtnText }}</span>
      <v-icon class="mx-1 d-block d-md-none" small>{{
        submitBtnIconResposive
      }}</v-icon>
    </v-btn>
    <v-btn
      class="grey white--text mx-2"
      rounded
      small
      v-if="showBackBtn"
      @click="changeStep(back)"
    >
      <span class="px-4 d-md-block d-none">مرحله قبل</span>
      <span class="d-block d-md-none">قبل</span>
      <v-icon class="mx-1 d-block d-md-none" small>mdi-arrow-right</v-icon>
    </v-btn>
  </v-col>
</template>

<script>
export default {
  props: {
    next: Number,
    back: Number,
    nextBtnFunction: Function,
    formRefrence: Object,
    nextBtnText: {
      type: String,
      default: "مرحله بعد",
    },
    nextBtnColor: {
      type: String,
      default: "primary",
    },
    nextBtnLoading: {
      type: Boolean,
      default: false,
    },
    showBackBtn: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    submitBtnIconResposive() {
      return this.$route.path.includes("edit")
        ? "mdi-pencil"
        : "mdi-check-bold";
    },
    pageRoute() {
      return this.$route.path;
    },
  },
  methods: {
    changeStep(step) {
      if (this.pageRoute.includes("tender"))
        return this.$store.commit("guilds/tender/CHANGE_STEP", step);
      return this.$store.commit("guilds/auction/CHANGE_STEP", step);
    },
    validateForm() {
      if (this.formRefrence.validate()) {
        this.changeStep(this.next);
        this.$emit("formValidated");
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>

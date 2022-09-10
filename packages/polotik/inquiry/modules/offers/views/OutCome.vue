<template>
  <v-sheet class="transparent">
    <OutCome />
  </v-sheet>
</template>

<script>
import { mapActions } from "vuex";
import { GET_ONE_INQUIRY_ASYNC } from "@packages/polotik/inquiry/store/get/types";
import OutCome from "@packages/polotik/inquiry/modules/offers/components/OutCome/index.vue";
export default {
  components: {
    OutCome,
  },
  methods: {
    ...mapActions("guilds/inquiry", {
      getAnInquiryAsync: GET_ONE_INQUIRY_ASYNC,
    }),
  },
  created() {
    this.getAnInquiryAsync(this.$route.params.id);
  },
};
</script>

<style lang="scss" scoped></style>

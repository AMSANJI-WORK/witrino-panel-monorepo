<template>
  <v-sheet class="transparent">
    <OutCome />
  </v-sheet>
</template>

<script>
import { mapActions } from "vuex";
import { GET_A_TENDER_ASYNC } from "@packages/polotik/tender/store/get/types";
import OutCome from "@packages/polotik/tender/modules/offers/components/OutCome/index.vue";
export default {
  components: {
    OutCome,
  },
  methods: {
    ...mapActions("guilds/tender", {
      getAnTender: GET_A_TENDER_ASYNC,
    }),
  },
  created() {
    this.getAnTender(this.$route.params.id);
  },
};
</script>

<style lang="scss" scoped></style>

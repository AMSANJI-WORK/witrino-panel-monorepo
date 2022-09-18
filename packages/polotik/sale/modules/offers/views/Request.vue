<template>
  <v-sheet class="transparent">
    <Requset />
  </v-sheet>
</template>

<script>
import Requset from "@packages/polotik/sale/modules/offers/components/Requset/index.vue";
import { GET_ONE_SALE_ASYNC } from "@packages/polotik/sale/store/get/types";
import { mapActions } from "vuex";
export default {
  components: {
    Requset,
  },
  methods: {
    ...mapActions("sale", {
      getAllSaleAsync: GET_ONE_SALE_ASYNC,
    }),
  },
  created() {
    this.getAllSaleAsync(this.$route.params.id);
  },
};
</script>

<style lang="scss" scoped></style>

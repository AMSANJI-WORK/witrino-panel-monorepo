<template>
  <v-sheet class="transparent">
    <Requset />
  </v-sheet>
</template>

<script>
import Requset from "@packages/polotik/Sale/Components/Requset/index.vue";
import { GET_A_SALE_ASYNC } from "@packages/polotik/Sale/Store/get/types";
import { mapActions } from "vuex";
export default {
  components: {
    Requset,
  },
  methods: {
    ...mapActions("guilds/sale", {
      getAllSaleAsync: GET_A_SALE_ASYNC,
    }),
  },
  created() {
    this.getAllSaleAsync(this.$route.params.id);
  },
};
</script>

<style lang="scss" scoped></style>

<template>
  <v-sheet class="transparent">
    <OutCome />
  </v-sheet>
</template>

<script>
import { mapActions } from "vuex";
import { GET_ONE_BARTER_ASYNC } from "@packages/polotik/barter/store/get/types";
import OutCome from "@packages/polotik/barter/modules/offers/components/OutCome/index.vue";
export default {
  components: {
    OutCome,
  },
  methods: {
    ...mapActions("guilds/barter", {
      getABarterAsync: GET_ONE_BARTER_ASYNC,
    }),
  },
  created() {
    this.getABarterAsync(this.$route.params.id);
  },
};
</script>

<style lang="scss" scoped></style>

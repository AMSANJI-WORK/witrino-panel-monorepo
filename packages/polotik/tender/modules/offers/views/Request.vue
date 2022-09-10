<template>
  <v-sheet class="transparent">
    <Requset />
  </v-sheet>
</template>

<script>
import Requset from "@packages/polotik/tender/modules/offers/components/Requset/index.vue";
import { GET_ONE_TENDER_ASYNC } from "@packages/polotik/tender/store/get/types";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    Requset,
  },
  computed: {
    ...mapGetters("guilds/tender/request", ["pagination"]),
  },
  methods: {
    ...mapActions("guilds/tender", {
      getATender: GET_ONE_TENDER_ASYNC,
    }),
  },
  created() {
    this.getATender(this.$route.params.id);
  },
};
</script>

<style lang="scss" scoped></style>

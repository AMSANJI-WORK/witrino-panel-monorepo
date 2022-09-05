<template>
  <v-sheet class="transparent">
    <Requset />
  </v-sheet>
</template>

<script>
import Requset from "@packages/polotik/barter/modules/offers/components/Requset/index.vue";
import { GET_A_BARTER_ASYNC } from "@packages/polotik/barter/store/get/types";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    Requset,
  },
  computed: {
    ...mapGetters("guilds/barter/request", ["pagination"]),
  },
  methods: {
    ...mapActions("guilds/barter", {
      getABarterAsync: GET_A_BARTER_ASYNC,
    }),
  },
  created() {
    this.getABarterAsync(this.$route.params.id);
  },
};
</script>

<style lang="scss" scoped></style>

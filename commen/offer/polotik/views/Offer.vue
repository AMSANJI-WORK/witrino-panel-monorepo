<template>
  <v-sheet class="transparent">
    <OfferPage />
  </v-sheet>
</template>

<script>
import OfferPage from "../components/page.vue";
export default {
  components: {
    OfferPage,
  },
  computed: {
    activeService() {
      return this.$route.matched[1].path.slice(1);
    },
    activeServiceUpperCase() {
      return this.activeService.toUpperCase();
    },
  },
  methods: {
    requestGetOne() {
      this.$store.dispatch(
        `guilds/${this.activeService}/GET_ONE_${this.activeServiceUpperCase}_ASYNC`,
        this.$route.params.id
      );
    },
  },
  created() {
    this.requestGetOne();
  },
};
</script>

<style lang="scss" scoped></style>

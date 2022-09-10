<template>
  <v-sheet class="transparent">
    <Requset />
  </v-sheet>
</template>

<script>
import Requset from "@packages/polotik/inquiry/modules/offers/components/Requset/index.vue";
import { GET_ONE_INQUIRY_ASYNC } from "@packages/polotik/inquiry/store/get/types";
import { mapActions } from "vuex";
export default {
  components: {
    Requset,
  },
  computed: {},
  methods: {
    ...mapActions("guilds/inquiry", {
      getAnInquiry: GET_ONE_INQUIRY_ASYNC,
    }),
  },
  created() {
    this.getAnInquiry(this.$route.params.id);
  },
};
</script>

<style lang="scss" scoped></style>

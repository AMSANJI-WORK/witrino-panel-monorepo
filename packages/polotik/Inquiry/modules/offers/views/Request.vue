<template>
  <v-sheet class="transparent">
    <Requset />
    <div class="d-flex pa-2 mt-2">
      <v-spacer></v-spacer>
      <v-pagination
        v-model="pagination.page"
        :length="pagination.lastPage"
        :total-visible="6"
      ></v-pagination>
      <v-spacer></v-spacer>
      <div class="my-auto grey--text font-weight-thin">
        تعداد : {{ pagination.recordCount }}
      </div>
    </div>
  </v-sheet>
</template>

<script>
import Requset from "@packages/polotik/auction/modules/offers/components/Requset/index.vue";
import { GET_AN_INQUIRY_ASYNC } from "@packages/polotik/inquiry/store/get/types";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    Requset,
  },
  computed: {
    ...mapGetters("guilds/auction/request", ["pagination"]),
  },
  methods: {
    ...mapActions("guilds/auction", {
      getAnInquiry: GET_AN_INQUIRY_ASYNC,
    }),
  },
  created() {
    this.getAnInquiry(this.$route.params.id);
  },
};
</script>

<style lang="scss" scoped></style>

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
import { mapActions, mapGetters } from "vuex";
import Requset from "@polotik/modules/Inquiry/Components/Requset/index.vue";
import { GET_AN_INQUIRY_ASYNC } from "@polotik/modules/Inquiry/Store/get/types";
export default {
  components: {
    Requset,
  },
  computed: {
    ...mapGetters("guilds/inquiry/request", ["pagination"]),
  },
  methods: {
    ...mapActions("guilds/inquiry", {
      getAnInquiry: GET_AN_INQUIRY_ASYNC,
    }),
  },
  created() {
    this.getAnInquiry(this.$route.params.id);
  },
};
</script>

<style lang="scss" scoped></style>

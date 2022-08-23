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
import Requset from "@packages/polotik/Tender/Components/Requset/index.vue";
import { GET_A_TENDER_ASYNC } from "@packages/polotik/Tender/Store/get/types";
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
      getATenderAsync: GET_A_TENDER_ASYNC,
    }),
  },
  created() {
    this.getATenderAsync(this.$route.params.id);
  },
};
</script>

<style lang="scss" scoped></style>

<template>
  <v-card elevation="0" class="transparent">
    <v-card-subtitle class="d-flex flex-wrap">
      <v-col cols="12" sm="6" md="4" class="px-0 py-0">
        <VLabel
          class="black--text"
          label="تاریخ شروع"
          :label-value="barter.start | convertTodateFa"
        />
      </v-col>
      <v-col cols="12" sm="6" md="4" class="px-0 py-0">
        <VLabel
          class="black--text"
          label="تاریخ پایان"
          :label-value="barter.end | convertTodateFa"
        />
      </v-col>
    </v-card-subtitle>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
import moment from "moment-jalaali";
import VLabel from "@commen/label/components/Label.vue";
export default {
  components: {
    VLabel,
  },
  computed: {
    ...mapGetters("guilds/barter", ["barter"]),
  },
  filters: {
    convertTodateFa(value) {
      return moment(value).format("jDD  jMMMM  jYYYY");
    },
  },
};
</script>

<style lang="scss" scoped></style>

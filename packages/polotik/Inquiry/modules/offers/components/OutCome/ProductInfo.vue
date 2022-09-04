<template>
  <v-card elevation="0" class="transparent">
    <v-card-subtitle class="d-flex flex-wrap py-0">
      <v-col cols="12" sm="6" md="4" class="px-0 py-0">
        <v-label
          class="black--text"
          label="تاریخ شروع"
          :label-value="inquiry.start | convertTodateFa"
        />
      </v-col>
      <v-col cols="12" sm="6" md="4" class="px-0 py-0">
        <v-label
          class="black--text"
          label="تاریخ پایان"
          :label-value="inquiry.end | convertTodateFa"
        />
      </v-col>
      <v-col cols="12" sm="6" md="4" class="px-0 py-0">
        <v-label class="black--text" label="دسته بندی" />
        <v-chip
          v-for="(category, index) in inquiry.data.category"
          :key="index"
          x-small
          >{{ category.name }}</v-chip
        >
      </v-col>
    </v-card-subtitle>
    <v-card-text class="mb-5 mt-2">
      <v-card-subtitle class="px-0 pt-0 black--text">توضیح </v-card-subtitle>
      {{ inquiry.description }}
    </v-card-text>
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
    ...mapGetters("guilds/inquiry", ["inquiry"]),
  },
  filters: {
    convertTodateFa(value) {
      return moment(value).format("jDD  jMMMM  jYYYY");
    },
  },
};
</script>

<style lang="scss" scoped></style>

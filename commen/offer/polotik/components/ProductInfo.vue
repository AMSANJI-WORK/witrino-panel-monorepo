<template>
  <v-card elevation="0" class="transparent">
    <v-card-subtitle class="d-flex flex-wrap">
      <v-col cols="12" sm="6" md="4" class="px-0 py-0">
        <VLabel
          class="black--text"
          label="تاریخ شروع"
          :label-value="dateStart | convertTodateFa"
        />
      </v-col>
      <v-col cols="12" sm="6" md="4" class="px-0 py-0">
        <VLabel
          class="black--text"
          label="تاریخ پایان"
          :label-value="dateEnd | convertTodateFa"
        />
      </v-col>
      <v-col cols="12" sm="6" md="4" class="px-0 py-0">
        <VLabel class="black--text" label="دسته بندی" />
        <v-chip
          v-for="(category, index) in dataSource.data.category"
          :key="index"
          x-small
          >{{ category.name }}</v-chip
        >
      </v-col>
    </v-card-subtitle>
  </v-card>
</template>

<script>
import moment from "moment-jalaali";
import VLabel from "@commen/label/components/Label.vue";
export default {
  props: {
    dateStart: String,
    dateEnd: String,
  },
  components: {
    VLabel,
  },
  computed: {
    activeService() {
      return this.$route.matched[1].path.slice(1);
    },
    dataSource() {
      return this.$store.getters[
        `guilds/${this.activeService}/${this.activeService}`
      ];
    },
  },
  filters: {
    convertTodateFa(value) {
      return moment(value).format("jDD  jMMMM  jYYYY");
    },
  },
};
</script>

<style lang="scss" scoped></style>

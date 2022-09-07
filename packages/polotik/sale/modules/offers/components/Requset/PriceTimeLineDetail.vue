<template>
  <v-sheet class="transparent" elevation="0">
    <v-card-title class="py-0 text-caption">
      <v-spacer></v-spacer>
      {{ user.requestDate | convertTodateFa }}
    </v-card-title>
    <v-card elevation="1" class="rounded-pill">
      <v-card-title>
        <v-sheet>
          <p class="font-weight-bold text-subtitle-2">{{ userName }}</p>
          <p class="text-caption">{{ user.requestDate | getHour }}</p>
        </v-sheet>
        <v-spacer></v-spacer>
        <p class="font-weight-bold text-subtitle-2">
          {{ user.price | toRial }} تومان
        </p>
      </v-card-title>
    </v-card>
  </v-sheet>
</template>

<script>
import moment from "moment-jalaali";
import UtilityMixin from "@shared/mixins/utility";
import RequestMixin from "@packages/polotik/sale/modules/offers/mixins/request";
export default {
  mixins: [RequestMixin, UtilityMixin],
  filters: {
    convertTodateFa(value) {
      return moment(value).format("jDD jMMMM  jYYYY");
    },
    getHour(value) {
      return moment(value).format("HH:MM:SS");
    },
  },
  computed: {
    userName() {
      return `پیشنهاد ${this.user.name}`;
    },
  },
};
</script>

<style lang="scss" scoped></style>

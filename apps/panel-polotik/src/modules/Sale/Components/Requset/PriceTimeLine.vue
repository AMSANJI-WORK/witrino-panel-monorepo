<template>
  <v-timeline v-if="$vuetify.breakpoint.xs" dense>
    <v-timeline-item v-for="n in 4" :key="n" large>
      <template v-slot:icon>
        <v-avatar>
          <img src="https://i.pravatar.cc/64" />
        </v-avatar>
      </template>
      <PriceTimeLineDetail />
    </v-timeline-item>
  </v-timeline>
  <v-timeline v-else>
    <v-timeline-item v-for="n in 4" :key="n" large>
      <template v-slot:icon>
        <v-avatar>
          <img :src="user.image" />
        </v-avatar>
      </template>
      <PriceTimeLineDetail />
    </v-timeline-item>
  </v-timeline>
</template>
<script>
import moment from "moment-jalaali";
import PriceTimeLineDetail from "./PriceTimeLineDetail.vue";
import RequestMixin from "@polotik/modules/Sale/Mixins/request";
export default {
  components: {
    PriceTimeLineDetail,
  },
  mixins: [RequestMixin],
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

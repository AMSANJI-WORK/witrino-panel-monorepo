<template>
  <v-badge overlap color="#339987" content="0" class="font-weight-medium">
    <v-chip
      :ripple="false"
      color="white"
      @click="openDialog"
      class="mx-1 cursor-pointer"
    >
      <component :is="MassageIcon"></component>
    </v-chip>
    <v-dialog v-model="dialog" max-width="700">
      <v-card>
        <v-card-title class="grey lighten-2 font-weight-bold">
          درخواست های ارسالی
        </v-card-title>
        <v-card-subtitle class="my-4 py-0">
          این قسمت به صورت تستی فعال می باشد
        </v-card-subtitle>
        <v-card-text class="pa-2"> </v-card-text>
      </v-card>
    </v-dialog>
  </v-badge>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Types from "@polotik/store/modules/guilds/services/offer/types";
export default {
  components: {},
  props: {
    productId: [Number, String],
  },
  data: () => ({
    dialog: false,
    MassageIcon: () => import("@polotik/components/Icons/Massage.vue"),
  }),
  computed: {
    ...mapGetters(`${Types.RESOURCE}`, ["offers", "offer"]),
    serviceName() {
      let routeCurrentPath = this.$route.path;
      if (routeCurrentPath.includes("auction")) return "auction";
      else if (routeCurrentPath.includes("barter")) return "barter";
      else if (routeCurrentPath.includes("tender")) return "tender";
      else return "inquiry";
    },
  },
  methods: {
    ...mapActions({
      getAllOfferAsync: `${Types.RESOURCE}/${Types.GET_ALL_OFFER_ASYNC}`,
    }),
    openDialog() {
      this.dialog = true;
      this.getAllOfferAsync({ target: this.serviceName, id: this.productId });
    },
  },
};
</script>

<style lang="scss" scoped></style>

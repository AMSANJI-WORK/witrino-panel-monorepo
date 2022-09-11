<template>
  <v-item-group multiple>
    <v-col v-for="(offer, index) in List" :key="offer.id" cols="12">
      <v-item>
        <v-card elevation="0">
          <v-card-subtitle
            class="d-flex flex-wrap align-center justify-space-between py-0"
          >
            <h4 class="mx-4 my-2">
              {{ setOfferTitle(offer.title, index) }}
            </h4>
            {{ offer.time | convertTodateFa }}
          </v-card-subtitle>

          <v-card-subtitle
            class="d-flex flex-wrap align-center justify-md-space-between justify-center p-green-lighten-1 rounded-t-xl"
          >
            <v-sheet class="d-flex transparent align-center">
              <v-avatar size="60" color="grey lighten-2">
                <img :src="offer.user_data.image" alt="alt" />
              </v-avatar>
              <h5 class="mx-4">{{ offer.user_data.name }}</h5>
            </v-sheet>
            <VLabel label="شماره همراه" :label-value="offer.user_data.mobile" />

            <v-chip
              v-if="offer?.price"
              class="white--text blue darken-2 font-weight-bold"
            >
              قیمت {{ offer.price | toRial }} تومان
            </v-chip>
          </v-card-subtitle>
          <v-card-text class="p-green-lighten-2 rounded-b-lg">
            <v-sheet class="transparent px-3 pt-5 text-caption"
              >{{ offer.description }}
              <br />
            </v-sheet>
            <v-sheet class="transparent pa-3 d-flex flex-wrap align-center">
              <v-col class="d-flex flex-wrap justify-sm-start justify-center">
                <v-avatar
                  class="rounded-lg mx-1 my-1 transparent"
                  v-for="(image, index) in offer.data?.gallery"
                  :key="index"
                  size="60"
                  tile
                >
                  <img
                    class="transparent"
                    :src="image.src | getImage"
                    :alt="image?.name"
                  />
                </v-avatar>
              </v-col>
              <v-col
                class="pb-0 d-flex justify-end"
                v-if="!isCurrentUser(offer)"
              >
                <v-btn
                  color="primary"
                  class="rounded-lg"
                  @click="redirectToSellerProfile(offer.user_data.site)"
                  >{{ "صفحه" + ` ${offer.user_data.name}` }}
                  <v-icon right>mdi-arrow-left</v-icon>
                </v-btn>
              </v-col>
            </v-sheet>
          </v-card-text>
        </v-card>
      </v-item>
    </v-col>
  </v-item-group>
</template>

<script>
import moment from "moment-jalaali";
import Cookies from "js-cookie";
import UtilityMixin from "@shared/mixins/utility";
import VLabel from "@commen/label/components/Label.vue";
export default {
  mixins: [UtilityMixin],
  components: {
    VLabel,
  },
  filters: {
    convertTodateFa(value) {
      return moment(value).format("HH:mm | jYYYY/jMM/jDD");
    },
    getImage(value) {
      return import.meta.env.VITE_BASE_URL + value;
    },
  },
  computed: {
    activeService() {
      return this.$route.matched[1].path.slice(1);
    },
    listOfferType() {
      return this.$route.path.includes("request") ? "offers" : "userOffers";
    },
    List() {
      return this.$store.getters[
        `guilds/${this.activeService}/request/${this.listOfferType}`
      ];
    },
  },
  methods: {
    setOfferTitle(title, offerIdx) {
      if (this.$route.path.includes("outcome")) return "پیشنهاد شما";
      if (title == "تست") return `پیشنهاد ${offerIdx + 1}`;
      return title;
    },
    redirectToSellerProfile(url) {
      window.location.href = url;
    },
    isCurrentUser(offer) {
      return Cookies.get("user-id") == offer.user_data.id;
    },
  },
};
</script>

<style lang="scss" scoped></style>

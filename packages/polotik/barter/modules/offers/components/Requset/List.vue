<template>
  <v-item-group v-model="selected" multiple>
    <v-col v-for="(offer, index) in offers" :key="offer.id" cols="12">
      <v-item v-slot="{ active, toggle }">
        <v-card elevation="0">
          <v-card-subtitle
            class="d-flex flex-wrap align-center justify-space-between py-0"
          >
            <h4 class="mx-4 my-2">{{ "پیشنهاد " }} {{ index + 1 }}</h4>
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
            <v-label
              label="شماره همراه"
              :label-value="offer.user_data.mobile"
            />
          </v-card-subtitle>
          <v-card-text class="p-green-lighten-2 rounded-lg">
            <v-sheet class="transparent px-3 pt-5 text-caption"
              >{{ offer.description }}
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
                    :alt="image.name"
                  />
                </v-avatar>
              </v-col>
              <v-col class="pb-0 d-flex justify-end">
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
import { mapGetters } from "vuex";
import moment from "moment-jalaali";
import UtilityMixin from "@shared/mixins/utility";
import VLabel from "@commen/label/components/Label.vue";
import RequestMixin from "@packages/polotik/barter/modules/offers/mixins/request";
export default {
  mixins: [UtilityMixin, RequestMixin],
  components: {
    VLabel,
  },
  data() {
    return {
      selected: [],
    };
  },
  watch: {
    selected(newValue) {},
  },
  filters: {
    convertTodateFa(value) {
      return moment(value).format("HH:mm | jYYYY/jMM/jDD");
    },
    getImage(value) {
      return import.meta.env.VITE_BASE_URL + value;
    },
  },
  methods: {
    rejectOffer(ID) {},
    resolveOffer(ID) {},
    redirectToSellerProfile(url) {
      window.location.href = url;
    },
  },
  computed: {
    ...mapGetters("guilds/barter/request", ["offers"]),
  },
};
</script>

<style lang="scss" scoped></style>

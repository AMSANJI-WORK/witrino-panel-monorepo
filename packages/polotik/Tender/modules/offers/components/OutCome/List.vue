<template>
  <v-item-group>
    <v-col v-for="(offer, index) in userOffers" :key="offer.id" cols="12">
      <v-item>
        <v-card elevation="0">
          <h4 class="mx-4 my-2 font-weight-regular">
            {{ offer.title }} {{ index + 1 }}
          </h4>
          <v-card-subtitle
            class="d-flex flex-wrap align-center justify-md-space-around justify-center green-lighten-5 rounded-t-xl"
          >
            <v-sheet class="d-flex transparent align-center">
              <v-avatar size="60" color="grey lighten-2">
                <!-- <img src="" alt="alt" /> -->
              </v-avatar>
              <h5 class="mx-4">{{ user.name }}</h5>
            </v-sheet>
            <v-label label="شماره همراه" :label-value="offer.data.phone" />
            <v-label
              label="تاریخ ثبت درخواست"
              :label-value="offer.time | convertTodateFa"
            />
            <v-chip class="white--text blue darken-2 font-weight-bold">
              قیمت {{ offer.price | toRial }} تومان
            </v-chip>
          </v-card-subtitle>
          <v-card-text class="green-lighten-6 rounded-lg">
            <v-sheet class="transparent px-3 pt-5 text-caption"
              >{{ offer.description }}
            </v-sheet>
            <v-sheet class="transparent pa-3 d-flex flex-wrap align-center">
              <v-col
                class="d-flex flex-wrap justify-sm-start justify-center py-0"
              >
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
              <v-col class="py-0 pl-0">
                <v-card-actions class="justify-sm-end justify-center py-0">
                  <v-chip
                    class="rounded-xl font-weight-bold text-caption"
                    :color="chipColor(offer.status)"
                    text-color="white"
                    >{{ offer.status | statusToFa }}
                  </v-chip>
                </v-card-actions>
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
import RequestMixin from "@packages/polotik/tender/modules/offers/mixins/request";
export default {
  mixins: [UtilityMixin, RequestMixin],
  components: {
    VLabel,
  },
  filters: {
    convertTodateFa(value) {
      return moment(value).format("jYYYY/jMM/jDD HH:mm");
    },
    statusToFa(value) {
      if (value == 1) return "درحال بررسی";
      if (value == 2) return "دیده نشده";
      return "رد شده";
    },
    getImage(value) {
      return import.meta.env.VITE_BASE_URL + value;
    },
  },
  computed: {
    ...mapGetters("guilds/tender/request", ["userOffers"]),
  },
  methods: {
    chipColor(value) {
      if (value == 1) return "green accent-4";
      else if (value == 2) return "primary";
      return "red accent-4";
    },
  },
};
</script>

<style lang="scss" scoped></style>

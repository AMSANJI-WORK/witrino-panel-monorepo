<template>
  <v-card class="rounded-lg mx-2">
    <Header />
    <v-card-text class="grey lighten-2 pa-sm-7 pa-0">
      <v-sheet elevation="0" class="transparent px-sm-15">
        <PriceTimeLine />
      </v-sheet>
      <v-card-actions class="mt-5" v-if="showPrice">
        <v-text-field
          solo
          hide-details
          :value="input | toRial"
          @input="(value) => (input = value)"
          :hint="input | numberToStringFa"
          :rules="[priceRules]"
          suffix="تومان"
          label="ارسال قیمت"
          class="rounded-lg"
          placeholder="قیمت پیشنهادی را وارد نمایید ..."
        >
          <template v-slot:append>
            <v-btn class="mr-3" color="primary"> ارسال </v-btn>
          </template>
        </v-text-field>
      </v-card-actions>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
import Header from "./Header.vue";
import Cookies from "js-cookie";
import PriceTimeLine from "./PriceTimeLine.vue";
import UtilityMixin from "@shared/mixins/utility";
export default {
  mixins: [UtilityMixin],
  components: {
    Header,
    PriceTimeLine,
  },
  computed: {
    ...mapGetters("guilds/sale", ["sale"]),
    showPrice() {
      return this.sale.user_id != Cookies.get("user-id") ? true : false;
    },
    priceRules() {
      const { limited, priceType, present } = this.sale.data.price;
      if (limited) {
        if (priceType == "isPercent")
          return [
            (value) =>
              value <= value * (present.min / 100) ||
              "قیمت باید از حداقل افزایش تایین شده بیشتر باشد",
            (value) =>
              value >= value * (present.max / 100) ||
              "قیمت باید از حداکثر افزایش تایین شده کمتر باشد",
          ];
      }
      else return true;
    },
  },
  data: () => ({
    input: null,
  }),
};
</script>

<style lang="scss" scoped></style>

<template>
  <v-sheet class="transparent">
    <v-slide-x-transition>
      <PolotikDashBoardSkeleton v-show="skeletonLoading.dashboard" />
    </v-slide-x-transition>
    <v-slide-x-transition>
      <v-sheet class="transparent" v-show="!skeletonLoading.dashboard">
        <v-sheet
          class="d-flex flex-wrap justify-space-around align-self-stretch transparent"
        >
          <CardInfoDashboard
            v-for="(icon, index) in cards"
            :key="index"
            :data-source="icon"
          />
        </v-sheet>
        <notification>
          <template v-slot:cardTilte>
            <v-chip small class="white p-red-primary--text"
              ><v-icon color="p-red-primary"small class="mx-1">mdi-bell-outline</v-icon>
              جدیدترین اخبار ها</v-chip
            >
          </template>
          <!-- <template v-slot:cardTilteEnd>
        <v-tooltip right>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="p-green-primary"
              x-small
              v-on="on"
              v-bind="attrs"
              fab
              outlined
              :ripple="false"
              class="mx-2"
              ><v-icon color="green darken-1">mdi-chevron-right</v-icon></v-btn
            >
          </template>
          <span class="text-small font-weight-bold white--text">غیر فعال</span>
        </v-tooltip>
        <v-tooltip left>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="p-green-primary"
              x-small
              fab
              v-on="on"
              v-bind="attrs"
              outlined
              :ripple="false"
              ><v-icon color="green darken-1  ">mdi-chevron-left</v-icon></v-btn
            >
          </template>
          <span class="text-small font-weight-bold white--text">غیر فعال</span>
        </v-tooltip>
      </template> -->
          <template v-slot:cardSubTilte>
            <v-sheet class="transparent yellow--text"
              >فعال شدن امکان مناقصه
            </v-sheet>
          </template>
          <template v-slot:cardSubTilteEnd>
            <!-- <v-sheet class="transparent white--text">2 ساعت پیش</v-sheet> -->
          </template>
          <template v-slot:cardText>
            با فعالسازی امکان مناقصه، از این پس میتوانید با استفاده از این
            سامانه، اقدام به درج آگهی مناقصه کنید. با درج آگهی در این بخش،
            میتوانید آگهی خود را در معرض صاحبان اصناف، مشاغل و شرکت ها قرار داده
            و از این طریق تبادل اطلاعات کنید.
          </template>
        </notification>
        <v-sheet
          class="d-flex flex-wrap justify-space-around align-self-stretch transparent"
        >
          <facilities
            v-for="facility in FacilitiesData"
            :key="facility.number"
            :data-source="facility"
          />
        </v-sheet>
      </v-sheet>
    </v-slide-x-transition>
  </v-sheet>
</template>

<script>
import Cookies from "js-cookie";
import FacilitiesData from "@packages/polotik/Home/mock/facilities";
import Notification from "@commen/card/components/Notification.vue";
import CardInfoDashboard from "@commen/card/components/Dashboard.vue";
import Facilities from "@packages/polotik/Home/components/Facilities.vue";
import PolotikDashBoardSkeleton from "@commen/loading/modules/skeleton/components/Dashboard/Polotik.vue";
export default {
  components: {
    PolotikDashBoardSkeleton,
    CardInfoDashboard,
    Notification,
    Facilities,
  },
  data() {
    return {
      FacilitiesData,
      page: 1,
    };
  },
  computed: {
    userId() {
      return Cookies.get("user-id") ?? null;
    },
    token() {
      return Cookies.get("token") ?? null;
    },
    cards() {
      return this.$store.getters["home/cards"];
    },
    skeletonLoading() {
      return this.$store.getters["home/skeletonLoading/skeletonLoading"];
    },
  },
  methods: {
    checkToken() {
      if (!this.userId || !this.token) {
        return import.meta.env.DEV
          ? this.$router.push("/set-permission")
          : this.$router.push("/403");
      }
    },
    getCardData() {
      if (this.token) this.$store.dispatch("home/GET_DASHBOARD_DATA");
    },
  },
  created() {
    this.getCardData();
    this.checkToken();
  },
};
</script>

<style lang="scss" scoped></style>

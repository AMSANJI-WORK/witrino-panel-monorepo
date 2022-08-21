<template>
  <v-sheet class="transparent">
    <v-sheet
      class="d-flex flex-wrap justify-space-around align-self-stretch transparent"
    >
      <Icons
        v-for="icon in boxTopData"
        :key="icon.number"
        :data-source="icon"
      />
    </v-sheet>
    <notification>
      <template v-slot:cardTilte>
        <v-chip small class="white red--text"
          ><v-icon color="red" small class="mx-1">mdi-bell-outline</v-icon>
          جدیدترین اخبار ها</v-chip
        >
      </template>
      <template v-slot:cardTilteEnd>
        <v-tooltip right>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="green"
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
              color="green"
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
      </template>
      <template v-slot:cardSubTilte>
        <v-sheet class="transparent">فعال شدن امکان مناقصه</v-sheet>
      </template>
      <template v-slot:cardSubTilteEnd>
        <v-sheet class="transparent white--text">2 ساعت پیش</v-sheet>
      </template>
      <template v-slot:cardText>
        با فعالسازی امکان مناقصه، از این پس میتوانید با استفاده از این سامانه،
        اقدام به درج آگهی مناقصه کنید. با درج آگهی در این بخش، میتوانید آگهی خود
        را در معرض صاحبان اصناف، مشاغل و شرکت ها قرار داده و از این طریق تبادل
        اطلاعات کنید.
      </template>
    </notification>
    <div class="d-flex flex-wrap justify-space-around align-self-stretch">
      <facilities
        v-for="facility in FacilitiesData"
        :key="facility.number"
        :data-source="facility"
      />
    </div>
  </v-sheet>
</template>

<script>
import Cookies from "js-cookie";
import boxTopData from "@packages/polotik/Home/Mock/boxTop";
import FacilitiesData from "@packages/polotik/Home/Mock/facilities";
import Icons from "@packages/polotik/Home/Components/Icons.vue";
import Facilities from "@packages/polotik/Home/Components/Facilities.vue";
import Notification from "@polotik/components/App/Notification.vue";

export default {
  components: {
    Icons,
    Notification,
    Facilities,
  },
  data() {
    return {
      FacilitiesData,
      boxTopData,
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
  },
  methods: {
    checkToken() {
      if (!this.userId || !this.token) {
        this.$router.push("/403");
      }
    },
  },
  created() {
    this.checkToken()
  },
};
</script>

<style lang="scss" scoped></style>

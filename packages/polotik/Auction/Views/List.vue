<template>
  <v-sheet class="transparent">
    <notification>
      <template v-slot:cardTilte>
        <v-chip small class="white red--text"
          ><v-icon color="red" small class="mx-1">mdi-bell-outline</v-icon>
          توضیحات مناقصه</v-chip
        >
      </template>
      <template v-slot:cardText>
        با فعالسازی امکان مناقصه، از این پس میتوانید با استفاده از این سامانه،
        اقدام به درج آگهی مناقصه کنید. با درج آگهی در این بخش، میتوانید آگهی خود
        را در معرض صاحبان اصناف، مشاغل و شرکت ها قرار داده و از این طریق تبادل
        اطلاعات کنید.
      </template>
    </notification>
    <auction-filters />
  </v-sheet>
</template>

<script>
import Notification from "@polotik/components/App/Notification.vue";
import auctionFilters from "@packages/polotik/Auction/Components/Filters.vue";

export default {
  components: {
    auctionFilters,
    Notification,
  },
  created() {
    this.$store.commit("CHANGE_SERVICE", "auction");
  },
};
</script>

<style lang="scss" scoped></style>

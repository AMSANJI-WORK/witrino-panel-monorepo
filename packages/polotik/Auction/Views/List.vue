<template>
  <v-sheet class="transparent">
    <v-slide-x-transition>
      <PageListSkeleton v-show="skletonLoding.list" />
    </v-slide-x-transition>
    <v-slide-x-transition>
      <v-sheet class="transparent" v-show="!skletonLoding.list">
        <notification>
          <template v-slot:cardTilte>
            <v-chip small class="white red--text"
              ><v-icon color="red" small class="mx-1">mdi-bell-outline</v-icon>
              توضیحات مناقصه</v-chip
            >
          </template>
          <template v-slot:cardText>
            با فعالسازی امکان مناقصه، از این پس میتوانید با استفاده از این
            سامانه، اقدام به درج آگهی مناقصه کنید. با درج آگهی در این بخش،
            میتوانید آگهی خود را در معرض صاحبان اصناف، مشاغل و شرکت ها قرار داده
            و از این طریق تبادل اطلاعات کنید.
          </template>
        </notification>
        <AuctionFilters />
      </v-sheet>
    </v-slide-x-transition>
  </v-sheet>
</template>

<script>
import ToggleVisibleMixin from "@polotik/modules/loading/mixins/visible-type";
import PageListSkeleton from "@polotik/modules/loading/components/PageListSkeleton.vue";
import Notification from "@polotik/components/App/Notification.vue";
import AuctionFilters from "@packages/polotik/auction/components/Filters.vue";

export default {
  mixins: [ToggleVisibleMixin],
  components: {
    PageListSkeleton,
    AuctionFilters,
    Notification,
  },
  created() {
    this.$store.commit("CHANGE_SERVICE", "auction");
  },
};
</script>

<style lang="scss" scoped></style>

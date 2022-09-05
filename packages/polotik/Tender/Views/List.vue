<template>
  <v-sheet class="transparent">
    <v-slide-x-transition>
      <PageListSkeleton v-show="skeletonLoading.list" />
    </v-slide-x-transition>
    <v-slide-x-transition>
      <v-sheet v-show="!skeletonLoading.list" class="transparent">
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
        <TenderFilters />
      </v-sheet>
    </v-slide-x-transition>
  </v-sheet>
</template>

<script>
import ToggleVisibleMixin from "@polotik/modules/loading/mixins/visible-type";
import PageListSkeleton from "@polotik/modules/loading/components/PageListSkeleton.vue";
import Notification from "@commen/card/components/Notification.vue";
import TenderFilters from "@packages/polotik/tender/components/Filters.vue";

export default {
  mixins: [ToggleVisibleMixin],
  components: {
    TenderFilters,
    Notification,
    PageListSkeleton,
  },
  created() {
    this.$store.commit("CHANGE_SERVICE", "tender");
  },
};
</script>

<style lang="scss" scoped></style>

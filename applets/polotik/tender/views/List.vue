<template>
  <v-sheet class="transparent">
    <v-slide-x-transition>
      <PageListSkeleton v-show="skeletonLoading.list" />
    </v-slide-x-transition>
    <v-slide-x-transition>
      <v-sheet v-show="!skeletonLoading.list" class="transparent">
        <notification>
          <template v-slot:cardTilte>
            <v-chip small class="white p-red-primary--text"
              ><v-icon color="p-red-primary" small class="mx-1">mdi-bell-outline</v-icon>
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
        <RequestFilters />
      </v-sheet>
    </v-slide-x-transition>
  </v-sheet>
</template>

<script>
import tenderLoadingMixin from "@applets/polotik/tender/mixins/loading";
import PageListSkeleton from "@commen/loading/modules/skeleton/components/PageList/Skeleton.vue";
import Notification from "@commen/card/components/Notification.vue";
import RequestFilters from "@applets/polotik/commen/request/components/Filters.vue";
export default {
  mixins: [tenderLoadingMixin],
  components: {
    RequestFilters,
    Notification,
    PageListSkeleton,
  },
  created() {
    
  },
};
</script>

<style lang="scss" scoped></style>

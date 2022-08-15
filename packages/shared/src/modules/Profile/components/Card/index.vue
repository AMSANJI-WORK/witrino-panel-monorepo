<template>
  <v-sheet class="mx-2 rounded-lg pb-7">
    <CardHeader />
    <section-divider cardTitleClass="pa-0" bind-class="mb-2 mx-7" />
    <CardDetail />
    <v-col cols="12" class="py-1 align-end d-flex">
      <v-spacer class="d-sm-flex d-none"></v-spacer>
      <v-btn
        dark
        color="yellow darken-3"
        class="px-md-12 rounded-lg ml-3 d-sm-flex d-none"
        link
        large
        :to="`/profile/${userId}/edit`"
      >
        <v-icon class="ml-1">mdi-pencil</v-icon>
        ویرایش
      </v-btn>
      <v-btn
        dark
        link
        block
        large
        color="yellow darken-3"
        class="px-md-12 rounded-lg ml-3 d-flex d-sm-none"
        :to="`/profile/${userId}/edit`"
      >
        <v-icon class="ml-1">mdi-pencil</v-icon>
        ویرایش
      </v-btn>
    </v-col>
  </v-sheet>
</template>

<script>
import CardHeader from "./Header.vue";
import CardDetail from "./Detail.vue";
import SectionDivider from "@shared/components/Reusable/SectionDivider.vue";
export default {
  components: {
    CardDetail,
    CardHeader,
    SectionDivider,
  },
  computed: {
    userId() {
      return this.$route.params.userId;
    },
  },
};
</script>

<style lang="scss" scoped></style>

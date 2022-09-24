<template>
  <v-sheet class="transparent">
    <pages-description />
    <modify-inquiry />
  </v-sheet>
</template>

<script>
import ModifyInquiry from "@applets/polotik/inquiry/components/Modify.vue"
import PagesDescription from "@applets/polotik/inquiry/components/PagesDescription.vue";
export default {
  components: {
    ModifyInquiry,
    PagesDescription,
  },
  created() {
    
  },
};
</script>

<style lang="scss" scoped></style>

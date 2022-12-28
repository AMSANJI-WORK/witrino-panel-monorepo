<template>
  <v-app-bar elevation="3" dense color="primery" class="d-md-none mt-14">
    <SubHeaderContent />
  </v-app-bar>
</template>

<script>
import SubHeaderContent from "@applets/commen/header/components/SubHeaderContent.vue";
export default {
  components: {
    SubHeaderContent,
  },
};
</script>

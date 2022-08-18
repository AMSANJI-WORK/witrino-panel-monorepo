<template>
  <DefualtLayout />
</template>

<script>
import DefualtLayout from "@polotik/layouts/Defualt.vue";
export default {
  beforeRouteEnter(to, from, next) {
    console.log("dashboard.vue");
    console.log(to);
    console.log(from);
    next();
  },
  components: {
    DefualtLayout,
  },
};
</script>

<style lang="scss" scoped></style>

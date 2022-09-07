<template>
    <modify-auction  />
</template>

<script>
import ModifyAuction from "@packages/polotik/auction/components/Modify.vue";

export default {
  components: {
    ModifyAuction,
  },
  created() {
    this.$store.commit("CHANGE_SERVICE", "auction");
  },
  beforeRouteLeave(to, from, next) {
    next();
    this.$store.commit("guilds/auction/CHANGE_STEP", 1);
  },
};
</script>

<style lang="scss" scoped></style>

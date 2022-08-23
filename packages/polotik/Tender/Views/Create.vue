<template>
  <modify-tender />
</template>

<script>
import ModifyTender from "@packages/polotik/Tender/Components/Modify.vue";
export default {
  components: {
    ModifyTender,
  },
  created() {
    this.$store.commit("CHANGE_SERVICE", "tender");
  },
  beforeRouteLeave(to, from, next) {
    next();
    this.$store.commit("guilds/tender/CHANGE_STEP", 1);
  },
};
</script>

<style lang="scss" scoped></style>

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
    
  },
  beforeRouteLeave(to, from, next) {
    next();
    this.$store.commit("tender/CHANGE_STEP", 1);
  },
};
</script>

<style lang="scss" scoped></style>

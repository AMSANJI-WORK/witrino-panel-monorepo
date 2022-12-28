<template>
  <v-sheet
    class="bg-drawer--main rounded-t-xl ma-3 d-flex flex-column align-center sheet--boreder-bottom w-primary-blue"
    height="250"
    elevation="5"
  >
    <v-sheet
      class="d-flex flex-column align-center text-center my-auto transparent"
      width="100%"
    >
      <WLogo />
      <h4 class="mb-1 mt-4 white--text">پنل ادمین ویترینو</h4>
    </v-sheet>
  </v-sheet>
</template>

<script>
import WLogo from "@applets/commen/icons/components/admin/Logo.vue";
export default {
  inheritAttrs: false,
  components: {
    WLogo,
  },
};
</script>

<style lang="scss" scoped>
.bg-drawer--main {
  background: url(@applets/commen/assets/image/png/bg-drawer-main.png) no-repeat;
  background-position: center;
  background-size: 150%;
}
.sheet--boreder-bottom {
  border-bottom-left-radius: 75px;
  border-bottom-right-radius: 75px;
}
</style>

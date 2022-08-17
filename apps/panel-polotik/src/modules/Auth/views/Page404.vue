<template>
  <defualt-layout>
    <v-sheet class="ma-auto">
      <err-404 class="page-404-background d-sm-block d-none" />
      <err-404-moblie class="page-404-background d-block d-sm-none" />
      <h3
        class="red--text text--accent-4 text-center text-h3 font-weight-bold mt-sm-10 mb-3"
      >
        خطای 404
      </h3>
      <h5 class="text-h5 text-center font-weight-bold">صفحه پیدا نشد</h5>
      <v-row justify="center">
        <v-btn
          x-large
          rounded
          color="orange darken-2"
          dark
          class="my-7 font-weight-bold mx-auto"
          @click="() => $router.back()"
          >بازگشت به صفحه قبلی</v-btn
        >
      </v-row>
    </v-sheet>
  </defualt-layout>
</template>

<script>
import Err404 from "@polotik/components/Icons/Err404.vue";
import Err404Moblie from "@polotik/components/Icons/ErrMoblie404.vue";
import DefualtLayout from "@polotik/modules/Auth/layout/Defualt.vue";
import SetPermissionAvatar from "@polotik/components/Icons/SetPermissionAvatar.vue";
export default {
  components: {
    Err404,
    Err404Moblie,
    DefualtLayout,
    SetPermissionAvatar,
  },
};
</script>

<style scoped>
.page-404 {
  padding: 30px 0;
  background: #fff !important;
  text-align: center;
  min-height: 100vh;
}

.page-404 img {
  width: 100%;
}
.page-404-background {
  background-position: center;
}
</style>

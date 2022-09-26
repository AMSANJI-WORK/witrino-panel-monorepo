<template>
  <defualt-layout>
    <v-sheet class="ma-auto align-content-center">
      <err-403 class="d-sm-block d-none" />
      <err-403-moblie class="d-block d-sm-none" />
      <h3
        class="p-red-primary--text text-center text-h3 font-weight-bold mt-sm-10 mb-3"
      >
        خطای 403
      </h3>
      <h5 class="text-h5 text-center font-weight-bold">
        اجازه دسترسی به این صفحه را ندارید
      </h5>
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
import Err403 from "@commen/icons/components/Err403.vue";
import Err403Moblie from "@commen/icons/components/ErrMoblie403.vue";
import DefualtLayout from "@applets/polotik/auth/layout/Defualt.vue";
import SetPermissionAvatar from "@commen/icons/components/polotik/SetPermissionAvatar.vue";
export default {
  components: {
    Err403,
    Err403Moblie,
    DefualtLayout,
    SetPermissionAvatar,
  },
};
</script>

<style scoped>
.page-403 {
  padding: 30px 0;
  background: #fff !important;
  text-align: center;
}
.page-403-background {
  background-position: center;
}
</style>

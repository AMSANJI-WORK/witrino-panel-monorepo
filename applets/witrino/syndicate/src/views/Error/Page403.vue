<template>
  <v-app>
    <v-main class="page-403 mt-10">
      <v-container class="my-auto">
        <v-row>
          <div class="ma-auto">
            <err-403 class="d-sm-block d-none" />
            <err-403-moblie class="d-block d-sm-none" />
            <h3
              class="red--text text--accent-4 text-h3 font-weight-bold mt-sm-10 mb-3"
            >
              خطای 403
            </h3>
            <h5 class="text-h5 font-weight-bold">
              اجازه دسترسی به این صفحه را ندارید
            </h5>
            <v-btn
              x-large
              rounded
              color="orange darken-2"
              dark
              class="my-7 font-weight-bold"
              @click="$router.go(-1)"
              >بازگشت به صفحه قبلی</v-btn
            >
          </div>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Err403 from "@applets/commen/icons/components/Err403.vue";
import Err403Moblie from "@applets/commen/icons/components/ErrMoblie403.vue";
import SetPermissionAvatar from "@applets/commen/icons/components/SetPermissionAvatar.vue";
export default {
  components: {
    Err403,
    Err403Moblie,
    SetPermissionAvatar,
  },
};
</script>

<style scoped>
.page-403 {
  padding: 30px 0;
  background: #fff !important;
  text-align: center;
  /* min-height: 100vh; */
}
.page-403-background {
  background-position: center;
}
</style>

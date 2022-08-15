<template>
  <v-app>
    <v-main class="page-404 mt-md-10">
      <v-container class="my-auto">
        <v-row>
          <div style="margin: auto">
            <err-404 class="page-404-background d-sm-block d-none" />
            <err-404-moblie class="page-404-background d-block d-sm-none" />
            <h3
              class="red--text text--accent-4 text-h3 font-weight-bold mt-sm-10 mb-3"
            >
              خطای 404
            </h3>
            <h5 class="text-h5 font-weight-bold">صفحه پیدا نشد</h5>
            <v-btn
              x-large
              rounded
              color="orange darken-2"
              dark
              class="my-7 font-weight-bold"
              @click="$router.go(-1)"
              >بازگشت به صفحه قبل</v-btn
            >
          </div>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Err404 from "@shared/components/Icons/Err404.vue";
import Err404Moblie from "@shared/components/Icons/ErrMoblie404.vue";
import SetPermissionAvatar from "@shared/components/Icons/SetPermissionAvatar.vue";
export default {
  components: {
    Err404,
    Err404Moblie,
    SetPermissionAvatar,
  },
};
</script>

<style scoped>
.page-404 {
  padding: 30px 0;
  background: #fff !important;
  text-align: center;
  /* min-height: 100vh; */
}

.page-404 img {
  width: 100%;
}
.page-404-background {
  background-position: center;
}
</style>

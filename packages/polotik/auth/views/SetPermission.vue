<template>
  <v-app>
    <v-main class="set-permission mt-md-16">
      <v-container class="my-auto">
        <v-row>
          <div class="ma-auto">
            <set-permission class="d-sm-block d-none" />
            <set-permission-mobile class="d-block d-sm-none" />
            <v-card
              elevation="0"
              max-width="200"
              class="mx-auto"
              style="margin-top: 100px"
            >
              <v-progress-linear
                class="my-5"
                color="p-green-primary"
                :indeterminate="indeterminateLoading"
                rounded
                height="10"
              ></v-progress-linear>
            </v-card>
            <v-card elevation="0" max-width="500" class="d-flex mx-auto pr-13">
              <v-avatar size="75">
                <set-permission-avatar />
              </v-avatar>
              <div class="mr-5">
                <v-card-title class="h1 orange--text">
                  لطفا منتظر بمانید ...</v-card-title
                >
                <v-card-subtitle class="h3 py-3 grey--text">
                  در حال تایید اطلاعات
                </v-card-subtitle>
              </div>
            </v-card>
          </div>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions, mapState } from "vuex";
import SetPermissionAvatar from "@commen/icons/components/polotik/SetPermissionAvatar.vue";
import SetPermissionMobile from "@commen/icons/components/polotik/SetPermissionMobile.vue";
import SetPermission from "@commen/icons/components/polotik/SetPermission.vue";
export default {
  beforeRouteEnter(to, from, next) {
    console.log("SetPermission.vue");
    console.log(to);
    console.log(from);
    next();
  },
  components: {
    SetPermissionAvatar,
    SetPermissionMobile,
    SetPermission,
  },
  computed: {
    ...mapState("auth", {
      indeterminateLoading: (state) => state.indeterminateLoading,
    }),

    token() {
      return import.meta.env.DEV
        ? this.$route.query.token ?? "qwe"
        : this.$route.query.token ?? null;
    },
    // token() {
    //   return import.meta.env.DEV
    //     ? this.$route.query.token ?? "asd"
    //     : this.$route.query.token ?? null;
    // },
    redirect() {
      return import.meta.env.DEV
        ? this.$route.query.page ?? "/"
        : this.$route.query.page ?? null;
    },
  },
  methods: {
    ...mapActions("auth", { setPermissionAsync: "SET_PERMISSION_ASYNC" }),
  },
  created() {
    this.setPermissionAsync(this.token).then(() => {
      setTimeout(() => {
        if (!this.redirect || !this.token) this.$router.push("/403");
        else this.$router.push(this.redirect);
      }, 2000);
    });
  },
};
</script>

<style scoped>
.set-permission {
  padding: 40px 0;
  background: #fff !important;
  /* text-align: center; */
}

.set-permission img {
  width: 100%;
}
.set-permission .h1 {
  font-size: 30px;
}
.set-permission .h3 {
  font-size: 18px;
}
.set-permission-background {
  background-image: url(@commen/assets/image/svg/SetPermissionImg.svg);
  min-height: 479px;
  background-position: center;
}
</style>

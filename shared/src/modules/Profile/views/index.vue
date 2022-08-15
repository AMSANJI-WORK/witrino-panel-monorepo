<template>
  <component :is="layout" :have-slot="true">
    <VRouterView />
  </component>
</template>

<script>
import store from "@witrino/store";
import Cookies from "js-cookie";
import { mapGetters } from "vuex";
import AdminLayout from "@applets/admin/src/layouts/Defualt.vue";
import EdtehadiehLayout from "@applets/edtehadieh/src/layouts/Defualt.vue";
import NamayandeLayout from "@applets/namayande/src/layouts/Defualt.vue";
import VRouterView from "@shared/components/Reusable/VRouterView.vue";
import { profilePrevPath } from "@shared/modules/Profile/middlewares";
export default {
  beforeRouteEnter(to, from, next) {
    if (
      !Cookies.get("from-path") ||
      !from.path.includes(Cookies.get("from-path"))
    )
      profilePrevPath(from);
    else {
      store.commit("shared/profile/SET_FROM_PATH", Cookies.get("from-path"));
    }
    next();
  },
  beforeRouteLeave(to, from, next) {
    profilePrevPath(to);
    next();
  },
  components: {
    VRouterView,
  },
  computed: {
    ...mapGetters("shared/profile", ["fromPath"]),
    layout() {
      if (this.fromPath == "admin") return AdminLayout;
      else if (this.fromPath == "edtehadieh") return EdtehadiehLayout;
      return NamayandeLayout;
    },
  },
};
</script>

<style lang="scss" scoped></style>

<template>
  <v-responsive
    min-width="150"
    max-width="300"
    id="dropdown-example-1"
    class="ml-2 my-auto"
  >
    <v-overflow-btn
      :items="panelItems"
      dense
      outlined
      dark
      hide-details
      :loading="loading"
      label="انتخاب پنل"
      target="#dropdown-example-1"
      return-object
      @change="changeItem"
    ></v-overflow-btn>
  </v-responsive>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      panelItems: [
        {
          text: "پنل آدمین",
          route: "/admin/home",
        },
        {
          text: "پنل کسب و کار",
          route: "/buisness/home",
        },
        {
          text: "پنل اتحادیه",
          route: "/syndicate/home",
        },
        {
          text: "پنل سوپر وایزر",
          route: "/supervisor/home",
        },
        {
          text: "پنل ایجنت",
          route: "/agent/home",
        },
        {
          text: "پنل اپراتور",
          route: "/operator/home",
        },
        {
          text: "پنل کاربر",
          route: "/user/home",
        },
        {
          text: "پنل بازرس",
          route: "/inspector/home",
        },
      ],
    };
  },
  methods: {
    changePanel(selectedRoute) {
      // this.loading = true;
      // setTimeout(() => {
      this.$router.push(selectedRoute);
      // }, 500);
      // this.loading = false;
    },
    changeItem(e) {
      e.route != this.$route.path ? this.changePanel(e.route) : "";
    },
  },
};
</script>

<style lang="scss" scoped></style>

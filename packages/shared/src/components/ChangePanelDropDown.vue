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
          text: "پنل نماینده",
          route: "/namayande/home",
        },
        {
          text: "پنل اتحادیه",
          route: "/edtehadieh/home",
        },
      ],
    };
  },
  methods: {
    changePanel(selectedRoute) {
      this.loading = true;
      setTimeout(() => {
        this.$router.push(selectedRoute);
      }, 500);
      this.loading = false;
    },
    changeItem(e) {
      e.route != this.$route.path ? this.changePanel(e.route) : "";
    },
  },
};
</script>

<style lang="scss" scoped></style>

<template>
  <v-row justify="center" align="center" align-content="space-around">
    <v-col cols="12" class="d-flex justify-center"> <Logo /> </v-col>
    <v-col cols="12" class="d-flex justify-center">
      <v-toolbar-title
        class="auth-blue--text text-md-h4 text-h5 font-weight-black"
        >ویترینو‌،
        <span class="auth-blue--text text-md-h4 text-h5 font-weight-black">
          ویترین نوین کسب‌وکار</span
        >
      </v-toolbar-title>
    </v-col>
  </v-row>
</template>

<script>
import Logo from "@applets/commen/icons/components/auth/Logo.vue";
export default {
  components: { Logo },
};
</script>

<style lang="scss" scoped></style>

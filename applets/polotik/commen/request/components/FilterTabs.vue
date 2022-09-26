<template>
  <v-card elevation="1" outlined class="my-10 mx-2 rounded-t-lg">
    <v-tabs
      color="p-green-primary"
      active-class="p-green-primary--text"
      next-icon="mdi-arrow-right-bold-box-outline"
      prev-icon="mdi-arrow-left-bold-box-outline"
      show-arrows
      v-model="tab"
      :ripple="false"
    >
      <v-tab class="text-caption text-md-body-2 font-weight-medium" key="list"
        >{{ service }} ها</v-tab
      >
      <v-tab
        class="text-caption text-md-body-2 font-weight-medium"
        key="list-mine"
        >{{ service }} های من</v-tab
      >
      <v-tab
        class="text-caption text-md-body-2 font-weight-medium"
        key="list-mine-request"
        >پیشنهادات من</v-tab
      >

      <v-spacer></v-spacer>
      <v-btn
        color="p-green-primary"
        to="create"
        class="white--text my-auto ml-2 d-md-flex d-none"
      >
        <slot name="btn-create-title" />
        <span v-if="!$slots['btn-create-title']"> درخواست {{ service }} </span>
        <v-icon class="white--text">mdi-plus</v-icon>
      </v-btn>
      <v-btn
        color="p-green-primary"
        small
        tile
        to="create"
        class="white--text my-auto rounded-lg ml-2 d-md-none d-flex"
      >
        <v-icon class="white--text">mdi-plus</v-icon>
      </v-btn>

      <v-tabs-items v-model="tab">
        <v-divider class="mb-2"></v-divider>
        <v-tab-item key="list">
          <slot name="request-list" />
        </v-tab-item>
        <v-tab-item key="list-mine">
          <slot name="request-list-user" />
        </v-tab-item>
        <v-tab-item key="list-mine-offered">
          <slot name="request-list-user-offered" />
        </v-tab-item>
      </v-tabs-items>
    </v-tabs>
  </v-card>
</template>

<script>
export default {
  props: {
    service: String,
  },
  data() {
    return {
      tab: null,
    };
  },
  watch: {
    tab(newValue) {
      this.$emit("chage-active-tab", newValue);
    },
  },
};
</script>

<style lang="scss" scoped></style>

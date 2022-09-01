<template>
  <v-card elevation="1" outlined class="my-10 mx-2 rounded-t-lg">
    <v-tabs
      color="green"
      active-class="green--text"
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
        :disabled="true"
        key="list-mine-request"
        >پیگیری درخواست های من</v-tab
      >

      <v-spacer></v-spacer>
      <v-btn
        color="green"
        to="create"
        class="white--text my-auto ml-2 d-md-flex d-none"
      >
        درخواست {{ service }}
        <v-icon class="white--text">mdi-plus</v-icon>
      </v-btn>
      <v-btn
        color="green"
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
          <slot name="list-content" />
        </v-tab-item>
        <v-tab-item key="list-mine">
          <slot name="list-mine-content" />
        </v-tab-item>
        <v-tab-item key="list-mine-request">
          <slot name="list-mine-request" />
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

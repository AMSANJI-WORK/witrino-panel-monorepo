<template>
  <v-sheet class="transparent rounded-lg" width="100%">
    <v-tabs
      :height="60"
      v-model="tab"
      slider-size="3"
      class="rounded-t-lg text-md-subtitle-2 text-caption"
      :show-arrows="false"
    >
      <v-tab
        key="private"
        class="text-md-subtitle-2 text-caption font-weight-medium"
        active-class="light-blue--text"
        >اطلاعات شخصی
      </v-tab>
      <v-tab
        key="address"
        class="text-md-subtitle-2 text-caption font-weight-medium"
        active-class="light-blue--text"
        >آدرس ها</v-tab
      >
    </v-tabs>
    <v-tabs-items v-model="tab" class="rounded-b-lg">
      <v-tab-item key="private"> <EditForm /></v-tab-item>
      <v-tab-item key="address" class="pa-sm-5 pa-2"> <Address /></v-tab-item>
    </v-tabs-items>
  </v-sheet>
</template>

<script>
import EditForm from "@packages/profile/components/EditForm.vue";
import Address from "@packages/admin/users/modules/address/components/Address.vue";
export default {
  components: {
    EditForm,
    Address,
  },
  data: () => ({
    tab: null,
  }),
};
</script>

<style lang="scss" scoped></style>

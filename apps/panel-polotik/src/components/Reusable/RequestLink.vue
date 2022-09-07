<template>
  <v-badge
    overlap
    color="#339987"
    :content="newRequestCount"
    class="font-weight-medium"
  >
    <v-chip
      link
      :to="`${productId}/request`"
      :ripple="false"
      color="white"
      class="mx-1 cursor-pointer"
    >
      <component :is="MassageIcon"></component>
    </v-chip>
  </v-badge>
</template>

<script>
export default {
  props: {
    newRequestCount: { type: Number, default: 0 },
    productId: Number,
  },
  data() {
    return {
      MassageIcon: () => import("@commen/icons/components/polotik/Massage.vue"),
    };
  },
};
</script>

<style lang="scss" scoped></style>

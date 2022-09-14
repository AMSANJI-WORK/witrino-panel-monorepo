<template>
  <v-badge overlap color="p-green-primary" class="pa-0">
    <template #badge>
      <span class="text-caption font-weight-bold">{{ newRequestCount }}</span>
    </template>
    <v-chip
      link
      :to="`${productId}/request`"
      :ripple="false"
      color="white"
      small
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

<style lang="scss" scoped>
:deep(.v-badge__badge) {
  padding: 1px;
}
</style>

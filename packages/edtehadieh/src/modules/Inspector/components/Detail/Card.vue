<template>
  <v-sheet class="rounded-lg transparent">
    <v-card elevation="0" class="rounded-lg pa-2" outlined>
      <card-info />
      <div class="d-flex flex-wrap align-center">
        <v-spacer class="d-lg-block d-none"></v-spacer>
        <card-button-group />
        <card-button-group-mobile class="d-block d-lg-none" />
      </div>
    </v-card>
  </v-sheet>
</template>

<script>
import CardButtonGroup from "@edtehadieh/modules/Inspector/components/Detail/CardButtonGroup.vue";
import CardButtonGroupMobile from "@edtehadieh/modules/Inspector/components/Detail/CardButtonGroupMobile.vue";
import CardInfo from "@edtehadieh/modules/Inspector/components/Detail/CardInfo.vue";
export default {
  components: {
    CardButtonGroupMobile,
    CardButtonGroup,
    CardInfo,
  },
};
</script>

<style lang="scss" scoped></style>

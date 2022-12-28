<template>
    <v-sheet class="mx-2 transparent">
        <SectionDivider
            bind-class="my-5"
            title-class="font-weight-bold text-h6"
            card-title-class="px-0"
            title="موجودی انبار"
        >
        </SectionDivider>
        <Inventory></Inventory>
    </v-sheet>
</template>

<script>
import Inventory from "@applets/witrino/buisness/modules/stock/components/Inventory.vue";
import SectionDivider from "@applets/commen/section-divider/components/SectionDivider.vue";
export default {
    components: { Inventory, SectionDivider },
};
</script>

<style lang="scss" scoped></style>

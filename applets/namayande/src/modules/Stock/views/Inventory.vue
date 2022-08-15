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
import Inventory from "@applets/namayande/src/modules/Stock/components/Inventory.vue";
import SectionDivider from "@shared/components/Reusable/SectionDivider.vue";
export default {
    components: { Inventory, SectionDivider },
};
</script>

<style lang="scss" scoped></style>

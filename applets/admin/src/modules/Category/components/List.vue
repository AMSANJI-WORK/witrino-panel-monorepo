<template>
    <v-sheet class="mx-2 transparent">
        <LocationList :lat="55.05" :long="55.05" />
        <SectionDivider
            title-class="text-subtitle-2"
            bind-class="my-5"
            title="نمایندگی ها"
        />
        <DataTable />
    </v-sheet>
</template>

<script>
import SectionDivider from "@shared/components/Reusable/SectionDivider.vue";
import LocationList from "@applets/admin/src/modules/Branchs/components/LocationList.vue";
import DataTable from "@applets/admin/src/modules/Branchs/components/DataTable/BranchList.vue";
export default {
    components: {
        SectionDivider,
        LocationList,
        DataTable,
    },
};
</script>

<style lang="scss" scoped></style>

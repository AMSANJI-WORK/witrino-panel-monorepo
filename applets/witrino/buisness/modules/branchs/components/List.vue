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
import SectionDivider from "@applets/commen/section-divider/components/SectionDivider.vue";
import LocationList from "@applets/witrino/buisness/modules/branchs/components/LocationList.vue";
import DataTable from "@applets/witrino/buisness/modules/branchs/components/DataTable/BranchList.vue";
export default {
    components: {
        SectionDivider,
        LocationList,
        DataTable,
    },
};
</script>

<style lang="scss" scoped></style>

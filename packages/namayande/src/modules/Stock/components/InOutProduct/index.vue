<template>
    <v-sheet class="rounded-lg transparent">
        <SectionDivider
            bind-class="my-5"
            title-class="font-weight-bold text-h6"
            card-title-class="px-0"
            title="محصول ورودی و خروجی"
        >
        </SectionDivider>
        <Chart />
        <SectionDivider
            bind-class="my-5"
            title-class="font-weight-bold text-h6"
            card-title-class="px-0"
            title="جدول ورودی های انبار"
        >
        </SectionDivider>
        <DataTable />
    </v-sheet>
</template>

<script>
import Chart from "@namayande/modules/Stock/components/InOutProduct/Chart.vue";
import DataTable from "@namayande/modules/Stock/components/InOutProduct/DataTable.vue";
import SectionDivider from "@shared/components/Reusable/SectionDivider.vue";
export default {
    components: { Chart, DataTable, SectionDivider },
};
</script>

<style lang="scss" scoped></style>

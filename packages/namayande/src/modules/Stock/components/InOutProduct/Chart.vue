<template>
    <v-sheet class="rounded-lg pb-4">
        <SectionDivider
            bind-class="pr-6 py-0"
            title-class="font-weight-normal text-subtitle-1"
            card-title-class="px-0"
            title="موجودی انبار"
            :visibleDivider="false"
        >
        </SectionDivider>
        <div class="d-flex justify-center">
            <apexchart
                type="pie"
                width="400"
                :options="chartOptions"
                :series="series"
            ></apexchart>
        </div>
    </v-sheet>
</template>

<script>
import SectionDivider from "@shared/components/Reusable/SectionDivider.vue";
export default {
    components: {
        SectionDivider,
    },
    data() {
        return {
            series: [44, 55, 13, 43],
            chartOptions: {
                labels: [
                    "لوازم خانگی و اداری",
                    "صنایع مبلمان",
                    "صنایع ساختمانی",
                    "جواهرات",
                ],
                responsive: [
                    {
                        breakpoint: 480,
                        options: {
                            chart: {
                                width: 200,
                            },
                            legend: {
                                position: "bottom",
                                itemMargin: {
                                    horizontal: 0,
                                    vertical: 0,
                                },
                            },
                        },
                    },
                ],
            },
        };
    },
};
</script>

<style lang="scss" scoped></style>

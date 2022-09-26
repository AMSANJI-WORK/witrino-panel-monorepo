<template>
    <v-sheet class="rounded-lg d-flex justify-center">
        <apexchart
            type="pie"
            width="400"
            :options="chartOptions"
            :series="series"
        ></apexchart>
    </v-sheet>
</template>

<script>
export default {
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

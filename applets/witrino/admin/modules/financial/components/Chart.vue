<template>
  <v-sheet class="rounded-lg pa-4" elevation="1" outlined>
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
import SectionDivider from "@applets/commen/section-divider/components/SectionDivider.vue";
export default {
  components: {
    SectionDivider,
  },
  data() {
    return {
      series: [44, 55, 13],
      chartOptions: {
        labels: ["ورودی", "هزینه", "خروجی"],
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

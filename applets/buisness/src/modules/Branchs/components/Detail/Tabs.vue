<template>
    <v-card elevation="0" class="pa-5 my-5 rounded-lg" outlined>
        <v-tabs
            v-model="tab"
            hide-slider
            class="rounded-lg py-3"
            active-class="rounded-t-lg grey lighten-4 black--text"
        >
            <v-tab key="stock"> موجودی </v-tab>
            <v-tab key="order"> سفارشات </v-tab>
            <v-tab key="complaints"> شکایات ثبت شده </v-tab>

            <v-tabs-items
                v-model="tab"
                active-class="grey lighten-4 rounded-tl-lg"
            >
                <v-tab-item key="stock">
                    <div class="mt-6"><stock-data-table /></div>
                </v-tab-item>
                <v-tab-item key="order">
                    <div class="mt-6"><order-data-table /></div>
                </v-tab-item>
                <v-tab-item key="complaints">
                    <div class="mt-6"><complaints-data-table /></div>
                </v-tab-item>
            </v-tabs-items>
        </v-tabs>
    </v-card>
</template>

<script>
import ComplaintsDataTable from "@applets/buisness/src/modules/Branchs/components/DataTable/Complaints.vue";
import OrderDataTable from "@applets/buisness/src/modules/Branchs/components/DataTable/Order.vue";
import StockDataTable from "@applets/buisness/src/modules/Branchs/components/DataTable/Stock.vue";
export default {
    components: {
        ComplaintsDataTable,
        OrderDataTable,
        StockDataTable,
    },
    data() {
        return {
            tab: null,
        };
    },
};
</script>

<style lang="scss" scoped></style>

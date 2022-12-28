<template>
  <v-card elevation="0" class="pa-5 my-5 rounded-lg" outlined>
    <v-tabs
      v-model="tab"
      hide-slider
      class="rounded-lg py-3"
      active-class="rounded-t-lg grey lighten-4 black--text"
    >
      <v-tab key="archive"> بایگانی </v-tab>
      <v-tab key="order"> سوابق بازرسی </v-tab>
      <v-tab key="complaints"> شکایات ثبت شده</v-tab>

      <v-tabs-items v-model="tab" active-class="grey lighten-4 rounded-tl-lg">
        <v-tab-item key="archive">
          <div class="mt-6"><archive-data-table /></div>
        </v-tab-item>
        <v-tab-item key="inspection-record">
          <div class="mt-6"><inspection-record-data-table /></div>
        </v-tab-item>
        <v-tab-item key="complaints">
          <div class="mt-6"><complaints-data-table /></div>
        </v-tab-item>
      </v-tabs-items>
    </v-tabs>
  </v-card>
</template>

<script>
import ArchiveDataTable from "@applets/witrino/syndicate/modules/tradeUnit/components/DataTable/Archive.vue";
import InspectionRecordDataTable from "@applets/witrino/syndicate/modules/tradeUnit/components/DataTable/InspectionRecord.vue";
import ComplaintsDataTable from "@applets/witrino/syndicate/modules/tradeUnit/components/DataTable/Complaints.vue";
export default {
  components: {
    ArchiveDataTable,
    InspectionRecordDataTable,
    ComplaintsDataTable,
  },
  data() {
    return {
      tab: null,
    };
  },
};
</script>

<style lang="scss" scoped></style>

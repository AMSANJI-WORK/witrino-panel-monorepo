<template>
  <v-card elevation="0" class="pa-5 my-5 rounded-lg" outlined>
    <v-tabs
      v-model="tab"
      hide-slider
      class="rounded-lg py-3"
      active-class="rounded-t-lg grey lighten-4 black--text"
    >
      <v-tab key="inspection-record"> سوابق بازرسی </v-tab>
      <v-tab key="message"> پیام ها </v-tab>
      <v-tab key="archive"> بایگانی</v-tab>

      <v-tabs-items v-model="tab" active-class="grey lighten-4 rounded-tl-lg">
        <v-tab-item key="inspection-record">
          <div class="mt-6"><inspector-record-data-table /></div>
        </v-tab-item>
        <v-tab-item key="message">
          <div class="mt-6"><message-data-table /></div>
        </v-tab-item>
        <v-tab-item key="archive">
          <div class="mt-6"><archive-data-table /></div>
        </v-tab-item>
      </v-tabs-items>
    </v-tabs>
  </v-card>
</template>

<script>
import ArchiveDataTable from "@applets/edtehadieh/src/modules/Inspector/components/DataTable/Archive.vue";
import MessageDataTable from "@applets/edtehadieh/src/modules/Inspector/components/DataTable/Message.vue";
import InspectorRecordDataTable from "@applets/edtehadieh/src/modules/Inspector/components/DataTable/InspectorRecord.vue";
export default {
  components: {
    ArchiveDataTable,
    MessageDataTable,
    InspectorRecordDataTable,
  },
  data() {
    return {
      tab: null,
    };
  },
};
</script>

<style lang="scss" scoped></style>

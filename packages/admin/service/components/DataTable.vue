<template>
  <v-data-table
    :items="serviceList"
    :loading="tableLoading"
    class="elevation-1 rounded-lg"
    :headers="tableHeader(headerDataTableClass)"
    :footer-props="{
      showCurrentPage: true,
      itemsPerPageText: 'تعداد آیسرویس به اضای هر صفحه',
    }"
  >
    <template v-slot:footer.page-text="item">
      {{ item | pageText }}
    </template>
    <template v-slot:item.record="{ item }">
      {{ getRecordIndex(item.id) }}
    </template>
    <template v-slot:no-data> داده ای موجود نیست </template>
    <template v-slot:loading> در حال دریافت اطلاعات ... </template>
  </v-data-table>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import TableMixin from "@shared/mixins/table";
import { serviceTypes } from "@packages/admin/service/store/types";
export default {
  mixins: [TableMixin],
  data: () => ({
    dialogDisable: false,
    dialogModify: false,
    headerDataTableClass: "blue-lighten-5 white--text",
    headers: [
      {
        text: "ردیف",
        align: "start",
        sortable: false,
        value: "record",
      },
      { text: "عنوان سرویس", value: "title", sortable: false },
      { text: "توضیحات سرویس", value: "description", sortable: false },
    ],
  }),
  computed: {
    ...mapGetters("admin/service", ["service", "serviceList"]),
  },
  filters: {
    pageText({ pageStart = -1, itemsLength = 0 }) {
      return `${pageStart} از ${itemsLength}`;
    },
  },
  methods: {
    ...mapActions("admin/service", {
      getAllService: `get/${serviceTypes.GET_ALL_SERVICE_ASYNC}`,
    }),
    getRecordIndex(targetId) {
      return (
        this.serviceList.map((service) => service.id).indexOf(targetId) + 1
      );
    },
  },
  created() {
    if (this.serviceList.length == 0) this.getAllService();
  },
};
</script>

<style lang="scss" scoped></style>

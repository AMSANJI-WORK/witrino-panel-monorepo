<template>
  <v-data-table
    :items="list"
    :loading="tableLoading"
    class="elevation-1 rounded-lg"
    :headers="tableHeader(headerDataTableClass)"
    :footer-props="{
      'show-current-page': true,
      'items-per-page-options': [20],
      'disable-items-per-page': true,
      pageText: ``,
      pagination: {
        page: this.pagination.currentPage,
        itemsPerPage: this.pagination.perPage,
        pageCount: this.pagination.totalPages,
        pageStart: this.pagination.currentPage,
        pageStop: this.pagination.totalPages,
        itemsLength: this.pagination.total,
      },
    }"
  >
    <template v-slot:item.record="{ item }">
      {{ getRecordIndex(item.id) }}
    </template>
    <template #footer.prepend>
      <span class="pr-2">{{ `نتایج : ${pagination.total}` }}</span>
      <v-spacer></v-spacer>
    </template>
    <template v-slot:no-data> داده ای موجود نیست </template>
    <template v-slot:loading> در حال دریافت اطلاعات ... </template>
  </v-data-table>
</template>

<script>
import { mapGetters } from "vuex";
import { TYPES } from "../store/types";
import LoadingFormService from "../mixins/loading";
import mixinTable from "@commen/table/mixins/table";
export default {
  mixins: [mixinTable, LoadingFormService],
  data: () => ({
    dialogDisable: false,
    dialogModify: false,
    headerDataTableClass: "blue accent-1",
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
    ...mapGetters("admin/service", ["item", "list"]),
    ...mapGetters("admin/service/pagination", ["pagination"]),
  },
  filters: {},
  methods: {
    dataGetAll(payload) {
      this.$store.dispatch(`admin/service/${TYPES.GET_ALL_ASYNC}`, payload);
    },
    getRecordIndex(targetId) {
      return this.list.map((service) => service.id).indexOf(targetId) + 1;
    },
  },
  created() {
    if (this.list.length == 0) this.dataGetAll({ service: "Service" });
  },
};
</script>

<style lang="scss" scoped></style>

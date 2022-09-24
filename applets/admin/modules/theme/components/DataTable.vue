<template>
  <v-data-table
    :items="themeList"
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
    <template v-slot:footer.page-text="item">
      {{ item | pageText }}
    </template>
    <template v-slot:item.record="{ item }">
      {{ getRecordIndex(item.id) }}
    </template>
    <template v-slot:item.parent_id="{ item }">
      {{ getParentName(item.parent_id).name }}
    </template>
    <template v-slot:item.created_at="{ item }">
      {{ item.created_at | hireDate }}
    </template>
    <template v-slot:no-data> داده ای موجود نیست </template>
    <template v-slot:loading> در حال دریافت اطلاعات ... </template>
  </v-data-table>
</template>

<script>
import moment from "moment-jalaali";
import { mapActions, mapGetters } from "vuex";
import mixinTable from "@commen/table/mixins/table";
import { themeTypes } from "../store/types";
export default {
  mixins: [mixinTable],
  data: () => ({
    dialogDisable: false,
    dialogModify: false,
    headerDataTableClass: "blue lighten-4",
    headers: [
      {
        text: "ردیف",
        align: "start",
        sortable: false,
        value: "record",
      },
      { text: "نام تم", value: "name", sortable: false },
      { text: "دسته بندی", value: "parent_id", sortable: false },
    ],
  }),
  computed: {
    ...mapGetters("admin/theme", {theme:"item", themeList:"list"}),
  },
  filters: {
    pageText({ pageStart = -1, itemsLength = 0 }) {
      return `${pageStart} از ${itemsLength}`;
    },
    hireDate(value) {
      return moment(value).format("jYYYY/jMM/jDD");
    },
  },
  methods: {
    ...mapActions("admin/theme", {
      getAllTheme: themeTypes.GET_ALL_ASYNC,
    }),
    getRecordIndex(targetId) {
      return this.themeList.map((theme) => theme.id).indexOf(targetId) + 1;
    },
    getParentName(targetId) {
      let parentTheme = this.themeList.find(
        (theme) => theme.parent_id == targetId
      );
      return parentTheme ?? "ندارد";
    },
  },
  created() {
    if (this.themeList.length == 0) this.getAllTheme({ service:"Theme"});
  },
};
</script>

<style lang="scss" scoped></style>

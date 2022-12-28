<template>
  <v-data-table
    :items="themeList"
    :loading="tableLoading"
    class="elevation-1 rounded-lg"
    :headers="tableHeader(headerDataTableClass)"
    :page="pagination.currentPage"
    :server-items-length="pagination.total"
    @update:page="changePage"
    loading-text="در حال دریافت اطلاعات ..."
    no-results-text="هیچ داده ای یافت نشد ..."
    no-data-text="داده ای موجود نیست ..."
    :footer-props="{
      'show-current-page': true,
      'items-per-page-options': [10],
      'disable-items-per-page': true,
      'page-text': `صفحه ${pagination.currentPage} از ${pagination.totalPages} `,
    }"
  >
    <template v-slot:item.parent_id="{ item }">
      {{ getParentName(item.parent_id).name }}
    </template>
    <template #footer.prepend>
      <v-sheet class="pr-2 text-body-2">{{
        `نتایج : ${pagination.total}`
      }}</v-sheet>
      <v-spacer></v-spacer>
    </template>
  </v-data-table>
</template>

<script>
import moment from "moment-jalaali";
import { mapActions, mapGetters } from "vuex";
import mixinTable from "@applets/commen/table/mixins/table";
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
        value: "id",
      },
      { text: "نام تم", value: "name", sortable: false },
      { text: "دسته بندی", value: "parent_id", sortable: false },
    ],
  }),
  computed: {
    ...mapGetters("admin/theme", {
      theme: "item",
      themeList: "list",
      pagination: "pagination/pagination",
      formLoading: "loading/formLoading",
      tableLoading: "loading/tableLoading",
    }),
  },
  methods: {
    ...mapActions("admin/theme", {
      getAllTheme: themeTypes.GET_ALL_ASYNC,
    }),
    getParentName(targetId) {
      let parentTheme = this.themeList.find(
        (theme) => theme.parent_id == targetId
      );
      return parentTheme ?? "ندارد";
    },
    changePage(e) {
      this.pagination.currentPage = e;
      this.getAllTheme({
        service,
        payload: {
          max_no: this.pagination.perPage,
          from_page: this.pagination.currentPage,
        },
      });
    },
  },
  created() {
    if (this.themeList.length == 0) this.getAllTheme({ service: "Theme" });
  },
};
</script>

<style lang="scss" scoped></style>

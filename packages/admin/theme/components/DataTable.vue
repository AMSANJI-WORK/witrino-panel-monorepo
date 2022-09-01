<template>
  <v-data-table
    :items="themeList"
    :loading="tableLoading"
    class="elevation-1 rounded-lg"
    :headers="tableHeader(headerDataTableClass)"
    :footer-props="{
      showCurrentPage: true,
      itemsPerPageText: 'تعداد آیتم به اضای هر صفحه',
    }"
  >
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
import TableMixin from "@shared/mixins/table";
import { themeTypes } from "@packages/admin/theme/store/types";
export default {
  mixins: [TableMixin],
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
    ...mapGetters("admin/theme", ["theme", "themeList"]),
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
      getAllTheme: `get/${themeTypes.GET_ALL_THEME_ASYNC}`,
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
    if (this.themeList.length == 0) this.getAllTheme();
  },
};
</script>

<style lang="scss" scoped></style>

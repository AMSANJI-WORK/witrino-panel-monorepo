<template>
  <v-data-table
    :items="list"
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
    <template v-slot:top>
      <DisableDialog
        v-model="dialogDisable"
        :disableItemConfirm="disableItemConfirm"
        :disableItem="disableItem"
      />
    </template>
    <template v-slot:footer.page-text="item">
      {{ item | pageText }}
    </template>
    <template v-slot:item.record="{ item }">
      {{ getRecordIndex(item.id) }}
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <v-icon small color="red" @click="disableItem(item.id)">
        mdi-delete
      </v-icon>
      <v-icon
        small
        color="yellow darken-3"
        class="mx-2"
        @click="$router.push(`${item.id}/edit`)"
      >
        mdi-pencil
      </v-icon>

      <v-icon small color="blue" @click="$router.push(`${item.id}/preview`)">
        mdi-eye
      </v-icon>
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
import { mapActions, mapGetters } from "vuex";
import mixinTable from "@commen/table/mixins/table";
import { planTypes } from "@packages/admin/plan/store/types";
import DisableDialog from "@packages/admin/roles/components/DialogDisable.vue";
import loadingFormPlan from "@packages/admin/plan/mixins/loading";
export default {
  components: {
    DisableDialog,
  },
  mixins: [mixinTable, loadingFormPlan],
  data: () => ({
    dialogDisable: false,
    headerDataTableClass: "blue lighten-4",
    headers: [
      {
        text: "ردیف",
        align: "start",
        sortable: false,
        value: "id",
      },
      { text: "نام پلن", value: "title", sortable: false },
      { text: "توضیحات", value: "description", sortable: false },
      {
        text: "عملیات",
        value: "actions",
        sortable: false,
      },
    ],
  }),
  computed: {
    ...mapGetters("admin/plan", ["list"]),
    ...mapGetters("admin/plan/pagination", { pagination: "pagination" }),
    currentUserId() {
      return JSON.parse(localStorage.getItem("userId"));
    },
  },
  filters: {
    pageText({ pageStart = -1, itemsLength = 0 }) {
      return `${pageStart} از ${itemsLength}`;
    },
  },
  methods: {
    ...mapActions("admin/plan", {
      getAllPlan: planTypes.GET_ALL_ASYNC,
      deletePlan: planTypes.DELETE_ASYNC,
      disablePlan: planTypes.DISABLE_ASYNC,
    }),
    changePage(e) {
      this.pagination.currentPage = e;
      this.getAllUser({
        service,
        payload: {
          max_no: this.pagination.perPage,
          from_page: this.pagination.currentPage,
        },
      });
    },

    disableItem(targetId) {
      this.editedId = targetId;
      this.dialogDisable = true;
    },
    disableItemConfirm() {
      this.disablePlan({
        service: "Plan",
        payload: {
          id: this.editedId,
          updated_id: this.currentUserId,
        },
      }).then(() => (this.dialogDisable = !this.dialogDisable));
    },
  },
  created() {
    if (this.list.length == 0) this.getAllPlan({ service: "Plan" });
  },
};
</script>

<style lang="scss" scoped></style>

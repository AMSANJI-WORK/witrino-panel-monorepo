<template>
  <v-data-table
    :items="roleList"
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
      <DialogModify
        v-model="dialogModify"
        :has-activator="false"
        :edited-id="editedId"
      />
    </template>

    <template v-slot:item.created_at="{ item }">
      {{ item.created_at | hireDate }}
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <v-icon small color="red" @click="disableItem(item.id)">
        mdi-delete
      </v-icon>
      <v-icon
        small
        color="yellow darken-3"
        class="mx-2"
        @click="editItem(item.id)"
      >
        mdi-pencil
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
import moment from "moment-jalaali";
import { mapActions, mapGetters } from "vuex";
import mixinTable from "@commen/table/mixins/table";
import RoleMixin from "../mixins/modify";
import { roleTypes } from "../store/types";
import DisableDialog from "./DialogDisable.vue";
import DialogModify from "./DialogModify.vue";
import loadingFormRole from "../mixins/loading";
let service = "Role";
export default {
  components: {
    DisableDialog,
    DialogModify,
  },
  mixins: [mixinTable, RoleMixin, loadingFormRole],
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
      { text: "نام سطح", value: "name" },
      { text: "نام انگلیسی", value: "name_en" },
      { text: "تاریخ ایجاد", value: "created_at" },
      {
        text: "عملیات",
        value: "actions",
        sortable: false,
      },
    ],
  }),
  computed: {
    ...mapGetters("admin/role", {
      roleList: "list",
      pagination: "pagination/pagination",
    }),
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
    ...mapActions("admin/role", {
      getAllRole: roleTypes.GET_ALL_ASYNC,
      deleteRole: roleTypes.DELETE_ASYNC,
      disableRole: roleTypes.DISABLE_ASYNC,
    }),
    changePage(e) {
      this.pagination.currentPage = e;
      this.getAllRole({
        service,
        payload: {
          max_no: this.pagination.perPage,
          from_page: this.pagination.currentPage,
        },
      });
    },
    editItem(targetId) {
      this.editedId = targetId;
      this.dialogModify = true;
    },
    disableItem(targetId) {
      this.editedId = targetId;
      this.dialogDisable = true;
    },
    disableItemConfirm() {
      this.disableRole({
        service,
        payload: {
          id: this.editedId,
          updated_id: this.userId,
        },
      }).then(() => (this.dialogDisable = !this.dialogDisable));
    },
  },
  created() {
    if (this.roleList.length == 0) this.getAllRole({ service });
  },
};
</script>

<style lang="scss" scoped></style>

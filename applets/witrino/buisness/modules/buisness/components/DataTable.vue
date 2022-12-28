<template>
  <v-data-table
    :items="userList"
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
      <v-dialog v-model="dialogDisable" max-width="500px">
        <v-card>
          <v-card-title class="text-h5"
            >آیا از حذف این داده اطمینان دارید ؟</v-card-title
          >
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="blue darken-1"
              text
              @click="dialogDisable = !dialogDisable"
              >انصراف
            </v-btn>
            <v-btn color="blue darken-1" text @click="disableItemConfirm"
              >بله</v-btn
            >
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-dialog>
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
import mixinTable from "@applets/commen/table/mixins/table";
import loadingFormUser from "../mixins/loading";
import { userTypes } from "../store/types";
const service = "User";
export default {
  mixins: [mixinTable, loadingFormUser],
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
      { text: "نام کاربر", value: "full_name" },
      { text: "کد ملی", value: "national_no" },
      { text: "موبایل", value: "mobile" },
      { text: "ایمیل", value: "email" },
      {
        text: "عملیات",
        value: "actions",
        sortable: false,
      },
    ],
  }),
  computed: {
    ...mapGetters("admin/user", {
      userList: "list",
      pagination: "pagination/pagination",
    }),
  },
  methods: {
    ...mapActions("admin/user", {
      getAllUser: userTypes.GET_ALL_ASYNC,
      deleteUser: userTypes.DELETE_ASYNC,
      disableUser: userTypes.DISABLE_ASYNC,
    }),
    disableItem(targetId) {
      this.editedId = targetId;
      this.dialogDisable = true;
    },
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
    disableItemConfirm() {
      this.disableUser({
        service,
        payload: {
          id: this.editedId,
          updated_id: this.currentUserId,
        },
      }).then(() => (this.dialogDisable = !this.dialogDisable));
    },
  },
  created() {
    if (this.userList.length == 0)
      this.getAllUser({
        service,
        payload: {
          max_no: this.pagination.perPage,
          from_page: this.pagination.currentPage,
        },
      });
  },
};
</script>

<style lang="scss" scoped></style>

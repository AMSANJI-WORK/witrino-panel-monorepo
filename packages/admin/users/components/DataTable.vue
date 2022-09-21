<template>
  <v-data-table
    :items="list"
    :loading="tableLoading"
    class="elevation-1 rounded-lg"
    :headers="tableHeader(headerDataTableClass)"
    :footer-props="{
      'show-current-page': true,
      'items-per-page-options': [10],
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
      <span class="pr-2">{{ `نتایج : ${pagination.total}` }}</span>
      <v-spacer></v-spacer>
    </template>
    <template v-slot:no-data> داده ای موجود نیست </template>
    <template v-slot:loading> در حال دریافت اطلاعات ... </template>
  </v-data-table>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import mixinTable from "@commen/table/mixins/table";
import loadingFormUser from "../mixins/loading";

import { userTypes } from "../store/types";
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
        value: "record",
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
    ...mapGetters("admin/user", ["list"]),
    ...mapGetters("admin/user/pagination", { pagination: "pagination" }),
  },
  filters: {
    pageText({ pageStart = -1, itemsLength = 0 }) {
      return `${pageStart} از ${itemsLength}`;
    },
  },
  methods: {
    ...mapActions("admin/user", {
      getAllUser: userTypes.GET_ALL_ASYNC,
      deleteUser: userTypes.DELETE_ASYNC,
      disableUser: userTypes.DISABLE_ASYNC,
    }),
    getRecordIndex(targetId) {
      return this.list.map((user) => user.id).indexOf(targetId) + 1;
    },
    disableItem(targetId) {
      this.editedId = targetId;
      this.dialogDisable = true;
    },
    changePagination(e) {
      console.log(e);
    },
    disableItemConfirm() {
      this.disableUser({
        service: "User",
        payload: {
          id: this.editedId,
          updated_id: this.currentUserId,
        },
      }).then(() => (this.dialogDisable = !this.dialogDisable));
    },
  },
  created() {
    if (this.list.length == 0)
      this.getAllUser({
        service: "User",
        payload: {
          max_no: this.pagination.perPage,
          from_page: this.pagination.currentPage,
        },
      });
  },
};
</script>

<style lang="scss" scoped></style>

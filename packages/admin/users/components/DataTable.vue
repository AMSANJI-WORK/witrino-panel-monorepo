<template>
  <v-data-table
    :items="userList"
    :loading="tableLoading"
    class="elevation-1 rounded-lg"
    :headers="tableHeader(headerDataTableClass)"
    :footer-props="{
      showCurrentPage: true,
      itemsPerPageText: 'تعداد آیتم به اضای هر صفحه',
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
    <template v-slot:no-data> داده ای موجود نیست </template>
    <template v-slot:loading> در حال دریافت اطلاعات ... </template>
  </v-data-table>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import TableMixin from "@shared/mixins/table";
import { userTypes } from "../store/types";
export default {
  mixins: [TableMixin],
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
    ...mapGetters("admin/user", ["userList"]),
  },
  filters: {
    pageText({ pageStart = -1, itemsLength = 0 }) {
      return `${pageStart} از ${itemsLength}`;
    },
  },
  methods: {
    ...mapActions("admin/user", {
      getAllUser: `get/${userTypes.GET_ALL_USER_ASYNC}`,
      deleteUser: `delete/${userTypes.DELETE_USER_ASYNC}`,
      disableUser: `disable/${userTypes.DISABLE_USER_ASYNC}`,
    }),
    getRecordIndex(targetId) {
      return this.userList.map((user) => user.id).indexOf(targetId) + 1;
    },
    disableItem(targetId) {
      this.editedId = targetId;
      this.dialogDisable = true;
    },
    disableItemConfirm() {
      this.disableUser({
        id: this.editedId,
        updated_id: this.currentUserId,
      }).then(() => (this.dialogDisable = !this.dialogDisable));
    },
  },
  created() {
    if (this.userList.length == 0) this.getAllUser();
  },
};
</script>

<style lang="scss" scoped></style>

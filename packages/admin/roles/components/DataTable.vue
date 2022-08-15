<template>
  <v-data-table
    :items="roles"
    :loading="tableLoading"
    class="elevation-1 rounded-lg"
    :headers="tableHeader(headerDataTableClass)"
    :footer-props="{
      showCurrentPage: true,
      itemsPerPageText: 'تعداد آیتم به اضای هر صفحه',
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
    <template v-slot:footer.page-text="item">
      {{ item | pageText }}
    </template>
    <template v-slot:item.record="{ item }">
      {{ getRecordIndex(item.id) }}
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
    <template v-slot:no-data> داده ای موجود نیست </template>
    <template v-slot:loading> در حال دریافت اطلاعات ... </template>
  </v-data-table>
</template>

<script>
import moment from "moment-jalaali";
import { mapActions, mapGetters } from "vuex";
import TableMixin from "@shared/mixins/table";
import RoleMixin from "../mixins/modify";
import { roleTypes } from "../store/types";
import DisableDialog from "./DialogDisable.vue";
import DialogModify from "./DialogModify.vue";
export default {
  components: {
    DisableDialog,
    DialogModify,
  },
  mixins: [TableMixin, RoleMixin],
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
    ...mapGetters("admin/role", ["roles"]),
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
      getAllRole: `get/${roleTypes.GET_ALL_ROLE_ASYNC}`,
      deleteRole: `delete/${roleTypes.DELETE_ROLE_ASYNC}`,
      disableRole: `disable/${roleTypes.DISABLE_ROLE_ASYNC}`,
    }),
    getRecordIndex(targetId) {
      return this.roles.map((role) => role.id).indexOf(targetId) + 1;
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
        id: this.editedId,
        updated_id: this.userId,
      }).then(() => (this.dialogDisable = !this.dialogDisable));
    },
  },
  created() {
    if (this.roles.length == 0) this.getAllRole();
  },
};
</script>

<style lang="scss" scoped></style>

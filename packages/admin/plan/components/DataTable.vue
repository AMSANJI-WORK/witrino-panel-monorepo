<template>
  <v-data-table
    :items="planList"
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
import { planTypes } from "@packages/admin/plan/store/types";
import DisableDialog from "@packages/admin/roles/components/DialogDisable.vue";
import Cookies from "js-cookie";
export default {
  components: {
    DisableDialog,
  },
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
    ...mapGetters("admin/plan", ["planList"]),
    currentUserId() {
      return Cookies.get("userId") ?? null;
    },
  },
  filters: {
    pageText({ pageStart = -1, itemsLength = 0 }) {
      return `${pageStart} از ${itemsLength}`;
    },
  },
  methods: {
    ...mapActions("admin/plan", {
      getAllPlan: `get/${planTypes.GET_ALL_PLAN_ASYNC}`,
      deletePlan: `delete/${planTypes.DELETE_PLAN_ASYNC}`,
      disablePlan: `disable/${planTypes.DISABLE_PLAN_ASYNC}`,
    }),
    getRecordIndex(targetId) {
      return this.planList.map((plan) => plan.id).indexOf(targetId) + 1;
    },
    disableItem(targetId) {
      this.editedId = targetId;
      this.dialogDisable = true;
    },
    disableItemConfirm() {
      this.disablePlan({
        id: this.editedId,
        updated_id: this.currentUserId,
      }).then(() => (this.dialogDisable = !this.dialogDisable));
    },
  },
  created() {
    if (this.planList.length == 0) this.getAllPlan();
  },
};
</script>

<style lang="scss" scoped></style>

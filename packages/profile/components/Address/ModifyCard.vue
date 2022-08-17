<template>
  <v-sheet elevation="0" class="pa-sm-4">
    <UserAddressList />
    <v-card
      outlined
      elevation="0"
      class="rounded-lg my-4"
      style="border: 3px dashed #dddddd"
    >
      <AddTemplate :toggle="toggle" />
    </v-card>
    <v-dialog v-model="showModifyForm" max-width="700">
      <v-card
        v-show="showModifyForm"
        outlined
        elevation="1"
        class="rounded-lg pa-sm-5 pa-2"
      >
        <ModifyCardForm
          ref="modifyUserAddressFrom"
          :edited-index="editedIndex"
        />
        <v-card-actions class="px-3">
          <v-spacer></v-spacer>
          <v-btn
            color="red darken-1"
            class="rounded-lg"
            text
            dark
            @click="closeDialog"
          >
            بستن
            <v-icon right>mdi-close</v-icon>
          </v-btn>
          <v-btn color="primary" class="rounded-lg">
            ثبت آدرس
            <v-icon right>mdi-plus</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-sheet>
</template>

<script>
import AddTemplate from "./AddTemplate.vue";
import ModifyCardForm from "./ModifyCardForm.vue";
import UserAddressList from "./List.vue";
export default {
  components: {
    UserAddressList,
    ModifyCardForm,
    AddTemplate,
  },
  data: () => ({
    editedIndex: -1,
    showModifyForm: false,
  }),
  filters: {
    transitionMode(value) {
      return value ? "out-in" : "n-out";
    },
  },

  methods: {
    closeDialog() {
      this.showModifyForm = !this.showModifyForm;
      this.$refs.modifyUserAddressFrom.resetFrom();
    },
    toggle() {
      this.showModifyForm = !this.showModifyForm;
    },
  },
};
</script>

<style lang="scss" scoped></style>

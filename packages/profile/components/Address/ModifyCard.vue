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
    <ModifyCardDialog v-model="showModifyForm" />
  </v-sheet>
</template>

<script>
import UserAddressList from "./List.vue";
import AddTemplate from "./AddTemplate.vue";
import ModifyCardDialog from "./ModifyCardDialog.vue";
export default {
  components: {
    UserAddressList,
    ModifyCardDialog,
    AddTemplate,
  },
  data: () => ({
    showModifyForm: false,
  }),

  methods: {
    toggle() {
      this.showModifyForm = !this.showModifyForm;
    },
  },
};
</script>

<style lang="scss" scoped></style>

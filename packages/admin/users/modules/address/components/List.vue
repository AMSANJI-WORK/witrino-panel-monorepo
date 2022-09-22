<template>
  <v-sheet class="transparent">
    <v-item-group mandatory>
      <v-col
        v-for="address in list"
        :key="address.id"
        cols="12"
        class="pa-0"
      >
        <v-item v-slot="{ active, toggle }">
          <v-slide-y-transition>
            <v-card elevation="4" class="rounded-lg my-3">
              <v-card-title
                class="grey rounded-t-lg white--text text-subtitle-2 rounded-b-0 py-2"
              >
                {{ address.title }}
                <v-spacer></v-spacer>
                <v-tooltip top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-sheet class="transparent" v-bind="attrs" v-on="on">
                      <v-switch
                        v-model="active"
                        dense
                        hide-details
                        class="ma-0"
                      ></v-switch>
                    </v-sheet>
                  </template>
                  <span class="text-caption white--text">آدرس منتخب</span>
                </v-tooltip>
              </v-card-title>
              <v-card-text class="d-flex flex-wrap align-stretch pb-0 pt-4">
                <v-col cols="12" sm="6" class="d-flex flex-column">
                  <v-label label="استان" :labelValue="address.province_id" />
                  <v-label label="شهر" :labelValue="address.city_id" />
                  <v-label label="آدرس" :labelValue="address.address" />
                  <v-label
                    label="توضیحات آدرس"
                    :labelValue="address.description"
                  />
                </v-col>
                <v-col cols="12" sm="6">
                  <CardLocation
                    style="min-height: 150px; height: 200px"
                    :lat-lng="address.location | getLocation"
                  />
                </v-col>
              </v-card-text>

              <v-card-actions class="px-5">
                <v-spacer></v-spacer>
                <v-btn
                  color="yellow darken-3"
                  text
                  @click="editItem(address.id)"
                >
                  <v-icon small class="mx-1">mdi-pencil</v-icon>
                  ویرایش
                </v-btn>
                <v-btn
                  color="red accent-3"
                  text
                  @click="disableItem(address.id)"
                >
                  <v-icon small class="mx-1">mdi-delete</v-icon>
                  حذف
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-slide-y-transition>
        </v-item>
      </v-col>
    </v-item-group>
    <CreateCard :toggle="toggleModify" />
    <DialogDisable
      v-model="dialogDisable"
      :disableItemConfirm="disableItemConfirm"
      :disableItem="disableItem"
    />
    <ModifyDialog
      v-model="dialogModify"
      :has-activator="false"
      :edited-id="editedId"
      :on-close="onDialogsClose"
    />
  </v-sheet>
</template>

<script>
import CardLocation from "./CardLocation.vue";
import { mapActions, mapGetters } from "vuex";
import VLabel from "@commen/label/components/Label.vue";
import { userAddressTypes } from "../store/types";
import DialogDisable from "@packages/admin/roles/components/DialogDisable.vue";
import CreateCard from "./CreateCard.vue";
import ModifyDialog from "./ModifyDialog.vue";

export default {
  components: {
    DialogDisable,
    ModifyDialog,
    CardLocation,
    CreateCard,
    VLabel,
  },
  data: () => ({
    editedId: -1,
    deleteId: -1,
    dialogDisable: false,
    dialogModify: false,
  }),
  filters: {
    getLocation(value) {
      return value.split(", ");
    },
  },
  computed: {
    ...mapGetters("admin/user/address", ["item", "list"]),
    userId() {
      return JSON.parse(localStorage.getItem("userId"));
    },
  },
  methods: {
    ...mapActions("admin/user/address", {
      disableUserAddress: `${userAddressTypes.DISABLE_ASYNC}`,
    }),
    onDialogsClose() {
      this.editedId = -1;
    },
    editItem(targetId) {
      this.editedId = targetId;
      this.toggleModify();
    },
    toggleModify() {
      this.dialogModify = !this.dialogModify;
    },
    disableItem(targetId) {
      this.deleteId = targetId;
      this.dialogDisable = true;
    },
    disableItemConfirm() {
      this.disableUserAddress({
        service: "Address",
        payload: {
          id: this.deleteId,
          updated_id: this.userId,
        },
      }).then(() =>
        this.$nextTick(() => {
          this.dialogDisable = !this.dialogDisable;
          this.deleteId = -1;
        })
      );
    },
  },
};
</script>

<style lang="scss" scoped></style>

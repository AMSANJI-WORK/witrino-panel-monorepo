<template>
  <v-sheet class="transparent" v-model="selectedAddress">
    <v-item-group mandatory>
      <v-col
        v-for="address in userAddressList"
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
                  <LocationList
                    style="min-height: 150px; height: 200px"
                    :lat="address.location | getLat"
                    :long="address.location | getLong"
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
    <DialogModify
      v-model="dialogModify"
      :has-activator="false"
      :edited-id="editedId"
      :on-close="onDialogsClose"
    />
  </v-sheet>
</template>

<script>
import Cookies from "js-cookie";
import LocationList from "./LocationList.vue";
import { mapActions, mapGetters } from "vuex";
import VLabel from "@shared/components/Reusable/VLabel.vue";
import { userTypes } from "@packages/admin/users/store/types";
import DialogDisable from "@packages/admin/roles/components/DialogDisable.vue";
import CreateCard from "./CreateCard.vue";
import DialogModify from "./DialogModify.vue";

export default {
  components: {
    DialogDisable,
    DialogModify,
    LocationList,
    CreateCard,
    VLabel,
  },
  data: () => ({
    editedId: -1,
    deleteId: -1,
    dialogDisable: false,
    dialogModify: false,
    selectedAddress: null,
  }),
  watch: {
    selectedAddress(newValue) {
      console.log(newValue);
    },
  },
  filters: {
    getLat(value) {
      let convertedLocationToArray = value.split(", ");
      return Number(convertedLocationToArray[0]);
    },
    getLong(value) {
      let convertedLocationToArray = value.split(", ");
      return Number(convertedLocationToArray[1]);
    },
  },
  computed: {
    ...mapGetters("admin/user/address", ["userAddress", "userAddressList"]),
    userId() {
      return Cookies.get("userId") ?? null;
    },
  },
  methods: {
    ...mapActions("admin/user/address", {
      disableUserAddress: `disable/${userTypes.DISABLE_USER_ADDRESS_ASYNC}`,
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
    async disableItemConfirm() {
      await this.disableUserAddress({
        id: this.deleteId,
        updated_id: this.userId,
      });

      this.dialogDisable = !this.dialogDisable;
      this.deleteId = -1;
    },
  },
};
</script>

<style lang="scss" scoped></style>

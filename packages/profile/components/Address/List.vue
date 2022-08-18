<template>
  <v-item-group mandatory>
    <v-col
      v-for="address in userAddressList"
      :key="address.id"
      cols="12"
      class="pa-0"
    >
      <v-item v-slot="{ active, toggle }">
        <v-card elevation="4" class="rounded-lg">
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
              <v-label label="توضیحات آدرس" :labelValue="address.description" />
            </v-col>
            <v-col cols="12" sm="6">
              <LocationList
                style="min-height: 150px; height: 200px"
                :lat="address.location | getLat"
                :long="address.location | getLong"
              />
            </v-col>
          </v-card-text>
          <ModifyCardDialog v-model="showModifyForm" :edited-id="editedId" />

          <v-card-actions class="px-5">
            <v-spacer></v-spacer>
            <v-btn color="yellow darken-3" text @click="editItem(address.id)">
              <v-icon small class="mx-1">mdi-pencil</v-icon>
              ویرایش
            </v-btn>
            <v-btn color="red accent-3" text @click="editItem(address.id)">
              <v-icon small class="mx-1">mdi-delete</v-icon>
              حذف
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-item>
    </v-col>
  </v-item-group>
</template>

<script>
import { mapGetters } from "vuex";
import UserAddressMixin from "@packages/profile/mixins/user.address";
import VLabel from "@shared/components/Reusable/VLabel.vue";
import ModifyCardDialog from "./ModifyCardDialog.vue";
import LocationList from "./LocationList.vue";
export default {
  mixins: [UserAddressMixin],
  components: {
    ModifyCardDialog,
    LocationList,
    VLabel,
  },
  data() {
    return {
      showModifyForm: false,
      editedId: -1,
    };
  },
  watch: {},
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
    ...mapGetters("admin/user/address", ["userAddressList"]),
  },
  methods: {
    async editItem(targetId) {
      this.editedId = targetId;
      this.toggle();
    },
    toggle() {
      this.showModifyForm = !this.showModifyForm;
    },
  },
};
</script>

<style lang="scss" scoped></style>

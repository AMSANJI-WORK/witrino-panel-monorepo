<template>
  <v-dialog
    :value="value"
    @input="$emit('input', $event)"
    @click:outside="closeDialog"
    max-width="700"
  >
    <v-card outlined elevation="1" class="rounded-lg pa-sm-5 pa-2">
      <v-card-title class="text-h5">{{ editedId | formTitle }}</v-card-title>

      <v-form
        ref="UserAddress"
        class="d-flex flex-wrap"
        @submit.prevent="addAddress"
      >
        <v-col cols="12" sm="6" class="pb-0">
          <v-text-field
            :loading="fromLoading"
            v-model="userAddressDto.title"
            :rules="[rules.required]"
            class="rounded-lg"
            dense
            outlined
            label="عنوان آدرس"
          >
          </v-text-field>
        </v-col>
        <v-col cols="12" sm="6" class="pb-0">
          <v-autocomplete
            dense
            outlined
            :items="zoneList"
            class="rounded-lg"
            label="انتخاب استان"
            item-text="name"
            item-value="id"
            v-model="userAddressDto.province_id"
            :loading="fromLoading"
            :rules="[rules.required]"
          ></v-autocomplete>
        </v-col>
        <v-col cols="12" sm="6" class="pb-0">
          <v-autocomplete
            dense
            :items="selectStateCities"
            outlined
            class="rounded-lg"
            item-text="name"
            item-value="id"
            v-model="userAddressDto.city_id"
            label="انتخاب شهر"
            :loading="fromLoading"
            :rules="[rules.required]"
          ></v-autocomplete>
        </v-col>
        <v-col cols="12" sm="6" class="pb-0">
          <v-textarea
            dense
            outlined
            rows="1"
            class="rounded-lg"
            label="آدرس"
            v-model="userAddressDto.address"
            :loading="fromLoading"
            :rules="[rules.required]"
          ></v-textarea>
        </v-col>
        <v-col cols="12" class="pb-0">
          <v-textarea
            dense
            rows="3"
            outlined
            class="rounded-lg"
            label="توضیحات"
            v-model="userAddressDto.description"
            :loading="fromLoading"
            :rules="[rules.required]"
          ></v-textarea>
        </v-col>
        <v-col cols="12">
          <LocationList
            style="min-height: 150px; height: 200px"
            :marker-drageble="true"
            :lat="userAddressDto.location | getLat"
            :long="userAddressDto.location | getLong"
          />
        </v-col>
      </v-form>
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
        <v-btn
          dark
          :color="submitBtnColor"
          class="rounded-lg"
          @click="save"
          :loading="submitBtnLoading"
        >
          {{ submitBtnText }}
          <v-icon right>mdi-plus</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import Cookies from "js-cookie";
import LocationList from "./LocationList.vue";
import FormMixin from "@shared/mixins/form";
import ZoneMixin from "@packages/zone/mixin/zone";
import UserAddressMixin from "@packages/profile/mixins/user.address";
export default {
  mixins: [UserAddressMixin, FormMixin, ZoneMixin],
  components: {
    LocationList,
  },
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    editedId: {
      types: Number,
      default: -1,
    },
  },
  data() {
    return {
      defualtUserAddressDto: {
        is_default: null,
        created_id: null,
        user_id: null,
        title: null,
        description: null,
        location: "36.27071757534224, 59.616540997291864",
        province_id: null,
        city_id: null,
        address: null,
      },
      userAddressDto: {
        is_default: null,
        created_id: null,
        user_id: null,
        title: null,
        description: null,
        location: "36.27071757534224, 59.616540997291864",
        province_id: null,
        city_id: null,
        address: null,
      },
    };
  },
  watch: {
    editedId(newValue) {
      console.log(newValue);
    },
  },
  filters: {
    formTitle(value) {
      return `${value == -1 ? "افزودن" : "ویرایش"} سطح دسترسی`;
    },
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
    userId() {
      return Cookies.get("userId");
    },
    selectStateCities() {
      return this.zoneList.filter(
        (zone) => zone.parent_id == this.userAddressDto.province_id
      );
    },
    submitBtnColor() {
      if (this.editedId != -1) return "yellow darken-3";
      return "light-blue";
    },
    submitBtnText() {
      if (this.editedId != -1) return "اعمال تغییرات";
      return "ثبت اطلاعات";
    },
  },

  watch: {
    value(newValue) {
      if (!newValue) this.closeDialog();
      else this.getUserAddress();
    },
  },
  methods: {
    closeDialog() {
      this.$emit("input", false);
      this.$nextTick(() => {
        Object.assign(this.userAddressDto, this.defualtUserAddressDto);
        this.resetFrom();
      });
    },
    resetFrom() {
      return this.$refs.UserAddress.reset();
    },
    async getUserAddress() {
      if (this.editedId != -1) {
        await this.getOneUserAddress({ id: this.editedId });
        this.userAddressDto = Object.assign({}, this.userAddress);
      }
    },
    async save() {
      this.userAddressDto.user_id = this.$route.params.userId;
      if (this.$refs.UserAddress.validate()) {
        if (this.editedId == -1) {
          await this.createUserAddress({
            ...this.userAddressDto,
            created_id: this.userId,
          });
        } else
          await this.updateUserAddress({
            id: this.editedId,
            update_id: this.userId,
            ...this.userAddressDto,
          });
        this.closeDialog();
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>

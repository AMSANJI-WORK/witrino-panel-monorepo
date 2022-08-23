<template>
  <v-dialog
    :value="value"
    @input="$emit('input', $event)"
    max-width="800"
    @click:outside="cancel"
  >
    <v-card class="rounded-lg">
      <v-card-title class="text-h5 grey lighten-2">{{
        editedId | formTitle
      }}</v-card-title>
      <v-spacer></v-spacer>
      <v-card-text class="pb-0">
        <v-container>
          <v-form ref="userAddress" class="d-flex flex-wrap">
            <v-col cols="12" sm="6" class="pb-0">
              <v-text-field
                :loading="fromLoading"
                v-model="modifyDto.title"
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
                v-model="modifyDto.province_id"
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
                v-model="modifyDto.city_id"
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
                v-model="modifyDto.address"
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
                v-model="modifyDto.description"
                :loading="fromLoading"
                :rules="[rules.required]"
              ></v-textarea>
            </v-col>
            <v-col cols="12">
              <ModifyLocation
                style="min-height: 150px; height: 200px"
                :lat-lng="modifyDto?.location | getLocation"
                :marker-drageble="true"
                :show-inputs="true"
                @update:location="(e) => (modifyDto.location = e)"
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
              @click="cancel"
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
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import Cookies from "js-cookie";
import FormMixin from "@shared/mixins/form";
import ZoneMixin from "@packages/zone/mixin/zone";
import UserAddressMixin from "@packages/admin/users/modules/address/mixins/address";
import ModifyLocation from "./ModifyLocation.vue";
export default {
  components: {
    ModifyLocation,
  },
  mixins: [UserAddressMixin, ZoneMixin, FormMixin],
  props: {
    editedId: {
      types: Number,
      default: -1,
    },
    value: {
      type: Boolean,
      default: false,
    },
    onClose: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      defualtDto: {
        is_default: null,
        created_id: null,
        updated_id: null,
        user_id: null,
        title: null,
        description: null,
        location: null,
        province_id: null,
        city_id: null,
        address: null,
      },
      modifyDto: {
        is_default: null,
        created_id: null,
        updated_id: null,
        user_id: null,
        title: null,
        description: null,
        location: null,
        province_id: null,
        city_id: null,
        address: null,
      },
    };
  },
  watch: {
    editedId(newValue) {
      if (newValue) this.getUserAddressData();
    },
  },
  filters: {
    formTitle(value) {
      return `${value == -1 ? "افزودن" : "ویرایش"} آدرس `;
    },
    getLocation(value) {
      if (value) return value.split(", ");
      return [31.50362930577303, 53.61328125000001];
    },
  },
  computed: {
    selectStateCities() {
      return this.zoneList.filter(
        (zone) => zone.parent_id == this.modifyDto.province_id
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
    userId() {
      return Cookies.get("userId") ?? this.$route.query.userId;
    },
  },
  methods: {
    cancel() {
      this.$refs.userAddress.resetValidation();
      this.modifyDto = Object.assign({}, this.defualtDto);
      this.$emit("input", false);
      this.onClose();
    },
    create() {
      this.createUserAddress({
        ...this.modifyDto,
        user_id: this.userId,
        created_id: this.userId,
      }).then(() => this.$nextTick(() => this.cancel()));
    },
    update() {
      this.updateUserAddress({
        ...this.modifyDto,
        user_id: this.userId,
        updated_id: this.userId,
      }).then(() => this.$nextTick(() => this.cancel()));
    },
    save() {
      if (this.$refs.userAddress.validate()) {
        this.editedId == -1 ? this.create() : this.update();
      }
    },
    getUserAddressData() {
      if (this.editedId != -1)
        this.getOneUserAddress({ id: this.editedId }).then(() => {
          this.modifyDto = Object.assign({}, this.userAddress);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
:deep(.v-text-field--outlined > .v-input__control > .v-input__slot) {
  background: #f6f6f6;
}
:deep(.v-input--is-focused .v-input__slot) {
  background: #fff !important;
}
</style>

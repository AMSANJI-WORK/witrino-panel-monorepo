<template>
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
        class="rounded-lg"
        label="انتخاب استان"
        v-model="userAddressDto.province_id"
        :loading="fromLoading"
        :rules="[rules.required]"
      ></v-autocomplete>
    </v-col>
    <v-col cols="12" sm="6" class="pb-0">
      <v-autocomplete
        dense
        outlined
        class="rounded-lg"
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
    <v-sheet class="pa-2" width="100%">
      <LocationList :lat="55.05" :long="55.05" />
    </v-sheet>
  </v-form>
</template>

<script>
import FormMixin from "@shared/mixins/form";
import LocationList from "./LocationList.vue";
export default {
  mixins: [FormMixin],
  components: {
    LocationList,
  },
  props: {
    editedIndex: {
      type: Number,
      default: -1,
    },
  },
  data() {
    return {
      userAddressDto: {
        is_default: null,
        created_id: null,
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

  methods: {
    resetFrom() {
      return this.$refs.UserAddress.reset();
    },
  },
};
</script>

<style lang="scss" scoped></style>

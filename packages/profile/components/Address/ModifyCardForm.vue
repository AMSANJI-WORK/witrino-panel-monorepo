<template>
  <v-form
    ref="editProfile"
    class="d-flex flex-wrap"
    @submit.prevent="addAddress"
  >
    <v-col cols="12" sm="6" class="pb-0">
      <v-text-field
        :loading="fromLoading"
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
        label="انتخاب شهر"
        :loading="fromLoading"
        :rules="[rules.required]"
      ></v-autocomplete>
    </v-col>
    <v-col cols="12" sm="6" class="pb-0">
      <v-autocomplete
        dense
        outlined
        class="rounded-lg"
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
        :loading="fromLoading"
        :rules="[rules.required]"
      ></v-textarea>
    </v-col>
    <v-col cols="12" class="pt-0">
      <LocationList :lat="55.05" :long="55.05" />
    </v-col>
  </v-form>
</template>

<script>
import FormMixin from "@shared/mixins/form";
import LocationList from "./LocationList.vue";
export default {
  mixins: [FormMixin],
  props: {
    editedIndex: {
      type: Number,
      default: -1,
    },
  },
  components: {
    LocationList,
  },
};
</script>

<style lang="scss" scoped></style>

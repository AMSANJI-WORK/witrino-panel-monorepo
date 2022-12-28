<template>
  <v-sheet class="rounded-lg mx-2 py-10 px-4">
    <v-form ref="product" class="d-flex flex-wrap">
      <v-col cols="12" sm="6" class="pb-0">
        <!-- :loading="formLoading"
                :rules="[rules.required]"
                v-model="editableInquiry.title" -->
        <v-text-field
          class="rounded-lg"
          dense
          outlined
          label="نام محصول"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" class="pb-0">
        <!-- :loading="formLoading"
                :rules="[rules.required]"
                v-model="editableInquiry.title" -->
        <v-text-field
          class="rounded-lg"
          dense
          outlined
          label="دسته بندی"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" class="pb-0">
        <!-- :loading="formLoading"
                :rules="[rules.required]"
                v-model="editableInquiry.title" -->
        <v-text-field
          class="rounded-lg"
          dense
          outlined
          label="قیمت محصول / خدمات"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" class="pb-0">
        <!-- :loading="formLoading"
                :rules="[rules.required]"
                v-model="editableInquiry.title" -->
        <v-text-field
          class="rounded-lg"
          dense
          outlined
          label="وضعیت موجودی"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" class="pb-0">
        <!-- :loading="formLoading"
                :rules="[rules.required]"
                v-model="editableInquiry.title" -->
        <v-text-field
          class="rounded-lg"
          dense
          outlined
          label="وضعیت محصول"
        ></v-text-field>
      </v-col>
    </v-form>
  </v-sheet>
</template>
<script>
import SectionDivider from "@applets/commen/section-divider/components/SectionDivider.vue";
export default {
  components: {
    SectionDivider,
  },
  data() {
    return {
      colCommenClass: "py-0",
    };
  },
};
</script>

<style lang="scss" scoped></style>

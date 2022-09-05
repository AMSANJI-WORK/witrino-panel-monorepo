<template>
  <v-sheet class="rounded-lg mx-2 py-10 px-4">
    <v-form ref="product" class="d-flex flex-wrap">
      <v-col cols="12" sm="6" :class="colCommenClass">
        <!-- :loading="fromLoading"
                :rules="[rules.required]"
                v-model="editableInquiry.title" -->
        <v-text-field
          class="rounded-lg"
          dense
          outlined
          label="نام محصول"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" :class="colCommenClass">
        <!-- :loading="fromLoading"
                :rules="[rules.required]"
                v-model="editableInquiry.title" -->
        <v-text-field
          class="rounded-lg"
          dense
          outlined
          label="دسته بندی"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" :class="colCommenClass">
        <!-- :loading="fromLoading"
                :rules="[rules.required]"
                v-model="editableInquiry.title" -->
        <v-text-field
          class="rounded-lg"
          dense
          outlined
          label="قیمت محصول / خدمات"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" :class="colCommenClass">
        <!-- :loading="fromLoading"
                :rules="[rules.required]"
                v-model="editableInquiry.title" -->
        <v-text-field
          class="rounded-lg"
          dense
          outlined
          label="وضعیت موجودی"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" :class="colCommenClass">
        <!-- :loading="fromLoading"
                :rules="[rules.required]"
                v-model="editableInquiry.title" -->
        <v-text-field
          class="rounded-lg"
          dense
          outlined
          label="وضعیت محصول"
        ></v-text-field>
      </v-col>
      <v-col cols="12" :class="`${colCommenClass} px-0`">
        <SectionDivider
          bind-class="my-2 pa-0"
          title-class="text-subtitle-2"
          card-title-class="pa-0"
          title="تصویر محصول"
          :visible-divider="false"
        />
      </v-col>
      <v-col cols="12" :class="`${colCommenClass} pr-4`">
        <UploadImage />
      </v-col>
      <v-col cols="12" :class="`${colCommenClass} px-0`">
        <section-divider
          bind-class="my-2 pa-0"
          title-class="text-subtitle-2"
          card-title-class="pa-0"
          title="گالری محصول"
          :visible-divider="false"
        />
      </v-col>
      <v-col cols="12" :class="`${colCommenClass} pr-4`">
        <UploadImage />
      </v-col>
    </v-form>
  </v-sheet>
</template>
<script>
import UploadImage from "@shared/modules/Upload/components/UploadImage.vue";
import SectionDivider from "@commen/section-divider/components/SectionDivider.vue";
export default {
  components: {
    UploadImage,
    SectionDivider,
  },
  data() {
    return {
      colCommenClass: "py-0",
    };
  },
};
</script>

<style lang="scss" scoped>

</style>

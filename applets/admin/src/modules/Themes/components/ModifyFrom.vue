<template>
  <v-sheet class="rounded-lg mx-2 py-10 px-4">
    <v-form ref="theme" class="d-flex flex-wrap">
      <v-col cols="12" sm="6" :class="colCommenClass">
        <!-- :loading="fromLoading"
                :rules="[rules.required]"
                v-model="editableInquiry.title" -->
        <v-text-field
          class="rounded-lg"
          dense
          outlined
          label="نام تم"
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
          label="قیمت تم / خدمات"
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
          label="وضعیت تم"
        ></v-text-field>
      </v-col>
      <v-col cols="12" :class="`${colCommenClass} px-0`">
        <SectionDivider
          bind-class="my-2 pa-0"
          title-class="text-subtitle-2"
          card-title-class="pa-0"
          title="تصویر تم"
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
          title="گالری تم"
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
import SectionDivider from "@shared/components/Reusable/SectionDivider.vue";
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
:deep(.v-text-field--outlined > .v-input__control > .v-input__slot) {
  background: #fff;
}
</style>

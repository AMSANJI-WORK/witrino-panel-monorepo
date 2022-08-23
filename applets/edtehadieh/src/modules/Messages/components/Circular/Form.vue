<template>
  <v-sheet class="rounded-lg mx-2 py-10 px-4">
    <v-form ref="product" class="d-flex flex-wrap">
      <v-col cols="12" sm="4" :class="colCommenClass">
        <!-- 
          :loading="fromLoading"
          :rules="[rules.required]"
          v-model="editableInquiry.title" -->
        <v-text-field
          class="rounded-lg"
          dense
          outlined
          label="عنوان پیام"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="4" :class="colCommenClass">
        <!--
           :loading="fromLoading"
           :rules="[rules.required]"
           v-model="editableInquiry.title" 
        -->
        <v-text-field
          class="rounded-lg"
          dense
          outlined
          label="ارسال به"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="4" :class="colCommenClass">
        <!-- 
          :loading="fromLoading"
          :rules="[rules.required]"
          v-model="editableInquiry.title" -->
        <v-text-field
          class="rounded-lg"
          dense
          outlined
          label="دسته بندی"
        ></v-text-field>
      </v-col>
      <v-col cols="12" :class="colCommenClass">
        <!-- 
          :loading="fromLoading"
          :rules="[rules.required]"
          v-model="editableInquiry.title" 
         -->
        <v-textarea
          class="rounded-lg"
          dense
          outlined
          label="متن پیام"
        ></v-textarea>
      </v-col>

      <v-col cols="12" :class="`${colCommenClass} px-0`">
        <SectionDivider
          bind-class="my-2 pa-0"
          title-class="text-subtitle-2"
          card-title-class="pa-0"
          title="فایل پیوست"
          :visible-divider="false"
        />
      </v-col>
      <v-col cols="12" :class="`${colCommenClass} pr-4`">
        <UploadImage />
      </v-col>
      <v-col cols="12" :class="`${colCommenClass}`" class="d-flex">
        <v-spacer class="d-none d-md-block"></v-spacer>
        <v-btn color="primary" class="px-10 rounded-lg d-none d-md-block"
          >ارسال</v-btn
        >
        <v-btn color="primary" block class="rounded-lg d-md-none d-block"
          >ارسال</v-btn
        >
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

<style lang="scss" scoped></style>

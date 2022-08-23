<template>
  <!-- :disabled="remainingDays < 0" -->
  <v-card elevation="0" class="mx-auto px-4 my-1" max-width="800">
    <v-card-subtitle
      class="transparent pb-3 pr-0 font-weight-bold"
      @click="modify(dataSource.id, 'preview')"
      >{{ dataSource.title }}</v-card-subtitle
    >
    <v-hover>
      <template v-slot:default="{ hover }">
        <div
          class="transition-swing rounded-lg cursor-pointer"
          :class="hover ? 'elevation-3' : 'elevation-0'"
          :style="productBackgroundColor"
        >
          <v-card-text
            @click="modify(dataSource.id, 'preview')"
            class="px-3 pa-6 line-height"
            >{{ dataSource.description }}</v-card-text
          >
          <v-card-actions
            class="line-height pt-0 d-flex flex-row flex-wrap justify-lg-start justify-space-between"
          >
            <v-chip
              :ripple="false"
              color="white"
              text-color="#FF0157"
              class="ml-md-2 my-2 my-sm-0 text-body-2"
              >مدت اعتبار (از تاریخ شروع) :
              <span class="grey--text">
                &nbsp; {{ remainingDays }} روز دیگر</span
              >
            </v-chip>
            <v-chip
              :ripple="false"
              color="white"
              text-color="#45D266"
              class="mx-md-2 my-2 mx-1"
            >
              مقدار / واحد :
              <span class="grey--text">
                &nbsp;{{ dataSource.data.amount }}&nbsp;&nbsp;{{
                  dataSource.data.unit?.name
                }}</span
              >
            </v-chip>
            <RequestLink
              v-if="isCurrentUser"
              :newRequestCount="2"
              :productId="dataSource.id"
            />

            <v-spacer></v-spacer>
            <div v-if="isCurrentUser" class="d-flex flex-row flex-wrap mt-2">
              <v-btn
                color="#82807B"
                small
                text
                :ripple="false"
                @click="modify(dataSource.id, 'edit')"
              >
                ویرایش
                <v-icon>mdi-pencil</v-icon>
              </v-btn>

              <v-btn
                color="red"
                small
                text
                :ripple="false"
                @click="deleteInquiryAsync(dataSource.id)"
              >
                پایان استعلام
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </div>
          </v-card-actions>
        </div>
      </template>
    </v-hover>
  </v-card>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import Types from "@packages/polotik/Inquiry/Store/modules/root/types";
import RequestLink from "@polotik/components/Reusable/RequestLink.vue";
const { mapActions } = createNamespacedHelpers("guilds/inquiry");

export default {
  components: {
    RequestLink,
  },
  props: {
    dataSource: Object,
    currentUserId: Number,
  },
  computed: {
    calculateEndDate() {
      let date = new Date(this.editableBarter.start);
      date.setDate(date.getDate() + this.endDay);
      return date;
    },
    isCurrentUser() {
      return this.dataSource.user_id == this.currentUserId;
    },
    productBackgroundColor() {
      return this.isCurrentUser
        ? "background: #C8F9F0;"
        : "background: #d9e6ff;";
    },
    compareStartDateWithCurrentDate() {
      const oneDay = 1000 * 60 * 60 * 24;
      const startDateDefrenceWithCurrentDate =
        new Date(this.dataSource.start) - new Date(Date.now());

      const defrencePerDay = Math.ceil(
        startDateDefrenceWithCurrentDate / oneDay
      );
      if (defrencePerDay <= 0) return new Date(Date.now());
      return new Date(this.dataSource.start);
    },
    remainingDays() {
      const timeDefrence = Math.abs(
        this.compareStartDateWithCurrentDate - new Date(this.dataSource.end)
      );
      const oneDay = 1000 * 60 * 60 * 24;
      return Math.ceil(timeDefrence / oneDay);
    },
  },
  methods: {
    ...mapActions({
      deleteInquiryAsync: Types.DELETE_INQUIRY_ASYNC,
    }),
    modify(itemId, path) {
      return this.$router.push({ path: `/inquiry/${itemId}/${path}` });
    },
  },
};
</script>

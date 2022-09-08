<template>
  <!-- :disabled="remainingDays < 0" -->
  <v-card elevation="0" class="mx-auto px-4 my-1" max-width="800">
    <v-card-subtitle
      class="transparent pb-3 pr-0 font-weight-bold d-flex justify-space-between"
      @click="preview"
      >{{ dataSource.title }}
      <span class="text-body-2">
        {{ dataSource.created_at | timeTofa }}
      </span>
    </v-card-subtitle>
    <v-hover>
      <template v-slot:default="{ hover }">
        <v-sheet
          class="transition-swing rounded-lg cursor-pointer"
          :class="hover ? 'elevation-3' : 'elevation-0'"
          :style="productBackgroundColor"
        >
          <v-card-text @click="preview" class="px-3 pa-6 line-height">{{
            dataSource.description
          }}</v-card-text>
          <v-card-actions
            class="line-height pt-0 d-flex flex-row flex-wrap justify-lg-start justify-space-between"
          >
            <v-chip
              :ripple="false"
              color="white"
              text-color="p-red-primary-darken"
              class="ml-md-2 my-2 my-sm-0 text-body-2"
              >مدت اعتبار (از تاریخ شروع) :
              <span class="grey--text">
                &nbsp; {{ remainingDays }} روز دیگر</span
              >
            </v-chip>
            <v-chip
              :ripple="false"
              color="white"
              v-show="dataSource.data?.unit"
              text-color="p-green-primary-darken"
              class="mx-md-2 my-2 mx-1"
            >
              مقدار / واحد :
              <span class="grey--text">
                &nbsp;{{ dataSource.data?.amount }}&nbsp;&nbsp;{{
                  dataSource.data.unit?.name
                }}</span
              >
            </v-chip>
            <RequestLink
              v-if="isCurrentUser && dataSource.offers_count != 0"
              :new-request-count="dataSource.offers_count"
              :productId="dataSource.id"
            />

            <v-spacer></v-spacer>
            <v-sheet
              v-if="isCurrentUser"
              class="d-flex flex-row flex-wrap mt-2 transparent"
            >
              <v-btn
                color="p-secondary-primary"
                small
                text
                :ripple="false"
                @click="edit"
              >
                ویرایش
                <v-icon>mdi-pencil</v-icon>
              </v-btn>

              <v-btn
                color="p-red-primary"
                small
                text
                :ripple="false"
                @click="deleteRequest(dataSource.id)"
              >
                حذف
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </v-sheet>
          </v-card-actions>
        </v-sheet>
      </template>
    </v-hover>
  </v-card>
</template>

<script>
import moment from "moment-jalaali";
import RequestLink from "@polotik/components/Reusable/RequestLink.vue";
import Cookies from "js-cookie";
export default {
  components: {
    RequestLink,
  },
  props: {
    dataSource: Object,
    dateStart: String,
    dateEnd: String,
  },
  filters: {
    timeTofa: function (value) {
      return moment(value).format("HH:mm | jYYYY/jMM/jDD");
    },
  },
  computed: {
    activeService() {
      return this.$route.matched[1].path;
    },
    isCurrentUser() {
      return this.dataSource.user_id == Cookies.get("user-id");
    },
    productBackgroundColor() {
      return this.isCurrentUser
        ? "background: #C8F9F0;"
        : "background: #d9e6ff;";
    },
    compareStartDateWithCurrentDate() {
      const oneDay = 1000 * 60 * 60 * 24;
      const startDateDefrenceWithCurrentDate =
        new Date(this.dateStart) - new Date(Date.now());

      const defrencePerDay = Math.ceil(
        startDateDefrenceWithCurrentDate / oneDay
      );
      if (defrencePerDay <= 0) return new Date(Date.now());
      return new Date(this.dateStart);
    },
    remainingDays() {
      const timeDefrence = Math.abs(
        this.compareStartDateWithCurrentDate - new Date(this.dateEnd)
      );
      const oneDay = 1000 * 60 * 60 * 24;
      return Math.ceil(timeDefrence / oneDay);
    },
  },
  methods: {
    preview() {
      this.$router.push(`${this.activeService}/${this.dataSource.id}/preview`);
    },
    edit() {
      this.$router.push(`${this.activeService}/${this.dataSource.id}/edit`);
    },
    deleteRequest(requestId) {
      const TARGET_SERVICE = this.activeService.slice(1).toUpperCase();
      this.$store.dispatch(
        `guilds${this.activeService}/DELETE_${TARGET_SERVICE}_ASYNC`,
        requestId
      );
    },
  },
};
</script>

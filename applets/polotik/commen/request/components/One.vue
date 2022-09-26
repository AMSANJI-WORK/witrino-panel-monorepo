<template>
  <!--  -->
  <v-card
    :disabled="remainingDays > 0 && remainingDays < 1"
    elevation="0"
    class="mx-auto px-4 my-1"
  >
    <v-card-subtitle
      class="transparent pb-1 px-2 font-weight-bold d-flex justify-space-between"
      @click="pushRoute('preview')"
      >{{ dataSource.title }}
      <span class="text-body-2">
        {{ dataSource.created_at | timeTofa }}
      </span>
    </v-card-subtitle>
    <v-hover>
      <template v-slot:default="{ hover }">
        <v-sheet
          class="transition-swing rounded-lg cursor-pointer"
          :class="[
            hover ? 'elevation-3' : 'elevation-0',
            isCurrentUser
              ? 'p-blue-lighten-primary'
              : 'p-purple-lighten-primary',
          ]"
        >
          <v-card-text @click="pushRoute('preview')" class="px-3 line-height">
            <v-card-subtitle class="px-1 py-0">
              {{ dataSource.description }}
            </v-card-subtitle>

            <v-sheet
              class="d-flex flex-wrap transparent pt-2"
              v-if="dataSource.data.category"
            >
              <v-chip
                v-for="category in dataSource.data.category"
                class="mx-1"
                :key="category.id"
                x-small
                text-color="p-green-primary"
              >
                {{ `# ${category.name}` }}
              </v-chip>
            </v-sheet>
          </v-card-text>
          <v-divider></v-divider>

          <v-card-actions class="line-height pa-1">
            <v-chip
              :ripple="false"
              color="white"
              small
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
              small
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
            <LinkToOffer
              v-if="isCurrentUser && dataSource.offers_count != 0"
              :new-request-count="dataSource.offers_count"
              :productId="dataSource.id"
            />

            <v-spacer></v-spacer>

            <v-btn
              color="p-secondary-primary"
              v-if="isCurrentUser"
              small
              text
              :ripple="false"
              @click="pushRoute('edit')"
            >
              ویرایش
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-dialog v-model="dialog" width="500" v-if="isCurrentUser">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="p-red-primary"
                  small
                  text
                  v-bind="attrs"
                  v-on="on"
                  :ripple="false"
                >
                  حذف
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </template>

              <v-card elevation="2" class="rounded-lg">
                <v-card-title class="grey lighten-2 text-h5">
                  درخواست {{ dataSource.title }}
                </v-card-title>
                <v-card-text class="pa-4">
                  آیا از حذف این درخواست مطمئن هستید ؟
                </v-card-text>
                <v-divider></v-divider>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn text color="rounded-lg" @click="dialog = false">
                    خیر
                  </v-btn>
                  <v-btn
                    dark
                    color="p-green-primary rounded-lg"
                    :loading="formLoading"
                    @click="deleteRequest(dataSource.id)"
                  >
                    بله
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-card-actions>
        </v-sheet>
      </template>
    </v-hover>
  </v-card>
</template>

<script>
import Cookies from "js-cookie";
import moment from "moment-jalaali";
import LinkToOffer from "./LinkToOffer.vue";
import CommenMixin from "../mixins/commen";
export default {
  components: {
    LinkToOffer,
  },
  mixins: [CommenMixin],
  data() {
    return {
      dialog: false,
    };
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
    formLoading() {
      return this.$store.getters[
        `${this.activeService}/formLoading/formLoading`
      ];
    },
    isCurrentUser() {
      return this.dataSource.user_id == Cookies.get("user-id");
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
    pushRoute(path) {
      this.$router.push(`${this.dataSource.id}/${path}`);
    },
    deleteRequest(requestId) {
      this.$store.dispatch(`${this.activeService}/DELETE_ASYNC`, requestId);
    },
  },
};
</script>

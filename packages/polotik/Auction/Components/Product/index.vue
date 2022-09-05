<template>
  <v-card elevation="0" class="mx-auto px-4 my-1" max-width="800">
    <v-card-subtitle
      class="transparent pb-3 pr-0 font-weight-black d-flex justify-space-between"
      @click="modify(dataSource.id, 'preview')"
      >{{ dataSource.title }}
      <span class="text-body-2">
        {{ dataSource.created_at | timeTofa }}
      </span>
    </v-card-subtitle>
    <v-hover>
      <template v-slot:default="{ hover }">
        <div
          class="transition-swing rounded-lg cursor-pointer"
          :style="productBackgroundColor"
          :class="hover ? 'elevation-3' : 'elevation-0'"
        >
          <v-card-text
            @click="modify(dataSource.id, 'preview')"
            class="px-3 pa-6 line-height"
            >{{ dataSource.description }}</v-card-text
          >
          <v-card-actions class="line-height pt-0 d-flex flex-row flex-wrap">
            <RequestLink
              v-if="isCurrentUser && dataSource.offers_count != 0"
              :new-request-count="dataSource.offers_count"
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
                @click="deleteAuctionAsync(dataSource.id)"
              >
                پایان مزایده
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
const { mapActions } = createNamespacedHelpers("guilds/auction");
import moment from "moment-jalaali";
import RequestLink from "@polotik/components/Reusable/RequestLink.vue";
export default {
  components: {
    RequestLink,
  },
  props: {
    dataSource: Object,
    currentUserId: Number,
  },
  filters: {
    timeTofa: function (value) {
      return moment(value).format("HH:mm | jYYYY/jMM/jDD");
    },
  },
  computed: {
    isCurrentUser() {
      return this.dataSource.user_id == this.currentUserId;
    },
    productBackgroundColor() {
      return this.isCurrentUser
        ? "background: #C8F9F0;"
        : "background: #d9e6ff;";
    },
    count() {
      return this.dataSource?.data?.count;
    },
  },
  methods: {
    ...mapActions({ deleteAuctionAsync: "DELETE_AUCTION_ASYNC" }),
    modify(itemId, path) {
      return this.$router.push({ path: `/auction/${itemId}/${path}` });
    },
  },
};
</script>

<style lang="scss" scoped>
.line-height {
  line-height: 1.8rem;
}
</style>

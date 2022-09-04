<template>
  <div class="d-flex flex-row flex-wrap" style="width: 100">
    <v-col cols="12" sm="6" class="py-0">
      <v-label
        label="مبلغ ضمانت"
        :label-value="
          auction.data.conditions.guarantee.price | numberToStringFa
        "
      />
    </v-col>
    <v-col cols="12" sm="6" class="py-0">
      <v-label label="نوع ضمانت" />
      <v-chip
        x-small
        v-for="(type, index) in auction.data.conditions.guarantee.type"
        :key="index"
        >{{ type }}</v-chip
      >
    </v-col>
    <v-col cols="12" sm="6" class="py-0">
      <v-label
        v-if="auction.data.conditions.docs.isFree"
        label="مبلغ اسناد"
        label-value="رایگان"
      />
      <v-label
        v-else
        label="مبلغ اسناد"
        :label-value="auction.data.conditions.docs.price | numberToStringFa"
      />
    </v-col>
    <v-col cols="12" sm="6" class="py-0">
      <v-label
        label="نحوه تهیه اسناد"
        :label-value="auction.data.conditions.docs.collectType"
      />
    </v-col>
    <v-col cols="12" sm="6" class="py-0">
      <v-label
        label="شرکت اشخاص حقیقی"
        :label-value="
          auction.data.conditions.participateRealPerson ? 'دارد' : 'ندارد'
        "
      />
    </v-col>
    <v-col cols="12" class="py-0">
      <v-label
        label="شرایط متقاضی"
        :label-value="auction.data.conditions.askerInfo"
      />
    </v-col>
    <v-col cols="12">
      <div
        v-if="!routeIsPreview"
        class="d-flex flex-row-reverse"
        style="width: 100%"
      >
        <v-btn
          class="white--text font-weight-bold justify-end"
          x-small
          rounded
          color="yellow darken-4"
          @click="changeStep(2)"
          >ویرایش</v-btn
        >
      </div>
      <v-divider class="my-4"></v-divider>
    </v-col>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import UtilityMixin from "@shared/mixins/utility";
const { mapMutations, mapGetters } = createNamespacedHelpers("guilds/auction");
import VLabel from "@commen/label/components/Label.vue";
export default {
  mixins: [UtilityMixin],
  components: { VLabel },
  computed: {
    ...mapGetters(["auction"]),
    routeIsPreview() {
      return this.$route.path.includes("preview");
    },
  },
  methods: {
    ...mapMutations({ changeStep: "CHANGE_STEP" }),
  },
};
</script>

<style lang="scss" scoped></style>

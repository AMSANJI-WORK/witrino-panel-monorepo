<template>
  <v-sheet class="transparent">
    <section-divider
      title-class="text-subtitle-2"
      bind-class="mb-5 mt-3"
      title="پروفایل کاربری"
      cardTitleClass="px-0"
    >
    </section-divider>
    <Card />
  </v-sheet>
</template>

<script>
import { mapActions } from "vuex";
import { userTypes } from "@packages/admin/users/store/types";
import SectionDivider from "@commen/section-divider/components/SectionDivider.vue";
import Card from "../components/Card/index.vue";
export default {
  components: {
    SectionDivider,
    Card,
  },
  methods: {
    ...mapActions({
      getUser: `admin/user/get/${userTypes.GET_ONE_USER_ASYNC}`,
    }),
  },
  created() {
    this.getUser({ id: this.$route.params.userId });
  },
};
</script>

<style lang="scss" scoped></style>

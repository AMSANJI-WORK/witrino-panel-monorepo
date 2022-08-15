<template>
  <v-sheet class="transparent">
    <section-divider
      title-class="text-subtitle-2"
      bind-class="mb-5 mt-3"
      title="پروفایل کاربری"
      cardTitleClass="px-0"
    >
      <template #action>
        <v-btn color="primary" small :to="`/${activeLayout}/home`">
          بازگشت به داشبورد
          <v-icon dark small right> mdi-arrow-left</v-icon>
        </v-btn>
      </template>
    </section-divider>
    <Card />
  </v-sheet>
</template>

<script>
import Cookies from "js-cookie";
import { mapActions } from "vuex";
import { userTypes } from "@admin/modules/Users/store/types";
import SectionDivider from "@shared/components/Reusable/SectionDivider.vue";
import Card from "@shared/modules/Profile/components/Card/index.vue";
export default {
  components: {
    SectionDivider,
    Card,
  },
  computed: {
    activeLayout() {
      return Cookies.get("from-path");
    },
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

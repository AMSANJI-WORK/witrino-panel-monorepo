import { mapGetters } from "vuex";
const saleLoadingMixin = {
  data() {
    return {
      rules: {
        required: (v) => {
          if (v instanceof Array && v.length == 0) {
            return "این فیلد اجباری است.";
          }
          return !!v || "این فیلد اجباری است.";
        },
        image: (v) => v.size < 2000000 || "عکس نباید بیشتر از 2 مگابایت باشد",
      },
    };
  },
  computed: {
    ...mapGetters("guilds/sale", {
      skeletonLoading: "skeletonLoading/skeletonLoading",
      formLoading: "formLoading/formLoading",
    }),
  },
};
export default saleLoadingMixin;

import { mapGetters } from "vuex";
//rules.required
const fromRules = {
  data() {
    return {
      rules: {
        required: (v) => {
          if (v instanceof Array && v.length == 0) {
            return "این فیلد اجباری است.";
          }
          return !!v || "این فیلد اجباری است.";
        },
      },
    };
  },
  computed: {
    ...mapGetters("shared/loading", ["formLoading"]),
  },
};

export default fromRules;

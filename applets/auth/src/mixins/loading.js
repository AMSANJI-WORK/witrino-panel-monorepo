import { mapGetters } from "vuex";
const loadingFormAuth = {
  computed: {
    ...mapGetters("auth/loading", ["formLoading"]),
  },
};
export default loadingFormAuth;

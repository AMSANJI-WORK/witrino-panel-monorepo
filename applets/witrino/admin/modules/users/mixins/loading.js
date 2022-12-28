import { mapGetters } from "vuex";
const loadingFormUser = {
  computed: {
    ...mapGetters("admin/user/loading", ["formLoading", "tableLoading"]),
  },
};
export default loadingFormUser;

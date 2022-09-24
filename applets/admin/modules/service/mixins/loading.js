import { mapGetters } from "vuex";
const LoadingFormService = {
  computed: {
    ...mapGetters("admin/service/loading", ["formLoading", "tableLoading"]),
  },
};
export default LoadingFormService;

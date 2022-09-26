import { mapGetters } from "vuex";
const loadingFormPlan = {
  computed: {
    ...mapGetters("admin/plan/loading", ["formLoading", "tableLoading"]),
  },
};
export default loadingFormPlan;

import { mapGetters } from "vuex";
const loadingFormRole = {
  computed: {
    ...mapGetters("admin/role/loading", ["formLoading", "tableLoading"]),
  },
};
export default loadingFormRole;

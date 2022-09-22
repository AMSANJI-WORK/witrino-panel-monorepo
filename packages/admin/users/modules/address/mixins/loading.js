import { mapGetters } from "vuex";
const loadingFormUserAddress = {
  computed: {
    ...mapGetters("admin/user/address/loading", ["formLoading"]),
  },
};
export default loadingFormUserAddress;

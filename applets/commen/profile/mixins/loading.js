import { mapGetters } from "vuex";
const loadingFormProfile = {
  computed: {
    ...mapGetters("profile/loading", ["formLoading"]),
  },
};
export default loadingFormProfile;

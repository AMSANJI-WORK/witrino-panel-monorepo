import { mapGetters } from "vuex";
const RequestMixin = {
  computed: {
    ...mapGetters("tender/request", ["user"]),
  },
};
export default RequestMixin;

import { mapGetters } from "vuex";
const RequestMixin = {
  computed: {
    ...mapGetters("sale/request", ["user"]),
  },
};
export default RequestMixin;

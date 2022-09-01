import { mapGetters } from "vuex";
const RequestMixin = {
  computed: {
    ...mapGetters("guilds/sale/request", ["user"]),
  },
};
export default RequestMixin;

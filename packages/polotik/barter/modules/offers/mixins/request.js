import { mapGetters } from "vuex";
const RequestMixin = {
  computed: {
    ...mapGetters("guilds/barter/request", ["user"]),
  },
};
export default RequestMixin;

import { mapGetters } from "vuex";
const RequestMixin = {
  computed: {
    ...mapGetters("guilds/tender/request", ["user"]),
  },
};
export default RequestMixin;

import { mapGetters } from "vuex";
const RequestMixin = {
  computed: {
    ...mapGetters("guilds/auction/request", ["user"]),
  },
};
export default RequestMixin;

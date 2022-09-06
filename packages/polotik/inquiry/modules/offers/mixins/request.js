import { mapGetters } from "vuex";
const RequestMixin = {
  computed: {
    ...mapGetters("guilds/inquiry/request", ["user"]),
  },
};
export default RequestMixin;

import { mapGetters, mapActions } from "vuex";
import { userAddressTypes } from "@packages/admin/users/modules/address/store/types";
const UserAddressMixin = {
  data() {
    return {};
  },
  computed: {
    ...mapGetters("admin/user/address", ["item", "list"]),
  },
  methods: {
    ...mapActions("admin/user/address", {
      updateUserAddress: userAddressTypes.UPDATE_ASYNC,
      getOneUserAddress: userAddressTypes.GET_ONE_ASYNC,
      getAllUserAddress: userAddressTypes.GET_ALL_ASYNC,
      createUserAddress: userAddressTypes.CREATE_ASYNC,
      disableUserAddress: userAddressTypes.DISABLE_ASYNC,
    }),
  },
};
export default UserAddressMixin;

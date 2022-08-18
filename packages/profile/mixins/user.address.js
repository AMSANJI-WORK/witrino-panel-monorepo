import Cookies from "js-cookie";
import { mapActions, mapGetters } from "vuex";
import { userTypes } from "@packages/admin/users/store/types";
const UserAddressMixin = {
  computed: {
    ...mapGetters("admin/user/address", ["userAddress", "userAddressList"]),
    currentUserId() {
      return Cookies.get("userId") ?? null;
    },
  },
  methods: {
    ...mapActions("admin/user/address", {
      updateUserAddress: `update/${userTypes.UPDATE_USER_ADDRESS_ASYNC}`,
      getOneUserAddress: `get/${userTypes.GET_ONE_USER_ADDRESS_ASYNC}`,
      getAllUserAddress: `get/${userTypes.GET_ALL_USER_ADDRESS_ASYNC}`,
      createUserAddress: `create/${userTypes.CREATE_USER_ADDRESS_ASYNC}`,
      disableUserAddress: `create/${userTypes.DISABLE_USER_ADDRESS_ASYNC}`,
    }),
  },
};
export default UserAddressMixin;

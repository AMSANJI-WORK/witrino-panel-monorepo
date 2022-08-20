import { createNamespacedHelpers } from "vuex";
const { mapActions, mapGetters } =
  createNamespacedHelpers("admin/user/address");
import { userTypes } from "@packages/admin/users/store/types";
const UserAddressMixin = {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["userAddress", "userAddressList"]),
  },
  methods: {
    ...mapActions({
      updateUserAddress: `update/${userTypes.UPDATE_USER_ADDRESS_ASYNC}`,
      getOneUserAddress: `get/${userTypes.GET_ONE_USER_ADDRESS_ASYNC}`,
      getAllUserAddress: `get/${userTypes.GET_ALL_USER_ADDRESS_ASYNC}`,
      createUserAddress: `create/${userTypes.CREATE_USER_ADDRESS_ASYNC}`,
      disableUserAddress: `disable/${userTypes.DISABLE_USER_ADDRESS_ASYNC}`,
    }),
  },
};
export default UserAddressMixin;

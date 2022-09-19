// import Cookies from "js-cookie";
// import moment from "moment-jalaali";

import { mapActions, mapGetters } from "vuex";
import { userTypes } from "@packages/admin/users/store/types";
import Cookies from "js-cookie";
const ProfileMixin = {
  data: () => ({
    editableUser: {
      is_activated: null,
      is_viewed: null,
      updated_id: null,
      created_id: null,
      full_name: null,
      jensiat: null,
      national_no: null,
      father_name: null,
      mobile: null,
      email: null,
      username: null,
      password: null,
      money_deposit: null,
      image_avatar: null,
      phone: null,
      roles: [],
    },
  }),
  computed: {
    ...mapGetters("admin/user", ["user", "userList", "userRoleId"]),
    checkRoutePass() {
      return this.$route.fullPath.includes("edit");
    },
    currentUserId() {
      return Cookies.get("userId") ?? null;
    },
    submitBtnColor() {
      if (this.checkRoutePass) return "yellow darken-3";
      return "light-blue";
    },
    submitBtnText() {
      if (this.checkRoutePass) return "اعمال تغییرات";
      return "ثبت اطلاعات";
    },
  },
  methods: {
    ...mapActions("admin/user", {
      updateUser: `update/${userTypes.UPDATE_USER_ASYNC}`,
      getUser: `get/${userTypes.GET_ONE_USER_ASYNC}`,
      getAllUser: `get/${userTypes.GET_ALL_USER_ASYNC}`,
      getAllUserAddress: `address/get/${userTypes.GET_ALL_USER_ADDRESS_ASYNC}`,
    }),
    getUserInfo() {
      if (this.currentUserId)
        this.getUser({ id: this.currentUserId }).then(() =>
          Object.assign(this.editableUser, this.user)
        );
    },
  },
  created() {
    if (this.userList.length == 0) this.getAllUser();
    this.getUserInfo();
    this.getAllUserAddress({
      form_vars: [
        {
          name: "Param_WithWhere",
          value: "1",
          valueType: [
            {
              field: "user_id",
              operator: "=",
              value: this.currentUserId,
            },
          ],
        },
      ],
    });
  },
};
export default ProfileMixin;

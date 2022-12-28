import { mapActions, mapGetters } from "vuex";
import { userTypes } from "@applets/witrino/admin/modules/users/store/types";
import { userAddressTypes } from "@applets/witrino/admin/modules/users/modules/address/store/types";
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
    ...mapGetters("admin/user", ["item", "list", "userRoleId"]),
    checkRoutePass() {
      return this.$route.fullPath.includes("edit");
    },
    currentUserId() {
      return JSON.parse(localStorage.getItem("userId"));
    },
    submitBtnColor() {
      return this.checkRoutePass ? "yellow darken-3" : "light-blue";
    },
    submitBtnText() {
      return this.checkRoutePass ? "اعمال تغییرات" : "ثبت اطلاعات";
    },
  },
  methods: {
    ...mapActions("admin/user", {
      updateUser: `${userTypes.UPDATE_ASYNC}`,
      getUser: `${userTypes.GET_ONE_ASYNC}`,
      getAllUserAddress: `address/${userAddressTypes.GET_ALL_ASYNC}`,
    }),
    getUserInfo() {
      if (this.currentUserId)
        this.getUser({
          service: "User",
          payload: { id: this.currentUserId },
        }).then(() => Object.assign(this.editableUser, this.item));
    },
  },
  created() {
    this.getUserInfo();
    // this.getAllUserAddress({
    //   service: "Address",
    //   payload: {
    //     form_vars: [
    //       {
    //         name: "Param_WithWhere",
    //         value: "1",
    //         valueType: [
    //           {
    //             field: "user_id",
    //             operator: "=",
    //             value: this.currentUserId,
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // });
  },
};
export default ProfileMixin;

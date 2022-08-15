import { mapActions, mapGetters } from "vuex";
import { userTypes } from "../store/types";
import Cookies from "js-cookie";
const UserMixin = {
  data: () => ({
    editableUser: {
      is_active: null,
      is_viewed: null,
      created_id: null,
      updated_id: null,
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
    ...mapGetters("admin/user", ["user", "users", "userRoleId"]),
    checkRoutePass() {
      return this.$route.fullPath.includes("edit");
    },
    targetUserId() {
      return this.$route.params.id ?? null;
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
      createUser: `create/${userTypes.CREATE_USER_ASYNC}`,
      updateUser: `update/${userTypes.UPDATE_USER_ASYNC}`,
      getUser: `get/${userTypes.GET_ONE_USER_ASYNC}`,
      getAllUser: `get/${userTypes.GET_ALL_USER_ASYNC}`,
    }),
    setUserInfo() {
      Object.assign(this.editableUser, this.user);
    },
    getUserInfo() {
      if (this.targetUserId)
        this.getUser({ id: this.targetUserId }).then(() => this.setUserInfo());
      else if (this.currentUserId && !this.$route.path.includes("create"))
        this.getUser({ id: this.currentUserId }).then(() => this.setUserInfo());
    },
  },
  created() {
    if (this.users.length == 0) this.getAllUser();
    this.getUserInfo();
  },
};
export default UserMixin;

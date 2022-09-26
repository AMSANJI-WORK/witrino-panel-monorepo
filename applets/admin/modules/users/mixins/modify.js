import { mapActions, mapGetters } from "vuex";
import { userTypes } from "../store/types";
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
    ...mapGetters("admin/user", {
      user: "item",
      userList: "list",
      userRoleId: "userRoleId",
    }),
    checkRoutePass() {
      return this.$route.fullPath.includes("edit");
    },
    targetUserId() {
      return this.$route.params.id ?? null;
    },
    currentUserId() {
      return JSON.parse(localStorage.getItem("userId"));
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
      createUser: userTypes.CREATE_ASYNC,
      updateUser: userTypes.UPDATE_ASYNC,
      getUser: userTypes.GET_ONE_ASYNC,
      getAllUser: userTypes.GET_ALL_ASYNC,
    }),
    setUserInfo() {
      Object.assign(this.editableUser, this.user);
    },
    getUserInfo() {
      if (this.targetUserId)
        this.getUser({
          service: "User",
          payload: { id: this.targetUserId },
        }).then(() => this.setUserInfo());
      else if (this.currentUserId && !this.$route.path.includes("create"))
        this.getUser({
          service: "User",
          payload: { id: this.currentUserId },
        }).then(() => this.setUserInfo());
    },
  },
  created() {
    if (this.userList.length == 0)
      this.getAllUser({
        service: "User",
      });
    this.getUserInfo();
  },
};
export default UserMixin;

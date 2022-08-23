import Cookies from "js-cookie";
import { mapActions, mapGetters } from "vuex";
import { roleTypes } from "../store/types";
const RoleMixin = {
  data: () => ({
    editableRole: {
      created_id: null,
      updated_id: null,
      name: null,
      name_en: null,
      permissions: [],
    },
  }),
  computed: {
    ...mapGetters("admin/role", ["role", "roleList"]),
    userId() {
      return Cookies.get("userId");
    },
  },
  methods: {
    ...mapActions("admin/role", {
      createRole: `create/${roleTypes.CREATE_ROLE_ASYNC}`,
      updateRole: `update/${roleTypes.UPDATE_ROLE_ASYNC}`,
      getRole: `get/${roleTypes.GET_ONE_ROLE_ASYNC}`,
      getAllRole: `get/${roleTypes.GET_ALL_ROLE_ASYNC}`,
    }),
  },
};
export default RoleMixin;

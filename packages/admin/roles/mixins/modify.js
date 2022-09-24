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
    ...mapGetters("admin/role", { role: "item", roleList: "list" }),
    userId() {
      return JSON.parse(localStorage.getItem("userId"));
    },
  },
  methods: {
    ...mapActions("admin/role", {
      createRole: roleTypes.CREATE_ASYNC,
      updateRole: roleTypes.UPDATE_ASYNC,
      getRole: roleTypes.GET_ONE_ASYNC,
      getAllRole: roleTypes.GET_ALL_ASYNC,
    }),
  },
};
export default RoleMixin;

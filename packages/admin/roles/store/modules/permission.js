import RepositoryFactory from "@witrino/repositories/factory";
const adminRepository = RepositoryFactory.get("admin");
export default {
  namespaced: true,
  state: () => ({
    permissions: [],
    permission: {
      id: null,
      is_deleted: null,
      created_at: null,
      updated_at: null,
      created_id: null,
      updated_id: null,
      ip: null,
      name: null,
    },
  }),
  getters: {
    permissions: (state) => state.permissions,
    permission: (state) => state.permission,
  },
  mutations: {
    SET_PERMISSIONS(state, payload) {
      state.permissions = [...payload.data.data];
    },
    SET_PERMISSION(state, payload) {
      Object.assign(state.permission, payload);
    },
  },
  actions: {
    async SET_PERMISSIONS_ASYNC({ commit }) {
      try {
        const { data } = await adminRepository.getPermission();
        commit("SET_PERMISSIONS", data);
      } catch (error) {
        console.log(error);
      }
    },
  },
};

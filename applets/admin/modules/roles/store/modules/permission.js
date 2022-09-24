import { getActions, getMutations } from "@applets/commen/reusable-crud/get/get.module";
import gettersCommen from "@applets/commen/reusable-crud/root/root.getters";
import loading from "@commen/loading/modules/form/store";
import pagination from "@commen/pagination/witrino/store";
export default {
  namespaced: true,
  state: () => ({
    list: [],
    item: {
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
    ...gettersCommen,
  },
  mutations: {
    ...getMutations,
  },
  actions: {
    ...getActions,
  },
  modules: {
    loading,
    pagination,
  },
};

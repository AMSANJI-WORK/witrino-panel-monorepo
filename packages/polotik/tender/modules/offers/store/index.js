import state from "./root/state";
import mutations from "./root/mutations";
import actions from "./root/actions";
import getters from "./root/getters";
import upload from "@commen/upload/polotik/store";
import formLoading from '@commen/loading/modules/form/store';
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
  modules: {
    upload,
    formLoading,
  },
};

import { CREATE_FAILURE, CREATE_ASYNC, CREATE_SUCCESS } from "./create.types";
import RepositoryFactory from "@witrino/repositories/factory";
const baseRepository = RepositoryFactory.get("base");
export default {
  async [CREATE_ASYNC]({ commit }, { service, payload }) {
    try {
      commit("loading/TOGGLE_FORM_LOADING");
      const { data } = await baseRepository.create(service, payload);
      commit(CREATE_SUCCESS, data);
    } catch (error) {
      console.log(error);
      commit(CREATE_FAILURE, error);
    } finally {
      commit("loading/TOGGLE_FORM_LOADING");
    }
  },
  [CREATE_SUCCESS](state, payload) {},
  [CREATE_FAILURE](_, error) {},
};

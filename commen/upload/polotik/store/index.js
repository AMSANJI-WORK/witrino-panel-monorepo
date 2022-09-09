import * as TYPES from "./types";
import RepositoryFactory from "@polotik/repositories/factory";
const uploadRepository = RepositoryFactory.get("upload");
export default {
  namespaced: true,
  state: () => ({
    loading: false,
    imageList: [],
  }),
  getters: {
    imageListFormData(state) {
      if (state.imageList.length == 0) return state.imageList;
      const [firstItem, ...otherItems] = state.imageList;
      let formData = new FormData();
      formData.append("file", firstItem);
      otherItems.forEach((file, index) =>
        formData.append(`file ${index + 1}`, file)
      );
      return state.imageList;
    },
    loading(state) {
      return state.loading;
    },
  },
  mutations: {
    [TYPES.UPLOAD_FILE_LOADING_TOGGLE](state) {
      state.loading = !state.loading;
    },
    [TYPES.RESET_IMAGE_LIST](state) {
      state.imageList = [];
    },
    [TYPES.SET_IMAGE_LIST](state, payload) {
      state.imageList = [...payload];
    },
  },
  actions: {
    [TYPES.UPLOAD_FILE_ASYNC]({ commit, getters }, payload) {
      commit(TYPES.UPLOAD_FILE_LOADING_TOGGLE);
      commit(TYPES.SET_IMAGE_LIST, payload);
      return new Promise((resolve, reject) => {
        uploadRepository
          .uploadFile(getters.imageListFormData)
          .then(({ data }) => resolve(data))
          .catch((error) => reject(error))
          .finally(() => {
            commit(TYPES.RESET_IMAGE_LIST);
            commit(TYPES.UPLOAD_FILE_LOADING_TOGGLE);
          });
      });
    },
  },
};

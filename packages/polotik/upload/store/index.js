import actions from "./actions";
import mutations from './mutations';
export default {
  namespaced: true,
  state: () => ({
    images: [],
    loading: false,
  }),
  getters: {
    successUploadedImages(state) {
      return state.images;
    },
  },
  mutations,
  actions,
};

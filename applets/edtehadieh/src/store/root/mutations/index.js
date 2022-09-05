import PaginationMethods from "./paginations";
export default {
  ...PaginationMethods,
  CHANGE_SERVICE(state, payload) {
    state.serviceName = payload;
  },
  TOGGLE_LOADING(state) {
    state.formLoading = !state.formLoading;
    state.submitBtnLoading = !state.submitBtnLoading;
  },
  CHANGE_FORM_REFRENCE(state, payload) {
    state.formRefrence = Object.assign({}, payload);
  },
};

import { getActions, getMutations } from "./get";
import { createActions, createMutations } from "./create";
import { deleteActions, deleteMutations } from "./delete";
import { updateActions, updateMutations } from "./update";
export default {
  namespaced: true,
  state: () => ({
    pagination: { page: 1, lastPage: 1, size: 5, recordCount: 0 },
    offers: [],
    user: {
      name: "رضا رضایی",
      image: "https://i.pravatar.cc/64",
      mobile: "09124342524",
      requestDate: new Date(),
      price: 20000000,
    },
    offer: {
      title: null,
      description: null,
      price: null,
      time: null,
      status: 1,
      data: {},
      request_id: null,
      user_id: null,
    },
  }),
  getters: {
    user: (state) => state.user,
    offers: (state) => state.offers,
    offer: (state) => state.offer,
    pagination: (state) => state.pagination,
  },
  mutations: {
    SET_PAGINATION(state, { target, data }) {
      state[target].page = Number(data.page);
      state[target].lastPage = data.last_page;
      state[target].recordCount = data.count;
    },
    REST_PAGINATION(state) {
      Object.assign(state.selfItemPagination, state.defaultPagination);
      Object.assign(state.pagination, state.defaultPagination);
    },
    ...getMutations,
    ...createMutations,
    ...deleteMutations,
    ...updateMutations,
  },
  actions: {
    ...getActions,
    ...createActions,
    ...deleteActions,
    ...updateActions,
  },
};

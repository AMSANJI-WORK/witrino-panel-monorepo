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
      image: "",
      mobile: "09124342524",
      requestDate: new Date(),
      price: 20000000,
      disciption: `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
       و با استفاده از طراحان گرافیک است،
       چاپگرها و متون بلکه روزنامه و مجله در ستون 
      و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی`,
    },
    offer: {
      id: 11,
      title: null,
      description: null,
      price: null,
      time: null,
      status: 1,
      data: {
        price: null,
      },
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

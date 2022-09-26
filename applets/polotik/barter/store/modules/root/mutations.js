import { createMutations } from "@applets/polotik/commen/request/store/create/create.module";
import { deleteMutations } from "@applets/polotik/commen/request/store/delete/delete.module";
import { getMutations } from "@applets/polotik/commen/request/store/get/get.module";
import { updateMutations } from "@applets/polotik/commen/request/store/update/update.module";

export default {
  ...getMutations,
  ...createMutations,
  ...deleteMutations,
  ...updateMutations,
  REST_BARTER(state) {
    state.barter = {
      title: null,
      description: null,
      start: null,
      end: null,
      status: 1,
      data: {
        service: {
          available: null,
          requested: null,
        },
        placeDelivery: null,
        price: null,
        gallery: [],
        category: {
          available: null,
          requested: null,
        },
        endDay: 1,
      },
    };
  },
  TOGGLE_LOADING(state) {
    state.formLoading = !state.formLoading;
    state.formLoading = !state.formLoading;
  },
  CHANGE_PAGE_PAGINATION(state, payload) {
    state.pagination.page = payload;
  },
  DELETE_IMAGE_FROM_GALLERY(state, payload) {
    state.barter.data.gallery.splice(payload, 1);
  },
};

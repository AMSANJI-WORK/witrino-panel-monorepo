import { getMutations } from "../../../get";
import { createMutations } from "../../../create";
import { deleteMutations } from "../../../delete";
import { updateMutations } from "../../../update";
import setStepData from "./setStepData";
export default {
  ...getMutations,
  ...createMutations,
  ...deleteMutations,
  ...updateMutations,
  ...setStepData,
  TOGGLE_LOADING(state) {
    state.fromLoading = !state.fromLoading;
    state.submitBtnLoading = !state.submitBtnLoading;
  },
  RESET_TENDER(state) {
    state.tender = {
      id: null,
      title: null,
      description: null,
      start: null,
      end: null,
      status: 1,
      user_id: null,
      data: {
        tenderInfo: {
          basePrice: null,
          type: null,
          category: null,
          place: null,
          address: null,
          time: null, // hh/mm/ss
          user: {
            name: null,
            id: null,
          },
          settings: {
            participation: false,
            description: null,
            offerPrice: false,
            uploadable: false,
            commentable: false,
          },
        },
        conditions: {
          participateRealPerson: false,
          guarantee: {
            price: null,
            type: null,
          },
          docs: {
            collectType: null,
            isFree: false,
            collectionDocsTime: {
              start: null,
              end: null,
            },
            sendDocsDate: null,
            price: null,
          },
          askerInfo: null,
        },
        gallery: [],
        documents: [],
      },
    };
  },
  CHANGE_STEP(state, payload) {
    state.step = payload;
  },
  DELETE_IMAGE_FROM_GALLERY(state, payload) {
    console.log(state.tender.data.gallery);
    state.tender.data.gallery.splice(payload, 1);
    console.log(state.tender.data.gallery);
  },
};

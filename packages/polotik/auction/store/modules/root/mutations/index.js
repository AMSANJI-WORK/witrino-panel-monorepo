import { createMutations } from "@commen/request/store/create/create.module";
import { deleteMutations } from "@commen/request/store/delete/delete.module";
import { getMutations } from "@commen/request/store/get/get.module";
import { updateMutations } from "@commen/request/store/update/update.module";
import setStepData from "./setStepData";
export default {
  ...getMutations,
  ...createMutations,
  ...deleteMutations,
  ...updateMutations,
  ...setStepData,
  RESET_AUCTION(state) {
    state.item = {
      id: null,
      title: null,
      description: null,
      start: null,
      end: null,
      status: 1,
      user_id: null,
      data: {
        auctionInfo: {
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
    state.item.data.gallery.splice(payload, 1);
  },
};

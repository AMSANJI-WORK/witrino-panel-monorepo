export default {
  SET_STEP_ONE_DATA(
    state,
    {
      tenderCategory,
      tenderBasePrice,
      tenderPlace,
      tenderTitle,
      tenderCreator,
      tenderType,
    }
  ) {
    state.item.title = tenderTitle;
    state.item.data.category = tenderCategory;
    state.item.data.tenderInfo.basePrice = tenderBasePrice;
    state.item.data.tenderInfo.type = tenderType;
    state.item.data.tenderInfo.place = tenderPlace;
    state.item.data.tenderInfo.user.name = tenderCreator;
  },
  SET_STEP_TWO_DATA(state, payload) {
    state.item.data.conditions.guarantee.type = payload.guaranteeType;
    state.item.data.conditions.guarantee.price = payload.guaranteePrice;
    state.item.data.conditions.docs.price = payload.docsPrice;
    state.item.data.conditions.docs.collectType = payload.docsCollectType;
    state.item.data.conditions.docs.isFree = payload.isDocsFree;
    state.item.data.conditions.askerInfo = payload.askerInformation;
    state.item.data.conditions.participateRealPerson =
      payload.isRealPersonParticipate;
  },
  SET_STEP_THREE_DATA(state, payload) {
    state.item.data.tenderInfo.time = payload.time;
    state.item.start = payload.startTenderDate;
    state.item.data.tenderInfo.address = payload.tenderAddress;
    state.item.data.conditions.docs.sendDocsDate = payload.sendDocsDate;
    state.item.data.conditions.docs.collectionDocsTime.start =
      payload.collectionDocsTimeStart;
    state.item.data.conditions.docs.collectionDocsTime.end =
      payload.collectionDocsTimeEnd;
  },
  SET_STEP_FOUR_DATA(state, payload) {
    state.item.data.gallery = payload.gallery;
    state.item.description = payload.description;
  },
  SET_STEP_FIVE_DATA(state, payload) {
    state.item.data.tenderInfo.settings.offerPrice = payload.offerPrice;
    state.item.data.tenderInfo.settings.uploadable = payload.uploadable;
    state.item.data.tenderInfo.settings.commentable = payload.commentable;
    state.item.data.tenderInfo.settings.participation = payload.participation;
    state.item.data.tenderInfo.settings.description =
      payload.participateFormDescription;
  },
};

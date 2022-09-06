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
    state.tender.title = tenderTitle;
    state.tender.data.category = tenderCategory;
    state.tender.data.tenderInfo.basePrice = tenderBasePrice;
    state.tender.data.tenderInfo.type = tenderType;
    state.tender.data.tenderInfo.place = tenderPlace;
    state.tender.data.tenderInfo.user.name = tenderCreator;
  },
  SET_STEP_TWO_DATA(state, payload) {
    state.tender.data.conditions.guarantee.type = payload.guaranteeType;
    state.tender.data.conditions.guarantee.price = payload.guaranteePrice;
    state.tender.data.conditions.docs.price = payload.docsPrice;
    state.tender.data.conditions.docs.collectType = payload.docsCollectType;
    state.tender.data.conditions.docs.isFree = payload.isDocsFree;
    state.tender.data.conditions.askerInfo = payload.askerInformation;
    state.tender.data.conditions.participateRealPerson =
      payload.isRealPersonParticipate;
  },
  SET_STEP_THREE_DATA(state, payload) {
    state.tender.data.tenderInfo.time = payload.time;
    state.tender.start = payload.startTenderDate;
    state.tender.data.tenderInfo.address = payload.tenderAddress;
    state.tender.data.conditions.docs.sendDocsDate = payload.sendDocsDate;
    state.tender.data.conditions.docs.collectionDocsTime.start =
      payload.collectionDocsTimeStart;
    state.tender.data.conditions.docs.collectionDocsTime.end =
      payload.collectionDocsTimeEnd;
  },
  SET_STEP_FOUR_DATA(state, payload) {
    state.tender.data.gallery = payload.gallery;
    state.tender.description = payload.description;
  },
  SET_STEP_FIVE_DATA(state, payload) {
    state.tender.data.tenderInfo.settings.offerPrice = payload.offerPrice;
    state.tender.data.tenderInfo.settings.uploadable = payload.uploadable;
    state.tender.data.tenderInfo.settings.commentable = payload.commentable;
    state.tender.data.tenderInfo.settings.participation = payload.participation;
    state.tender.data.tenderInfo.settings.description =
      payload.participateFormDescription;
  },
};

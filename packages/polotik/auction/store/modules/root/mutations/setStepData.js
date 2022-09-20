export default {
  SET_STEP_ONE_DATA(
    state,
    {
      auctionTitle,
      auctionCategory,
      auctionBasePrice,
      auctionType,
      auctionPlace,
      auctionCreator,
    }
  ) {
    state.item.title = auctionTitle;
    state.item.data.category = auctionCategory;
    state.item.data.auctionInfo.basePrice = auctionBasePrice;
    state.item.data.auctionInfo.type = auctionType;
    state.item.data.auctionInfo.place = auctionPlace;
    state.item.data.auctionInfo.user.name = auctionCreator;
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
    state.item.data.auctionInfo.time = payload.time;
    state.item.start = payload.startAuctionDate;
    state.item.data.auctionInfo.address = payload.auctionAddress;
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
    state.item.data.auctionInfo.settings.offerPrice = payload.offerPrice;
    state.item.data.auctionInfo.settings.uploadable = payload.uploadable;
    state.item.data.auctionInfo.settings.commentable = payload.commentable;
    state.item.data.auctionInfo.settings.participation =
      payload.participation;
    state.item.data.auctionInfo.settings.description =
      payload.participateFormDescription;
  },
};

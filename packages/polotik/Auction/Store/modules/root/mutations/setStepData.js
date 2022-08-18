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
    state.auction.title = auctionTitle;
    state.auction.data.category = auctionCategory;
    state.auction.data.auctionInfo.basePrice = auctionBasePrice;
    state.auction.data.auctionInfo.type = auctionType;
    state.auction.data.auctionInfo.place = auctionPlace;
    state.auction.data.auctionInfo.user.name = auctionCreator;
  },
  SET_STEP_TWO_DATA(state, payload) {
    state.auction.data.conditions.guarantee.type = payload.guaranteeType;
    state.auction.data.conditions.guarantee.price = payload.guaranteePrice;
    state.auction.data.conditions.docs.price = payload.docsPrice;
    state.auction.data.conditions.docs.collectType = payload.docsCollectType;
    state.auction.data.conditions.docs.isFree = payload.isDocsFree;
    state.auction.data.conditions.askerInfo = payload.askerInformation;
    state.auction.data.conditions.participateRealPerson =
      payload.isRealPersonParticipate;
  },
  SET_STEP_THREE_DATA(state, payload) {
    state.auction.data.auctionInfo.time = payload.time;
    state.auction.start = payload.startAuctionDate;
    state.auction.data.auctionInfo.address = payload.auctionAddress;
    state.auction.data.conditions.docs.sendDocsDate = payload.sendDocsDate;
    state.auction.data.conditions.docs.collectionDocsTime.start =
      payload.collectionDocsTimeStart;
    state.auction.data.conditions.docs.collectionDocsTime.end =
      payload.collectionDocsTimeEnd;
  },
  SET_STEP_FOUR_DATA(state, payload) {
    state.auction.data.gallery = payload.gallery;
    state.auction.description = payload.description;
  },
  SET_STEP_FIVE_DATA(state, payload) {
    state.auction.data.auctionInfo.settings.offerPrice = payload.offerPrice;
    state.auction.data.auctionInfo.settings.uploadable = payload.uploadable;
    state.auction.data.auctionInfo.settings.commentable = payload.commentable;
    state.auction.data.auctionInfo.settings.participation =
      payload.participation;
    state.auction.data.auctionInfo.settings.description =
      payload.participateFormDescription;
  },
};

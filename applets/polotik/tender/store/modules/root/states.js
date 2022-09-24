const state = () => ({
  list: [],
  item: {
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
        place: null,
        address: null,
        time: null, // hh/mm/ss
        user: {
          name: "رونیا مارکت",
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
      category: [],
      gallery: [],
      documents: [],
    },
  },
  step: 1,
});
export default state;

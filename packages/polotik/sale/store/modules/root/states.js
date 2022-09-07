const state = () => ({
  sales: [],
  sale: {
    title: null,
    description: null,
    start: null,
    end: null,
    status: null,
    user_id: null,
    data: {
      gallery: [],
      docs: [],
      category: [],
      place: null,
      count: null,
      unit: {
        id: null,
        name: null,
      },
      amount: null,
      price: {
        limited: true,
        base: null,
        max: null,
        min: null,
        priceType: null,
        present: {
          limited: null,
          max: null,
          min: null,
        },
      },
      participate: {
        public: null,
        userPanel: null,
        seeParticipantsInfo: null,
      },
    },
    id: null,
    type: null,
    offers_count: null,
  },
});
export default state;

const state = () => ({
  sales: [],
  sale: {
    title: null,
    description: null,
    start: null,
    end: null,
    status: 1,
    user_id: null,
    data: {
      gallery: [],
      docs: [],
      category: null,
      place: null,
      count: null,
      unit: null,
      amount: null,
      price: {
        limited: false,
        base: null,
        max: null,
        min: null,
        priceType: null,
        present: {
          limited: false,
          max: null,
          min: null,
        },
      },
      participate: {
        public: false,
        userPanel: false,
        seeParticipantsInfo: false,
      },
    },
  },
});
export default state;

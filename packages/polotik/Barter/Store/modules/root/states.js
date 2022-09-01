const state = () => ({
  barters: [],
  barter: {
    title: null,
    description: null,
    start: null,
    end: null,
    status: 1,
    data: {
      service: {
        requestedTitle: "",
        availableTitle: "",
        available: [],
        requested: [],
      },
      placeDelivery: null,
      price: null,
      place: null,
      amount: null,
      unit: null,
      category2: null,
      gallery: [],
      category: [],
      endDay: 1,
    },
  },
});
export default state;

const state = () => ({
  barters: [],
  barter: {
    id: null,
    title: null,
    created_at: null,
    updated_at: null,
    description: null,
    start: null,
    end: null,
    status: null,
    data: {
      service: {
        available: [],
        requested: [],
        category: {
          available: [],
          requested: [],
        },
        requestedTitle: null,
        availableTitle: null,
      },
      placeDelivery: null,
      price: null,
      place: null,
      amount: null,
      unit: null,
      gallery: [],
      endDay: null,
    },
    user_id: null,
    type: null,
  },
});
export default state;

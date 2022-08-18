const state = () => ({
  inquiries: [],
  inquiry: {
    title: null,
    description: null,
    start: null,
    end: null,
    status: 1,
    data: {
      gallery: [],
      category: [],
      count: 0,
      endDay: 1,
      unit: null,
      amount: null,
      placeDelivery: null,
    },
    user_id: null,
  },
});
export default state;

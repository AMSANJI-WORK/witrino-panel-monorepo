const barter = {
  id: Number, // auto
  created_at: Date, // auto
  updated_at: Date, // auto
  title: String,
  description: String,
  start: Date,
  end: Date,
  status: Number,
  data,
  user_id: Number,
  type: String,
};
const data = {
  category: String, // will be id of product type
  gallery: [Image],
  count: Number,
  endDay: Number,
  placeDelivery: String, // will be id of city
  service: {
    available: [String],
    requested: [String],
  },
};

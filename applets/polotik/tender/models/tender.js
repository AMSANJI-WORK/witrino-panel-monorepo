const tender = {
  title: String,
  description: String,
  start: Date,
  end: Date,
  status: Number,
  user_id: Number,
  data,
};
const data = {
  tenderInfo,
  conditions,
  gallery: [Image],
  documents: [Document],
};
const tenderInfo = {
  basePrice: String,
  type: String,
  category: Number,
  place: Number,
  time: String, // hh/mm/ss
  userId: Number,
  address: null,
  user: {
    name: String,
    id: Number,
  },
};
const conditions = {
  guarantee,
  docs,
  askerInfo: String,
};
const docs = {
  collectType: String,
  collectionDocsTime: Date,
  sendDocs: Date,
  price: Number,
};
const guarantee = {
  price: Number,
  type: String,
};

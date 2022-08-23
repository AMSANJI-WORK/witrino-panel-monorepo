const state = () => ({
  pagination: { page: 1, lastPage: 1, size: 5, recordCount: 0 },
  user: {
    name: "رضا رضایی",
    image: "",
    mobile: "09124342524",
    requestDate: new Date(),
    price: 20000000,
    disciption: `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
     و با استفاده از طراحان گرافیک است،
     چاپگرها و متون بلکه روزنامه و مجله در ستون 
    و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی`,
  },
  offers: [],
  offer: {
    title: null,
    description: null,
    price: null,
    time: null,
    status: 1,
    data: {},
    request_id: null,
    user_id: null,
  },
});
export default state;

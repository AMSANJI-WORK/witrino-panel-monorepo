export const dataAll = {
  count: 6,
  page: "1",
  last_page: 2,
  data: [
    {
      id: 81,
      created_at: "2022-05-31T05:59:41.000000Z",
      updated_at: "2022-07-17T04:03:34.000000Z",
      title: "تست آپلود",
      description: "این استعلام یک استعلام تست است",
      start: "2022-06-05 00:00:00",
      end: "2022-06-18 00:00:00",
      status: 1,
      data: {
        gallery: [
          {
            src: "/images/ALcpWMXgpohB4fK3HLtfp2Tg2qLhRQvZzuOtg8EH.png",
            name: "user2.png",
          },
        ],
        category: [
          {
            id: 9,
            name: "صنایع دستی",
          },
          {
            id: 2482,
            name: "لوازم خانگی و اداری",
          },
        ],
        count: 0,
        amount: "1000",
        endDay: 1,
        placeDelivery: null,
        place: 4,
        unit: {
          id: 1,
          name: "کیلوگرم",
        },
      },
      user_id: 12,
      type: "inquiry",
      offers_count: 4,
    },
    {
      id: 86,
      created_at: "2022-07-05T13:33:26.000000Z",
      updated_at: "2022-07-11T09:08:27.000000Z",
      title: "تسس 2",
      description: "این یک تست اس",
      start: "2022-07-21 00:00:00",
      end: "2022-08-05 00:00:00",
      status: 1,
      data: {
        gallery: [
          {
            src: "/images/ZPxjmrpfPZkkD8OtJ9p3k6svnyrz16HTYJAcqXHw.png",
            name: "user2.png",
          },
        ],
        category: [
          {
            id: 2482,
            name: "لوازم خانگی و اداری",
          },
          {
            id: 2593,
            name: "لوازم آرایشی و بهداشتی",
          },
          {
            id: 2615,
            name: "صنایع خودرو سازی",
          },
        ],
        cities: 13,
        count: 100,
        endDay: 20,
        place: 1,
        unit: {
          id: 2,
          name: "گرم",
        },
        amount: "1000",
      },
      user_id: 12,
      type: "inquiry",
      offers_count: 0,
    },
  ],
};
export const dataOne = {
  count: 1,
  page: 1,
  last_page: 1,
  data: {
    id: 81,
    created_at: "2022-05-31T05:59:41.000000Z",
    updated_at: "2022-07-17T04:03:34.000000Z",
    title: "تست آپلود",
    description: "این استعلام یک استعلام تست است",
    start: "2022-06-05 00:00:00",
    end: "2022-06-18 00:00:00",
    status: 1,
    data: {
      gallery: [
        {
          src: "/images/ALcpWMXgpohB4fK3HLtfp2Tg2qLhRQvZzuOtg8EH.png",
          name: "user2.png",
        },
      ],
      category: [
        {
          id: 9,
          name: "صنایع دستی",
        },
        {
          id: 2482,
          name: "لوازم خانگی و اداری",
        },
      ],
      count: 0,
      amount: "1000",
      endDay: 1,
      placeDelivery: null,
      place: 4,
      unit: {
        id: 1,
        name: "کیلوگرم",
      },
    },
    user_id: 12,
    type: "inquiry",
    offers: {
      count: 4,
      page: 1,
      last_page: 1,
      data: [
        {
          id: 11,
          created_at: "2022-07-07T07:26:07.000000Z",
          updated_at: "2022-07-07T07:26:07.000000Z",
          title: "تست",
          description: "تست درخواست استعلام ایجاد",
          price: null,
          time: "2022-07-07 11:56:07",
          status: 1,
          data: {
            price: "20,0000",
          },
          type: "inquiry",
          request_id: 81,
          user_id: 26,
        },
        {
          id: 13,
          created_at: "2022-07-11T09:19:49.000000Z",
          updated_at: "2022-07-11T09:19:49.000000Z",
          title: "تست",
          description: "تست درخواست استعلام ایجاد",
          price: null,
          time: "2022-07-11 13:49:49",
          status: 1,
          data: {
            price: "200,000",
          },
          type: "inquiry",
          request_id: 81,
          user_id: 26,
        },
        {
          id: 14,
          created_at: "2022-07-11T09:20:42.000000Z",
          updated_at: "2022-07-11T09:20:42.000000Z",
          title: "تست",
          description: "تست درخواست استعلام ایجاد",
          price: null,
          time: "2022-07-11 13:50:42",
          status: 1,
          data: {
            price: "250,000",
          },
          type: "inquiry",
          request_id: 81,
          user_id: 26,
        },
        {
          id: 15,
          created_at: "2022-07-11T09:20:49.000000Z",
          updated_at: "2022-07-11T09:20:49.000000Z",
          title: "تست",
          description: "تست درخواست استعلام ایجاد",
          price: null,
          time: "2022-07-11 13:50:49",
          status: 1,
          data: {
            price: "270,000",
          },
          type: "inquiry",
          request_id: 81,
          user_id: 26,
        },
      ],
    },
  },
};
export const dataCreate = {
  message: "ok",
  data: {
    title: "jsdasf",
    description: "41243142313",
    start: "2022-08-16",
    end: "2022-08-29",
    status: 1,
    data: {
      gallery: [
        {
          src: "/images/c4wBtpQau6QxJe4FwJAFNqsT8rjupzlaU7PsvEA8.png",
          name: "user.png",
        },
      ],
      category: [
        {
          id: 9,
          name: "صنایع دستی",
        },
        {
          id: 2482,
          name: "لوازم خانگی و اداری",
        },
        {
          id: 2593,
          name: "لوازم آرایشی و بهداشتی",
        },
      ],
      count: 0,
      unit: {
        id: 1,
        name: "کیلوگرم",
      },
      amount: "11111",
      endDay: 1,
      placeDelivery: null,
      place: 2,
    },
    user_id: 12,
    type: "inquiry",
    updated_at: "2022-08-14T05:00:15.000000Z",
    created_at: "2022-08-14T05:00:15.000000Z",
    id: 101,
  },
};
export const dataUpdate = {
  message: "ok",
  data: {
    title: "تست آپلود 2 333",
    description: "این استعلام یک استعلام تست است 23423425",
    start: "2022-06-05",
    end: "2022-06-21",
    status: 1,
    data: {
      gallery: [],
      category: [
        {
          id: 9,
          name: "صنایع دستی",
        },
        {
          id: 2482,
          name: "لوازم خانگی و اداری",
        },
      ],
      count: 0,
      amount: "1000",
      endDay: 1,
      placeDelivery: null,
      place: 4,
    },
    user_id: 12,
    id: "81",
    type: "inquiry",
  },
};
export const defualtState = {
  inquiryList: [],
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
};
export const SOURCE = "inquiry";

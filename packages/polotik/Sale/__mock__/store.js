export const dataAll = {
  count: 2,
  page: "1",
  last_page: 1,
  data: [
    {
      id: 78,
      created_at: "2022-05-30T09:59:01.000000Z",
      updated_at: "2022-08-14T05:30:16.000000Z",
      title: "حراجی 1 تن پرتقال 222",
      description: "این قسمت توضیحات حراجی تست است",
      start: "2022-06-20 14:27:00",
      end: "2022-07-18 16:27:00",
      status: 1,
      data: {
        gallery: [
          {
            src: "/images/weTXgHUd6zy3TITVIosXkSx2fw3H1DjO8AxRITQH.png",
            name: "داشبورد- موبایل.png",
          },
        ],
        docs: [],
        place: 2,
        count: null,
        unit: {
          id: 1,
          name: "کیلوگرم",
        },
        amount: "1314",
        price: {
          limited: true,
          base: 10000,
          max: 0,
          min: 0,
          priceType: "isPercent",
          present: {
            limited: false,
            max: 50,
            min: "20",
          },
        },
        participate: {
          public: true,
          userPanel: true,
          seeParticipantsInfo: true,
        },
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
          {
            id: 2615,
            name: "صنایع خودرو سازی",
          },
        ],
      },
      user_id: 12,
      type: "sales",
      offers_count: 0,
    },
    {
      id: 92,
      created_at: "2022-07-09T10:41:00.000000Z",
      updated_at: "2022-07-13T09:56:22.000000Z",
      title: "1 تن تست",
      description: "این حراجی تست است",
      start: "2022-07-18 15:09:00",
      end: "2022-07-20 15:10:00",
      status: 1,
      data: {
        gallery: [
          {
            src: "/images/kwJ4YJfeIWq4NIyqV4z0y3Qapk4Dpw65VLoB175V.png",
            name: "user.png",
          },
          {
            src: "/images/uKhqhBMNMWRbKIkQqQZVh7yUuXFG8CNJDYB7jULk.png",
            name: "user2.png",
          },
          {
            src: "/images/kwJ4YJfeIWq4NIyqV4z0y3Qapk4Dpw65VLoB175V.png",
            name: "user.png",
          },
        ],
        docs: [],
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
        place: 11,
        count: null,
        unit: {
          id: 2,
          name: "گرم",
        },
        amount: "100000",
        price: {
          limited: true,
          base: "200,0000",
          max: "2,0000",
          min: "15,000",
          priceType: "isAmount",
          present: {
            limited: false,
            max: 0,
            min: 0,
          },
        },
        participate: {
          public: true,
          userPanel: true,
          seeParticipantsInfo: true,
        },
      },
      user_id: 26,
      type: "sales",
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
  title: "تست 22",
  description: "41251243123",
  start: "2022-08-16 10:01:00",
  end: "2022-08-18 10:01:00",
  status: 1,
  user_id: "12",
  data: {
    gallery: [
      {
        src: "/images/DY2iTfpCzoqwjElyYeUQz4fnzmK4ypfMK3IVz0FY.png",
        name: "user.png",
      },
    ],
    docs: [],
    category: [9, 2482],
    place: 1,
    count: null,
    unit: 2,
    amount: "12,1314",
    price: {
      limited: true,
      base: "4,123,4123",
      max: "4,1234",
      min: "12,3123",
      priceType: "isAmount",
      present: {
        limited: false,
        max: 0,
        min: 0,
      },
    },
    participate: {
      public: true,
      userPanel: true,
      seeParticipantsInfo: true,
    },
  },
};
export const dataUpdate = {
  message: "ok",
  data: {
    title: "حراجی 1 تن پرتقال 222",
    description: "این قسمت توضیحات حراجی تست است",
    start: "2022-06-20 14:27:00",
    end: "2022-07-18 16:27:00",
    status: 1,
    user_id: 12,
    data: {
      gallery: [
        {
          src: "/images/weTXgHUd6zy3TITVIosXkSx2fw3H1DjO8AxRITQH.png",
          name: "داشبورد- موبایل.png",
        },
      ],
      docs: [],
      place: 2,
      count: null,
      unit: {
        id: 1,
        name: "کیلوگرم",
      },
      amount: "1314",
      price: {
        limited: true,
        base: 10000,
        max: 0,
        min: 0,
        priceType: "isPercent",
        present: {
          limited: false,
          max: 50,
          min: "20",
        },
      },
      participate: {
        public: true,
        userPanel: true,
        seeParticipantsInfo: true,
      },
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
        {
          id: 2615,
          name: "صنایع خودرو سازی",
        },
      ],
    },
    id: "78",
    type: "sales",
  },
};
export const defualtState = {
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
};
export const SOURCE = "guilds/sale";

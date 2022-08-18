export const dataAll = {
  count: 2,
  page: "1",
  last_page: 1,
  data: [
    {
      id: 90,
      created_at: "2022-07-09T09:17:57.000000Z",
      updated_at: "2022-07-17T08:44:03.000000Z",
      title: "تست تهاتر",
      description: "این تهاتر تست است",
      start: "2022-07-11 00:00:00",
      end: "2022-07-18 00:00:00",
      status: 1,
      data: {
        service: {
          available: [9, 2482, 2593, 2615],
          requested: [9, 2482, 2615, 2593],
          category: {
            available: [],
            requested: [9, 2482, 2593, 2907],
          },
          requestedTitle: "sfafdad",
          availableTitle: "2134134123",
        },
        placeDelivery: null,
        price: "1,0000",
        place: 270,
        amount: null,
        unit: null,
        gallery: [
          {
            src: "/images/INYdc4GejfAaO0jHkBWtS6Psj3J9nfIwSIvgUfFO.png",
            name: "user.png",
          },
          {
            src: "/images/wDmdXLOYGGBDaInKfHRMzw5VMAIb0fLSrPUA8dcH.png",
            name: "user2.png",
          },
        ],
        endDay: 1,
      },
      user_id: 26,
      type: "barter",
    },
    {
      id: 97,
      created_at: "2022-07-13T05:11:04.000000Z",
      updated_at: "2022-07-17T06:43:28.000000Z",
      title: "این یک تهاتر جدید است",
      description: "این تهاتر تست است",
      start: "2022-07-14 00:00:00",
      end: "2022-07-16 00:00:00",
      status: 1,
      data: {
        service: {
          available: [9, 2482, 2615],
          requested: [9, 2482, 2593, 2615],
          category: {
            available: [],
            requested: [9, 2482, 2593],
          },
          availableTitle: "این تست است 1",
          requestedTitle: "این تست است 2",
        },
        placeDelivery: null,
        price: "100,0000",
        place: 1,
        amount: null,
        unit: null,
        gallery: [
          {
            src: "/images/Bsm1cZw15ojuTtmmSahqdvkAMoDZLk2psjGdX34g.png",
            name: "user.png",
          },
        ],
        endDay: 1,
      },
      user_id: 12,
      type: "barter",
      offers_count: 2,
    },
  ],
};
export const dataOne = {
  count: 1,
  page: 1,
  last_page: 1,
  data: {
    id: 90,
    created_at: "2022-07-09T09:17:57.000000Z",
    updated_at: "2022-07-17T08:44:03.000000Z",
    title: "تست تهاتر",
    description: "این تهاتر تست است",
    start: "2022-07-11 00:00:00",
    end: "2022-07-18 00:00:00",
    status: 1,
    data: {
      service: {
        available: [9, 2482, 2593, 2615],
        requested: [9, 2482, 2615, 2593],
        category: {
          available: [],
          requested: [9, 2482, 2593, 2907],
        },
        requestedTitle: "sfafdad",
        availableTitle: "2134134123",
      },
      placeDelivery: null,
      price: "1,0000",
      place: 270,
      amount: null,
      unit: null,
      gallery: [
        {
          src: "/images/INYdc4GejfAaO0jHkBWtS6Psj3J9nfIwSIvgUfFO.png",
          name: "user.png",
        },
        {
          src: "/images/wDmdXLOYGGBDaInKfHRMzw5VMAIb0fLSrPUA8dcH.png",
          name: "user2.png",
        },
      ],
      endDay: 1,
    },
    user_id: 26,
    type: "barter",
    user_offer: [],
  },
};
export const dataCreate = {
  message: "ok",
  data: {
    title: "تست مزایدخ",
    description: "لشبشششسبشسی",
    start: "2022-08-22",
    end: null,
    status: 1,
    user_id: 12,
    data: {
      auctionInfo: {
        basePrice: "10,0000",
        type: "دو مرحله ای",
        category: null,
        place: 2,
        address: "بشیشسیبسشیشسیسشی",
        time: "09:02",
        user: {
          name: "رونيا مارکت",
          id: null,
        },
        settings: {
          participation: true,
          description: null,
          offerPrice: true,
          uploadable: true,
          commentable: false,
        },
      },
      conditions: {
        participateRealPerson: true,
        guarantee: {
          price: "1000",
          type: ["سند", "چک"],
        },
        docs: {
          collectType: "این",
          isFree: false,
          collectionDocsTime: {
            start: "2022-08-13",
            end: "2022-08-21",
          },
          sendDocsDate: "2022-08-21",
          price: "1,0000",
        },
        askerInfo: "1000000تستتبشسیشیبس",
      },
      gallery: [
        {
          src: "/images/bapvFJU4y80mplX40zqyOV8cZfwfUhB6NAv4z67o.png",
          name: "user.png",
        },
      ],
      documents: [],
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
          id: 2615,
          name: "صنایع خودرو سازی",
        },
      ],
    },
    type: "auction",
    updated_at: "2022-08-13T04:45:49.000000Z",
    created_at: "2022-08-13T04:45:49.000000Z",
    id: 100,
  },
};
export const dataUpdate = {
  message: "ok",
  data: {
    title: "این یک تهاتر جدید",
    description: "این تهاتر تست است",
    start: "2022-07-14",
    end: "2022-08-13",
    status: 1,
    data: {
      service: {
        available: [9, 2482, 2615],
        requested: [9, 2482, 2593, 2615],
        category: {
          available: [],
          requested: [9, 2482, 2593],
        },
        availableTitle: "این تست است 1",
        requestedTitle: "این تست است 2",
      },
      placeDelivery: null,
      price: "1,000,00",
      place: 1,
      amount: null,
      unit: null,
      gallery: [],
      endDay: 1,
    },
    id: "97",
    user_id: 12,
    type: "barter",
  },
};
export const defualtState = {
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
};
export const SOURCE = "guilds/barter";

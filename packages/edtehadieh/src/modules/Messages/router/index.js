export default [
  {
    path: "/edtehadieh/messages",
    name: "messages",
    redirect: "/edtehadieh/messages/all",
    component: () => import("@edtehadieh/modules/Messages/views/index.vue"),
    children: [
      {
        path: "all",
        name: "messages-all-page",
        component: () => import("@edtehadieh/modules/Messages/views/All.vue"),
        meta: {
          breadCrumb: [
            {
              text: "ویترینو",
              to: "/",
            },
            {
              text: "اتحادیه",
              to: "/edtehadieh/home",
            },
            {
              text: "پیام ها",
              to: "/edtehadieh/messages",
            },
            {
              text: "همه پیام ها",
              disabled: true,
            },
          ],
        },
      },
      {
        path: "unread",
        name: "messages-unread-page",
        component: () => import("@edtehadieh/modules/Messages/views/Unread.vue"),
        meta: {
          breadCrumb: [
            {
              text: "ویترینو",
              to: "/",
            },
            {
              text: "اتحادیه",
              to: "/edtehadieh/home",
            },
            {
              text: "پیام ها",
              to: "/edtehadieh/messages",
            },
            {
              text: "پیام های خوانده نشده",
              disabled: true,
            },
          ],
        },
      },
      {
        path: "sent",
        name: "messages-sent-page",
        component: () => import("@edtehadieh/modules/Messages/views/Sent.vue"),
        meta: {
          breadCrumb: [
            {
              text: "ویترینو",
              to: "/",
            },
            {
              text: "اتحادیه",
              to: "/edtehadieh/home",
            },
            {
              text: "پیام ها",
              to: "/edtehadieh/messages",
            },
            {
              text: "پیام های ارسال شده",
              disabled: true,
            },
          ],
        },
      },
      {
        path: ":id/detail",
        name: "messages-detail-page",
        component: () => import("@edtehadieh/modules/Messages/views/Preview.vue"),
        meta: {
          breadCrumb: [
            {
              text: "ویترینو",
              to: "/",
            },
            {
              text: "اتحادیه",
              to: "/edtehadieh/home",
            },
            {
              text: "پیام ها",
              to: "/edtehadieh/messages/list",
            },
            {
              text: "جزئیات پیام",
              disabled: true,
            },
          ],
        },
      },
      {
        path: "send",
        name: "messages-send-page",
        component: () => import("@edtehadieh/modules/Messages/views/Send.vue"),
        meta: {
          breadCrumb: [
            {
              text: "ویترینو",
              to: "/",
            },
            {
              text: "اتحادیه",
              to: "/edtehadieh/home",
            },
            {
              text: "پیام ها",
              to: "/edtehadieh/messages/list",
            },
            {
              text: "ارسال پیام",
              disabled: true,
            },
          ],
        },
      },
      {
        path: "circular",
        name: "messages-circular-page",
        component: () => import("@edtehadieh/modules/Messages/views/Circular.vue"),
        meta: {
          breadCrumb: [
            {
              text: "ویترینو",
              to: "/",
            },
            {
              text: "اتحادیه",
              to: "/edtehadieh/home",
            },
            {
              text: "پیام ها",
              to: "/edtehadieh/messages",
            },
            {
              text: "ارسال بخشنامه",
              disabled: true,
            },
          ],
        },
      },
    ],
  },
];

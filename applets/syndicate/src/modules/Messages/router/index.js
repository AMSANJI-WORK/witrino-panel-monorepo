export default [
  {
    path: "messages",
    name: "messages",
    redirect: "messages/all",
    meta: {
      breadCrumb: [
        {
          text: "پیام ها",
          to: "/syndicate/messages",
        },
      ],
    },
    component: () =>
      import("@applets/syndicate/src/modules/Messages/views/index.vue"),
    children: [
      {
        path: "all",
        name: "messages-all-page",
        component: () =>
          import("@applets/syndicate/src/modules/Messages/views/All.vue"),
        meta: {
          breadCrumb: [
            {
              text: "همه پیام ها",
            },
          ],
        },
      },
      {
        path: "unread",
        name: "messages-unread-page",
        component: () =>
          import("@applets/syndicate/src/modules/Messages/views/Unread.vue"),
        meta: {
          breadCrumb: [
            {
              text: "پیام های خوانده نشده",
            },
          ],
        },
      },
      {
        path: "sent",
        name: "messages-sent-page",
        component: () =>
          import("@applets/syndicate/src/modules/Messages/views/Sent.vue"),
        meta: {
          breadCrumb: [
            {
              text: "پیام های ارسال شده",
            },
          ],
        },
      },
      {
        path: ":id/detail",
        name: "messages-detail-page",
        component: () =>
          import("@applets/syndicate/src/modules/Messages/views/Preview.vue"),
        meta: {
          breadCrumb: [
            {
              text: "جزئیات پیام",
            },
          ],
        },
      },
      {
        path: "send",
        name: "messages-send-page",
        component: () =>
          import("@applets/syndicate/src/modules/Messages/views/Send.vue"),
        meta: {
          breadCrumb: [
            {
              text: "ارسال پیام",
            },
          ],
        },
      },
      {
        path: "circular",
        name: "messages-circular-page",
        component: () =>
          import("@applets/syndicate/src/modules/Messages/views/Circular.vue"),
        meta: {
          breadCrumb: [
            {
              text: "ارسال بخشنامه",
            },
          ],
        },
      },
    ],
  },
];

export default [
  {
    path: "complaint",
    name: "complaint",
    redirect: "complaint/list",
    meta: {
      breadCrumb: [
        {
          text: "شکایات",
          to: "/syndicate/complaint",
        },
      ],
    },
    component: () =>
      import("@applets/witrino/syndicate/modules/complaint/views/index.vue"),
    children: [
      {
        path: "list",
        name: "complaint-list-page",
        component: () =>
          import("@applets/witrino/syndicate/modules/complaint/views/List.vue"),
        meta: {
          breadCrumb: [
            {
              text: "لیست شکایات",
            },
          ],
        },
      },
    ],
  },
];

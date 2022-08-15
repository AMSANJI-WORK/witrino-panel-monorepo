export default [
    {
        name: "branch",
        path: "/namayande/branch",
        redirect: "/namayande/branch/list",
        component: () => import("@applets/namayande/src/modules/Branchs/views/index.vue"),
        children: [
            {
                path: "list",
                name: "branch-list-page",
                component: () => import("@applets/namayande/src/modules/Branchs/views/List.vue"),
                meta: {
                    breadCrumb: [
                        {
                            text: "ویترینو",
                            to: "/",
                          },
                          {
                            text: "نماینده",
                            to: "/namayande/home",
                          },
                        {
                            text: "نمایندگی ها",
                            to: "/namayande/branch/list",
                            disabled: true,
                        },
                    ],
                },
            },
            {
                path: ":id/detail",
                name: "branch-detail-page",
                component: () => import("@applets/namayande/src/modules/Branchs/views/Preview.vue"),
                meta: {
                    breadCrumb: [
                        {
                            text: "ویترینو",
                            to: "/",
                          },
                          {
                            text: "نماینده",
                            to: "/namayande/home",
                          },
                        {
                            text: "نمایندگی ها",
                            to: "/namayande/branch/list",
                        },
                        {
                            text: "جزئیات نماینده",
                            disabled: true,
                        },
                    ],
                },
            },
        ],
    },
];

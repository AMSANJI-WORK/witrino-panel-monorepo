export default [
    {
        path: "/branch",
        name: "branch",
        redirect: "/branch/list",
        component: () => import("@applets/admin/src/modules/Branchs/views/index.vue"),
        children: [
            {
                path: "list",
                name: "admin-branch-list-page",
                component: () => import("@applets/admin/src/modules/Branchs/views/List.vue"),
                meta: {
                    breadCrumb: [
                        {
                            text: "ویترینو",
                            to: "/admin",
                        },
                        {
                            text: "ادمین",
                            to: "/home",
                        },
                        {
                            text: "نمایندگی ها",
                            to: "/branch/list",
                            disabled: true,
                        },
                    ],
                },
            },
            {
                path: ":id/detail",
                name: "admin-branch-detail-page",
                component: () => import("@applets/admin/src/modules/Branchs/views/Preview.vue"),
                meta: {
                    breadCrumb: [
                        {
                            text: "ویترینو",
                            to: "/admin",
                        },
                        {
                            text: "ادمین",
                            to: "/home",
                        },
                        {
                            text: "نمایندگی ها",
                            to: "/branch/list",
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

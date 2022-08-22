export default [
    {
        path: "/admin/plan",
        name: "plan",
        redirect: "/admin/plan/list",
        component: () => import("../views/index.vue"),
        children: [
            {
                path: "list",
                name: "plan-list-page",
                component: () => import("../views/List.vue"),
                meta: {
                    breadCrumb: [
                        {
                            text: "ویترینو",
                            to: "/admin",
                        },
                        {
                            text: "ادمین",
                            to: "/admin/home",
                        },
                        {
                            text: "پلنان",
                            to: "/admin/plan/list",
                            disabled: true,
                        },
                    ],
                },
            },
            {
                path: ":id/edit",
                name: "plan-edit-page",
                component: () => import("../views/Edit.vue"),
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
                            text: "پلنان",
                            to: "/admin/plan/list",
                        },
                        {
                            text: "ویرایش پلن",
                            disabled: true,
                        },
                    ],
                },
            },
            {
                path: ":id/preview",
                name: "plan-preview-page",
                component: () => import("../views/Preview.vue"),
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
                            text: "پلنان",
                            to: "/admin/plan/list",
                        },
                        {
                            text: "جزئیات پلن",
                            disabled: true,
                        },
                    ],
                },
            },
            {
                path: "create",
                name: "plan-create-page",
                component: () => import("../views/Create.vue"),
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
                            text: "پلنان",
                            to: "/admin/plan/list",
                        },
                        {
                            text: "افزودن پلن",
                            disabled: true,
                        },
                    ],
                },
            },
        ],
    },
];

export default [
    {
        path: "/admin/user",
        name: "user",
        redirect: "/admin/user/list",
        component: () => import("../views/index.vue"),
        children: [
            {
                path: "list",
                name: "user-list-page",
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
                            text: "کاربران",
                            to: "/admin/user/list",
                            disabled: true,
                        },
                    ],
                },
            },
            {
                path: ":id/edit",
                name: "user-edit-page",
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
                            text: "کاربران",
                            to: "/admin/user/list",
                        },
                        {
                            text: "ویرایش کاربر",
                            disabled: true,
                        },
                    ],
                },
            },
            {
                path: ":id/preview",
                name: "user-preview-page",
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
                            text: "کاربران",
                            to: "/admin/user/list",
                        },
                        {
                            text: "جزئیات کاربر",
                            disabled: true,
                        },
                    ],
                },
            },
            {
                path: "create",
                name: "user-create-page",
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
                            text: "کاربران",
                            to: "/admin/user/list",
                        },
                        {
                            text: "افزودن کاربر",
                            disabled: true,
                        },
                    ],
                },
            },
        ],
    },
];

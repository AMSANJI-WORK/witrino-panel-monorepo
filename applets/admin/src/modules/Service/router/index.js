export default [
    {
        path: "/admin/service",
        name: "service",
        redirect: "/admin/service/list",
        component: () => import("@applets/admin/src/modules/Service/views/index.vue"),
        children: [
            {
                path: "list",
                name: "service-list-page",
                component: () => import("@applets/admin/src/modules/Service/views/List.vue"),
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
                            text: "سرویس ها",
                            to: "/admin/service/list",
                            disabled: true,
                        },
                    ],
                },
            },
            {
                path: ":id/edit",
                name: "service-edit-page",
                component: () => import("@applets/admin/src/modules/Service/views/Edit.vue"),
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
                            text: "سرویس",
                            to: "/admin/service/list",
                        },
                        {
                            text: "ویرایش سرویس",
                            disabled: true,
                        },
                    ],
                },
            },
            {
                path: "create",
                name: "service-create-page",
                component: () => import("@applets/admin/src/modules/Service/views/Create.vue"),
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
                            text: "سرویس",
                            to: "/admin/service/list",
                        },
                        {
                            text: "افزودن سرویس ",
                            disabled: true,
                        },
                    ],
                },
            },
        ],
    },
];

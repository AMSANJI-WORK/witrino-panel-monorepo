export default [
    {
        path: "/admin/business",
        name: "business",
        redirect: "/admin/business/list",
        component: () => import("@admin/modules/Business/views/index.vue"),
        children: [
            {
                path: "list",
                name: "business-list-page",
                component: () => import("@admin/modules/Business/views/List.vue"),
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
                            text: "کسب و کار ها",
                            to: "/admin/business/list",
                            disabled: true,
                        },
                    ],
                },
            },
            {
                path: ":id/edit",
                name: "business-edit-page",
                component: () => import("@admin/modules/Business/views/Edit.vue"),
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
                            text: "کسب و کار",
                            to: "/admin/business/list",
                        },
                        {
                            text: "ویرایش کسب و کار",
                            disabled: true,
                        },
                    ],
                },
            },
            {
                path: "create",
                name: "business-create-page",
                component: () => import("@admin/modules/Business/views/Create.vue"),
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
                            text: "کسب و کار",
                            to: "/admin/business/list",
                        },
                        {
                            text: "افزودن کسب و کار ",
                            disabled: true,
                        },
                    ],
                },
            },
        ],
    },
];

export default [
    {
        path: "/admin/union",
        name: "union",
        redirect: "/admin/union/list",
        component: () => import("@admin/modules/Unions/views/index.vue"),
        children: [
            {
                path: "list",
                name: "union-list-page",
                component: () => import("@admin/modules/Unions/views/List.vue"),
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
                            text: "اتحادیه ها",
                            to: "/admin/union/list",
                            disabled: true,
                        },
                    ],
                },
            },
            {
                path: ":id/edit",
                name: "union-edit-page",
                component: () => import("@admin/modules/Unions/views/Edit.vue"),
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
                            text: "اتحادیه",
                            to: "/admin/union/list",
                        },
                        {
                            text: "ویرایش اتحادیه",
                            disabled: true,
                        },
                    ],
                },
            },
            {
                path: "create",
                name: "union-create-page",
                component: () => import("@admin/modules/Unions/views/Create.vue"),
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
                            text: "اتحادیه",
                            to: "/admin/union/list",
                        },
                        {
                            text: "افزودن اتحادیه ",
                            disabled: true,
                        },
                    ],
                },
            },
        ],
    },
];

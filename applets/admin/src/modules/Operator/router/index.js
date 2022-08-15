export default [
    {
        path: "/admin/operator",
        name: "operator",
        redirect: "/admin/operator/list",
        component: () => import("@applets/admin/src/modules/Operator/views/index.vue"),
        children: [
            {
                path: "list",
                name: "operator-list-page",
                component: () => import("@applets/admin/src/modules/Operator/views/List.vue"),
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
                            text: "اپراتور ها",
                            to: "/admin/operator/list",
                            disabled: true,
                        },
                    ],
                },
            },
            {
                path: ":id/edit",
                name: "operator-edit-page",
                component: () => import("@applets/admin/src/modules/Operator/views/Edit.vue"),
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
                            text: "اپراتور",
                            to: "/admin/operator/list",
                        },
                        {
                            text: "ویرایش اپراتور",
                            disabled: true,
                        },
                    ],
                },
            },
            {
                path: "create",
                name: "operator-create-page",
                component: () => import("@applets/admin/src/modules/Operator/views/Create.vue"),
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
                            text: "اپراتور",
                            to: "/admin/operator/list",
                        },
                        {
                            text: "افزودن اپراتور ",
                            disabled: true,
                        },
                    ],
                },
            },
        ],
    },
];

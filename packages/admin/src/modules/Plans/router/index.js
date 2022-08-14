export default [
    {
        path: "/admin/plan",
        name: "plan",
        redirect: "/admin/plan/list",
        component: () => import("@admin/modules/Plans/views/index.vue"),
        children: [
            {
                path: "list",
                name: "plan-list-page",
                component: () => import("@admin/modules/Plans/views/List.vue"),
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
                            text: "پلن ها",
                            to: "/admin/plan/list",
                            disabled: true,
                        },
                    ],
                },
            },
            {
                path: ":id/edit",
                name: "plan-edit-page",
                component: () => import("@admin/modules/Plans/views/Edit.vue"),
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
                            text: "پلن",
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
                path: "create",
                name: "plan-create-page",
                component: () => import("@admin/modules/Plans/views/Create.vue"),
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
                            text: "پلن",
                            to: "/admin/plan/list",
                        },
                        {
                            text: "افزودن پلن ",
                            disabled: true,
                        },
                    ],
                },
            },
        ],
    },
];

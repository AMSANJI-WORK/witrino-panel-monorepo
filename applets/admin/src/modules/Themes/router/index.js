export default [
    {
        path: "/admin/theme",
        name: "theme",
        redirect: "/admin/theme/list",
        component: () => import("@applets/admin/src/modules/Themes/views/index.vue"),
        children: [
            {
                path: "list",
                name: "theme-list-page",
                component: () => import("@applets/admin/src/modules/Themes/views/List.vue"),
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
                            text: "تم ها",
                            to: "/admin/theme/list",
                            disabled: true,
                        },
                    ],
                },
            },
            {
                path: ":id/edit",
                name: "theme-edit-page",
                component: () => import("@applets/admin/src/modules/Themes/views/Edit.vue"),
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
                            text: "تم ها",
                            to: "/admin/theme/list",
                        },
                        {
                            text: "ویرایش تم ها",
                            disabled: true,
                        },
                    ],
                },
            },
            {
                path: "create",
                name: "theme-create-page",
                component: () => import("@applets/admin/src/modules/Themes/views/Create.vue"),
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
                            text: "تم ها",
                            to: "/admin/theme/list",
                        },
                        {
                            text: "افزودن تم",
                            disabled: true,
                        },
                    ],
                },
            },
        ],
    },
];

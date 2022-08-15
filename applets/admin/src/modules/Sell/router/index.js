export default [
    {
        path: "/admin/sell",
        name: "sell",
        redirect: "/admin/sell/list",
        component: () => import("@applets/admin/src/modules/Sell/views/index.vue"),
        children: [
            {
                path: "/admin/sell/list",
                name: "sell-list-page",
                component: () => import("@applets/admin/src/modules/Sell/views/List.vue"),
                meta: {
                    breadCrumb: [
                        {
                            text: "ویترینو",
                            to: "/admin",
                        },
                        {
                            text: "پنل",
                            to: "/admin/home",
                        },
                        {
                            text: "فروش",
                            to: "/admin/sell/list",
                            disabled: true,
                        },
                    ],
                },
            },
            // {
            //     path: "/admin/sell/:id/edit",
            //     name: "sell-edit-page",
            //     component: () => import("@applets/admin/src/modules/Sell/views/Edit.vue"),
            //     meta: {
            //         breadCrumb: [
            //             {
            //                 text: "ویترینو",
            //                 to: "/admin",
            //             },
            //             {
            //                 text: "پنل",
            //                 to: "/admin/home",
            //             },
            //             {
            //                 text: "فروش",
            //                 to: "/admin/sell/list",
            //             },
            //             {
            //                 text: "ویرایش فروش",
            //                 disabled: true,
            //             },
            //         ],
            //     },
            // },
            // {
            //     path: "/admin/sell/create",
            //     name: "sell-create-page",
            //     component: () => import("@applets/admin/src/modules/Sell/views/Create.vue"),
            //     meta: {
            //         breadCrumb: [
            //             {
            //                 text: "ویترینو",
            //                 to: "/admin",
            //             },
            //             {
            //                 text: "پنل",
            //                 to: "/admin/home",
            //             },
            //             {
            //                 text: "فروش",
            //                 to: "/admin/sell/list",
            //             },
            //             {
            //                 text: "افزودن محصول",
            //                 disabled: true,
            //             },
            //         ],
            //     },
            // },
        ],
    },
];

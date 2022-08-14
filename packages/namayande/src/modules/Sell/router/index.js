export default [
    {
        path: "/namayande/sell",
        name: "sell",
        redirect: "/namayande/sell/list",
        component: () => import("@namayande/modules/Sell/views/index.vue"),
        children: [
            {
                path: "list",
                name: "sell-list-page",
                component: () => import("@namayande/modules/Sell/views/List.vue"),
                meta: {
                    breadCrumb: [
                        {
                            text: "ویترینو",
                            to: "/",
                          },
                          {
                            text: "نماینده",
                            to: "/namayande/home",
                            disabled: true,
                          },
                        {
                            text: "فروش",
                            to: "/namayande/sell/list",
                            disabled: true,
                        },
                    ],
                },
            },
            // {
            //     path: "/namayande/sell/:id/edit",
            //     name: "sell-edit-page",
            //     component: () => import("@namayande/modules/Sell/views/Edit.vue"),
            //     meta: {
            //         breadCrumb: [
            //             {
            //                 text: "ویترینو",
            //                 to: "",
            //             },
            //             {
            //                 text: "نماینده",
            //                 to: "/home",
            //             },
            //             {
            //                 text: "فروش",
            //                 to: "/namayande/sell/list",
            //             },
            //             {
            //                 text: "ویرایش فروش",
            //                 disabled: true,
            //             },
            //         ],
            //     },
            // },
            // {
            //     path: "/namayande/sell/create",
            //     name: "sell-create-page",
            //     component: () => import("@namayande/modules/Sell/views/Create.vue"),
            //     meta: {
            //         breadCrumb: [
            //             {
            //                 text: "ویترینو",
            //                 to: "",
            //             },
            //             {
            //                 text: "نماینده",
            //                 to: "/home",
            //             },
            //             {
            //                 text: "فروش",
            //                 to: "/namayande/sell/list",
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

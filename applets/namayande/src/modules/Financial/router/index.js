export default [
    {
        path: "/namayande/financial",
        name: "financial",
        redirect: "/namayande/financial/totalReport/list",
        component: () => import("@applets/namayande/src/modules/Financial/views/index.vue"),
        children: [
            {
                path: "totalReport/list",
                name: "financial-totalReport-list-page",
                component: () =>
                    import("@applets/namayande/src/modules/Financial/views/TotalReport/List.vue"),
                childern: [
                    {
                        path: ":id/detail",
                        name: "financial-totalReport-detail-page",
                        component: () =>
                            import(
                                "@applets/namayande/src/modules/Financial/views/TotalReport/Detail.vue"
                            ),
                        meta: {
                            breadCrumb: [
                                {
                                    text: "ویترینو",
                                    to: "/",
                                },
                                {
                                    text: "نماینده",
                                    to: "/namayande/home",
                                },
                                {
                                    text: "امور مالی",
                                    to: "/namayande/financial/totalReport/list",
                                },
                                {
                                    text: "گزارش کلی",
                                    to: "/namayande/financial/totalReport/list",
                                },
                                {
                                    text: "جزئیات سفارش",
                                    disabled: true,
                                },
                            ],
                        },
                    },
                ],
                meta: {
                    breadCrumb: [
                        {
                            text: "ویترینو",
                            to: "/",
                        },
                        {
                            text: "نماینده",
                            to: "/namayande/home",
                        },
                        {
                            text: "امور مالی",
                            to: "/namayande/financial/totalReport/list",
                        },
                        {
                            text: "گزارش کلی",
                            disabled: true,
                        },
                    ],
                },
            },
            {
                path: "transaction/list",
                name: "financial-transaction-list-page",
                component: () =>
                    import("@applets/namayande/src/modules/Financial/views/Transaction/List.vue"),
                children: [
                    {
                        path: ":id/detail",
                        name: "financial-transaction-detail-page",
                        component: () =>
                            import(
                                "@applets/namayande/src/modules/Financial/views/Transaction/Detail.vue"
                            ),
                        meta: {
                            breadCrumb: [
                                {
                                    text: "ویترینو",
                                    to: "/",
                                },
                                {
                                    text: "نماینده",
                                    to: "/namayande/home",
                                },
                                {
                                    text: "امور مالی",
                                    to: "/namayande/financial/totalReport/list",
                                },
                                {
                                    text: "تراکنش ها",
                                    to: "/namayande/financial/transaction/list",
                                },
                                {
                                    text: "جزئیات تراکنش",
                                    disabled: true,
                                },
                            ],
                        },
                    },
                ],
                meta: {
                    breadCrumb: [
                        {
                            text: "ویترینو",
                            to: "/",
                        },
                        {
                            text: "نماینده",
                            to: "/namayande/home",
                        },
                        {
                            text: "امور مالی",
                            to: "/namayande/financial/totalReport/list",
                        },
                        {
                            text: "تراکنش ها",
                            disabled: true,
                        },
                    ],
                },
            },
        ],
    },
];

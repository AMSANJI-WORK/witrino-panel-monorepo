export default [
    {
        path: "/admin/product",
        name: "admin-product",
        redirect: "/admin/product/list",
        component: () => import("@admin/modules/Products/views/index.vue"),
        children: [
            {
                path: "/admin/product/list",
                name: "admin-product-list-page",
                component: () => import("@admin/modules/Products/views/List.vue"),
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
                            text: "محصولات",
                            to: "/admin/product/list",
                            disabled: true,
                        },
                    ],
                },
            },
            {
                path: "/admin/product/:id/edit",
                name: "admin-product-edit-page",
                component: () => import("@admin/modules/Products/views/Edit.vue"),
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
                            text: "محصولات",
                            to: "/admin/product/list",
                        },
                        {
                            text: "ویرایش محصولات",
                            disabled: true,
                        },
                    ],
                },
            },
            {
                path: "/admin/product/create",
                name: "admin-product-create-page",
                component: () => import("@admin/modules/Products/views/Create.vue"),
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
                            text: "محصولات",
                            to: "/admin/product/list",
                        },
                        {
                            text: "افزودن محصول",
                            disabled: true,
                        },
                    ],
                },
            },
        ],
    },
];

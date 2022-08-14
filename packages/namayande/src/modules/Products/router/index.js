export default [
    {
        path: "/namayande/product",
        name: "product",
        redirect: "/namayande/product/list",
        component: () => import("@namayande/modules/Products/views/index.vue"),
        children: [
            {
                path: "list",
                name: "product-list-page",
                component: () => import("@namayande/modules/Products/views/List.vue"),
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
                            text: "محصولات",
                            to: "/namayande/product/list",
                            disabled: true,
                        },
                    ],
                },
            },
            {
                path: ":id/edit",
                name: "product-edit-page",
                component: () => import("@namayande/modules/Products/views/Edit.vue"),
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
                            text: "محصولات",
                            to: "/namayande/product/list",
                        },
                        {
                            text: "ویرایش محصولات",
                            disabled: true,
                        },
                    ],
                },
            },
            {
                path: "create",
                name: "product-create-page",
                component: () => import("@namayande/modules/Products/views/Create.vue"),
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
                            text: "محصولات",
                            to: "/namayande/product/list",
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

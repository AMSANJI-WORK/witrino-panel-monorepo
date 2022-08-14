export default [
    {
        path: "/edtehadieh/inspector",
        name: "inspector",
        redirect: "/edtehadieh/inspector/list",
        component: () => import("@edtehadieh/modules/Inspector/views/index.vue"),
        children: [
            {
                path: "/edtehadieh/inspector/list",
                name: "inspector-list-page",
                component: () => import("@edtehadieh/modules/Inspector/views/List.vue"),
                meta: {
                    breadCrumb: [
                        {
                            text: "ویترینو",
                            to: "/",
                        },
                        {
                            text: "اتحادیه",
                            to: "/edtehadieh/home",
                        },
                        {
                            text: "بازرس ها",
                            to: "/edtehadieh/inspector/list",
                            disabled: true,
                        },
                    ],
                },
            },
            {
                path: "/edtehadieh/inspector/:id/preview",
                name: "inspector-preview-page",
                component: () => import("@edtehadieh/modules/Inspector/views/Preview.vue"),
                meta: {
                    breadCrumb: [
                        {
                            text: "ویترینو",
                            to: "/",
                        },
                        {
                            text: "اتحادیه",
                            to: "/edtehadieh/home",
                        },
                        {
                            text: "بازرس ها",
                            to: "/edtehadieh/inspector/list",
                        },
                        {
                            text: "مشاهده بازرس",
                            disabled: true,
                        },
                    ],
                },
            },
        ],
    },
];

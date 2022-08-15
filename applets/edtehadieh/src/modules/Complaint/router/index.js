export default [
    {
        path: "/edtehadieh/complaint",
        name: "complaint",
        redirect: "/edtehadieh/complaint/list",
        component: () => import("@applets/edtehadieh/src/modules/Complaint/views/index.vue"),
        children: [
            {
                path: "list",
                name: "complaint-list-page",
                component: () => import("@applets/edtehadieh/src/modules/Complaint/views/List.vue"),
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
                            text: "شکایات",
                            to: "/edtehadieh/complaint/list",
                            disabled: true,
                        },
                    ],
                },
            },
        ],
    },
];

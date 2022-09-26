export default [
    {
        path: "/syndicate/complaint",
        name: "complaint",
        redirect: "/syndicate/complaint/list",
        component: () => import("@applets/syndicate/src/modules/Complaint/views/index.vue"),
        children: [
            {
                path: "list",
                name: "complaint-list-page",
                component: () => import("@applets/syndicate/src/modules/Complaint/views/List.vue"),
                meta: {
                    breadCrumb: [
                        {
                            text: "ویترینو",
                            to: "/",
                        },
                        {
                            text: "اتحادیه",
                            to: "/syndicate/home",
                        },
                        {
                            text: "شکایات",
                            to: "/syndicate/complaint/list",
                            disabled: true,
                        },
                    ],
                },
            },
        ],
    },
];

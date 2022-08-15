export default [
    {
        path: "/edtehadieh/home",
        name: "edtehadieh-home",
        component: () => import("@edtehadieh/modules/Dashboard/views/Home.vue"),
        meta: {
            breadCrumb: [
                {
                    text: "ویترینو",
                    to: "/",
                },
                {
                    text: "اتحادیه",
                    disabled: true,
                },
            ],
        },
    },
];

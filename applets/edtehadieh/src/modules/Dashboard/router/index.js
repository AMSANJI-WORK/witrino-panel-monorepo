export default [
    {
        path: "/edtehadieh/home",
        name: "edtehadieh-home",
        component: () => import("@applets/edtehadieh/src/modules/Dashboard/views/Home.vue"),
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

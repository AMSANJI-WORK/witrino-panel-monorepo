export default [
    {
        path: "*",
        name: "404",
        component: () => import("@witrino/views/Error/Page404.vue"),
    },
    {
        path: "/403",
        name: "403",
        component: () => import("@witrino/views/Error/Page403.vue"),
    },
];

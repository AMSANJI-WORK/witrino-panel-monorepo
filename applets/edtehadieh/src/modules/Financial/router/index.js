export default [
  {
    name: "edtehadieh-financial",
    path: "/edtehadieh/financial",
    component: () => import("@applets/edtehadieh/src/modules/Financial/views/index.vue"),
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
          text: "امورمالی",
          to: "/edtehadieh/financial",
          disabled: true,
        },
      ],
    },
  },
];
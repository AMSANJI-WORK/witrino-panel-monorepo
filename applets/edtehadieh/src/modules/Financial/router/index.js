export default [
  {
    path: "financial",
    name: "edtehadieh-financial",
    component: () =>
      import("@applets/edtehadieh/src/modules/Financial/views/index.vue"),
    meta: {
      breadCrumb: [
        {
          text: "امورمالی",
          to: "/edtehadieh/financial",
          disabled: true,
        },
      ],
    },
  },
];

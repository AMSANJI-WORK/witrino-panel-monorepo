export default [
  {
    path: "/namayande/home",
    name: "home",
    component: () => import("@namayande/modules/Dashboard/views/Home.vue"),
    meta: {
      breadCrumb: [
        {
          text: "ویترینو",
          to: "/",
        },
        {
          text: "نماینده",
          to: "/namayande/home",
          disabled: true,
        },
      ],
    },
  },
];

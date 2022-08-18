export default [
  {
    path: "/home",
    name: "home",
    component: () => import("@packages/polotik/Home/Views/Home.vue"),
    meta: {
      breadCrumb: [
        { text: "پلتیک", to: "/" },
        {
          text: "خانه",
          disabled: true,
        },
      ],
    },
  },
];

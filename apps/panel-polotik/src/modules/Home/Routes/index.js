export default [
  {
    path: "/home",
    name: "home",
    component: () => import("@polotik/modules/Home/Views/Home.vue"),
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

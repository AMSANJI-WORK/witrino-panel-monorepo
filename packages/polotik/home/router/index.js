const homeRoutes = {
  path: "/",
  component: () => import("@polotik/layouts/Defualt.vue"),
  children: [
    {
      path: "/home",
      name: "home",
      component: () => import("@packages/polotik/Home/views/Home.vue"),
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
  ],
};
export default (router) => {
  router.addRoute(homeRoutes);
};

const homeRoutes = {
  path: "/",
  component: () => import("@polotik/layouts/Defualt.vue"),
  meta: {
    breadCrumb: [{ text: "پلتیک", to: "/" }],
  },
  children: [
    {
      path: "/home",
      name: "home",
      component: () => import("@applets/polotik/Home/views/Home.vue"),
      meta: {
        breadCrumb: [
          {
            text: "خانه",
          },
        ],
      },
    },
  ],
};
export default (router) => {
  router.addRoute(homeRoutes);
};

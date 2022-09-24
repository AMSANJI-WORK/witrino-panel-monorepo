const authRoutes = [
  {
    path: "/set-permission",
    name: "set-permission",
    component: () => import("@applets/polotik/Auth/views/SetPermission.vue"),
  },
  {
    path: "*",
    name: "404",
    component: () => import("@applets/polotik/Auth/views/Page404.vue"),
  },
  {
    path: "/403",
    name: "403",
    component: () => import("@applets/polotik/Auth/views/Page403.vue"),
  },
];
export default (router) => {
  router.addRoutes(authRoutes);
};

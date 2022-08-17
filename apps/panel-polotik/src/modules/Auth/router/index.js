export default [
  {
    path: "/set-permission",
    name: "set-permission",
    component: () => import("@polotik/modules/Auth/views/SetPermission.vue"),
  },
  {
    path: "*",
    name: "404",
    component: () => import("@polotik/modules/Auth/views/Page404.vue"),
  },
  {
    path: "/403",
    name: "403",
    component: () => import("@polotik/modules/Auth/views/Page403.vue"),
  },
];

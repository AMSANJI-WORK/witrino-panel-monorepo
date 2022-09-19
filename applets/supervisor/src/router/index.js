import DashboardRoutes from "@applets/supervisor/src/modules/Dashboard/router";

export const SupervisorPanelRoutes = [
  {
    path: "/supervisor",
    redirect: "/supervisor/home",
    component: () => import("@applets/supervisor/src/layouts/Defualt.vue"),
    meta: {
      breadCrumb: [],
    },
    children: [...DashboardRoutes],
  },
];

import DashboardRoutes from "@applets/supervisor/src/modules/Dashboard/router";

export const SupervisorPanelRoutes = [
  {
    path: "/supervisor",
    redirect: "/supervisor/home",
    component: () =>
      import("@applets/supervisor/src/modules/Dashboard/views/index.vue"),
    meta: {
      breadCrumb: [
        {
          text: "ویترینو",
          to: "/supervisor/home",
        },
        {
          text: "سوپروایزر",
          disabled: true,
        },
      ],
    },
    children: [...DashboardRoutes],
  },
];

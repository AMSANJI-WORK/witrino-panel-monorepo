import DashboardRoutes from "@applets/operator/src/modules/Dashboard/router";

export const OperatorPanelRoutes = [
  {
    path: "/operator",
    redirect: "/operator/home",
    component: () =>
      import("@applets/operator/src/modules/Dashboard/views/index.vue"),
    meta: {
      breadCrumb: [
        {
          text: "ویترینو",
          to: "/operator/home",
        },
        {
          text: "اپراتور",
          disabled: true,
        },
      ],
    },
    children: [...DashboardRoutes],
  },
];
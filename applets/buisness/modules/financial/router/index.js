export default [
  {
    path: "financial",
    name: "financial",
    redirect: "financial/totalReport/list",
    component: () =>
      import("@applets/buisness/modules/financial/views/index.vue"),
    children: [
      {
        path: "totalReport/list",
        name: "financial-totalReport-list-page",
        component: () =>
          import(
            "@applets/buisness/modules/financial/views/TotalReport/List.vue"
          ),
      },
    ],
  },
];

export default [
  {
    path: "financial",
    name: "financial",
    redirect: "financial/totalReport/list",
    component: () =>
      import("@applets/namayande/src/modules/Financial/views/index.vue"),
    children: [
      {
        path: "totalReport/list",
        name: "financial-totalReport-list-page",
        component: () =>
          import(
            "@applets/namayande/src/modules/Financial/views/TotalReport/List.vue"
          ),
      },
    ],
  },
];

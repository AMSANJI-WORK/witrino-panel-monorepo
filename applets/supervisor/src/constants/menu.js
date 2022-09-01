export default Object.freeze([
  {
    title: "داشبورد",
    icon: "mdi-view-dashboard-outline",
    route: "/supervisor/home",
    visible: true,
  },
  {
    title: "پرونده ها",
    icon: "mdi-layers-outline",
    route: "/supervisor/files",
    visible: true,
    disabled: true,
  },
  {
    title: "پروفایل",
    route: "/profile",
    icon: "mdi-account-outline",
    visible: true,
    disabled: true,
  },
  {
    title: "خروج",
    icon: "mdi-logout",
    route: "/auth/logout",
    visible: true,
  },
]);

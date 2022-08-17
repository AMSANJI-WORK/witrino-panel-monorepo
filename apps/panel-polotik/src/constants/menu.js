export default Object.freeze([
  {
    title: "داشبورد",
    icon: "mdi-view-dashboard",
    route: "/home",
    role: "user",
    visible: true,
  },
  {
    title: "خدمات اصناف",
    icon: "mdi-tray-full",
    role: "user",
    visible: true,
    child: [
      {
        title: "استعلام",
        route: "/inquiry",
        role: "user",
        visible: true,
        disabled: false,
      },
      {
        title: "مناقصه",
        route: "/tender",
        role: "user",
        visible: true,
        disabled: false,
      },
      {
        title: "مزایده",
        route: "/auction",
        role: "user",
        visible: true,
        disabled: false,
      },
      {
        title: "تهاتر",
        route: "/barter",
        role: "user",
        visible: true,
        disabled: false,
      },
      {
        title: "حراجی",
        route: "/sale",
        role: "user",
        visible: true,
        disabled: false,
      },
    ],
  },
  {
    title: "آمار",
    icon: "mdi-chart-bar",
    role: "user",
    visible: true,
    child: [
      {
        title: "آمار فروش",
        route: "#lowerspuim",
        role: "user",
        visible: true,
        disabled: true,
      },
      {
        title: "آمار بازدید",
        route: "#lowerspuim1",
        role: "user",
        visible: true,
        disabled: true,
      },
      {
        title: "نمودار پیشرفت",
        route: "#lowerspuim1",
        role: "user",
        visible: true,
        disabled: true,
      },
    ],
  },
  {
    title: "کیف پول",
    route: "#lowerspuim1",
    role: "user",
    icon: "mdi-wallet-outline",
    visible: true,
    disabled: true,
  },
  {
    title: "پشتیبانی",
    route: "#lowerspuim1",
    icon: "mdi-headset",
    role: "user",
    visible: true,
    disabled: true,
  },
  {
    title: "خروج",
    icon: "mdi-logout",
    route: "/",
    role: "user",
    visible: true,
  },
]);
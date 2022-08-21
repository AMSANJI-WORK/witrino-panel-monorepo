export default Object.freeze([
  {
    title: "داشبورد",
    icon: "mdi-view-dashboard-outline",
    route: "/admin/home",
    visible: true,
  },
  {
    title: "سطوح دسترسی",
    icon: "mdi-layers-outline",
    route: "/admin/role",
    visible: true,
    disabled: false,
  },
  {
    title: "کاربران",
    route: "/admin/user/list",
    icon: "mdi-account-outline",
    visible: true,
    disabled: false,
  },
  {
    title: "اتحادیه ها",
    route: "/admin/union/list",
    icon: "mdi-account-multiple-outline",
    visible: true,
    disabled: false,
  },
  {
    title: "نماینده ها",
    icon: "mdi-store-outline",
    route: "/admin/branch/list",
    visible: true,
    disabled: false,
  },
  {
    title: "محصولات",
    icon: "mdi-package-variant-closed",
    route: "/admin/product",
    visible: true,
    disabled: false,
  },
  {
    title: "کسب و کار",
    icon: "mdi-domain",
    route: "/admin/business",
    visible: true,
    disabled: false,
  },
  {
    title: "امور مالی",
    icon: "mdi-wallet-outline",
    route: "/admin/financial",
    child: [
      {
        title: "گزارش کلی",
        route: "/admin/financial/list",

        visible: true,
        disabled: false,
      },
      {
        title: "تراکنش ها",
        route: "/admin/financial/transaction/list",
        visible: true,
        disabled: false,
      },
    ],
    visible: true,
    disabled: false,
  },
  {
    title: "تنظیمات",
    icon: "mdi-cog-outline",
    route: "",
    child: [
      {
        title: "سرویس ها",
        route: "/admin/service",
        icon: "mdi-toolbox-outline",
        visible: true,
        disabled: false,
      },
      {
        title: "تم ها",
        route: "/admin/theme/list",
        icon: "mdi-shape-outline",
        visible: true,
        disabled: false,
      },
    ],
    visible: true,
    disabled: false,
  },
  {
    title: "اپراتور",
    icon: "mdi-headset",
    route: "/admin/operator/list",
    visible: true,
    disabled: false,
  },

  {
    title: "خروج",
    icon: "mdi-logout",
    route: "/auth/logout",
    visible: true,
  },
]);

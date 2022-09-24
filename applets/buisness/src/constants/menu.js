export default Object.freeze([
  {
    title: "داشبورد",
    icon: "mdi-view-dashboard-outline",
    route: "/business/home",
    visible: true,
  },
  {
    title: "محصولات",
    icon: "mdi-package-variant-closed",
    disabled: true,
    route: "/business/product",
    visible: true,
  },
  {
    title: "فروش",
    route: "/business/sell/list",
    disabled: true,
    icon: "mdi-package-variant",
    visible: true,
  },
  {
    title: "نمایندگی ها",
    route: "/business/branch/list",
    disabled: true,
    icon: "mdi-account-search-outline",
    visible: true,
  },
  {
    title: "انبار",
    icon: "mdi-store-outline",

    visible: true,
    child: [
      {
        title: "انبارداری",
        route: "/business/stock/supply",

        visible: true,
        disabled: true,
      },
      {
        title: "موجودی انبار",
        route: "/business/stock/inventory",

        visible: true,
        disabled: true,
      },
      {
        title: "محصول ورودی و خروجی",
        route: "/business/stock/input-output-product",

        visible: true,
        disabled: true,
      },
    ],
  },
  {
    title: "امورمالی",
    icon: "mdi-wallet-outline",

    visible: true,
    child: [
      {
        title: "گزارش کلی",
        route: "/business/financial/totalReport/list",

        visible: true,
        disabled: true,
      },
      {
        title: "تراکنش ها",
        route: "/business/financial/transaction/list",

        visible: true,
        disabled: true,
      },
    ],
  },

  {
    title: "پیام ها",
    route: "#massages",
    icon: "mdi-email-outline",

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

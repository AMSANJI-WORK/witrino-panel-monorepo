export default Object.freeze([
  {
    title: "داشبورد",
    icon: "mdi-view-dashboard-outline",
    route: "/namayande/home",
    visible: true,
  },
  {
    title: "محصولات",
    icon: "mdi-package-variant-closed",
    disabled: true,
    route: "/namayande/product",
    visible: true,
  },
  {
    title: "فروش",
    route: "/namayande/sell/list",
    disabled: true,
    icon: "mdi-package-variant",
    visible: true,
  },
  {
    title: "نمایندگی ها",
    route: "/namayande/branch/list",
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
        route: "/namayande/stock/supply",

        visible: true,
        disabled: true,
      },
      {
        title: "موجودی انبار",
        route: "/namayande/stock/inventory",

        visible: true,
        disabled: true,
      },
      {
        title: "محصول ورودی و خروجی",
        route: "/namayande/stock/input-output-product",

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
        route: "/namayande/financial/totalReport/list",

        visible: true,
        disabled: true,
      },
      {
        title: "تراکنش ها",
        route: "/namayande/financial/transaction/list",

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

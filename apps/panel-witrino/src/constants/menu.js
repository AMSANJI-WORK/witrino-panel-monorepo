export default Object.freeze([
    {
        title: "داشبورد",
        icon: "mdi-view-dashboard-outline",
        route: "/buisness/home",
        
        visible: true,
    },
    {
        title: "محصولات",
        icon: "mdi-package-variant-closed",
        
        route: "/buisness/product",
        visible: true,
        disabled: false,
    },
    {
        title: "فروش",
        route: "/buisness/sell/list",
        
        icon: "mdi-package-variant",
        visible: true,
        disabled: false,
    },
    {
        title: "نمایندگی ها",
        route: "/buisness/branch/list",
        
        icon: "mdi-account-search-outline",
        visible: true,
        disabled: false,
    },
    {
        title: "انبار",
        icon: "mdi-store-outline",
        
        visible: true,
        child: [
            {
                title: "انبارداری",
                route: "/buisness/stock/supply",
                
                visible: true,
                disabled: false,
            },
            {
                title: "موجودی انبار",
                route: "/buisness/stock/inventory",
                
                visible: true,
                disabled: false,
            },
            {
                title: "محصول ورودی و خروجی",
                route: "/buisness/stock/input-output-product",
                
                visible: true,
                disabled: false,
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
                route: "/buisness/financial/totalReport/list",
                
                visible: true,
                disabled: false,
            },
            {
                title: "تراکنش ها",
                route: "/buisness/financial/transaction/list",
                
                visible: true,
                disabled: false,
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

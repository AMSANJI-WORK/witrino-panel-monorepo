export default Object.freeze([
  {
    title: "داشبورد",
    icon: "mdi-view-dashboard-outline",
    route: "/syndicate/home",
    visible: true,
  },
  {
    title: "واحد های صنفی",
    icon: "mdi-store-outline",
    route: "/syndicate/tradeunit/list",
    disabled: true,
    visible: true,
  },
  {
    title: "بازرسان",
    route: "/syndicate/inspector/list",
    icon: "mdi-account-details-outline",
    disabled: true,
    visible: true,
  },
  {
    title: "شکایات",
    route: "/syndicate/complaint/list",
    icon: "mdi-vote-outline",
    disabled: true,
    visible: true,
  },
  {
    title: "بایگانی",
    route: "/syndicate/archive/list",
    icon: "mdi-folder-text-outline",
    disabled: true,
    visible: true,
  },
  {
    title: "امورمالی",
    route: "/syndicate/financial",
    icon: "mdi-wallet-outline",
    disabled: true,
    visible: true,
  },
  {
    title: "پیام ها",
    icon: "mdi-email-outline",
    visible: true,
    child: [
      {
        title: "همه پیام ها",
        route: "/syndicate/messages/all",
        visible: true,
        disabled: true,
      },
      {
        title: "پیام های خوانده نشده",
        route: "/syndicate/messages/unread",
        visible: true,
        disabled: true,
      },
      {
        title: "پیام های ارسال شده",
        route: "/syndicate/messages/sent",
        visible: true,
        disabled: true,
      },
      {
        title: "ارسال پیام",
        route: "/syndicate/messages/send",
        visible: true,
        disabled: true,
      },
      {
        title: "ابلاغ بخشنامه",
        route: "/syndicate/messages/circular",
        visible: true,
        disabled: true,
      },
    ],
  },
  {
    title: "خروج",
    icon: "mdi-logout",
    route: "/auth/logout",

    visible: true,
  },
]);

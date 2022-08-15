export default Object.freeze([
  {
    title: "داشبورد",
    icon: "mdi-view-dashboard-outline",
    route: "/edtehadieh/home",
    
    visible: true,
  },
  {
    title: "واحد های صنفی",
    icon: "mdi-store-outline",
    route: "/edtehadieh/tradeunit/list",
    
    visible: true,
  },
  {
    title: "بازرسان",
    route: "/edtehadieh/inspector/list",
    icon: "mdi-account-details-outline",
    
    visible: true,
  },
  {
    title: "شکایات",
    route: "/edtehadieh/complaint/list",
    icon: "mdi-vote-outline",
    
    visible: true,
  },
  {
    title: "بایگانی",
    route: "/edtehadieh/archive/list",
    icon: "mdi-folder-text-outline",
    
    visible: true,
  },
  {
    title: "امورمالی",
    route: "/edtehadieh/financial",
    icon: "mdi-wallet-outline",
    
    visible: true,
  },
  {
    title: "پیام ها",
    icon: "mdi-email-outline",
    
    visible: true,
    child: [
      {
        title: "همه پیام ها",
        route: "/edtehadieh/messages/all",
        
        visible: true,
        disabled: false,
      },
      {
        title: "پیام های خوانده نشده",
        route: "/edtehadieh/messages/unread",
        
        visible: true,
        disabled: false,
      },
      {
        title: "پیام های ارسال شده",
        route: "/edtehadieh/messages/sent",
        
        visible: true,
        disabled: false,
      },
      {
        title: "ارسال پیام",
        route: "/edtehadieh/messages/send",
        
        visible: true,
        disabled: false,
      },
      {
        title: "ابلاغ بخشنامه",
        route: "/edtehadieh/messages/circular",
        
        visible: true,
        disabled: false,
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

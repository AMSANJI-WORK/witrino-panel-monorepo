import { clearToken } from "@auth/middleware";

export const AuthRoutes = [
  {
    path: "/auth",
    name: "auth",
    redirect: "/auth/authorize",
    component: () => import("@auth/views/index.vue"),
    children: [
      {
        path: "authorize",
        name: "authorize",
        component: () => import("@auth/views/Auth.vue"),
      },
      {
        path: "otp",
        name: "otp",
        component: () => import("@auth/views/Otp.vue"),
      },
      {
        path: "forget-pass",
        name: "forget-pass",
        component: () => import("@auth/views/ForgetPass.vue"),
      },
      {
        path: "set-pass",
        name: "set-pass",
        component: () => import("@auth/views/SetPass.vue"),
      },
      {
        path: "logout",
        name: "logout",
        component: () => import("@auth/views/index.vue"),
        beforeEnter: clearToken,
      },
    ],
  },
];

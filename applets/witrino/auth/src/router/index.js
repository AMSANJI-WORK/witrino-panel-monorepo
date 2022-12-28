import { clearToken } from "@applets/witrino/auth/src/middleware";

export const AuthRoutes = [
  {
    path: "/auth",
    name: "auth",
    redirect: "/auth/authorize",
    component: () => import("@applets/witrino/auth/src/views/index.vue"),
    children: [
      {
        path: "authorize",
        name: "authorize",
        component: () => import("@applets/witrino/auth/src/views/Auth.vue"),
      },
      {
        path: "otp",
        name: "otp",
        component: () => import("@applets/witrino/auth/src/views/Otp.vue"),
      },
      {
        path: "forget-pass",
        name: "forget-pass",
        component: () => import("@applets/witrino/auth/src/views/ForgetPass.vue"),
      },
      {
        path: "set-pass",
        name: "set-pass",
        component: () => import("@applets/witrino/auth/src/views/SetPass.vue"),
      },
      {
        path: "logout",
        name: "logout",
        component: () => import("@applets/witrino/auth/src/views/index.vue"),
        beforeEnter: clearToken,
      },
    ],
  },
];

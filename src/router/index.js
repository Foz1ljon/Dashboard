import { createRouter, createWebHistory } from "vue-router";

import Login from "../pages/Login.vue";
import MainVue from "../components/Main.vue";
import HomeVue from "../pages/Home.vue";
import StudentsVue from "../pages/Students.vue";
import CourseVue from "../pages/Course.vue";
import PaymentVue from "../pages/Payment.vue";
import ReportVue from "../pages/Report.vue";
import SettingVue from "../pages/Setting.vue";

const routes = [
  {
    path: "/login",
    name: "SignIn",
    component: Login,
  },
  {
    path: "/",
    name: "main",
    component: MainVue,
    children: [
      {
        path: "/home",
        name: "home",
        component: HomeVue,
      },
      {
        path: "/students",
        name: "students",
        component: StudentsVue,
      },
      {
        path: "/course",
        name: "course",
        component: CourseVue,
      },
      {
        path: "/payment",
        name: "payment",
        component: PaymentVue,
      },
      {
        path: "/report",
        name: "report",
        component: ReportVue,
      },
      {
        path: "/setting",
        name: "setting",
        component: SettingVue,
      },
    ],
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Navigation guard to protect routes
router.beforeEach((to, from, next) => {
  const publicPages = ["/login"];
  const authRequired = !publicPages.includes(to.path);
  const token = localStorage.getItem("token");

  if (authRequired && !token) {
    return next("/login");
  }

  next();
});

import { createRouter, createWebHistory } from "vue-router";

import IndexWebsite from "@/views/website/Index.vue";

import IndexDashboard from "@/views/admin/dashboard/Index.vue";

import SignInWithGoogle from "@/views/admin/auth/SignInWithGoogle.vue";

// import { getAuth, onAuthStateChanged } from "firebase/auth";

const routes = [
  {
    path: "/",
    name: "exifoto.website.index",
    component: IndexWebsite,
    // redirect: { name: "ent.website.comingsoon" },
  },
  {
    path: "/login",
    name: "login",
    component: SignInWithGoogle,
    meta: {
      reload: true,
      authPage: true,
    },
  },
  {
    path: "/dashboard",
    name: "exifoto.admin.index",
    component: IndexDashboard,
    // meta: {
    //   reload: true,
    //   requiresAuth: true,
    // },
  },
  {
    path: "/:catchAll(.*)",
    redirect: { name: "exifoto.website.index" },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

const getCurrentUser = () => {
  // return new Promise((resolve, reject) => {
  //   const removeListener = onAuthStateChanged(
  //     getAuth(),
  //     (user) => {
  //       removeListener();
  //       resolve(user);
  //     },
  //     reject
  //   );
  // });
};

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    const user = await getCurrentUser();
    if (user) {
      next();
    } else {
      next({
        name: "login",
      });
    }
  } else {
    next();
  }
});

export default router;

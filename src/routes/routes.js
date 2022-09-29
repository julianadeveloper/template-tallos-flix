import DashboardLayout from "../layout/DashboardLayout.vue";
// GeneralViews
import NotFound from "../pages/NotFoundPage.vue";

// Admin pages
import Overview from "src/pages/Overview.vue";
import UserProfile from "src/pages/UserProfile.vue";
import CreateProfile from "src/pages/CreateProfile.vue";
import Reports from "src/pages/Reports.vue";
import Typography from "src/pages/Sessions.vue";
import Movies from "src/pages/Movies.vue";
import MoviesList from "src/pages/Movies/MoviesList.vue"

import Maps from "src/pages/Maps.vue";
import Notifications from "src/pages/Notifications.vue";
import Upgrade from "src/pages/Upgrade.vue";
import Login from "src/pages/Login.vue";
import VueRouter from "vue-router";

const authGuard = () => (to, from, next) => {
  //esta checando se meu token foi armazenado no localstorage (dps ele fica no state)
  if (localStorage.getItem("token")) {
    next();
  } else {
    next("/");
  }
};
const routes = [
  {
    path: "/",
    name: "login",
    component: Login
  },
  {
    path: "/",
    component: DashboardLayout,
    name: "DashboardLayout",
    beforeEnter: authGuard(),
    redirect: "/admin/overview"
  },
  {
    path: "/admin",
    component: DashboardLayout,
    redirect: "/admin/overview",
    beforeEnter: authGuard(),
    children: [
      {
        path: "overview",
        name: "Overview",
        component: Overview
      },
      {
        path: "user",
        name: "User",
        component: UserProfile
      },
      {
        path: "user-create",
        name: "Create",
        component: CreateProfile
      },
      {
        path: "reports",
        name: "Reports",
        component: Reports
      },
      {
        path: "typography",
        name: "Typography",
        component: Typography
      },
      {
        path: "movies",
        name: "Movies",
        component: Movies
      },
      {
        path: "movies-list",
        name: "Movies-list",
        component: MoviesList
      },
      {
        path: "maps",
        name: "Maps",
        component: Maps
      },
      {
        path: "notifications",
        name: "Notifications",
        component: Notifications
      },
      {
        path: "upgrade",
        name: "Upgrade to PRO",
        component: Upgrade
      }
    ]
  },
  { path: "*", component: NotFound }
];


const router = new VueRouter({
  routes, // short for routes: routes
  linkActiveClass: 'nav-item active',
  scrollBehavior: (to) => {
    if (to.hash) {
      return {selector: to.hash}
    } else {
      return { x: 0, y: 0 }
    }
  }
})

router.beforeEach((to, from, next) => {
  if (to.path === "/") {
    if (localStorage.getItem("token")) return next("/panel");
  }

  next();
});

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;

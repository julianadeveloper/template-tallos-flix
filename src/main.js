import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
// LightBootstrap plugin
import LightBootstrap from "./light-bootstrap-main";
// router setup
import routes from "./routes/routes";
//toastification
// Import the CSS or use your own!
import "./registerServiceWorker";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
//imports fontawesome
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import store from "./store";

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
// plugin setup
Vue.use(VueRouter);
Vue.use(LightBootstrap);
// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkActiveClass: "nav-item active",
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  render: h => h(App),
  router,
  store
});

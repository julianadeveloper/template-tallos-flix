import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
// LightBootstrap plugin
import LightBootstrap from "./light-bootstrap-main";
// router setup
import routes from "./routes/routes";
//primevue-chips
import PrimeVue from "primevue/config";
import Chips from "primevue/chips";

import Card from "primevue/card"
import Toast from "primevue/toast";
import ToastService from "primevue/toastservice";
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import AutoComplete from "primevue/autocomplete";
import InputText from "primevue/inputtext";
import Textarea from "primevue/textarea";
import InputNumber from "primevue/inputnumber";
import Button from "primevue/button";

// Import the CSS or use your own!
import "./registerServiceWorker";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
//imports fontawesome
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import moment from 'moment'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import store from "./store";

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
// plugin setup
Vue.component("card-vue", Card);

Vue.component("Toast", Toast);
Vue.component("chips", Chips);
Vue.component("AutoComplete", AutoComplete);
Vue.component("InputText", InputText);
Vue.component("Textarea", Textarea);
Vue.component("InputNumber", InputNumber);
Vue.component("Button", Button);
Vue.use(ToastService);
Vue.use(VueRouter);
Vue.use(LightBootstrap);
Vue.use(PrimeVue);
Vue.use(moment)
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

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import PaginaLoading from "./components/PaginaLoading.vue";

Vue.config.productionTip = false;

Vue.component("PaginaLoading", PaginaLoading);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

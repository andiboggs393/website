import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/scss/main.scss";

Vue.config.productionTip = false;

Vue.config.errorHandler = function(err, vm, info) {
  console.warn("This error was caught by the global error handler.");
  console.log(err, "\n", vm, "\n", info);
};

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

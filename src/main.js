import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/scss/main.scss";

Vue.config.productionTip = false;

// Register all components in @/components/globals as global components
const globals = require.context("@/components/globals", false, /.*\.vue$/);
globals.keys().forEach(fileName => {
  const config = globals(fileName);
  const name = fileName.replace(/^\.\/(.*)\.\w+$/, "$1");
  Vue.component(name, config.default || config);
});

// Add all filters from the filters file (TODO)
// for (var filter in filters) {
//   if (filters.hasOwnProperty(filter)) {
//     Vue.filter(filter, filters[filter])
//   }
// }

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

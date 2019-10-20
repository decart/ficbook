import Vue from "vue";
import App from "./App.vue";
import store from "./store";

Vue.config.productionTip = false;

const app = document.createElement("div");
app.id = "application";
document.getElementsByTagName("body")[0].append(app);

new Vue({
  store,
  render: h => h(App)
}).$mount(app);

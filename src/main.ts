import Vue from "vue";
import VueTheMask from "vue-the-mask";
import VeeValidate from "vee-validate";
import * as VueScrollTo from "vue-scrollto";
import * as VueGoogleMaps from "vue2-google-maps";

import App from "./App.vue";
import router from "./router";
import i18n from "@/i18n";

Vue.use(VueTheMask);
Vue.use(VeeValidate);
Vue.use(VueScrollTo);

Vue.config.productionTip = false;

new Vue({
  i18n,
  router,
  data: {
    portfolioClient: "",
  },
  render: (h) => h(App),
}).$mount("#app");

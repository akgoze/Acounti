import { createApp } from "vue";
import { VueFire, VueFireAuth } from "vuefire";
import App from "./App.vue";

import { firebaseApp } from "./firebase";

import "./assets/stylesheets/icons/icons.scss";
import "./assets/stylesheets/global.scss";

createApp(App)
  .use(VueFire, {
    firebaseApp,
    modules: [VueFireAuth()],
  })
  .mount("#app");

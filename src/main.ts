import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/";

import { RouterView } from "vue-router";
import BaseButtonVue from "./components/common/BaseButton.vue";

const app = createApp(App);
app.use(router);


app.component("router-view", RouterView);
app.component("base-button", BaseButtonVue);
app.mount("#app");

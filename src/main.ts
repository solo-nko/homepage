import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/";

import { RouterView } from "vue-router";
import BaseButton from "./components/common/BaseButton.vue";

const app = createApp(App);
app.use(router);

app.component("RouterView", RouterView);
app.component("BaseButton", BaseButton);
app.mount("#app");

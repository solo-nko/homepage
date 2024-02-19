import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/";

import BaseButtonVue from "./components/common/BaseButton.vue";

const app = createApp(App);
app.use(router);

app.component("base-button", BaseButtonVue);
app.mount("#app");

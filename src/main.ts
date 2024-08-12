import { createApp } from "vue";
import App from "@/App.vue";
import { router } from "@/router";

import BaseButton from "@/components/common/BaseButton.vue";

const app = createApp(App);

// the use() method globally registers RouterView and RouterLink components, so there's no need to register them separately
app.use(router);

app.component("BaseButton", BaseButton);
app.mount("#app");

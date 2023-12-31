import { createApp } from "vue";
import "./style.css";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";
import router from './router';

createApp(App).mount("#app");

const app = createApp(App);

app.use(ElementPlus).use(router).mount('#app');

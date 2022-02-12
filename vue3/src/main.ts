import { createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import instance from "./http/index.js";
const app = createApp(App)
// app.config.globalProperties.$http = () => {}
app.config.globalProperties.$post = instance.post;
app.config.globalProperties.$get =instance.get;
app.use(store).use(router).use(Vant).mount('#app')

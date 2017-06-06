import Vue from "vue";
import routes from "./router/route.js";
import vueRouter from "vue-router";
import MintUI from "mint-ui";
import "mint-ui/lib/style.css";
import VueResource from "vue-resource";
import url from "./config/url.js";



console.log(url);

Vue.config.debug = process.env.NODE_ENV!=="production";
Vue.use(VueResource);
Vue.use(vueRouter);
Vue.use(MintUI);
const router = new vueRouter({
    routes
});


new Vue({
    router
}).$mount("#app");
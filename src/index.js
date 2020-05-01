import Vue from "vue";
import App from "./App.vue";
import VueRouter from 'vue-router'
import {routes} from "./router/index"
import './styles/index.scss' 
 
Vue.use(VueRouter); 

let router = new VueRouter({mode: 'history', routes});  

new Vue({
 el: "#app",
 router,
 render: h => h(App)
});  




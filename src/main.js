// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Router from "vue-router";
import Home from "./pages/Home.vue";
import NewArrival from "./pages/NewArrival";
import Brand from "./pages/Brand";
import Me from "./pages/Me";
import Activity from "./pages/Activity";
import Apply from "./pages/Apply";
import App from './App';
import Queen from "./pages/Queen";
//将Vue的Router中间件注册给Vue框架
Vue.use(Router);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  //为当前Vue的App的实例配置个性化路由
  router : new Router({
  	mode : "history",//确保服务端开放了路径访问权限配置
  	routes : [
  		{
  			path : "/apply",
  			component : Apply
  		},
  		{
  			path : "/",
  			component : Home
  		},
  		{
  			path : "/brandNew",
  			component : NewArrival
  		},
  		{
  			path : "/brand",
  			component : Brand
  		},
  		{
  			path : "/me",
  			component : Me
  		},
  		{
  			path : "/activity",
  			component : Activity
  		},
      {
        path : "/queen",
        component : Queen
      }
  	]
  }),
  render: h => h(App)
});
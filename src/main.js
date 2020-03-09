import Vue from 'vue'
import App from './App.vue'
import echarts from 'echarts'
import 'view-design/dist/styles/iview.css';
import VueRouter from 'vue-router';
import './assets/my-theme/index.less';

Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

Vue.use(VueRouter);

require('./mock/index');

import { Table, Icon, DatePicker, Select, Option, Tabs, TabPane } from 'view-design';
Vue.component('Table', Table);
Vue.component('Icon', Icon);
Vue.component('DatePicker', DatePicker);
Vue.component('Select', Select);
Vue.component('Option', Option);
Vue.component('Tabs', Tabs);
Vue.component('TabPane', TabPane)

const Home = () => import('./pages/Home.vue');
const CityClustersTravel = () => import('./pages/CityClustersTravel.vue');
const StationTraffic = () => import('./pages/StationTraffic.vue');
const IndividualTravel = () => import('./pages/IndividualTravel.vue');
const TrafficPrediction = () => import('./pages/TrafficPrediction.vue');
const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/cityClustersTravel', component: CityClustersTravel },
    { path: '/stationTraffic', component: StationTraffic },
    { path: '/individualTravel', component: IndividualTravel },
    { path: '/trafficPrediction', component: TrafficPrediction }
  ]
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

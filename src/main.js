import Vue from 'vue'
import App from './App.vue'
import echarts from 'echarts'
import 'view-design/dist/styles/iview.css';

Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

import { Table } from 'view-design';
Vue.component('Table', Table);

new Vue({
  render: h => h(App),
}).$mount('#app')

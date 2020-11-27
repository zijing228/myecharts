import Vue from 'vue'
import App from './App.vue'
import echarts from 'echarts';
import dataTool from 'echarts/extension/dataTool';
import myCharts from './js/myCharts.js'
import $ from 'jquery'
window.$ = $
window.echarts = echarts

Vue.use(myCharts)




new Vue({
  el: '#app',
  render: h => h(App)
})

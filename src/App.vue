<template>
  <div class="hello" id="app">
    <myecharts/>
    <!--<div id="chart1"></div>-->
  </div>
</template>

<script>
import myecharts from './myecharts'
export default {
  name: 'app',
  data () {
    return {
    }
  },
  components:{
    myecharts
  },
  mounted() {
    //this.$chart.line1('chart1');
  }
}
</script>

<style scoped>
  #chart1 {
    width: 300px;
    height: 300px;
  }
</style>
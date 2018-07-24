<template>
    <div>
        <div id="barChart" style="height:400px;width:100%"></div>
    </div>
</template>
<style scoped>

</style>
<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
    this.drawLine();
  },
  methods: {
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('barChart'))
        // 绘制图表
        myChart.setOption({
            title : {
                text: 'bar图表———同名数量统计',
                x:'center'
            },
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [120, 200, 150, 80, 70, 110, 130],
                type: 'bar'
            }]

        });
    }
  }
}
</script>


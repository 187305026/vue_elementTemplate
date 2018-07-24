<template>
    <div>
        <div id="radarChart" style="height:400px;width:100%"></div>
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
        let myChart = this.$echarts.init(document.getElementById('radarChart'))
        // 绘制图表
        myChart.setOption({
            
    title: {
        text: 'radar——多雷达图'
    },
    tooltip: {
        trigger: 'axis'
    },
    radar: [
        {
            indicator: [
                {text: '品牌', max: 100},
                {text: '内容', max: 100},
                {text: '可用性', max: 100},
                {text: '功能', max: 100},
            ]
        }
    ],
    series: [
        {
            type: 'radar',
             tooltip: {
                trigger: 'item'
            },
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data: [
                {
                    value: [60,73,85,40],
                    name: '某软件'
                }
            ]
        }
    ]

        });
    }
  }
}
</script>


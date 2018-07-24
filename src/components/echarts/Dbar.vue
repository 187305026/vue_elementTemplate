<template>
    <div>
        <div id="dbarChart" style="height:400px;width:100%"></div>
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
        let myChart = this.$echarts.init(document.getElementById('dbarChart'))
        // 绘制图表
       
        myChart.setOption({
            
    // tooltip : {
    //     formatter: "{a} <br/>{b} : {c}%"
    // },
    // toolbox: {
    //     feature: {
    //         restore: {},
    //         saveAsImage: {}
    //     }
    // }, //保存为图片
    series: [
        {
            name: '业务指标',
            type: 'gauge',
            detail: {formatter:'{value}%'},
            data: [{value: 50, name: '完成率'}]
        }
    ]

        });
    }
  }
}
</script>


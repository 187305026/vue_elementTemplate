<template>
    <div >
        <!-- <v-pageTitle vtitle="BasicCharts"></v-pageTitle> -->


        <el-row :gutter="20">
            <el-col :xs="24" :sm="24" :md="8" :lg="8">
                <el-card class="box-card">
                    <barChart></barChart>
                </el-card>
            </el-col>
            <el-col :xs="24" :sm="24" :md="8" :lg="8">
                <el-card class="box-card">
                    <lineChart></lineChart>
                </el-card>
            </el-col>
            <el-col :xs="24" :sm="24" :md="8" :lg="8">
                <el-card class="box-card">
                   <radarChart></radarChart>
                </el-card>
            </el-col>
        </el-row>

        <el-row :gutter="20">
            <el-col :xs="24" :sm="24" :md="12" :lg="12">
                <el-card class="box-card">
                    <pieChart></pieChart>
                </el-card>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="12">
                <el-card class="box-card">
                    <DbarChart></DbarChart>
                </el-card>
            </el-col>
            
        </el-row>



        


    </div>



</template>

<script>
    // import vPageTitle from '../common/pageTitle.vue';
    import pieChart from '../echarts/piechart.vue';
    import barChart from '../echarts/barchart.vue';
    import lineChart from '../echarts/linechart.vue';
    import radarChart from '../echarts/radarchart.vue';
    import DbarChart from '../echarts/Dbar.vue';
   
    export default {
        components:{
            pieChart,lineChart,barChart,radarChart,DbarChart
        },
        methods: {      
        }
    }
</script>

<style scoped>
    .el-col{
        margin-bottom:16px;
    }
    .material-icons{
        font-size:80px;
        color:#ddd;
    }
   
    .cart-string{
        height:100px;
        padding-top:10px;
        font-size:1.1rem;
        
    }
    
 
    
</style>
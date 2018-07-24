<template>
    <div >
        <!-- <v-pageTitle vtitle="BasicCharts"></v-pageTitle> -->


        <el-row :gutter="20">
            <el-col :xs="24" :sm="24" :md="8" :lg="8">
                <el-card class="box-card">
                    <BaseTables></BaseTables>
                </el-card>
            </el-col>
            <el-col :xs="24" :sm="24" :md="8" :lg="8">
                <el-card class="box-card">
                    <ZebraTables></ZebraTables>
                </el-card>
            </el-col>
            <el-col :xs="24" :sm="24" :md="8" :lg="8">
                <el-card class="box-card">
                   <stateTables></stateTables>
                </el-card>
            </el-col>
        </el-row>

        <el-row :gutter="20">
            <el-col :xs="24" :sm="24" :md="12" :lg="12">
                <el-card class="box-card">
                    <multistage></multistage>
                </el-card>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="12">
                <el-card class="box-card">
                    <sortTables></sortTables>
                </el-card>
            </el-col>
            
        </el-row>
        <el-row :gutter="20">
            <el-col :xs="24" :sm="24" :md="12" :lg="12">
                <el-card class="box-card">
                    <openTables></openTables>
                </el-card>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="12">
                <el-card class="box-card">
                    <indexTables></indexTables>
                </el-card>
            </el-col>
            
        </el-row>


        


    </div>



</template>

<script>
    import BaseTables from '../tables/BaseTables.vue'
    import ZebraTables from '../tables/ZebraTables.vue'
    import stateTables from '../tables/stateTables.vue'
    import multistage from '../tables/multistageTables.vue'
    import sortTables from '../tables/sortTables.vue'
    import openTables from '../tables/openTables.vue'
    import indexTables from '../tables/indexTables.vue'
    export default {
        components:{
            BaseTables,ZebraTables,stateTables,multistage,sortTables,openTables,indexTables
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
<template>
    <div >

        <el-row :gutter="20">
            <el-col :xs="24" :sm="24" :md="24" :lg="24">
                <el-card class="box-card">
                    <typical></typical>
                </el-card>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :xs="24" :sm="24" :md="24" :lg="24">
                <el-card class="box-card">
                    <lineform></lineform>
                </el-card>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :xs="24" :sm="24" :md="24" :lg="24">
                <el-card class="box-card">
                    <FormValidation></FormValidation>
                </el-card>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :xs="24" :sm="24" :md="24" :lg="24">
                <el-card class="box-card">
                    <customform></customform>
                </el-card>
            </el-col>
        </el-row>
    </div>



</template>

<script>
    import typical from '../form/formlayouts/typicalform.vue';
    import lineform from '../form/formlayouts/lineform.vue';
    import FormValidation from '../form/formlayouts/FormValidation.vue';
    import customform from '../form/formlayouts/customform.vue';
    
    export default {
        components:{
            typical,lineform,FormValidation,customform
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
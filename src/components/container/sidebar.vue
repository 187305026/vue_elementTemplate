<template>
    <div class="sidebar">
        <el-menu :default-active="onRoutes" class="el-menu-vertical-demo"  background-color="#324157" text-color="#bfcbd9" theme="dark" unique-opened router>
            <el-menu-item index="dashboard">
               
                    <span class="sb-icon"><i class=""></i></span>
                    <span class="sb-cn">主页</span>
            </el-menu-item>

            <el-submenu index="2">
                <template slot="title">
               
                    <span class="sb-icon"><i class=""></i></span>
                    <span class="sb-cn">Components</span>
                 
                </template>
                <el-menu-item index="EditorPage">Editor</el-menu-item>
                <el-menu-item index="MarkdownPage">Markdown</el-menu-item>
                <el-menu-item index="todolist">代办事项列表</el-menu-item>
                     
                
            </el-submenu>

            <el-submenu index="3">
                <template slot="title">
                    <span class="sb-icon"><i class=""></i></span>
                    <span class="sb-cn">charts</span>
                </template>
                <el-menu-item index="basicechart">图表</el-menu-item>
            </el-submenu>

            <el-submenu index="4">
                <template slot="title">
                    <span class="sb-icon"><i class=""></i></span>
                    <span class="sb-cn">表单</span>
                </template>
                <el-menu-item index="FormInput">表单输入</el-menu-item>
                <el-menu-item index="FormLayouts">表单布局</el-menu-item>
            </el-submenu>

            <el-submenu index="5">
                <template slot="title">
                    <span class="sb-icon"><i class=""></i></span>
                    <span class="sb-cn">统计表</span>
                </template>
                <el-menu-item index="tables">基本统计表</el-menu-item>
                
            </el-submenu>
            <el-submenu index="6">
                <template slot="title">
                    <span class="sb-icon"><i class=""></i></span>
                    <span class="sb-cn">页面</span>
                </template>
                <el-menu-item index="login">登录</el-menu-item>
                <el-menu-item index="reg">注册</el-menu-item>
                <el-menu-item index="forget">忘记密码</el-menu-item>
                <el-menu-item index="notFind">404</el-menu-item>
                <el-menu-item index="error">错误提示</el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>
<script>
    export default {
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        }
    }
</script>
<style>
    .sidebar{
        display: block;
        position: absolute;
        width: 200px;
        left: 0;
        top: 66px;
        bottom:0;
       
    }
    .sidebar > ul {
        height:100%;
        
    }
   .el-menu-item, .el-submenu__title{
       font-size:14px;
   }
    .material-icons {font-size:12px;}
</style>

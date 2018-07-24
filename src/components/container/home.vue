<template>
    <div>
         <zHeader></zHeader>
         <zSidebar></zSidebar> 
         <div class="content">
            <transition name="move" mode="out-in"><router-view></router-view></transition>
        </div>  
    </div>
</template>
<script>
import zHeader from './header'
import zSidebar from './sidebar'
export default {
    components:{
        zHeader,zSidebar
    }
}
</script>
<style>

.el-header{
    position: fixed;
    box-sizing: border-box;
    width: 100%;
    height: 66px;
    font-size: 14px;
    line-height: 66px;
    background-color: #324157;
    box-shadow: 2px 0 3px rgba(0,0,0,.5);
    z-index: 1000;
    padding: 0;
    overflow: hidden;
    color: #bfcbd9;
}
  
  .el-aside {
    background-color: #324157;
    color: #bfcbd9;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
    .el-container{height: 100%;}
</style>
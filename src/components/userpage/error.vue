<template>
    <div id="hh100">
        <el-row :gutter="20">
             <el-col :span="8" :offset="8">
                <div class="grid-content">
                    <el-row>
                        <el-col :span="12" :offset="6">
                            <i class="el-icon-error iconSize"></i>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col><hr></el-col>
                    </el-row>
                    <el-row>
                        <h3 class="Zcenter">
                            好像出错了呀！！！
                        </h3>
                    </el-row>
                </div>
             </el-col>
        </el-row>
    </div>
</template>

<style scoped>
@import url('../../assets/css/rotate');
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
}
.iconSize{font-size: 300px}
.Z409EFF {
  color: #409eff;
}
.wid100 {
  width: 100%;
}
body {
  background-color: #f2f2f2;
}
.Zcenter{text-align: center}
.Zleft{text-align: left}
.Zright{text-align: right}
hr{margin-top:7px;
    *margin: 0;
    border: 0;
    background-color: #009688; 
    height: 5px}
h3{
    color: #009688;
}

</style>
<script>
import "../../assets/js/canvas-particle.js"; //引用粒子效果
export default {
  data() {
    return {};
  },
  methods: {},
  mounted: function() {
    let bodyHeight = document.body.clientHeight;
    let mainHeight = document.getElementsByClassName("grid-content")[0]
      .offsetHeight;
    let reduce = (bodyHeight - mainHeight-100) / 2;
    document.getElementsByClassName("grid-content")[0].style.marginTop =
      reduce + "px";
  }
};
</script>

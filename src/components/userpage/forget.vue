<template>
    <div id="hh100">
                <el-row :gutter="20">
                    <el-col :span="8" :offset="8">
                        <div class="grid-content">
                            <el-row type="flex" class="row-bg" justify="space-between">
                                <el-col :span="8" :offset="8"><div class="grid-content Zcenter"><h3>elementAdmin-forget</h3></div></el-col>
                            </el-row>
                            <el-row type="flex" class="row-bg" justify="space-between">
                                <el-col :span="18" :offset="3">
                                    <div class="grid-content Zcenter">
                                    
                                        <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" class="demo-ruleForm">
                                            <el-form-item prop="pass">
                                                <el-input type="text" v-model="ruleForm2.pass" auto-complete="off" placeholder="用户名">
                                                    <i slot="prefix" class="iconfont icon-kefuyouxian"></i>
                                                </el-input>
                                            </el-form-item>
                                            <el-row>
                                                <el-col :span="12">
                                                    <el-form-item prop="z_code">
                                                        <el-input type="text" v-model="ruleForm2.pass" auto-complete="off" placeholder="验证码">
                                                            <i slot="prefix" class="iconfont icon-securityCode-b"></i>
                                                        </el-input>
                                                    </el-form-item>
                                                </el-col>
                                                 <el-col :span="2">&nbsp</el-col>
                                                <el-col :span="10" >
                                                    <el-form-item>
                                                        <el-button id="countdowns" class="wid100" @click="Countdown()">获取验证码</el-button>
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>
                                            <el-form-item>
                                                <el-button class="wid100" type="primary" @click="submitForm('ruleForm2')">找回密码</el-button>
                                            </el-form-item>
                                            
                                        </el-form>
                                    </div>
                                </el-col>
                            </el-row>
                        </div>
                    </el-col>
                </el-row>
        

    </div>
</template>


<style>
@import "../../../static/fonts/iconfont.css"; 
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
  .Zcenter{text-align: center}
  .Zleft{text-align: left}
  .Zright{text-align: right}
  .Z409EFF{color: #409EFF;}
  .Zsize{font-size: 14px}
  .wid100{
      width: 100%
  }
  body {
    background-color: #f2f2f2;;
}
/* body {
    background-image: url('../../assets/img/Starry.jpg');
} */
</style>
<script>
import '../../assets/js/canvas-particle.js' //引用粒子效果
export default {
    data() {
      return {
          checked: true,
        ruleForm2: {
          pass: '',
          z_code: ''
        },
        rules2: {
          pass: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
          ],
          z_code: [
           { required: true, message: '验证码', trigger: 'blur' },
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
             this.$router.push({//你需要接受路由的参数再跳转
                    path: '/'
                });
          } else {
              this.$message.error("未找回密码");
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      //   倒计时start
        Countdown(){
           var countdown = 60;
            function settime(obj) {
                // alert(obj)
                if (countdown == 0) {
                    $(obj).removeAttr("disabled");
                    $(obj).text("获取验证码");
                    countdown = 60;
                    return;
                } else {
                    $(obj).attr("disabled", true);
                    $(obj).text(countdown +'s'+'后重发');
                    countdown--;
                }
                setTimeout(function () {
                    settime(obj)
                }, 1000)
            } 
            let byid = document.getElementById("countdowns")
            settime(byid)
        }
    // 倒计时end
    },
    mounted:function() {
        let bodyHeight = document.body.clientHeight
        let mainHeight = document.getElementsByClassName("grid-content")[0].offsetHeight
        let reduce = (bodyHeight-mainHeight-100)/2
        document.getElementsByClassName("grid-content")[0].style.marginTop = reduce +'px'
    }
   
}

</script>

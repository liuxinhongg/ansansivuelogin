<template>
  <header id="top" class="bg-zw-blue row">
    <div class="col-xs-2">
      <img src="../assets/asideLogo.png" alt="" class="tu">
    </div>
    <div class="user" id="user_1"></div>
    <div class="tuichu">
      <div class="pull-right logout"   title="退出登录">
      <span class="glyphicon glyphicon-off lh"  @click="open2"></span>
    </div>
    </div>
     <div class="Modify">
        <div class="pull-right logouts" title="修改密码">
       <span class=" el-icon-edit-outline  lh"  @click="ModifyPassword"></span>
    </div>
    </div>
    <el-dialog
  title="修改密码"
  :visible.sync="dialogVisible"
  width="30%">
  <span><el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
  <el-form-item label="初始密码">
    <el-input type="password" v-model="ruleForm2.oldPassword"></el-input>
  </el-form-item>
   <el-form-item label="修改密码" prop="pass">
    <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
  </el-form-item>
  <el-form-item label="确认密码" prop="checkPass">
    <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
  </el-form-item>

</el-form></span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" :plain="true" @click="determination('ruleForm2')">确 定</el-button>
  </span>
</el-dialog>
    
  </header>
</template>

<script>
  export default {
    name: "top",

    data(){

         var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
         
      return{
        user:"",
        dialogVisible:false,
        form:{},
          ruleForm2: {
          pass: '',
          checkPass: '',
          age: ''
        },
         rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ]
        }
      

      }
    },



  created(){
   $(document).ready(function(){
    $('#user_1').load('/apis/front/userLogin/loadUserInfo');
       
})
      
    

  },
      methods: {

          submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },

      open2() {
        this.$confirm('您确定要退出登陆, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
           this.axios.get("/apis/front/userLogin/logout")
            .then(response => {
               
              if (response.data.code==1){

                  this.$message({
                  type: 'success',
                  message: response.data.message
                  
                });
                 this.$router.push({name:"login"})

                
              }
            });


        })
      },
      ModifyPassword(){
        this.dialogVisible=true
        this.ruleForm2={}


      },
      determination(formName){
        var that =this
    
        if (that.ruleForm2.pass!=that.ruleForm2.checkPass) {
          return
          
        }
         
         that.axios.get("/apis/admin/user/modifyPassword",{
           params:{
            oldPassword: that.ruleForm2.oldPassword,
            newPassword:that. ruleForm2.pass,

           }
           
         })
            .then(response => {
            
              if (response.data.code=="1") {
                        that.$message({
                  message: response.data.message,
                  type: 'success'
                });
                that.dialogVisible=false
                that.$refs[formName].resetFields();
                
              }else if (response.data.code=="0") {  
                that.$message.error(response.data.message);
                return
                that.dialogVisible=true
                
              }

            })
              

      }
    }
  }
</script>



<style scoped>
header{
  width: 100%;
  height: 60px;
  background:#0F4F7D;
}
.user{
  width: 30%;
  height: 60px;
  float: left;
  font-size: 16px;
  line-height: 60px;
  font-weight: bold;
  color: #fff;
}
.tu{
  height: 50px;
  margin-top: 3px;
}
.tuichu{
  float: right;
margin-left: 30px;
  margin-top: 20px;
  margin-right: 4%;
}
.Modify{
  float: right;
  margin-top:16px;
}
  .logout {
    font-size: 25px;
    cursor: pointer;
  }
  .logouts {
    font-size: 28px;
    cursor: pointer;
  }
  .lh{
    color: #fff;
  }
/* #top{position: fixed; top: 0;height: 90px;width: 100%;} */
</style>

<template>
    <div id="login" @keyup.enter="login">
        <div class="bg bg-zw-grey">
           <img src="./assets/20180705213933.jpg" alt="" class="boy"> 
        </div>
        <div id="loginBox">
            <div class="bg-zw-blue">
                <img src="./assets/asideLogo.png" alt="" class="img">
            </div>
            <div class="form-horizontal">
                <div class="form-group">
                    <!--<label for="username" class="col-sm-2 control-label">用户名</label>-->
                    <div class="col-sm-offset-2 col-sm-8  col-xs-10 col-xs-offset-1">
                        <input type="text" class="form-control" id="username" placeholder="用户名" v-model="username" @focus="nameFocus">
                    </div>
                    <div class="col-sm-offset-2 col-sm-8" v-if="isNameE">
                        <label class="text-danger">{{nameLabel}}</label>
                    </div>  
                </div>
                <div class="form-group">
                    <!--<label for="password" class="col-sm-2 control-label">密码</label>-->
                    <div class="col-sm-offset-2 col-sm-8 col-xs-10 col-xs-offset-1">
                        <input type="password" class="form-control" id="password" placeholder="密码" v-model="password">
                    </div>
                    <div class="col-sm-offset-2 col-sm-8" v-if="isPwdE">
                        <label class="text-danger">{{pwdLabel}}</label>
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-offset-2 col-sm-8 col-xs-10 col-xs-offset-1">
                        <button type="button" class="btn btn-block btn-primary" :plain="true" @click="login">登录</button>
                    </div>
                </div>
            </div>
        </div>

            <el-dialog
            title="请选择角色"
            :visible.sync="dialogVisible"
            width="30%">
            <span> 
                 <el-radio-group v-model="role">
                <el-radio v-for="item in list"  :label="item.id" :key="item.id">{{item.name}}</el-radio>
                </el-radio-group>
          </span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false" size='mini'>取 消</el-button>
                <el-button type="primary" :plain="true" @click="landing" size='mini'>确 定</el-button>
            </span>
            </el-dialog>
    </div>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            dialogVisible:false,
            username: "",
            password: "",
            nameLabel: "",
            pwdLabel: "",
            isNameE: false,
            isPwdE: false,
            list:[],
            role:"",
        };
    },
    methods: {
        login() {

             if (this.username === "") {
                this.isNameE = true;
                this.nameLabel = "用户名不能为空";
                return
            } else if (this.password === "") {
                this.isPwdE = true;
                this.pwdLabel = "密码不能为空";
                return
            }
            var that = this;
            that.axios
                .get("/apis/front/userLogin/login", {
                    params: {
                        userName: that.username,
                        password: that.password,
                    }
                })
                .then(function(response) {
                      console.log(response.data);
                    that.list=response.data.roleList
                  
                    if (response.data.code==1) {
                        that.dialogVisible=true   
                    }else if (response.data.code==0) {
                         that.$message.error('用户名密码错误');
                    }
                })
               
           
        },
        landing(){
            var that =this
            that.dialogVisible=false
              that.axios
                .get("/apis/front/userLogin/saveRole", {
                    params: {
                        roleId:that.role
                    }
                })
                .then(response => {
                     if (response.data.code == "1") {
                         that.$message({
                            message: '登陆成功',
                            type: 'success'
                        }); 
                        that.$router.push({name:"project"})   
                     }else if (response.data.code == 0) {
                         that.$message.error('登陆失败');
                  }

                })
                  

        },
        nameFocus() {
            this.username = "";
            this.isNameE = false;
        }
    },

};
</script>
<style scoped>
#login {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
.bg {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
}
canvas {
    width: 100%;
    height: 100%;
}
#loginBox {
    width: 400px;
    height: 300px;
    border: 1px solid #bbb;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -150px;
    margin-left: -200px;
      background:#f8f8f8;
      border-radius: 8px;
     box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
      overflow: hidden;
      opacity:0.9;
}
#loginBox > div:first-child {
    margin-bottom: 35px;
}
.form-horizontal .form-group {
    margin-right: 0px;
    margin-left: 0px;
}
@media only screen and (max-width: 380px) {
    #loginBox {
        width: 360px;
        height: 280px;
        border: 1px solid #bbb;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -140px;
        margin-left: -180px;
    }
}
@media only screen and (max-width: 320px) {
    #loginBox {
        width: 300px;
        height: 240px;
        border: 1px solid #bbb;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -106px;
        margin-left: -150px;
      
    }
    #loginBox > div[data-v-9fcfedee]:first-child {
        margin-bottom: 15px;
    }
}
.img{
    height: 90%;
    padding-top: 5px;
    padding-bottom: 5px;
}
.boy{
    width: 100%;
    height: 100%;
}
</style>
